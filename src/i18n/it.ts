import { NAME, EMAIL, OWNER } from '../site';
import type { Copy } from './en';

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

export const it: Copy = {
  lang: 'it',
  ogLocale: 'it_IT',
  paths: { creators: 'creators', companies: 'companies', privacy: 'privacy', terms: 'terms' },
  skip: 'Vai al contenuto',
  slogan: 'La passione non si indovina. Si prova.',
  example: 'Esempio',
  switchTo: { label: 'English', short: 'EN', aria: 'Read this site in English' },
  nav: { creators: 'Per i creator', companies: 'Per le aziende', cta: 'Richiedi accesso', aria: 'Principale', home: `${NAME}, home` },

  meta: {
    home: {
      title: `${NAME}: impara facendo, fatti trovare`,
      description:
        'Brevi progetti guidati in sette campi, con un coach AI che fa domande. Pubblica quello che crei e lascia che le aziende ti trovino. Accesso anticipato.',
    },
    creators: {
      title: `Per i creator · ${NAME}`,
      description:
        'Scegli un breve progetto, realizzalo con un coach AI che fa solo domande, pubblicalo sulla tua pagina e fatti trovare. Gratis per i creator.',
    },
    companies: {
      title: `Per le aziende · ${NAME}`,
      description:
        'Pubblica un brief breve, oppure incolla il tuo sito e ricevi una bozza. Sfoglia quello che hanno fatto i creator e contattali tramite la piattaforma.',
    },
    privacy: { title: `Privacy · ${NAME}`, description: `Come ${NAME} tratta l’email che lasci su questo sito. Niente cookie, niente tracciamento.` },
    terms: { title: `Termini · ${NAME}`, description: `Termini semplici per il sito ${NAME} e l’iscrizione all’accesso anticipato.` },
  },

  hero: {
    chip: 'Accesso anticipato · fatto a Torino',
    before: 'Impara facendo. Fatti ',
    mark: 'trovare.',
    sub: 'Brevi progetti guidati in sette campi. Un coach AI ti fa le domande, il progetto lo fai tu. Pubblica quello che crei e lascia che le aziende ti trovino.',
    ctaCreator: 'Inizia come creator',
    ctaCompany: 'Pubblica un brief',
    note: 'Gratis per i creator. Accesso anticipato, in costruzione a Torino.',
  },

  cards: {
    aria: 'Schermate di esempio dell’app',
    draft: {
      label: 'Bozza di brief',
      title: 'Parti dal tuo sito',
      field: 'Il tuo sito',
      url: 'tuo-sito.example',
      action: 'Prepara una bozza',
      result: 'Bozza pronta. La modifichi tu prima che vada online.',
    },
    brief: {
      label: 'Brief',
      from: 'Da un piccolo bar',
      title: 'Tre post Instagram per il nuovo menu',
      rows: [
        ['Campo', 'Design'],
        ['Risultato', '3 immagini quadrate'],
        ['Tempi', 'Due settimane'],
      ],
      body: 'Cerchiamo post calmi e caldi. Fai vedere le nuove bevande.',
      foot: 'Pubblicato da un’azienda',
    },
    project: {
      chip: 'Pubblicato',
      field: 'Design',
      title: 'Locandina per una serata cinema di quartiere',
      by: 'Sulla tua pagina',
      note: 'Fatto con il coach. Pubblicato dal creator.',
      action: `Contatta tramite ${NAME}`,
    },
    coach: {
      label: 'Coach',
      you: 'Ho scritto una breve presentazione per la mia pagina portfolio.',
      question: 'Chi la legge per primo, e cosa dovrebbe fare subito dopo?',
      hint: 'Il coach chiede. Decidi tu.',
    },
  },

  how: {
    id: 'come-funziona',
    title: 'Come funziona',
    steps: [
      { n: '01', t: 'Scegli un progetto', d: 'Scegli un breve progetto guidato in uno dei sette campi.' },
      { n: '02', t: 'Realizzalo con il coach', d: 'Il coach AI ti fa delle domande. Tu rispondi migliorando il progetto. Non lo fa mai al posto tuo.' },
      { n: '03', t: 'Pubblicalo', d: 'Quando è finito, scegli tu se pubblicarlo sulla tua pagina. Niente diventa pubblico senza il tuo ok.' },
      { n: '04', t: 'Fatti trovare', d: `Le aziende sfogliano i progetti pubblicati. Se il tuo piace, ti contattano tramite ${NAME}.` },
    ],
  },

  fields: [
    { name: 'Design', line: 'Crea una locandina, un logo o l’impaginazione di una pagina, poi spiega le tue scelte.' },
    { name: 'Scrittura', line: 'Scrivi un testo prodotto, un breve racconto o una bio, e rendilo più chiaro a ogni domanda.' },
    { name: 'Codice', line: 'Costruisci una piccola pagina web o un piccolo strumento, un passo funzionante alla volta.' },
    { name: 'Video', line: 'Pianifica, gira e monta un breve video con uno scopo reale.' },
    { name: 'Vendere online', line: 'Prepara la pagina di un piccolo negozio, scrivi l’offerta e pensa a come raggiungere chi compra.' },
    { name: 'Musica', line: 'Componi un breve brano o un jingle e decidi per chi è.' },
    { name: 'Prompting con l’AI', line: 'Impara a dare istruzioni chiare a un’AI e a controllare quello che ti restituisce.' },
  ],

  creatorsBlock: {
    eyebrow: 'Per i creator',
    title: 'Progetti veri, non lezioni.',
    text: 'Scegli uno dei sette campi. Ogni progetto è breve e guidato. Il coach fa una domanda alla volta, così il progetto lo migliori tu.',
    free: 'Gratis per i creator.',
    link: 'Tutto per i creator',
  },
  companiesBlock: {
    eyebrow: 'Per le aziende',
    title: 'Trova i creator da quello che hanno fatto.',
    text: 'Pubblica un brief breve, oppure incolla il tuo sito e ricevi una bozza da modificare. Poi sfoglia i progetti pubblicati e contatta i creator che ti piacciono, tramite la piattaforma.',
    points: ['Incolla il tuo sito, ricevi una bozza di brief.', 'Sfoglia i progetti pubblicati.', 'Contatta i creator tramite la piattaforma.'],
    link: 'Tutto per le aziende',
  },

  early: {
    chip: 'Accesso anticipato',
    title: 'Accesso anticipato, in costruzione a Torino.',
    text: `${NAME} non è ancora aperto a tutti. Lo stiamo costruendo a Torino. Non abbiamo numeri di utenti, loghi di partner o testimonianze da mostrare, quindi qui non ce ne sono. Le schermate qui sopra sono segnate come Esempio perché lo sono.`,
    rows: [
      ['Creator', 'Gratis.'],
      ['Aziende', 'Gratis durante l’accesso anticipato. Più avanti ci sarà un piano a pagamento.'],
      ['Apertura', 'Ancora nessuna data. Lascia la tua email e ti scriviamo una volta, quando apre.'],
    ],
  },

  faq: {
    title: 'Domande',
    items: [
      { q: 'È gratis?', a: `Sì, per i creator. Le aziende usano ${NAME} gratis durante l’accesso anticipato. Più avanti ci sarà un piano a pagamento per le aziende, e lo diremo prima che parta.` },
      { q: 'Chi può iscriversi?', a: 'Chiunque abbia 18 anni o più. Non serve esperienza in un campo per iniziare.' },
      { q: 'L’AI fa il progetto al posto mio?', a: 'No. Il coach fa domande e ti indica cosa manca. Scrivi, disegni, costruisci e decidi tu. È così che impari, ed è per questo che il progetto resta tuo.' },
      { q: 'Chi vede i miei progetti?', a: 'Solo quello che pubblichi. Tutto il resto resta privato, visibile solo a te.' },
      { q: 'Come mi contattano le aziende?', a: `Tramite la piattaforma. Un’azienda ti scrive su ${NAME} e tu decidi se rispondere. La tua email resta privata.` },
      { q: 'Quando apre?', a: `Non abbiamo ancora una data. ${NAME} è in accesso anticipato e lo stiamo ancora costruendo a Torino. Lascia la tua email e ti scriviamo una volta, quando apre.` },
    ],
  },

  final: {
    id: 'early-access',
    title: 'Ti avvisiamo quando apre.',
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
  },

  footer: {
    contact: 'Contatti',
    follow: 'Instagram',
    legal: 'Note legali',
    built: 'Fatto a Torino. Accesso anticipato.',
  },

  creatorsPage: {
    eyebrow: 'Per i creator',
    title: 'Impara facendo. Fatti trovare.',
    sub: 'Scegli un breve progetto, realizzalo con un coach AI che fa solo domande e pubblicalo sulla tua pagina.',
    cta: 'Richiedi accesso',
    ctaSecondary: 'Guarda i sette campi',
    fieldsTitle: 'Sette campi, un progetto alla volta.',
    fieldsText: 'Ogni progetto è breve e guidato. Ecco cosa puoi fare.',
    coachTitle: 'Un coach che chiede. Non uno che fa al posto tuo.',
    coachText: 'Il coach è un’AI. Il suo compito è farti la domanda che rende migliore il tuo progetto. Il progetto resta tuo.',
    doTitle: 'Il coach',
    doItems: ['Fa una domanda alla volta.', 'Ti indica cosa è poco chiaro o manca.', 'Ti chiede di riprovare dopo ogni modifica.'],
    dontTitle: 'Il coach non',
    dontItems: ['Scrive il tuo progetto.', 'Ti dà una risposta finita da copiare.', 'Decide al posto tuo.'],
    publishTitle: 'Decidi tu cosa diventa pubblico.',
    publishText: 'Gli altri vedono solo quello che pubblichi.',
    publishSteps: [
      { t: 'Finisci il progetto', d: 'Finché non è finito, resta privato.' },
      { t: 'Pubblicalo sulla tua pagina', d: 'Premi pubblica quando sei contento del risultato.' },
      { t: 'Le aziende lo trovano', d: 'Le aziende sfogliano i progetti pubblicati per campo.' },
      { t: `Ti contattano tramite ${NAME}`, d: 'Il messaggio arriva sulla piattaforma. La tua email resta privata e decidi tu se rispondere.' },
    ],
    freeTitle: 'Gratis per i creator.',
    freeText: 'Non paghi per imparare né per pubblicare.',
    ctaTitle: 'Inizia come creator.',
    ctaText: `Lascia la tua email. Ti scriviamo una volta, quando ${NAME} apre.`,
  },

  companiesPage: {
    eyebrow: 'Per le aziende',
    title: 'Trova i creator da quello che hanno fatto.',
    sub: 'Pubblica un brief breve. Sfoglia i progetti che i creator hanno finito e pubblicato. Contatta chi ti piace, tramite la piattaforma.',
    cta: 'Richiedi accesso',
    ctaSecondary: 'Guarda come funziona',
    howTitle: 'Come funziona per le aziende',
    steps: [
      { n: '01', t: 'Scrivi un brief', d: 'Scrivi poche righe su cosa ti serve, oppure incolla il tuo sito.' },
      { n: '02', t: 'Modifica la bozza', d: 'L’AI prepara una bozza di brief dal tuo sito. La sistemi tu prima che vada online.' },
      { n: '03', t: 'Sfoglia i progetti', d: 'Guarda cosa hanno già fatto e pubblicato i creator.' },
      { n: '04', t: 'Contatta chi ti piace', d: `Scrivi tramite ${NAME}. La loro email resta privata.` },
    ],
    featuresTitle: 'Cosa puoi fare',
    features: [
      { t: 'Pubblica un brief', d: 'Scrivi un brief breve: cosa ti serve, in che campo e come sarebbe un buon risultato. Bastano poche righe.' },
      { t: 'Incolla il tuo sito, ricevi una bozza', d: 'Incolla il link del tuo sito. L’AI scrive una bozza di brief. La modifichi tu e decidi cosa pubblicare. Niente va online senza di te.' },
      { t: 'Sfoglia i progetti', d: 'Guarda i progetti pubblicati, campo per campo. Vedi cosa ha fatto un creator, non solo cosa dice di saper fare.' },
      { t: 'Contatta tramite la piattaforma', d: `Scrivi ai creator che ti piacciono tramite ${NAME}. La loro email resta privata e sono loro a scegliere se rispondere.` },
    ],
    pricingTitle: 'Prezzi, in breve',
    pricingText: `${NAME} è gratis per le aziende durante l’accesso anticipato. Più avanti ci sarà un piano a pagamento. Non mostriamo ancora un prezzo perché non c’è un prezzo da mostrare. Ti avviseremo prima di qualsiasi cambiamento.`,
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
        ['Su questo sito', 'Niente cookie, niente analytics, niente tracciamento, niente pubblicità. Nessuna richiesta ad altri siti: font e immagini arrivano da questo sito.'],
      ],
      sections: [
        {
          h: 'Cosa raccogliamo',
          p: [
            'Solo quello che scrivi nel modulo dell’accesso anticipato: il tuo indirizzo email e se ti iscrivi come creator o come azienda. Il modulo registra anche che hai spuntato la casella per accettare e per confermare di avere 18 anni o più. Non raccogliamo nient’altro.',
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
