// TEMA_FV_U6: Conexión a red e inversores (67 preguntas - IDs 16001-16067)
// Incluye 10 preguntas de EXAMEN OFICIAL integradas

const TEMA_FV_U6_DATA = [
  {
    id: 16001,
    tema: 16,
    texto: "El instrumento adecuado para verificar el electrólito de un acumulador es: (TEST OFICIAL)",
    opciones: ["Pinza amperimétrica", "Polímetro", "Juego de llaves", "Densímetro"],
    correctaTexto: "Densímetro",
    explicacion: "Densímetro: mide densidad electrólito (1.210-1.260 g/cm³ en baterías plomo-ácido). Indica estado carga: baja densidad = baja carga. Esencial en mantenimiento."
  },
  {
    id: 16002,
    tema: 16,
    texto: "Del análisis de la frecuencia de las averías, su origen y cualquier otra información relacionada con ellas se pueden extraer conclusiones que permitan reducir e incluso evitar su reparación, por eso es fundamental: (TEST OFICIAL)",
    opciones: ["Que se comuniquen vía oral al cliente", "Que los trabajadores realicen fotografías", "Que se registren en un parte para poder consultar a futuro", "Ninguna es correcta"],
    correctaTexto: "Que se registren en un parte para poder consultar a futuro",
    explicacion: "Registro fallos: historial permite identificar patrones, causas raíz, prevención. Base de datos fallos → predicción mantenimiento → reducción downtime."
  },
  {
    id: 16003,
    tema: 16,
    texto: "En instalaciones conectadas a red, es importante que en estructuras móviles: (TEST OFICIAL)",
    opciones: ["Se compruebe el nivel de electrólito", "Se compruebe el grado de inclinación y orientación", "Se compruebe que las luces indicadoras funcionan correctamente", "Se compruebe que todas las partes móviles están perfectamente lubricadas"],
    correctaTexto: "Se compruebe el grado de inclinación y orientación",
    explicacion: "Seguidores solares: verificación periódica de ángulo inclinación/azimut (motor puede desviarse). Mal posicionamiento = pérdida 5-10% energía. Calibración anual recomendada."
  },
  {
    id: 16004,
    tema: 16,
    texto: "En una instalación autónoma el usuario podrá realizar tareas de mantenimiento preventivo sobre el acumulador como: (TEST OFICIAL)",
    opciones: ["Comprobación visual que no existe sulfatación en bornes", "Que no existen elementos que puedan provocar cortocircuitos", "Que el nivel de electrólito es adecuado", "Todas las anteriores son correctas"],
    correctaTexto: "Todas las anteriores son correctas",
    explicacion: "Mantenimiento batería usuario: inspección visual bornes (sulfatos blancos = oxidación), ausencia objetos metálicos, nivel electrólito (agua destilada si baja). Prevención cortocircuitos."
  },
  {
    id: 16005,
    tema: 16,
    texto: "¿Cuál de las siguientes operaciones de mantenimiento será aquella que permita reducir las pérdidas y por tanto maximizar la producción fotovoltaica en mayor medida?: (TEST OFICIAL)",
    opciones: ["Revisar las conexiones entre los módulos fotovoltaicos", "Revisar y ajustar la estructura con los módulos fotovoltaicos", "Revisar y limpiar las canalizaciones por donde se encuentra tendido el cableado", "Limpiar los módulos fotovoltaicos, retirando la suciedad sobre los mismos"],
    correctaTexto: "Limpiar los módulos fotovoltaicos, retirando la suciedad sobre los mismos",
    explicacion: "Impacto máximo: limpieza paneles (2-5% ganancia). Otros: conexiones (1-2%), estructura (0.5%), canalizaciones (0.1%). Limpieza es operación prioritaria ROI."
  },
  {
    id: 16006,
    tema: 16,
    texto: "Las operaciones de mantenimiento en los sistemas de protección y medida incluyen las siguientes operaciones: (TEST OFICIAL)",
    opciones: ["Verificar el cableado ante posibles deterioros", "Comprobación del sistema de control de inyección y consumo", "Verificación de los fusibles, magnetotérmicos y diferenciales", "Todas las anteriores son correctas"],
    correctaTexto: "Todas las anteriores son correctas",
    explicacion: "Protecciones: verificar cableado (aislamiento), fusibles/magnetotérmicos (disparos falsos?), diferenciales (sensibilidad), contador (funcionamiento). Mantenimiento integral."
  },
  {
    id: 16007,
    tema: 16,
    texto: "Los fallos en el montaje en el regulador o inversor provocan: (TEST OFICIAL)",
    opciones: ["Un fallo interno por inversión de la polaridad o sobrecarga en el circuito", "Sobretensiones aguas abajo del regulador", "Durante el montaje no se suelen cometer fallos", "Corrosión en el sistema de fijación"],
    correctaTexto: "Un fallo interno por inversión de la polaridad o sobrecarga en el circuito",
    explicacion: "Fallos montaje: inversión polaridad (+ y - intercambiados) → destrucción inmediata. Sobrecarga conexión → disparo protecciones. Control calidad montaje = prevención 50% fallos."
  },
  {
    id: 16008,
    tema: 16,
    texto: "Normalmente el mantenimiento en instalaciones fotovoltaicas: (TEST OFICIAL)",
    opciones: ["Debe ser muy riguroso y con asiduidad", "Necesitan poco mantenimiento ya que no suelen presentar partes móviles", "Siempre se debe realizar cada 3 meses", "Solo se realiza mantenimiento preventivo"],
    correctaTexto: "Necesitan poco mantenimiento ya que no suelen presentar partes móviles",
    explicacion: "FV bajo mantenimiento: sin partes móviles (paneles), inversores electrónicos (no mecánico). Vs eólica (rodamientos) o turbinas (aceites). Solo limpieza + inspección periódica."
  },
  {
    id: 16009,
    tema: 16,
    texto: "Se denomina mantenimiento preventivo como: (TEST OFICIAL)",
    opciones: ["A las acciones o medidas a realizar de forma periódica sobre un equipo o instalación con el objetivo de localizar posibles fallos", "A las acciones a realizar una vez se ha producido la avería o fallo de un equipo o instalación", "Al conjunto de tareas que se realizan siempre bajo la supervisión de un técnico autorizado", "B y C son correctas"],
    correctaTexto: "A las acciones o medidas a realizar de forma periódica sobre un equipo o instalación con el objetivo de localizar posibles fallos",
    explicacion: "Preventivo: acciones periódicas (limpieza, inspección) ANTES de fallo. Correctivo: reparación DESPUÉS de fallo. Preventivo reduce costos 80% vs correctivo."
  },
  {
    id: 16010,
    tema: 16,
    texto: "Todas las averías de una instalación: (TEST OFICIAL)",
    opciones: ["Se repararán si afectan al correcto funcionamiento de la instalación", "No será necesario anotar la incidencia si la avería es superficial", "Deberán ser registradas en un parte para poder consultar a futuro", "Se recomendará al usuario que la repare por su cuenta"],
    correctaTexto: "Deberán ser registradas en un parte para poder consultar a futuro",
    explicacion: "Registro obligatorio todas averías: propósito es crear historial, identificar patrones, mejorar diseño futuro. No hay 'avería superficial' que no deba registrarse."
  },
  {
    id: 16011,
    tema: 16,
    texto: "¿Cuál es la tensión de salida estándar de un inversor FV?",
    opciones: ["110V CA", "230V CA monofásico o 400V CA trifásico", "12V DC", "500V DC"],
    correctaTexto: "230V CA monofásico o 400V CA trifásico",
    explicacion: "Inversores residenciales: 230V monofásico (vivienda). Comerciales: 400V trifásico. Especiales: 110V (mercados). Estándar España: 230V ± 10%, 50Hz ± 0.5Hz."
  },
  {
    id: 16012,
    tema: 16,
    texto: "¿Qué significa MPPT en un regulador?",
    opciones: ["Motor Power Transfer", "Maximum Power Point Tracking", "Management Photovoltaic System", "Monitoring Power Transmission"],
    correctaTexto: "Maximum Power Point Tracking",
    explicacion: "MPPT: algoritmo que rastrea continuamente punto máxima potencia. Ajusta tensión operación para maximizar I×V. Mejora eficiencia 20-30% vs PWM simple."
  },
  {
    id: 16013,
    tema: 16,
    texto: "¿Cuál es la función del 'interruptor de desconexión' general en DC?",
    opciones: ["Solo estetismo", "Aislar generador FV de regulador en caso emergencia o mantenimiento", "Aumentar voltaje", "No tiene función"],
    correctaTexto: "Aislar generador FV de regulador en caso emergencia o mantenimiento",
    explicacion: "Desconectador DC: seguridad crítica. Permite desconexión rápida paneles (si hay incendio, peligro eléctrico). Obligatorio cerca generador FV."
  },
  {
    id: 16014,
    tema: 16,
    texto: "¿Qué ocurre si se invierte la polaridad en entrada de un inversor?",
    opciones: ["Nada, funciona igual", "Destrucción inmediata del inversor", "Reducción 50% potencia", "Mayor eficiencia"],
    correctaTexto: "Destrucción inmediata del inversor",
    explicacion: "Inversión polaridad DC: cortocircuito interno, destrucción componentes (transistores, diodos). Prevención: etiquetado claro, conectores polarizados, fusibles."
  },
  {
    id: 16015,
    tema: 16,
    texto: "¿Cuál es la 'Eficiencia de Conversión' típica de un inversor?",
    opciones: ["50%", "75%", "90-98%", "Más del 100%"],
    correctaTexto: "90-98%",
    explicacion: "Inversores modernos: 95-98% eficiencia a potencia nominal. Pérdidas menores en transformadores/electrónica. Importante: eficiencia varía con carga (máxima a 50-75%)."
  },
  {
    id: 16016,
    tema: 16,
    texto: "¿Qué es un 'Descargador de Sobretensión' (SPD)?",
    opciones: ["Un panel adicional", "Dispositivo que protege contra picos tensión (rayos) derivando energía a tierra", "Un inversor especial", "No existe"],
    correctaTexto: "Dispositivo que protege contra picos tensión (rayos) derivando energía a tierra",
    explicacion: "SPD (Surge Protection Device): varistor o descargador de gas. Atrapa picos tensión transitorios. Obligatorio en plantas FV (rayo puede inducir 6000V+)."
  },
  {
    id: 16017,
    tema: 16,
    texto: "¿Cuál es la 'Impedancia de Cortocircuito' máxima permitida para conexión red?",
    opciones: ["0 Ω", "Baja, típicamente < 0.1 Ω", "1000 Ω", "Sin límite"],
    correctaTexto: "Baja, típicamente < 0.1 Ω",
    explicacion: "Impedancia baja: permite corrientes cortocircuito altas (protecciones disparan rápido). Impedancia alta: protecciones lentas, riesgos. Distribuidora especifica requisitos."
  },
  {
    id: 16018,
    tema: 16,
    texto: "¿Qué es el 'Transformador de Aislamiento' en inversores?",
    opciones: ["No existe", "Componente que aísla galvánicamente entrada DC de salida AC por seguridad", "Un transformador de voltaje", "Un regulador"],
    correctaTexto: "Componente que aísla galvánicamente entrada DC de salida AC por seguridad",
    explicacion: "Aislamiento galvánico: previene fugas corriente DC a AC (riesgo eléctrico). Algunos inversores lo incluyen (europeos), otros no (americanos). Mejora seguridad."
  },
  {
    id: 16019,
    tema: 16,
    texto: "¿Cuál es el 'Rango de Tensión de Entrada' típico de un inversor?",
    opciones: ["Fijo 48V únicamente", "Rango 100-600V DC (para múltiples cadenas paneles)", "Solo 12V", "Sin rango específico"],
    correctaTexto: "Rango 100-600V DC (para múltiples cadenas paneles)",
    explicacion: "Rango entrada inversores: típicamente 150-600V DC. Permite aceitar paneles en serie (cadenas 10-15 paneles × 40V = 400-600V). Flexibilidad diseño."
  },
  {
    id: 16020,
    tema: 16,
    texto: "¿Qué es la 'Respuesta Dinámica' de un inversor ante cambios irradiancia?",
    opciones: ["Capacidad reaccionar rápido a cambios luz → máxima energía aprovechada", "Cambio de color", "Velocidad rotación", "No existe"],
    correctaTexto: "Capacidad reaccionar rápido a cambios luz → máxima energía aprovechada",
    explicacion: "Respuesta dinámica: inversor rastrea MPP ante variaciones irradiancia (nubes pasando). Rápida respuesta = pérdidas mínimas. MPPT mejora respuesta vs PWM."
  }
];
