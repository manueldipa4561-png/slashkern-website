import { NAME, EMAIL, OWNER } from '../site';
import type { Copy } from './en';

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

export const fr: Copy = {
  lang: 'fr',
  ogLocale: 'fr_FR',
  paths: { creators: 'creators', companies: 'companies', privacy: 'privacy', terms: 'terms', quiz: 'quiz' },
  skip: 'Aller au contenu',
  slogan: 'De zéro au produit.',
  example: 'Exemple',
  langMenu: 'Langue',
  nav: { creators: 'Pour les creators', companies: 'Pour les entreprises', cta: 'Rejoins la liste', aria: 'Principale', home: `${NAME}, accueil` },

  meta: {
    home: {
      title: `${NAME} · De zéro au produit`,
      description:
        'De zéro au produit. Choisis un projet court, termine-le avec Slash, ton assistant IA, et garde-le sur ta propre page. Gratuit pour les creators.',
    },
    creators: {
      title: `Pour les creators : termine ton premier projet · ${NAME}`,
      description:
        'Des projets courts, un assistant IA et une page pour tout ce que tu termines. Les entreprises verront ce que tu publies quand on ouvrira. Gratuit pour les creators.',
    },
    companies: {
      title: `Pour les entreprises : trouve des creators grâce à ce qu’ils ont fait · ${NAME}`,
      description:
        'Publie un brief court, parcours les projets terminés et écris aux creators sur la plateforme. Rejoins la liste d’attente.',
    },
    quiz: { title: `Quel genre de maker es-tu ? · ${NAME}`, description: 'Cinq questions, une minute, sans inscription. Découvre par où commencer. Tes réponses restent dans ton navigateur.' },
    privacy: { title: `Confidentialité · ${NAME}`, description: `Comment ${NAME} traite l’e-mail que tu laisses sur ce site. Pas de cookies, pas de suivi.` },
    terms: { title: `Conditions · ${NAME}`, description: `Des conditions simples pour le site ${NAME} et l’inscription à l’accès anticipé.` },
  },

  hero: {
    chip: 'Gratuit pour les creators',
    before: 'De zéro ',
    mark: 'au produit.',
    after: '',
    sub: 'Choisis un projet court, termine-le avec Slash, ton assistant IA, et garde-le sur ta propre page.',
    ctaPrimary: 'Rejoins la liste d’attente',
    ctaSecondary: 'Comment ça marche',
  },

  cards: {
    aria: 'Écrans d’exemple de l’app',
    practice: {
      label: 'Projet d’entraînement',
      title: 'Filme une vidéo de 15 secondes sur une boisson',
      rows: [
        ['Catégorie', 'Vidéos courtes'],
        ['Durée', 'Environ 40 minutes'],
        ['Niveau', 'On part de zéro'],
      ],
      body: 'Un plan, une idée. Slash pose les questions, tu décides.',
      foot: 'Gratuit. Rien n’est public tant que tu ne publies pas.',
    },
    brief: {
      label: 'Brief',
      from: 'd’un café',
      title: 'Une vidéo de 15 secondes pour un café',
      rows: [
        ['Catégorie', 'Vidéos courtes'],
        ['Résultat', 'Une vidéo verticale de 15 secondes'],
        ['Délai', 'Une semaine'],
      ],
      body: 'Montre les nouvelles boissons de l’été. Ambiance calme et chaleureuse.',
      foot: 'Publié par une entreprise',
    },
    coach: {
      label: 'Assistant IA',
      you: 'J’ai filmé les nouvelles boissons du café.',
      question: 'Que doit ressentir un inconnu dans les trois premières secondes ?',
      reply: 'Du calme et de la chaleur.',
      action: 'Faire une première version avec l’IA',
      draftLabel: 'Brouillon',
      draftChip: 'Créé avec l’aide de l’IA',
      draft: 'Ouvre sur la tasse, pas sur l’enseigne. De la vapeur, un versement lent, pas de voix off. Dernière image : le nom du café.',
      draftNote: 'Tu peux la modifier. Le projet reste à toi.',
      mic: 'Parle au lieu de taper : touche le micro.',
    },
    page: {
      label: 'Ta page',
      name: 'Ton prénom',
      fields: 'Vidéos courtes · Affiches et logos',
      items: [
        { t: 'Vidéo pour un café', f: 'Vidéos courtes' },
        { t: 'Affiche pour une soirée ciné', f: 'Affiches et logos' },
        { t: 'Logo pour une boulangerie', f: 'Affiches et logos' },
      ],
      foot: 'Les entreprises voient seulement ce que tu publies.',
    },
  },

  catch: {
    title: 'Tout portfolio commence par *un projet*.',
    text: `${NAME} te donne le projet, Slash pour t’aider à le terminer et une page pour le garder.`,
  },

  examples: {
    title: 'Un premier projet peut ressembler à *ça*.',
    lead: 'Huit exemples, un par type de projet. Lance la vidéo, démarre le minuteur, écoute le jingle. Les clients sont inventés, et chaque partie faite avec l’IA est signalée.',
    mine: 'Fais le tien',
    tags: { ai: 'Créé avec l’IA', code: 'Ça marche pour de vrai', answer: 'La réponse vient de l’IA' },
    nojs: 'Cet exemple a besoin de JavaScript.',
    gallery: {
      video: { field: 'Vidéos courtes', t: 'Boissons d’été, 5 secondes', for: 'Client inventé : Bar Ficus', cap: 'Boissons d’été', len: '0:05', alt: 'Vidéo : un grand verre d’eau glacée avec de la menthe et une tranche d’orange sur une table de café, sous le soleil du soir.' },
      poster: { field: 'Affiches et logos', t: 'Affiche pour une soirée ciné', for: 'Client inventé : Cinema Orsa', alt: 'Une affiche bleue qui dit SOIRÉE CINÉ, avec une lune jaune au-dessus d’une ligne de toits. Vendredi, 21 h, en terrasse, Cinema Orsa.' },
      timer: { field: 'Sites web et petits outils', t: 'Un minuteur pour réviser', for: 'Brief inventé : la semaine d’exams de Sofia', modes: ['Révision · 25 min', 'Pause · 5 min'], group: 'Durée', start: 'Commencer', pause: 'Pause', resume: 'Reprendre', reset: 'Remettre à zéro', done: 'Le temps est écoulé. Fais une pause.' },
      listing: { field: 'Annonces de produits', t: 'Annonce pour une bougie artisanale', for: 'Client inventé : Cera Cera', title: 'Bougie cèdre et fumée', points: ['Cire de soja coulée à la main', 'Brûle environ 40 heures', 'Fabriquée en petites séries'], alt: 'Une bougie dans un pot en verre ambré fumé avec une mèche en bois, sur un fond lilas.' },
      post: { field: 'Posts et légendes', t: 'Post pour une boutique de plantes', for: 'Client inventé : Sunny Plants', handle: 'sunnyplants', caption: 'Samedi : amène une plante triste, repars avec une plante ravie. On rempote toute la journée.', alt: 'Une plante verte et feuillue dans un pot en terre cuite, posé sur un tabouret en bois devant un mur rose.' },
      jingle: { field: 'Musique et son', t: 'Jingle pour un atelier vélo', for: 'Client inventé : Pedal Pals', play: 'Écouter le jingle', pause: 'Mettre le jingle en pause', seek: 'Position dans le jingle', hook: '« Pedal Pals, Pedal Pals! »', note: 'Chanté en anglais.' },
      logo: { field: 'Affiches et logos', t: 'Logo pour une boulangerie', for: 'Client inventé : Forno Gufo', alt: 'Un logo : un visage de hibou bleu marine fait d’un pain, avec deux épis de blé en guise de sourcils, sur fond jaune. En dessous : forno gufo.' },
      prompt: {
        field: 'Prompts IA', t: 'Un prompt pour un plan de révision', for: 'Brief inventé : la semaine d’exams de Sofia', promptLabel: 'Prompt', answerLabel: 'IA',
        prompt: 'Fais-moi un plan de révision pour cette semaine. J’ai un exam de maths vendredi et un devoir d’histoire à rendre mercredi. Je peux réviser 90 minutes par jour. Une ligne par jour.',
        answer: ['Lun : exercices de maths, 45 min, puis lecture d’histoire, 45 min.', 'Mar : plan du devoir, 60 min, puis formules de maths, 30 min.', 'Mer : finis le devoir, 60 min, et rends-le.', 'Jeu : une annale de maths, 90 min.', 'Ven : révision de maths, 30 min. Puis l’exam. Repos.'],
      },
    },
    items: {
      video: { t: 'Boissons d’été, 5 secondes', cat: 'Vidéos courtes', lines: ['Boissons d’été', '0:05'] },
      poster: { t: 'Affiche pour une soirée ciné', cat: 'Affiches et logos', lines: ['Soirée', 'ciné', 'VEN · 21 H · TERRASSE'] },
      web: { t: 'Un minuteur pour réviser', cat: 'Sites web et petits outils', lines: ['Minuteur de révision', 'Commencer'] },
      listing: { t: 'Annonce pour une bougie artisanale', cat: 'Annonces de produits', lines: ['Bougie cèdre et fumée', 'Cire de soja coulée à la main', 'Brûle environ 40 heures', 'Fabriquée en petites séries'] },
      post: { t: 'Post pour une boutique de plantes', cat: 'Posts et légendes', lines: ['boutiqueplantes', 'Samedi : amène une plante triste,', 'repars avec une plante ravie.', 'On rempote toute la journée.'] },
      music: { t: 'Jingle pour un atelier vélo', cat: 'Musique et son', lines: ['Jingle atelier vélo', '0:20'] },
      logo: { t: 'Logo pour une boulangerie', cat: 'Affiches et logos', lines: ['gufo', 'FORNO'] },
      prompt: { t: 'Un prompt pour un plan de révision', cat: 'Prompts IA', lines: ['Écris un plan de 3 lignes', 'pour ma semaine d’exams,', 'une ligne par jour.', 'Lun : maths, 40 minutes', 'Mar : histoire, 30 minutes', 'Mer : repos, puis révision'] },
    },
    people: {
      Sanne: { cats: 'Vidéos courtes · Posts et légendes', bio: 'Je donne du calme aux petites choses.' },
      Elin: { cats: 'Affiches et logos', bio: 'Des affiches, des logos et une police vraiment top.' },
      Mats: { cats: 'Sites web et petits outils · Prompts IA', bio: 'Des petits outils qui font une seule chose, et la font bien.' },
    },
    profile: { label: 'Page d’exemple', msg: `Message sur ${NAME}`, next: 'Ton prochain projet' },
  },

  demo: {
    alt: 'L’app slashkern qui s’ouvre : Slash, le pointeur avec des yeux, regarde autour de lui et se pose à côté du nom.',
    play: 'Lancer la vidéo',
    pause: 'Mettre la vidéo en pause',
  },

  quiz: {
    nav: 'Quiz',
    eyebrow: 'Quiz d’une minute',
    title: 'Quel genre de *maker* es-tu ?',
    lead: 'Cinq questions, sans inscription. Une devinette pour savoir par où commencer, pas un test. Tes réponses restent dans ton navigateur.',
    start: 'Commencer le quiz',
    noscript: 'Le quiz a besoin de JavaScript. Tu peux quand même rejoindre la liste d’attente ci-dessous.',
    progress: 'Question {n} sur {total}',
    friend: 'Un ami a eu « {name} ». Et toi, tu es lequel ?',
    youAre: 'Tu es',
    cardTop: 'Quel genre de maker es-tu ?',
    fun: 'Une devinette pour s’amuser, pas un test.',
    share: 'Partager mon résultat',
    saved: 'Image enregistrée',
    copy: 'Copier le lien',
    copied: 'Lien copié',
    again: 'Refaire le quiz',
    join: 'Rejoins la liste d’attente',
    shareText: `Sur ${NAME}, je suis « {name} ». Et toi, quel genre de maker es-tu ?`,
    firstLabel: 'Ton premier projet',
    also: 'Aussi dans ton mix',
    // Each answer is one real project in the app: [text, type, index of the project in the app's field], same order as the app (src/scripts/quiz.ts).
    // Quiz texts, result names and project titles are copied from the app's French (src/scripts/i18n-fr.ts), word for word.
    questions: [
      { q: 'La petite boutique d’un ami a besoin d’aide. Tu proposes de…', a: [['Couper son clip trop lent aux meilleures secondes.', 'video', 0], ['Dessiner un autocollant pour sa porte.', 'poster', 1], ['Réécrire sa bio pour qu’elle lui ressemble.', 'posts', 3], ['Réparer le bouton Acheter qui ne marche pas.', 'web', 0], ['Réécrire l’annonce à laquelle personne ne répond.', 'listing', 0], ['Choisir la musique de sa vidéo.', 'music', 1], ['Faire écrire son post par l’IA, avec de vrais faits.', 'prompt', 0]] },
      { q: 'Ton groupe de discussion a besoin de toi. Tu…', a: [['Répares la playlist de la soirée.', 'music', 0], ['Fais organiser le dîner d’anniversaire par l’IA.', 'prompt', 2], ['Filmes une blague de 10 secondes sur l’enceinte disparue.', 'video', 1], ['Choisis 6 images pour la nouvelle chambre d’une amie.', 'poster', 2], ['Écris le message d’anniversaire de trois façons.', 'posts', 2], ['Trouves la faille dans la règle du groupe.', 'web', 2], ['Vends ta vieille veste sans baisser le prix.', 'listing', 2]] },
      { q: 'Quelque chose ne marche pas en ligne. Tu répares quoi d’abord ?', a: [['Un commentaire grossier qui demande une réponse calme.', 'posts', 4], ['Une réduction qui fait payer plus cher.', 'web', 3], ['Un acheteur muet depuis « Toujours disponible ? »', 'listing', 5], ['Un nom de playlist sur lequel personne ne clique.', 'music', 3], ['Une IA qui invente ses réponses.', 'prompt', 3], ['Des sous-titres trop petits pour être lus.', 'video', 3], ['Une photo sombre de super baskets.', 'poster', 3]] },
      { q: 'Qu’est-ce que tu serais le plus fier de montrer ?', a: [['Un sondage qui a montré ce que les gens achèteraient.', 'listing', 4], ['Un beat qu’une salle de sport utilise dans ses vidéos.', 'music', 4], ['Un quiz avec l’IA qui a aidé une amie à réviser.', 'prompt', 1], ['Une interview de 20 secondes qui a fait rire tout le monde.', 'video', 2], ['La miniature qui a eu le plus de clics.', 'poster', 5], ['Le nom d’un nouveau parfum de glace.', 'posts', 5], ['Une réponse automatique à « prix ? »', 'web', 4]] },
      { q: 'Choisis un projet pour ce week-end.', a: [['Des étapes si précises qu’un robot arroserait ton basilic.', 'web', 5], ['Une vidéo de 15 secondes qui vend une sauce piquante.', 'listing', 1], ['Quatre phrases accrocheuses pour une mini cuisine d’étudiant.', 'music', 5], ['Un tableau fait par l’IA de qui doit quoi dans la coloc.', 'prompt', 4], ['Un commentaire sportif sur une vidéo de skate.', 'video', 4], ['La première image d’un post, pour qu’on continue à faire défiler.', 'poster', 4], ['Une légende qui fait répondre les amis.', 'posts', 0]] },
    ],
    results: {
      video: { name: 'Le Vidéaste', line: 'Tu vois la scène avant tout le monde.' },
      poster: { name: 'Le Designer', line: 'Tu vois ce qui cloche, et tu le répares.' },
      posts: { name: 'L’Auteur', line: 'Tu le dis plus court, et mieux.' },
      web: { name: 'Le Bâtisseur', line: 'Tu préfères faire la chose plutôt qu’en parler.' },
      listing: { name: 'Le Vendeur', line: 'Tu sais expliquer pourquoi quelque chose en vaut la peine.' },
      music: { name: 'Le Sound Maker', line: 'Tu entends ce dont un moment a besoin.' },
      prompt: { name: 'Le Prompteur', line: 'Tu poses à l’IA de meilleures questions que la plupart des gens.' },
    },
    projects: {
      poster: ['Rends lisible une story trop chargée', 'Décris un sticker pour un bar', 'Décris 6 images pour la chambre d\'Elena', 'Répare une photo de baskets trop sombre', 'Prépare la première image d\'un post', 'Prépare 2 miniatures, choisis la gagnante'],
      posts: ['Réécris une légende pour que tes potes répondent', 'Écris un rappel gentil pour Leo', 'Écris un message d\'anniversaire de trois façons', 'Réécris une bio qui ne dit rien', 'Réponds à un commentaire impoli', 'Nomme un nouveau parfum'],
      web: ['Répare le bouton qui reste vert', 'Écris les règles d\'un quiz pizza', 'Trouve la combine, corrige la règle', 'Répare une réduction qui coûte plus cher', 'Écris une réponse auto à « prix ? »', 'Écris des étapes qu\'un robot peut suivre'],
      video: ['Garde les 6 meilleures secondes', 'Prépare un clip drôle de 10 secondes', 'Interviewe quelqu\'un sur un moment gênant', 'Transforme un texte minuscule en sous-titres lisibles', 'Commente un clip de skate comme à la télé', 'Réponds à un commentaire en vidéo'],
      listing: ['Réécris une annonce de lampe sans réponse', 'Prépare une vidéo de 15 secondes pour une sauce piquante', 'Tiens ton prix, reste sympa', 'Réécris le message insistant d\'une boutique', 'Écris un sondage : stickers ou cartes postales ?', 'Réponds à « C\'est toujours dispo ? »'],
      music: ['Enlève une chanson, range le reste', 'Choisis quand la musique arrive', 'Réponds à un message de sale journée', 'Renomme une playlist que personne n\'ouvre', 'Tape un beat pour une salle de sport', 'Écris quatre lignes accrocheuses à fredonner'],
      prompt: ['Réécris le prompt de Dana avec ses infos', 'Fais interroger Sofia par une IA', 'Organise le dîner de Giulia avec un prompt', 'Empêche une IA d\'inventer des réponses', 'Transforme des dépenses en vrac en tableau', 'Aide quelqu\'un à choisir un appart'],
    },
  },

  band: {
    title: 'Quel genre de maker es-tu ?',
    text: 'Une minute, cinq questions, sans inscription.',
    cta: 'Fais le quiz',
  },

  spot: {
    title: 'Ton idée, *plan par plan.*',
    text: 'Écris une ligne. Slash la transforme en plans et en légende. Ensuite, c’est toi qui la fais : filme-la avec ton téléphone ou utilise un outil vidéo IA.',
    steps: ['Choisis un projet de vidéo courte.', 'Lis le brief.', 'Écris ton idée en une ligne.', 'Reçois les plans et la légende.'],
    app: 'Dans l’app',
    out: 'Ce que tu peux faire',
    caps: ['J’ai demandé à une IA de décrire cette bouteille en un mot.', 'Un mot :', 'FROIDE.'],
    ai: 'Créé avec l’aide de l’IA',
    labelApp: 'Vidéo : une idée transformée en plans et en légende dans l’app',
    labelOut: 'Vidéo : un court exemple terminé, fait avec un outil vidéo IA',
    note: 'Un projet d’exemple avec une bouteille inventée, accéléré. La partie dans l’app est enregistrée depuis le vrai prototype. Cette vidéo a été faite avec un outil vidéo IA.',
  },

  how: {
    id: 'comment-ca-marche',
    title: 'Fais-le. Garde-le. *Fais-toi trouver.*',
    steps: [
      { n: '01', t: 'Fais-le avec Slash', d: 'Choisis un projet court. Slash te pose une question à la fois et prépare une première version si tu en veux une. Tu la modifies, donc elle reste à toi.' },
      { n: '02', t: 'Garde-le sur ta page', d: 'Tout ce que tu termines arrive sur ta propre page. Ça reste privé tant que tu ne publies pas.' },
      { n: '03', t: 'Fais-toi trouver par les entreprises', d: `Dès qu’on ouvre, les entreprises pourront parcourir ce que tu publies et t’écrire sur ${NAME}. Ton e-mail reste privé.` },
    ],
  },

  find: {
    id: 'comment-on-te-trouve',
    title: 'Tes projets. *Ton choix.*',
    lead: 'C’est toi qui choisis ce que les entreprises voient, et avec qui tu parles.',
    rows: [
      ['Les entreprises voient', 'Seulement les projets dont tu es fier.'],
      ['Ton e-mail', 'Il reste privé. Les entreprises t’écrivent sur slashkern.'],
      ['Passer en public', 'Un seul geste, quand tu le décides.'],
      ['Pour les creators', 'S’inscrire, créer et publier est gratuit.'],
    ],
    notice: 'Ta page montre ce que tu sais faire.',
  },

  fields: [
    { name: 'Vidéos courtes', line: 'Prépare, filme et monte 15 secondes autour d’une idée.' },
    { name: 'Affiches et logos', line: 'Dessine une affiche ou un logo pour un petit commerce, et explique pourquoi.' },
    { name: 'Posts et légendes', line: 'Écris un post qui sonne comme une personne, pas comme une pub.' },
    { name: 'Sites web et petits outils', line: 'Crée une petite page ou un petit outil, une étape qui marche à la fois.' },
    { name: 'Annonces de produits', line: 'Dis à un inconnu exactement ce qu’il reçoit.' },
    { name: 'Musique et son', line: 'Compose un court morceau ou un jingle pour quelqu’un en particulier.' },
    { name: 'Prompts IA', line: 'Écris des consignes claires pour une IA et vérifie ce qu’elle te répond.' },
  ],

  creatorsBlock: {
    title: 'Commence petit. *Termine* quelque chose.',
    text: 'Choisis un projet court, termine-le avec Slash et garde-le sur ta page. Gratuit pour les creators.',
    link: 'Tout pour les creators',
  },
  companiesBlock: {
    title: 'Zappe le CV. *Vois ce qu’ils ont fait.*',
    text: 'Un CV dit ce qu’une personne sait faire. Un projet terminé le montre.',
    points: ['Publie un brief court.', 'Vois les projets terminés.', 'Écris aux creators sur la plateforme.'],
    link: 'Tout pour les entreprises',
  },

  faq: {
    title: 'Des questions, *des réponses.*',
    more: 'Une autre question ? Écris-nous :',
    items: [
      { q: 'C’est gratuit pour les creators ?', a: 'Oui. Tu ne paies jamais, même pour publier.' },
      { q: 'Je pars de zéro. Je peux m’inscrire ?', a: 'Oui, c’est fait pour ça. Un projet d’entraînement prend environ 40 minutes, et Slash t’aide à chaque étape.' },
      { q: 'L’IA fait mon projet à ma place ?', a: 'Elle t’aide, mais c’est toi qui termines. Slash pose des questions et montre ce qui manque. Envie d’un coup de pouce ? Il prépare une première version, signalée « Créé avec l’aide de l’IA ». Tu la modifies et tu décides de ce que tu publies.' },
      { q: 'C’est une arnaque ?', a: 'Non. Les creators ne paient jamais, personne n’est encore payé, et c’est toi qui décides de ce qui devient public. Si quelqu’un te demande de payer pour un projet, ce n’est pas nous. Dis-le-nous.' },
      { q: 'Qu’est-ce que je peux faire ?', a: 'Sept types de projets : vidéos courtes, affiches et logos, posts et légendes, sites web et petits outils, annonces de produits, musique et son, et prompts IA.' },
      { q: 'Comment les entreprises me contactent ?', a: `Via ${NAME}. Tu lis le message et tu décides si tu réponds. Ton e-mail reste privé.` },
      { q: 'Qui peut s’inscrire, et où ?', a: 'Toute personne de 18 ans ou plus, partout en Europe. L’app existe en sept langues.' },
      { q: 'C’est pour quand ?', a: 'Pas encore de date. On est encore en train de la construire. Laisse ton e-mail et on t’écrit une seule fois, à l’ouverture.' },
    ],
  },

  final: {
    id: 'early-access',
    title: 'Entre parmi les premiers.',
    text: `Un seul e-mail de notre part, quand ${NAME} ouvre. C’est tout.`,
  },

  form: {
    emailLabel: 'E-mail',
    emailPlaceholder: 'toi@exemple.fr',
    roleLabel: 'Je m’inscris en tant que',
    roleCreator: 'Creator',
    roleCompany: 'Entreprise',
    consentBefore: `J’accepte que ${NAME} garde mon e-mail pour me prévenir de l’ouverture. J’ai 18 ans ou plus. Voir la page `,
    consentLink: 'Confidentialité',
    consentAfter: '.',
    submit: 'Rejoins la liste d’attente',
    sending: 'Envoi en cours…',
    small: `On utilise ton e-mail uniquement pour ça. Tu peux nous demander de le supprimer quand tu veux : ${EMAIL}`,
    errEmailEmpty: 'Entre ton adresse e-mail.',
    errEmailInvalid: 'Entre une adresse e-mail valide, du genre nom@exemple.fr.',
    errConsent: 'Coche la case pour continuer.',
    errSend: `Envoi impossible. Réessaie, ou écris à ${EMAIL}.`,
    okTitle: 'Tu es sur la liste.',
    okText: `Merci. On t’écrit une seule fois, quand ${NAME} ouvre.`,
    shareTitle: 'Invite un ami.',
    shareText: 'Invite des amis, et ton invitation arrive plus tôt.',
    shareButton: 'Partage ton lien',
    shareCopy: 'Copier le lien',
    shareCopied: 'Lien copié',
    shareMessage: `Je viens de m’inscrire sur la liste de ${NAME} : de zéro au produit.`,
  },

  footer: {
    contact: 'Contact',
    follow: 'Instagram',
    legal: 'Mentions légales',
    share: 'Partager le site',
    shareCopied: 'Lien copié',
    shareMessage: `${NAME} : de zéro au produit.`,
  },

  creatorsPage: {
    before: 'Termine ton ',
    mark: 'premier projet',
    after: '.',
    sub: 'Des projets courts pour partir de zéro. Slash t’aide, tu termines, et tout va sur ta propre page.',
    cta: 'Rejoins la liste d’attente',
    ctaSecondary: 'Découvre Slash',
    slashSays: 'Salut, moi c’est Slash. Je pose des questions, je montre ce qui manque et je prépare une première version quand tu en veux une.',
    coachTitle: 'Slash t’aide. Toi, tu termines.',
    coachText: 'Slash est une IA. Il te demande pour qui est le projet et ce que tu couperais. Envie d’un coup de pouce ? Demande une première version, puis fais-la tienne.',
    doTitle: 'Ce que fait Slash',
    doItems: ['Poser une question à la fois.', 'Montrer ce qui n’est pas clair ou ce qui manque.', 'Préparer une première version si tu le demandes, signalée « Créé avec l’aide de l’IA ».'],
    dontTitle: 'Ce que Slash ne fait pas',
    dontItems: ['Publier quoi que ce soit à ta place.', 'Faire tes choix à ta place.', 'Cacher son aide.'],
    fieldsTitle: 'Sept choses que tu peux *faire*.',
    fieldsText: 'Toutes courtes, toutes pour partir de zéro. Choisis-en une.',
    pageTitle: 'Une page avec *ton nom* dessus.',
    pageText: 'Tout ce que tu termines vit sur une seule page, ta KernCard. Les entreprises voient seulement ce que tu publies. Celle-ci est un exemple.',
    publishTitle: 'C’est toi qui décides de ce qui devient public.',
    publishSteps: [
      { t: 'Termine le projet', d: 'Il reste privé pendant que tu le fais.' },
      { t: 'Publie-le sur ta page', d: 'Appuie sur publier quand le résultat te plaît.' },
      { t: 'Les entreprises peuvent le trouver', d: 'Elles parcourent les projets publiés par catégorie.' },
      { t: `Elles peuvent t’écrire sur ${NAME}`, d: 'Ton e-mail reste privé, et tu décides si tu réponds.' },
    ],
    ctaTitle: 'Commence comme creator.',
    ctaText: `Un seul e-mail de notre part, quand ${NAME} ouvre.`,
  },

  companiesPage: {
    before: 'Trouve des creators grâce à ce qu’ils ont ',
    mark: 'fait',
    after: '.',
    sub: 'Publie un brief court, parcours les projets terminés et écris aux creators qui te plaisent.',
    cta: 'Rejoins la liste d’attente',
    ctaSecondary: 'Comment ça marche',
    showTitle: 'Ce que tu publies. Ce que tu vois.',
    showText: 'Des écrans d’exemple, pas de vrais briefs ni de vrais creators.',
    browseTitle: 'Parcours les creators selon *ce qu’ils ont fait*.',
    browseText: 'Chaque creator a une page de projets terminés. Ce sont des exemples, pas de vraies personnes.',
    featuresTitle: 'Ce que tu peux faire',
    features: [
      { t: 'Publie un brief court', d: 'Quelques lignes : ce dont tu as besoin, la catégorie et à quoi ressemble un bon résultat.' },
      { t: 'Colle ton site, reçois un brouillon', d: 'Colle ton lien et l’IA prépare un brouillon de brief. Tu le modifies, et rien n’est mis en ligne sans toi.' },
      { t: 'Vois les projets terminés', d: 'Parcours par catégorie. Tu vois ce qu’une personne a fait, pas seulement ce qu’elle dit savoir faire.' },
      { t: 'Écris sur la plateforme', d: `Écris aux creators via ${NAME}. Leur e-mail reste privé, et ils choisissent s’ils répondent.` },
    ],
    howTitle: 'Comment ça marche pour les entreprises',
    steps: [
      { n: '01', t: 'Publie un brief court', d: 'Quelques lignes sur ce dont tu as besoin et à quoi ressemble un bon résultat.' },
      { n: '02', t: 'Vois les projets', d: 'Les creators les font avec Slash. Toi, tu parcours ce qu’ils publient.' },
      { n: '03', t: 'Écris aux creators', d: 'Via la plateforme. Leur e-mail reste privé.' },
    ],
    ctaTitle: 'Publie ton premier brief.',
    ctaText: `Un seul e-mail de notre part, quand ${NAME} ouvre.`,
  },

  legal: {
    updated: 'Dernière mise à jour',
    back: 'Retour à l’accueil',
    privacy: {
      title: 'Confidentialité',
      intro: `Ceci est une traduction. En cas de différence avec la version anglaise, la version anglaise prévaut. Cette page concerne uniquement ce site, c’est-à-dire la page d’accès anticipé. Elle explique quelles données personnelles nous traitons, pourquoi, et ce que tu peux faire. L’app ${NAME} aura sa propre page de confidentialité à son ouverture.`,
      summaryTitle: 'En bref',
      summary: [
        ['Qui', `${OWNER} (Italie) gère ${NAME} et est le responsable du traitement. Contact : ${mail}.`],
        ['Quoi', 'Ton e-mail, que tu t’inscrives comme creator ou comme entreprise, la case cochée et ton code de partage (plus le code d’un ami si tu as utilisé son lien). Netlify peut aussi enregistrer des données techniques, comme ton adresse IP.'],
        ['Pourquoi', `Pour te prévenir quand ${NAME} ouvre, et pour inviter plus tôt les personnes qui amènent des amis. Pas de newsletter, pas de pub.`],
        ['Où', 'Netlify (États-Unis) héberge le site et conserve les inscriptions pour nous. Akismet (États-Unis) les vérifie contre le spam.'],
        ['Combien de temps', `Jusqu’à ce qu’on te dise que ${NAME} est ouvert ou que tu nous demandes de le supprimer, et jamais plus de 12 mois après ton inscription.`],
        ['Tes droits', `Écris à ${mail} pour consulter, corriger ou supprimer tes données, ou pour retirer ton consentement.`],
        ['Cookies', 'Aucun, donc pas de bannière de cookies. Pas d’analytics, pas de suivi, pas de pub. Le quiz fonctionne dans ton navigateur et n’envoie rien.'],
      ],
      sections: [
        {
          h: 'Qui est responsable',
          p: [`Le responsable du traitement est ${OWNER}, qui construit et gère ${NAME} depuis l’Italie. Pour toute question sur tes données, écris à ${mail}.`],
        },
        {
          h: 'Ce que nous collectons',
          p: [
            'Quand tu t’inscris à l’accès anticipé, le formulaire envoie : ton adresse e-mail ; si tu t’inscris comme creator ou comme entreprise ; le fait que tu as coché la case pour donner ton accord et confirmer que tu as 18 ans ou plus ; la langue de la page ; un code aléatoire pour ton propre lien de partage ; et, si tu as ouvert le lien d’un ami, le code de cet ami.',
            'Netlify, qui gère le formulaire, peut aussi enregistrer des données techniques avec chaque inscription, comme ton adresse IP, ton type de navigateur et la page depuis laquelle tu l’as envoyé.',
            'Quand tu ouvres une page, les serveurs de Netlify traitent aussi des données techniques, comme ton adresse IP, ton navigateur et l’adresse de la page (y compris un code de partage, si le lien en contient un), pour diffuser la page et protéger le site.',
            'Nous ne collectons rien d’autre. Nous ne te demandons pas ton nom.',
          ],
        },
        {
          h: 'Pourquoi nous les utilisons, et la base légale',
          p: [
            `Ton inscription : pour te prévenir quand ${NAME} ouvre et, si des amis s’inscrivent avec ton lien, pour t’inviter plus tôt. Rien d’autre : pas de newsletter, pas de pub, et nous ne donnons jamais ton e-mail aux entreprises présentes sur ${NAME}. La base légale est ton consentement (art. 6, par. 1, point a, du RGPD), que tu donnes en cochant la case.`,
            'Données techniques et contrôle anti-spam : pour diffuser le site, le garder sûr et empêcher les fausses inscriptions d’entrer dans la liste. La base légale est notre intérêt légitime à avoir un site qui fonctionne et qui est sûr (art. 6, par. 1, point f, du RGPD). Nous n’utilisons pas ces données pour te suivre ou te profiler.',
            `Nous donner ton e-mail est ton choix. Sans lui, nous ne pouvons pas te prévenir de l’ouverture de ${NAME}. Nous ne prenons aucune décision automatisée te concernant : amener des amis fait seulement arriver ton invitation plus tôt.`,
          ],
        },
        {
          h: 'Qui les reçoit',
          p: [
            'Netlify, Inc. (États-Unis) héberge ce site et conserve les inscriptions pour nous. Elle agit pour notre compte, en tant que sous-traitant, dans le cadre de son accord sur le traitement des données. Netlify vérifie chaque inscription contre le spam avec Akismet, un service d’Automattic, Inc. (États-Unis). Voir les pages de confidentialité de <a href="https://www.netlify.com/privacy/" rel="noopener">Netlify</a> et d’<a href="https://automattic.com/privacy/" rel="noopener">Automattic</a>.',
            'Nous ne vendons pas tes données et nous ne les donnons à personne d’autre. Si nous utilisons plus tard un service d’e-mail pour t’écrire, nous le nommerons d’abord sur cette page.',
          ],
        },
        {
          h: 'Données hors de l’UE',
          p: ['Netlify et Akismet sont basés aux États-Unis, donc tes données y sont aussi traitées. Netlify, Inc. indique participer au cadre de protection des données UE-États-Unis (EU-U.S. Data Privacy Framework), que la Commission européenne a jugé offrir une protection adéquate (décision du 10 juillet 2023), et indique que son accord sur le traitement des données inclut les clauses contractuelles types de l’UE. Tu peux nous demander des détails sur ces garanties.'],
        },
        {
          h: 'Combien de temps nous les gardons',
          p: [
            `Ton inscription : jusqu’à ce que nous te disions que ${NAME} est ouvert, ou jusqu’à ce que tu retires ton consentement ou que tu nous demandes de la supprimer, et jamais plus de 12 mois après ton inscription. Ensuite nous la supprimons de Netlify, liste anti-spam comprise, et de toute copie que nous gardons.`,
            'Données techniques : Netlify garde les journaux de ses serveurs selon ses propres règles de conservation. Nous ne les téléchargeons pas et nous ne les gardons pas.',
          ],
        },
        {
          h: 'Retirer ton consentement',
          p: [`Tu peux retirer ton consentement à tout moment en écrivant à ${mail}. Nous supprimons alors ton inscription (e-mail, rôle et codes) et nous ne t’écrivons pas. Si des amis se sont inscrits avec ton lien, leurs inscriptions restent, mais ton code ne mène plus à toi. Retirer ton consentement ne rend pas illégal ce que nous avons fait avant.`],
        },
        {
          h: 'Tes droits',
          p: [`Selon le RGPD, tu peux nous demander d’accéder à tes données et d’en obtenir une copie, de les corriger, de les supprimer, d’en limiter l’usage, ou de te les envoyer dans un format courant pour les emporter ailleurs. Tu peux aussi t’opposer à notre usage des données techniques. Écris à ${mail} : nous répondons sous un mois. Si tu penses que nous traitons mal tes données, tu peux déposer une plainte auprès de l’autorité italienne de protection des données (<a href="https://www.garanteprivacy.it" rel="noopener">Garante per la protezione dei dati personali</a>) ou auprès de l’autorité du pays de l’UE où tu vis ou exerces ton activité.`],
        },
        {
          h: 'Cookies',
          p: [
            'Ce site ne dépose aucun cookie et n’utilise aucune technologie similaire, comme le stockage local ou les pixels de suivi. Il n’a pas d’analytics et pas de pub. Comme il n’y a pas de cookies, il n’y a pas de bannière de cookies.',
            'Les polices, images et vidéos sont des fichiers de ce site : ouvrir une page n’envoie rien à d’autres entreprises. Seule Netlify, qui héberge le site, reçoit ta requête.',
            'Le quiz fonctionne dans ton navigateur. Tes réponses ne sont ni enregistrées ni envoyées, et elles disparaissent quand tu recharges la page. Un lien de quiz partagé indique seulement quel résultat tu as eu (par exemple ?r=video). Les boutons de partage ouvrent le menu de partage de ton téléphone ou copient le lien. Nous ne voyons pas à qui tu l’envoies ; nous voyons seulement les inscriptions qui arrivent par ton lien.',
            'Le lien Instagram et le lien vers le Garante t’emmènent vers ces sites, où leurs propres règles s’appliquent.',
            'Si nous ajoutons un jour des cookies ou des analytics, nous mettrons d’abord cette page à jour et nous te demanderons ton consentement quand la loi l’exige.',
          ],
        },
        { h: 'Âge', p: [`${NAME} est pour les personnes de 18 ans et plus. N’utilise pas le formulaire si tu es plus jeune. Si nous apprenons qu’une personne de moins de 18 ans s’est inscrite, nous supprimons l’inscription.`] },
        { h: 'Modifications', p: ['Si cette page change, nous mettons à jour la date en haut. Nous n’utiliserons pas tes données pour quoi que ce soit de nouveau sans te le demander d’abord.'] },
      ],
    },
    terms: {
      title: 'Conditions',
      intro: `Ceci est une traduction. En cas de différence avec la version anglaise, la version anglaise prévaut. Ces conditions couvrent ce site et l’inscription à l’accès anticipé. L’app ${NAME} aura ses propres conditions à son ouverture.`,
      sections: [
        { h: 'Accès anticipé', p: [`${NAME} est en accès anticipé et en cours de construction. Il n’est pas encore ouvert. Ce site, écrans d’exemple compris, montre l’idée et peut changer. Nous pouvons modifier, mettre en pause ou arrêter le projet.`] },
        { h: 'Qui peut l’utiliser', p: ['Tu dois avoir 18 ans ou plus pour utiliser le formulaire d’inscription.'] },
        { h: 'Aucune garantie', p: [`Nous ne garantissons pas quand ${NAME} ouvrira, ce qu’il contiendra, ni ce que tu en retireras. Nous ne promettons pas que quelqu’un te contactera, te choisira ou te paiera. Ce site est fourni tel quel.`] },
        { h: 'Exemples', p: ['Les écrans et textes marqués Exemple sont des échantillons. Ce ne sont pas de vrais utilisateurs, entreprises, projets ou résultats.'] },
        { h: 'Ton e-mail', p: ['Si tu t’inscris, nous utilisons ton e-mail uniquement comme le décrit la page Confidentialité.'] },
        { h: 'Partager ton lien', p: ['Les personnes qui amènent des amis sont invitées plus tôt. C’est la seule récompense : pas de prix et pas de paiements, et nous pouvons la modifier ou l’arrêter.'] },
        { h: 'Droit applicable', p: ['Le droit italien s’applique à ces conditions. Cela n’enlève aucun des droits que tu as en tant que consommateur selon la loi de ton pays.'] },
        { h: 'Modifications', p: ['Si ces conditions changent, nous mettons à jour la date en haut.'] },
        { h: 'Contact', p: [`Questions : ${mail}.`] },
      ],
    },
  },
};
