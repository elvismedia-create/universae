// EXAMEN SEMESTRAL: Instalaciones Eléctricas Interiores (40 preguntas)
// Academia - 75% de las preguntas del examen final oficial
// PRIORIDAD MÁXIMA en la app

const EXAMEN_SEMESTRAL_INSTALACIONES_DATA = [
  {
    id: 50001,
    tema: 0,
    tipo: "semestral",
    texto: "¿Cuál de las siguientes operaciones de mantenimiento NO corresponden al mantenimiento preventivo?",
    opciones: ["Comprobar la tensión de la red de alimentación", "Identificar las canalizaciones y sustituirla o repararla", "Comprobar el reglaje de los dispositivos de protección", "Revisar el apriete de toda la tornillería"],
    correctaTexto: "Identificar las canalizaciones y sustituirla o repararla",
    explicacion: "El mantenimiento preventivo es el que se realiza antes de que aparezca una avería. Identificar y sustituir canalizaciones dañadas es una tarea de mantenimiento correctivo."
  },
  {
    id: 50002,
    tema: 0,
    tipo: "semestral",
    texto: "A la hora del cálculo de secciones no se tiene en cuenta:",
    opciones: ["La caída de tensión que se produce en la línea.", "La capacidad térmica del conductor.", "La intensidad que circula por la línea.", "La parte del país donde se quiere hacer la instalación."],
    correctaTexto: "La parte del país donde se quiere hacer la instalación.",
    explicacion: "En el cálculo de secciones se considera: caída de tensión, capacidad térmica e intensidad. La ubicación geográfica del país no es un parámetro de cálculo."
  },
  {
    id: 50003,
    tema: 0,
    tipo: "semestral",
    texto: "Con respecto a la resistividad:",
    opciones: ["El cobre es el material con menor resistividad.", "El cobre tiene menor resistividad que el aluminio, pero es más caro.", "El aluminio tiene menor resistividad que el cobre.", "Cuanto mayor sea, mejor conductor es."],
    correctaTexto: "El cobre tiene menor resistividad que el aluminio, pero es más caro.",
    explicacion: "El cobre tiene mejor conductividad (menor resistividad) que el aluminio, pero su mayor costo lo hace menos económico en instalaciones grandes."
  },
  {
    id: 50004,
    tema: 0,
    tipo: "semestral",
    texto: "Cuando el síntoma de una avería es el disparo del magnetotérmico de un circuito:",
    opciones: ["Se trata de una sobrecarga o cortocircuito", "Se trata de que falsean sus conexiones o no está protegida su intensidad nominal", "Es un contacto directo o indirecto", "Ninguna de las anteriores es correcta"],
    correctaTexto: "Se trata de una sobrecarga o cortocircuito",
    explicacion: "El magnetotérmico dispara ante sobrecargas (consumo excesivo) o cortocircuitos (contacto directo entre conductores). El diferencial es quien protege contactos directos e indirectos."
  },
  {
    id: 50005,
    tema: 0,
    tipo: "semestral",
    texto: "Cuando un diferencial se quema o sobrecalienta se han de aplicar medidas de:",
    opciones: ["Emergencia", "Mantenimiento correctivo", "Mantenimiento predictivo", "Mantenimiento preventivo"],
    correctaTexto: "Mantenimiento correctivo",
    explicacion: "Cuando un dispositivo ya está dañado (quemado o sobrecalentado), se requiere mantenimiento correctivo para repararlo o reemplazarlo."
  },
  {
    id: 50006,
    tema: 0,
    tipo: "semestral",
    texto: "El circuito 2 de una electrificación básica:",
    opciones: ["Alimenta la instalación.", "Alimenta el horno.", "Alimenta las tomas de corriente de uso general.", "Alimenta la corriente de los aseos."],
    correctaTexto: "Alimenta las tomas de corriente de uso general.",
    explicacion: "El circuito 2 de la electrificación básica está destinado a las tomas de corriente de uso general de la vivienda."
  },
  {
    id: 50007,
    tema: 0,
    tipo: "semestral",
    texto: "Un aspecto a tener en cuenta a la hora de instalar un cuadro de distribución es",
    opciones: ["Ambiente en el que se encuentra", "La previsibilidad de que se alojen bases de corriente en él", "Tener en cuenta el grado de protección IP-IK requerido", "Todas las anteriores son correctas"],
    correctaTexto: "Todas las anteriores son correctas",
    explicacion: "Al instalar un cuadro de distribución se deben considerar todos estos aspectos: ambiente, previsión de futuro y grados de protección."
  },
  {
    id: 50008,
    tema: 0,
    tipo: "semestral",
    texto: "El primer elemento que se encuentra en un cuadro de mando y protección de la siguiente lista es:",
    opciones: ["Interruptor general automático", "Interruptor diferencial", "Protector de cortocircuito", "Interruptores automáticos"],
    correctaTexto: "Interruptor general automático",
    explicacion: "El orden en el cuadro de protección es: 1º Interruptor general, 2º Diferencial, 3º Magnetotérmicos. El interruptor general es el primero."
  },
  {
    id: 50009,
    tema: 0,
    tipo: "semestral",
    texto: "El REBT se encarga de:",
    opciones: ["Establecer los puntos mínimos que debemos encontrar en una vivienda.", "Indicar la función del circuito eléctrico.", "Establecer los puntos máximos que debemos encontrar en una vivienda.", "No tiene por qué coincidir con la sección real del conductor del circuito."],
    correctaTexto: "Establecer los puntos mínimos que debemos encontrar en una vivienda.",
    explicacion: "El REBT (Reglamento Electrotécnico para Baja Tensión) establece los requisitos mínimos de seguridad en instalaciones de baja tensión."
  },
  {
    id: 50010,
    tema: 0,
    tipo: "semestral",
    texto: "El siguiente dispositivo es un:",
    opciones: ["Distribuidor", "Separador", "Transformador", "Modificador"],
    correctaTexto: "Transformador",
    explicacion: "El transformador es un dispositivo que modifica el voltaje de corriente alterna manteniendo la potencia."
  },
  {
    id: 50011,
    tema: 0,
    tipo: "semestral",
    texto: "El siguiente empalme es:",
    opciones: ["Empalme Western", "Empalme Duplex", "Empalme tipo T", "Empalme trenzado o cola de rata"],
    correctaTexto: "Empalme Western",
    explicacion: "El empalme Western (o empalme de dos extremos trenzados) es uno de los empalmes más comunes en instalaciones eléctricas."
  },
  {
    id: 50012,
    tema: 0,
    tipo: "semestral",
    texto: "El siguiente símbolo hace referencia a:",
    opciones: ["Interruptor", "Conmutador", "Punto de luz", "Pulsador"],
    correctaTexto: "Conmutador",
    explicacion: "El símbolo mostrado (flecha hacia arriba) representa un conmutador, que permite controlar un circuito desde dos puntos diferentes."
  },
  {
    id: 50013,
    tema: 0,
    tipo: "semestral",
    texto: "En caso de que el aislamiento del cable de fase y el cable de tierra se haya deteriorado y ambos conductores de cobre se encuentren en contacto, al medir la resistencia de aislamiento que valor deberíamos obtener:",
    opciones: ["Un alto valor de resistencia de aislamiento entre conductores", "Un bajo valor de resistencia de aislamiento entre conductores", "No habrá diferencia de resistencia entre el estado con aislamiento deteriorado y estado normal", "Ninguna es correcta"],
    correctaTexto: "Un bajo valor de resistencia de aislamiento entre conductores",
    explicacion: "Si los conductores están en contacto directo, la resistencia de aislamiento será muy baja (próxima a 0 ohmios)."
  },
  {
    id: 50014,
    tema: 0,
    tipo: "semestral",
    texto: "En cuanto a la sección de un conductor:",
    opciones: ["Los fabricantes suelen elaborar las secciones conforme quieren los clientes.", "Cuanto mayor es la sección, mayor es la intensidad que soporta.", "El tipo de aislamiento no varía la intensidad que soporta.", "Todas las anteriores son correctas."],
    correctaTexto: "Cuanto mayor es la sección, mayor es la intensidad que soporta.",
    explicacion: "La intensidad máxima que soporta un conductor es directamente proporcional a su sección transversal. Además, el tipo de aislamiento sí influye en la intensidad admisible."
  },
  {
    id: 50015,
    tema: 0,
    tipo: "semestral",
    texto: "En cuanto a los controles automáticos es cierto que:",
    opciones: ["Están formados por un único piloto automático", "Están formados por un arrancador electromagnético o contactor", "Miden los valores de temperatura y luz", "Controlan el funcionamiento de dispositivos eléctricos de forma automática"],
    correctaTexto: "Están formados por un arrancador electromagnético o contactor",
    explicacion: "Los controles automáticos utilizan contactores electromagnéticos para controlar de forma automática el funcionamiento de dispositivos eléctricos."
  },
  {
    id: 50016,
    tema: 0,
    tipo: "semestral",
    texto: "En la imagen se muestra:",
    opciones: ["Interruptor de control de potencia", "Telerruptor", "Timbre", "Zumbador"],
    correctaTexto: "Telerruptor",
    explicacion: "El telerruptor es un dispositivo que permite controlar la activación/desactivación de cargas desde múltiples puntos a través de un circuito de mando."
  },
  {
    id: 50017,
    tema: 0,
    tipo: "semestral",
    texto: "En relación al alumbrado de emergencia es cierto que:",
    opciones: ["Dentro del alumbrado de seguridad hay 3 tipos: evacuación, antipánico y alto riesgo", "Solo existe un tipo de alumbrado de emergencia y es el de reemplazamiento", "Las instalaciones se realizan sin tener en cuenta factores físicos como la temperatura", "No hay diferencias respecto a un local húmedo de otro seco"],
    correctaTexto: "Dentro del alumbrado de seguridad hay 3 tipos: evacuación, antipánico y alto riesgo",
    explicacion: "El alumbrado de seguridad se divide en 3 tipos según su función: evacuación (salidas), antipánico (iluminación general) y alto riesgo (áreas de riesgo)."
  },
  {
    id: 50018,
    tema: 0,
    tipo: "semestral",
    texto: "Las instalaciones eléctricas en locales de pública concurrencia deberán contar con una serie de características. Señala la respuesta incorrecta:",
    opciones: ["Se emplearán cables propagadores de llama", "Contarán con alumbrado de emergencia", "El cuadro eléctrico no estará accesible al público", "Se garantizará la separación entre los diferentes circuitos"],
    correctaTexto: "Se emplearán cables propagadores de llama",
    explicacion: "En locales de pública concurrencia se deben usar cables NO propagadores de llama (retardadores de llama) para mayor seguridad en caso de incendio."
  },
  {
    id: 50019,
    tema: 0,
    tipo: "semestral",
    texto: "Es cierto respecto al aparato de la imagen que:",
    opciones: ["Permite comprobar una instalación eléctrica de baja tensión", "Se denomina polímetro", "Miden magnitudes de resistencia, voltaje e intensidad de corriente", "Todas son correctas"],
    correctaTexto: "Todas son correctas",
    explicacion: "El polímetro (multímetro) es un instrumento que mide voltaje, intensidad y resistencia, siendo esencial para verificar instalaciones de baja tensión."
  },
  {
    id: 50020,
    tema: 0,
    tipo: "semestral",
    texto: "Es una magnitud luminosa:",
    opciones: ["Flujo", "Intensidad", "Rendimiento", "Todas son correctas"],
    correctaTexto: "Todas son correctas",
    explicacion: "El flujo luminoso, intensidad luminosa y rendimiento luminoso son todas magnitudes relacionadas con la luz."
  },
  {
    id: 50021,
    tema: 0,
    tipo: "semestral",
    texto: "Escoge la opción correcta:",
    opciones: ["La imagen de la derecha muestra un circuito en paralelo", "La imagen de la derecha hace referencia a un circuito en serie", "La imagen de la izquierda es de un circuito en paralelo", "Ninguna es correcta"],
    correctaTexto: "La imagen de la derecha muestra un circuito en paralelo",
    explicacion: "En el circuito de la derecha, las resistencias están conectadas en paralelo (entre los mismos dos puntos). En la izquierda están en serie."
  },
  {
    id: 50022,
    tema: 0,
    tipo: "semestral",
    texto: "El enlace de la red de distribución pública a la caja de protección se realiza mediante:",
    opciones: ["La línea repartidora", "La acometida", "El contador", "La derivación individual"],
    correctaTexto: "La acometida",
    explicacion: "La acometida es la conexión que enlaza la red pública de distribución con la instalación privada del usuario."
  },
  {
    id: 50023,
    tema: 0,
    tipo: "semestral",
    texto: "Indica la afirmación correcta:",
    opciones: ["Una lámpara puede albergar dos o más luminarias.", "Una luminaria puede albergar dos o más lámparas.", "Las dos son correctas.", "Ninguna es correcta."],
    correctaTexto: "Una luminaria puede albergar dos o más lámparas.",
    explicacion: "Una luminaria es el elemento que aloja las lámparas. Puede contener varias lámparas para proporcionar más luz."
  },
  {
    id: 50024,
    tema: 0,
    tipo: "semestral",
    texto: "Indica la característica con la que debe contar una vivienda para ser considerada de electrificación elevada:",
    opciones: ["Superficie de la vivienda superior a 160m2", "Si hay previsión de más de 30 puntos de alumbrado", "Si el número de tomas de corriente de uso general supera los 20", "Todas son correctas"],
    correctaTexto: "Todas son correctas",
    explicacion: "Una vivienda es de electrificación elevada si cumple con cualquiera de estos criterios: superficie >160m², >30 puntos de luz, >20 tomas corriente."
  },
  {
    id: 50025,
    tema: 0,
    tipo: "semestral",
    texto: "Indica que apartado se corresponde con el contenido de un proyecto:",
    opciones: ["La memoria descriptiva", "Los planos y esquemas necesarios", "El presupuesto", "Todas las respuestas anteriores son correctas"],
    correctaTexto: "Todas las respuestas anteriores son correctas",
    explicacion: "Un proyecto técnico incluye: memoria descriptiva (explicación), planos y esquemas (documentación gráfica), y presupuesto (costos)."
  },
  {
    id: 50026,
    tema: 0,
    tipo: "semestral",
    texto: "Indica que elemento no corresponde a la instalación de enlace:",
    opciones: ["La caja general de protección.", "La línea general de alimentación.", "La derivación individual.", "El cuadro general de mando y protección."],
    correctaTexto: "El cuadro general de mando y protección.",
    explicacion: "La instalación de enlace incluye: caja general de protección, línea general de alimentación y derivación individual. El cuadro de mando y protección ya es parte de la instalación interior."
  },
  {
    id: 50027,
    tema: 0,
    tipo: "semestral",
    texto: "La electrificación básica...",
    opciones: ["Se crea para viviendas de nueva construcción con una previsión de potencia elevada.", "Hace referencia al sistema mínimo e indispensable para poder satisfacer las necesidades primarias.", "Alberga todos los dispositivos de protección, tanto para las personas, como para la instalación eléctrica.", "Se encarga de desconectar la instalación eléctrica de una vivienda en caso de que haya algún problema para protegerla."],
    correctaTexto: "Hace referencia al sistema mínimo e indispensable para poder satisfacer las necesidades primarias.",
    explicacion: "La electrificación básica es el nivel mínimo de instalación eléctrica necesaria para garantizar el funcionamiento básico de una vivienda."
  },
  {
    id: 50028,
    tema: 0,
    tipo: "semestral",
    texto: "La intensidad máxima que un interruptor magnetotérmico puede soportar se llama:",
    opciones: ["Poder de corte.", "Intensidad nominal o calibre", "Curva de disparo.", "Tiempo de disparo."],
    correctaTexto: "Poder de corte.",
    explicacion: "El poder de corte es la intensidad máxima que un dispositivo de protección puede desconectar con seguridad sin dañarse."
  },
  {
    id: 50029,
    tema: 0,
    tipo: "semestral",
    texto: "La siguiente imagen es de una herramienta, indica cuál:",
    opciones: ["Pasacables", "Alicates", "Tijeras de electricistas", "Pelacables"],
    correctaTexto: "Pelacables",
    explicacion: "El pelacables es una herramienta diseñada específicamente para eliminar el aislamiento de los cables eléctricos."
  },
  {
    id: 50030,
    tema: 0,
    tipo: "semestral",
    texto: "La siguiente imagen hace referencia a:",
    opciones: ["Interruptor magnetotérmico tetrapolar", "Interruptor de control de potencia", "Interruptor diferencial", "Interruptor cuádruple"],
    correctaTexto: "Interruptor diferencial",
    explicacion: "El interruptor diferencial se reconoce por su botón de prueba (amarillo) que permite verificar su funcionamiento."
  },
  {
    id: 50031,
    tema: 0,
    tipo: "semestral",
    texto: "La siguiente imagen muestra:",
    opciones: ["Interruptor magnetotérmico tetrapolar", "Interruptor de control de potencia", "Interruptor automático diferencial", "Interruptor quíntuple"],
    correctaTexto: "Interruptor magnetotérmico tetrapolar",
    explicacion: "El magnetotérmico tetrapolar protege contra sobrecargas y cortocircuitos, controlando todos los conductores incluyendo el neutro."
  },
  {
    id: 50032,
    tema: 0,
    tipo: "semestral",
    texto: "Las sobretensiones pueden ser:",
    opciones: ["Suaves o intensas.", "Fuertes o flojas.", "Transitorias o permanentes.", "De tensión o intensidad."],
    correctaTexto: "Transitorias o permanentes.",
    explicacion: "Las sobretensiones se clasifican en transitorias (corta duración, picos) o permanentes (elevación sostenida del voltaje)."
  },
  {
    id: 50033,
    tema: 0,
    tipo: "semestral",
    texto: "Los servicios de seguridad:",
    opciones: ["Tienen la misma alimentación que la instalación normal", "No son necesarios en instalaciones de locales especiales.", "Deben tener una segunda fuente de alimentación", "No funcionan si se produce un corte de electricidad"],
    correctaTexto: "Deben tener una segunda fuente de alimentación",
    explicacion: "Los servicios de seguridad (alumbrado de emergencia, ascensores, etc.) requieren fuente de alimentación alternativa para garantizar funcionamiento ante fallo de red."
  },
  {
    id: 50034,
    tema: 0,
    tipo: "semestral",
    texto: "No es una fuente de alimentación de los servicios de seguridad:",
    opciones: ["Baterías acumuladoras", "Generadores independientes", "Línea de distribución externa", "Línea de alimentación normal"],
    correctaTexto: "Línea de alimentación normal",
    explicacion: "Las fuentes de alimentación de seguridad pueden ser: baterías, generadores o línea externa. La línea normal no se considera fuente de seguridad."
  },
  {
    id: 50035,
    tema: 0,
    tipo: "semestral",
    texto: "Se quiere encender una lámpara desde tres puntos diferentes, ¿qué elemento resulta esencial para llevar a cabo esta maniobra?",
    opciones: ["Interruptor.", "Conmutador de Cruce.", "Pulsador.", "Zumbador"],
    correctaTexto: "Conmutador de Cruce.",
    explicacion: "Para controlar una luz desde 3 puntos se necesita: 2 conmutadores normales + 1 conmutador de cruce en el centro."
  },
  {
    id: 50036,
    tema: 0,
    tipo: "semestral",
    texto: "Se realiza con condensadores fijos en bornes del receptor inductivo.:",
    opciones: ["Compensación individual", "Compensación colectiva", "Compensación global", "Compensación simultánea"],
    correctaTexto: "Compensación individual",
    explicacion: "La compensación individual se realiza conectando condensadores directamente en los bornes del receptor para corregir el factor de potencia."
  },
  {
    id: 50037,
    tema: 0,
    tipo: "semestral",
    texto: "Suministro capaz de mantener un servicio mayor del 50% del suministro normal:",
    opciones: ["Suministro duplicado", "Suministro de socorro", "Suministro de reserva", "Suministro de seguridad"],
    correctaTexto: "Suministro duplicado",
    explicacion: "El suministro duplicado mantiene capacidad >50% del normal. El suministro de socorro mantiene 30-50%, reserva <30%."
  },
  {
    id: 50038,
    tema: 0,
    tipo: "semestral",
    texto: "Un componente destacable de la resistencia de puesta a tierra es:",
    opciones: ["Resistencia del electrodo", "Resistencia del contacto entre el electrodo y el suelo", "Resistencia de la tierra circundante", "Las respuestas anteriores son correctas"],
    correctaTexto: "Las respuestas anteriores son correctas",
    explicacion: "La resistencia de puesta a tierra incluye: resistencia propia del electrodo, contacto electrodo-tierra y resistencia del terreno circundante."
  },
  {
    id: 50039,
    tema: 0,
    tipo: "semestral",
    texto: "Un equipo formado por una o varias lámparas para la distribución, filtración y transformación de la luz emitida por las lámparas se conoce como:",
    opciones: ["Luminaria", "Alumbrado", "Lámpara", "Diodo"],
    correctaTexto: "Luminaria",
    explicacion: "Una luminaria es el conjunto completo: marco, difusor, reflector y demás componentes que aloja la lámpara y distribuye su luz."
  },
  {
    id: 50040,
    tema: 0,
    tipo: "semestral",
    texto: "Un interruptor automático magnetotérmico protege contra:",
    opciones: ["Contactos directos e indirectos.", "Incendios.", "Derroche de potencia.", "Sobrecargas y cortocircuitos."],
    correctaTexto: "Sobrecargas y cortocircuitos.",
    explicacion: "El magnetotérmico protege contra sobrecargas e cortocircuitos. Los contactos directo/indirecto los protege el diferencial."
  }
];
