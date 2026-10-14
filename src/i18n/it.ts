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
  langMenu: 'Lingua',
  nav: { creators: 'Per i creator', companies: 'Per le aziende', cta: 'Mettiti in lista', aria: 'Principale', home: `${NAME}, home` },

  meta: {
    home: {
      title: `${NAME} · Da zero al prodotto`,
      description:
        'Da zero al prodotto. Scegli un progetto breve, finiscilo con Slash, il tuo assistente AI, e tienilo sulla tua pagina. Gratis per i creator.',
    },
    creators: {
      title: `Per i creator: finisci il tuo primo progetto · ${NAME}`,
      description:
        'Progetti brevi, un assistente AI e una pagina per tutto quello che finisci. Le aziende vedranno quello che pubblichi quando apriamo. Gratis per i creator.',
    },
    companies: {
      title: `Per le aziende: trova creator dai loro progetti · ${NAME}`,
      description:
        'Pubblica un brief breve, sfoglia i progetti finiti e scrivi ai creator sulla piattaforma. Mettiti in lista.',
    },
    quiz: { title: `Che tipo di maker sei? · ${NAME}`, description: 'Cinque domande, un minuto, senza iscrizione. Scopri da dove partire. Le risposte restano nel tuo browser.' },
    privacy: { title: `Privacy · ${NAME}`, description: `Come ${NAME} tratta l’email che lasci su questo sito. Niente cookie, niente tracciamento.` },
    terms: { title: `Termini · ${NAME}`, description: `Termini semplici per il sito ${NAME} e l’iscrizione all’accesso anticipato.` },
  },

  hero: {
    chip: 'Gratis per i creator',
    before: 'Da zero ',
    mark: 'al prodotto.',
    after: '',
    sub: 'Scegli un progetto breve, finiscilo con Slash, il tuo assistente AI, e tienilo sulla tua pagina.',
    ctaPrimary: 'Mettiti in lista',
    ctaSecondary: 'Come funziona',
  },

  cards: {
    aria: 'Schermate di esempio dell’app',
    practice: {
      label: 'Progetto di prova',
      title: 'Gira un video di 15 secondi su una bevanda',
      rows: [
        ['Categoria', 'Video brevi'],
        ['Tempo', 'Circa 40 minuti'],
        ['Livello', 'Si parte da zero'],
      ],
      body: 'Un’inquadratura, un’idea. Slash chiede, decidi tu.',
      foot: 'Gratis. Niente è pubblico finché non lo pubblichi.',
    },
    brief: {
      label: 'Brief',
      from: 'da un bar',
      title: 'Un video di 15 secondi per un bar',
      rows: [
        ['Categoria', 'Video brevi'],
        ['Risultato', 'Un video verticale, 15 secondi'],
        ['Consegna', 'Entro una settimana'],
      ],
      body: 'Fai vedere le nuove bevande estive. Tono calmo e caldo.',
      foot: 'Pubblicato da un’azienda',
    },
    coach: {
      label: 'Assistente AI',
      you: 'Ho filmato le nuove bevande del bar.',
      question: 'Cosa deve provare chi non ti conosce nei primi tre secondi?',
      reply: 'Calma e calore.',
      action: 'Crea una prima versione con l’AI',
      draftLabel: 'Bozza',
      draftChip: 'Fatto con l’aiuto dell’AI',
      draft: 'Apri sulla tazza, non sull’insegna. Vapore, la bevanda che si versa piano, niente voce. Ultimo fotogramma: il nome del bar.',
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
    title: 'Ogni portfolio parte da *un progetto*.',
    text: `${NAME} ti dà il progetto, Slash per aiutarti a finirlo e una pagina dove tenerlo.`,
  },

  examples: {
    title: 'Un primo progetto può essere *così*.',
    lead: 'Otto esempi, uno per tipo di progetto. Guarda il video, avvia il timer, ascolta il jingle. I clienti sono inventati e ogni parte fatta con l’AI è segnalata.',
    mine: 'Fai il tuo',
    tags: { ai: 'Fatto con l’AI', code: 'Funziona davvero', answer: 'La risposta è dell’AI' },
    nojs: 'Questo esempio richiede JavaScript.',
    gallery: {
      video: { field: 'Video brevi', t: 'Spot per una bibita, 15 secondi', for: 'Cliente inventato: Saltz8salt', len: '0:15', alt: 'Video: uno spot di 15 secondi per una bibita frizzante al lime e sale. Cristalli di sale cadono sul ghiaccio, uno spicchio di lime si tuffa nel bicchiere, la bibita viene versata e la bottiglia resta ferma nella luce dorata, davanti a un lago. L’ultima schermata dice Saltz8salt, alkoholfrei, Ein bisschen Salz. Ganz viel Sommer.' },
      poster: { field: 'Poster e loghi', t: 'Locandina per una serata cinema', for: 'Cliente inventato: Cinema Orsa', alt: 'Una locandina blu con la scritta SERATA CINEMA e una luna gialla sopra i tetti della città. Venerdì, alle 21:00, in terrazza, Cinema Orsa.' },
      timer: { field: 'Siti e piccoli strumenti', t: 'Un timer per studiare', for: 'Brief inventato: la settimana d’esame di Sofia', modes: ['Studio · 25 min', 'Pausa · 5 min'], group: 'Durata', start: 'Avvia', pause: 'Pausa', resume: 'Riprendi', reset: 'Azzera', done: 'Tempo scaduto. Fai una pausa.', try: 'Provalo: tocca Avvia. Funziona davvero.', test: 'Prova da 10 s' },
      listing: { field: 'Annunci di prodotti', t: 'Annuncio per una candela artigianale', for: 'Cliente inventato: Cera Cera', title: 'Candela cedro e fumo', points: ['Cera di soia colata a mano', 'Dura circa 40 ore', 'Prodotta in piccoli lotti'], alt: 'Una candela accesa in un vasetto di vetro ambrato fumé con lo stoppino di legno e un’etichetta di carta con scritto Cera Cera, cedar & smoke, su un comodino coperto di lino accanto a un libro e a una tazza.' },
      post: { field: 'Post e didascalie', t: 'Post per un negozio di piante', for: 'Cliente inventato: Sunny Plants', handle: 'sunnyplants', caption: 'Sabato: porta una pianta triste, torna a casa con una felice. Rinvasiamo tutto il giorno.', alt: 'Due piante di pothos su un tavolo di legno in un negozio di piante: una afflosciata e ingiallita in un vaso di plastica incrinato, accanto a una rigogliosa appena rinvasata in terracotta.' },
      jingle: { field: 'Musica e suoni', t: 'Jingle per una ciclofficina', for: 'Cliente inventato: Pedal Pals', play: 'Ascolta il jingle', pause: 'Metti in pausa il jingle', seek: 'Posizione nel jingle', hook: '“Pedal Pals, Pedal Pals!”', note: 'Cantato in inglese.' },
      logo: { field: 'Poster e loghi', t: 'Logo per un forno', for: 'Cliente inventato: Forno Gufo', alt: 'Un logo: la faccia di un gufo blu scuro fatta con una pagnotta, con due spighe di grano come sopracciglia, su sfondo giallo. Sotto: forno gufo.' },
      prompt: {
        field: 'Prompt per l’AI', t: 'Un prompt per il piano di studio', for: 'Brief inventato: la settimana d’esame di Sofia', promptLabel: 'Prompt', answerLabel: 'AI', kinds: ['Compito', 'Contesto', 'Limite', 'Formato'], weakLabel: 'Vago', strongLabel: 'Chiaro', switchLabel: 'Confronta due prompt', copy: 'Copia il prompt', copied: 'Copiato', same: 'Stessa AI, stessa domanda. Cambia solo il prompt.',
        parts: ['Fammi un piano di studio per questa settimana.', 'Venerdì ho l’esame di matematica e mercoledì devo consegnare un tema di storia.', 'Posso studiare 90 minuti al giorno.', 'Una riga al giorno.'], weak: 'Aiutami a studiare.', weakAnswer: 'Certo! Studia un po’ ogni giorno, fai delle pause, dormi bene e non scoraggiarti. In bocca al lupo!',
        answer: ['Lun: esercizi di matematica, 45 min, poi lettura di storia, 45 min.', 'Mar: scaletta del tema, 60 min, poi formule di matematica, 30 min.', 'Mer: finisci il tema, 60 min, e consegnalo.', 'Gio: una vecchia prova d’esame di matematica, 90 min.', 'Ven: ripasso di matematica, 30 min. Poi l’esame. Riposo.'],
      },
    },
    items: {
      video: { t: 'Spot per una bibita, 15 secondi', cat: 'Video brevi', lines: ['Saltz8salt', '0:15'] },
      poster: { t: 'Locandina per una serata cinema', cat: 'Poster e loghi', lines: ['Serata', 'cinema', 'VEN · 21:00 · TERRAZZA'] },
      web: { t: 'Un timer per studiare', cat: 'Siti e piccoli strumenti', lines: ['Timer studio', 'Avvia'] },
      listing: { t: 'Annuncio per una candela artigianale', cat: 'Annunci di prodotti', lines: ['Candela cedro e fumo', 'Cera di soia colata a mano', 'Dura circa 40 ore', 'Prodotta in piccoli lotti'] },
      post: { t: 'Post per un negozio di piante', cat: 'Post e didascalie', lines: ['negoziopiante', 'Sabato: porta una pianta triste,', 'torna a casa con una felice.', 'Rinvasiamo tutto il giorno.'] },
      music: { t: 'Jingle per un negozio di bici', cat: 'Musica e suoni', lines: ['Jingle bici', '0:20'] },
      logo: { t: 'Logo per un forno', cat: 'Poster e loghi', lines: ['gufo', 'FORNO'] },
      prompt: { t: 'Un prompt per il piano di studio', cat: 'Prompt per l’AI', lines: ['Scrivi un piano in tre righe', 'per la mia settimana di studio,', 'una riga al giorno.', 'Lun: matematica, 40 minuti', 'Mar: storia, 30 minuti', 'Mer: riposo, poi ripasso'] },
    },
    people: {
      Sanne: { cats: 'Video brevi · Post e didascalie', bio: 'Faccio sembrare calme anche le cose piccole.' },
      Elin: { cats: 'Poster e loghi', bio: 'Poster, loghi e un font davvero bello.' },
      Mats: { cats: 'Siti e piccoli strumenti · Prompt per l’AI', bio: 'Piccoli strumenti che fanno una cosa sola, e la fanno bene.' },
    },
    profile: { label: 'Pagina di esempio', msg: `Scrivi su ${NAME}`, next: 'Il tuo prossimo progetto' },
  },

  demo: {
    alt: 'L’app slashkern che si apre: Slash, il puntatore con gli occhi, si guarda intorno e si ferma accanto al nome.',
    play: 'Avvia il video',
    pause: 'Metti in pausa il video',
  },

  quiz: {
    nav: 'Quiz',
    eyebrow: 'Quiz di un minuto',
    title: 'Che tipo di *maker* sei?',
    lead: 'Cinque domande, senza iscrizione. È un gioco per capire da dove partire, non un test. Le tue risposte restano nel tuo browser.',
    start: 'Inizia il quiz',
    noscript: 'Il quiz richiede JavaScript. Puoi comunque metterti in lista qui sotto.',
    progress: 'Domanda {n} di {total}',
    friend: 'A un amico è uscito “{name}”. E a te?',
    youAre: 'Sei',
    cardTop: 'Che tipo di maker sei?',
    fun: 'È un gioco, non un test.',
    share: 'Condividi il risultato',
    saved: 'Immagine salvata',
    copy: 'Copia il link',
    copied: 'Link copiato',
    again: 'Rifai il quiz',
    join: 'Mettiti in lista',
    shareText: `Su ${NAME} sono {name}. Che tipo di maker sei tu?`,
    firstLabel: 'Il tuo primo progetto',
    also: 'Nel tuo mix anche',
    // Ogni risposta è un progetto vero dell'app: [testo, tipo, indice del progetto nel campo dell'app]. Sette tipi per domanda, nessun progetto ripetuto.
    questions: [
      { q: 'Il piccolo negozio di un amico ha bisogno di aiuto. Ti offri di…', a: [['Tagliare la sua clip lenta tenendo i secondi migliori.', 'video', 0], ['Disegnare un adesivo per la sua porta.', 'poster', 1], ['Riscrivere la sua bio perché gli somigli.', 'posts', 3], ['Sistemare il pulsante Compra che non va.', 'web', 0], ['Riscrivere l’annuncio a cui nessuno risponde.', 'listing', 0], ['Scegliere la musica per il suo video.', 'music', 1], ['Far scrivere all’AI il suo post, con fatti veri.', 'prompt', 0]] },
      { q: 'La chat di gruppo ha bisogno di te. Tu…', a: [['Sistemi la playlist della festa.', 'music', 0], ['Fai organizzare all’AI la cena di compleanno.', 'prompt', 2], ['Giri uno scherzo di 10 secondi sulla cassa sparita.', 'video', 1], ['Scegli 6 immagini per la nuova stanza di un’amica.', 'poster', 2], ['Scrivi gli auguri in tre modi.', 'posts', 2], ['Trovi la scappatoia nella regola del gruppo.', 'web', 2], ['Vendi la tua vecchia giacca senza abbassare il prezzo.', 'listing', 2]] },
      { q: 'Qualcosa online non funziona. Cosa sistemi per primo?', a: [['Un commento maleducato che chiede una risposta calma.', 'posts', 4], ['Uno sconto che fa pagare di più.', 'web', 3], ['Un compratore sparito dopo “è ancora disponibile?”', 'listing', 5], ['Una playlist dal nome che nessuno apre.', 'music', 3], ['Un’AI che si inventa le risposte.', 'prompt', 3], ['Sottotitoli troppo piccoli da leggere.', 'video', 3], ['Una foto buia di sneaker bellissime.', 'poster', 3]] },
      { q: 'Cosa mostreresti con più orgoglio?', a: [['Un sondaggio che ha svelato cosa la gente comprerebbe.', 'listing', 4], ['Un ritmo che una palestra usa nei suoi video.', 'music', 4], ['Un quiz con l’AI che ha aiutato un’amica a studiare.', 'prompt', 1], ['Un’intervista di 20 secondi che ha fatto ridere tutti.', 'video', 2], ['La miniatura aperta da più persone.', 'poster', 5], ['Il nome di un nuovo gusto di gelato.', 'posts', 5], ['Una risposta automatica a “prezzo?”', 'web', 4]] },
      { q: 'Scegli un progetto per questo weekend.', a: [['Passaggi così precisi che un robot innaffierebbe il basilico.', 'web', 5], ['Un video di 15 secondi che vende una salsa piccante.', 'listing', 1], ['Quattro righe orecchiabili per una mini cucina da studenti.', 'music', 5], ['Una tabella fatta con l’AI su chi deve cosa in casa.', 'prompt', 4], ['La telecronaca di una clip di skate.', 'video', 4], ['La prima immagine di un post che invita a scorrere.', 'poster', 4], ['Una caption che fa rispondere gli amici.', 'posts', 0]] },
    ],
    results: {
      video: { name: 'Il Filmmaker', line: 'Vedi la scena prima di tutti gli altri.' },
      poster: { name: 'Il Designer', line: 'Noti cosa non quadra e lo sistemi.' },
      posts: { name: 'Lo Storyteller', line: 'Lo dici più breve, e meglio.' },
      web: { name: 'Il Builder', line: 'Preferisci fare le cose piuttosto che parlarne.' },
      listing: { name: 'Il Seller', line: 'Sai spiegare perché una cosa vale la pena.' },
      music: { name: 'Il Sound Maker', line: 'Senti di cosa ha bisogno un momento.' },
      prompt: { name: 'Il Prompter', line: 'Fai all’AI domande migliori di quasi tutti.' },
    },
    projects: {
      poster: ['Rendi leggibile una storia troppo piena', 'Descrivi un adesivo per un bar', 'Descrivi 6 immagini per la stanza di Elena', 'Sistema una foto buia di sneaker', 'Pianifica la prima immagine di un post', 'Pianifica 2 miniature, scegli la vincente'],
      posts: ['Riscrivi una caption perché gli amici rispondano', 'Scrivi un promemoria gentile per Leo', 'Scrivi un messaggio di auguri in tre modi', 'Riscrivi una bio che non dice niente', 'Rispondi a un commento maleducato', 'Dai un nome a un gusto nuovo'],
      web: ['Sistema il pulsante che resta verde', 'Scrivi le regole di un quiz sulla pizza', 'Trova il trucco, correggi la regola', 'Sistema uno sconto che fa pagare di più', 'Scrivi una risposta automatica a “prezzo?”', 'Scrivi passaggi che un robot sa seguire'],
      video: ['Tieni i 6 secondi migliori', 'Pianifica una clip comica di 10 secondi', 'Intervista qualcuno su una figuraccia', 'Trasforma un testo minuscolo in sottotitoli leggibili', 'Fai la telecronaca di una clip di skate', 'Rispondi a un commento con un video'],
      listing: ['Riscrivi un annuncio a cui nessuno scrive', 'Prepara un video di 15 secondi per una salsa piccante', 'Tieni il prezzo, resta gentile', 'Riscrivi il messaggio insistente di un negozio', 'Scrivi un sondaggio: adesivi o cartoline?', 'Rispondi a “È ancora disponibile?”'],
      music: ['Togli una canzone, ordina le altre', 'Scegli quando entra la musica', 'Rispondi a un messaggio da giornata storta', 'Rinomina una playlist che nessuno apre', 'Batti un ritmo per una palestra', 'Scrivi quattro righe da canticchiare'],
      prompt: ['Riscrivi il prompt di Dana con i suoi fatti', 'Fai interrogare Sofia da un’AI', 'Organizza la cena di Giulia con un prompt', 'Impedisci a un’AI di inventare risposte', 'Trasforma spese confuse in una tabella', 'Aiuta una persona a scegliere casa'],
    },
  },

  band: {
    title: 'Che tipo di maker sei?',
    text: 'Un minuto, cinque domande, senza iscrizione.',
    cta: 'Fai il quiz',
  },

  spot: {
    title: 'La tua idea, *scena per scena.*',
    text: 'Scrivi una riga. Slash la trasforma in inquadrature e didascalia. Poi lo fai tu: giralo col telefono o usa uno strumento video AI.',
    steps: ['Scegli un progetto video breve.', 'Leggi il brief.', 'Scrivi la tua idea in una riga.', 'Ricevi inquadrature e didascalia.'],
    app: 'Nell’app',
    out: 'Cosa puoi fare',
    ai: 'Fatto con l’aiuto dell’AI',
    labelApp: 'Video: un’idea trasformata in inquadrature e didascalia nell’app',
    labelOut: 'Video: uno spot finito di 15 secondi per una bibita inventata, fatto con strumenti AI',
    note: 'La bibita, Saltz8salt, è inventata. La parte nell’app è una registrazione del prototipo vero. Lo spot è fatto con strumenti AI ed è segnalato come tale.',
  },

  how: {
    id: 'come-funziona',
    title: 'Fallo. Tienilo. *Fatti trovare.*',
    steps: [
      { n: '01', t: 'Fallo con Slash', d: 'Scegli un progetto breve. Slash ti fa una domanda alla volta e, se vuoi, prepara una prima versione. La modifichi tu, così resta tuo.' },
      { n: '02', t: 'Tienilo sulla tua pagina', d: 'Tutto quello che finisci va sulla tua pagina. Resta privato finché non pubblichi.' },
      { n: '03', t: 'Fatti trovare dalle aziende', d: `Quando apriamo, le aziende potranno sfogliare quello che pubblichi e scriverti su ${NAME}. La tua email resta privata.` },
    ],
  },

  find: {
    id: 'come-ti-trovano',
    title: 'Il tuo progetto. *Decidi tu.*',
    lead: 'Scegli tu cosa vedono le aziende e con chi parlare.',
    rows: [
      ['Le aziende vedono', 'Solo i progetti di cui vai fiero.'],
      ['La tua email', 'Resta privata. Le aziende ti scrivono su slashkern.'],
      ['Pubblicare', 'Un tocco, quando sei pronto.'],
      ['Per i creator', 'Iscriverti, creare e pubblicare è gratis.'],
    ],
    notice: 'La tua pagina mostra cosa sai fare.',
  },

  fields: [
    { name: 'Video brevi', line: 'Pianifica, gira e monta 15 secondi attorno a un’idea.' },
    { name: 'Poster e loghi', line: 'Disegna un poster o un logo per una piccola attività e spiega perché.' },
    { name: 'Post e didascalie', line: 'Scrivi un post che sembri scritto da una persona, non da una pubblicità.' },
    { name: 'Siti e piccoli strumenti', line: 'Costruisci una piccola pagina o uno strumento, un passo alla volta e sempre funzionante.' },
    { name: 'Annunci di prodotti', line: 'Spiega a uno sconosciuto esattamente cosa riceve.' },
    { name: 'Musica e suoni', line: 'Crea un breve brano o un jingle per qualcuno in particolare.' },
    { name: 'Prompt per l’AI', line: 'Scrivi istruzioni chiare per un’AI e controlla cosa ti risponde.' },
  ],

  creatorsBlock: {
    title: 'Parti in piccolo. *Finisci* qualcosa.',
    text: 'Scegli un progetto breve, finiscilo con Slash e tienilo sulla tua pagina. Gratis per i creator.',
    link: 'Tutto per i creator',
  },
  companiesBlock: {
    title: 'Salta il CV. *Guarda cosa hanno fatto.*',
    text: 'Un CV racconta cosa una persona sa fare. Un progetto finito lo mostra.',
    points: ['Pubblica un brief breve.', 'Guarda i progetti finiti.', 'Scrivi ai creator sulla piattaforma.'],
    link: 'Tutto per le aziende',
  },

  faq: {
    title: 'Domande e *risposte.*',
    more: 'Hai un’altra domanda? Scrivici:',
    items: [
      { q: 'È gratis per i creator?', a: 'Sì. Non paghi mai, nemmeno per pubblicare.' },
      { q: 'Parto da zero. Posso iscrivermi?', a: 'Sì, è pensato per te. Un progetto di prova richiede circa 40 minuti e Slash ti aiuta passo dopo passo.' },
      { q: 'L’AI fa il progetto al posto mio?', a: 'Ti aiuta, ma lo finisci tu. Slash ti fa domande e ti indica cosa manca. Vuoi una base? Prepara una prima versione, segnata “Fatto con l’aiuto dell’AI”. La modifichi e decidi tu cosa pubblicare.' },
      { q: 'È una truffa?', a: 'No. I creator non pagano mai, per ora nessuno viene pagato e decidi tu cosa diventa pubblico. Se qualcuno ti chiede soldi per un progetto, non siamo noi: scrivici.' },
      { q: 'Cosa posso fare?', a: 'Sette tipi di progetto: video brevi, poster e loghi, post e didascalie, siti e piccoli strumenti, annunci di prodotti, musica e suoni, prompt per l’AI.' },
      { q: 'Come mi contattano le aziende?', a: `Tramite ${NAME}. Leggi il messaggio e decidi tu se rispondere. La tua email resta privata.` },
      { q: 'Chi può iscriversi, e dove?', a: 'Chiunque abbia 18 anni o più, in tutta Europa. L’app è in sette lingue.' },
      { q: 'Quando apre?', a: `Non c’è ancora una data. Lo stiamo ancora costruendo. Lascia la tua email e ti scriviamo una sola volta, quando apre.` },
    ],
  },

  final: {
    id: 'early-access',
    title: 'Entra tra i primi.',
    text: `Una sola email, quando ${NAME} apre. Nient’altro.`,
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
    submit: 'Mettiti in lista',
    sending: 'Invio in corso…',
    small: `Usiamo la tua email solo per questo. Puoi chiederci di cancellarla quando vuoi: ${EMAIL}`,
    errEmailEmpty: 'Inserisci il tuo indirizzo email.',
    errEmailInvalid: 'Inserisci un indirizzo email valido, tipo nome@esempio.it.',
    errConsent: 'Spunta la casella per continuare.',
    errSend: `Invio non riuscito. Riprova, oppure scrivi a ${EMAIL}.`,
    okTitle: 'Sei in lista.',
    okText: `Grazie. Ti scriviamo una sola volta, quando ${NAME} apre.`,
    shareTitle: 'Porta un amico.',
    shareText: 'Porta degli amici e ti invitiamo prima.',
    shareButton: 'Condividi il tuo link',
    shareCopy: 'Copia il link',
    shareCopied: 'Link copiato',
    shareMessage: `Ho appena messo il mio nome nella lista di ${NAME}: da zero al prodotto.`,
  },

  footer: {
    contact: 'Contatti',
    follow: 'Instagram',
    legal: 'Note legali',
    share: 'Condividi il sito',
    shareCopied: 'Link copiato',
    shareMessage: `${NAME}: da zero al prodotto.`,
  },

  creatorsPage: {
    before: 'Finisci il tuo ',
    mark: 'primo progetto',
    after: '.',
    sub: 'Progetti brevi per partire da zero. Slash ti aiuta, tu finisci, e tutto va sulla tua pagina.',
    cta: 'Mettiti in lista',
    ctaSecondary: 'Conosci Slash',
    slashSays: 'Ciao, sono Slash. Faccio domande, ti indico cosa manca e preparo una prima versione quando la vuoi.',
    coachTitle: 'Slash ti aiuta. Tu finisci.',
    coachText: 'Slash è un’AI. Ti chiede per chi è il progetto e cosa taglieresti. Vuoi una base? Chiedi una prima versione e falla tua.',
    doTitle: 'Slash',
    doItems: ['Fa una domanda alla volta.', 'Ti dice cosa non è chiaro o cosa manca.', 'Prepara una prima versione se glielo chiedi, segnata “Fatto con l’aiuto dell’AI”.'],
    dontTitle: 'Slash non',
    dontItems: ['Pubblica al posto tuo.', 'Sceglie al posto tuo.', 'Nasconde il suo aiuto.'],
    fieldsTitle: 'Sette cose che puoi *fare*.',
    fieldsText: 'Sono tutti brevi e partono da zero. Scegline uno.',
    pageTitle: 'Una pagina con *il tuo nome*.',
    pageText: 'Tutto quello che finisci sta su una pagina, la tua KernCard. Le aziende vedono solo quello che pubblichi. Questa è di esempio.',
    publishTitle: 'Decidi tu cosa diventa pubblico.',
    publishSteps: [
      { t: 'Finisci il progetto', d: 'Resta privato mentre lo fai.' },
      { t: 'Pubblicalo sulla tua pagina', d: 'Premi pubblica quando il risultato ti piace.' },
      { t: 'Le aziende possono trovarlo', d: 'Sfogliano i progetti pubblicati per categoria.' },
      { t: `Possono scriverti su ${NAME}`, d: 'La tua email resta privata e decidi tu se rispondere.' },
    ],
    ctaTitle: 'Inizia come creator.',
    ctaText: `Una sola email, quando ${NAME} apre.`,
  },

  companiesPage: {
    before: 'Trova i creator da quello che hanno ',
    mark: 'fatto',
    after: '.',
    sub: 'Pubblica un brief breve, sfoglia i progetti finiti e scrivi ai creator che ti piacciono.',
    cta: 'Mettiti in lista',
    ctaSecondary: 'Come funziona',
    showTitle: 'Cosa pubblichi. Cosa vedi.',
    showText: 'Schermate di esempio, non brief o creator reali.',
    browseTitle: 'Sfoglia i creator per *ciò che hanno fatto*.',
    browseText: 'Ogni creator ha una pagina di progetti finiti. Questi sono esempi, non persone reali.',
    featuresTitle: 'Cosa puoi fare',
    features: [
      { t: 'Pubblica un brief breve', d: 'Poche righe: cosa ti serve, la categoria e com’è un buon risultato.' },
      { t: 'Incolla il tuo sito, ricevi una bozza', d: 'Incolla il link e l’AI scrive una bozza di brief. La modifichi tu, e niente va online senza di te.' },
      { t: 'Guarda i progetti finiti', d: 'Sfoglia per categoria. Vedi cosa ha fatto una persona, non solo cosa dice di saper fare.' },
      { t: 'Scrivi sulla piattaforma', d: `Scrivi ai creator tramite ${NAME}. La loro email resta privata e scelgono loro se rispondere.` },
    ],
    howTitle: 'Come funziona per le aziende',
    steps: [
      { n: '01', t: 'Pubblica un brief breve', d: 'Poche righe su cosa ti serve e com’è un buon risultato.' },
      { n: '02', t: 'Guarda i progetti', d: 'I creator li fanno con Slash. Tu sfogli quello che pubblicano.' },
      { n: '03', t: 'Scrivi ai creator', d: 'Tramite la piattaforma. La loro email resta privata.' },
    ],
    ctaTitle: 'Pubblica il tuo primo brief.',
    ctaText: `Una sola email, quando ${NAME} apre.`,
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
          p: [`In base al GDPR puoi chiederci di vedere i tuoi dati e averne una copia, correggerli, cancellarli, limitarne l’uso o riceverli in un formato comune per portarli altrove. Puoi anche opporti all’uso dei dati tecnici. Scrivi a ${mail}: ti rispondiamo entro un mese. Se pensi che trattiamo i tuoi dati in modo scorretto, puoi presentare reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" rel="noopener">garanteprivacy.it</a>) o all’autorità del Paese UE in cui risiedi o svolgi la tua attività.`],
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
        { h: 'Accesso anticipato', p: [`${NAME} è in accesso anticipato e lo stiamo ancora costruendo. Non è ancora aperto. Questo sito, schermate di esempio comprese, mostra l’idea e può cambiare. Possiamo cambiare, mettere in pausa o fermare il progetto.`] },
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
