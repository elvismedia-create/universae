(function () {
  const DB_NAME = 'universae_local_pdfs';
  const DB_VERSION = 1;
  const STORE_NAME = 'pdfs';
  const MANIFEST_KEY = 'universae_local_pdf_manifest';

  const TOPIC_ALIASES = {
    pestana5b: ['domotica', 'domoticas', 'domotica'],
    pestana6: ['distribucion', 'distribucion'],
    pestana7: ['telecom', 'telecomunicacion', 'telecomunicaciones', 'infraestructura', 'infraestructuras', 'ict'],
    pestana8: ['maquinas', 'maquina', 'electricas', 'motores', 'transformadores']
  };

  function normalizeText(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function openDb() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function saveBlob(key, blob) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).put(blob, key);
      tx.oncomplete = () => {
        db.close();
        resolve();
      };
      tx.onerror = () => {
        db.close();
        reject(tx.error);
      };
    });
  }

  async function getBlob(key) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const request = tx.objectStore(STORE_NAME).get(key);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
      tx.oncomplete = () => db.close();
    });
  }

  function loadManifest() {
    try {
      return JSON.parse(localStorage.getItem(MANIFEST_KEY) || '{}');
    } catch (error) {
      console.warn('No se pudo leer el índice local de PDFs:', error);
      return {};
    }
  }

  function saveManifest(manifest) {
    localStorage.setItem(MANIFEST_KEY, JSON.stringify(manifest));
  }

  function pdfKey(bid, idx) {
    return `${bid}:${idx}`;
  }

  function detectUnit(fileName) {
    const normalized = normalizeText(fileName);
    const match = normalized.match(/\bu\s*([0-9]{1,2})\b/) || normalized.match(/\bunidad\s*([0-9]{1,2})\b/);
    return match ? Number(match[1]) : null;
  }

  function detectBlock(fileName) {
    const normalized = normalizeText(fileName);
    let best = null;

    Object.entries(TOPIC_ALIASES).forEach(([bid, aliases]) => {
      const score = aliases.reduce((total, alias) => total + (normalized.includes(alias) ? 1 : 0), 0);
      if (score > 0 && (!best || score > best.score)) {
        best = { bid, score };
      }
    });

    return best ? best.bid : null;
  }

  function keywordSet(value) {
    const stopWords = new Set(['u', 'de', 'del', 'la', 'las', 'el', 'los', 'y', 'en', 'a', 'al', 'por', 'para', 'con', 'sus', 'una', 'un']);
    return normalizeText(value)
      .split(/\s+/)
      .filter(word => word.length > 2 && !stopWords.has(word));
  }

  function scoreTopic(fileName, block, unit) {
    const normalizedFileName = normalizeText(fileName);
    const aliases = TOPIC_ALIASES[block.bloque] || [];
    const aliasScore = aliases.reduce((total, alias) => total + (normalizedFileName.includes(alias) ? 4 : 0), 0);
    const topicName = block.asignaturas[unit] ? block.asignaturas[unit].nombre : '';
    const words = keywordSet(`${block.titulo_boton} ${topicName}`);
    const wordScore = words.reduce((total, word) => total + (normalizedFileName.includes(word) ? 1 : 0), 0);
    return aliasScore + wordScore;
  }

  function findBlockForUnit(unit) {
    if (typeof CONFIGURACION_CURSO === 'undefined') return null;
    const candidates = CONFIGURACION_CURSO.filter(b => TOPIC_ALIASES[b.bloque] && b.asignaturas[unit]);
    return candidates.length === 1 ? candidates[0].bloque : null;
  }

  function findBestBlockForFile(fileName, unit) {
    if (typeof CONFIGURACION_CURSO === 'undefined') return null;
    const candidates = CONFIGURACION_CURSO
      .filter(b => TOPIC_ALIASES[b.bloque] && b.asignaturas[unit])
      .map(block => ({ block, score: scoreTopic(fileName, block, unit) }))
      .sort((a, b) => b.score - a.score);

    if (!candidates.length || candidates[0].score < 2) return null;
    if (candidates[1] && candidates[0].score === candidates[1].score) return null;
    return candidates[0].block.bloque;
  }

  function identifyPdf(file) {
    const unit = detectUnit(file.name);
    if (!unit) return null;

    let bid = detectBlock(file.name);
    if (!bid) bid = findBestBlockForFile(file.name, unit);
    if (!bid) bid = findBlockForUnit(unit);
    if (!bid) return null;

    const block = typeof CONFIGURACION_CURSO !== 'undefined'
      ? CONFIGURACION_CURSO.find(b => b.bloque === bid)
      : null;

    if (!block || !block.asignaturas[unit]) return null;

    return {
      bid,
      idx: unit,
      key: pdfKey(bid, unit),
      subject: block.titulo_boton,
      topic: block.asignaturas[unit].nombre
    };
  }

  function getLocalPdfInfo(bid, idx) {
    const manifest = loadManifest();
    return manifest[pdfKey(bid, idx)] || null;
  }

  function getPdfButtonHtml(bid, idx) {
    const local = getLocalPdfInfo(bid, idx);
    const hasRemote = typeof PDF_T3_URLS !== 'undefined' && PDF_T3_URLS[bid] && PDF_T3_URLS[bid][idx];
    if (!local && !hasRemote) return '';

    const label = local ? '📄 Abrir PDF del iPad' : '📄 Ver PDF del tema';
    const title = local ? `PDF local: ${local.name}` : 'Abrir PDF online';

    return `
      <button class="btn-outline" title="${title}" onclick="abrirPdfTema('${bid}', ${idx})" style="text-align:center; display:block; color:#16a34a; border-color:#16a34a; font-weight:600;">
        ${label}
      </button>
    `;
  }

  async function openLocalPdf(bid, idx) {
    const key = pdfKey(bid, idx);
    const blob = await getBlob(key);
    if (!blob) return false;

    const url = URL.createObjectURL(blob);
    const opened = window.open(url, '_blank');
    if (!opened) window.location.href = url;
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    return true;
  }

  async function abrirPdfTema(bid, idx) {
    try {
      const openedLocal = await openLocalPdf(bid, idx);
      if (openedLocal) return;
    } catch (error) {
      console.warn('No se pudo abrir el PDF local:', error);
    }

    const fallback = typeof PDF_T3_URLS !== 'undefined' && PDF_T3_URLS[bid] && PDF_T3_URLS[bid][idx];
    if (fallback) {
      window.open(fallback, '_blank');
    } else if (typeof showToast === 'function') {
      showToast('error', 'PDF no encontrado', 'Importa los PDFs desde el iPad para este tema.');
    }
  }

  async function importLocalPdfs(files) {
    const list = Array.from(files || []).filter(file => file.type === 'application/pdf' || /\.pdf$/i.test(file.name));
    const manifest = loadManifest();
    const result = { imported: [], skipped: [] };

    for (const file of list) {
      const match = identifyPdf(file);
      if (!match) {
        result.skipped.push(file.name);
        continue;
      }

      await saveBlob(match.key, file);
      manifest[match.key] = {
        bid: match.bid,
        idx: match.idx,
        name: file.name,
        size: file.size,
        topic: match.topic,
        updatedAt: new Date().toISOString()
      };
      result.imported.push({ fileName: file.name, topic: match.topic });
    }

    saveManifest(manifest);
    return result;
  }

  function ensurePdfInput() {
    let input = document.getElementById('input-pdfs-locales');
    if (input) return input;

    input = document.createElement('input');
    input.id = 'input-pdfs-locales';
    input.type = 'file';
    input.accept = 'application/pdf,.pdf';
    input.multiple = true;
    input.style.display = 'none';
    input.addEventListener('change', async () => {
      const button = document.getElementById('btn-importar-pdfs');
      const originalText = button ? button.textContent : '';
      if (button) {
        button.disabled = true;
        button.textContent = 'Importando...';
      }

      try {
        const result = await importLocalPdfs(input.files);
        const detail = result.skipped.length
          ? `${result.imported.length} importados. ${result.skipped.length} sin identificar.`
          : `${result.imported.length} PDFs importados y asignados.`;

        if (typeof showToast === 'function') {
          showToast(result.imported.length ? 'success' : 'error', 'Importación de PDFs', detail);
        } else {
          alert(detail);
        }

        if (window.currentBid && typeof filtrarBloque === 'function') filtrarBloque(window.currentBid);
      } catch (error) {
        console.error('Error importando PDFs locales:', error);
        if (typeof showToast === 'function') showToast('error', 'Error importando PDFs', error.message);
      } finally {
        input.value = '';
        if (button) {
          button.disabled = false;
          button.textContent = originalText;
        }
      }
    });

    document.body.appendChild(input);
    return input;
  }

  function abrirImportadorPdfs() {
    ensurePdfInput().click();
  }

  window.PDF_LOCAL_STORE = {
    getLocalPdfInfo,
    getPdfButtonHtml,
    importLocalPdfs,
    abrirPdfTema,
    abrirImportadorPdfs
  };

  window.getPdfButtonHtml = getPdfButtonHtml;
  window.abrirPdfTema = abrirPdfTema;
  window.abrirImportadorPdfs = abrirImportadorPdfs;
})();
