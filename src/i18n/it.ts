import { NAME, EMAIL, OWNER } from '../site';
import type { Copy } from './en';

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

export const it: Copy = {
  lang: 'it',
  ogLocale: 'it_IT',
  paths: { creators: 'creators', companies: 'companies', privacy: 'privacy', terms: 'terms' },
  skip: 'Vai al contenuto',
  slogan: 'Fai qualcosa per cui le aziende possano sceglierti.',
  example: 'Esempio',
  switchTo: { label: 'English', short: 'EN', aria: 'Read this site in English' },
  nav: { creators: 'Per i creator', companies: 'Per le aziende', cta: 'Richiedi accesso', aria: 'Principale', home: `${NAME}, home` },

  meta: {
    home: {
      title: `${NAME}: fai qualcosa per cui le aziende possano sceglierti`,
      description:
        'Fai un progetto con un coach che ti fa le domande giuste, tienilo sulla tua pagina e fatti trovare dalle aziende. Accesso anticipato.',
    },
    creators: {
      title: `Per i creator · ${NAME}`,
      description:
        'Fai un breve progetto con un coach che ti fa le domande giuste, tienilo sulla tua pagina e fatti trovare dalle aziende. Gratis per i creator. Accesso anticipato.',
    },
    companies: {
      title: `Per le aziende · ${NAME}`,
      description:
        'Pubblica un brief breve, guarda i progetti finiti dai creator e contattali tramite la piattaforma. Accesso anticipato.',
    },
    privacy: { title: `Privacy · ${NAME}`, description: `Come ${NAME} tratta l’email che lasci su questo sito. Niente cookie, niente tracciamento.` },
    terms: { title: `Termini · ${NAME}`, description: `Termini semplici per il sito ${NAME} e l’iscrizione all’accesso anticipato.` },
  },

  hero: {
    chip: 'Accesso anticipato',
    before: 'Fai qualcosa per cui ',
    mark: 'le aziende possano sceglierti',
    after: '.',
    sub: 'Progetti brevi. Nessuna esperienza richiesta. Un coach che ti aiuta a realizzarlo.',
    ctaPrimary: 'Richiedi accesso',
    ctaSecondary: 'Come funziona',
    note: 'Gratis per i creator. Questo è l’accesso anticipato.',
  },

  cards: {
    aria: 'Schermate di esempio dell’app',
    practice: {
      label: 'Progetto di pratica',
      title: 'Gira un video di 15 secondi di una bevanda',
      rows: [
        ['Campo', 'Video'],
        ['Tempo', 'Circa 40 minuti'],
        ['Livello', 'Nessuna esperienza richiesta'],
      ],
      body: 'Un’inquadratura, un’idea. Il coach chiede, decidi tu.',
      foot: 'Gratis. Niente è pubblico finché non lo pubblichi.',
    },
    brief: {
      label: 'Brief',
      from: 'da un bar',
      title: 'Un video di 15 secondi per un bar',
      rows: [
        ['Campo', 'Video'],
        ['Risultato', 'Un video verticale, 15 secondi'],
        ['Tempi', 'Una settimana'],
      ],
      body: 'Fai vedere le nuove bevande estive. Tono calmo e caldo.',
      foot: 'Pubblicato da un’azienda',
    },
    coach: {
      label: 'Coach',
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
      fields: 'Video · Design',
      items: [
        { t: 'Video per un bar', f: 'Video' },
        { t: 'Locandina per una serata cinema', f: 'Design' },
        { t: 'Logo per una panetteria', f: 'Design' },
      ],
      foot: 'Le aziende vedono solo quello che pubblichi.',
    },
  },

  how: {
    id: 'come-funziona',
    title: 'Come funziona in tre passi',
    steps: [
      { n: '01', t: 'Fai un progetto con un coach', d: 'Il coach ti fa le domande giuste e, se glielo chiedi, può preparare una prima versione. La modifichi tu, quindi il progetto resta tuo.' },
      { n: '02', t: 'Tienilo sulla tua pagina', d: 'Ogni progetto finito va sulla tua pagina. Si vede solo quello che scegli di pubblicare. Niente è pubblico senza il tuo ok.' },
      { n: '03', t: 'Fatti trovare dalle aziende', d: 'Le aziende leggono i tuoi progetti e ti scrivono tramite la piattaforma. La tua email resta privata.' },
    ],
  },

  find: {
    id: 'come-ti-trovano',
    title: 'Come ti troveranno le aziende',
    lead: 'Niente è nascosto. Ecco cosa sappiamo oggi e cosa non abbiamo ancora deciso.',
    rows: [
      ['Cosa vedono le aziende', 'Solo i progetti che scegli di pubblicare sulla tua pagina.'],
      ['Cosa è pubblico', 'Decidi tu. Niente è pubblico senza il tuo ok.'],
      ['Chi riceve un progetto', 'Un’azienda sceglie a chi affidarlo e lo paga.'],
      ['La commissione della piattaforma', 'Non è ancora decisa. Te lo diciamo prima che si applichi.'],
    ],
    notice: 'Per ora nessuno paga. Questo è l’accesso anticipato.',
  },

  fields: [
    { name: 'Design', line: 'Crea una locandina, un logo o l’impaginazione di una pagina, poi spiega le tue scelte.' },
    { name: 'Scrittura', line: 'Scrivi un testo prodotto, un breve racconto o una bio, e rendilo più chiaro a ogni domanda.' },
    { name: 'Codice', line: 'Costruisci una piccola pagina web o un piccolo strumento, un passo funzionante alla volta.' },
    { name: 'Video', line: 'Pianifica, gira e monta un breve video con uno scopo reale.' },
    { name: 'Vendere online', line: 'Prepara la pagina di un piccolo negozio, scrivi l’offerta e pensa a come raggiungere chi compra.' },
    { name: 'Musica', line: 'Componi un breve brano o un jingle e decidi per chi è.' },
    { name: 'Prompting con l’AI', line: 'Dai istruzioni chiare a un’AI e controlla quello che ti restituisce.' },
  ],

  creatorsBlock: {
    eyebrow: 'Per i creator',
    title: 'Primi progetti piccoli. Ma veri.',
    text: 'Nessuna esperienza richiesta. Scegli un progetto breve, fallo con il coach e tienilo sulla tua pagina. Gratis per i creator.',
    link: 'Tutto per i creator',
  },
  companiesBlock: {
    eyebrow: 'Per le aziende',
    title: 'Pubblica un brief breve. Guarda progetti veri.',
    text: 'Scrivi in poche righe cosa ti serve. Guarda i progetti che i creator hanno finito e contatta chi ti piace, tramite la piattaforma.',
    points: ['Pubblica un brief breve.', 'Guarda i progetti finiti.', 'Contatta i creator tramite la piattaforma.'],
    link: 'Tutto per le aziende',
  },

  faq: {
    title: 'Domande',
    items: [
      { q: 'È gratis per i creator?', a: 'Sì. Non paghi per iscriverti, per fare un progetto o per pubblicarlo.' },
      { q: 'Chi può iscriversi?', a: 'Chiunque abbia 18 anni o più. Non serve esperienza.' },
      { q: 'L’AI fa il progetto al posto mio?', a: 'Non da sola. Il coach ti fa domande e ti indica cosa manca. Se glielo chiedi, può preparare una prima versione da cui partire. La modifichi, la cambi e decidi tu cosa pubblicare.' },
      { q: 'È una truffa?', a: 'Domanda giusta. Per ora nessuno viene pagato, ai creator non viene addebitato nessun costo e decidi tu cosa pubblicare. Se qualcuno ti chiede di pagare per ricevere un progetto, non siamo noi: scrivici.' },
      { q: 'Come mi contattano le aziende?', a: `Tramite la piattaforma. Un’azienda ti scrive su ${NAME} e tu decidi se rispondere. La tua email resta privata.` },
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
  },

  footer: {
    contact: 'Contatti',
    follow: 'Instagram',
    legal: 'Note legali',
    built: 'Fatto a Torino. Accesso anticipato.',
  },

  creatorsPage: {
    eyebrow: 'Per i creator',
    before: 'Fai un progetto ',
    mark: 'vero',
    after: '.\nFatti trovare.',
    sub: 'Fai un breve progetto con un coach che ti fa le domande giuste e tienilo sulla tua pagina. Nessuna esperienza richiesta.',
    cta: 'Richiedi accesso',
    ctaSecondary: 'Conosci il coach',
    coachTitle: 'Un coach che ti fa le domande giuste.',
    coachText: 'Il coach è un’AI. Ti fa la domanda che rende migliore il progetto. Se vuoi un punto di partenza, chiedi una prima versione e modificala. Il progetto resta tuo.',
    doTitle: 'Il coach',
    doItems: ['Fa una domanda alla volta.', 'Ti indica cosa è poco chiaro o manca.', 'Prepara una prima versione solo se glielo chiedi, segnata “Fatto con l’aiuto dell’AI”.'],
    dontTitle: 'Il coach non',
    dontItems: ['Pubblica qualcosa al posto tuo.', 'Decide al posto tuo.', 'Nasconde il suo aiuto: le bozze dicono “Fatto con l’aiuto dell’AI”.'],
    fieldsTitle: 'Sette campi, un progetto alla volta.',
    fieldsText: 'Progetti brevi in sette campi. Ecco cosa puoi fare.',
    publishTitle: 'Decidi tu cosa diventa pubblico.',
    publishSteps: [
      { t: 'Finisci il progetto', d: 'Finché non è finito, resta privato.' },
      { t: 'Pubblicalo sulla tua pagina', d: 'Premi pubblica quando sei contento del risultato.' },
      { t: 'Le aziende lo trovano', d: 'Le aziende sfogliano i progetti pubblicati per campo.' },
      { t: `Ti contattano tramite ${NAME}`, d: 'Il messaggio arriva sulla piattaforma. La tua email resta privata e decidi tu se rispondere.' },
    ],
    ctaTitle: 'Inizia come creator.',
    ctaText: `Lascia la tua email. Ti scriviamo una volta, quando ${NAME} apre.`,
  },

  companiesPage: {
    eyebrow: 'Per le aziende',
    before: 'Trova i creator da quello che hanno ',
    mark: 'fatto',
    after: '.',
    sub: 'Pubblica un brief breve. Guarda i progetti che i creator hanno finito e pubblicato. Contatta chi ti piace, tramite la piattaforma.',
    cta: 'Richiedi accesso',
    ctaSecondary: 'Guarda come funziona',
    showTitle: 'Cosa pubblichi. Cosa vedi.',
    showText: 'Schermate di esempio. Non sono brief o creator reali.',
    featuresTitle: 'Cosa puoi fare',
    features: [
      { t: 'Pubblica un brief breve', d: 'Bastano poche righe: cosa ti serve, in che campo e come sarebbe un buon risultato.' },
      { t: 'Incolla il tuo sito, ricevi una bozza', d: 'Incolla il link del tuo sito e l’AI scrive una bozza di brief. La modifichi tu e decidi cosa pubblicare. Niente va online senza di te.' },
      { t: 'Guarda i progetti finiti', d: 'Sfoglia i progetti pubblicati, campo per campo. Vedi cosa ha fatto un creator, non solo cosa dice di saper fare.' },
      { t: 'Contatta tramite la piattaforma', d: `Scrivi ai creator che ti piacciono tramite ${NAME}. La loro email resta privata e sono loro a scegliere se rispondere.` },
    ],
    howTitle: 'Come funziona per le aziende',
    steps: [
      { n: '01', t: 'Pubblica un brief breve', d: 'Poche righe su cosa ti serve e su come sarebbe un buon risultato.' },
      { n: '02', t: 'Guarda i progetti', d: 'I creator fanno i progetti con un coach. Sfoglia quello che pubblicano.' },
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
