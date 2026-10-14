import { NAME, EMAIL, OWNER } from '../site';
import type { Copy } from './en';

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

export const sv: Copy = {
  lang: 'sv',
  ogLocale: 'sv_SE',
  paths: { creators: 'creators', companies: 'companies', privacy: 'privacy', terms: 'terms', quiz: 'quiz' },
  skip: 'Hoppa till innehållet',
  slogan: 'Från noll till produkt.',
  example: 'Exempel',
  langMenu: 'Språk',
  nav: { creators: 'För creators', companies: 'För företag', cta: 'Skriv upp dig', aria: 'Huvudmeny', home: `${NAME} startsida` },

  meta: {
    home: {
      title: `${NAME} · Från noll till produkt`,
      description:
        'Från noll till produkt. Välj ett kort projekt, gör klart det med Slash, din AI-assistent, och spara det på din egen sida. Gratis för creators.',
    },
    creators: {
      title: `För creators: gör klart ditt första projekt · ${NAME}`,
      description:
        'Korta projekt, en AI-assistent och en sida för allt du gör klart. Företag ser det du publicerar när vi öppnar. Gratis för creators.',
    },
    companies: {
      title: `För företag: hitta creators genom det de har gjort · ${NAME}`,
      description:
        'Lägg upp en kort brief, bläddra bland färdiga projekt och skriv till creators på plattformen. Hoppa på väntelistan.',
    },
    quiz: { title: `Vilken sorts maker är du? · ${NAME}`, description: 'Fem frågor, en minut, ingen registrering. Ta reda på var du kan börja. Dina svar stannar i din webbläsare.' },
    privacy: { title: `Integritet · ${NAME}`, description: `Så hanterar ${NAME} e-postadressen du lämnar på den här webbplatsen. Inga cookies, ingen spårning.` },
    terms: { title: `Villkor · ${NAME}`, description: `Enkla villkor för webbplatsen ${NAME} och anmälan till tidig åtkomst.` },
  },

  hero: {
    chip: 'Gratis för creators',
    before: 'Från noll ',
    mark: 'till produkt.',
    after: '',
    sub: 'Välj ett kort projekt, gör klart det med Slash, din AI-assistent, och spara det på din egen sida.',
    ctaPrimary: 'Hoppa på väntelistan',
    ctaSecondary: 'Så funkar det',
  },

  cards: {
    aria: 'Exempelskärmar från appen',
    practice: {
      label: 'Övningsprojekt',
      title: 'Filma en video på 15 sekunder av en dryck',
      rows: [
        ['Kategori', 'Korta videor'],
        ['Tid', 'Ungefär 40 minuter'],
        ['Nivå', 'Börja från noll'],
      ],
      body: 'En tagning, en idé. Slash frågar, du bestämmer.',
      foot: 'Gratis. Inget är offentligt förrän du publicerar det.',
    },
    brief: {
      label: 'Brief',
      from: 'från ett kafé',
      title: 'En video på 15 sekunder till ett kafé',
      rows: [
        ['Kategori', 'Korta videor'],
        ['Resultat', 'En stående video, 15 sekunder'],
        ['Tidsram', 'En vecka'],
      ],
      body: 'Visa upp de nya sommardryckerna. Lugnt och varmt.',
      foot: 'Upplagd av ett företag',
    },
    coach: {
      label: 'AI-assistent',
      you: 'Jag har filmat kaféts nya drycker.',
      question: 'Vad ska en främling känna de första tre sekunderna?',
      reply: 'Lugn och värme.',
      action: 'Gör en första version med AI',
      draftLabel: 'Utkast',
      draftChip: 'Gjord med hjälp av AI',
      draft: 'Öppna på koppen, inte på skylten. Ånga, en långsam hällning, ingen berättarröst. Sista bilden: kaféts namn.',
      draftNote: 'Du kan redigera den. Projektet förblir ditt.',
      mic: 'Prata i stället för att skriva: tryck på mikrofonen.',
    },
    page: {
      label: 'Din sida',
      name: 'Ditt namn',
      fields: 'Korta videor · Affischer och loggor',
      items: [
        { t: 'Video till ett kafé', f: 'Korta videor' },
        { t: 'Affisch till en filmkväll', f: 'Affischer och loggor' },
        { t: 'Logga till ett bageri', f: 'Affischer och loggor' },
      ],
      foot: 'Företag ser bara det du publicerar.',
    },
  },

  catch: {
    title: 'Varje portfolio börjar med *ett projekt*.',
    text: `${NAME} ger dig projektet, Slash som hjälper dig att göra klart det och en sida att spara det på.`,
  },

  examples: {
    title: 'Ett första projekt kan *se ut så här*.',
    lead: 'Åtta exempel, ett för varje sorts projekt. Spela klippet, starta timern, lyssna på jingeln. Kunderna är påhittade, och allt som är gjort med AI är märkt.',
    mine: 'Gör ditt eget',
    tags: { ai: 'Gjord med AI', code: 'Fungerar på riktigt', answer: 'AI skrev svaret' },
    nojs: 'Det här exemplet kräver JavaScript.',
    gallery: {
      video: { field: 'Korta videor', t: 'Sommardrycker, 5 sekunder', for: 'Påhittad kund: Bar Ficus', cap: 'Sommardrycker', len: '0:05', alt: 'Video: ett högt glas isvatten med mynta och en apelsinskiva på ett kafébord i kvällssolen.' },
      poster: { field: 'Affischer och loggor', t: 'Affisch till en filmkväll', for: 'Påhittad kund: Cinema Orsa', alt: 'En blå affisch med texten FILM NIGHT och en gul måne över en siluett av hustak. Fredag, 21:00, på taket, Cinema Orsa.' },
      timer: { field: 'Webbsidor och små verktyg', t: 'En studietimer', for: 'Påhittad brief: Sofias provvecka', modes: ['Plugga · 25 min', 'Rast · 5 min'], group: 'Längd', start: 'Starta', pause: 'Pausa', resume: 'Fortsätt', reset: 'Nollställ', done: 'Tiden är slut. Ta en rast.' },
      listing: { field: 'Produktannonser', t: 'Annons för ett handgjort ljus', for: 'Påhittad kund: Cera Cera', title: 'Ljus med ceder och rök', points: ['Handgjutet sojavax', 'Brinner i ungefär 40 timmar', 'Tillverkat i små partier'], alt: 'Ett ljus i en burk av rökfärgat bärnstensglas med träveke, mot en lila bakgrund.' },
      post: { field: 'Inlägg och bildtexter', t: 'Inlägg för en växtbutik', for: 'Påhittad kund: Sunny Plants', handle: 'sunnyplants', caption: 'Lördag: ta med en ledsen växt, gå hem med en glad. Vi planterar om hela dagen.', alt: 'En grön, lummig växt i en terrakottakruka på en träpall, framför en rosa vägg.' },
      jingle: { field: 'Musik och ljud', t: 'Jingel för en cykelverkstad', for: 'Påhittad kund: Pedal Pals', play: 'Spela jingeln', pause: 'Pausa jingeln', seek: 'Position i jingeln', hook: '“Pedal Pals, Pedal Pals!”', note: 'Sjungs på engelska.' },
      logo: { field: 'Affischer och loggor', t: 'Logga till ett bageri', for: 'Påhittad kund: Forno Gufo', alt: 'En logga: ett marinblått ugglehuvud format av ett bröd, med två vetestrån som ögonbryn, på gul bakgrund. Under: forno gufo.' },
      prompt: {
        field: 'AI-promptar', t: 'En prompt för en studieplan', for: 'Påhittad brief: Sofias provvecka', promptLabel: 'Prompt', answerLabel: 'AI',
        prompt: 'Gör en studieplan åt mig för den här veckan. Jag har matteprov på fredag och en historieuppsats som ska in på onsdag. Jag kan plugga 90 minuter om dagen. En rad per dag.',
        answer: ['Mån: matteövningar, 45 min, sedan historialäsning, 45 min.', 'Tis: skissa upp uppsatsen, 60 min, sedan matteformler, 30 min.', 'Ons: skriv klart uppsatsen, 60 min, och lämna in den.', 'Tors: ett gammalt matteprov, 90 min.', 'Fre: repetera matte, 30 min. Sedan provet. Vila.'],
      },
    },
    items: {
      video: { t: 'Sommardrycker, 5 sekunder', cat: 'Korta videor', lines: ['Sommardrycker', '0:05'] },
      poster: { t: 'Affisch till en filmkväll', cat: 'Affischer och loggor', lines: ['Film', 'kväll', 'FRE · 21:00 · PÅ TAKET'] },
      web: { t: 'En studietimer', cat: 'Webbsidor och små verktyg', lines: ['Studietimer', 'Starta'] },
      listing: { t: 'Annons för ett handgjort ljus', cat: 'Produktannonser', lines: ['Ljus med ceder och rök', 'Handgjutet sojavax', 'Brinner i ungefär 40 timmar', 'Tillverkat i små partier'] },
      post: { t: 'Inlägg för en växtbutik', cat: 'Inlägg och bildtexter', lines: ['växtbutik', 'Lördag: ta med en ledsen växt,', 'gå hem med en glad.', 'Vi planterar om hela dagen.'] },
      music: { t: 'Jingel för en cykelverkstad', cat: 'Musik och ljud', lines: ['Cykelverkstadens jingel', '0:20'] },
      logo: { t: 'Logga till ett bageri', cat: 'Affischer och loggor', lines: ['gufo', 'BAGERI'] },
      prompt: { t: 'En prompt för en studieplan', cat: 'AI-promptar', lines: ['Skriv en plan på tre rader', 'för min studievecka,', 'en rad per dag.', 'Mån: matte, 40 minuter', 'Tis: historia, 30 minuter', 'Ons: vila, sedan repetition'] },
    },
    people: {
      Sanne: { cats: 'Korta videor · Inlägg och bildtexter', bio: 'Jag får små saker att se lugna ut.' },
      Elin: { cats: 'Affischer och loggor', bio: 'Affischer, loggor och ett väldigt bra typsnitt.' },
      Mats: { cats: 'Webbsidor och små verktyg · AI-promptar', bio: 'Små verktyg som gör en sak, och gör den bra.' },
    },
    profile: { label: 'Exempelsida', msg: `Skriv på ${NAME}`, next: 'Ditt nästa projekt' },
  },

  demo: {
    alt: 'Appen slashkern öppnas: Slash, pekaren med ögon, tittar sig omkring och landar bredvid namnet.',
    play: 'Spela upp videon',
    pause: 'Pausa videon',
  },

  quiz: {
    nav: 'Quiz',
    eyebrow: 'Quiz på en minut',
    title: 'Vilken sorts *maker* är du?',
    lead: 'Fem frågor, ingen registrering. En rolig gissning om var du kan börja, inget test. Dina svar stannar i din webbläsare.',
    start: 'Starta quizet',
    noscript: 'Quizet kräver JavaScript. Du kan ändå hoppa på väntelistan nedan.',
    progress: 'Fråga {n} av {total}',
    friend: 'En kompis fick ”{name}”. Vilken är du?',
    youAre: 'Du är',
    cardTop: 'Vilken sorts maker är du?',
    fun: 'En rolig gissning, inget test.',
    share: 'Dela mitt resultat',
    saved: 'Bild sparad',
    copy: 'Kopiera länk',
    copied: 'Länk kopierad',
    again: 'Gör om quizet',
    join: 'Hoppa på väntelistan',
    shareText: `På ${NAME} är jag {name}. Vilken sorts maker är du?`,
    firstLabel: 'Ditt första projekt',
    also: 'Också i din mix',
    // Varje svar är ett riktigt projekt i appen: [text, typ, projektets index i appens inriktning]. Texterna är hämtade ordagrant från appen (i18n-sv.ts).
    questions: [
      { q: 'En väns lilla butik behöver hjälp. Du erbjuder dig att…', a: [['Korta ner det sega klippet till de bästa sekunderna.', 'video', 0], ['Formge ett klistermärke till dörren.', 'poster', 1], ['Skriva om bion så att den låter som dem.', 'posts', 3], ['Laga Köp-knappen som är trasig.', 'web', 0], ['Skriva om annonsen som ingen svarar på.', 'listing', 0], ['Välja musiken till deras video.', 'music', 1], ['Låta AI skriva deras inlägg, med riktiga fakta.', 'prompt', 0]] },
      { q: 'Gruppchatten behöver dig. Du…', a: [['Fixar festens spellista.', 'music', 0], ['Låter AI planera födelsedagsmiddagen.', 'prompt', 2], ['Filmar ett 10-sekunders skämt om den försvunna högtalaren.', 'video', 1], ['Väljer 6 bilder till en väns nya rum.', 'poster', 2], ['Skriver födelsedagshälsningen på tre sätt.', 'posts', 2], ['Hittar kryphålet i gruppens regel.', 'web', 2], ['Säljer din gamla jacka utan att sänka priset.', 'listing', 2]] },
      { q: 'Något på nätet är trasigt. Vad fixar du först?', a: [['En otrevlig kommentar som behöver ett lugnt svar.', 'posts', 4], ['En rabatt som gör att allt kostar mer.', 'web', 3], ['En köpare som tystnade efter ”Finns den kvar?”', 'listing', 5], ['Ett spellistnamn som ingen trycker på.', 'music', 3], ['En AI som hittar på svar.', 'prompt', 3], ['Undertexter som är för små att läsa.', 'video', 3], ['Ett mörkt foto av grymma sneakers.', 'poster', 3]] },
      { q: 'Vad skulle du vara stoltast över att visa?', a: [['En omröstning som visade vad folk skulle köpa.', 'listing', 4], ['Ett beat som ett gym använder i sina videor.', 'music', 4], ['Ett AI-quiz som hjälpte en vän att plugga.', 'prompt', 1], ['En 20-sekundersintervju som fick folk att skratta.', 'video', 2], ['Miniatyrbilden som fick flest tryck.', 'poster', 5], ['Namnet på en ny glassmak.', 'posts', 5], ['Ett automatiskt svar på ”pris?”', 'web', 4]] },
      { q: 'Välj ett projekt för den här helgen.', a: [['Steg så exakta att en robot kan vattna din basilika.', 'web', 5], ['En 15-sekundersvideo som säljer en het sås.', 'listing', 1], ['Fyra catchiga rader för ett litet studentkök.', 'music', 5], ['En AI-tabell över vem som är skyldig vad i lägenheten.', 'prompt', 4], ['Sportkommentar till ett skateklipp.', 'video', 4], ['Första bilden i ett inlägg, så att folk swipar vidare.', 'poster', 4], ['En bildtext som får vänner att svara.', 'posts', 0]] },
    ],
    results: {
      video: { name: 'Filmaren', line: 'Du ser scenen före alla andra.' },
      poster: { name: 'Designern', line: 'Du ser vad som är fel, och fixar det.' },
      posts: { name: 'Skribenten', line: 'Du säger det kortare, och bättre.' },
      web: { name: 'Byggaren', line: 'Du gör hellre saken än pratar om den.' },
      listing: { name: 'Säljaren', line: 'Du kan förklara varför något är värt det.' },
      music: { name: 'Ljudmakaren', line: 'Du hör vad ett ögonblick behöver.' },
      prompt: { name: 'Promptaren', line: 'Du ställer bättre frågor till AI än de flesta.' },
    },
    projects: {
      poster: ['Gör en plottrig story lättläst', 'Beskriv en dekal för en bar', 'Beskriv 6 bilder för Elenas rum', 'Fixa ett mörkt sneakersfoto', 'Planera första bilden i ett inlägg', 'Planera 2 thumbnails, välj vinnaren'],
      posts: ['Skriv om en bildtext så att kompisarna svarar', 'Skriv en snäll påminnelse till Leo', 'Skriv en grattishälsning på tre sätt', 'Skriv om en bio som inte säger något', 'Svara på en otrevlig kommentar', 'Namnge en ny smak'],
      web: ['Fixa knappen som förblir grön', 'Skriv regler för ett pizzaquiz', 'Hitta tricket, fixa regeln', 'Fixa en rabatt som kostar mer', 'Skriv ett autosvar på ”pris?”', 'Skriv steg som en robot kan följa'],
      video: ['Behåll de bästa 6 sekunderna', 'Planera ett roligt klipp på 10 sekunder', 'Intervjua någon om ett pinsamt ögonblick', 'Gör om pytteliten text till läsbara undertexter', 'Ge ett skateklipp sportkommentarer', 'Svara på en kommentar med en video'],
      listing: ['Skriv om en lampannons som ingen svarar på', 'Planera en video på 15 sekunder för en stark sås', 'Håll fast vid priset, var trevlig', 'Skriv om en butiks påträngande meddelande', 'Skriv en omröstning: klistermärken eller vykort?', 'Svara på ”Finns den kvar?”'],
      music: ['Stryk en låt, ordna resten', 'Välj när musiken kommer in', 'Svara på ett sms efter en tung dag', 'Byt namn på en spellista som ingen trycker på', 'Knacka fram ett beat till ett gym', 'Skriv fyra catchy rader att nynna på'],
      prompt: ['Skriv om Danas prompt med hennes fakta', 'Få en AI att förhöra Sofia', 'Planera Giulias middag med en enda prompt', 'Hindra en AI från att hitta på svar', 'Gör om röriga räkningar till en tabell', 'Hjälp en kompis att välja lägenhet'],
    },
  },

  band: {
    title: 'Vilken sorts maker är du?',
    text: 'En minut, fem frågor, ingen registrering.',
    cta: 'Gör quizet',
  },

  spot: {
    title: 'Din idé, *scen för scen.*',
    text: 'Skriv en rad. Slash gör om den till scener och en bildtext. Sedan gör du den: filma med mobilen eller använd ett AI-videoverktyg.',
    steps: ['Välj ett kort videoprojekt.', 'Läs briefen.', 'Skriv din idé på en rad.', 'Få scener och en bildtext.'],
    app: 'I appen',
    out: 'Det du kan göra',
    caps: ['Jag bad en AI beskriva den här flaskan med ett ord.', 'Ett ord:', 'KALL.'],
    ai: 'Gjord med hjälp av AI',
    labelApp: 'Video: en idé blir till scener och en bildtext i appen',
    labelOut: 'Video: ett färdigt kort exempel, gjort med ett AI-videoverktyg',
    note: 'Ett exempelprojekt med en påhittad flaska, i snabbspolning. Delen från appen är inspelad från den riktiga prototypen. Den här videon är gjord med ett AI-videoverktyg.',
  },

  how: {
    id: 'sa-funkar-det',
    title: 'Gör det. Spara det. *Bli hittad.*',
    steps: [
      { n: '01', t: 'Gör det med Slash', d: 'Välj ett kort projekt. Slash ställer en fråga i taget och gör ett första utkast om du vill ha ett. Du redigerar det, så det förblir ditt.' },
      { n: '02', t: 'Spara det på din sida', d: 'Allt du gör klart hamnar på din egen sida. Det är privat tills du publicerar.' },
      { n: '03', t: 'Bli hittad av företag', d: `När vi öppnar kan företag bläddra bland det du publicerar och skriva till dig på ${NAME}. Din e-postadress förblir privat.` },
    ],
  },

  find: {
    id: 'sa-hittas-du',
    title: 'Det du gör. *Du bestämmer.*',
    lead: 'Du väljer vad företag ser, och vem du pratar med.',
    rows: [
      ['Företag ser', 'Bara de projekt du är stolt över.'],
      ['Din e-post', 'Förblir privat. Företag skriver till dig på slashkern.'],
      ['Gå publikt', 'Ett tryck, när du är redo.'],
      ['För creators', 'Gratis att gå med, göra och publicera.'],
    ],
    notice: 'Din sida visar vad du kan.',
  },

  fields: [
    { name: 'Korta videor', line: 'Planera, filma och klipp 15 sekunder kring en idé.' },
    { name: 'Affischer och loggor', line: 'Designa en affisch eller en logga åt ett litet företag, och säg varför.' },
    { name: 'Inlägg och bildtexter', line: 'Skriv ett inlägg som låter som en människa, inte som en reklam.' },
    { name: 'Webbsidor och små verktyg', line: 'Bygg en liten sida eller ett litet verktyg, ett fungerande steg i taget.' },
    { name: 'Produktannonser', line: 'Berätta för en främling exakt vad man får.' },
    { name: 'Musik och ljud', line: 'Gör ett kort stycke eller en jingel åt någon särskild.' },
    { name: 'AI-promptar', line: 'Skriv tydliga instruktioner till en AI och kolla vad som kommer tillbaka.' },
  ],

  creatorsBlock: {
    title: 'Börja smått. *Gör klart* något.',
    text: 'Välj ett kort projekt, gör klart det med Slash och spara det på din sida. Gratis för creators.',
    link: 'Mer för creators',
  },
  companiesBlock: {
    title: 'Glöm CV:t. *Se vad de har gjort.*',
    text: 'Ett CV berättar vad någon kan. Ett färdigt projekt visar det.',
    points: ['Lägg upp en kort brief.', 'Se färdiga projekt.', 'Skriv till creators på plattformen.'],
    link: 'Mer för företag',
  },

  faq: {
    title: 'Frågor, *besvarade.*',
    more: 'Har du en annan fråga? Skriv till oss:',
    items: [
      { q: 'Är det gratis för creators?', a: 'Ja. Du betalar aldrig, inte ens för att publicera.' },
      { q: 'Jag börjar från noll. Kan jag vara med?', a: 'Ja, det är för dig. Ett övningsprojekt tar ungefär 40 minuter, och Slash hjälper dig i varje steg.' },
      { q: 'Gör AI:n projektet åt mig?', a: 'Den hjälper, du gör klart. Slash ställer frågor och pekar på det som saknas. Vill du ha en start? Då gör Slash ett första utkast, märkt Gjord med hjälp av AI. Du redigerar det och bestämmer vad som publiceras.' },
      { q: 'Är det här en bluff?', a: 'Nej. Creators betalar aldrig, inga pengar betalas ut än och du bestämmer vad som blir offentligt. Om någon ber dig betala för ett projekt är det inte vi. Säg till oss.' },
      { q: 'Vad kan jag göra?', a: 'Sju sorters projekt: korta videor, affischer och loggor, inlägg och bildtexter, webbsidor och små verktyg, produktannonser, musik och ljud, och AI-promptar.' },
      { q: 'Hur kontaktar företag mig?', a: `Via ${NAME}. Du läser meddelandet och bestämmer om du vill svara. Din e-postadress förblir privat.` },
      { q: 'Vem kan vara med, och var?', a: 'Alla som är 18 år eller äldre, i hela Europa. Appen finns på sju språk.' },
      { q: 'När öppnar det?', a: `Inget datum än. Vi bygger fortfarande. Lämna din e-postadress så skriver vi en gång, när det öppnar.` },
    ],
  },

  final: {
    id: 'early-access',
    title: 'Kom in tidigt.',
    text: `Ett mejl från oss, när ${NAME} öppnar. Det är allt.`,
  },

  form: {
    emailLabel: 'E-post',
    emailPlaceholder: 'du@exempel.se',
    roleLabel: 'Jag går med som',
    roleCreator: 'Creator',
    roleCompany: 'Företag',
    consentBefore: `Jag godkänner att ${NAME} sparar min e-postadress för att berätta för mig när det öppnar. Jag är 18 år eller äldre. Se sidan `,
    consentLink: 'Integritet',
    consentAfter: '.',
    submit: 'Hoppa på väntelistan',
    sending: 'Skickar…',
    small: `Vi använder din e-postadress bara till det här. Be oss radera den när som helst: ${EMAIL}`,
    errEmailEmpty: 'Fyll i din e-postadress.',
    errEmailInvalid: 'Fyll i en giltig e-postadress, som namn@exempel.se.',
    errConsent: 'Kryssa i rutan för att fortsätta.',
    errSend: `Det gick inte att skicka. Försök igen, eller skriv till ${EMAIL}.`,
    okTitle: 'Du står på listan.',
    okText: `Tack. Vi skriver en gång, när ${NAME} öppnar.`,
    shareTitle: 'Ta med en kompis.',
    shareText: 'Ta med kompisar, så blir du inbjuden tidigare.',
    shareButton: 'Dela din länk',
    shareCopy: 'Kopiera länk',
    shareCopied: 'Länk kopierad',
    shareMessage: `Jag gick precis med i ${NAME}-listan: från noll till produkt.`,
  },

  footer: {
    contact: 'Kontakt',
    follow: 'Instagram',
    legal: 'Juridiskt',
    share: 'Dela den här webbplatsen',
    shareCopied: 'Länk kopierad',
    shareMessage: `${NAME}: från noll till produkt.`,
  },

  creatorsPage: {
    before: 'Gör klart ditt ',
    mark: 'första projekt',
    after: '.',
    sub: 'Korta projekt du kan börja på från noll. Slash hjälper, du gör klart, och allt hamnar på din egen sida.',
    cta: 'Hoppa på väntelistan',
    ctaSecondary: 'Möt Slash',
    slashSays: 'Hej, jag är Slash. Jag ställer frågor, pekar på luckor och gör ett första utkast när du vill ha ett.',
    coachTitle: 'Slash hjälper. Du gör klart.',
    coachText: 'Slash är en AI som frågar vem projektet är till för och vad du skulle stryka. Vill du ha en start? Be om ett första utkast och gör det sedan till ditt.',
    doTitle: 'Slash gör',
    doItems: ['Ställer en fråga i taget.', 'Pekar på det som är oklart eller saknas.', 'Gör ett första utkast när du ber om det, märkt Gjord med hjälp av AI.'],
    dontTitle: 'Slash gör inte',
    dontItems: ['Publicerar något åt dig.', 'Gör dina val.', 'Döljer sin hjälp.'],
    fieldsTitle: 'Sju saker du kan *göra*.',
    fieldsText: 'Alla korta, alla går att börja på från noll. Välj en.',
    pageTitle: 'En sida med *ditt namn* på.',
    pageText: 'Allt du gör klart finns på en sida, ditt KernCard. Företag ser bara det du publicerar. Den här är ett exempel.',
    publishTitle: 'Du väljer vad som blir offentligt.',
    publishSteps: [
      { t: 'Gör klart projektet', d: 'Det är privat medan du gör det.' },
      { t: 'Publicera det på din sida', d: 'Tryck på publicera när du gillar resultatet.' },
      { t: 'Företag kan hitta det', d: 'De bläddrar bland publicerade projekt per kategori.' },
      { t: `De kan skriva till dig på ${NAME}`, d: 'Din e-postadress förblir privat, och du bestämmer om du vill svara.' },
    ],
    ctaTitle: 'Börja som creator.',
    ctaText: `Ett mejl från oss, när ${NAME} öppnar.`,
  },

  companiesPage: {
    before: 'Hitta creators genom det de har ',
    mark: 'gjort',
    after: '.',
    sub: 'Lägg upp en kort brief, bläddra bland färdiga projekt och skriv till de creators du gillar.',
    cta: 'Hoppa på väntelistan',
    ctaSecondary: 'Så funkar det',
    showTitle: 'Det du lägger upp. Det du ser.',
    showText: 'Exempelskärmar, inte riktiga briefar eller creators.',
    browseTitle: 'Bläddra bland creators efter *det de har gjort*.',
    browseText: 'Varje creator har en sida med färdiga projekt. Det här är exempel, inte riktiga personer.',
    featuresTitle: 'Det här kan du göra',
    features: [
      { t: 'Lägg upp en kort brief', d: 'Några rader: vad du behöver, kategorin och hur ett bra resultat ser ut.' },
      { t: 'Klistra in din webbplats, få ett utkast', d: 'Klistra in din länk så skriver AI:n ett utkast till en brief. Du redigerar den, och inget går live utan dig.' },
      { t: 'Se färdiga projekt', d: 'Bläddra per kategori. Du ser vad någon har gjort, inte bara vad de säger att de kan.' },
      { t: 'Skriv på plattformen', d: `Skriv till creators via ${NAME}. Deras e-postadress förblir privat, och de väljer om de vill svara.` },
    ],
    howTitle: 'Så funkar det för företag',
    steps: [
      { n: '01', t: 'Lägg upp en kort brief', d: 'Några rader om vad du behöver och hur ett bra resultat ser ut.' },
      { n: '02', t: 'Se projekt', d: 'Creators gör dem med Slash. Du bläddrar bland det de publicerar.' },
      { n: '03', t: 'Skriv till creators', d: 'Via plattformen. Deras e-postadress förblir privat.' },
    ],
    ctaTitle: 'Lägg upp din första brief.',
    ctaText: `Ett mejl från oss, när ${NAME} öppnar.`,
  },

  legal: {
    updated: 'Senast uppdaterad',
    back: 'Tillbaka till startsidan',
    privacy: {
      title: 'Integritet',
      intro: `Detta är en översättning. Om den skiljer sig från den engelska versionen gäller den engelska versionen. Den här sidan gäller bara den här webbplatsen: sidan för tidig åtkomst. Den berättar vilka personuppgifter vi hanterar, varför, och vad du kan göra åt det. Appen ${NAME} får en egen integritetssida när den öppnar.`,
      summaryTitle: 'Kort sagt',
      summary: [
        ['Vem', `${OWNER} (Italien) driver ${NAME} och är personuppgiftsansvarig. Kontakt: ${mail}.`],
        ['Vad', 'Din e-postadress, om du går med som creator eller företag, den ikryssade rutan och din delningskod (plus en väns kod om du använde deras länk). Netlify kan också spara tekniska uppgifter, som din IP-adress.'],
        ['Varför', `För att berätta när ${NAME} öppnar, och för att bjuda in dem som tar med kompisar tidigare. Inget nyhetsbrev, ingen reklam.`],
        ['Var', 'Netlify (USA) står för webbhotellet och lagrar anmälningarna åt oss. Akismet (USA) kontrollerar dem mot skräppost.'],
        ['Hur länge', `Tills vi berättar att ${NAME} är öppet eller du ber oss radera dem, och aldrig längre än 12 månader efter att du anmälde dig.`],
        ['Dina rättigheter', `Skriv till ${mail} för att se, rätta eller radera dina uppgifter, eller för att återkalla ditt samtycke.`],
        ['Cookies', 'Inga, så ingen cookiebanner. Ingen analys, ingen spårning, ingen reklam. Quizet körs i din webbläsare och skickar ingenting.'],
      ],
      sections: [
        {
          h: 'Vem som ansvarar',
          p: [`Personuppgiftsansvarig är ${OWNER}, som bygger och driver ${NAME} från Italien. För allt som rör dina uppgifter, skriv till ${mail}.`],
        },
        {
          h: 'Vad vi samlar in',
          p: [
            'När du anmäler dig till tidig åtkomst skickar formuläret: din e-postadress; om du går med som creator eller företag; att du kryssade i rutan för att godkänna och för att bekräfta att du är 18 år eller äldre; sidans språk; en slumpmässig kod för din egen delningslänk; och, om du öppnade en väns länk, den vännens kod.',
            'Netlify, som driver formuläret, kan också spara tekniska uppgifter med varje anmälan, som din IP-adress, din webbläsartyp och sidan du skickade den från.',
            'När du öppnar en sida behandlar Netlifys servrar också tekniska uppgifter, som din IP-adress, din webbläsare och sidans adress (inklusive en delningskod, om länken har en), för att leverera sidan och skydda webbplatsen.',
            'Vi samlar inte in något annat. Vi frågar inte efter ditt namn.',
          ],
        },
        {
          h: 'Varför vi använder uppgifterna, och den rättsliga grunden',
          p: [
            `Din anmälan: för att berätta när ${NAME} öppnar och, om kompisar anmäler sig via din länk, för att bjuda in dig tidigare. Inget annat: inget nyhetsbrev, ingen reklam, och vi lämnar aldrig ut din e-postadress till företag på ${NAME}. Den rättsliga grunden är ditt samtycke (GDPR artikel 6.1 a), som du ger genom att kryssa i rutan.`,
            'Tekniska uppgifter och kontroll mot skräppost: för att leverera webbplatsen, hålla den säker och hålla falska anmälningar borta från listan. Den rättsliga grunden är vårt berättigade intresse av en fungerande och säker webbplats (GDPR artikel 6.1 f). Vi använder inte de här uppgifterna för att spåra eller profilera dig.',
            `Det är ditt val att ge oss din e-postadress. Utan den kan vi inte berätta när ${NAME} öppnar. Vi fattar inga automatiserade beslut om dig: att ta med kompisar gör bara att din inbjudan kommer tidigare.`,
          ],
        },
        {
          h: 'Vem som får uppgifterna',
          p: [
            'Netlify, Inc. (USA) står för webbhotellet till den här webbplatsen och lagrar anmälningarna åt oss. Företaget agerar för vår räkning, som vårt personuppgiftsbiträde, enligt sitt personuppgiftsbiträdesavtal. Netlify kontrollerar varje anmälan mot skräppost med Akismet, en tjänst från Automattic, Inc. (USA). Se integritetssidorna hos <a href="https://www.netlify.com/privacy/" rel="noopener">Netlify</a> och <a href="https://automattic.com/privacy/" rel="noopener">Automattic</a>.',
            'Vi säljer inte dina uppgifter och lämnar inte ut dem till någon annan. Om vi senare använder en e-posttjänst för att skriva till dig, nämner vi den på den här sidan först.',
          ],
        },
        {
          h: 'Uppgifter utanför EU',
          p: ['Netlify och Akismet har sitt säte i USA, så dina uppgifter behandlas också där. Netlify, Inc. uppger att företaget deltar i EU–USA-ramverket för dataskydd (EU-U.S. Data Privacy Framework), som Europeiska kommissionen har bedömt ge ett adekvat skydd (beslut av den 10 juli 2023), och att personuppgiftsbiträdesavtalet innehåller EU:s standardavtalsklausuler. Du kan be oss om information om de här skyddsåtgärderna.'],
        },
        {
          h: 'Hur länge vi sparar uppgifterna',
          p: [
            `Din anmälan: tills vi har berättat att ${NAME} är öppet, eller tills du återkallar ditt samtycke eller ber oss radera den, och aldrig längre än 12 månader efter att du anmälde dig. Sedan raderar vi den från Netlify, inklusive skräppostlistan, och från alla kopior vi har.`,
            'Tekniska uppgifter: Netlify sparar sina serverloggar enligt sina egna regler för lagring. Vi laddar inte ner eller sparar dem.',
          ],
        },
        {
          h: 'Återkalla ditt samtycke',
          p: [`Du kan när som helst återkalla ditt samtycke genom att skriva till ${mail}. Vi raderar då din anmälan (e-post, roll och koder) och skriver inte till dig. Om kompisar anmälde sig via din länk finns deras anmälningar kvar, men din kod leder inte längre till dig. Att återkalla samtycket gör inte det vi gjorde tidigare olagligt.`],
        },
        {
          h: 'Dina rättigheter',
          p: [`Enligt GDPR kan du be oss att få se dina uppgifter och få en kopia, rätta dem, radera dem, begränsa hur vi använder dem, eller skicka dem till dig i ett vanligt format som du kan ta med dig någon annanstans. Du kan också invända mot vår användning av tekniska uppgifter. Skriv till ${mail}: vi svarar inom en månad. Om du tycker att vi hanterar dina uppgifter fel kan du klaga hos den italienska dataskyddsmyndigheten (<a href="https://www.garanteprivacy.it" rel="noopener">Garante per la protezione dei dati personali</a>) eller hos tillsynsmyndigheten i det EU-land där du bor eller är verksam.`],
        },
        {
          h: 'Cookies',
          p: [
            'Den här webbplatsen sätter inga cookies och använder ingen liknande teknik, som local storage eller spårningspixlar. Den har ingen analys och ingen reklam. Eftersom det inte finns några cookies finns det ingen cookiebanner.',
            'Typsnitt, bilder och videor är filer på den här webbplatsen, så när du öppnar en sida skickas inget till andra företag. Bara Netlify, som står för webbhotellet, får din förfrågan.',
            'Quizet körs i din webbläsare. Dina svar sparas eller skickas inte, och de är borta när du laddar om sidan. En delad quizlänk visar bara vilket resultat du fick (till exempel ?r=video). Delningsknapparna öppnar telefonens delningsmeny eller kopierar länken. Vi ser inte vem du skickar den till; vi ser bara anmälningar som kommer via din länk.',
            'Länken till Instagram och länken till Garante tar dig till de webbplatserna, där deras egna regler gäller.',
            'Om vi någon gång lägger till cookies eller analys uppdaterar vi den här sidan först och ber om ditt samtycke där lagen kräver det.',
          ],
        },
        { h: 'Ålder', p: [`${NAME} är för personer som är 18 år och äldre. Använd inte formuläret om du är yngre. Om vi får veta att någon under 18 har anmält sig raderar vi anmälan.`] },
        { h: 'Ändringar', p: ['Om den här sidan ändras uppdaterar vi datumet högst upp. Vi använder inte dina uppgifter till något nytt utan att fråga dig först.'] },
      ],
    },
    terms: {
      title: 'Villkor',
      intro: `Detta är en översättning. Om den skiljer sig från den engelska versionen gäller den engelska versionen. Dessa villkor gäller den här webbplatsen och anmälan till tidig åtkomst. Appen ${NAME} får egna villkor när den öppnar.`,
      sections: [
        { h: 'Tidig åtkomst', p: [`${NAME} är i tidig åtkomst och byggs fortfarande. Det är inte öppet än. Den här webbplatsen, inklusive exempelskärmarna, visar idén och kan ändras. Vi kan ändra, pausa eller avsluta projektet.`] },
        { h: 'Vem som kan använda den', p: ['Du måste vara 18 år eller äldre för att använda anmälningsformuläret.'] },
        { h: 'Inga garantier', p: [`Vi ger inga garantier för när ${NAME} öppnar, vad det kommer att innehålla eller vad du kommer att få ut av det. Vi lovar inte att någon kommer att kontakta, välja eller betala dig. Den här webbplatsen tillhandahålls i befintligt skick.`] },
        { h: 'Exempel', p: ['Skärmar och texter som är märkta Exempel är prov. De är inte riktiga användare, företag, projekt eller resultat.'] },
        { h: 'Din e-post', p: ['Om du anmäler dig använder vi din e-postadress bara på det sätt som sidan Integritet beskriver.'] },
        { h: 'Dela din länk', p: ['Den som tar med kompisar blir inbjuden tidigare. Det är den enda belöningen: inga priser och inga betalningar, och vi kan ändra eller avsluta den.'] },
        { h: 'Tillämplig lag', p: ['Italiensk lag gäller för dessa villkor. Det tar inte bort några rättigheter du har som konsument enligt lagen i ditt land.'] },
        { h: 'Ändringar', p: ['Om dessa villkor ändras uppdaterar vi datumet högst upp.'] },
        { h: 'Kontakt', p: [`Frågor: ${mail}.`] },
      ],
    },
  },
};
