import { NAME, EMAIL, OWNER } from '../site';
import type { Copy } from './en';

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

export const nl: Copy = {
  lang: 'nl',
  ogLocale: 'nl_NL',
  paths: { creators: 'creators', companies: 'companies', privacy: 'privacy', terms: 'terms', quiz: 'quiz' },
  skip: 'Ga naar de inhoud',
  slogan: 'Van nul naar product.',
  example: 'Voorbeeld',
  langMenu: 'Taal',
  nav: { creators: 'Voor creators', companies: 'Voor bedrijven', cta: 'Op de wachtlijst', aria: 'Hoofdmenu', home: `${NAME}, home` },

  meta: {
    home: {
      title: `${NAME} · Van nul naar product`,
      description:
        'Van nul naar product. Kies een kort project, maak het af met Slash, je AI-assistent, en bewaar het op je eigen pagina. Gratis voor creators.',
    },
    creators: {
      title: `Voor creators: maak je eerste project af · ${NAME}`,
      description:
        'Korte projecten, een AI-assistent en een pagina voor alles wat je afmaakt. Bedrijven zien wat je publiceert zodra we opengaan. Gratis voor creators.',
    },
    companies: {
      title: `Voor bedrijven: vind creators aan wat ze gemaakt hebben · ${NAME}`,
      description:
        'Plaats een korte briefing, bekijk afgemaakte projecten en stuur creators een bericht via het platform. Zet je op de wachtlijst.',
    },
    quiz: { title: `Wat voor maker ben jij? · ${NAME}`, description: 'Vijf vragen, één minuut, zonder account. Ontdek waar je kunt beginnen. Je antwoorden blijven in je browser.' },
    privacy: { title: `Privacy · ${NAME}`, description: `Hoe ${NAME} omgaat met het e-mailadres dat je op deze site achterlaat. Geen cookies, geen tracking.` },
    terms: { title: `Voorwaarden · ${NAME}`, description: `Duidelijke voorwaarden voor de ${NAME}-website en de aanmelding voor early access.` },
  },

  hero: {
    chip: 'Gratis voor creators',
    before: 'Van nul ',
    mark: 'naar product.',
    after: '',
    sub: 'Kies een kort project, maak het af met Slash, je AI-assistent, en bewaar het op je eigen pagina.',
    ctaPrimary: 'Zet je op de wachtlijst',
    ctaSecondary: 'Zo werkt het',
  },

  cards: {
    aria: 'Voorbeeldschermen uit de app',
    practice: {
      label: 'Oefenproject',
      title: 'Film een video van 15 seconden van een drankje',
      rows: [
        ['Categorie', 'Korte video’s'],
        ['Tijd', 'Ongeveer 40 minuten'],
        ['Niveau', 'Begin bij nul'],
      ],
      body: 'Eén shot, één idee. Slash vraagt, jij beslist.',
      foot: 'Gratis. Niets is openbaar tot je het publiceert.',
    },
    brief: {
      label: 'Briefing',
      from: 'van een café',
      title: 'Een video van 15 seconden voor een café',
      rows: [
        ['Categorie', 'Korte video’s'],
        ['Resultaat', 'Eén verticale video, 15 seconden'],
        ['Termijn', 'Eén week'],
      ],
      body: 'Laat de nieuwe zomerdrankjes zien. Rustig en warm.',
      foot: 'Geplaatst door een bedrijf',
    },
    coach: {
      label: 'AI-assistent',
      you: 'Ik heb de nieuwe drankjes van het café gefilmd.',
      question: 'Wat moet een vreemde voelen in de eerste drie seconden?',
      reply: 'Rustig en warm.',
      action: 'Maak een eerste versie met AI',
      draftLabel: 'Concept',
      draftChip: 'Gemaakt met hulp van AI',
      draft: 'Begin op het kopje, niet op het uithangbord. Stoom, langzaam inschenken, geen voice-over. Laatste beeld: de naam van het café.',
      draftNote: 'Je kunt het aanpassen. Het project blijft van jou.',
      mic: 'Praten in plaats van typen: tik op de microfoon.',
    },
    page: {
      label: 'Je pagina',
      name: 'Je naam',
      fields: 'Korte video’s · Posters en logo’s',
      items: [
        { t: 'Video voor een café', f: 'Korte video’s' },
        { t: 'Poster voor een filmavond', f: 'Posters en logo’s' },
        { t: 'Logo voor een bakkerij', f: 'Posters en logo’s' },
      ],
      foot: 'Bedrijven zien alleen wat je publiceert.',
    },
  },

  catch: {
    title: 'Elk portfolio begint met *één project*.',
    text: `${NAME} geeft je het project, Slash om je te helpen het af te maken en een pagina om het te bewaren.`,
  },

  examples: {
    title: 'Een eerste project kan er *zo uitzien*.',
    lead: 'Acht voorbeelden, één per soort project. Speel de clip af, start de timer, luister naar de jingle. De klanten zijn verzonnen en alles wat met AI is gemaakt, heeft een label.',
    mine: 'Maak het jouwe',
    tags: { ai: 'Gemaakt met AI', code: 'Werkt echt', answer: 'AI schreef het antwoord' },
    nojs: 'Dit voorbeeld heeft JavaScript nodig.',
    gallery: {
      video: { field: 'Korte video’s', t: 'Een reclamespot voor een drankje, 15 seconden', for: 'Verzonnen klant: Saltz8salt', len: '0:15', alt: 'Video: een reclamespot van 15 seconden voor een bruisend drankje met zout en limoen. Zoutkristallen vallen op ijs, een stukje limoen spat in het glas, het drankje wordt ingeschonken en de fles staat stil in het gouden licht aan een meer. Het laatste scherm toont Saltz8salt, alkoholfrei, Ein bisschen Salz. Ganz viel Sommer.' },
      poster: { field: 'Posters en logo’s', t: 'Poster voor een filmavond', for: 'Verzonnen klant: Cinema Orsa', alt: 'Een blauwe poster met de tekst FILMAVOND en een gele maan boven een skyline van daken. Vrijdag, 21:00, op het dak, Cinema Orsa.' },
      timer: { field: 'Websites en kleine tools', t: 'Een studietimer', for: 'Verzonnen briefing: Sofia’s examenweek', modes: ['Studeren · 25 min', 'Pauze · 5 min'], group: 'Lengte', start: 'Starten', pause: 'Pauze', resume: 'Hervatten', reset: 'Resetten', done: 'De tijd is om. Neem een pauze.' },
      listing: { field: 'Productadvertenties', t: 'Advertentie voor een handgemaakte kaars', for: 'Verzonnen klant: Cera Cera', title: 'Kaars ceder & rook', points: ['Met de hand gegoten sojawas', 'Brandt zo’n 40 uur', 'Gemaakt in kleine oplages'], alt: 'Een brandende kaars in een gerookt barnsteenkleurig glazen potje met een houten lont en een papieren etiket met Cera Cera, cedar & smoke, op een nachtkastje met linnen kleed naast een boek en een mok.' },
      post: { field: 'Posts en captions', t: 'Post voor een plantenwinkel', for: 'Verzonnen klant: Sunny Plants', handle: 'sunnyplants', caption: 'Zaterdag: neem een zielige plant mee, ga naar huis met een vrolijke. We verpotten de hele dag.', alt: 'Twee pothos-planten op een houten tafel in een plantenwinkel: een slappe, gelig wordende in een gebarsten plastic pot naast een weelderige die net is verpot in terracotta.' },
      jingle: { field: 'Muziek en geluid', t: 'Jingle voor een fietsenmaker', for: 'Verzonnen klant: Pedal Pals', play: 'Speel de jingle af', pause: 'Pauzeer de jingle', seek: 'Positie in de jingle', hook: '“Pedal Pals, Pedal Pals!”', note: 'Gezongen in het Engels.' },
      logo: { field: 'Posters en logo’s', t: 'Logo voor een bakkerij', for: 'Verzonnen klant: Forno Gufo', alt: 'Een logo: een marineblauw uilengezicht gemaakt van een brood, met twee korenaren als wenkbrauwen, op geel. Eronder: forno gufo.' },
      prompt: {
        field: 'AI-prompts', t: 'Een prompt voor een studieplan', for: 'Verzonnen briefing: Sofia’s examenweek', promptLabel: 'Prompt', answerLabel: 'AI',
        prompt: 'Maak een studieplan voor deze week. Vrijdag heb ik een wiskunde-examen en woensdag moet ik een geschiedenisessay inleveren. Ik kan 90 minuten per dag studeren. Eén regel per dag.',
        answer: ['Ma: wiskundeopgaven, 45 min, daarna geschiedenis lezen, 45 min.', 'Di: opzet van het essay, 60 min, daarna wiskundeformules, 30 min.', 'Wo: essay afmaken, 60 min, en inleveren.', 'Do: één oud wiskunde-examen, 90 min.', 'Vr: wiskunde herhalen, 30 min. Dan het examen. Rust.'],
      },
    },
    items: {
      video: { t: 'Een reclamespot voor een drankje, 15 seconden', cat: 'Korte video’s', lines: ['Saltz8salt', '0:15'] },
      poster: { t: 'Poster voor een filmavond', cat: 'Posters en logo’s', lines: ['Film', 'avond', 'VR · 21:00 · DAK'] },
      web: { t: 'Een studietimer', cat: 'Websites en kleine tools', lines: ['Studietimer', 'Starten'] },
      listing: { t: 'Advertentie voor een handgemaakte kaars', cat: 'Productadvertenties', lines: ['Kaars ceder & rook', 'Met de hand gegoten sojawas', 'Brandt zo’n 40 uur', 'Gemaakt in kleine oplages'] },
      post: { t: 'Post voor een plantenwinkel', cat: 'Posts en captions', lines: ['plantenwinkel', 'Zaterdag: neem een zielige plant mee,', 'ga naar huis met een vrolijke.', 'We verpotten de hele dag.'] },
      music: { t: 'Jingle voor een fietsenmaker', cat: 'Muziek en geluid', lines: ['Fietsenmaker-jingle', '0:20'] },
      logo: { t: 'Logo voor een bakkerij', cat: 'Posters en logo’s', lines: ['gufo', 'BAKKERIJ'] },
      prompt: { t: 'Een prompt voor een studieplan', cat: 'AI-prompts', lines: ['Schrijf een plan van drie regels', 'voor mijn studieweek,', 'één regel per dag.', 'Ma: wiskunde, 40 minuten', 'Di: geschiedenis, 30 minuten', 'Wo: rust, dan herhalen'] },
    },
    people: {
      Sanne: { cats: 'Korte video’s · Posts en captions', bio: 'Ik laat kleine dingen er rustig uitzien.' },
      Elin: { cats: 'Posters en logo’s', bio: 'Posters, logo’s en één heel goed lettertype.' },
      Mats: { cats: 'Websites en kleine tools · AI-prompts', bio: 'Kleine tools die één ding goed doen.' },
    },
    profile: { label: 'Voorbeeldpagina', msg: `Bericht op ${NAME}`, next: 'Je volgende project' },
  },

  demo: {
    alt: 'De slashkern-app gaat open: Slash, de cursor met ogen, kijkt rond en blijft naast de naam staan.',
    play: 'Video afspelen',
    pause: 'Video pauzeren',
  },

  quiz: {
    nav: 'Quiz',
    eyebrow: 'Quiz van één minuut',
    title: 'Wat voor *maker* ben jij?',
    lead: 'Vijf vragen, zonder account. Een leuke gok waar je kunt beginnen, geen test. Je antwoorden blijven in je browser.',
    start: 'Start de quiz',
    noscript: 'De quiz heeft JavaScript nodig. Je kunt je hieronder nog steeds op de wachtlijst zetten.',
    progress: 'Vraag {n} van {total}',
    friend: 'Een vriend kreeg “{name}”. Wat ben jij?',
    youAre: 'Je bent',
    cardTop: 'Wat voor maker ben jij?',
    fun: 'Een leuke gok, geen test.',
    share: 'Deel mijn resultaat',
    saved: 'Afbeelding opgeslagen',
    copy: 'Link kopiëren',
    copied: 'Link gekopieerd',
    again: 'Doe de quiz opnieuw',
    join: 'Zet je op de wachtlijst',
    shareText: `Op ${NAME} ben ik {name}. Wat voor maker ben jij?`,
    firstLabel: 'Je eerste project',
    also: 'Ook in je mix',
    // Elk antwoord is één echt project in de app: [tekst, type, index van het project in het veld van de app] (app: src/scripts/fields.ts, zelfde volgorde).
    // Elke vraag heeft alle zeven types, in een andere volgorde, en geen project komt dubbel voor. Het meest gekozen type wint; de kaart toont het gekozen project daarin.
    questions: [
      { q: 'De kleine winkel van een vriend heeft hulp nodig. Je biedt aan:', a: [['De trage clip inkorten tot de beste seconden.', 'video', 0], ['Een sticker voor de deur ontwerpen.', 'poster', 1], ['De bio herschrijven zodat die klinkt zoals zij.', 'posts', 3], ['De kapotte Koop-knop repareren.', 'web', 0], ['De advertentie herschrijven waar niemand op reageert.', 'listing', 0], ['De muziek voor hun video kiezen.', 'music', 1], ['AI hun post laten schrijven, met echte feiten.', 'prompt', 0]] },
      { q: 'Je groepschat heeft je nodig. Je…', a: [['Fikst de feestplaylist.', 'music', 0], ['Laat AI het verjaardagsdiner plannen.', 'prompt', 2], ['Filmt een grap van 10 seconden over de verdwenen speaker.', 'video', 1], ['Kiest 6 beelden voor de nieuwe kamer van een vriendin.', 'poster', 2], ['Schrijft het verjaardagsbericht op drie manieren.', 'posts', 2], ['Vindt het gat in de regel van de groep.', 'web', 2], ['Verkoopt je oude jas zonder de prijs te verlagen.', 'listing', 2]] },
      { q: 'Er is online iets stuk. Wat repareer je eerst?', a: [['Een onbeleefde reactie die een kalm antwoord nodig heeft.', 'posts', 4], ['Een korting waardoor alles duurder wordt.', 'web', 3], ['Een koper die stil werd na „Nog beschikbaar?”', 'listing', 5], ['Een playlistnaam waar niemand op tikt.', 'music', 3], ['Een AI die antwoorden verzint.', 'prompt', 3], ['Ondertitels die te klein zijn om te lezen.', 'video', 3], ['Een donkere foto van geweldige sneakers.', 'poster', 3]] },
      { q: 'Wat zou je het trotst laten zien?', a: [['Een poll die liet zien wat mensen zouden kopen.', 'listing', 4], ['Een beat die een sportschool in haar video’s gebruikt.', 'music', 4], ['Een AI-quiz waarmee een vriendin leerde.', 'prompt', 1], ['Een interview van 20 seconden waar iedereen om lachte.', 'video', 2], ['De thumbnail met de meeste tikken.', 'poster', 5], ['De naam van een nieuwe ijssmaak.', 'posts', 5], ['Een automatisch antwoord op „prijs?”', 'web', 4]] },
      { q: 'Kies een project voor dit weekend.', a: [['Stappen zo precies dat een robot je basilicum water kan geven.', 'web', 5], ['Een video van 15 seconden die een hete saus verkoopt.', 'listing', 1], ['Vier pakkende regels voor een piepklein studentenkeukentje.', 'music', 5], ['Een AI-tabel van wie wat schuldig is in huis.', 'prompt', 4], ['Sportcommentaar bij een skateclip.', 'video', 4], ['De eerste afbeelding van een post, zodat mensen doorswipen.', 'poster', 4], ['Een caption waar vrienden op reageren.', 'posts', 0]] },
    ],
    results: {
      video: { name: 'De Filmer', line: 'Jij ziet de scène eerder dan wie dan ook.' },
      poster: { name: 'De Designer', line: 'Je ziet wat niet klopt, en je lost het op.' },
      posts: { name: 'De Schrijver', line: 'Je zegt het korter, en beter.' },
      web: { name: 'De Bouwer', line: 'Je maakt het liever dan dat je erover praat.' },
      listing: { name: 'De Verkoper', line: 'Je kunt uitleggen waarom iets het waard is.' },
      music: { name: 'De Sound Maker', line: 'Je hoort wat een moment nodig heeft.' },
      prompt: { name: 'De Prompter', line: 'Je stelt AI betere vragen dan de meeste mensen.' },
    },
    projects: {
      poster: ['Maak een volle story leesbaar', 'Beschrijf een sticker voor een bar', 'Beschrijf 6 beelden voor Elena’s kamer', 'Verbeter een donkere sneakerfoto', 'Plan de eerste afbeelding van een post', 'Plan 2 thumbnails, kies de winnaar'],
      posts: ['Herschrijf een caption zodat vrienden reageren', 'Schrijf een vriendelijke herinnering voor Leo', 'Schrijf één verjaardagsbericht op drie manieren', 'Herschrijf een bio die niets zegt', 'Beantwoord een onbeleefde reactie', 'Bedenk een naam voor een nieuwe smaak'],
      web: ['Repareer de knop die groen blijft', 'Schrijf regels voor een pizzaquiz', 'Vind de truc, repareer de regel', 'Repareer een korting die meer kost', 'Schrijf een automatisch antwoord op “prijs?”', 'Schrijf stappen die een robot kan volgen'],
      video: ['Houd de beste 6 seconden', 'Plan een grappige clip van 10 seconden', 'Interview iemand over een ongemakkelijk moment', 'Maak van piepkleine tekst leesbare ondertitels', 'Zet sportcommentaar onder een skateclip', 'Beantwoord een reactie met een video'],
      listing: ['Herschrijf een lampadvertentie waar niemand op reageert', 'Plan een video van 15 seconden voor een pittige saus', 'Houd je prijs, blijf vriendelijk', 'Herschrijf het opdringerige bericht van een winkel', 'Schrijf een poll: stickers of ansichtkaarten?', 'Beantwoord “Is dit nog beschikbaar?”'],
      music: ['Schrap één nummer, zet de rest op volgorde', 'Kies wanneer de muziek invalt', 'Reageer op een appje over een rotdag', 'Geef een playlist waar niemand op tikt een nieuwe naam', 'Tik een beat voor een gym', 'Schrijf vier pakkende regels om te neuriën'],
      prompt: ['Herschrijf Dana’s prompt met haar feiten', 'Laat een AI Sofia overhoren', 'Plan Giulia’s diner met één prompt', 'Zorg dat een AI geen antwoorden verzint', 'Maak van rommelige rekeningen een tabel', 'Help iemand een woning kiezen'],
    },
  },

  band: {
    title: 'Wat voor maker ben jij?',
    text: 'Eén minuut, vijf vragen, zonder account.',
    cta: 'Doe de quiz',
  },

  spot: {
    title: 'Jouw idee, *shot voor shot.*',
    text: 'Typ één regel. Slash maakt er shots en een caption van. Dan maak je het zelf: film het met je telefoon, of gebruik een AI-videotool.',
    steps: ['Kies een kort videoproject.', 'Lees de briefing.', 'Typ je idee in één regel.', 'Krijg de shots en de caption.'],
    app: 'In de app',
    out: 'Wat je kunt maken',
    caps: ['Ik vroeg een AI om dit flesje in één woord te beschrijven.', 'Eén woord:', 'KOUD.'],
    ai: 'Gemaakt met hulp van AI',
    labelApp: 'Video: één idee omgezet in shots en een caption in de app',
    labelOut: 'Video: een afgemaakt kort voorbeeld, gemaakt met een AI-videotool',
    note: 'Een voorbeeldproject met een verzonnen flesje, versneld. Het deel in de app is opgenomen uit het echte prototype. Deze video is gemaakt met een AI-videotool.',
  },

  how: {
    id: 'zo-werkt-het',
    title: 'Maak het. Bewaar het. *Word gevonden.*',
    steps: [
      { n: '01', t: 'Maak het met Slash', d: 'Kies een kort project. Slash stelt één vraag per keer en maakt een eerste versie als je dat wilt. Jij past het aan, dus het blijft van jou.' },
      { n: '02', t: 'Bewaar het op je pagina', d: 'Alles wat je afmaakt komt op je eigen pagina. Het blijft privé tot je publiceert.' },
      { n: '03', t: 'Word gevonden door bedrijven', d: `Zodra we opengaan, kunnen bedrijven bekijken wat je publiceert en je een bericht sturen op ${NAME}. Je e-mailadres blijft privé.` },
    ],
  },

  find: {
    id: 'zo-word-je-gevonden',
    title: 'Wat jij maakt. *Jouw keuze.*',
    lead: 'Jij kiest wat bedrijven zien en met wie je praat.',
    rows: [
      ['Bedrijven zien', 'Alleen de projecten waar je trots op bent.'],
      ['Je e-mailadres', 'Blijft privé. Bedrijven schrijven je op slashkern.'],
      ['Openbaar maken', 'Eén tik, als je er klaar voor bent.'],
      ['Voor creators', 'Gratis om mee te doen, te maken en te publiceren.'],
    ],
    notice: 'Je pagina laat zien wat je kunt.',
  },

  fields: [
    { name: 'Korte video’s', line: 'Plan, film en monteer 15 seconden rond één idee.' },
    { name: 'Posters en logo’s', line: 'Ontwerp een poster of logo voor een klein bedrijf en leg uit waarom.' },
    { name: 'Posts en captions', line: 'Schrijf een post die klinkt als een mens, niet als een advertentie.' },
    { name: 'Websites en kleine tools', line: 'Bouw een kleine pagina of tool, steeds één werkende stap tegelijk.' },
    { name: 'Productadvertenties', line: 'Vertel vreemden precies wat ze krijgen.' },
    { name: 'Muziek en geluid', line: 'Maak een kort nummer of een jingle voor iemand in het bijzonder.' },
    { name: 'AI-prompts', line: 'Schrijf duidelijke instructies voor een AI en check wat er terugkomt.' },
  ],

  creatorsBlock: {
    title: 'Begin klein. *Maak* iets af.',
    text: 'Kies een kort project, maak het af met Slash en bewaar het op je pagina. Gratis voor creators.',
    link: 'Meer voor creators',
  },
  companiesBlock: {
    title: 'Sla het cv over. *Zie wat ze gemaakt hebben.*',
    text: 'Een cv zegt wat iemand kan. Een afgemaakt project laat het zien.',
    points: ['Plaats een korte briefing.', 'Bekijk afgemaakte projecten.', 'Stuur creators een bericht via het platform.'],
    link: 'Meer voor bedrijven',
  },

  faq: {
    title: 'Vragen, *beantwoord.*',
    more: 'Nog een vraag? Schrijf ons:',
    items: [
      { q: 'Is het gratis voor creators?', a: 'Ja. Je betaalt nooit, ook niet om te publiceren.' },
      { q: 'Ik begin bij nul. Mag ik meedoen?', a: 'Ja, daar is het voor bedoeld. Een oefenproject duurt ongeveer 40 minuten en Slash helpt bij elke stap.' },
      { q: 'Maakt de AI het project voor mij?', a: 'De AI helpt, jij maakt het af. Slash stelt vragen en wijst aan wat er nog mist. Wil je een voorsprong? Dan maakt Slash een eerste versie, met het label “Gemaakt met hulp van AI”. Jij past die aan en beslist wat je publiceert.' },
      { q: 'Is dit oplichting?', a: 'Nee. Creators betalen nooit, er wordt nog niemand uitbetaald en jij bepaalt wat openbaar wordt. Vraagt iemand je te betalen voor een project, dan zijn wij het niet. Laat het ons weten.' },
      { q: 'Wat kan ik maken?', a: 'Zeven soorten projecten: korte video’s, posters en logo’s, posts en captions, websites en kleine tools, productadvertenties, muziek en geluid, en AI-prompts.' },
      { q: 'Hoe nemen bedrijven contact met me op?', a: `Via ${NAME}. Jij leest het bericht en beslist of je antwoordt. Je e-mailadres blijft privé.` },
      { q: 'Wie kan meedoen, en waar?', a: 'Iedereen van 18 jaar of ouder, in heel Europa. De app is er in zeven talen.' },
      { q: 'Wanneer gaat het open?', a: 'Nog geen datum. We zijn het nog aan het bouwen. Laat je e-mailadres achter en we mailen je één keer, zodra het opengaat.' },
    ],
  },

  final: {
    id: 'early-access',
    title: 'Wees er vroeg bij.',
    text: `Eén mail van ons, zodra ${NAME} opengaat. Meer niet.`,
  },

  form: {
    emailLabel: 'E-mail',
    emailPlaceholder: 'jij@voorbeeld.nl',
    roleLabel: 'Ik doe mee als',
    roleCreator: 'Creator',
    roleCompany: 'Bedrijf',
    consentBefore: `Ik ga ermee akkoord dat ${NAME} mijn e-mailadres bewaart om me te laten weten wanneer het opengaat. Ik ben 18 jaar of ouder. Zie de `,
    consentLink: 'privacypagina',
    consentAfter: '.',
    submit: 'Zet je op de wachtlijst',
    sending: 'Versturen…',
    small: `We gebruiken je e-mailadres alleen hiervoor. Vraag ons het te verwijderen wanneer je maar wilt: ${EMAIL}`,
    errEmailEmpty: 'Vul je e-mailadres in.',
    errEmailInvalid: 'Vul een geldig e-mailadres in, zoals naam@voorbeeld.nl.',
    errConsent: 'Vink het vakje aan om door te gaan.',
    errSend: `Versturen mislukt. Probeer het opnieuw, of schrijf naar ${EMAIL}.`,
    okTitle: 'Je staat op de lijst.',
    okText: `Bedankt. We mailen je één keer, zodra ${NAME} opengaat.`,
    shareTitle: 'Neem een vriend mee.',
    shareText: 'Neem vrienden mee en word eerder uitgenodigd.',
    shareButton: 'Deel je link',
    shareCopy: 'Link kopiëren',
    shareCopied: 'Link gekopieerd',
    shareMessage: `Ik sta net op de ${NAME}-lijst: van nul naar product.`,
  },

  footer: {
    contact: 'Contact',
    follow: 'Instagram',
    legal: 'Juridisch',
    share: 'Deel deze site',
    shareCopied: 'Link gekopieerd',
    shareMessage: `${NAME}: van nul naar product.`,
  },

  creatorsPage: {
    before: 'Maak je ',
    mark: 'eerste project',
    after: ' af.',
    sub: 'Korte projecten waarmee je bij nul kunt beginnen. Slash helpt, jij maakt af, en alles komt op je eigen pagina.',
    cta: 'Zet je op de wachtlijst',
    ctaSecondary: 'Maak kennis met Slash',
    slashSays: 'Hoi, ik ben Slash. Ik stel vragen, wijs aan wat er mist en maak een eerste versie als je dat wilt.',
    coachTitle: 'Slash helpt. Jij maakt af.',
    coachText: 'Slash is een AI. Hij vraagt voor wie het project is en wat je zou schrappen. Wil je een voorsprong? Vraag om een eerste versie en maak die van jou.',
    doTitle: 'Wat Slash doet',
    doItems: ['Eén vraag per keer stellen.', 'Aanwijzen wat onduidelijk is of mist.', 'Een eerste versie maken als je erom vraagt, met het label “Gemaakt met hulp van AI”.'],
    dontTitle: 'Wat Slash niet doet',
    dontItems: ['Iets voor je publiceren.', 'Jouw keuzes maken.', 'Zijn hulp verbergen.'],
    fieldsTitle: 'Zeven dingen die je kunt *maken*.',
    fieldsText: 'Allemaal kort, allemaal te beginnen bij nul. Kies er één.',
    pageTitle: 'Een pagina met *jouw naam* erop.',
    pageText: 'Alles wat je afmaakt staat op één pagina, je KernCard. Bedrijven zien alleen wat je publiceert. Deze is een voorbeeld.',
    publishTitle: 'Jij kiest wat openbaar wordt.',
    publishSteps: [
      { t: 'Maak het project af', d: 'Het blijft privé terwijl je eraan bezig bent.' },
      { t: 'Publiceer het op je pagina', d: 'Druk op publiceren als je het resultaat goed vindt.' },
      { t: 'Bedrijven kunnen het vinden', d: 'Ze bekijken gepubliceerde projecten per categorie.' },
      { t: `Ze kunnen je een bericht sturen op ${NAME}`, d: 'Je e-mailadres blijft privé en jij beslist of je antwoordt.' },
    ],
    ctaTitle: 'Begin als creator.',
    ctaText: `Eén mail van ons, zodra ${NAME} opengaat.`,
  },

  companiesPage: {
    before: 'Vind creators aan wat ze hebben ',
    mark: 'gemaakt',
    after: '.',
    sub: 'Plaats een korte briefing, bekijk afgemaakte projecten en stuur de creators die je bevallen een bericht.',
    cta: 'Zet je op de wachtlijst',
    ctaSecondary: 'Zo werkt het',
    showTitle: 'Wat je plaatst. Wat je ziet.',
    showText: 'Voorbeeldschermen, geen echte briefings of creators.',
    browseTitle: 'Bekijk creators op *wat ze gemaakt hebben*.',
    browseText: 'Elke creator heeft een pagina met afgemaakte projecten. Dit zijn voorbeelden, geen echte mensen.',
    featuresTitle: 'Wat je kunt doen',
    features: [
      { t: 'Plaats een korte briefing', d: 'Een paar regels: wat je nodig hebt, de categorie en hoe een goed resultaat eruitziet.' },
      { t: 'Plak je website, krijg een concept', d: 'Plak je link en de AI maakt een concept van een briefing. Jij past het aan, en zonder jou gaat er niets live.' },
      { t: 'Bekijk afgemaakte projecten', d: 'Bekijk ze per categorie. Je ziet wat iemand gemaakt heeft, niet alleen wat die zegt te kunnen.' },
      { t: 'Stuur berichten via het platform', d: `Schrijf creators via ${NAME}. Hun e-mailadres blijft privé en zij kiezen of ze antwoorden.` },
    ],
    howTitle: 'Zo werkt het voor bedrijven',
    steps: [
      { n: '01', t: 'Plaats een korte briefing', d: 'Een paar regels over wat je nodig hebt en hoe een goed resultaat eruitziet.' },
      { n: '02', t: 'Bekijk projecten', d: 'Creators maken ze met Slash. Jij bekijkt wat ze publiceren.' },
      { n: '03', t: 'Stuur creators een bericht', d: 'Via het platform. Hun e-mailadres blijft privé.' },
    ],
    ctaTitle: 'Plaats je eerste briefing.',
    ctaText: `Eén mail van ons, zodra ${NAME} opengaat.`,
  },

  legal: {
    updated: 'Laatst bijgewerkt',
    back: 'Terug naar home',
    privacy: {
      title: 'Privacy',
      intro: `Dit is een vertaling. Als die afwijkt van de Engelse versie, geldt de Engelse versie. Deze pagina gaat alleen over deze website: de early-accesspagina. Er staat op welke persoonsgegevens we verwerken, waarom, en wat je ermee kunt doen. De ${NAME}-app krijgt een eigen privacypagina zodra die opengaat.`,
      summaryTitle: 'In het kort',
      summary: [
        ['Wie', `${OWNER} (Italië) beheert ${NAME} en is de verwerkingsverantwoordelijke. Contact: ${mail}.`],
        ['Wat', 'Je e-mailadres, of je meedoet als creator of als bedrijf, het aangevinkte vakje en je deelcode (plus de code van een vriend als je diens link hebt gebruikt). Netlify kan ook technische gegevens opslaan, zoals je IP-adres.'],
        ['Waarom', `Om je te laten weten wanneer ${NAME} opengaat, en om mensen die vrienden meenemen eerder uit te nodigen. Geen nieuwsbrief, geen advertenties.`],
        ['Waar', 'Netlify (VS) host de site en slaat de aanmeldingen voor ons op. Akismet (VS) controleert ze op spam.'],
        ['Hoe lang', `Tot we je laten weten dat ${NAME} open is of je ons vraagt het te verwijderen, en nooit langer dan 12 maanden na je aanmelding.`],
        ['Je rechten', `Schrijf naar ${mail} om je gegevens in te zien, te corrigeren of te verwijderen, of om je toestemming in te trekken.`],
        ['Cookies', 'Geen, dus geen cookiebanner. Geen analytics, geen tracking, geen advertenties. De quiz draait in je browser en verstuurt niets.'],
      ],
      sections: [
        {
          h: 'Wie is verantwoordelijk',
          p: [`De verwerkingsverantwoordelijke is ${OWNER}, die ${NAME} vanuit Italië bouwt en beheert. Voor alles over je gegevens kun je schrijven naar ${mail}.`],
        },
        {
          h: 'Wat we verzamelen',
          p: [
            'Als je je aanmeldt voor early access, stuurt het formulier: je e-mailadres; of je meedoet als creator of als bedrijf; dat je het vakje hebt aangevinkt om akkoord te gaan en te bevestigen dat je 18 jaar of ouder bent; de taal van de pagina; een willekeurige code voor je eigen deellink; en, als je de link van een vriend hebt geopend, de code van die vriend.',
            'Netlify, dat het formulier verzorgt, kan bij elke aanmelding ook technische gegevens opslaan, zoals je IP-adres, je browsertype en de pagina waarvandaan je het hebt verstuurd.',
            'Als je een pagina opent, verwerken de servers van Netlify ook technische gegevens, zoals je IP-adres, je browser en het paginaadres (inclusief een deelcode, als de link er een heeft), om de pagina te leveren en de site te beveiligen.',
            'We verzamelen verder niets. We vragen niet naar je naam.',
          ],
        },
        {
          h: 'Waarom we het gebruiken, en de rechtsgrond',
          p: [
            `Je aanmelding: om je te laten weten wanneer ${NAME} opengaat en, als vrienden zich via jouw link aanmelden, om je eerder uit te nodigen. Verder niets: geen nieuwsbrief, geen advertenties, en we geven je e-mailadres nooit aan bedrijven op ${NAME}. De rechtsgrond is je toestemming (AVG art. 6 lid 1 onder a), die je geeft door het vakje aan te vinken.`,
            'Technische gegevens en spamcontrole: om de site te leveren, veilig te houden en nepaanmeldingen van de lijst te weren. De rechtsgrond is ons gerechtvaardigd belang bij een werkende, veilige website (AVG art. 6 lid 1 onder f). We gebruiken deze gegevens niet om je te volgen of te profileren.',
            `Je e-mailadres geven is jouw keuze. Zonder kunnen we je niet laten weten wanneer ${NAME} opengaat. We nemen geen geautomatiseerde besluiten over je: vrienden meenemen zorgt er alleen voor dat je eerder wordt uitgenodigd.`,
          ],
        },
        {
          h: 'Wie het krijgt',
          p: [
            'Netlify, Inc. (VS) host deze site en slaat de aanmeldingen voor ons op. Het handelt namens ons, als onze verwerker, onder zijn verwerkersovereenkomst. Netlify controleert elke aanmelding op spam met Akismet, een dienst van Automattic, Inc. (VS). Zie de privacypagina’s van <a href="https://www.netlify.com/privacy/" rel="noopener">Netlify</a> en <a href="https://automattic.com/privacy/" rel="noopener">Automattic</a>.',
            'We verkopen je gegevens niet en geven ze niet aan anderen. Als we later een maildienst gebruiken om je te schrijven, noemen we die eerst op deze pagina.',
          ],
        },
        {
          h: 'Gegevens buiten de EU',
          p: ['Netlify en Akismet zijn gevestigd in de VS, dus je gegevens worden daar ook verwerkt. Netlify, Inc. zegt deel te nemen aan het EU-U.S. Data Privacy Framework, waarvan de Europese Commissie heeft vastgesteld dat het een passend beschermingsniveau biedt (besluit van 10 juli 2023), en dat zijn verwerkersovereenkomst de modelcontractbepalingen van de EU bevat. Je kunt ons om details over deze waarborgen vragen.'],
        },
        {
          h: 'Hoe lang we het bewaren',
          p: [
            `Je aanmelding: tot we je hebben laten weten dat ${NAME} open is, of tot je je toestemming intrekt of ons vraagt het te verwijderen, en nooit langer dan 12 maanden na je aanmelding. Daarna verwijderen we het bij Netlify, inclusief de spamlijst, en uit elke kopie die we bewaren.`,
            'Technische gegevens: Netlify bewaart zijn serverlogs volgens zijn eigen bewaarregels. Wij downloaden of bewaren ze niet.',
          ],
        },
        {
          h: 'Je toestemming intrekken',
          p: [`Je kunt je toestemming op elk moment intrekken door te schrijven naar ${mail}. We verwijderen dan je aanmelding (e-mailadres, rol en codes) en schrijven je niet meer. Als vrienden zich via jouw link hebben aangemeld, blijven hun aanmeldingen bestaan, maar jouw code leidt dan niet meer naar jou. Intrekken maakt niet onrechtmatig wat we eerder hebben gedaan.`],
        },
        {
          h: 'Je rechten',
          p: [`Onder de AVG kun je ons vragen je gegevens in te zien en een kopie te krijgen, ze te corrigeren, te verwijderen, het gebruik ervan te beperken, of ze in een gangbaar formaat aan je te geven om elders mee te nemen. Je kunt ook bezwaar maken tegen ons gebruik van technische gegevens. Schrijf naar ${mail}: we antwoorden binnen een maand. Als je denkt dat we verkeerd met je gegevens omgaan, kun je een klacht indienen bij de Italiaanse toezichthouder (<a href="https://www.garanteprivacy.it" rel="noopener">Garante per la protezione dei dati personali</a>) of bij de toezichthouder in het EU-land waar je woont of werkt.`],
        },
        {
          h: 'Cookies',
          p: [
            'Deze site plaatst geen cookies en gebruikt geen vergelijkbare technologie, zoals local storage of trackingpixels. Er zijn geen analytics en geen advertenties. Omdat er geen cookies zijn, is er ook geen cookiebanner.',
            'Lettertypen, afbeeldingen en video’s zijn bestanden op deze site, dus het openen van een pagina stuurt niets naar andere bedrijven. Alleen Netlify, dat de site host, ontvangt je verzoek.',
            'De quiz draait in je browser. Je antwoorden worden niet opgeslagen of verstuurd en zijn weg als je de pagina herlaadt. Een gedeelde quizlink laat alleen zien welk resultaat je kreeg (bijvoorbeeld ?r=video). Deelknoppen openen het deelmenu van je telefoon of kopiëren de link. We zien niet naar wie je hem stuurt; we zien alleen aanmeldingen die via jouw link binnenkomen.',
            'De Instagram-link en de Garante-link brengen je naar die websites, waar hun eigen regels gelden.',
            'Als we ooit cookies of analytics toevoegen, passen we eerst deze pagina aan en vragen we je toestemming waar de wet dat vereist.',
          ],
        },
        { h: 'Leeftijd', p: [`${NAME} is voor mensen van 18 jaar en ouder. Gebruik het formulier alsjeblieft niet als je jonger bent. Als we merken dat iemand onder de 18 zich heeft aangemeld, verwijderen we de aanmelding.`] },
        { h: 'Wijzigingen', p: ['Als deze pagina verandert, passen we de datum bovenaan aan. We gebruiken je gegevens niet voor iets nieuws zonder het je eerst te vragen.'] },
      ],
    },
    terms: {
      title: 'Voorwaarden',
      intro: `Dit is een vertaling. Als die afwijkt van de Engelse versie, geldt de Engelse versie. Deze voorwaarden gelden voor deze website en de aanmelding voor early access. De ${NAME}-app krijgt eigen voorwaarden zodra die opengaat.`,
      sections: [
        { h: 'Early access', p: [`${NAME} zit in early access en wordt nog gebouwd. Het is nog niet open. Deze site, inclusief de voorbeeldschermen, laat het idee zien en kan veranderen. We mogen het project aanpassen, pauzeren of stoppen.`] },
        { h: 'Wie het mag gebruiken', p: ['Je moet 18 jaar of ouder zijn om het aanmeldformulier te gebruiken.'] },
        { h: 'Geen garanties', p: [`We geven geen garantie over wanneer ${NAME} opengaat, wat erin zit of wat je ervan krijgt. We beloven niet dat iemand contact met je opneemt, jou kiest of jou betaalt. Deze site wordt geleverd zoals hij is.`] },
        { h: 'Voorbeelden', p: ['Schermen en teksten met het label Voorbeeld zijn voorbeelden. Het zijn geen echte gebruikers, bedrijven, projecten of resultaten.'] },
        { h: 'Je e-mailadres', p: ['Als je je aanmeldt, gebruiken we je e-mailadres alleen zoals de privacypagina beschrijft.'] },
        { h: 'Je link delen', p: ['Mensen die vrienden meenemen, worden eerder uitgenodigd. Dat is de enige beloning: geen prijzen en geen betalingen, en we mogen het aanpassen of stoppen.'] },
        { h: 'Recht', p: ['Op deze voorwaarden is Italiaans recht van toepassing. Dit neemt geen rechten weg die je als consument hebt volgens het recht van jouw land.'] },
        { h: 'Wijzigingen', p: ['Als deze voorwaarden veranderen, passen we de datum bovenaan aan.'] },
        { h: 'Contact', p: [`Vragen: ${mail}.`] },
      ],
    },
  },
};
