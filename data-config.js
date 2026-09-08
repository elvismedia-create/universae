// Filtra solo las preguntas marcadas como TEST OFICIAL (campo tema, texto o explicacion)
function soloOficiales(data) {
  return data.filter(p =>
    (p.tema && String(p.tema).includes('TEST OFICIAL')) ||
    (p.texto && String(p.texto).includes('TEST OFICIAL')) ||
    (p.explicacion && String(p.explicacion).includes('TEST OFICIAL'))
  );
}

const CONFIGURACION_CURSO = [
  // ===== TRIMESTRE 2 =====
  {
    bloque: "pestana1",
    trimestre: "T2",
    titulo_boton: "1. Instalaciones Eléctricas",
    asignaturas: [
      { nombre: "⭐ SIMULACRO SEMESTRAL: Instalaciones Eléctricas Interiores (40 preguntas)", data: EXAMEN_SEMESTRAL_INSTALACIONES_DATA },
      { nombre: "U1: Conductores y herramientas eléctricas", data: soloOficiales(TEMA_1_DATA) },
      { nombre: "U2: Circuitos eléctricos básicos en interiores", data: soloOficiales(TEMA_2_DATA) },
      { nombre: "U3: Protección de las instalaciones eléctricas", data: soloOficiales(TEMA_3_DATA) },
      { nombre: "U4: Montaje de instalaciones eléctricas en viviendas", data: soloOficiales(TEMA_4_DATA) },
      { nombre: "U5: Instalaciones de alumbrado, luminotecnia", data: soloOficiales(TEMA_5_DATA) },
      { nombre: "U6: Instalaciones eléctricas en viviendas", data: soloOficiales(TEMA_6_DATA) },
      { nombre: "U7: Documentación en las instalaciones", data: soloOficiales(TEMA_7_DATA) },
      { nombre: "U8: Instalaciones de locales especiales", data: soloOficiales(TEMA_8_DATA) },
      { nombre: "U9: Mantenimiento y detección de averías en instalaciones eléctricas", data: soloOficiales(TEMA_9_DATA) },
      { nombre: "U10: Instalaciones eléctricas en industrias", data: soloOficiales(TEMA_10_DATA) }
    ]
  },
  {
    bloque: "pestana2",
    trimestre: "T2",
    titulo_boton: "2. Instalaciones Fotovoltaicas (8 Unidades)",
    asignaturas: [
      { nombre: "⭐ SIMULACRO SEMESTRAL: Instalaciones Fotovoltaicas (40 preguntas - 75% examen oficial)", data: EXAMEN_SEMESTRAL_FOTOVOLTAICA_DATA },
      { nombre: "U1: Componentes de una instalación solar fotovoltaica", data: soloOficiales(TEMA_FV_U1_DATA) },
      { nombre: "U2: Fundamentos de energía solar fotovoltaica", data: soloOficiales(TEMA_FV_U2_DATA) },
      { nombre: "U3: Diseño e instalación de sistemas fotovoltaicos", data: soloOficiales(TEMA_FV_U3_DATA) },
      { nombre: "U4: Normativa y seguridad en FV", data: soloOficiales(TEMA_FV_U4_DATA) },
      { nombre: "U5: Monitoreo y mantenimiento de plantas solares", data: soloOficiales(TEMA_FV_U5_DATA) },
      { nombre: "U6: Conexión a red e inversores", data: soloOficiales(TEMA_FV_U6_DATA) },
      { nombre: "U7: Cálculos y dimensionamiento de sistemas FV", data: soloOficiales(TEMA_FV_U7_DATA) },
      { nombre: "U8: Puesta a tierra y protecciones en FV", data: soloOficiales(TEMA_FV_U8_DATA) }
    ]
  },
  {
    bloque: "pestana3",
    trimestre: "T2",
    titulo_boton: "3. Itinerario Personal para la Empleabilidad",
    asignaturas: [
      { nombre: "⭐ SIMULACRO SEMESTRAL: Itinerario Personal para la Empleabilidad (40 preguntas - 75% examen oficial)", data: EXAMEN_SEMESTRAL_EMPLEABILIDAD_DATA },
      { nombre: "U1: Economía y administración nociones básicas", data: TEMA_EMPLEABILIDAD_U1_DATA },
      { nombre: "U2: El sistema fiscal", data: TEMA_EMPLEABILIDAD_U2_DATA },
      { nombre: "U3: Concepto de marketing y análisis de mercado", data: TEMA_EMPLEABILIDAD_U3_DATA },
      { nombre: "U4: Plan de marketing", data: TEMA_EMPLEABILIDAD_U4_DATA },
      { nombre: "U5: Los RRHH en la empresa", data: TEMA_EMPLEABILIDAD_U5_DATA },
      { nombre: "U6: La importancia de las habilidades interpersonales", data: TEMA_EMPLEABILIDAD_U6_DATA }
    ]
  },
  {
    bloque: "pestana4",
    trimestre: "T2",
    titulo_boton: "4. Inglés Profesional (6 Unidades)",
    asignaturas: [
      { nombre: "⭐ SIMULACRO SEMESTRAL: Inglés Profesional (40 preguntas - 75% examen oficial)", data: EXAMEN_SEMESTRAL_INGLES_PROFESIONAL_DATA },
      { nombre: "U1: Living in the present", data: TEMA_INGLES_PROFESSIONAL_U1_DATA },
      { nombre: "U2: What do you like?", data: TEMA_INGLES_PROFESSIONAL_U2_DATA },
      { nombre: "U3: Exploring the past", data: TEMA_INGLES_PROFESSIONAL_U3_DATA },
      { nombre: "U4: What's next?", data: TEMA_INGLES_PROFESSIONAL_U4_DATA },
      { nombre: "U5: What would you do if...?", data: TEMA_INGLES_PROFESSIONAL_U5_DATA },
      { nombre: "U6: Work smarter", data: TEMA_INGLES_PROFESSIONAL_U6_DATA }
    ]
  },

  // ===== TRIMESTRE 3 =====
  {
    bloque: "pestana5b",
    trimestre: "T3",
    titulo_boton: "1. Instalaciones Domóticas",
    asignaturas: [
      { nombre: "⭐ SIMULACRO: Instalaciones Domóticas (40 preguntas)", data: EXAMEN_SEMESTRAL_DOMOTICA_DATA },
      { nombre: "U1: La domótica", data: soloOficiales(TEMA_DOMOTICA_U1_DATA) },
      { nombre: "U2: Elementos de las instalaciones. Sensores y actuadores", data: soloOficiales(TEMA_DOMOTICA_U2_DATA) },
      { nombre: "U3: Sistemas domóticos basados en corrientes portadoras X10", data: soloOficiales(TEMA_DOMOTICA_U3_DATA) },
      { nombre: "U4: Sistemas domóticos basados en bus de campo. El sistema KNX", data: soloOficiales(TEMA_DOMOTICA_U4_DATA) },
      { nombre: "U5: Sistemas domóticos basados en autómatas programables", data: soloOficiales(TEMA_DOMOTICA_U5_DATA) },
      { nombre: "U6: Sistemas domóticos basados en electrónica. Arduino", data: soloOficiales(TEMA_DOMOTICA_U6_DATA) },
      { nombre: "U7: Sistemas domóticos basados en asistentes virtuales. Alexa", data: soloOficiales(TEMA_DOMOTICA_U7_DATA) },
      { nombre: "U8: Nuevas Tecnologías", data: soloOficiales(TEMA_DOMOTICA_U8_DATA) }
    ]
  },
  {
    bloque: "pestana6",
    trimestre: "T3",
    titulo_boton: "2. Instalaciones de Distribución",
    asignaturas: [
      { nombre: "⭐ SIMULACRO: Instalaciones de Distribución (35 preguntas)", data: EXAMEN_SEMESTRAL_DISTRIBUCION_DATA },
      { nombre: "U1: Prevención de riesgos laborales y protección ambiental", data: soloOficiales(TEMA_DISTRIBUCION_U1_DATA) },
      { nombre: "U2: Configuración de los centros de transformación", data: soloOficiales(TEMA_DISTRIBUCION_U2_DATA) },
      { nombre: "U3: Operaciones de mantenimiento de centros de transformación", data: soloOficiales(TEMA_DISTRIBUCION_U3_DATA) },
      { nombre: "U4: Configuración de redes de distribución de baja tensión", data: soloOficiales(TEMA_DISTRIBUCION_U4_DATA) },
      { nombre: "U5: Operaciones de montaje y mantenimiento de baja tensión", data: soloOficiales(TEMA_DISTRIBUCION_U5_DATA) },
      { nombre: "U6: Configuración de instalaciones de enlace", data: soloOficiales(TEMA_DISTRIBUCION_U6_DATA) },
      { nombre: "U7: Montaje y mantenimiento de instalaciones de enlace", data: soloOficiales(TEMA_DISTRIBUCION_U7_DATA) }
    ]
  },
  {
    bloque: "pestana7",
    trimestre: "T3",
    titulo_boton: "3. Infraestructuras de Telecomunicación",
    asignaturas: [
      { nombre: "⭐ SIMULACRO: Infraestructuras de Telecomunicación (35 preguntas)", data: EXAMEN_SEMESTRAL_TELECOM_DATA },
      { nombre: "U1: Televisión Terrestre. Transmisión de la señal", data: soloOficiales(TEMA_TELECOM_U1_DATA) },
      { nombre: "U2: Propagación de la señal", data: soloOficiales(TEMA_TELECOM_U2_DATA) },
      { nombre: "U3: Sistemas de recepción de TV terrestre", data: soloOficiales(TEMA_TELECOM_U3_DATA) },
      { nombre: "U4: Sistema de recepción de TV por satélite", data: soloOficiales(TEMA_TELECOM_U4_DATA) },
      { nombre: "U5: Telefonía interior e intercomunicación", data: soloOficiales(TEMA_TELECOM_U5_DATA) },
      { nombre: "U6: Sistemas de telefonía y videoportería", data: soloOficiales(TEMA_TELECOM_U6_DATA) },
      { nombre: "U7: Sonido y megafonía", data: soloOficiales(TEMA_TELECOM_U7_DATA) }
    ]
  },
  {
    bloque: "pestana8",
    trimestre: "T3",
    titulo_boton: "4. Máquinas Eléctricas",
    asignaturas: [
      { nombre: "⭐ SIMULACRO: Máquinas Eléctricas (65 preguntas)", data: EXAMEN_SEMESTRAL_MAQUINAS_DATA },
      { nombre: "U1: Introducción al taller de máquinas eléctricas", data: soloOficiales(TEMA_MAQUINAS_U1_DATA) },
      { nombre: "U2: Nociones de magnetismo", data: soloOficiales(TEMA_MAQUINAS_U2_DATA) },
      { nombre: "U3: Interpretación de documentación técnica en máquinas eléctricas", data: soloOficiales(TEMA_MAQUINAS_U3_DATA) },
      { nombre: "U4: Construcción de transformadores eléctricos de pequeña potencia", data: soloOficiales(TEMA_MAQUINAS_U4_DATA) },
      { nombre: "U5: Ensayos de transformadores eléctricos", data: soloOficiales(TEMA_MAQUINAS_U5_DATA) },
      { nombre: "U6: Máquinas de corriente continua y sus bobinados", data: soloOficiales(TEMA_MAQUINAS_U6_DATA) },
      { nombre: "U7: Mantenimiento y reparación de máquinas eléctricas de corriente continua", data: soloOficiales(TEMA_MAQUINAS_U7_DATA) },
      { nombre: "U8: Ensayos de máquinas eléctricas de corriente continua", data: soloOficiales(TEMA_MAQUINAS_U8_DATA) },
      { nombre: "U9: Máquinas de corriente alterna y sus bobinados", data: soloOficiales(TEMA_MAQUINAS_U9_DATA) },
      { nombre: "U10: Mantenimiento y reparación de máquinas eléctricas de corriente alterna", data: soloOficiales(TEMA_MAQUINAS_U10_DATA) },
      { nombre: "U11: Ensayos de máquinas eléctricas de corriente alterna", data: soloOficiales(TEMA_MAQUINAS_U11_DATA) },
      { nombre: "U12: Instalación de los motores eléctricos", data: soloOficiales(TEMA_MAQUINAS_U12_DATA) },
      { nombre: "U13: Prevención de riesgos laborales y protección ambiental", data: soloOficiales(TEMA_MAQUINAS_U13_DATA) }
    ]
  },

  // ===== MÓDULO DE ESTUDIO: DOMÓTICA T3 =====
  {
    bloque: "estudio_t3_domotica",
    trimestre: "T3",
    titulo_boton: "📚 Estudio Domótica: Instalaciones Domóticas",
    asignaturas: [
      { nombre: "Módulo de Estudio: Instalaciones Domóticas (40 preguntas)", data: DATA_T3_DOMOTICA_ESTUDIO }
    ]
  }
];



// ========================================================
// DATOS REBT - ÍNDICE ITC
// ========================================================

// ========================================================
// DATOS REBT - ÍNDICE ITC COMPLETO (52 TEMAS)
// ========================================================
const REBT_INDICE_DATA = {
    "01": { t: "Terminología", c: ["Definiciones básicas y siglas", "Tensiones nominales (230/400 V)", "Clasificación de tensiones (Muy baja, Baja)", "Conductor CPN o PEN", "Red de distribución y Acometida", "Instalación de enlace e interior", "Choque eléctrico y Contactos"] },
    "02": { t: "Normas de Referencia", c: ["Listado de normas UNE obligatorias", "Cumplimiento de normas equivalentes", "Actualización de normas (Ediciones vigentes)", "Conformidad con normas europeas (EN)", "Resoluciones del Ministerio"] },
    "03": { t: "Empresas Instaladoras", c: ["Categoría Básica (IBTB)", "Categoría Especialista (IBTE)", "Medios técnicos y humanos mínimos", "Seguro de responsabilidad civil (Cuantías)", "Certificado de cualificación individual", "Obligaciones de la empresa instaladora"] },
    "04": { t: "Documentación y Puesta en Servicio", c: ["Instalaciones con Proyecto (Límites P > X kW)", "Instalaciones con Memoria Técnica (MTD)", "Certificado de Instalación (CIE)", "Tramitación ante el Órgano Competente", "Dirección de Obra", "Manual de instrucciones al usuario"] },
    "05": { t: "Verificaciones e Inspecciones", c: ["Verificaciones previas por el instalador", "Inspecciones iniciales (OCA)", "Inspecciones periódicas (Cada 5 o 10 años)", "Defectos Muy Graves (Peligro inmediato)", "Defectos Graves y Leves", "Plazos de corrección y Calificación"] },
    "06": { t: "Redes Aéreas (Distribución)", c: ["Conductores aislados y desnudos", "Alturas mínimas y distancias de seguridad", "Cruzamientos y paralelismos", "Apoyos, tensores y aisladores", "Intensidades máximas admisibles", "Puesta a tierra del neutro"] },
    "07": { t: "Redes Subterráneas (Distribución)", c: ["Cables (RV, XZ1) y aislamientos", "Profundidad de zanjas y lecho de arena", "Cruzamientos con otras redes (Gas, Agua)", "Paralelismos y distancias", "Arquetas de registro", "Cintas de señalización"] },
    "08": { t: "Conexión Neutro y Masas (Red)", c: ["Esquemas de distribución (TN, TT, IT)", "Puesta a tierra del neutro en centros de transf.", "Condiciones de seguridad en la red", "Continuidad del neutro y de tierra", "Resistencia global de tierra"] },
    "09": { t: "Alumbrado Exterior", c: ["Niveles de iluminación y uniformidad", "Eficiencia energética y contaminación lumínica", "Redes de alimentación (Cobre/Aluminio)", "Protecciones específicas y puesta a tierra", "Soportes (Báculos y columnas)", "Cajas de derivación en soportes"] },
    "10": { t: "Previsión de Cargas", c: ["Grado Básico (5750 W) y Elevado (9200 W)", "Carga total de edificios de viviendas", "Coeficientes de simultaneidad viviendas", "Carga de locales comerciales y oficinas", "Carga de garajes (Ventilación natural/forzada)", "Previsión para vehículo eléctrico"] },
    "11": { t: "Redes de Distribución. Acometidas", c: ["Acometidas Aéreas (Posada/Tensada)", "Acometidas Subterráneas", "Acometidas Aéreo-subterráneas", "Trazado y entrada al edificio", "Sección de conductores", "Responsabilidad de la empresa distribuidora"] },
    "12": { t: "Instalaciones de Enlace (General)", c: ["Esquemas generales de enlace", "Partes: CGP, LGA, Contadores, DI, DGMP", "Ubicación de contadores (Individual/Centralizado)", "Propiedad y mantenimiento", "Caídas de tensión globales en el enlace"] },
    "13": { t: "Cajas Generales de Protección (CGP)", c: ["Tipos y esquemas internos", "Emplazamiento (Fachada, Nicho, Vallado)", "Grado de protección (IK10 / IP43)", "Fusibles de seguridad (Cuchilla, Neozed)", "Conexión del neutro (amovible, a la izquierda)", "Altura de montaje"] },
    "14": { t: "Línea General de Alimentación (LGA)", c: ["Conductores (Cobre o Aluminio)", "Aislamiento (0,6/1 kV) y no propagación (Z1)", "Sistemas de instalación (Tubos, Canales, Conductos)", "Trazado por zonas comunes (Patinillos)", "Secciones mínimas y dimensionado", "Registros cortafuegos"] },
    "15": { t: "Derivaciones Individuales (DI)", c: ["Definición y límites (Contador - Cuadro vivienda)", "Conductores (Libres de halógenos ES07Z1-K)", "Sección mínima (6 mm²)", "Tubos protectores y diámetros", "Hilo de mando (rojo 1,5 mm²)", "Montaje en patinillos y registros de planta"] },
    "16": { t: "Contadores", c: ["Concentración de contadores (Armarios/Locales)", "Características del local (Puerta, Ventilación, Desagüe)", "Iluminación de emergencia y extintor", "Interruptor General de Maniobra (IGM)", "Cables de mando y protección", "Ubicación (Planta baja, entresuelo)"] },
    "17": { t: "Dispositivos Mando y Protección", c: ["Cuadro General (CGMP) y envolvente", "Interruptor General Automático (IGA) - Corte omnipolar", "Interruptores Diferenciales (ID) - Protección personas", "Pequeños Interruptores Automáticos (PIA) - Circuitos", "Protección contra Sobretensiones (PCS)", "Ubicación y altura (1,4m - 2m)"] },
    "18": { t: "Puestas a Tierra", c: ["Objeto: Limitar tensión de contacto y fugas", "Electrodos (Picas, Placas, Conductor enterrado)", "Línea de enlace y conductor de protección", "Bornes de puesta a tierra y puntos de puesta a tierra", "Separación de tierras (Baja/Alta tensión)", "Resistencia de tierra y mantenimiento"] },
    "19": { t: "Instalaciones Interiores (Generalidades)", c: ["Ámbito de aplicación (Viviendas, Locales)", "Esquema TT (Régimen de neutro)", "Conductor de protección en toda la instalación", "Caídas de tensión máximas", "Protección contra sobreintensidades y contactos", "Separación de circuitos según uso"] },
    "20": { t: "Sistemas de Instalación (Cables)", c: ["Tipos de cables (RZ1-K, H07V-K, ES07Z1-K)", "Sistemas: Tubos empotrados, en superficie, canales", "Condiciones generales (Fijación, Identificación)", "Conductores activos y protección (Colores)", "Conexiones: Empalmes y derivaciones", "Prohibiciones (Cables sin protección mecánica)"] },
    "21": { t: "Conductores. Identificación", c: ["Colores obligatorios: Neutro (Azul claro), PE (Verde-amarillo)", "Fases: Negro, Marrón, Gris (o cualquiera excepto reservados)", "Secciones mínimas por tipo de circuito", "Conductor de protección (PE) siempre presente", "Continuidad del neutro (No interrumpir)", "Compatibilidad electromagnética"] },
    "22": { t: "Tubos y Canales Protectoras", c: ["Clasificación y grados de resistencia", "Diámetros mínimos según cables alojados", "Tubos empotrados en obra (PVC, corrugado)", "Tubos en superficie (Rígidos, flexibles)", "Canales protectoras (PVC, metálicas)", "Grado de protección IP e IK"] },
    "23": { t: "Cajas de Empalme y Derivación", c: ["Obligatoriedad en empalmes y derivaciones", "Grados de protección según emplazamiento", "Registro y accesibilidad", "Regletas de conexión", "Identificación de circuitos", "Prohibición de empalmes ocultos"] },
    "24": { t: "Aparamenta (Mecanismos)", c: ["Bases de enchufe (Tomas de corriente)", "Interruptores y conmutadores", "Pulsadores, reguladores de intensidad", "Corriente asignada y tensión nominal", "Grado de protección según local", "Altura de montaje recomendada"] },
    "25": { t: "Receptores de Alumbrado", c: ["Portalámparas y luminarias", "Requisitos de instalación", "Clase de aislamiento (I, II, III)", "Masa máxima soportada por tubo", "Separación de materiales combustibles", "Iluminación de emergencia y señalización"] },
    "26": { t: "Receptores a Motor", c: ["Protección contra sobrecargas", "Protección contra cortocircuito", "Coordinación de protecciones", "Mando y parada de emergencia", "Inversión de giro", "Motores sumergidos y en atmósferas especiales"] },
    "27": { t: "Instalaciones de Puesta a Tierra", c: ["Red de tierra (Electrodo y líneas)", "Tipos de electrodos (Picas, anillos, placas)", "Resistencia de tierra (Valores admisibles)", "Puntos de puesta a tierra (PPT)", "Revisiones periódicas", "Prohibición de intercalar elementos seccionables en PE"] },
    "28": { t: "Circuitos de Vivienda (Electrificación Básica)", c: ["Potencia mínima: 5750 W", "Circuito C1: Iluminación (1,5 mm²)", "Circuito C2: Tomas generales (2,5 mm²)", "Circuito C3: Cocina y horno (6 mm²)", "Circuito C4: Lavadora, lavavajillas, termo (4 mm²)", "Circuito C5: Tomas baño y cocina (2,5 mm²)"] },
    "29": { t: "Circuitos de Vivienda (Electrificación Elevada)", c: ["Potencia mínima: 9200 W", "Circuitos adicionales C6 a C11", "C6: Adicional cocina", "C7: Calefacción eléctrica", "C8: Aire acondicionado", "C9, C10: Reserva / Secadora / Ofimática"] },
    "30": { t: "Cocinas. Baños. Aseos", c: ["Volúmenes de prohibición y protección", "Clase de material según volumen", "Grado de protección (IPX4, IPX7)", "Prohibiciones en volúmenes 0, 1, 2", "Equipotencialidad suplementaria", "Interruptor diferencial ≤30 mA"] },
    "31": { t: "Garajes y Aparcamientos", c: ["Clasificación según ventilación", "Instalaciones con atmósfera explosiva (Zona 1, 2)", "Cuadro independiente con protección diferencial", "Prohibición de enchufes monofásicos no protegidos", "Ventilación forzada (Potencia instalada)", "Sistemas de detección de CO"] },
    "32": { t: "Locales Comerciales y Oficinas", c: ["Previsión de cargas según superficie y actividad", "Coeficientes de simultaneidad", "Alumbrado de emergencia obligatorio (>300 m²)", "Protección diferencial ≤300 mA", "Cuadros secundarios y distribución", "Reserva de potencia"] },
    "33": { t: "Instalaciones con Bañeras o Duchas", c: ["Definición de volúmenes (0, 1, 2, 3)", "Material eléctrico permitido por volumen", "Equipotencialidad local suplementaria", "Diferenciales de alta sensibilidad (≤30 mA)", "Prohibición de cajas y mecanismos en vol. 0 y 1", "Calentadores eléctricos de agua"] },
    "34": { t: "Piscinas y Fuentes", c: ["Volúmenes de seguridad (0, 1, 2)", "Equipotencialidad en estructura metálica", "Separación de circuitos (Transformador aislamiento)", "Protección diferencial ≤30 mA obligatoria", "Material sumergible (Luminarias)", "Prohibición interruptores en vol. 0 y 1"] },
    "35": { t: "Instalaciones Temporales (Ferias, Conciertos)", c: ["Definición y carácter provisional", "Protección contra contactos indirectos", "Cuadros de distribución (Grado IP)", "Conexión equipotencial de masas", "Diferenciales ≤30 mA", "Inspección previa a la puesta en servicio"] },
    "36": { t: "Instalaciones a Muy Baja Tensión (MBTS/MBTP)", c: ["Definición: U ≤ 50 V AC / 75 V DC", "MBTS: Separación seguridad (Sin tierra)", "MBTP: Con un punto a tierra", "MBFP: Sin separación de seguridad", "Protección contra contactos directos", "Fuentes: Transformadores de seguridad"] },
    "37": { t: "Receptores de Alumbrado", c: ["Lámparas de descarga (Balastos, arrancadores)", "Compensación del factor de potencia", "Corrección del cos φ", "Lámparas LED y drivers", "Protección térmica de transformadores", "Requisitos CEM (Compatibilidad electromagnética)"] },
    "38": { t: "Motores. Instalaciones Generadoras", c: ["Grupos electrógenos de emergencia", "Conmutación red-grupo (Automática/Manual)", "Protección y mando de motores", "Arranque estrella-triángulo", "Variadores de frecuencia", "Baterías de condensadores (Reactiva)"] },
    "39": { t: "Alumbrado de Emergencia y Seguridad", c: ["Definición y tipos (Evacuación, Antipánico, Zonas de riesgo)", "Niveles mínimos de iluminación", "Autonomía: 1 hora mínimo", "Fuentes: Central de baterías, bloques autónomos", "Mantenimiento y verificación periódica", "Señalización de salidas y recorridos"] },
    "40": { t: "Locales Húmedos y Mojados", c: ["Clasificación según presencia de agua", "Grado de protección mínimo (IP)", "Prohibición de enchufes en locales mojados", "Material Clase II preferente", "Equipotencialidad suplementaria", "Diferencial ≤30 mA"] },
    "41": { t: "Locales Polvorientos (Sin Peligro Explosión)", c: ["Instalaciones en atmósferas polvorientas", "Grado IP5X mínimo (Protección contra polvo)", "Canalizaciones estancas", "Luminarias cerradas", "Prohibición de conexiones al aire", "Limpieza y mantenimiento"] },
    "42": { t: "Instalaciones en Locales de Pública Concurrencia", c: ["Definición y clasificación", "Alumbrado de emergencia obligatorio", "Fuente alternativa (Grupo o SAI)", "Protección diferencial por planta/zona", "Cuadros estancos y señalizados", "Inspecciones periódicas obligatorias"] },
    "43": { t: "Quirófanos y Salas de Intervención", c: ["Instalación IT-M (Aislada con vigilancia)", "Transformador de aislamiento por sala", "Dispositivo de vigilancia de aislamiento", "Equipotencialidad de masas", "Cuadro individual por quirófano", "Alimentación de seguridad (UPS o grupo)"] },
    "44": { t: "Instalaciones Generadoras de Baja Tensión", c: ["Fotovoltaica, eólica, cogeneración", "Interconexión con red de distribución", "Protecciones de interfaz", "Interruptor general con corte omnipolar", "Puesta a tierra independiente o común", "Medida de energía (Bidireccional)"] },
    "45": { t: "Ascensores y Montacargas", c: ["Alimentación independiente desde CGP", "Protección diferencial exclusiva", "Iluminación del hueco y sala de máquinas", "Alumbrado de emergencia en cabina", "Sistemas de rescate", "Protección contra sobretensiones"] },
    "46": { t: "Instalaciones de Seguridad", c: ["Sistemas de detección y alarma de incendios", "Control de humos y evacuación", "Sistemas de extinción automática", "Fuentes de alimentación de seguridad", "Separación de circuitos", "Resistencia al fuego de cables (AS, AS+)"] },
    "47": { t: "Sistemas de Automatización, Gestión y Control", c: ["Domótica e inmótica", "Sistemas de control centralizado", "Buses de comunicación (KNX, Modbus)", "Integración con instalaciones (HVAC, iluminación)", "Ciberseguridad en sistemas de control", "Eficiencia energética"] },
    "48": { t: "Infraestructuras de Telecomunicaciones", c: ["ICT (RD 346/2011)", "Registros de enlace, secundarios, terminales", "Recintos de infraestructuras (RITI, RITS)", "Separación con instalaciones eléctricas", "Tomas de telecomunicaciones en viviendas", "Canalización compartida (Electricidad/Telecom)"] },
    "49": { t: "Instalaciones con Riesgo de Incendio o Explosión", c: ["Clasificación de emplazamientos (Zonas 0, 1, 2)", "Material ATEX (Categorías 1, 2, 3)", "Grados de protección Ex (ia, ib, d, e, p)", "Separación de fuentes de ignición", "Ventilación forzada", "Señalización de zonas clasificadas"] },
    "50": { t: "Sistemas de Protección contra Rayos", c: ["Necesidad de protección (Estudio de riesgo)", "Niveles de protección (I, II, III, IV)", "Pararrayos (Punta, Malla, Piezoeléctrico)", "Bajantes y conexión a tierra", "Protección contra sobretensiones inducidas", "Inspecciones periódicas"] },
    "51": { t: "Instalaciones de Sistemas de Automatización", c: ["Gestión energética, confort y seguridad", "Nodos, sensores y actuadores", "Buses de control (Cableado o Inalámbrico)", "Separación de circuitos (MBTS / 230V)", "Filtrado, protección y compatibilidad electromagnética (CEM)"] },
    "52": { t: "Vehículo Eléctrico (IRVE)", c: ["Esquemas de instalación (1: Principal, 2: Individual, etc.)", "Modos de carga (1, 2, 3, 4)", "Sistema de Protección de Línea (SPL)", "Protecciones: Sobretensiones y Diferencial Clase A/B", "Previsión de potencia en garajes nuevos", "Puntos de recarga en vía pública"] }
};
