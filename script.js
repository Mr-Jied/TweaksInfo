/* ═══════════════════════════════════════════════════════════════
   PC OPTIMIZER HUB — SCRIPT.JS
   Versión: 1.0.0
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────────────────────────
   CONFIGURACIÓN GENERAL
   Modifica aquí el número de herramientas en el hero.
────────────────────────────────────────────────────────────── */
const SITE_CONFIG = {
  totalTools: 16,
  githubUrl:  'https://github.com/', // Tu GitHub principal
};

/* ──────────────────────────────────────────────────────────────
   BASE DE DATOS DE APLICACIONES
   Para añadir una nueva app, copia un objeto y rellena los campos.
   downloadUrl: usa "GITHUB_DOWNLOAD_URL" como placeholder.
   Para MSI Afterburner usa la URL oficial directamente.
────────────────────────────────────────────────────────────── */
const APPS = [

  /* ══════════════════════════════════════════════════════════
     1. HIDUSBF
  ══════════════════════════════════════════════════════════ */
  {
    id:          'hidusbf',
    name:        'HIDUSBF',
    subtitle:    'USB Device Rate Setup',
    icon:        '🖱️',
    category:    'Periféricos',
    categories:  ['Periféricos', 'Latencia', 'Gaming'],
    version:     '3.41',
    compat:      'Windows 10 / 11',
    description: 'Modifica la frecuencia de sondeo (polling rate) de dispositivos USB compatibles. Especialmente útil para ratones y periféricos gaming.',
    downloadUrl: 'downloadUrl: 'https://github.com/Mr-Jied/pc-optimizer-hub/releases/download/v1.0.0/HIDUSBF.zip',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['gaming', 'basic'],
    info: {
      what: 'HIDUSBF (USB Device Rate Setup) es una utilidad que permite modificar la frecuencia de sondeo (polling rate) de dispositivos USB HID —principalmente ratones y teclados— en sistemas Windows. Fue desarrollada originalmente para usuarios avanzados que desean ajustar la tasa a la que el dispositivo reporta su posición al sistema operativo.',
      why: 'El polling rate determina con qué frecuencia el ratón envía información de posición al ordenador. Un valor más alto (p.ej. 1000 Hz) significa que el dispositivo reporta su posición 1000 veces por segundo, lo que puede traducirse en una respuesta más fluida y precisa en situaciones de alta velocidad. HIDUSBF permite cambiar este valor en dispositivos cuyo driver lo permita.',
      howWorks: [
        'Polling rate de 125 Hz: el ratón reporta su posición cada 8 ms. Es el valor por defecto en muchos dispositivos.',
        'Polling rate de 250 Hz: reporte cada 4 ms.',
        'Polling rate de 500 Hz: reporte cada 2 ms. Buen equilibrio en la mayoría de sistemas.',
        'Polling rate de 1000 Hz: reporte cada 1 ms. Estándar gaming actual.',
        'Valores superiores (4000/8000 Hz): disponibles solo en ratones gaming de gama alta con soporte explícito.',
      ],
      steps: [
        'Descarga y extrae HIDUSBF en una carpeta.',
        'Conecta el dispositivo USB que deseas modificar.',
        'Ejecuta HIDUSBF como Administrador.',
        'En la lista de dispositivos, selecciona tu ratón o periférico.',
        'En el desplegable de Rate, elige la frecuencia deseada (p.ej. 500 o 1000).',
        'Haz clic en "Filter On" o "Install" para aplicar el cambio.',
        'Reinicia el sistema para asegurarte de que el cambio es persistente.',
        'Verifica el polling rate con una herramienta online como MouseTester o mouse-rate-checker.',
      ],
      dos: [
        'Comprobar que tu dispositivo soporta el polling rate que quieres aplicar.',
        'Verificar el resultado con herramientas externas tras el cambio.',
        'Hacer una nota de la configuración original antes de modificar nada.',
        'Aplicar solo a dispositivos gaming que se beneficien del cambio.',
      ],
      donts: [
        'No aplicar a dispositivos cuyo fabricante no indica soporte para polling rate elevado.',
        'No usar valores extremos (8000 Hz) si tu CPU tiene un uso elevado: puede aumentar ligeramente la carga de procesamiento.',
        'No confundir el polling rate con los FPS del juego: son cosas distintas.',
        'Aumentar el polling rate NO garantiza automáticamente más FPS ni menos ping.',
      ],
      benefits: [
        'Respuesta de movimiento de ratón potencialmente más suave.',
        'Menor ventana de tiempo entre el movimiento físico y el reporte al sistema.',
        'Mayor consistencia en la lectura de posición.',
      ],
      warnings: [
        'La compatibilidad varía significativamente entre dispositivos y versiones de Windows. No todos los ratones responden igual a este cambio.',
        'En algunos dispositivos, cambiar el polling rate puede causar inestabilidad o que el dispositivo deje de funcionar correctamente. Siempre revisa cómo volver al estado original.',
        'Para restaurar: ejecuta HIDUSBF como Administrador, selecciona el dispositivo y elige "Filter Off" o desinstala el filtro.',
      ],
      recommended: ['gaming', 'advanced'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     2. CPU-Z
  ══════════════════════════════════════════════════════════ */
  {
    id:          'cpuz',
    name:        'CPU-Z',
    subtitle:    'Hardware Information',
    icon:        '🔬',
    category:    'Hardware',
    categories:  ['Hardware', 'Gaming'],
    version:     '2.10',
    compat:      'Windows 10 / 11',
    description: 'Herramienta de referencia para consultar información detallada del procesador, placa base, memoria RAM y GPU de tu sistema.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['basic', 'monitor'],
    info: {
      what: 'CPU-Z es una de las herramientas de identificación de hardware más reconocidas y utilizadas en la comunidad PC. Permite obtener información técnica detallada sobre el procesador, la placa base, la memoria RAM y la tarjeta gráfica de forma rápida, sin necesidad de instalación.',
      why: 'Antes de optimizar cualquier componente de tu PC, necesitas saber exactamente qué hardware tienes. CPU-Z es el punto de partida esencial para identificar tu procesador, verificar la configuración de tu RAM, conocer tu placa base y BIOS, y detectar posibles problemas de configuración.',
      howWorks: [
        'Pestaña CPU: muestra el modelo exacto del procesador, arquitectura, núcleos, hilos, frecuencia base y Turbo, TDP, caché L1/L2/L3 y tecnología de fabricación.',
        'Pestaña Caches: detalles sobre los niveles de caché del procesador.',
        'Pestaña Mainboard: fabricante y modelo de placa base, chipset, versión de BIOS y fecha.',
        'Pestaña Memory: frecuencia real de la RAM, tipo (DDR4/DDR5), tamaño total, modo de canal (Single/Dual/Quad) y timings.',
        'Pestaña SPD: información técnica de cada módulo de RAM individual, incluyendo el fabricante del chip.',
        'Pestaña Graphics: información básica de la GPU instalada.',
      ],
      steps: [
        'Descarga CPU-Z (versión portable recomendada para no instalar).',
        'Ejecuta el ejecutable.',
        'En la pestaña CPU: identifica el modelo, la frecuencia actual y el número de núcleos e hilos.',
        'En la pestaña Memory: verifica si tu RAM está en modo Dual Channel (aparecerá "Dual" en Channel). Comprueba también la frecuencia real —si aparece la mitad de la frecuencia nominal es normal, ya que DDR la dobla internamente.',
        'En la pestaña Mainboard: anota el modelo de tu placa base para buscar actualizaciones de BIOS.',
        'En la pestaña SPD: comprueba la información de cada slot de RAM para asegurarte de que todos están reconocidos.',
      ],
      dos: [
        'Anotar la información de tu hardware antes de comprar componentes nuevos.',
        'Verificar el modo de canal de la RAM (Dual Channel ofrece mayor ancho de banda que Single Channel).',
        'Comprobar si la frecuencia de la RAM corresponde a lo que has configurado en BIOS.',
        'Usar la información para buscar drivers y actualizaciones de BIOS correctas.',
      ],
      donts: [
        'CPU-Z es solo una herramienta de lectura: no modifica ninguna configuración del sistema.',
        'No confundas la frecuencia que muestra CPU-Z con la frecuencia "nominal" de tu RAM: CPU-Z muestra la frecuencia real del bus.',
        'No uses la información de CPU-Z para hacer cambios en BIOS si no sabes lo que estás haciendo.',
      ],
      benefits: [
        'Identificación exacta del hardware sin necesidad de abrir el PC.',
        'Verificación de que la RAM está configurada en Dual Channel.',
        'Detección rápida de la versión de BIOS instalada.',
        'Información precisa para búsqueda de drivers.',
      ],
      warnings: [],
      recommended: ['basic', 'gaming'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     3. CrystalDiskInfo
  ══════════════════════════════════════════════════════════ */
  {
    id:          'crystaldiskinfo',
    name:        'CrystalDiskInfo',
    subtitle:    'Storage Health Monitor',
    icon:        '💾',
    category:    'Almacenamiento',
    categories:  ['Hardware', 'Gaming'],
    version:     '9.4.0',
    compat:      'Windows 10 / 11',
    description: 'Comprueba el estado de salud, temperatura y atributos SMART de tus SSDs y HDDs para detectar posibles problemas antes de que ocurran.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['basic', 'monitor'],
    info: {
      what: 'CrystalDiskInfo es una aplicación de monitorización del estado de salud de dispositivos de almacenamiento (SSD y HDD). Lee los datos SMART (Self-Monitoring, Analysis and Reporting Technology) que el propio disco reporta, mostrándolos de forma clara y accesible.',
      why: 'Los discos de almacenamiento pueden fallar sin previo aviso. CrystalDiskInfo permite detectar señales de advertencia tempranas, como errores acumulados, temperaturas elevadas o sectores defectuosos, antes de que provoquen pérdida de datos o fallos graves del sistema.',
      howWorks: [
        'Estado de salud: CrystalDiskInfo muestra un estado general: "Good" (Bueno), "Caution" (Precaución) o "Bad" (Malo) en función de los atributos SMART del dispositivo.',
        'Temperatura: muestra la temperatura actual del disco. En SSDs, valores por encima de 70°C durante carga sostenida son preocupantes. En HDDs, lo ideal es mantenerse por debajo de 45°C.',
        'Horas de encendido: cuántas horas ha estado funcionando el disco desde su fabricación.',
        'Recuento de encendidos: número de veces que el disco ha sido iniciado.',
        'Atributos SMART: valores técnicos que el disco reporta internamente, como sectores reubicados, errores de lectura/escritura, o estado de celdas de flash en SSDs.',
      ],
      steps: [
        'Descarga e instala o ejecuta CrystalDiskInfo (existe versión portable).',
        'Al abrirlo, selecciona el disco que deseas revisar en el desplegable superior.',
        'Comprueba el indicador de salud (Good / Caution / Bad).',
        'Revisa la temperatura actual.',
        'Observa los atributos SMART resaltados en amarillo o rojo: indican valores fuera de lo normal.',
        'Anota las horas de encendido para tener referencia del uso del disco.',
        'Si el estado es "Caution" o "Bad", considera hacer una copia de seguridad inmediata.',
      ],
      dos: [
        'Revisar periódicamente el estado de tus discos, especialmente en equipos de varios años.',
        'Hacer copia de seguridad inmediata si el estado es "Caution" o peor.',
        'Comprobar la temperatura durante sesiones de juego intensas.',
      ],
      donts: [
        'No confundas el porcentaje de "salud" con el espacio disponible en disco: son conceptos completamente diferentes.',
        'No ignores un estado "Caution": puede ser una advertencia seria.',
        'Un estado "Good" no garantiza que el disco no vaya a fallar: los fallos catastróficos pueden ocurrir sin advertencia previa en algunos casos.',
        'No uses CrystalDiskInfo como única herramienta de diagnóstico ante problemas graves de disco.',
      ],
      benefits: [
        'Detección temprana de fallos de disco.',
        'Monitorización de temperatura de almacenamiento.',
        'Visión general del estado de salud de todos tus discos.',
        'Sin coste alguno.',
      ],
      warnings: [
        'IMPORTANTE: "Good" al 100% no significa que el disco tenga espacio libre. La salud hace referencia al desgaste del dispositivo, no al espacio de almacenamiento.',
      ],
      recommended: ['basic', 'gaming'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     4. HWiNFO64
  ══════════════════════════════════════════════════════════ */
  {
    id:          'hwinfo64',
    name:        'HWiNFO64',
    subtitle:    'Advanced Hardware Monitor',
    icon:        '📊',
    category:    'Monitorización',
    categories:  ['Hardware', 'Monitorización', 'Gaming'],
    version:     '8.00',
    compat:      'Windows 10 / 11',
    description: 'Monitorización avanzada de todos los sensores del sistema: CPU, GPU, RAM, temperaturas, frecuencias, voltajes, consumo y mucho más.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['monitor', 'gaming', 'advanced'],
    info: {
      what: 'HWiNFO64 es una de las herramientas de monitorización de hardware más completas y precisas disponibles para Windows. Ofrece acceso en tiempo real a prácticamente todos los sensores del sistema: temperaturas, frecuencias, voltajes, consumo energético, utilización de componentes, y mucho más. Es ampliamente utilizada por overclockers, técnicos y jugadores que quieren observar el comportamiento real de su PC bajo carga.',
      why: 'Muchos problemas de rendimiento en juegos —como bajadas de FPS, stuttering o inestabilidad— tienen su origen en limitaciones térmicas, throttling de CPU o GPU, o problemas de consumo. HWiNFO64 permite ver en tiempo real qué está ocurriendo dentro del PC mientras se juega, lo que es esencial para diagnosticar correctamente cualquier problema.',
      howWorks: [
        'CPU Package Temperature: temperatura general del procesador. Si supera los 95-100°C de forma sostenida, puede activar el thermal throttling.',
        'CPU Core Temperatures: temperatura individual de cada núcleo.',
        'GPU Temperature: temperatura de la GPU. Valores por encima de 85-90°C sostenidos son elevados para la mayoría de tarjetas.',
        'GPU Hotspot: temperatura del punto más caliente de la GPU (die). Puede ser 15-20°C superior a la temperatura general.',
        'CPU Power (Package): consumo real del procesador en vatios.',
        'GPU Power: consumo real de la tarjeta gráfica.',
        'CPU Frequency: frecuencia real de cada núcleo en tiempo real.',
        'GPU Core Clock / Memory Clock: frecuencias reales de la GPU.',
        'CPU Throttling: indica si el procesador está siendo limitado por temperatura o consumo.',
        'VRAM Used: memoria de vídeo utilizada por la GPU.',
      ],
      steps: [
        'Descarga e instala HWiNFO64.',
        'Al abrirse, selecciona "Sensors-only" para ver solo los sensores (opción recomendada para gaming).',
        'Familiarízate con los sensores más importantes: CPU Package, CPU Core Max, GPU Temperature, GPU Hotspot.',
        'Para usar mientras juegas: minimiza la ventana o configura la integración con MSI Afterburner/RTSS para mostrar un overlay en pantalla.',
        'Inicia el juego y juega durante 10-15 minutos en una situación de carga típica.',
        'Vuelve a HWiNFO64 y revisa los valores máximos alcanzados (columna "Max").',
        'Presta especial atención a: CPU Throttling (si aparece como "Yes" en el máximo, hay throttling), temperaturas máximas, y si el consumo ha alcanzado el Power Limit.',
        'Identifica cuellos de botella: si la GPU está al 99% y la CPU al 30-40%, la GPU es el factor limitante (normal en gaming). Si la CPU está al 100% y la GPU al 60-70%, la CPU puede estar limitando el rendimiento.',
      ],
      dos: [
        'Usar HWiNFO64 junto con MSI Afterburner para mostrar sensores en el overlay en juegos.',
        'Revisar los valores MAX después de una sesión de juego completa.',
        'Monitorizar el CPU Throttling para detectar problemas de refrigeración.',
        'Revisar el GPU Hotspot además de la temperatura general de GPU.',
      ],
      donts: [
        'No modificar ninguna configuración desde HWiNFO64: es exclusivamente una herramienta de lectura.',
        'No alarmarte si la temperatura de CPU sube a 80-90°C en carga: muchos procesadores modernos están diseñados para operar en ese rango.',
        'No usar el modo de información completa mientras juegas: usa solo el modo Sensors.',
      ],
      benefits: [
        'Diagnóstico preciso de problemas de rendimiento.',
        'Detección de thermal throttling de CPU y GPU.',
        'Monitorización de consumo real de componentes.',
        'Compatible con RTSS para overlay en juegos.',
        'Gratuito para uso personal.',
      ],
      warnings: [
        'HWiNFO64 es una herramienta de solo lectura. No realiza ningún cambio en tu sistema. No hay riesgo en usarla.',
      ],
      recommended: ['gaming', 'advanced', 'monitor'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     5. ISLC
  ══════════════════════════════════════════════════════════ */
  {
    id:          'islc',
    name:        'ISLC',
    subtitle:    'Intelligent Standby List Cleaner',
    icon:        '🧹',
    category:    'Memoria',
    categories:  ['Rendimiento', 'Latencia', 'Memoria'],
    version:     '1.0.2.2',
    compat:      'Windows 10 / 11',
    description: 'Libera la memoria en espera (Standby Memory) de Windows para reducir microcortes y posibles problemas de latencia en sistemas con poca RAM libre.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['gaming', 'advanced'],
    info: {
      what: 'ISLC (Intelligent Standby List Cleaner) es una pequeña utilidad diseñada para limpiar la "Standby Memory" de Windows cuando supera un umbral definido por el usuario. La Standby Memory es memoria que Windows reserva con datos de aplicaciones cerradas por si se necesitan de nuevo, pero que puede en ciertos escenarios contribuir a microcortes durante el juego cuando el sistema necesita reasignar esa memoria rápidamente.',
      why: 'En sistemas con poca RAM disponible (8 GB o menos) o en situaciones donde Windows acumula grandes cantidades de Standby Memory, puede producirse una pequeña pausa cuando el sistema necesita liberar esa memoria para una aplicación activa. ISLC automatiza la limpieza de esta memoria en segundo plano.',
      howWorks: [
        '"Wanted free memory (MB)": cantidad de memoria que quieres mantener libre. ISLC limpiará la Standby List cuando la memoria libre caiga por debajo de este valor.',
        '"Free memory is lower than (MB)": umbral de memoria libre para activar la limpieza.',
        '"The Standby list is larger than (MB)": umbral de tamaño de la Standby List para activar la limpieza.',
        '"Timer Resolution": ISLC incluye una opción para activar una resolución de temporizador más alta (1 ms). Esto reduce la resolución del temporizador de Windows, lo que puede tener efectos en la temporización del sistema.',
      ],
      steps: [
        'Descarga y ejecuta ISLC como Administrador.',
        'Configura "Wanted free memory" según tu RAM total. Una regla general: entre 1024 MB y 2048 MB.',
        'Activa "Start" para que ISLC empiece a monitorizar.',
        'Deja ISLC en segundo plano mientras juegas.',
        'ISLC limpiará la Standby Memory automáticamente cuando supere los umbrales.',
      ],
      dos: [
        'Usar ISLC si tienes 8 GB de RAM o menos y experimentas microcortes durante el juego.',
        'Verificar con Task Manager si la Standby Memory es realmente alta en tu sistema antes de usar ISLC.',
        'Mantener ISLC en segundo plano: no consume recursos perceptibles.',
      ],
      donts: [
        'ISLC no es una solución mágica que aumente los FPS en todos los sistemas. Sus beneficios son muy dependientes de la cantidad de RAM y del comportamiento del sistema.',
        'No esperes milagros en sistemas con 16 GB o más de RAM donde la Standby Memory raramente es un problema.',
        'No confundas ISLC con una herramienta de overclock o de optimización de CPU.',
      ],
      benefits: [
        'Reducción de posibles microcortes relacionados con Standby Memory en sistemas con poca RAM.',
        'Automatización de la gestión de memoria en segundo plano.',
        'Ligero y sin impacto perceptible en el rendimiento.',
      ],
      warnings: [
        'ISLC es útil principalmente en sistemas con 8 GB de RAM o menos con Standby Memory elevada. En sistemas con 16 GB o más, su impacto es generalmente mínimo o nulo.',
        'La opción de Timer Resolution tiene sus propias implicaciones: consulta la entrada de Timer Resolution en esta web para más información.',
      ],
      recommended: ['gaming', 'advanced'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     6. Quick CPU
  ══════════════════════════════════════════════════════════ */
  {
    id:          'quickcpu',
    name:        'Quick CPU',
    subtitle:    'CPU Optimization Tool',
    icon:        '⚙️',
    category:    'CPU',
    categories:  ['Rendimiento', 'CPU', 'Gaming'],
    version:     '4.8.0',
    compat:      'Windows 10 / 11',
    description: 'Gestiona y ajusta parámetros de la CPU en Windows: Core Parking, Frequency Scaling, Turbo y configuración de energía del sistema.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['gaming', 'advanced'],
    info: {
      what: 'Quick CPU es una herramienta gráfica para Windows que permite ajustar parámetros relacionados con el comportamiento de la CPU: Core Parking, Frequency Scaling, estados Turbo y configuración de los planes de energía del sistema. Facilita el acceso a opciones que normalmente requieren editar el registro o usar la línea de comandos.',
      why: 'Windows gestiona dinámicamente el comportamiento de la CPU mediante su sistema de planes de energía y características como Core Parking (deshabilitar núcleos en reposo) y Frequency Scaling (ajustar la frecuencia según la carga). En ciertos escenarios de gaming, una gestión demasiado agresiva por parte de Windows puede introducir latencia o variabilidad en el rendimiento.',
      howWorks: [
        'Core Parking: Windows puede "aparcar" (deshabilitar temporalmente) núcleos de CPU que no se utilizan. En gaming con alta carga, tener demasiados núcleos aparcados puede introducir variabilidad. Quick CPU permite ajustar el porcentaje de núcleos aparcados.',
        'Frequency Scaling: controla cómo escala la frecuencia de la CPU según la carga. Con un plan de alto rendimiento, la CPU tiende a mantener frecuencias más altas, pero consume más energía.',
        'Turbo Boost: permite habilitar o deshabilitar el boost de frecuencia del procesador.',
        'Power Plan: Quick CPU puede aplicar el plan de energía "Rendimiento máximo" u otros planes de forma rápida.',
        'Processor Performance (min/max): controla el porcentaje mínimo y máximo de rendimiento del procesador en Windows.',
      ],
      steps: [
        'Descarga e instala Quick CPU.',
        'Ejecútalo como Administrador para tener acceso completo.',
        'Observa el panel principal con las métricas actuales de tu CPU.',
        'En la sección de Power Plan, selecciona el plan adecuado para tu uso (Balanced para uso normal, High Performance o Ultimate Performance para gaming).',
        'Si experimentas variabilidad en FPS, considera reducir el Core Parking a 0% (deshabilitar el aparcado) solo si entiiendes los efectos.',
        'Revisa la temperatura de la CPU después de cualquier cambio: mayor frecuencia = mayor temperatura y consumo.',
      ],
      dos: [
        'Usar el plan de energía correcto para cada situación: Balanced para uso diario, High Performance para gaming.',
        'Monitorizar temperaturas después de cualquier cambio con HWiNFO64.',
        'Documentar la configuración original antes de modificar nada.',
      ],
      donts: [
        'No establecer todos los parámetros al máximo indiscriminadamente: mayor rendimiento implica mayor consumo y temperatura.',
        'No usar Quick CPU para sustituir una buena refrigeración: si tu CPU hace throttling, la solución es mejorar la refrigeración, no forzar parámetros.',
        'En portátiles, configuraciones de alto rendimiento pueden reducir significativamente la duración de la batería.',
      ],
      benefits: [
        'Acceso rápido a parámetros de energía de CPU.',
        'Interfaz gráfica clara para configuraciones que normalmente son complejas.',
        'Útil para reducir variabilidad en FPS en ciertos escenarios.',
      ],
      warnings: [
        'Algunos ajustes de Quick CPU pueden aumentar significativamente el consumo y la temperatura de la CPU. Monitoriza siempre las temperaturas al probar nuevas configuraciones. Si no sabes exactamente qué hace una opción, es mejor no modificarla.',
      ],
      recommended: ['gaming', 'advanced'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     7. MSI AFTERBURNER
  ══════════════════════════════════════════════════════════ */
  {
    id:          'msiafterburner',
    name:        'MSI Afterburner',
    subtitle:    'GPU Monitor & Overclocking',
    icon:        '🔥',
    category:    'GPU',
    categories:  ['GPU', 'Monitorización', 'Gaming', 'Rendimiento'],
    version:     '4.6.5',
    compat:      'Windows 10 / 11',
    description: 'La herramienta más popular para monitorización de GPU, overlay en juegos y overclocking/undervolting de tarjetas gráficas.',
    downloadUrl: 'https://www.msi.com/Landing/afterburner/graphics-cards',
    isOfficial:  true,
    isIntelOnly: false,
    tags:        ['gaming', 'monitor', 'advanced'],
    info: {
      what: 'MSI Afterburner es la herramienta de monitorización y overclocking de GPU más extendida en la comunidad PC gaming. Permite monitorizar en tiempo real todos los parámetros relevantes de la tarjeta gráfica, mostrar un overlay personalizado en cualquier juego (mediante RivaTuner Statistics Server/RTSS), y ajustar parámetros de la GPU como frecuencias, voltajes y curva de ventiladores. Compatible con tarjetas NVIDIA y AMD.',
      why: 'MSI Afterburner es el estándar de facto para ver estadísticas en tiempo real mientras se juega: FPS, frametime, temperatura de GPU, uso de GPU, VRAM utilizada, etc. Su overlay en juego es enormemente útil para diagnosticar problemas de rendimiento sin salir del juego.',
      howWorks: [
        'GPU Usage (%): porcentaje de utilización de la GPU. Un 99% sostenido indica que la GPU es el factor limitante (normal en gaming a alta resolución).',
        'GPU Temperature: temperatura de la GPU. La mayoría de tarjetas tienen target de temperatura de 83-84°C.',
        'GPU Core Clock: frecuencia de operación real del core de la GPU.',
        'Memory Clock: frecuencia de la VRAM.',
        'Fan Speed: velocidad de los ventiladores de la GPU.',
        'Power Limit: consumo de la GPU respecto a su límite máximo. Si llega al 100% constantemente, puede indicar limitación por consumo.',
        'Frame Rate (FPS): fotogramas por segundo.',
        'Frametime: tiempo entre fotogramas consecutivos. Un frametime variable puede percibirse como stuttering incluso con FPS altos.',
        'VRAM Usage: memoria de vídeo utilizada. Si supera la VRAM disponible, el rendimiento puede caer drásticamente.',
      ],
      steps: [
        'Descarga MSI Afterburner desde su web oficial (ver botón de descarga).',
        'Instala también RivaTuner Statistics Server (RTSS) que se incluye en el instalador: es necesario para el overlay en juegos.',
        'Abre MSI Afterburner y ve a Configuración (icono de engranaje).',
        'En la pestaña "Monitorización", selecciona los sensores que quieres mostrar en el overlay: GPU Usage, GPU Temp, CPU Usage, FPS, Frametime, VRAM.',
        'Activa "Mostrar en pantalla OSD" para cada sensor deseado.',
        'En la pestaña "Interfaz de usuario OSD", ajusta el tamaño y posición del overlay.',
        'Inicia un juego y comprueba que el overlay aparece en pantalla.',
        'Analiza los valores durante el juego para identificar problemas.',
      ],
      dos: [
        'Usar el overlay para diagnosticar problemas de rendimiento en tiempo real.',
        'Monitorizar el frametime además de los FPS: un frametime irregular puede indicar stuttering.',
        'Comprobar si el Power Limit se alcanza constantemente para identificar limitaciones de consumo.',
        'Hacer backup de los perfiles antes de modificar overclock.',
      ],
      donts: [
        'No aplicar overclock de GPU sin antes entender qué estás modificando. Un overclock incorrecto puede causar artefactos gráficos, cuelgues y en casos extremos daños.',
        'No subir voltajes de GPU sin conocimiento sólido del proceso.',
        'No usar configuraciones de overclock de internet directamente: cada GPU es diferente y tiene márgenes distintos incluso siendo el mismo modelo.',
        'El overclock NO garantiza más FPS ni mayor estabilidad: el resultado depende del silicio específico de cada tarjeta.',
      ],
      benefits: [
        'Overlay en juego completamente personalizable.',
        'Monitorización en tiempo real de todos los parámetros de GPU.',
        'Diagnóstico de cuellos de botella en gaming.',
        'Control de curva de ventiladores para temperatura personalizada.',
      ],
      warnings: [
        'AVISO OVERCLOCK: El overclocking de GPU lleva consigo riesgos de inestabilidad, artefactos gráficos o daños si no se realiza correctamente. Cualquier modificación de frecuencias o voltajes es responsabilidad exclusiva del usuario. Se recomienda investigar el proceso específico para tu modelo de GPU antes de aplicar cualquier cambio.',
        'MSI Afterburner se descarga exclusivamente desde la web oficial de MSI. El botón de descarga te dirigirá a la página oficial.',
      ],
      recommended: ['gaming', 'monitor', 'advanced'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     8. FilterKeysSetter
  ══════════════════════════════════════════════════════════ */
  {
    id:          'filterkeysSetter',
    name:        'FilterKeysSetter',
    subtitle:    'Keyboard Input Tuner',
    icon:        '⌨️',
    category:    'Periféricos',
    categories:  ['Periféricos', 'Latencia', 'Gaming'],
    version:     '1.0.0',
    compat:      'Windows 10 / 11',
    description: 'Configura los parámetros de Filter Keys de Windows para ajustar el comportamiento del teclado y reducir posibles problemas de entrada.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['gaming', 'basic'],
    info: {
      what: 'FilterKeysSetter es una utilidad que permite modificar la configuración de "Filter Keys" (Teclas de filtro) de Windows. Filter Keys es una función de accesibilidad de Windows que ajusta la respuesta del teclado, incluyendo la velocidad de repetición de teclas y el filtrado de pulsaciones breves accidentales. Algunos usuarios avanzados ajustan estos parámetros para modificar el comportamiento del teclado en gaming.',
      why: 'La configuración por defecto de Filter Keys en Windows puede influir en cómo responde el teclado, especialmente en términos de velocidad de repetición y latencia de entrada. FilterKeysSetter permite ajustar estos parámetros con precisión sin tener que editar el registro manualmente.',
      howWorks: [
        'Filter Keys desactivado: comportamiento estándar del teclado, con la repetición de teclas gestionada por los ajustes normales del sistema.',
        'Filter Keys activado con parámetros específicos: ajusta los valores de "Bounce Keys" (ignora pulsaciones breves repetidas), "Repeat Keys" (retraso antes de que una tecla empiece a repetirse) y "Slow Keys" (requiere que la tecla se mantenga presionada un tiempo mínimo).',
        'RepeatDelay: tiempo que debe mantenerse presionada una tecla antes de que empiece a repetirse.',
        'RepeatRate: velocidad a la que se repite una tecla mantenida presionada.',
      ],
      steps: [
        'Descarga y ejecuta FilterKeysSetter.',
        'Observa la configuración actual de Filter Keys.',
        'Si Filter Keys está activado y no lo necesitas, considera desactivarlo para tener el comportamiento estándar del teclado.',
        'Si quieres ajustar la velocidad de repetición, modifica los parámetros con cuidado.',
        'Prueba la configuración en un editor de texto antes de usarla en un juego.',
        'Para restaurar: puedes resetear los valores a los predeterminados de Windows desde la propia herramienta o desde Configuración > Accesibilidad > Teclado.',
      ],
      dos: [
        'Verificar si Filter Keys está activado accidentalmente en tu sistema (puede ocurrir si pulsas Shift por 8 segundos).',
        'Restaurar la configuración original si algo no funciona correctamente.',
        'Probar cambios en un editor de texto antes de aplicarlos en juegos.',
      ],
      donts: [
        'No activar Filter Keys si no entiendes para qué sirve: puede hacer que el teclado responda de forma inesperada.',
        'No modificar parámetros extremos que hagan el teclado inutilizable.',
        'Si el teclado funciona correctamente, posiblemente no necesites tocar esta configuración.',
      ],
      benefits: [
        'Control preciso del comportamiento de repetición del teclado.',
        'Verificación y corrección si Filter Keys se activó accidentalmente.',
        'Ajuste fino para usuarios que desean personalizar la respuesta del teclado.',
      ],
      warnings: [
        'Asegúrate de que Filter Keys no está activado accidentalmente en tu sistema. Windows lo activa automáticamente si mantienes la tecla Shift presionada durante 8 segundos. Para comprobar: Configuración > Accesibilidad > Teclado.',
      ],
      recommended: ['gaming', 'basic'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     9. GPU-Z
  ══════════════════════════════════════════════════════════ */
  {
    id:          'gpuz',
    name:        'GPU-Z',
    subtitle:    'GPU Information Utility',
    icon:        '🎮',
    category:    'Hardware',
    categories:  ['Hardware', 'GPU', 'Gaming'],
    version:     '2.59.0',
    compat:      'Windows 10 / 11',
    description: 'Identificación precisa de la tarjeta gráfica: modelo exacto, VRAM, clocks, driver, PCIe, BIOS de GPU y sensores en tiempo real.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['basic', 'monitor'],
    info: {
      what: 'GPU-Z es la herramienta de referencia para identificar y obtener información técnica detallada sobre cualquier tarjeta gráfica instalada en el sistema. Desarrollada por TechPowerUp, es la herramienta equivalente a CPU-Z pero para tarjetas gráficas. Proporciona información precisa sobre el chip, la VRAM, el BIOS de la GPU, el driver instalado, las frecuencias y los sensores en tiempo real.',
      why: 'Existen en el mercado tarjetas gráficas que pueden tener el mismo nombre comercial pero diferente hardware interno (diferentes versiones de silicio, diferentes cantidades o tipos de VRAM). GPU-Z permite identificar exactamente qué GPU tienes, verificar que la VRAM es la correcta, y detectar posibles tarjetas no originales.',
      howWorks: [
        'GPU Name: nombre exacto del chip gráfico (p.ej. GA102, Navi 21).',
        'VRAM: cantidad y tipo de memoria de vídeo (GDDR6, GDDR6X, HBM2).',
        'Bus Width: ancho del bus de memoria (128-bit, 256-bit, 384-bit). Afecta al ancho de banda de la VRAM.',
        'Base Clock / Boost Clock: frecuencias base y boost de la GPU según las especificaciones del fabricante.',
        'Driver Version: versión del driver de GPU instalado.',
        'DirectX Support: versión de DirectX soportada.',
        'OpenGL Version: versión de OpenGL soportada.',
        'Bus Interface: interfaz PCIe instalada (p.ej. PCIe 4.0 x16). Importante para verificar que la GPU está en el slot correcto.',
        'BIOS Version: versión del BIOS de la GPU.',
        'Sensors Tab: temperaturas, frecuencias, VRAM usada, fan speed, consumo y otros sensores en tiempo real.',
      ],
      steps: [
        'Descarga GPU-Z (portable, no requiere instalación).',
        'Ejecútalo como Administrador para acceso completo.',
        'En la pestaña principal, verifica el nombre del chip, la cantidad y tipo de VRAM, y el Bus Width.',
        'En "Bus Interface", comprueba que aparece la velocidad máxima de tu PCIe y que no está limitado (p.ej. "PCIe x4" cuando debería ser "x16").',
        'En la pestaña Sensors, observa las temperaturas y frecuencias en tiempo real.',
        'El botón "?" junto al nombre de la GPU lleva a la ficha técnica de TechPowerUp para comparar.',
      ],
      dos: [
        'Verificar la cantidad y tipo de VRAM antes de comprar juegos que requieren cantidades específicas.',
        'Comprobar que la GPU está en el slot PCIe correcto (x16 y no x4 o x8).',
        'Usar la pestaña de Sensors para obtener datos adicionales.',
        'Comparar los valores con las especificaciones oficiales del fabricante para detectar tarjetas falsificadas.',
      ],
      donts: [
        'GPU-Z es solo de lectura: no modifica ninguna configuración del sistema.',
        'No confundas la VRAM con la RAM del sistema: son memorias completamente diferentes.',
      ],
      benefits: [
        'Identificación precisa de la GPU instalada.',
        'Detección de tarjetas con especificaciones modificadas o falsificadas.',
        'Verificación de la configuración PCIe.',
        'Información sobre el driver y DirectX instalado.',
      ],
      warnings: [],
      recommended: ['basic', 'gaming'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     10. LatencyMon
  ══════════════════════════════════════════════════════════ */
  {
    id:          'latencymon',
    name:        'LatencyMon',
    subtitle:    'DPC Latency Analyzer',
    icon:        '📡',
    category:    'Latencia',
    categories:  ['Latencia', 'Gaming', 'Rendimiento'],
    version:     '7.12',
    compat:      'Windows 10 / 11',
    description: 'Analiza la latencia DPC e ISR de Windows para detectar drivers o componentes que generan interrupciones problemáticas en el sistema.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['advanced', 'monitor'],
    info: {
      what: 'LatencyMon es una herramienta de análisis de latencia DPC (Deferred Procedure Calls) e ISR (Interrupt Service Routines) de Windows. Permite identificar qué drivers o componentes del sistema están generando tiempos de respuesta excesivos en la capa de kernel de Windows, lo que puede afectar negativamente al rendimiento de audio (chasquidos, cortes), gaming y otras aplicaciones en tiempo real.',
      why: 'Windows procesa interrupciones hardware mediante DPCs e ISRs. Si un driver está mal optimizado o hay un componente problemático, puede ocupar el procesador durante demasiado tiempo, interfiriendo con otras tareas del sistema. Esto puede manifestarse como audio cortado, microfreezes en juegos, o problemas de latencia de audio en producción musical.',
      howWorks: [
        'DPC (Deferred Procedure Call): llamada a procedimiento diferido. Los drivers de hardware utilizan DPCs para procesar interrupciones fuera del contexto de la interrupción original.',
        'ISR (Interrupt Service Routine): rutina ejecutada inmediatamente cuando un dispositivo genera una interrupción hardware.',
        'Highest DPC Execution Time: el tiempo más alto registrado de un DPC. Valores por encima de 500-1000 µs pueden indicar problemas.',
        'Highest ISR Execution Time: tiempo máximo de una ISR.',
        'Pestaña Drivers: lista todos los drivers y su consumo de DPC. Un driver con valores muy altos es el candidato a revisar.',
        'Color del indicador: verde (aceptable), amarillo (precaución), rojo (valores problemáticos).',
      ],
      steps: [
        'Descarga e instala LatencyMon.',
        'Cierra la mayoría de aplicaciones abiertas para un análisis más limpio.',
        'Haz clic en "Start" para iniciar el análisis.',
        'Deja LatencyMon ejecutarse durante varios minutos (al menos 5-10 minutos para obtener datos representativos).',
        'Observa si el indicador cambia a amarillo o rojo.',
        'Ve a la pestaña "Drivers" y ordena por "DPC count" o "Execution time" para identificar el driver con valores más altos.',
        'El driver problemático suele corresponderse con un componente hardware específico: busca el nombre del driver en internet para identificar a qué dispositivo pertenece.',
        'Soluciones comunes: actualizar el driver problemático, deshabilitar el dispositivo si no se usa, o cambiar configuraciones de interrupción en el administrador de dispositivos.',
      ],
      dos: [
        'Ejecutar LatencyMon durante diferentes escenarios: en reposo, mientras juegas, mientras usas audio.',
        'Prestar atención a la pestaña de Drivers para identificar el culpable específico.',
        'Buscar el nombre exacto del driver en foros especializados para encontrar soluciones.',
        'Probar a deshabilitar temporalmente dispositivos sospechosos para ver si los valores mejoran.',
      ],
      donts: [
        'LatencyMon NO mide el ping a servidores de internet: no tiene nada que ver con la latencia de red.',
        'No desinstales drivers esenciales del sistema sin saber exactamente qué estás haciendo.',
        'No uses LatencyMon como única herramienta de diagnóstico: los resultados deben interpretarse con contexto.',
        'Valores ligeramente elevados no siempre indican un problema real perceptible.',
      ],
      benefits: [
        'Identificación precisa de drivers problemáticos en Windows.',
        'Diagnóstico de problemas de audio (cortes, chasquidos).',
        'Detección de posibles causas de microfreezes en gaming.',
        'Gratuito para uso personal.',
      ],
      warnings: [
        'LatencyMon NO mide el ping ni la latencia de red a servidores. Mide la latencia de las interrupciones hardware en el sistema operativo Windows. Son cosas completamente distintas.',
      ],
      recommended: ['gaming', 'advanced', 'monitor'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     11. MSI Utility V3
  ══════════════════════════════════════════════════════════ */
  {
    id:          'msiutilityv3',
    name:        'MSI Utility V3',
    subtitle:    'Message Signaled Interrupts',
    icon:        '⚡',
    category:    'Sistema',
    categories:  ['Rendimiento', 'Latencia', 'Red', 'Gaming'],
    version:     '3.0',
    compat:      'Windows 10 / 11',
    description: 'Habilita Message Signaled Interrupts (MSI) en GPU, adaptadores de red y otros dispositivos PCIe compatibles para potencialmente mejorar la gestión de interrupciones.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['advanced'],
    info: {
      what: 'MSI Utility V3 es una herramienta que permite habilitar o deshabilitar MSI (Message Signaled Interrupts) en dispositivos hardware compatibles. MSI es un mecanismo de interrupción hardware alternativo al sistema de interrupciones tradicional (INTx). Permite que un dispositivo envíe una interrupción mediante un mensaje escrito directamente en la memoria, en lugar de usar una línea de interrupción física compartida.',
      why: 'El mecanismo MSI puede, en algunos sistemas y configuraciones, mejorar la gestión de interrupciones al eliminar la compartición de líneas IRQ entre dispositivos. Esto puede traducirse en menor latencia de interrupciones y mayor estabilidad en ciertos escenarios. Sin embargo, sus beneficios son muy dependientes del hardware, chipset, driver y configuración específica de cada sistema.',
      howWorks: [
        'INTx (Line-Based Interrupts): sistema tradicional de interrupciones. Múltiples dispositivos pueden compartir la misma línea IRQ, lo que puede crear conflictos.',
        'MSI (Message Signaled Interrupts): cada dispositivo tiene sus propias interrupciones sin compartir líneas. Reduce conflictos entre dispositivos.',
        'MSI-X: versión extendida de MSI que permite hasta 2048 interrupciones por dispositivo y puede asignarlas a diferentes CPUs/cores.',
        'Prioridad de interrupción: MSI Utility V3 también puede mostrar la prioridad de interrupción asignada al dispositivo.',
      ],
      steps: [
        'Descarga MSI Utility V3.',
        'Ejecútalo como Administrador (IMPRESCINDIBLE).',
        'Observa la lista de dispositivos PCI/PCIe del sistema.',
        'Identifica tu GPU y tu adaptador de red.',
        'Verifica si ya tienen MSI habilitado (aparecerá en la columna correspondiente).',
        'Si quieres habilitar MSI, selecciona el dispositivo y cambia el modo.',
        'REINICIA el sistema para que los cambios tengan efecto.',
        'Para restaurar: vuelve a abrir MSI Utility V3 y cambia de vuelta al modo original, luego reinicia.',
      ],
      dos: [
        'Hacer una nota del estado original antes de cambiar nada.',
        'Reiniciar el sistema después de cualquier cambio.',
        'Verificar que el sistema arranca correctamente después del cambio.',
        'Usar LatencyMon antes y después para comprobar si hay alguna diferencia medible.',
      ],
      donts: [
        'NO habilitar MSI en todos los dispositivos indiscriminadamente: algunos dispositivos pueden tener problemas de estabilidad con MSI activo.',
        'No cambiar la configuración si el sistema funciona correctamente: si no hay ningún problema, no hay ninguna razón para tocar esto.',
        'No afirmar que activar MSI siempre aumenta los FPS: los beneficios son muy variables y en muchos sistemas no son perceptibles.',
        'En caso de que el sistema no arranque después de aplicar MSI, puede ser necesario arrancar en modo seguro para revertir el cambio.',
      ],
      benefits: [
        'Posible reducción de conflictos de interrupción en algunos sistemas.',
        'Mejor gestión de interrupciones en hardware compatible.',
        'Puede contribuir a reducir la latencia de interrupciones de GPU y red en ciertos escenarios.',
      ],
      warnings: [
        'AVISO IMPORTANTE: Habilitar MSI en dispositivos incompatibles puede causar que el sistema no arranque o se vuelva inestable. Siempre documenta el estado original antes de cualquier cambio. Los beneficios de activar MSI son muy dependientes del hardware específico y no están garantizados en todos los sistemas.',
      ],
      recommended: ['advanced'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     12. TCP Optimizer
  ══════════════════════════════════════════════════════════ */
  {
    id:          'tcpoptimizer',
    name:        'TCP Optimizer',
    subtitle:    'Network Optimization',
    icon:        '🌐',
    category:    'Red',
    categories:  ['Red', 'Rendimiento', 'Gaming'],
    version:     '4.1.0',
    compat:      'Windows 10 / 11',
    description: 'Optimiza los parámetros TCP/IP de Windows para gaming y navegación. Permite ajustar MTU, buffers, auto-tuning y otras opciones de red.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['gaming', 'advanced'],
    info: {
      what: 'TCP Optimizer es una herramienta gráfica que permite modificar parámetros del stack TCP/IP de Windows. Facilita el ajuste de configuraciones de red que normalmente requieren editar el registro o usar comandos de netsh, presentándolos de forma accesible. Está especialmente orientada a usuarios que quieren ajustar su configuración de red para gaming o streaming.',
      why: 'La configuración por defecto de Windows para TCP/IP está diseñada para un rango amplio de escenarios. En ciertos casos, ajustar parámetros como el MTU, los buffers de recepción, el algoritmo de control de congestión o el auto-tuning puede mejorar la estabilidad de la conexión o reducir la variabilidad de la latencia. Sin embargo, los beneficios son altamente dependientes del tipo de conexión y del ISP.',
      howWorks: [
        'MTU (Maximum Transmission Unit): tamaño máximo de los paquetes de red. Un MTU mal configurado puede causar fragmentación de paquetes y empeorar la latencia. El valor óptimo depende del tipo de conexión (generalmente 1500 para Ethernet estándar, 1492 para PPPoE).',
        'RWIN (Receive Window): tamaño del buffer de recepción TCP. Afecta al throughput en conexiones de alta latencia.',
        'TCP Auto-Tuning: mecanismo de Windows que ajusta automáticamente el tamaño del buffer de recepción. En algunos casos puede causar comportamiento errático.',
        'Nagle Algorithm: agrupa paquetes pequeños para eficiencia. Desactivarlo puede reducir la latencia en aplicaciones en tiempo real pero aumentar el uso de ancho de banda.',
        'Congestion Control Algorithm: algoritmo para gestionar la congestión de red (CUBIC, BBR, etc.).',
      ],
      steps: [
        'ANTES de cualquier cambio: haz un backup desde File > Backup Current Settings.',
        'Selecciona tu adaptador de red en el desplegable superior.',
        'TCP Optimizer puede sugerir configuraciones automáticamente basadas en tu velocidad de conexión.',
        'Aplica los cambios y reinicia el sistema.',
        'Prueba la conexión: mide ping y jitter antes y después con herramientas como ping-test.net o Bufferbloat.net.',
        'Si los resultados empeoran, restaura el backup desde File > Restore Backed Up Settings.',
      ],
      dos: [
        'Hacer SIEMPRE un backup antes de cualquier cambio.',
        'Medir objetivamente antes y después (ping, jitter, velocidad) para verificar si hay mejora real.',
        'Usar la función de restauración si algo empeora.',
        'Investigar el MTU correcto para tu tipo de conexión específica.',
      ],
      donts: [
        'TCP Optimizer NO puede reducir el ping físico hasta un servidor: la latencia física depende de la distancia geográfica y la infraestructura del ISP, no de parámetros de Windows.',
        'No aplicar configuraciones extremas sin medir los resultados.',
        'No modificar configuraciones que no entiendes.',
        'No usar configuraciones genéricas de internet sin adaptarlas a tu tipo de conexión.',
      ],
      benefits: [
        'Posible mejora en estabilidad de ping y reducción de jitter en algunos sistemas.',
        'Corrección de MTU mal configurado.',
        'Ajuste de parámetros de red específicos para gaming.',
        'Backup y restauración fácil.',
      ],
      warnings: [
        'IMPORTANTE: TCP Optimizer NO puede reducir el ping físico a servidores remotos. La latencia depende principalmente de la infraestructura de tu ISP, la distancia geográfica y el enrutamiento de internet. TCP Optimizer puede mejorar la configuración del stack de red de Windows, pero no puede hacer magia con una conexión de larga distancia.',
        'Siempre haz backup antes de cualquier modificación.',
      ],
      recommended: ['gaming', 'advanced'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     13. Timer Resolution
  ══════════════════════════════════════════════════════════ */
  {
    id:          'timerresolution',
    name:        'Timer Resolution',
    subtitle:    'Windows Timer Utility',
    icon:        '⏱️',
    category:    'Sistema',
    categories:  ['Latencia', 'Rendimiento', 'Sistema'],
    version:     '1.4.0',
    compat:      'Windows 10 / 11',
    description: 'Ajusta la resolución del temporizador del sistema de Windows para reducir la granularidad de la temporización en aplicaciones y juegos.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['advanced'],
    info: {
      what: 'Timer Resolution es una utilidad que permite modificar la resolución del temporizador global de Windows. Windows utiliza un temporizador del sistema para gestionar la temporización de procesos, sueños (sleeps) y otras operaciones relacionadas con el tiempo. Por defecto, la resolución de este temporizador en Windows es de 15.6 ms. Reducirla a 1 ms (o incluso menos en algunos sistemas) aumenta la precisión de las operaciones de temporización.',
      why: 'Muchas aplicaciones en tiempo real, como juegos, utilizan llamadas de temporización del sistema. Una resolución más alta (granularidad más fina) puede permitir que el juego gestione sus loops con mayor precisión. En Windows 11, Microsoft cambió el comportamiento del timer global, haciendo que aplicaciones individuales puedan solicitar su propia resolución sin afectar al sistema global.',
      howWorks: [
        'Resolución por defecto: 15.6 ms (15625 µs). El sistema solo actualiza su reloj cada ~15 ms.',
        'Resolución a 1 ms (1000 µs): el sistema actualiza su reloj cada 1 ms, permitiendo mayor precisión en operaciones de temporización.',
        'Resolución mínima: la mayoría de hardware soporta hasta 0.5 ms (500 µs), aunque los beneficios más allá de 1 ms son muy discutibles.',
        'En Windows 11 (2004+): el cambio de timer resolution no es global por defecto: solo afecta al proceso que lo solicita. Algunos juegos ya gestionan esto internamente.',
      ],
      steps: [
        'Descarga Timer Resolution.',
        'Ejecútalo como Administrador.',
        'Observa la resolución actual del temporizador.',
        'Selecciona "Maximum" o escribe el valor deseado (1.0 ms = 10000 unidades de 100 ns).',
        'Haz clic en "Set Timer" para activar.',
        'Nota: en Windows 11 el efecto puede ser limitado al proceso de la herramienta misma.',
        'Para desactivar: cierra la aplicación o pulsa "Reset Timer".',
      ],
      dos: [
        'Medir objetivamente el impacto con herramientas de frametime antes y después.',
        'Investigar si el juego específico que juegas ya solicita una alta resolución de timer internamente.',
        'Desactivar cuando no uses el PC para gaming: una resolución más alta puede aumentar ligeramente el consumo de energía.',
      ],
      donts: [
        'No esperar un aumento masivo de FPS: el impacto varía enormemente según el juego, el hardware y Windows.',
        'No usar valores extremadamente bajos (< 0.5 ms) sin verificar la estabilidad del sistema.',
        'En Windows 11, el efecto global está limitado por diseño del sistema operativo.',
      ],
      benefits: [
        'Mayor precisión en operaciones de temporización del sistema.',
        'Potencial mejora en la consistencia del frametime en algunos juegos.',
        'Aplicable fácilmente y reversible al instante.',
      ],
      warnings: [
        'En Windows 11 Build 2004 y superior, la resolución global del temporizador no se comparte entre procesos. La herramienta Timer Resolution puede tener un impacto diferente al esperado en comparación con Windows 10. Verifica siempre el impacto real en tu sistema específico.',
        'Una mayor resolución del temporizador puede aumentar ligeramente el consumo de CPU en reposo.',
      ],
      recommended: ['advanced'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     14. WoMic
  ══════════════════════════════════════════════════════════ */
  {
    id:          'womic',
    name:        'WoMic',
    subtitle:    'Smartphone as Microphone',
    icon:        '🎙️',
    category:    'Audio',
    categories:  ['Audio'],
    version:     '4.1.0',
    compat:      'Windows 10 / 11',
    description: 'Utiliza tu smartphone Android o iOS como micrófono en tu PC. Compatible con conexión USB, Wi-Fi y Bluetooth.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['basic'],
    info: {
      what: 'WoMic es una aplicación que permite usar el micrófono de un smartphone (Android o iOS) como dispositivo de audio de entrada en Windows. Instala un driver de audio virtual en el PC y se comunica con la aplicación del móvil para transmitir el audio en tiempo real a través de USB, Wi-Fi o Bluetooth.',
      why: 'WoMic es útil cuando no tienes un micrófono dedicado y quieres usar el micrófono de tu móvil temporalmente para llamadas, Discord, juegos o videoconferencias. También puede ser útil como solución de emergencia o para pruebas rápidas de audio.',
      howWorks: [
        'USB: la opción más estable y con menor latencia. Requiere activar la depuración USB en Android y conectar el cable.',
        'Wi-Fi: sin cables, pero con más latencia potencial. Ambos dispositivos deben estar en la misma red Wi-Fi.',
        'Bluetooth: disponible en algunas versiones, con mayor latencia que Wi-Fi y USB.',
      ],
      steps: [
        'En el PC: descarga e instala WoMic Client (incluye el driver de audio virtual).',
        'En el móvil: descarga la app WoMic desde Google Play o App Store.',
        'Reinicia el PC después de instalar el driver de WoMic.',
        'Conecta usando el método preferido: para USB, activa la depuración USB en el móvil; para Wi-Fi, asegúrate de que ambos dispositivos estén en la misma red.',
        'Abre WoMic en el PC y en el móvil.',
        'En el móvil, selecciona el tipo de conexión (USB/Wi-Fi/Bluetooth).',
        'En el PC, selecciona el tipo de conexión y haz clic en "Connect".',
        'Una vez conectado, ve a Configuración de Sonido de Windows > Grabación y selecciona "WoMic Device" como micrófono predeterminado.',
        'En Discord: ve a Configuración > Voz y video, y selecciona "WoMic Device" como dispositivo de entrada.',
      ],
      dos: [
        'Usar la conexión USB para mayor estabilidad y menor latencia.',
        'Verificar que el driver WoMic está correctamente instalado en el Administrador de dispositivos.',
        'Ajustar el nivel de micrófono en Windows después de conectar.',
      ],
      donts: [
        'No esperar calidad de audio profesional: el micrófono del móvil tiene sus propias limitaciones.',
        'No usar Wi-Fi si hay mucha interferencia o el router está lejos.',
        'No olvidar que si el móvil se desconecta de la red o se apaga la pantalla puede interrumpirse la conexión en modo Wi-Fi.',
      ],
      benefits: [
        'Solución gratuita para usar el móvil como micrófono.',
        'Compatible con todas las aplicaciones que usen el micrófono de Windows.',
        'Múltiples modos de conexión (USB, Wi-Fi, Bluetooth).',
      ],
      warnings: [
        'La calidad del audio dependerá del micrófono específico del smartphone. WoMic es una solución práctica pero no reemplaza a un micrófono dedicado en términos de calidad.',
      ],
      recommended: ['basic'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     15. NVIDIA Profile Inspector
  ══════════════════════════════════════════════════════════ */
  {
    id:          'nvidiainspector',
    name:        'NVIDIA Profile Inspector',
    subtitle:    'Advanced NVIDIA Settings',
    icon:        '🟢',
    category:    'GPU',
    categories:  ['GPU', 'Gaming', 'Rendimiento'],
    version:     '2.4.0.4',
    compat:      'Windows 10 / 11',
    description: 'Accede y modifica perfiles de driver NVIDIA con configuraciones avanzadas que no están disponibles en el Panel de Control de NVIDIA.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: false,
    tags:        ['advanced'],
    info: {
      what: 'NVIDIA Profile Inspector (NPI) es una herramienta no oficial que permite acceder y modificar los perfiles de driver de NVIDIA. Muestra y permite editar todas las opciones del driver de NVIDIA, incluyendo muchas que no están disponibles en el Panel de Control de NVIDIA oficial. Cada juego puede tener su propio perfil con configuraciones específicas.',
      why: 'El Panel de Control de NVIDIA solo expone una fracción de las opciones realmente disponibles en el driver. NVIDIA Profile Inspector permite acceder a configuraciones ocultas como el modo de renderizado, opciones de anti-aliasing avanzadas, parámetros de latencia, y muchas otras opciones que pueden afectar al rendimiento y calidad visual de juegos específicos.',
      howWorks: [
        'Perfiles: cada juego tiene su propio perfil en el driver de NVIDIA. NPI permite ver y editar estos perfiles.',
        'Profile 0x00 (Base Profile): perfil global que afecta a todas las aplicaciones que no tienen un perfil específico.',
        'RBAR / Resizable BAR: configuración relacionada con el acceso directo de la GPU a la RAM del sistema.',
        'Frame Rate Limiter: limitador de FPS dentro del driver. Puede usarse como alternativa a otros limitadores.',
        'Low Latency Mode: equivalente al "Ultra Low Latency" del Panel de Control de NVIDIA.',
        'Antialiasing settings: configuraciones avanzadas de AA que pueden forzarse en juegos específicos.',
      ],
      steps: [
        'Descarga NVIDIA Profile Inspector (portable, no requiere instalación).',
        'Ejecútalo como Administrador.',
        'En el desplegable superior, selecciona el perfil del juego que quieres modificar, o el perfil base para cambios globales.',
        'Observa las diferentes secciones de configuración.',
        'Modifica SOLO los parámetros que entiendes completamente.',
        'Exporta el perfil antes de modificar nada (Profile > Export Profile).',
        'Aplica los cambios con el botón "Apply Changes".',
        'Para restaurar: importa el perfil exportado previamente, o reinstala el driver de NVIDIA para volver a los valores por defecto.',
      ],
      dos: [
        'Exportar/hacer backup del perfil antes de cualquier modificación.',
        'Modificar perfiles de juegos específicos en lugar del perfil global.',
        'Investigar cada opción específicamente antes de cambiarla.',
        'Probar los cambios uno a uno para identificar cuál tiene efecto.',
      ],
      donts: [
        'No modificar opciones que no entiendes completamente: algunas configuraciones pueden degradar la imagen o el rendimiento si se usan incorrectamente.',
        'No aplicar configuraciones genéricas de internet sin entender su efecto: lo que funciona en un sistema puede no funcionar en otro.',
        'No tocar las secciones de compatibilidad SLI u otras opciones que no son relevantes para tu configuración.',
        'No usar NPI como sustituto al Panel de Control de NVIDIA para configuraciones básicas.',
      ],
      benefits: [
        'Acceso a configuraciones de driver no disponibles en el Panel de Control oficial.',
        'Personalización por perfil de juego.',
        'Posibilidad de ajustar parámetros de latencia y renderizado avanzados.',
      ],
      warnings: [
        'NVIDIA Profile Inspector expone muchas opciones que pueden tener efectos negativos si se configuran incorrectamente. NO apliques configuraciones universales sin entender qué hace cada opción en tu sistema y juego específico. Siempre exporta el perfil original antes de modificar nada.',
        'Exclusivamente para tarjetas gráficas NVIDIA.',
      ],
      recommended: ['advanced', 'gaming'],
    },
  },

  /* ══════════════════════════════════════════════════════════
     16. ThrottleStop
  ══════════════════════════════════════════════════════════ */
  {
    id:          'throttlestop',
    name:        'ThrottleStop',
    subtitle:    'Intel CPU Tuning Tool',
    icon:        '🛑',
    category:    'CPU',
    categories:  ['CPU', 'Rendimiento', 'Latencia'],
    version:     '9.6.0',
    compat:      'Windows 10 / 11',
    description: 'Herramienta avanzada para procesadores Intel. Permite monitorizar y desbloquear limitaciones de throttling, ajustar voltajes y configurar parámetros del procesador.',
    downloadUrl: 'GITHUB_DOWNLOAD_URL',
    isOfficial:  false,
    isIntelOnly: true,
    tags:        ['advanced'],
    info: {
      what: 'ThrottleStop es una herramienta avanzada diseñada principalmente para procesadores Intel (especialmente en portátiles y algunos sobremesa) que permite monitorizar el estado de throttling del procesador, identificar por qué el procesador está siendo limitado, y en sistemas compatibles, ajustar voltajes y límites de potencia para optimizar el rendimiento térmico.',
      why: 'Muchos portátiles y algunos sobremesa con procesadores Intel implementan limitaciones agresivas de potencia y temperatura que reducen el rendimiento del procesador, especialmente bajo carga sostenida. ThrottleStop permite identificar exactamente qué está causando el throttling y, en muchos casos, ajustar estos límites para obtener un rendimiento más consistente.',
      howWorks: [
        'BD PROCHOT: "Bi-Directional Processor Hot". Cuando la GPU u otro componente está muy caliente, puede enviar una señal al procesador para que haga throttling. Esta opción puede modificar este comportamiento.',
        'Speed Shift: tecnología de Intel que permite al procesador responder más rápidamente a cambios de carga ajustando la frecuencia con mayor velocidad que el sistema de gestión de energía tradicional.',
        'C States: estados de bajo consumo del procesador cuando no está bajo carga. Pueden afectar a la latencia al "despertar".',
        'FIVR (Fully Integrated Voltage Regulator): en CPUs Intel compatibles, permite ajustar el voltaje del núcleo e independizar los voltajes. El undervolting (reducción de voltaje) es una técnica popular para reducir temperaturas manteniendo el rendimiento.',
        'Power Limits (PL1/PL2): límites de potencia del procesador. PL1 es el límite sostenido, PL2 el límite en burst de corta duración.',
        'TPL/Turbo Power Limit: ThrottleStop puede mostrar y ajustar estos límites en sistemas compatibles.',
        'Indicadores de throttling: ThrottleStop muestra en tiempo real qué está limitando el procesador: temperatura, potencia, corriente, o señal BD PROCHOT externa.',
      ],
      steps: [
        'Verifica que tienes un procesador Intel compatible antes de usar ThrottleStop.',
        'Descarga ThrottleStop y ejecuta sin instalar.',
        'En el panel principal, observa los indicadores en la parte superior: si hay una X roja sobre alguno de ellos (PROCHOT, VR, etc.), indica throttling activo.',
        'El panel de sensores (botón TPL) muestra temperaturas, frecuencias y el estado de throttling en tiempo real.',
        'Para monitorizar: simplemente observa los sensores durante el uso del PC para identificar cuándo y por qué hace throttling.',
        'Opciones avanzadas como undervolting o modificar power limits: SOLO si entiendes exactamente lo que estás haciendo y has investigado el proceso para tu CPU específica.',
      ],
      dos: [
        'Usar ThrottleStop principalmente para MONITORIZAR el throttling antes de intentar modificar nada.',
        'Investigar a fondo el proceso de undervolting específico para tu CPU antes de intentarlo.',
        'Hacer backup de la configuración actual antes de cualquier cambio.',
        'Monitorizar temperaturas con HWiNFO64 simultáneamente.',
      ],
      donts: [
        'ThrottleStop es para procesadores Intel únicamente. No usar en AMD sin investigar a fondo la compatibilidad.',
        'No modificar voltajes sin entender completamente el proceso: una configuración incorrecta puede causar inestabilidad del sistema o pantallas azules (BSOD).',
        'No aumentar voltajes sin saber lo que estás haciendo.',
        'No confiar en configuraciones genéricas de internet: cada procesador tiene un margen de undervolting diferente.',
        'No usar en portátiles con BIOS bloqueada que impida modificaciones de voltaje sin verificar la compatibilidad.',
      ],
      benefits: [
        'Identificación precisa de la causa del throttling (temperatura, potencia, BD PROCHOT).',
        'En sistemas compatibles: posible reducción de temperaturas mediante undervolting sin pérdida de rendimiento.',
        'Monitorización detallada del procesador Intel en tiempo real.',
        'Ajuste de Speed Shift para mejor respuesta del procesador.',
      ],
      warnings: [
        '⚠️ INTEL CPUs ONLY: ThrottleStop está diseñado principalmente para procesadores Intel. Su uso en procesadores AMD puede no tener los efectos esperados o puede causar problemas.',
        '⚠️ HERRAMIENTA AVANZADA: La modificación de voltajes, power limits y otros parámetros de CPU puede causar inestabilidad del sistema, pantallas azules (BSOD) o en casos extremos daños si no se realiza correctamente. Investiga a fondo el proceso específico para tu procesador antes de modificar cualquier parámetro.',
        'Para simplemente monitorizar el throttling, ThrottleStop es completamente seguro de usar. Los riesgos aparecen solo al modificar parámetros avanzados.',
      ],
      recommended: ['advanced'],
    },
  },

];

/* ──────────────────────────────────────────────────────────────
   CATEGORÍAS DE FILTRO
────────────────────────────────────────────────────────────── */
const FILTER_CATEGORIES = [
  { id: 'all',        label: '🔧 Todas',       value: null },
  { id: 'gaming',     label: '🎮 Gaming',      value: 'Gaming' },
  { id: 'hardware',   label: '🖥️ Hardware',    value: 'Hardware' },
  { id: 'rendimiento',label: '⚡ Rendimiento',  value: 'Rendimiento' },
  { id: 'latencia',   label: '🎯 Latencia',    value: 'Latencia' },
  { id: 'red',        label: '🌐 Red',         value: 'Red' },
  { id: 'perifericos',label: '⌨️ Periféricos', value: 'Periféricos' },
  { id: 'audio',      label: '🎙️ Audio',       value: 'Audio' },
  { id: 'cpu',        label: '🔲 CPU',         value: 'CPU' },
  { id: 'gpu',        label: '🎮 GPU',         value: 'GPU' },
  { id: 'monitoring', label: '📊 Monitor',     value: 'Monitorización' },
];

/* ──────────────────────────────────────────────────────────────
   GUÍA — ¿Qué herramienta necesito?
────────────────────────────────────────────────────────────── */
const GUIDE_ITEMS = [
  { icon: '🔬', question: '¿Quieres saber qué CPU tienes, frecuencias y RAM?', answer: 'CPU-Z', appId: 'cpuz' },
  { icon: '🎮', question: '¿Quieres saber qué GPU tienes exactamente?', answer: 'GPU-Z', appId: 'gpuz' },
  { icon: '📊', question: '¿Quieres monitorizar temperaturas mientras juegas?', answer: 'HWiNFO64', appId: 'hwinfo64' },
  { icon: '💾', question: '¿Quieres comprobar la salud de tu SSD o HDD?', answer: 'CrystalDiskInfo', appId: 'crystaldiskinfo' },
  { icon: '📡', question: '¿Quieres analizar problemas de latencia de Windows?', answer: 'LatencyMon', appId: 'latencymon' },
  { icon: '🖱️', question: '¿Quieres ajustar el polling rate de tu ratón?', answer: 'HIDUSBF', appId: 'hidusbf' },
  { icon: '🔥', question: '¿Quieres monitorizar y configurar tu GPU?', answer: 'MSI Afterburner', appId: 'msiafterburner' },
  { icon: '🛑', question: '¿Tienes Intel y quieres analizar throttling de CPU?', answer: 'ThrottleStop', appId: 'throttlestop' },
  { icon: '🧹', question: '¿Tienes 8GB RAM y sufres microcortes en juegos?', answer: 'ISLC', appId: 'islc' },
  { icon: '🌐', question: '¿Quieres optimizar la configuración de red para gaming?', answer: 'TCP Optimizer', appId: 'tcpoptimizer' },
  { icon: '⚙️', question: '¿Quieres gestionar el plan de energía de la CPU?', answer: 'Quick CPU', appId: 'quickcpu' },
  { icon: '🎙️', question: '¿Quieres usar tu móvil como micrófono?', answer: 'WoMic', appId: 'womic' },
  { icon: '⚡', question: '¿Quieres gestionar las interrupciones MSI de la GPU?', answer: 'MSI Utility V3', appId: 'msiutilityv3' },
  { icon: '🟢', question: '¿Quieres configuraciones avanzadas del driver NVIDIA?', answer: 'NVIDIA Profile Inspector', appId: 'nvidiainspector' },
];

/* ══════════════════════════════════════════════════════════════
   ESTADO DE LA APLICACIÓN
═══════════════════════════════════════════════════════════════ */
let currentCategory = null;
let currentSearch   = '';
let currentApp      = null;

/* ══════════════════════════════════════════════════════════════
   INICIALIZACIÓN
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initYear();
  initStats();
  renderFilters();
  renderTools();
  renderGuide();
  initSearch();
  initModal();
  initNavbar();
  initScrollTop();
  initMobileMenu();
});

/* ── Año en footer ────────────────────────────────────────────── */
function initYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ── Stats ─────────────────────────────────────────────────────── */
function initStats() {
  const el = document.getElementById('statTools');
  if (el) el.textContent = SITE_CONFIG.totalTools + '+';
}

/* ── Tema ──────────────────────────────────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem('poc-theme') || 'dark';
  setTheme(saved);

  const btn = document.getElementById('themeToggle');
  if (btn) btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('poc-theme', theme);
  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

/* ── Navbar scroll ─────────────────────────────────────────────── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Smooth close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('mobileMenu');
      if (menu) menu.classList.remove('open');
    });
  });
}

/* ── Mobile menu ───────────────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const menu   = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
}

/* ── Scroll to top ─────────────────────────────────────────────── */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ══════════════════════════════════════════════════════════════
   FILTROS
═══════════════════════════════════════════════════════════════ */
function renderFilters() {
  const container = document.getElementById('categoryFilters');
  if (!container) return;

  container.innerHTML = FILTER_CATEGORIES.map(cat => `
    <button
      class="filter-btn${cat.value === currentCategory ? ' active' : ''}"
      data-category="${cat.value || ''}"
      role="tab"
      aria-selected="${cat.value === currentCategory}"
    >
      ${cat.label}
    </button>
  `).join('');

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.category || null;
      setCategory(val);
    });
  });
}

function setCategory(value) {
  currentCategory = value || null;
  renderFilters();
  renderTools();
  const tools = document.getElementById('tools');
  if (tools) tools.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ══════════════════════════════════════════════════════════════
   BÚSQUEDA
═══════════════════════════════════════════════════════════════ */
function initSearch() {
  const input     = document.getElementById('searchInput');
  const clearBtn  = document.getElementById('searchClear');
  if (!input) return;

  input.addEventListener('input', () => {
    currentSearch = input.value.trim().toLowerCase();
    clearBtn.classList.toggle('visible', currentSearch.length > 0);
    renderTools();
  });

  clearBtn.addEventListener('click', () => {
    input.value  = '';
    currentSearch = '';
    clearBtn.classList.remove('visible');
    renderTools();
    input.focus();
  });
}

/* ══════════════════════════════════════════════════════════════
   FILTRAR APPS
═══════════════════════════════════════════════════════════════ */
function getFilteredApps() {
  return APPS.filter(app => {
    // Filtro de categoría
    const catMatch = !currentCategory || app.categories.includes(currentCategory);

    // Filtro de búsqueda
    const searchTerms = currentSearch.split(' ').filter(Boolean);
    const searchFields = [
      app.name.toLowerCase(),
      app.subtitle.toLowerCase(),
      app.description.toLowerCase(),
      app.category.toLowerCase(),
      ...app.categories.map(c => c.toLowerCase()),
    ].join(' ');

    const searchMatch = searchTerms.length === 0 ||
      searchTerms.every(term => searchFields.includes(term));

    return catMatch && searchMatch;
  });
}

/* ══════════════════════════════════════════════════════════════
   RENDER TOOLS
═══════════════════════════════════════════════════════════════ */
function renderTools() {
  const grid      = document.getElementById('toolsGrid');
  const noResults = document.getElementById('noResults');
  const info      = document.getElementById('resultsInfo');
  if (!grid) return;

  const filtered = getFilteredApps();

  // Mostrar info de resultados
  if (info) {
    if (currentSearch || currentCategory) {
      info.textContent = `${filtered.length} herramienta${filtered.length !== 1 ? 's' : ''} encontrada${filtered.length !== 1 ? 's' : ''}`;
    } else {
      info.textContent = '';
    }
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    grid.style.display = 'none';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  grid.style.display = 'grid';
  if (noResults) noResults.style.display = 'none';

  grid.innerHTML = filtered.map((app, idx) => buildCard(app, idx)).join('');

  // Bind events
  grid.querySelectorAll('.btn-download').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleDownload(btn.dataset.appId);
    });
  });

  grid.querySelectorAll('.btn-info').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(btn.dataset.appId);
    });
  });
}

function buildCard(app, idx) {
  const delay = Math.min(idx * 0.04, 0.4);
  const tagsHtml = app.tags.map(t => `<span class="info-tag ${t}">${tagLabel(t)}</span>`).join('');

  return `
    <div class="tool-card${app.isIntelOnly ? ' intel-only' : ''}${app.isOfficial ? ' official-source' : ''}"
         style="animation-delay: ${delay}s">
      <div class="card-tags">
        <span class="card-tag-special">⚠️ Intel Only</span>
        <span class="card-tag-official">✓ Fuente Oficial</span>
      </div>
      <div class="card-header">
        <div class="card-icon">${app.icon}</div>
        <div class="card-title-area">
          <div class="card-name">${app.name}</div>
          <div class="card-category">${app.category}</div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-desc">${app.description}</p>
      </div>
      <div class="card-meta">
        <span class="card-version">v${app.version}</span>
        <span class="card-compat">${app.compat}</span>
      </div>
      <div class="info-tags" style="margin-top:4px">${tagsHtml}</div>
      <div class="card-actions">
        <button class="btn btn-download" data-app-id="${app.id}" aria-label="Descargar ${app.name}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Descargar
        </button>
        <button class="btn btn-info" data-app-id="${app.id}" aria-label="Información de ${app.name}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          Información
        </button>
      </div>
    </div>
  `;
}

function tagLabel(t) {
  const map = { gaming: '🎮 Gaming', monitor: '📊 Monitor', advanced: '⚙️ Avanzado', basic: '✓ Básico' };
  return map[t] || t;
}

/* ══════════════════════════════════════════════════════════════
   DESCARGA
═══════════════════════════════════════════════════════════════ */
function handleDownload(appId) {
  const app = APPS.find(a => a.id === appId);
  if (!app) return;

  if (app.downloadUrl === 'GITHUB_DOWNLOAD_URL') {
    // Placeholder: muestra aviso
    showDownloadPlaceholder(app);
  } else {
    window.open(app.downloadUrl, '_blank', 'noopener,noreferrer');
  }
}

function showDownloadPlaceholder(app) {
  // Aviso temporal hasta que se añadan los enlaces reales
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed; bottom:80px; right:24px; z-index:9999;
    background:var(--bg-card); border:1px solid var(--border-accent);
    color:var(--text-primary); padding:14px 18px; border-radius:12px;
    font-size:0.85rem; max-width:300px; box-shadow:var(--shadow-modal);
    animation: fadeInUp 0.3s ease;
    display:flex; flex-direction:column; gap:6px;
  `;
  toast.innerHTML = `
    <strong style="color:var(--accent)">📥 ${app.name}</strong>
    <span style="color:var(--text-secondary)">El enlace de descarga se añadirá próximamente en GitHub.</span>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ══════════════════════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════════════════════ */
function initModal() {
  const overlay   = document.getElementById('modalOverlay');
  const closeBtn  = document.getElementById('modalClose');
  const closeBtnF = document.getElementById('modalCloseBtn');
  const dlBtn     = document.getElementById('modalDownloadBtn');

  if (closeBtn)  closeBtn.addEventListener('click', closeModal);
  if (closeBtnF) closeBtnF.addEventListener('click', closeModal);

  if (dlBtn) dlBtn.addEventListener('click', () => {
    if (currentApp) handleDownload(currentApp.id);
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(appId) {
  const app = APPS.find(a => a.id === appId);
  if (!app) return;
  currentApp = app;

  // Rellenar cabecera
  document.getElementById('modalIcon').textContent       = app.icon;
  document.getElementById('modalTitle').textContent      = app.name;
  document.getElementById('modalCategory').textContent   = app.category;
  document.getElementById('modalVersion').textContent    = `v${app.version}`;
  document.getElementById('modalCompat').textContent     = `✓ ${app.compat}`;

  // Construir cuerpo
  document.getElementById('modalBody').innerHTML = buildModalBody(app);

  // Mostrar
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Focus para accesibilidad
  setTimeout(() => {
    const closeBtn = document.getElementById('modalClose');
    if (closeBtn) closeBtn.focus();
  }, 300);
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  currentApp = null;
}

function buildModalBody(app) {
  const info = app.info;
  let html = '';

  // Aviso Intel Only
  if (app.isIntelOnly) {
    html += `
      <div class="info-warning">
        <span class="info-warning-icon">⚠️</span>
        <span><strong>Intel CPUs Only:</strong> Esta herramienta está diseñada principalmente para procesadores Intel. No está pensada para uso en procesadores AMD sin verificar la compatibilidad.</span>
      </div>
    `;
  }

  // Aviso fuente oficial
  if (app.isOfficial) {
    html += `
      <div class="info-tip">
        <span class="info-tip-icon">ℹ️</span>
        <span><strong>Descarga oficial:</strong> Esta aplicación se descarga directamente desde su web oficial, no desde GitHub.</span>
      </div>
    `;
  }

  // ¿Qué es?
  html += buildSection('¿Qué es?', `<p class="info-text">${info.what}</p>`);

  // ¿Para qué sirve?
  html += buildSection('¿Para qué sirve?', `<p class="info-text">${info.why}</p>`);

  // ¿Cómo funciona?
  if (info.howWorks && info.howWorks.length) {
    html += buildSection('Funciones principales', buildList(info.howWorks));
  }

  // Guía paso a paso
  if (info.steps && info.steps.length) {
    html += buildSection('Cómo utilizarlo paso a paso', buildList(info.steps, 'numbered'));
  }

  // Qué hacer
  if (info.dos && info.dos.length) {
    html += buildSection('¿Qué debo hacer?', buildList(info.dos));
  }

  // Qué NO hacer
  if (info.donts && info.donts.length) {
    html += buildSection('¿Qué NO debo tocar?', buildList(info.donts, 'cross'));
  }

  // Beneficios
  if (info.benefits && info.benefits.length) {
    html += buildSection('Beneficios potenciales', buildList(info.benefits));
  }

  // Advertencias
  if (info.warnings && info.warnings.length) {
    html += buildSection('⚠️ Advertencias importantes', info.warnings.map(w =>
      `<div class="info-warning"><span class="info-warning-icon">⚠️</span><span>${w}</span></div>`
    ).join(''));
  }

  // Para quién está recomendada
  if (info.recommended && info.recommended.length) {
    const recs = info.recommended.map(r => `<span class="info-tag ${r}">${tagLabel(r)}</span>`).join('');
    html += buildSection('Recomendada para', `<div class="info-tags">${recs}</div>`);
  }

  return html;
}

function buildSection(title, content) {
  return `
    <div class="info-section">
      <div class="info-section-title">${title}</div>
      ${content}
    </div>
  `;
}

function buildList(items, type = '') {
  const liItems = items.map(item => `<li>${item}</li>`).join('');
  return `<ul class="info-list ${type}">${liItems}</ul>`;
}

/* ══════════════════════════════════════════════════════════════
   GUÍA
═══════════════════════════════════════════════════════════════ */
function renderGuide() {
  const container = document.getElementById('guideGrid');
  if (!container) return;

  container.innerHTML = GUIDE_ITEMS.map(item => `
    <div class="guide-item" role="button" tabindex="0"
         onclick="openModalFromGuide('${item.appId}')"
         onkeypress="if(event.key==='Enter') openModalFromGuide('${item.appId}')">
      <div class="guide-question-icon">${item.icon}</div>
      <div>
        <p class="guide-question">${item.question}</p>
        <p class="guide-answer">${item.answer}</p>
      </div>
    </div>
  `).join('');
}

function openModalFromGuide(appId) {
  openModal(appId);
  // Scroll a tools si es necesario
  const toolsEl = document.getElementById('tools');
  if (toolsEl) {
    // Solo abre el modal, no necesita scroll
  }
}

/* ══════════════════════════════════════════════════════════════
   RESET FILTROS
═══════════════════════════════════════════════════════════════ */
function resetFilters() {
  currentCategory = null;
  currentSearch   = '';
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  const clearBtn = document.getElementById('searchClear');
  if (clearBtn) clearBtn.classList.remove('visible');
  renderFilters();
  renderTools();
}

/* ══════════════════════════════════════════════════════════════
   EXPONER FUNCIONES GLOBALES
═══════════════════════════════════════════════════════════════ */
window.resetFilters       = resetFilters;
window.setCategory        = setCategory;
window.openModalFromGuide = openModalFromGuide;
