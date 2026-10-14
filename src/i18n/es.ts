import { NAME, EMAIL, OWNER } from '../site';
import type { Copy } from './en';

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

export const es: Copy = {
  lang: 'es',
  ogLocale: 'es_ES',
  paths: { creators: 'creators', companies: 'companies', privacy: 'privacy', terms: 'terms', quiz: 'quiz' },
  skip: 'Saltar al contenido',
  slogan: 'De cero a producto.',
  example: 'Ejemplo',
  langMenu: 'Idioma',
  nav: { creators: 'Para creadores', companies: 'Para empresas', cta: 'Únete a la lista', aria: 'Principal', home: `${NAME}, inicio` },

  meta: {
    home: {
      title: `${NAME} · De cero a producto`,
      description:
        'De cero a producto. Elige un proyecto corto, termínalo con Slash, tu asistente de IA, y guárdalo en tu propia página. Gratis para creadores.',
    },
    creators: {
      title: `Para creadores: termina tu primer proyecto · ${NAME}`,
      description:
        'Proyectos cortos, un asistente de IA y una página para todo lo que termines. Las empresas verán lo que publiques cuando abramos. Gratis para creadores.',
    },
    companies: {
      title: `Para empresas: encuentra creadores por lo que hacen · ${NAME}`,
      description:
        'Publica un encargo corto, mira proyectos terminados y escribe a los creadores en la plataforma. Únete a la lista de espera.',
    },
    quiz: { title: `¿Qué tipo de maker eres? · ${NAME}`, description: 'Cinco preguntas, un minuto, sin registrarte. Descubre por dónde empezar. Tus respuestas se quedan en tu navegador.' },
    privacy: { title: `Privacidad · ${NAME}`, description: `Cómo trata ${NAME} el email que dejas en este sitio. Sin cookies, sin rastreo.` },
    terms: { title: `Términos · ${NAME}`, description: `Términos claros para el sitio de ${NAME} y la inscripción de acceso anticipado.` },
  },

  hero: {
    chip: 'Gratis para creadores',
    before: 'De cero ',
    mark: 'a producto.',
    after: '',
    sub: 'Elige un proyecto corto, termínalo con Slash, tu asistente de IA, y guárdalo en tu propia página.',
    ctaPrimary: 'Únete a la lista de espera',
    ctaSecondary: 'Cómo funciona',
  },

  cards: {
    aria: 'Pantallas de ejemplo de la app',
    practice: {
      label: 'Proyecto de prueba',
      title: 'Graba un video de 15 segundos de una bebida',
      rows: [
        ['Categoría', 'Videos cortos'],
        ['Tiempo', 'Unos 40 minutos'],
        ['Nivel', 'Empiezas desde cero'],
      ],
      body: 'Un plano, una idea. Slash pregunta, tú decides.',
      foot: 'Gratis. Nada es público hasta que lo publiques.',
    },
    brief: {
      label: 'Encargo',
      from: 'de una cafetería',
      title: 'Un video de 15 segundos para una cafetería',
      rows: [
        ['Categoría', 'Videos cortos'],
        ['Resultado', 'Un video vertical de 15 segundos'],
        ['Plazo', 'Una semana'],
      ],
      body: 'Enseña las nuevas bebidas de verano. Tono tranquilo y cálido.',
      foot: 'Publicado por una empresa',
    },
    coach: {
      label: 'Asistente de IA',
      you: 'Grabé las bebidas nuevas de la cafetería.',
      question: '¿Qué debería sentir un desconocido en los tres primeros segundos?',
      reply: 'Calma y calidez.',
      action: 'Crear una primera versión con IA',
      draftLabel: 'Borrador',
      draftChip: 'Hecho con ayuda de IA',
      draft: 'Empieza por la taza, no por el letrero. Vapor, la bebida que se sirve despacio, sin voz en off. Último fotograma: el nombre de la cafetería.',
      draftNote: 'Puedes editarlo. El proyecto sigue siendo tuyo.',
      mic: 'Habla en vez de escribir: toca el micrófono.',
    },
    page: {
      label: 'Tu página',
      name: 'Tu nombre',
      fields: 'Videos cortos · Pósters y logos',
      items: [
        { t: 'Video para una cafetería', f: 'Videos cortos' },
        { t: 'Póster para una noche de cine', f: 'Pósters y logos' },
        { t: 'Logo para una panadería', f: 'Pósters y logos' },
      ],
      foot: 'Las empresas solo ven lo que publicas.',
    },
  },

  catch: {
    title: 'Todo portfolio empieza con *un proyecto*.',
    text: `${NAME} te da el proyecto, a Slash para ayudarte a terminarlo y una página donde guardarlo.`,
  },

  examples: {
    title: 'Un primer proyecto puede verse *así*.',
    lead: 'Ocho ejemplos, uno por tipo de proyecto. Reproduce el clip, pon en marcha el temporizador, escucha el jingle. Los clientes son inventados y cada parte hecha con IA está marcada.',
    mine: 'Haz el tuyo',
    tags: { ai: 'Hecho con IA', code: 'Funciona de verdad', answer: 'La respuesta es de la IA' },
    nojs: 'Este ejemplo necesita JavaScript.',
    gallery: {
      video: { field: 'Videos cortos', t: 'Anuncio de una bebida, 15 segundos', for: 'Cliente inventado: Saltz8salt', len: '0:15', alt: 'Video: un anuncio de 15 segundos de una bebida con gas de lima y sal. Cristales de sal caen sobre el hielo, una cuña de lima salpica dentro del vaso, se sirve la bebida y la botella queda quieta en la luz dorada junto a un lago. La última pantalla dice Saltz8salt, alkoholfrei, Ein bisschen Salz. Ganz viel Sommer.' },
      poster: { field: 'Pósters y logos', t: 'Póster para una noche de cine', for: 'Cliente inventado: Cinema Orsa', alt: 'Un póster azul que dice NOCHE DE CINE, con una luna amarilla sobre un perfil de tejados. Viernes, 21:00, en la azotea, Cinema Orsa.' },
      timer: { field: 'Webs y herramientas pequeñas', t: 'Un temporizador para estudiar', for: 'Encargo inventado: la semana de exámenes de Sofia', modes: ['Estudio · 25 min', 'Descanso · 5 min'], group: 'Duración', start: 'Iniciar', pause: 'Pausa', resume: 'Reanudar', reset: 'Reiniciar', done: 'Se acabó el tiempo. Haz un descanso.', try: 'Pruébalo: toca Iniciar. Funciona de verdad.', test: 'Prueba de 10 s' },
      listing: { field: 'Anuncios de productos', t: 'Anuncio de una vela artesanal', for: 'Cliente inventado: Cera Cera', title: 'Vela de cedro y humo', points: ['Cera de soja vertida a mano', 'Dura unas 40 horas', 'Hecha en tandas pequeñas'], alt: 'Una vela encendida en un tarro de vidrio ámbar ahumado con mecha de madera y una etiqueta de papel que dice Cera Cera, cedar & smoke, sobre una mesita de noche de lino junto a un libro y una taza.' },
      post: { field: 'Posts y textos', t: 'Post para una tienda de plantas', for: 'Cliente inventado: Sunny Plants', handle: 'sunnyplants', caption: 'Sábado: trae una planta triste, llévate una feliz. Cambiamos de maceta todo el día.', alt: 'Dos potos sobre una mesa de madera en una tienda de plantas: uno mustio y amarillento en una maceta de plástico agrietada, junto a uno frondoso recién trasplantado a terracota.' },
      jingle: { field: 'Música y sonido', t: 'Jingle para un taller de bicis', for: 'Cliente inventado: Pedal Pals', play: 'Escuchar el jingle', pause: 'Pausar el jingle', seek: 'Posición en el jingle', hook: '“Pedal Pals, Pedal Pals!”', note: 'Cantado en inglés.' },
      logo: { field: 'Pósters y logos', t: 'Logo para una panadería', for: 'Cliente inventado: Forno Gufo', alt: 'Un logo: la cara de un búho azul marino hecha con una barra de pan, con dos espigas de trigo como cejas, sobre fondo amarillo. Debajo: forno gufo.' },
      prompt: {
        field: 'Prompts para IA', t: 'Un prompt para un plan de estudio', for: 'Encargo inventado: la semana de exámenes de Sofia', promptLabel: 'Prompt', answerLabel: 'IA', kinds: ['Tarea', 'Contexto', 'Límite', 'Formato'], weakLabel: 'Vago', strongLabel: 'Claro', switchLabel: 'Compara dos prompts', copy: 'Copiar el prompt', copied: 'Copiado', same: 'La misma IA, la misma pregunta. Solo cambia el prompt.',
        parts: ['Hazme un plan de estudio para esta semana.', 'Tengo examen de matemáticas el viernes y tengo que entregar un ensayo de historia el miércoles.', 'Puedo estudiar 90 minutos al día.', 'Una línea por día.'], weak: 'Ayúdame a estudiar.', weakAnswer: '¡Claro! Estudia un poco cada día, haz pausas, duerme bien y no te desanimes. ¡Mucha suerte!',
        answer: ['Lun: ejercicios de matemáticas, 45 min, y luego lectura de historia, 45 min.', 'Mar: esquema del ensayo, 60 min, y luego fórmulas de matemáticas, 30 min.', 'Mié: termina el ensayo, 60 min, y entrégalo.', 'Jue: un examen anterior de matemáticas, 90 min.', 'Vie: repaso de matemáticas, 30 min. Luego el examen. Descansa.'],
      },
    },
    items: {
      video: { t: 'Anuncio de una bebida, 15 segundos', cat: 'Videos cortos', lines: ['Saltz8salt', '0:15'] },
      poster: { t: 'Póster para una noche de cine', cat: 'Pósters y logos', lines: ['Noche', 'de cine', 'VIE · 21:00 · AZOTEA'] },
      web: { t: 'Un temporizador para estudiar', cat: 'Webs y herramientas pequeñas', lines: ['Temporizador de estudio', 'Iniciar'] },
      listing: { t: 'Anuncio de una vela artesanal', cat: 'Anuncios de productos', lines: ['Vela de cedro y humo', 'Cera de soja vertida a mano', 'Dura unas 40 horas', 'Hecha en tandas pequeñas'] },
      post: { t: 'Post para una tienda de plantas', cat: 'Posts y textos', lines: ['tiendaplantas', 'Sábado: trae una planta triste,', 'llévate una feliz.', 'Cambiamos de maceta todo el día.'] },
      music: { t: 'Jingle para un taller de bicis', cat: 'Música y sonido', lines: ['Jingle de bicis', '0:20'] },
      logo: { t: 'Logo para una panadería', cat: 'Pósters y logos', lines: ['gufo', 'PANADERÍA'] },
      prompt: { t: 'Un prompt para un plan de estudio', cat: 'Prompts para IA', lines: ['Escribe un plan de tres líneas', 'para mi semana de estudio,', 'una línea por día.', 'Lun: matemáticas, 40 minutos', 'Mar: historia, 30 minutos', 'Mié: descanso y luego repaso'] },
    },
    people: {
      Sanne: { cats: 'Videos cortos · Posts y textos', bio: 'Hago que las cosas pequeñas se vean tranquilas.' },
      Elin: { cats: 'Pósters y logos', bio: 'Pósters, logos y una tipografía buenísima.' },
      Mats: { cats: 'Webs y herramientas pequeñas · Prompts para IA', bio: 'Herramientas pequeñas que hacen una sola cosa y la hacen bien.' },
    },
    profile: { label: 'Página de ejemplo', msg: `Escribe en ${NAME}`, next: 'Tu próximo proyecto' },
  },

  demo: {
    alt: 'La app slashkern abriéndose: Slash, el puntero con ojos, mira a su alrededor y se queda junto al nombre.',
    play: 'Reproducir video',
    pause: 'Pausar video',
  },

  quiz: {
    nav: 'Quiz',
    eyebrow: 'Quiz de un minuto',
    title: '¿Qué tipo de *maker* eres?',
    lead: 'Cinco preguntas, sin registrarte. Es un juego para adivinar por dónde empezar, no un examen. Tus respuestas se quedan en tu navegador.',
    start: 'Empezar el quiz',
    noscript: 'El quiz necesita JavaScript. Aun así, puedes unirte a la lista de espera aquí abajo.',
    progress: 'Pregunta {n} de {total}',
    friend: 'A un amigo le salió “{name}”. ¿Y a ti?',
    youAre: 'Eres',
    cardTop: '¿Qué tipo de maker eres?',
    fun: 'Es un juego, no un examen.',
    share: 'Compartir mi resultado',
    saved: 'Imagen guardada',
    copy: 'Copiar enlace',
    copied: 'Enlace copiado',
    again: 'Repetir el quiz',
    join: 'Únete a la lista de espera',
    shareText: `Soy {name} en ${NAME}. ¿Qué tipo de maker eres tú?`,
    firstLabel: 'Tu primer proyecto',
    also: 'También en tu mezcla',
    // Cada respuesta es un proyecto real de la app: [texto, tipo, índice del proyecto en el campo de la app] (app: src/scripts/fields.ts, mismo orden).
    // Cada pregunta tiene los siete tipos, en distinto orden, y ningún proyecto se repite. Gana el tipo más elegido; la tarjeta muestra el proyecto elegido en él.
    questions: [
      { q: 'La tienda pequeña de un amigo necesita ayuda. Te ofreces a…', a: [['Recortar su clip lento y quedarte con los mejores segundos.', 'video', 0], ['Diseñar un sticker para su puerta.', 'poster', 1], ['Reescribir su bio para que suene a ellos.', 'posts', 3], ['Arreglar el botón de Comprar, que no funciona.', 'web', 0], ['Reescribir el anuncio al que nadie responde.', 'listing', 0], ['Elegir la música para su video.', 'music', 1], ['Hacer que la IA escriba su post, con datos reales.', 'prompt', 0]] },
      { q: 'El chat del grupo te necesita. Tú…', a: [['Arreglas la playlist de la fiesta.', 'music', 0], ['Haces que la IA organice la cena de cumpleaños.', 'prompt', 2], ['Grabas una broma de 10 segundos sobre el altavoz desaparecido.', 'video', 1], ['Eliges 6 imágenes para la habitación nueva de una amiga.', 'poster', 2], ['Escribes la felicitación de cumpleaños de tres formas.', 'posts', 2], ['Encuentras el truco en la regla del grupo.', 'web', 2], ['Vendes tu chaqueta vieja sin bajar el precio.', 'listing', 2]] },
      { q: 'Algo online va mal. ¿Qué arreglas primero?', a: [['Un comentario grosero que pide una respuesta tranquila.', 'posts', 4], ['Un descuento que hace que todo cueste más.', 'web', 3], ['Alguien que dejó de responder tras un “¿sigue disponible?”', 'listing', 5], ['Una playlist con un nombre que nadie abre.', 'music', 3], ['Una IA que se inventa las respuestas.', 'prompt', 3], ['Subtítulos demasiado pequeños para leerlos.', 'video', 3], ['Una foto oscura de unas zapatillas geniales.', 'poster', 3]] },
      { q: '¿Qué te daría más orgullo enseñar?', a: [['Una encuesta que mostró qué comprarían los demás.', 'listing', 4], ['Un ritmo que un gimnasio usa en sus videos.', 'music', 4], ['Un quiz con IA que ayudó a una amiga a estudiar.', 'prompt', 1], ['Una entrevista de 20 segundos que hizo reír a todos.', 'video', 2], ['La miniatura que más gente abrió.', 'poster', 5], ['El nombre de un nuevo sabor de helado.', 'posts', 5], ['Una respuesta automática a “¿precio?”', 'web', 4]] },
      { q: 'Elige un proyecto para este fin de semana.', a: [['Pasos tan exactos que un robot podría regar tu albahaca.', 'web', 5], ['Un video de 15 segundos para vender una salsa picante.', 'listing', 1], ['Cuatro versos pegadizos para una cocina diminuta de estudiantes.', 'music', 5], ['Una tabla hecha con IA de quién debe qué en casa.', 'prompt', 4], ['Comentario deportivo sobre un clip de skate.', 'video', 4], ['La primera imagen de un post, para que la gente siga deslizando.', 'poster', 4], ['Un texto que haga responder a tus amigos.', 'posts', 0]] },
    ],
    results: {
      video: { name: 'Videomaker', line: 'Ves la escena antes que nadie.' },
      poster: { name: 'Designer', line: 'Notas lo que no cuadra y lo arreglas.' },
      posts: { name: 'Storyteller', line: 'Lo dices más corto y mejor.' },
      web: { name: 'Builder', line: 'Prefieres hacer la cosa a hablar de ella.' },
      listing: { name: 'Seller', line: 'Sabes explicar por qué algo vale la pena.' },
      music: { name: 'Soundmaker', line: 'Oyes lo que necesita un momento.' },
      prompt: { name: 'Prompter', line: 'Le haces a la IA mejores preguntas que casi todo el mundo.' },
    },
    projects: {
      poster: ['Haz legible una story demasiado cargada', 'Describe un sticker para un bar', 'Describe 6 imágenes para la habitación de Elena', 'Arregla una foto oscura de zapatillas', 'Planifica la primera imagen de un post', 'Planifica 2 miniaturas y elige la ganadora'],
      posts: ['Reescribe un texto para que tus amigos respondan', 'Escribe un recordatorio amable para Leo', 'Escribe una felicitación de cumpleaños de tres formas', 'Reescribe una bio que no dice nada', 'Responde a un comentario grosero', 'Ponle nombre a un sabor nuevo'],
      web: ['Arregla el botón que se queda verde', 'Escribe las reglas de un quiz de pizzas', 'Encuentra el truco y arregla la regla', 'Arregla un descuento que sale más caro', 'Escribe una respuesta automática para “¿precio?”', 'Escribe pasos que un robot pueda seguir'],
      video: ['Quédate con los 6 mejores segundos', 'Planifica un clip gracioso de 10 segundos', 'Entrevista a alguien sobre un momento incómodo', 'Convierte un texto diminuto en subtítulos legibles', 'Ponle comentario deportivo a un clip de skate', 'Responde a un comentario con un video'],
      listing: ['Reescribe el anuncio de una lámpara al que nadie responde', 'Planifica un video de 15 segundos de salsa picante', 'Mantén tu precio sin dejar de ser amable', 'Reescribe el mensaje pesado de una tienda', 'Escribe una encuesta: ¿stickers o postales?', 'Responde a “¿Sigue disponible?”'],
      music: ['Quita una canción y ordena el resto', 'Elige cuándo entra la música', 'Responde a un mensaje de un mal día', 'Cambia el nombre de una playlist que nadie abre', 'Marca un ritmo con los dedos para un gimnasio', 'Escribe cuatro versos pegadizos para tararear'],
      prompt: ['Reescribe el prompt de Dana con sus datos', 'Haz que una IA examine a Sofia', 'Organiza la cena de Giulia con un solo prompt', 'Evita que una IA se invente respuestas', 'Convierte gastos desordenados en una tabla', 'Ayuda a un amigo a elegir apartamento'],
    },
  },

  band: {
    title: '¿Qué tipo de maker eres?',
    text: 'Un minuto, cinco preguntas, sin registrarte.',
    cta: 'Haz el quiz',
  },

  spot: {
    title: 'Tu idea, *plano a plano.*',
    text: 'Elige el gancho y tres planos, escribe el texto en pantalla. La app los convierte en una página de storyboard. Luego lo haces tú: lo grabas con el móvil o usas una herramienta de video con IA.',
    steps: ['Elige un proyecto de videos cortos.', 'Elige el gancho y tres planos.', 'Escribe el texto en pantalla y el pie del video.', 'Recibe tu storyboard.'],
    app: 'En la app',
    out: 'Lo que puedes hacer',
    ai: 'Hecho con ayuda de IA',
    labelApp: 'Video: un storyboard de cuatro viñetas construido paso a paso en la app',
    labelOut: 'Video: un anuncio terminado de 15 segundos para una bebida inventada, hecho con herramientas de IA',
    note: 'La bebida, Saltz8salt, es inventada. La parte de la app es una grabación del prototipo real. El anuncio está hecho con herramientas de IA y se indica como tal.',
  },

  how: {
    id: 'como-funciona',
    title: 'Hazlo. Guárdalo. *Que te encuentren.*',
    steps: [
      { n: '01', t: 'Hazlo con Slash', d: 'Elige un proyecto corto. Slash te hace una pregunta a la vez y, si quieres, prepara una primera versión. La editas tú, así que el proyecto sigue siendo tuyo.' },
      { n: '02', t: 'Guárdalo en tu página', d: 'Todo lo que terminas va a tu propia página. Se queda privado hasta que lo publiques.' },
      { n: '03', t: 'Que te encuentren las empresas', d: `Cuando abramos, las empresas podrán ver lo que publiques y escribirte en ${NAME}. Tu email sigue siendo privado.` },
    ],
  },

  find: {
    id: 'como-te-encuentran',
    title: 'Tus proyectos. *Tú decides.*',
    lead: 'Tú eliges qué ven las empresas y con quién hablas.',
    rows: [
      ['Las empresas ven', 'Solo los proyectos que te enorgullecen.'],
      ['Tu email', 'Se queda privado. Las empresas te escriben en slashkern.'],
      ['Hacerlo público', 'Un toque, cuando quieras.'],
      ['Para creadores', 'Unirte, crear y publicar es gratis.'],
    ],
    notice: 'Tu página muestra lo que sabes hacer.',
  },

  fields: [
    { name: 'Videos cortos', line: 'Planifica, graba y monta 15 segundos en torno a una idea.' },
    { name: 'Pósters y logos', line: 'Diseña un póster o un logo para un negocio pequeño y explica por qué.' },
    { name: 'Posts y textos', line: 'Escribe un post que suene a persona, no a anuncio.' },
    { name: 'Webs y herramientas pequeñas', line: 'Construye una página o una herramienta pequeña, un paso que funcione cada vez.' },
    { name: 'Anuncios de productos', line: 'Cuéntale a un desconocido exactamente qué recibe.' },
    { name: 'Música y sonido', line: 'Crea una pieza corta o un jingle para alguien en concreto.' },
    { name: 'Prompts para IA', line: 'Escribe instrucciones claras para una IA y comprueba lo que responde.' },
  ],

  creatorsBlock: {
    title: 'Empieza en pequeño. *Termina* algo.',
    text: 'Elige un proyecto corto, termínalo con Slash y guárdalo en tu página. Gratis para creadores.',
    link: 'Más para creadores',
  },
  companiesBlock: {
    title: 'Olvida el CV. *Mira lo que hacen.*',
    text: 'Un CV dice lo que alguien sabe hacer. Un proyecto terminado lo demuestra.',
    points: ['Publica un encargo corto.', 'Mira proyectos terminados.', 'Escribe a los creadores en la plataforma.'],
    link: 'Más para empresas',
  },

  faq: {
    title: 'Preguntas, *respondidas.*',
    more: '¿Otra pregunta? Escríbenos:',
    items: [
      { q: '¿Es gratis para creadores?', a: 'Sí. Nunca pagas, ni siquiera para publicar.' },
      { q: 'Empiezo desde cero. ¿Puedo unirme?', a: 'Sí, es para ti. Un proyecto de prueba lleva unos 40 minutos y Slash te ayuda en cada paso.' },
      { q: '¿La IA hace mi proyecto por mí?', a: 'Te ayuda, pero lo terminas tú. Slash te hace preguntas y te señala lo que falta. ¿Quieres una base? Prepara una primera versión, marcada como Hecho con ayuda de IA. La editas y decides tú qué publicar.' },
      { q: '¿Es una estafa?', a: 'No. Los creadores nunca pagan, por ahora no se paga a nadie y tú decides qué se hace público. Si alguien te pide dinero por un proyecto, no somos nosotros. Cuéntanoslo.' },
      { q: '¿Qué puedo hacer?', a: 'Siete tipos de proyecto: videos cortos, pósters y logos, posts y textos, webs y herramientas pequeñas, anuncios de productos, música y sonido, y prompts para IA.' },
      { q: '¿Cómo me contactan las empresas?', a: `A través de ${NAME}. Lees el mensaje y decides si respondes. Tu email sigue siendo privado.` },
      { q: '¿Quién puede unirse, y dónde?', a: 'Cualquier persona de 18 años o más, en toda Europa. La app viene en siete idiomas.' },
      { q: '¿Cuándo abre?', a: `Todavía no hay fecha. Aún lo estamos construyendo. Deja tu email y te escribimos una sola vez, cuando abra.` },
    ],
  },

  final: {
    id: 'early-access',
    title: 'Entra de los primeros.',
    text: `Un solo email nuestro, cuando ${NAME} abra. Nada más.`,
  },

  form: {
    emailLabel: 'Email',
    emailPlaceholder: 'tu@ejemplo.com',
    roleLabel: 'Me uno como',
    roleCreator: 'Creador/a',
    roleCompany: 'Empresa',
    consentBefore: `Acepto que ${NAME} guarde mi email para avisarme cuando abra. Tengo 18 años o más. Consulta la página de `,
    consentLink: 'Privacidad',
    consentAfter: '.',
    submit: 'Únete a la lista de espera',
    sending: 'Enviando…',
    small: `Usamos tu email solo para esto. Puedes pedirnos que lo borremos cuando quieras: ${EMAIL}`,
    errEmailEmpty: 'Escribe tu dirección de email.',
    errEmailInvalid: 'Escribe una dirección de email válida, como nombre@ejemplo.com.',
    errConsent: 'Marca la casilla para continuar.',
    errSend: `No se pudo enviar. Inténtalo de nuevo o escribe a ${EMAIL}.`,
    okTitle: 'Estás en la lista.',
    okText: `Gracias. Te escribiremos una sola vez, cuando ${NAME} abra.`,
    shareTitle: 'Trae a un amigo.',
    shareText: 'Trae a tus amigos y te invitamos antes.',
    shareButton: 'Comparte tu enlace',
    shareCopy: 'Copiar enlace',
    shareCopied: 'Enlace copiado',
    shareMessage: `Me acabo de unir a la lista de ${NAME}: de cero a producto.`,
  },

  footer: {
    contact: 'Contacto',
    follow: 'Instagram',
    legal: 'Legal',
    share: 'Compartir este sitio',
    shareCopied: 'Enlace copiado',
    shareMessage: `${NAME}: de cero a producto.`,
  },

  creatorsPage: {
    before: 'Termina tu ',
    mark: 'primer proyecto',
    after: '.',
    sub: 'Proyectos cortos para empezar desde cero. Slash te ayuda, tú terminas, y todo va a tu propia página.',
    cta: 'Únete a la lista de espera',
    ctaSecondary: 'Conoce a Slash',
    slashSays: 'Hola, soy Slash. Hago preguntas, te señalo lo que falta y preparo una primera versión cuando la quieras.',
    coachTitle: 'Slash te ayuda. Tú terminas.',
    coachText: 'Slash es una IA. Te pregunta para quién es el proyecto y qué quitarías. ¿Quieres una base? Pide una primera versión y hazla tuya.',
    doTitle: 'Lo que hace Slash',
    doItems: ['Hace una pregunta a la vez.', 'Señala lo que no está claro o falta.', 'Prepara una primera versión si se lo pides, marcada como Hecho con ayuda de IA.'],
    dontTitle: 'Lo que no hace Slash',
    dontItems: ['Publica cosas por ti.', 'Toma tus decisiones.', 'Esconde su ayuda.'],
    fieldsTitle: 'Siete cosas que puedes *hacer*.',
    fieldsText: 'Todas son cortas y empiezan desde cero. Elige una.',
    pageTitle: 'Una página con *tu nombre*.',
    pageText: 'Todo lo que terminas vive en una sola página, tu KernCard. Las empresas solo ven lo que publicas. Esta es de ejemplo.',
    publishTitle: 'Tú decides qué se hace público.',
    publishSteps: [
      { t: 'Termina el proyecto', d: 'Se queda privado mientras lo haces.' },
      { t: 'Publícalo en tu página', d: 'Pulsa publicar cuando te guste el resultado.' },
      { t: 'Las empresas pueden encontrarlo', d: 'Exploran los proyectos publicados por categoría.' },
      { t: `Pueden escribirte en ${NAME}`, d: 'Tu email sigue siendo privado y tú decides si respondes.' },
    ],
    ctaTitle: 'Empieza a crear.',
    ctaText: `Un solo email nuestro, cuando ${NAME} abra.`,
  },

  companiesPage: {
    before: 'Encuentra creadores por lo que han ',
    mark: 'hecho',
    after: '.',
    sub: 'Publica un encargo corto, mira proyectos terminados y escribe a los creadores que te gusten.',
    cta: 'Únete a la lista de espera',
    ctaSecondary: 'Cómo funciona',
    showTitle: 'Lo que publicas. Lo que ves.',
    showText: 'Pantallas de ejemplo, no encargos ni creadores reales.',
    browseTitle: 'Explora creadores por *lo que hicieron*.',
    browseText: 'Cada creador tiene una página de proyectos terminados. Estos son ejemplos, no personas reales.',
    featuresTitle: 'Lo que puedes hacer',
    features: [
      { t: 'Publica un encargo corto', d: 'Unas líneas: qué necesitas, la categoría y cómo es un buen resultado.' },
      { t: 'Pega tu web y recibe un borrador', d: 'Pega tu enlace y la IA redacta un borrador de encargo. Tú lo editas y nada se publica sin ti.' },
      { t: 'Mira proyectos terminados', d: 'Explora por categoría. Ves lo que alguien hizo, no solo lo que dice que sabe hacer.' },
      { t: 'Escribe en la plataforma', d: `Escribe a los creadores a través de ${NAME}. Su email sigue siendo privado y ellos eligen si responden.` },
    ],
    howTitle: 'Cómo funciona para las empresas',
    steps: [
      { n: '01', t: 'Publica un encargo corto', d: 'Unas líneas sobre lo que necesitas y cómo es un buen resultado.' },
      { n: '02', t: 'Mira proyectos', d: 'Los creadores los hacen con Slash. Tú exploras lo que publican.' },
      { n: '03', t: 'Escribe a los creadores', d: 'A través de la plataforma. Su email sigue siendo privado.' },
    ],
    ctaTitle: 'Publica tu primer encargo.',
    ctaText: `Un solo email nuestro, cuando ${NAME} abra.`,
  },

  legal: {
    updated: 'Última actualización',
    back: 'Volver al inicio',
    privacy: {
      title: 'Privacidad',
      intro: `Esto es una traducción. Si difiere de la versión en inglés, prevalece la versión en inglés. Esta página cubre solo este sitio web: la página de acceso anticipado. Explica qué datos personales tratamos, por qué, y qué puedes hacer tú al respecto. La app de ${NAME} tendrá su propia página de privacidad cuando abra.`,
      summaryTitle: 'En resumen',
      summary: [
        ['Quién', `${OWNER} (Italia) gestiona ${NAME} y es el responsable del tratamiento. Contacto: ${mail}.`],
        ['Qué', 'Tu email, si te unes como creador o como empresa, la casilla marcada y tu código para compartir (más el de un amigo, si usaste su enlace). Netlify también puede guardar datos técnicos, como tu dirección IP.'],
        ['Por qué', `Para avisarte cuando ${NAME} abra y para invitar antes a quienes traen amigos. Sin newsletter, sin publicidad.`],
        ['Dónde', 'Netlify (EE. UU.) aloja el sitio y guarda las inscripciones por nosotros. Akismet (EE. UU.) las revisa para detectar spam.'],
        ['Cuánto tiempo', `Hasta que te avisemos de que ${NAME} está abierto o nos pidas borrarlo, y nunca más de 12 meses desde que te inscribiste.`],
        ['Tus derechos', `Escribe a ${mail} para ver, corregir o borrar tus datos, o para retirar tu consentimiento.`],
        ['Cookies', 'Ninguna, así que no hay banner de cookies. Sin analítica, sin rastreo, sin publicidad. El quiz funciona en tu navegador y no envía nada.'],
      ],
      sections: [
        {
          h: 'Quién es el responsable',
          p: [`El responsable del tratamiento es ${OWNER}, que desarrolla y gestiona ${NAME} desde Italia. Para cualquier asunto sobre tus datos, escribe a ${mail}.`],
        },
        {
          h: 'Qué recogemos',
          p: [
            'Cuando te inscribes en el acceso anticipado, el formulario envía: tu dirección de email; si te unes como creador o como empresa; que marcaste la casilla para dar tu consentimiento y confirmar que tienes 18 años o más; el idioma de la página; un código aleatorio para tu propio enlace de compartir; y, si abriste el enlace de un amigo, el código de ese amigo.',
            'Netlify, que gestiona el formulario, también puede guardar datos técnicos con cada inscripción, como tu dirección IP, el tipo de navegador y la página desde la que lo enviaste.',
            'Cuando abres cualquier página, los servidores de Netlify también tratan datos técnicos, como tu dirección IP, tu navegador y la dirección de la página (incluido un código para compartir, si el enlace lo tiene), para entregar la página y proteger el sitio.',
            'No recogemos nada más. No te pedimos el nombre.',
          ],
        },
        {
          h: 'Para qué los usamos y la base legal',
          p: [
            `Tu inscripción: para avisarte cuando ${NAME} abra y, si tus amigos se inscriben con tu enlace, para invitarte antes. Nada más: sin newsletter, sin publicidad, y nunca damos tu email a las empresas de ${NAME}. La base legal es tu consentimiento (art. 6(1)(a) del RGPD), que das al marcar la casilla.`,
            'Datos técnicos y comprobación de spam: para entregar el sitio, mantenerlo seguro y mantener fuera de la lista las inscripciones falsas. La base legal es nuestro interés legítimo en tener un sitio web que funcione y sea seguro (art. 6(1)(f) del RGPD). No usamos estos datos para rastrearte ni para elaborar perfiles sobre ti.',
            `Darnos tu email es decisión tuya. Sin él, no podemos avisarte cuando ${NAME} abra. No tomamos decisiones automatizadas sobre ti: traer amigos solo adelanta tu invitación.`,
          ],
        },
        {
          h: 'Quién los recibe',
          p: [
            'Netlify, Inc. (EE. UU.) aloja este sitio y guarda las inscripciones por nosotros. Actúa en nuestro nombre, como encargado del tratamiento, conforme a su acuerdo de tratamiento de datos. Netlify revisa cada inscripción para detectar spam con Akismet, un servicio de Automattic, Inc. (EE. UU.). Consulta las páginas de privacidad de <a href="https://www.netlify.com/privacy/" rel="noopener">Netlify</a> y de <a href="https://automattic.com/privacy/" rel="noopener">Automattic</a>.',
            'No vendemos tus datos ni se los damos a nadie más. Si más adelante usamos un servicio de correo para escribirte, lo nombraremos antes en esta página.',
          ],
        },
        {
          h: 'Datos fuera de la UE',
          p: ['Netlify y Akismet tienen su sede en EE. UU., así que tus datos también se tratan allí. Netlify, Inc. dice que participa en el Marco de Privacidad de Datos UE-EE. UU. (EU-U.S. Data Privacy Framework), que la Comisión Europea consideró que ofrece una protección adecuada (decisión del 10 de julio de 2023), y que su acuerdo de tratamiento de datos incluye las Cláusulas Contractuales Tipo de la UE. Puedes pedirnos más detalles sobre estas garantías.'],
        },
        {
          h: 'Cuánto tiempo los conservamos',
          p: [
            `Tu inscripción: hasta que te hayamos avisado de que ${NAME} está abierto, o hasta que retires tu consentimiento o nos pidas borrarla, y nunca más de 12 meses desde que te inscribiste. Después la borramos de Netlify, incluida la lista de spam, y de cualquier copia que guardemos.`,
            'Datos técnicos: Netlify conserva los registros (logs) de sus servidores según sus propias normas de retención. Nosotros no los descargamos ni los conservamos.',
          ],
        },
        {
          h: 'Retirar tu consentimiento',
          p: [`Puedes retirar tu consentimiento en cualquier momento escribiendo a ${mail}. Entonces borramos tu inscripción (email, rol y códigos) y no te escribimos. Si tus amigos se inscribieron con tu enlace, sus inscripciones se mantienen, pero tu código deja de llevar a ti. Retirar el consentimiento no hace ilícito lo que hicimos antes.`],
        },
        {
          h: 'Tus derechos',
          p: [`Según el RGPD puedes pedirnos ver tus datos y recibir una copia, corregirlos, borrarlos, limitar cómo los usamos, o que te los enviemos en un formato común para llevarlos a otro sitio. También puedes oponerte a que usemos datos técnicos. Escribe a ${mail}: respondemos en un plazo de un mes. Si crees que tratamos tus datos de forma incorrecta, puedes presentar una reclamación ante la autoridad italiana de protección de datos (<a href="https://www.garanteprivacy.it" rel="noopener">Garante per la protezione dei dati personali</a>) o ante la autoridad del país de la UE donde vives o ejerces tu actividad.`],
        },
        {
          h: 'Cookies',
          p: [
            'Este sitio no instala cookies ni usa tecnologías similares, como el almacenamiento local o los píxeles de rastreo. No tiene analítica ni publicidad. Como no hay cookies, no hay banner de cookies.',
            'Las fuentes, imágenes y videos son archivos de este sitio, así que abrir una página no envía nada a otras empresas. Solo Netlify, que aloja el sitio, recibe tu solicitud.',
            'El quiz funciona en tu navegador. Tus respuestas no se guardan ni se envían, y desaparecen al recargar la página. Un enlace de quiz compartido solo muestra qué resultado obtuviste (por ejemplo ?r=video). Los botones de compartir abren el menú de compartir de tu teléfono o copian el enlace. No vemos a quién se lo envías; solo vemos las inscripciones que llegan por tu enlace.',
            'El enlace de Instagram y el del Garante te llevan a esos sitios web, donde se aplican sus propias normas.',
            'Si alguna vez añadimos cookies o analítica, actualizaremos antes esta página y pediremos tu consentimiento donde la ley lo exija.',
          ],
        },
        { h: 'Edad', p: [`${NAME} es para personas de 18 años o más. Por favor, no uses el formulario si eres menor. Si nos enteramos de que se inscribió alguien menor de 18 años, borramos la inscripción.`] },
        { h: 'Cambios', p: ['Si esta página cambia, actualizamos la fecha de arriba. No usaremos tus datos para nada nuevo sin preguntarte antes.'] },
      ],
    },
    terms: {
      title: 'Términos',
      intro: `Esto es una traducción. Si difiere de la versión en inglés, prevalece la versión en inglés. Estos términos cubren este sitio web y la inscripción de acceso anticipado. La app de ${NAME} tendrá sus propios términos cuando abra.`,
      sections: [
        { h: 'Acceso anticipado', p: [`${NAME} está en acceso anticipado y todavía se está construyendo. Aún no está abierto. Este sitio, incluidas las pantallas de ejemplo, muestra la idea y puede cambiar. Podemos cambiar, pausar o detener el proyecto.`] },
        { h: 'Quién puede usarlo', p: ['Debes tener 18 años o más para usar el formulario de inscripción.'] },
        { h: 'Sin garantías', p: [`No damos ninguna garantía sobre cuándo abrirá ${NAME}, qué incluirá ni qué obtendrás de él. No prometemos que nadie te contacte, te elija o te pague. Este sitio se ofrece tal cual.`] },
        { h: 'Ejemplos', p: ['Las pantallas y textos marcados como Ejemplo son muestras. No son usuarios, empresas, proyectos ni resultados reales.'] },
        { h: 'Tu email', p: ['Si te inscribes, usamos tu email solo como describe la página de Privacidad.'] },
        { h: 'Compartir tu enlace', p: ['Quienes traen amigos reciben la invitación antes. Es la única recompensa: sin premios y sin pagos, y podemos cambiarla o detenerla.'] },
        { h: 'Ley aplicable', p: ['A estos términos se aplica la ley italiana. Esto no elimina ningún derecho que tengas como consumidor según la ley de tu país.'] },
        { h: 'Cambios', p: ['Si estos términos cambian, actualizamos la fecha de arriba.'] },
        { h: 'Contacto', p: [`Preguntas: ${mail}.`] },
      ],
    },
  },
};
