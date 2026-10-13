import { NAME, EMAIL, OWNER } from '../site';
import type { Copy } from './en';

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

export const it: Copy = {
  lang: 'it',
  ogLocale: 'it_IT',
  paths: { creators: 'creators', companies: 'companies', privacy: 'privacy', terms: 'terms', quiz: 'quiz' },
  skip: 'Vai al contenuto',
  slogan: 'Da zero al prodotto.',
  example: 'Esempio',
  switchTo: { label: 'English', short: 'EN', aria: 'Read this site in English' },
  nav: { creators: 'Per i creator', companies: 'Per le aziende', cta: 'Richiedi accesso', aria: 'Principale', home: `${NAME}, home` },

  meta: {
    home: {
      title: `${NAME} · Da zero al prodotto`,
      description:
        'Da zero al prodotto. Fai piccoli progetti con Slash, un’AI che ti aiuta, e tienili sulla tua pagina. Accesso anticipato gratis.',
    },
    creators: {
      title: `Per i creator: fai un progetto e tienilo · ${NAME}`,
      description:
        'Scegli un breve progetto, fallo con un assistente AI e tienilo sulla tua pagina. Le aziende lo vedranno quando la piattaforma apre. Gratis per i creator.',
    },
    companies: {
      title: `Per le aziende: trova creator dai loro progetti · ${NAME}`,
      description:
        'Pubblica un brief breve, guarda i progetti finiti dai creator e contattali tramite la piattaforma. Accesso anticipato.',
    },
    quiz: { title: `Che tipo di maker sei? · ${NAME}`, description: 'Un quiz di un minuto: cinque domande per capire da dove partire. Senza iscrizione, e le risposte restano nel tuo browser.' },
    privacy: { title: `Privacy · ${NAME}`, description: `Come ${NAME} tratta l’email che lasci su questo sito. Niente cookie, niente tracciamento.` },
    terms: { title: `Termini · ${NAME}`, description: `Termini semplici per il sito ${NAME} e l’iscrizione all’accesso anticipato.` },
  },

  hero: {
    chip: 'Accesso anticipato',
    before: 'Da zero ',
    mark: 'al prodotto.',
    after: '',
    sub: 'Fai un breve progetto con Slash, un’AI che ti aiuta, e tienilo sulla tua pagina.',
    ctaPrimary: 'Richiedi accesso',
    ctaSecondary: 'Come funziona',
  },

  cards: {
    aria: 'Schermate di esempio dell’app',
    practice: {
      label: 'Progetto di pratica',
      title: 'Gira un video di 15 secondi di una bevanda',
      rows: [
        ['Categoria', 'Video brevi'],
        ['Tempo', 'Circa 40 minuti'],
        ['Livello', 'Si parte da zero'],
      ],
      body: 'Un’inquadratura, un’idea. L’assistente chiede, decidi tu.',
      foot: 'Gratis. Niente è pubblico finché non lo pubblichi.',
    },
    brief: {
      label: 'Brief',
      from: 'da un bar',
      title: 'Un video di 15 secondi per un bar',
      rows: [
        ['Categoria', 'Video brevi'],
        ['Risultato', 'Un video verticale, 15 secondi'],
        ['Tempi', 'Una settimana'],
      ],
      body: 'Fai vedere le nuove bevande estive. Tono calmo e caldo.',
      foot: 'Pubblicato da un’azienda',
    },
    coach: {
      label: 'Assistente AI',
      you: 'Ho filmato le nuove bevande del bar.',
      question: 'Cosa deve sentire, nei primi tre secondi, chi non ti conosce?',
      reply: 'Calma e calore.',
      action: 'Crea una prima versione con l’AI',
      draftLabel: 'Bozza',
      draftChip: 'Fatto con l’aiuto dell’AI',
      draft: 'Apri sulla tazza, non sull’insegna. Vapore, un versamento lento, niente voce. Ultimo fotogramma: il nome del bar.',
      draftNote: 'La puoi modificare. Il progetto resta tuo.',
      mic: 'Parla invece di scrivere: tocca il microfono.',
    },
    page: {
      label: 'La tua pagina',
      name: 'Il tuo nome',
      fields: 'Video brevi · Poster e loghi',
      items: [
        { t: 'Video per un bar', f: 'Video brevi' },
        { t: 'Locandina per una serata cinema', f: 'Poster e loghi' },
        { t: 'Logo per una panetteria', f: 'Poster e loghi' },
      ],
      foot: 'Le aziende vedono solo quello che pubblichi.',
    },
  },

  catch: {
    title: 'Le aziende chiedono un *portfolio*. Per farlo ti serve un primo progetto.',
    text: `${NAME} ti dà progetti brevi da cui partire, un assistente AI che ti accompagna e una pagina dove tenerli.`,
  },

  examples: {
    title: 'Un primo progetto può essere *così*.',
    lead: 'Otto esempi, uno per ogni tipo di progetto. Guarda il video, avvia il timer, ascolta il jingle. I clienti sono inventati e le immagini, il video e il jingle sono fatti con l’AI. Ogni esempio lo dice.',
    mine: 'Fai il tuo',
    tags: { ai: 'Fatto con l’AI', code: 'Funziona davvero', answer: 'La risposta è dell’AI' },
    nojs: 'Questo esempio richiede JavaScript.',
    gallery: {
      video: { field: 'Video brevi', t: 'Bevande estive, 5 secondi', for: 'Cliente inventato: Bar Ficus', cap: 'Bevande estive', len: '0:05', alt: 'Video: un bicchiere alto di acqua ghiacciata con menta e una fetta d’arancia su un tavolino di un bar, con il sole della sera.' },
      poster: { field: 'Poster e loghi', t: 'Locandina per una serata cinema', for: 'Cliente inventato: Cinema Orsa', alt: 'Una locandina blu con la scritta SERATA CINEMA e una luna gialla sopra i tetti della città. Venerdì, ore 21:00, in terrazza, Cinema Orsa.' },
      timer: { field: 'Siti e piccoli strumenti', t: 'Un timer per studiare', for: 'Brief inventato: la settimana d’esame di Sofia', modes: ['Studio · 25 min', 'Pausa · 5 min'], group: 'Durata', start: 'Avvia', pause: 'Pausa', resume: 'Riprendi', reset: 'Azzera', done: 'Tempo scaduto. Fai una pausa.' },
      listing: { field: 'Annunci di prodotti', t: 'Annuncio per una candela artigianale', for: 'Cliente inventato: Cera Cera', title: 'Candela cedro e fumo', points: ['Cera di soia colata a mano', 'Dura circa 40 ore', 'Prodotta in piccoli lotti'], alt: 'Una candela in un vasetto di vetro ambrato fumé con lo stoppino di legno, su uno sfondo lilla.' },
      post: { field: 'Post e didascalie', t: 'Post per un negozio di piante', for: 'Cliente inventato: Sunny Plants', handle: 'sunnyplants', caption: 'Sabato: porta una pianta triste, torna a casa con una felice. Rinvasiamo tutto il giorno.', alt: 'Una pianta verde in un vaso di terracotta su uno sgabello di legno, davanti a un muro rosa.' },
      jingle: { field: 'Musica e suoni', t: 'Jingle per una ciclofficina', for: 'Cliente inventato: Pedal Pals', play: 'Ascolta il jingle', pause: 'Metti in pausa il jingle', seek: 'Posizione nel jingle', hook: '“Pedal Pals, Pedal Pals!”', note: 'Cantato in inglese.' },
      logo: { field: 'Poster e loghi', t: 'Logo per un forno', for: 'Cliente inventato: Forno Gufo', alt: 'Un logo: il muso di un gufo blu scuro fatto con una pagnotta, con due spighe di grano come sopracciglia, su sfondo giallo. Sotto: forno gufo.' },
      prompt: {
        field: 'Prompt per l’IA', t: 'Un prompt per il piano di studio', for: 'Brief inventato: la settimana d’esame di Sofia', promptLabel: 'Prompt', answerLabel: 'AI',
        prompt: 'Fammi un piano di studio per questa settimana. Venerdì ho l’esame di matematica e mercoledì devo consegnare un tema di storia. Posso studiare 90 minuti al giorno. Una riga per giorno.',
        answer: ['Lun: esercizi di matematica, 45 min, poi lettura di storia, 45 min.', 'Mar: scaletta del tema, 60 min, poi formule di matematica, 30 min.', 'Mer: finisci il tema, 60 min, e consegnalo.', 'Gio: una prova d’esame passata di matematica, 90 min.', 'Ven: ripasso di matematica, 30 min. Poi l’esame. Riposo.'],
      },
    },
    items: {
      video: { t: 'Bevande estive, 5 secondi', cat: 'Video brevi', lines: ['Bevande estive', '0:05'] },
      poster: { t: 'Locandina per una serata cinema', cat: 'Poster e loghi', lines: ['Serata', 'cinema', 'VEN · 21:00 · TERRAZZA'] },
      web: { t: 'Un timer per studiare', cat: 'Siti e piccoli strumenti', lines: ['Timer studio', 'Avvia'] },
      listing: { t: 'Annuncio per una candela artigianale', cat: 'Annunci di prodotti', lines: ['Candela cedro e fumo', 'Cera di soia colata a mano', 'Dura circa 40 ore', 'Prodotta in piccoli lotti'] },
      post: { t: 'Post per un negozio di piante', cat: 'Post e didascalie', lines: ['negoziopiante', 'Sabato: porta una pianta triste,', 'torna a casa con una felice.', 'Rinvasiamo tutto il giorno.'] },
      music: { t: 'Jingle per un negozio di bici', cat: 'Musica e suoni', lines: ['Jingle bici', '0:20'] },
      logo: { t: 'Logo per un forno', cat: 'Poster e loghi', lines: ['gufo', 'FORNO'] },
      prompt: { t: 'Un prompt per il piano di studio', cat: 'Prompt per l’IA', lines: ['Scrivi un piano in tre righe', 'per la mia settimana di studio,', 'una riga al giorno.', 'Lun: matematica, 40 minuti', 'Mar: storia, 30 minuti', 'Mer: riposo, poi ripasso'] },
    },
    people: {
      Sanne: { cats: 'Video brevi · Post e didascalie', bio: 'Faccio sembrare calme le cose piccole.' },
      Elin: { cats: 'Poster e loghi', bio: 'Poster, loghi e un font molto buono.' },
      Mats: { cats: 'Siti e piccoli strumenti · Prompt per l’IA', bio: 'Piccoli strumenti che fanno una cosa sola, bene.' },
    },
    profile: { label: 'Pagina di esempio', msg: `Scrivi su ${NAME}`, next: 'Il tuo prossimo progetto' },
  },

  demo: {
    note: 'L’app, con contenuti di esempio.',
    alt: 'L’app su un telefono: la scheda di un progetto breve e la strada verso la tua pagina.',
    play: 'Avvia il video',
    pause: 'Metti in pausa il video',
  },

  quiz: {
    nav: 'Quiz',
    eyebrow: 'Quiz di un minuto',
    title: 'Che tipo di *maker* sei?',
    lead: 'Cinque domande, senza iscrizione. Un’idea divertente di da dove partire, non un test. Le tue risposte restano nel tuo browser.',
    start: 'Inizia il quiz',
    noscript: 'Il quiz richiede JavaScript. Puoi comunque iscriverti alla lista qui sotto.',
    progress: 'Domanda {n} di {total}',
    friend: 'Un amico è risultato “{name}”. E tu?',
    youAre: 'Sei',
    cardTop: 'Che tipo di maker sei?',
    fun: 'Un’idea divertente, non un test.',
    share: 'Condividi il risultato',
    saved: 'Immagine salvata',
    copy: 'Copia il link',
    copied: 'Link copiato',
    again: 'Rifai il quiz',
    join: 'Richiedi accesso',
    shareText: `Su ${NAME} sono {name}. Che tipo di maker sei tu?`,
    questions: [
      { q: 'È venerdì sera e hai un’ora libera. Tu…', a: [['Filmi qualcosa di piccolo che ti ha colpito.', 'video'], ['Fai un poster senza motivo.', 'poster'], ['Scrivi qualcosa e lo posti.', 'posts'], ['Smanetti con uno strumento o una pagina web.', 'web']] },
      { q: 'I tuoi amici dicono che sei quello che…', a: [['Ha sempre la playlist giusta.', 'music'], ['Fa all’AI le domande più strane.', 'prompt'], ['Trova la cosa migliore da comprare e spiega perché.', 'listing'], ['Sta sempre filmando qualcosa.', 'video']] },
      { q: 'Sul telefono passi più tempo a…', a: [['Scrivere didascalie e messaggi.', 'posts'], ['Giocare con suoni e montaggi.', 'music'], ['Provare nuove app e nuovi siti.', 'web'], ['Usare app di grafica e foto.', 'poster']] },
      { q: 'Cosa ti renderebbe più orgoglioso?', a: [['Un trucco geniale con l’AI.', 'prompt'], ['Un testo chiaro che ha fatto dire sì a qualcuno.', 'listing'], ['Un design davanti a cui la gente si ferma.', 'poster'], ['Un video che le persone mandano agli amici.', 'video']] },
      { q: 'In una nuova app, per prima cosa…', a: [['Clicchi in giro per capire come è fatta.', 'web'], ['Leggi le parole.', 'posts'], ['Accendi l’audio.', 'music'], ['Provi a mettere in crisi l’AI.', 'prompt']] },
    ],
    results: {
      video: { name: 'Il Filmmaker', line: 'Vedi la scena prima di tutti gli altri.', first: 'Parti da un video di 15 secondi.' },
      poster: { name: 'Il Designer', line: 'Noti cosa non quadra e lo sistemi.', first: 'Parti da un poster o da un’idea di sticker.' },
      posts: { name: 'Lo Storyteller', line: 'Lo dici più breve, e meglio.', first: 'Parti da un messaggio breve e gentile.' },
      web: { name: 'Il Builder', line: 'Preferisci fare la cosa che parlarne.', first: 'Parti da una piccola pagina web.' },
      listing: { name: 'Il Seller', line: 'Sai spiegare perché una cosa vale la pena.', first: 'Parti da un annuncio di prodotto.' },
      music: { name: 'Il Sound Maker', line: 'Senti di cosa ha bisogno un momento.', first: 'Parti da un suono di 10 secondi.' },
      prompt: { name: 'Il Prompter', line: 'Fai all’AI domande migliori della maggior parte delle persone.', first: 'Parti da un prompt che dia un piano chiaro.' },
    },
  },

  band: {
    title: 'Che tipo di maker sei?',
    text: 'Un quiz di un minuto. Cinque domande, senza iscrizione.',
    cta: 'Fai il quiz',
  },

  spot: {
    title: 'Scrivi l’idea. *Ricevi lo spot.*',
    text: 'Apri l’app, apri un progetto, scrivi la tua idea. Ricevi il piano e l’elenco delle inquadrature. Questo esempio usa una borraccia inventata.',
    steps: ['Apri l’app.', 'Apri un progetto.', 'Scrivi la tua idea.', 'Ricevi il tuo spot.'],
    app: 'Nell’app',
    out: 'Lo spot',
    caps: ['Ho chiesto a un’AI di descrivere questa borraccia in una parola.', 'Una parola:', 'FREDDA.'],
    ai: 'Fatto con l’aiuto dell’AI',
    labelApp: 'Video: come si crea uno spot di prodotto nell’app',
    labelOut: 'Video: lo spot di esempio finito',
    note: 'Esempio con un prodotto inventato, accelerato. L’uso dell’app è registrato dal prototipo e ti dà il piano e l’elenco delle inquadrature. La clip è fatta con uno strumento video AI. I trend cambiano in fretta e qui non si promette nessuna visibilità.',
  },

  how: {
    id: 'come-funziona',
    title: 'Fai. Tieni. *Fatti trovare.*',
    steps: [
      { n: '01', t: 'Fallo con un assistente AI', d: 'Scegli un progetto breve. L’assistente ti fa una domanda alla volta e prepara una prima versione solo se glielo chiedi. La modifichi tu, quindi resta tuo.' },
      { n: '02', t: 'Tienilo sulla tua pagina', d: 'Ogni progetto finito va sulla tua pagina. Resta privato finché non premi pubblica.' },
      { n: '03', t: 'Fatti trovare dalle aziende', d: 'Quando apre, le aziende potranno sfogliare i progetti pubblicati e scriverti tramite la piattaforma. La tua email resta privata.' },
    ],
  },

  find: {
    id: 'come-ti-trovano',
    title: 'Come ti *troveranno* le aziende',
    lead: 'Ecco cosa sappiamo oggi e cosa non abbiamo ancora deciso.',
    rows: [
      ['Cosa vedono le aziende', 'Solo i progetti che scegli di pubblicare sulla tua pagina.'],
      ['Cosa è pubblico', 'Decidi tu. Niente è pubblico senza il tuo ok.'],
      ['Chi riceve un progetto', 'Decide l’azienda che ha pubblicato il brief.'],
      ['La commissione della piattaforma', 'Non è ancora decisa. Te lo diciamo prima che si applichi.'],
    ],
    notice: 'Per ora nessuno paga. Questo è l’accesso anticipato.',
  },

  fields: [
    { name: 'Video brevi', line: 'Pianifica, gira e monta un video di 15 secondi attorno a un’idea chiara.' },
    { name: 'Poster e loghi', line: 'Crea un poster o un logo per una piccola attività, poi spiega le tue scelte.' },
    { name: 'Post e didascalie', line: 'Scrivi un post che suoni come una persona, non come una pubblicità.' },
    { name: 'Siti e piccoli strumenti', line: 'Costruisci una piccola pagina o un piccolo strumento, un passo funzionante alla volta.' },
    { name: 'Annunci di prodotti', line: 'Scrivi un annuncio che dica a chi non ti conosce esattamente cosa riceve.' },
    { name: 'Musica e suoni', line: 'Componi un breve brano o un jingle e decidi per chi è.' },
    { name: 'Prompt per l’IA', line: 'Scrivi istruzioni chiare per un’IA, poi controlla quello che ti restituisce.' },
  ],

  creatorsBlock: {
    title: 'Parti in piccolo. *Finisci* qualcosa.',
    text: 'Parti da zero. Scegli un progetto breve, fallo con l’assistente e tienilo sulla tua pagina. Gratis per i creator.',
    link: 'Tutto per i creator',
  },
  companiesBlock: {
    title: 'Salta il CV. *Guarda cosa hanno fatto.*',
    text: 'Scrivi in poche righe cosa ti serve. Guarda i progetti che i creator hanno finito e contatta chi ti piace, tramite la piattaforma.',
    points: ['Pubblica un brief breve.', 'Guarda i progetti finiti.', 'Contatta i creator tramite la piattaforma.'],
    link: 'Tutto per le aziende',
  },

  faq: {
    title: 'Domande',
    items: [
      { q: 'È gratis per i creator?', a: 'Sì. Non paghi per iscriverti, per fare un progetto o per pubblicarlo.' },
      { q: 'Non ho esperienza. Posso iscrivermi?', a: 'Sì, è per te. I progetti partono piccoli: un progetto di pratica richiede circa 40 minuti e l’assistente ti aiuta a ogni passo.' },
      { q: 'L’AI fa il progetto al posto mio?', a: 'Non da sola. L’assistente ti fa domande e ti indica cosa manca. Se glielo chiedi, può preparare una prima versione da cui partire, segnata “Fatto con l’aiuto dell’AI”. La modifichi, la cambi e decidi tu cosa pubblicare.' },
      { q: 'È una truffa?', a: 'No. Ai creator non viene addebitato nulla, per ora nessuno viene pagato e decidi tu cosa pubblicare. Se qualcuno ti chiede di pagare per ricevere un progetto, non siamo noi: scrivici.' },
      { q: 'Cosa posso fare?', a: 'Sette tipi di progetto: video brevi, poster e loghi, post e didascalie, siti e piccoli strumenti, annunci di prodotti, musica e suoni, prompt per l’IA.' },
      { q: 'Come mi contattano le aziende?', a: `Tramite la piattaforma. Un’azienda ti scrive su ${NAME} e tu decidi se rispondere. La tua email resta privata.` },
      { q: 'Chi può iscriversi, e dove?', a: 'Chiunque abbia 18 anni o più. È pensato per i creator di tutta Europa e parte in inglese. Le aziende sulla piattaforma potranno contattarti e le regole per i più giovani cambiano da paese a paese.' },
      { q: 'Quando apre?', a: `Non abbiamo ancora una data. ${NAME} è in accesso anticipato e lo stiamo ancora costruendo a Torino. Lascia la tua email e ti scriviamo una volta, quando apre.` },
    ],
  },

  final: {
    id: 'early-access',
    title: 'Entra tra i primi.',
    text: `Lascia la tua email. Ti scriviamo una volta, quando ${NAME} apre. Nient’altro.`,
  },

  form: {
    emailLabel: 'Email',
    emailPlaceholder: 'tu@esempio.it',
    roleLabel: 'Mi iscrivo come',
    roleCreator: 'Creator',
    roleCompany: 'Azienda',
    consentBefore: `Accetto che ${NAME} conservi la mia email per avvisarmi quando apre. Ho 18 anni o più. Vedi la pagina `,
    consentLink: 'Privacy',
    consentAfter: '.',
    submit: 'Richiedi l’accesso anticipato',
    sending: 'Invio in corso…',
    small: `Usiamo la tua email solo per questo. Puoi chiederci di cancellarla quando vuoi: ${EMAIL}`,
    errEmailEmpty: 'Inserisci il tuo indirizzo email.',
    errEmailInvalid: 'Inserisci un indirizzo email valido, tipo nome@esempio.it.',
    errConsent: 'Spunta la casella per continuare.',
    errSend: `Invio non riuscito. Riprova, oppure scrivi a ${EMAIL}.`,
    okTitle: 'Sei in lista.',
    okText: `Grazie. Abbiamo la tua email e ti scriviamo una volta, quando ${NAME} apre.`,
    shareTitle: 'Porta un amico.',
    shareText: 'Chi porta degli amici viene invitato prima.',
    shareButton: 'Condividi il tuo link',
    shareCopy: 'Copia il link',
    shareCopied: 'Link copiato',
    shareMessage: `Mi sono appena iscritto alla lista di ${NAME}: da zero al prodotto.`,
  },

  footer: {
    contact: 'Contatti',
    follow: 'Instagram',
    legal: 'Note legali',
    built: 'Fatto a Torino. Accesso anticipato.',
    share: 'Condividi il sito',
    shareCopied: 'Link copiato',
    shareMessage: `${NAME}: da zero al prodotto.`,
  },

  creatorsPage: {
    before: 'Fai un progetto ',
    mark: 'vero',
    after: '.\nTienilo.',
    sub: 'Fai un breve progetto con un assistente AI e tienilo sulla tua pagina. Parti da zero.',
    cta: 'Richiedi accesso',
    ctaSecondary: 'Conosci l’assistente',
    slashSays: 'Ciao, sono Slash, il tuo assistente AI. Faccio le domande. Preparo una bozza solo se me lo chiedi.',
    coachTitle: 'Un assistente AI che chiede. Decidi tu.',
    coachText: 'L’assistente è un’AI. Ti chiede cose come per chi è il progetto e cosa taglieresti. Se vuoi un punto di partenza, chiedi una prima versione e modificala. Il progetto resta tuo.',
    doTitle: 'L’assistente',
    doItems: ['Fa una domanda alla volta.', 'Ti indica cosa è poco chiaro o manca.', 'Prepara una prima versione solo se glielo chiedi, segnata “Fatto con l’aiuto dell’AI”.'],
    dontTitle: 'L’assistente non',
    dontItems: ['Pubblica qualcosa al posto tuo.', 'Decide al posto tuo.', 'Nasconde il suo aiuto: le bozze dicono “Fatto con l’aiuto dell’AI”.'],
    fieldsTitle: 'Sette cose che puoi *fare*.',
    fieldsText: 'Progetti brevi, parti da zero. Scegline uno.',
    pageTitle: 'Una pagina con *il tuo nome*.',
    pageText: 'Tutto quello che finisci va su un’unica pagina. Le aziende vedono solo quello che pubblichi. Questa è una pagina di esempio, non un creator reale.',
    publishTitle: 'Decidi tu cosa diventa pubblico.',
    publishSteps: [
      { t: 'Finisci il progetto', d: 'Finché non è finito, resta privato.' },
      { t: 'Pubblicalo sulla tua pagina', d: 'Premi pubblica quando sei contento del risultato.' },
      { t: 'Le aziende possono trovarlo', d: 'Le aziende sfogliano i progetti pubblicati per categoria.' },
      { t: `Possono contattarti tramite ${NAME}`, d: 'Il messaggio arriva sulla piattaforma. La tua email resta privata e decidi tu se rispondere.' },
    ],
    ctaTitle: 'Inizia come creator.',
    ctaText: `Lascia la tua email. Ti scriviamo una volta, quando ${NAME} apre.`,
  },

  companiesPage: {
    before: 'Trova i creator da quello che hanno ',
    mark: 'fatto',
    after: '.',
    sub: 'Pubblica un brief breve, guarda i progetti finiti e contatta i creator che ti piacciono tramite la piattaforma.',
    cta: 'Richiedi accesso',
    ctaSecondary: 'Guarda come funziona',
    showTitle: 'Cosa pubblichi. Cosa vedi.',
    showText: 'Schermate di esempio. Non sono brief o creator reali.',
    browseTitle: 'Sfoglia i creator per *ciò che hanno fatto*.',
    browseText: 'Ogni creator ha una pagina con i progetti finiti. Questi sono profili di esempio, non persone reali.',
    featuresTitle: 'Cosa puoi fare',
    features: [
      { t: 'Pubblica un brief breve', d: 'Bastano poche righe: cosa ti serve, in che categoria e come sarebbe un buon risultato.' },
      { t: 'Incolla il tuo sito, ricevi una bozza', d: 'Incolla il link del tuo sito e l’AI scrive una bozza di brief. La modifichi tu e decidi cosa pubblicare. Niente va online senza di te.' },
      { t: 'Guarda i progetti finiti', d: 'Sfoglia i progetti pubblicati, categoria per categoria. Vedi cosa ha fatto un creator, non solo cosa dice di saper fare.' },
      { t: 'Contatta tramite la piattaforma', d: `Scrivi ai creator che ti piacciono tramite ${NAME}. La loro email resta privata e sono loro a scegliere se rispondere.` },
    ],
    howTitle: 'Come funziona per le aziende',
    steps: [
      { n: '01', t: 'Pubblica un brief breve', d: 'Poche righe su cosa ti serve e su come sarebbe un buon risultato.' },
      { n: '02', t: 'Guarda i progetti', d: 'I creator fanno i progetti con un assistente AI. Sfoglia quello che pubblicano.' },
      { n: '03', t: 'Contatta i creator', d: 'Scrivi tramite la piattaforma. La loro email resta privata.' },
    ],
    ctaTitle: 'Pubblica il tuo primo brief.',
    ctaText: `Lascia la tua email. Ti scriviamo una volta, quando ${NAME} apre.`,
  },

  legal: {
    updated: 'Ultimo aggiornamento',
    back: 'Torna alla home',
    privacy: {
      title: 'Privacy',
      intro: `Questa pagina riguarda solo questo sito, cioè la pagina dell’accesso anticipato. Ti dice quali dati personali trattiamo, perché e cosa puoi fare. L’app ${NAME} avrà una pagina privacy tutta sua quando aprirà.`,
      summaryTitle: 'In breve',
      summary: [
        ['Chi', `${NAME} è gestito da ${OWNER} (Italia), titolare del trattamento. Contatto: ${mail}.`],
        ['Cosa', 'La tua email, se ti iscrivi come creator o come azienda, la casella spuntata e il tuo codice di condivisione (più quello di un amico, se hai usato il suo link). Netlify può salvare anche dati tecnici, come il tuo indirizzo IP.'],
        ['Perché', `Per avvisarti quando ${NAME} apre e per invitare prima chi porta degli amici. Niente newsletter, niente pubblicità.`],
        ['Dove', 'Netlify (USA) ospita il sito e conserva le iscrizioni per noi. Akismet (USA) le controlla contro lo spam.'],
        ['Per quanto', `Finché non ti avvisiamo che ${NAME} è aperto o non ci chiedi di cancellarli, e mai oltre 12 mesi dalla tua iscrizione.`],
        ['I tuoi diritti', `Scrivi a ${mail} per vedere, correggere o cancellare i tuoi dati, o per ritirare il consenso.`],
        ['Cookie', 'Nessuno, quindi nessun banner. Niente analytics, niente tracciamento, niente pubblicità. Il quiz funziona nel tuo browser e non invia nulla.'],
      ],
      sections: [
        {
          h: 'Chi è il titolare',
          p: [`Il titolare del trattamento è ${OWNER}, che sviluppa e gestisce ${NAME} dall’Italia. Per qualsiasi cosa sui tuoi dati, scrivi a ${mail}.`],
        },
        {
          h: 'Cosa raccogliamo',
          p: [
            'Quando ti iscrivi all’accesso anticipato, il modulo invia: il tuo indirizzo email; se ti iscrivi come creator o come azienda; il fatto che hai spuntato la casella per dare il consenso e confermare di avere 18 anni o più; la lingua della pagina; un codice casuale per il tuo link da condividere; e, se hai aperto il link di un amico, il codice di quell’amico.',
            'Netlify, che gestisce il modulo, può salvare con ogni iscrizione anche dati tecnici, come il tuo indirizzo IP, il tipo di browser e la pagina da cui hai inviato il modulo.',
            'Quando apri una pagina, i server di Netlify trattano anche dati tecnici, come il tuo indirizzo IP, il browser e l’indirizzo della pagina (compreso il codice di condivisione, se il link ne ha uno), per consegnarti la pagina e proteggere il sito.',
            'Non raccogliamo nient’altro. Non ti chiediamo il nome.',
          ],
        },
        {
          h: 'Perché li usiamo e su quale base',
          p: [
            `L’iscrizione: per avvisarti quando ${NAME} apre e, se degli amici si iscrivono con il tuo link, per invitarti prima. Nient’altro: niente newsletter, niente pubblicità, e non diamo mai la tua email alle aziende su ${NAME}. La base giuridica è il tuo consenso (art. 6.1.a del GDPR), che dai spuntando la casella.`,
            'Dati tecnici e controllo antispam: per far funzionare il sito, tenerlo sicuro e tenere fuori dalla lista le iscrizioni false. La base giuridica è il nostro legittimo interesse ad avere un sito che funziona ed è sicuro (art. 6.1.f del GDPR). Non usiamo questi dati per seguirti o profilarti.',
            `Darci la tua email è una tua scelta. Senza, non possiamo avvisarti quando ${NAME} apre. Non prendiamo decisioni automatiche su di te: portare degli amici serve solo a farti invitare prima.`,
          ],
        },
        {
          h: 'Chi riceve i dati',
          p: [
            'Netlify, Inc. (USA) ospita questo sito e conserva le iscrizioni per noi. Agisce per nostro conto, come responsabile del trattamento, in base al suo accordo sul trattamento dei dati. Netlify controlla ogni iscrizione contro lo spam con Akismet, un servizio di Automattic, Inc. (USA). Vedi le pagine privacy di <a href="https://www.netlify.com/privacy/" rel="noopener">Netlify</a> e di <a href="https://automattic.com/privacy/" rel="noopener">Automattic</a>.',
            'Non vendiamo i tuoi dati e non li diamo a nessun altro. Se in futuro useremo un servizio di posta per scriverti, lo indicheremo prima su questa pagina.',
          ],
        },
        {
          h: 'Dati fuori dall’UE',
          p: ['Netlify e Akismet hanno sede negli USA, quindi i tuoi dati vengono trattati anche lì. Netlify, Inc. dichiara di aderire all’EU-U.S. Data Privacy Framework, che la Commissione europea ha riconosciuto adeguato (decisione del 10 luglio 2023), e che il suo accordo sul trattamento dei dati include le clausole contrattuali standard dell’UE. Puoi chiederci i dettagli di queste garanzie.'],
        },
        {
          h: 'Per quanto li conserviamo',
          p: [
            `L’iscrizione: finché non ti abbiamo avvisato che ${NAME} è aperto, o finché non ritiri il consenso o ci chiedi di cancellarla, e mai oltre 12 mesi dalla tua iscrizione. Poi la cancelliamo da Netlify, lista dello spam compresa, e da ogni copia che conserviamo.`,
            'Dati tecnici: Netlify conserva i log dei suoi server secondo le sue regole. Noi non li scarichiamo e non li conserviamo.',
          ],
        },
        {
          h: 'Ritirare il consenso',
          p: [`Puoi ritirare il consenso in ogni momento scrivendo a ${mail}. Cancelliamo la tua iscrizione (email, ruolo e codici) e non ti scriviamo. Se degli amici si sono iscritti con il tuo link, le loro iscrizioni restano, ma il tuo codice non porta più a te. Ritirare il consenso non rende illecito quello che abbiamo fatto prima.`],
        },
        {
          h: 'I tuoi diritti',
          p: [`In base al GDPR puoi chiederci di vedere i tuoi dati e averne una copia, correggerli, cancellarli, limitarne l’uso o riceverli in un formato comune per portarli altrove. Puoi anche opporti all’uso dei dati tecnici. Scrivi a ${mail}: ti rispondiamo entro un mese. Se pensi che trattiamo i tuoi dati in modo scorretto, puoi presentare reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" rel="noopener">garanteprivacy.it</a>) o all’autorità del Paese UE in cui vivi o lavori.`],
        },
        {
          h: 'Cookie',
          p: [
            'Questo sito non usa cookie né tecnologie simili, come il local storage o i pixel di tracciamento. Non ha analytics né pubblicità. Visto che non ci sono cookie, non c’è nessun banner.',
            'Font, immagini e video sono file di questo sito: aprire una pagina non manda niente ad altre aziende. La tua richiesta arriva solo a Netlify, che ospita il sito.',
            'Il quiz funziona nel tuo browser. Le risposte non vengono salvate né inviate, e spariscono quando ricarichi la pagina. Il link di un risultato condiviso dice solo quale risultato hai avuto (per esempio ?r=video). I pulsanti di condivisione aprono il menu di condivisione del telefono o copiano il link. Non vediamo a chi lo mandi: vediamo solo le iscrizioni arrivate dal tuo link.',
            'I link a Instagram e al sito del Garante ti portano su quei siti, dove valgono le loro regole.',
            'Se un giorno aggiungeremo cookie o analytics, aggiorneremo prima questa pagina e ti chiederemo il consenso dove la legge lo richiede.',
          ],
        },
        { h: 'Età', p: [`${NAME} è per persone dai 18 anni in su. Se hai meno di 18 anni, per favore non usare il modulo. Se scopriamo che si è iscritto qualcuno con meno di 18 anni, cancelliamo l’iscrizione.`] },
        { h: 'Modifiche', p: ['Se questa pagina cambia, aggiorniamo la data in alto. Non useremo i tuoi dati per niente di nuovo senza chiedertelo prima.'] },
      ],
    },
    terms: {
      title: 'Termini',
      intro: `Questi termini riguardano questo sito e l’iscrizione all’accesso anticipato. L’app ${NAME} avrà i suoi termini quando aprirà.`,
      sections: [
        { h: 'Accesso anticipato', p: [`${NAME} è in accesso anticipato e lo stiamo ancora costruendo a Torino. Non è ancora aperto. Questo sito, schermate di esempio comprese, mostra l’idea e può cambiare. Possiamo cambiare, mettere in pausa o fermare il progetto.`] },
        { h: 'Chi può usarlo', p: ['Per usare il modulo di iscrizione devi avere 18 anni o più.'] },
        { h: 'Nessuna garanzia', p: [`Non garantiamo quando ${NAME} aprirà, cosa conterrà o cosa otterrai. Non promettiamo che qualcuno ti contatti, ti scelga o ti paghi. Questo sito è offerto così com’è.`] },
        { h: 'Esempi', p: ['Le schermate e i testi segnati come Esempio sono campioni. Non sono utenti, aziende, progetti o risultati reali.'] },
        { h: 'La tua email', p: ['Se ti iscrivi, usiamo la tua email solo come descrive la pagina Privacy.'] },
        { h: 'Condividere il tuo link', p: ['Chi porta degli amici viene invitato prima. È l’unico vantaggio: niente premi né pagamenti, e possiamo cambiarlo o fermarlo.'] },
        { h: 'Legge applicabile', p: ['A questi termini si applica la legge italiana. Questo non toglie i diritti che hai come consumatore secondo la legge del tuo Paese.'] },
        { h: 'Modifiche', p: ['Se questi termini cambiano, aggiorniamo la data in alto.'] },
        { h: 'Contatti', p: [`Domande: ${mail}.`] },
      ],
    },
  },
};
