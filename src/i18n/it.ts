import { NAME, EMAIL, OWNER } from '../site';
import type { Copy } from './en';

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

export const it: Copy = {
  lang: 'it',
  ogLocale: 'it_IT',
  paths: { creators: 'creators', companies: 'companies', privacy: 'privacy', terms: 'terms', quiz: 'quiz' },
  skip: 'Vai al contenuto',
  slogan: 'Fai qualcosa per cui le aziende possano sceglierti.',
  example: 'Esempio',
  switchTo: { label: 'English', short: 'EN', aria: 'Read this site in English' },
  nav: { creators: 'Per i creator', companies: 'Per le aziende', cta: 'Richiedi accesso', aria: 'Principale', home: `${NAME}, home` },

  meta: {
    home: {
      title: `${NAME}: fai qualcosa per cui le aziende possano sceglierti`,
      description:
        'Fai un breve progetto con un assistente AI che ti fa una domanda alla volta. Tienilo sulla tua pagina e le aziende possono trovarlo. Accesso anticipato.',
    },
    creators: {
      title: `Per i creator · ${NAME}`,
      description:
        'Fai un breve progetto con un assistente AI che ti fa una domanda alla volta, tienilo sulla tua pagina e lascia che le aziende lo trovino. Gratis per i creator. Accesso anticipato.',
    },
    companies: {
      title: `Per le aziende · ${NAME}`,
      description:
        'Pubblica un brief breve, guarda i progetti finiti dai creator e contattali tramite la piattaforma. Accesso anticipato.',
    },
    quiz: { title: `Che tipo di maker sei? · ${NAME}`, description: 'Un quiz di un minuto: cinque domande per capire da dove partire. Senza iscrizione, e le risposte restano nel tuo browser.' },
    privacy: { title: `Privacy · ${NAME}`, description: `Come ${NAME} tratta l’email che lasci su questo sito. Niente cookie, niente tracciamento.` },
    terms: { title: `Termini · ${NAME}`, description: `Termini semplici per il sito ${NAME} e l’iscrizione all’accesso anticipato.` },
  },

  hero: {
    chip: 'Accesso anticipato',
    before: 'Fai qualcosa per cui ',
    mark: 'le aziende possano sceglierti',
    after: '.',
    sub: 'Nessuna esperienza richiesta. Un assistente AI ti fa le domande, tu fai il progetto e le aziende possono trovarlo.',
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
        ['Livello', 'Nessuna esperienza richiesta'],
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
    title: 'Progetti da finire *in un pomeriggio*.',
    lead: 'Otto esempi di cosa va su una pagina. Creator e brief sono inventati, e le foto e il video sono fatti con l’AI.',
    mine: 'Fai il tuo',
    all: 'Tutti',
    filter: 'Filtra per categoria',
    items: {
      video: { t: 'Bevande estive, 5 secondi', cat: 'Video brevi', lines: ['Bevande estive', '0:05'] },
      poster: { t: 'Locandina per una serata cinema', cat: 'Poster e loghi', lines: ['Serata', 'cinema', 'VEN · 21:00 · TERRAZZA'] },
      web: { t: 'Un timer per studiare', cat: 'Siti e piccoli strumenti', lines: ['Timer studio', 'Avvia'] },
      listing: { t: 'Annuncio per una candela artigianale', cat: 'Annunci di prodotti', lines: ['Candela cedro e fumo', 'Cera di soia colata a mano', 'Dura circa 40 ore', 'Prodotta in piccoli lotti'] },
      post: { t: 'Post per un negozio di piante', cat: 'Post e didascalie', lines: ['negoziopiante', 'Sabato: porta una pianta triste,', 'torna a casa con una felice.', 'Rinvasiamo tutto il giorno.'] },
      music: { t: 'Jingle per un negozio di bici', cat: 'Musica e suoni', lines: ['Jingle bici', '0:20'] },
      logo: { t: 'Logo per una panetteria', cat: 'Poster e loghi', lines: ['rye', 'PANETTERIA'] },
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
    note: 'La schermata iniziale dell’app.',
    alt: 'La schermata iniziale dell’app su un telefono: Fai qualcosa per cui le aziende possano sceglierti.',
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
      { n: '03', t: 'Fatti trovare dalle aziende', d: 'Le aziende sfogliano i progetti pubblicati e ti scrivono tramite la piattaforma. La tua email resta privata.' },
    ],
  },

  find: {
    id: 'come-ti-trovano',
    title: 'Come ti *troveranno* le aziende',
    lead: 'Ecco cosa sappiamo oggi e cosa non abbiamo ancora deciso.',
    rows: [
      ['Cosa vedono le aziende', 'Solo i progetti che scegli di pubblicare sulla tua pagina.'],
      ['Cosa è pubblico', 'Decidi tu. Niente è pubblico senza il tuo ok.'],
      ['Chi riceve un progetto', 'Un’azienda sceglie a chi affidarlo e lo paga.'],
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
    text: 'Nessuna esperienza richiesta. Scegli un progetto breve, fallo con l’assistente e tienilo sulla tua pagina. Gratis per i creator.',
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
      { q: 'Chi può iscriversi, e dove?', a: 'Chiunque abbia 18 anni o più. È pensato per i creator di tutta Europa e parte in inglese. Le aziende ti contatteranno per progetti veri e le regole per i più giovani cambiano da paese a paese.' },
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
    shareMessage: `Mi sono appena iscritto alla lista di ${NAME}: fai qualcosa per cui le aziende possano sceglierti.`,
  },

  footer: {
    contact: 'Contatti',
    follow: 'Instagram',
    legal: 'Note legali',
    built: 'Fatto a Torino. Accesso anticipato.',
    share: 'Condividi il sito',
    shareCopied: 'Link copiato',
    shareMessage: `${NAME}: fai qualcosa per cui le aziende possano sceglierti.`,
  },

  creatorsPage: {
    before: 'Fai un progetto ',
    mark: 'vero',
    after: '.\nFatti trovare.',
    sub: 'Fai un breve progetto con un assistente AI e tienilo sulla tua pagina. Nessuna esperienza richiesta.',
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
    fieldsText: 'Progetti brevi, nessuna esperienza richiesta. Scegline uno.',
    pageTitle: 'Una pagina con *il tuo nome*.',
    pageText: 'Tutto quello che finisci va su un’unica pagina. Le aziende vedono solo quello che pubblichi. Questa è una pagina di esempio, non un creator reale.',
    publishTitle: 'Decidi tu cosa diventa pubblico.',
    publishSteps: [
      { t: 'Finisci il progetto', d: 'Finché non è finito, resta privato.' },
      { t: 'Pubblicalo sulla tua pagina', d: 'Premi pubblica quando sei contento del risultato.' },
      { t: 'Le aziende lo trovano', d: 'Le aziende sfogliano i progetti pubblicati per categoria.' },
      { t: `Ti contattano tramite ${NAME}`, d: 'Il messaggio arriva sulla piattaforma. La tua email resta privata e decidi tu se rispondere.' },
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
    noteLabel: 'Bozza',
    note: 'Questa pagina va rivista da un avvocato prima del lancio.',
    updated: 'Ultimo aggiornamento',
    back: 'Torna alla home',
    privacy: {
      title: 'Privacy',
      intro: `Questa pagina riguarda solo questo sito, cioè la pagina dell’accesso anticipato. L’app ${NAME} avrà una pagina privacy tutta sua quando aprirà.`,
      summaryTitle: 'Cosa conserviamo',
      summary: [
        ['Cosa', 'L’indirizzo email che scrivi e se ti iscrivi come creator o come azienda.'],
        ['Perché', `Per avvisarti quando ${NAME} apre. Ti scriviamo una volta, quando apre. Niente pubblicità.`],
        ['Dove', 'Lo conserva chi ospita il modulo (Netlify). Le iscrizioni le leggiamo lì.'],
        ['Per quanto', `Finché non ti abbiamo avvisato che ${NAME} è aperto, o finché non ci chiedi di cancellarla. Se dopo 12 mesi non è ancora aperto, la cancelliamo.`],
        ['Cancellarla', `Scrivi a ${mail} e la cancelliamo.`],
        ['Su questo sito', 'Niente cookie, niente analytics, niente tracciamento, niente pubblicità. Nessuna richiesta ad altri siti: font, immagini e video arrivano da questo sito.'],
        ['Quiz e condivisione', 'Il quiz funziona nel tuo browser e non invia nulla. Se ti iscrivi, il modulo aggiunge un codice casuale per il tuo link da condividere e, se c’è, il codice dell’amico di cui hai usato il link.'],
      ],
      sections: [
        {
          h: 'Cosa raccogliamo',
          p: [
            'Solo quello che scrivi nel modulo dell’accesso anticipato: il tuo indirizzo email e se ti iscrivi come creator o come azienda. Il modulo registra anche che hai spuntato la casella per accettare e per confermare di avere 18 anni o più. Il modulo aggiunge anche un codice casuale per il tuo link da condividere e, se arrivi dal link di un amico, il codice di quell’amico. I codici non sono collegati ad altro. Non raccogliamo nient’altro.',
            'Come ogni host di siti web, anche chi ospita il modulo tratta dati tecnici, come il tuo indirizzo IP, per consegnare la pagina e filtrare lo spam.',
          ],
        },
        {
          h: 'Perché la usiamo e su quale base',
          p: [
            `Solo per avvisarti quando ${NAME} apre. La base giuridica è il tuo consenso (GDPR art. 6.1.a), che dai spuntando la casella. Puoi ritirarlo in ogni momento scrivendo a ${mail}. Ritirarlo non cambia quello che abbiamo fatto prima.`,
          ],
        },
        {
          h: 'Chi la riceve',
          p: [
            'Chi ospita il modulo (Netlify) conserva le iscrizioni per noi e agisce per nostro conto. Netlify è una società statunitense, quindi i tuoi dati possono essere trattati fuori dall’UE. Non vendiamo la tua email e non la diamo a nessun altro.',
            'Se in futuro useremo un servizio di posta per scriverti, lo indicheremo prima su questa pagina.',
          ],
        },
        {
          h: 'Per quanto la conserviamo',
          p: [`Finché non ti abbiamo avvisato che ${NAME} è aperto, o finché non ci chiedi di cancellarla. Se ${NAME} non è ancora aperto 12 mesi dopo la tua iscrizione, cancelliamo la tua email.`],
        },
        {
          h: 'I tuoi diritti',
          p: [
            `Puoi chiederci di vedere, correggere o cancellare i tuoi dati, di limitarne l’uso o di riceverne una copia. Scrivi a ${mail}. Puoi anche presentare reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" rel="noopener">garanteprivacy.it</a>).`,
          ],
        },
        {
          h: 'Cookie e tracciamento',
          p: ['Questo sito non imposta cookie. Non ha analytics, pixel di tracciamento né pubblicità. Non carica niente da altri siti: i font arrivano da questo sito.'],
        },
        { h: 'Età', p: [`${NAME} è per persone dai 18 anni in su. Se hai meno di 18 anni, per favore non usare il modulo.`] },
        { h: 'Modifiche', p: ['Se questa pagina cambia, aggiorniamo la data in alto.'] },
        { h: `Chi gestisce ${NAME}`, p: [`${NAME} è sviluppato e gestito da ${OWNER} (Italia), titolare del trattamento. Contatto: ${mail}.`] },
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
        { h: 'Legge applicabile', p: ['A questi termini si applica la legge italiana. Questo non toglie i diritti che hai come consumatore secondo la legge del tuo Paese.'] },
        { h: 'Modifiche', p: ['Se questi termini cambiano, aggiorniamo la data in alto.'] },
        { h: 'Contatti', p: [`Domande: ${mail}.`] },
      ],
    },
  },
};
