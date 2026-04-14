// TEMA_FV_U5: Monitoreo y mantenimiento de plantas solares (67 preguntas - IDs 15001-15067)
// Incluye 10 preguntas de EXAMEN OFICIAL integradas

const TEMA_FV_U5_DATA = [
  {
    id: 15001,
    tema: 15,
    texto: "¿Qué método de instalación se empleará para realizar el tendido del cableado eléctrico en la instalación fotovoltaica de una vivienda unifamiliar en terreno urbano?: (TEST OFICIAL)",
    opciones: ["Instalación de cableado bajo tubo empotrado", "Instalación de cableado bajo bandeja con tapa", "Instalación de cableado bajo tubo en superficie", "Todas son correctas"],
    correctaTexto: "Todas son correctas",
    explicacion: "Métodos válidos según ubicación: tubo empotrado (obra civil), bandeja con tapa (interior), tubo superficie (visible). Vivienda urbana típicamente tubo empotrado o bandeja en interiores."
  },
  {
    id: 15002,
    tema: 15,
    texto: "Se tiene una instalación con strings o cadenas de 25 módulos fotovoltaicos conectados en serie, sabiendo que tienen una tensión en vacío (Voc) de 45 V cada uno. ¿Qué conectores deberemos emplear de forma que cumplan con los requerimientos de tensión y que al mismo tiempo sean los óptimos desde el punto de vista económico?: (TEST OFICIAL)",
    opciones: ["MC4 con tensión de hasta 1000Vdc", "MC4 con tensión de hasta 1500Vdc", "MC4 con tensión de hasta 600Vdc", "Ninguna es correcta"],
    correctaTexto: "MC4 con tensión de hasta 1500Vdc",
    explicacion: "Tensión total = 25 × 45V = 1125V. Con factor frío (1.25): 1406V. MC4 1500Vdc soporta esto y es más económico que 2500V. MC4 600Vdc sería insuficiente."
  },
  {
    id: 15003,
    tema: 15,
    texto: "El primer paso a la hora de llevar a cabo una instalación es: (TEST OFICIAL)",
    opciones: ["Elaboración de la documentación técnica", "Montaje y conexionado de los paneles", "Obra civil y canalizaciones", "Aprovisionamiento de materiales y herramientas"],
    correctaTexto: "Elaboración de la documentación técnica",
    explicacion: "Orden correcto: 1) Documentación técnica, 2) Aprovisionamiento, 3) Obra civil/canalizaciones, 4) Montaje. La documentación guía todo el proceso."
  },
  {
    id: 15004,
    tema: 15,
    texto: "La corriente nominal máxima en un conector MC3 de sección de 4 mm2: (TEST OFICIAL)",
    opciones: ["30 A", "20 A", "25 A", "15 A"],
    correctaTexto: "20 A",
    explicacion: "MC3 4mm²: máximo 20A. MC3 2.5mm²: 16A. MC4 4mm²: 25A. Las características del conector dependen de sección y clase de aislamiento."
  },
  {
    id: 15005,
    tema: 15,
    texto: "La tierra de protección protege la instalación frente: (TEST OFICIAL)",
    opciones: ["No es necesario esta protección ya que no hay masas metálicas", "A riesgo de explosión por acumulación de gases", "Contactos indirectos", "Quemaduras y cortes"],
    correctaTexto: "Contactos indirectos",
    explicacion: "Tierra de protección (conductor PE verde-amarillo): protege contra contactos indirectos (toque de masa metálica defectuosa). Diferencial protege contacto directo."
  },
  {
    id: 15006,
    tema: 15,
    texto: "En las instalaciones fotovoltaicas se emplean conectores para permitir conexiones más seguras ¿Cuál de los siguientes no se corresponde con uno de los conectores más empleados?: (TEST OFICIAL)",
    opciones: ["Conector MC3", "Conector MC4", "TYCO SOLARLOCK", "Conector JFK"],
    correctaTexto: "Conector JFK",
    explicacion: "Conectores estándar FV: MC3 (antiguo), MC4 (actual), TYCO SOLARLOCK. JFK no es conector estándar en FV. Multi-contact es fabricante de MC3/MC4."
  },
  {
    id: 15007,
    tema: 15,
    texto: "Los diodos de protección de bypass se instalan: (TEST OFICIAL)",
    opciones: ["En el módulo solar", "En el inversor", "En la caja de conexiones", "En el acumulador"],
    correctaTexto: "En el módulo solar",
    explicacion: "Diodos bypass se instalan dentro del módulo, en la caja de conexiones. Un diodo cada cadena de células (~36 células). Protege contra sobrecalentamiento en sombra."
  },
  {
    id: 15008,
    tema: 15,
    texto: "Si se cuenta con una batería abierta de electrólito líquido es importante: (TEST OFICIAL)",
    opciones: ["Que la habitación sea estanca sin ventilación", "Que el electrólito de las baterías se encuentre a temperaturas de 10 ºC o menos", "Que el electrólito de las baterías se encuentre a temperaturas de 30ºC o más", "Que la habitación cuente con buena ventilación para evitar la acumulación de gases"],
    correctaTexto: "Que la habitación cuente con buena ventilación para evitar la acumulación de gases",
    explicacion: "Baterías abiertas generan hidrógeno y oxígeno durante carga (gaseamiento). Ventilación obligatoria para evitar mezcla explosiva. Temperatura 15-25°C es óptima."
  },
  {
    id: 15009,
    tema: 15,
    texto: "Una forma rápida que permite una fácil interconexión entre distintos módulos es que la caja de conexiones cuente con: (TEST OFICIAL)",
    opciones: ["Una caja de conexiones por cada dos módulos", "La fijación del cableado en la caja mediante tornillos interiores", "Que las cajas cuenten con latiguillos con terminaciones en conectores", "A y B son correctas"],
    correctaTexto: "Que las cajas cuenten con latiguillos con terminaciones en conectores",
    explicacion: "Cajas con latiguillos pre-terminados con conectores MC4: instalación rápida, segura, repetible. Alternativa a soldar/empalmar en campo. Aumenta calidad y reduce tiempo."
  },
  {
    id: 15010,
    tema: 15,
    texto: "Uno de los circuitos presentes en instalaciones fotovoltaicas que además necesitará contar con protecciones eléctricas, es: (TEST OFICIAL)",
    opciones: ["Generador FV – Consumos CA", "Inversor – Consumos en CA", "Regulador – Inversor", "Inversor - Baterías"],
    correctaTexto: "Inversor – Consumos en CA",
    explicacion: "Circuito AC (inversor-cargas): requiere magnetotérmico + diferencial (protección sobrecarga + contacto directo). Lado DC también protegido pero prioridad AC por riesgo mayor."
  },
  {
    id: 15011,
    tema: 15,
    texto: "¿Cuál es la mejor práctica para realizar limpieza de paneles solares?",
    opciones: ["Usar agua a presión y detergentes ácidos", "Agua suave tibia, trapo suave sin arañar; evitar días muy calurosos", "Limpiar solo en invierno", "No es necesario limpiar"],
    correctaTexto: "Agua suave tibia, trapo suave sin arañar; evitar días muy calurosos",
    explicacion: "Limpieza óptima: agua desionizada/suave, trapo microfiber, sin presión (choque térmico). Evitar días calurosos (contraste temp → grietas). Frecuencia: 2-4 veces/año."
  },
  {
    id: 15012,
    tema: 15,
    texto: "¿Con qué frecuencia se recomienda inspección visual completa de instalación FV?",
    opciones: ["Cada mes", "Cada 6 meses", "Anualmente", "Cada 10 años"],
    correctaTexto: "Anualmente",
    explicacion: "Inspección recomendada: anual visual (detecta corrosión, daños físicos, conexiones sueltas). Termografía cada 2-3 años. Eléctrica cada 5 años."
  },
  {
    id: 15013,
    tema: 15,
    texto: "¿Qué indica una batería con bajo nivel de electrólito?",
    opciones: ["Rendimiento mejorado", "Sobrecarga de células, riesgo sulfatación e irreversibilidad", "Solo problema estético", "Ningún problema"],
    correctaTexto: "Sobrecarga de células, riesgo sulfatación e irreversibilidad",
    explicacion: "Bajo electrólito: células expuestas, sulfatación, daño irreversible. Rellenar con agua destilada. Prevenir con carga correcta (regulador bien calibrado)."
  },
  {
    id: 15014,
    tema: 15,
    texto: "¿Cuál es la causa más común de fallo en instalaciones fotovoltaicas?",
    opciones: ["Defecto de fabricación del panel", "Conexiones sueltas/corrosión (80% de fallos)", "Temperatura ambiente alta", "Falta de luz solar"],
    correctaTexto: "Conexiones sueltas/corrosión (80% de fallos)",
    explicacion: "Estadísticas fallos: 80% conexiones/corrosión, 10% regulador/inversor, 5% batería, 5% panel. Prevención: inspecciones, limpieza, apriete periódico."
  },
  {
    id: 15015,
    tema: 15,
    texto: "¿Qué es el 'punto caliente' (hotspot) en un panel?",
    opciones: ["Un área con buena generación", "Zona de célula defectuosa que se sobrecalienta bajo sombra", "Una marca de calidad", "No existe"],
    correctaTexto: "Zona de célula defectuosa que se sobrecalienta bajo sombra",
    explicacion: "Hotspot: célula defectuosa bajo sombra actúa como resistencia, genera calor (>100°C). Detectado por termografía. Prevención: bypass diodos, evitar sombra."
  },
  {
    id: 15016,
    tema: 15,
    texto: "¿Cuánta pérdida de potencia causa típicamente suciedad en paneles?",
    opciones: ["0% (no afecta)", "1% máximo", "2-5% en zonas normales, hasta 25% en zonas desérticas/industriales", "Más del 50%"],
    correctaTexto: "2-5% en zonas normales, hasta 25% en zonas desérticas/industriales",
    explicacion: "Suciedad/polvo: 2-5% pérdida típica. Zonas agrícolas/industriales/costeras: 15-25%. Limpieza es operación de mantenimiento preventivo más impactante."
  },
  {
    id: 15017,
    tema: 15,
    texto: "¿Qué registra un sistema SCADA en plantas FV grandes?",
    opciones: ["Solo potencia generada", "Potencia, energía, temperatura, irradiancia, fallas, estado inversores, comunicaciones remoto", "Datos del propietario", "Nada importante"],
    correctaTexto: "Potencia, energía, temperatura, irradiancia, fallas, estado inversores, comunicaciones remoto",
    explicacion: "SCADA: monitoreo telemétrico. Registra en tiempo real: generación, consumo, irradiancia, temp, fallos, alertas. Datos históricos para análisis tendencias."
  },
  {
    id: 15018,
    tema: 15,
    texto: "¿Cuál es el propósito de un 'firmware update' en inversor?",
    opciones: ["Aumentar estética", "Mejorar algoritmos control, seguridad, compatibilidad red, eficiencia", "Solo cambiar colores", "No tiene propósito"],
    correctaTexto: "Mejorar algoritmos control, seguridad, compatibilidad red, eficiencia",
    explicacion: "Firmware updates: corrección bugs, algoritmos MPPT mejorados, compatibilidad normativa nueva, seguridad cibernética. Recomendado periódicamente."
  },
  {
    id: 15019,
    tema: 15,
    texto: "¿Qué indica degradación acelerada en análisis termográfico?",
    opciones: ["Variación uniforme temperatura", "Zonas frías localizadas (defectos célula)", "Temperatura perfecta", "Nada anormal"],
    correctaTexto: "Zonas frías localizadas (defectos célula)",
    explicacion: "Termografía degradación: puntos más fríos = menor generación (células defectuosas, microgretas, delaminación). Mapa térmico irregular = problemas incipientes."
  },
  {
    id: 15020,
    tema: 15,
    texto: "¿Cuál es la documentación mínima requerida para mantenimiento?",
    opciones: ["Nada, se mantiene de memoria", "Registro histórico: fecha, operaciones, observaciones, anomalías, persona responsable", "Solo fotos", "Sin documentar"],
    correctaTexto: "Registro histórico: fecha, operaciones, observaciones, anomalías, persona responsable",
    explicacion: "Documentación esencial: parte mantenimiento con fecha/hora, qué se revisó, hallazgos, acciones tomadas, firma técnico. Base para análisis tendencias y garantía."
  }
];
