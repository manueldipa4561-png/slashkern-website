import { NAME, EMAIL, OWNER } from '../site';
import type { Copy } from './en';

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

export const de: Copy = {
  lang: 'de',
  ogLocale: 'de_DE',
  paths: { creators: 'creators', companies: 'companies', privacy: 'privacy', terms: 'terms', quiz: 'quiz' },
  skip: 'Zum Inhalt springen',
  slogan: 'Von null zum Produkt.',
  example: 'Beispiel',
  langMenu: 'Sprache',
  nav: { creators: 'Für Creator', companies: 'Für Unternehmen', cta: 'Auf die Warteliste', aria: 'Hauptnavigation', home: `${NAME}, Startseite` },

  meta: {
    home: {
      title: `${NAME} · Von null zum Produkt`,
      description:
        'Von null zum Produkt. Such dir ein kurzes Projekt aus, mach es mit Slash, deinem KI-Assistenten, fertig und behalte es auf deiner eigenen Seite. Kostenlos für Creator.',
    },
    creators: {
      title: `Für Creator: mach dein erstes Projekt fertig · ${NAME}`,
      description:
        'Kurze Projekte, ein KI-Assistent und eine Seite für alles, was du fertig machst. Unternehmen sehen, was du veröffentlichst, sobald wir öffnen. Kostenlos für Creator.',
    },
    companies: {
      title: `Für Unternehmen: Creator über ihre fertigen Projekte finden · ${NAME}`,
      description:
        'Stell ein kurzes Briefing ein, stöbere durch fertige Projekte und schreib Creator auf der Plattform an. Komm auf die Warteliste.',
    },
    quiz: { title: `Welche Art Maker bist du? · ${NAME}`, description: 'Fünf Fragen, eine Minute, ohne Anmeldung. Finde heraus, wo du anfangen kannst. Deine Antworten bleiben in deinem Browser.' },
    privacy: { title: `Datenschutz · ${NAME}`, description: `So geht ${NAME} mit der E-Mail-Adresse um, die du auf dieser Website hinterlässt. Keine Cookies, kein Tracking.` },
    terms: { title: `Bedingungen · ${NAME}`, description: `Einfache Bedingungen für die ${NAME}-Website und die Anmeldung für den Early Access.` },
  },

  hero: {
    chip: 'Kostenlos für Creator',
    before: 'Von null ',
    mark: 'zum Produkt.',
    after: '',
    sub: 'Such dir ein kurzes Projekt aus, mach es mit Slash, deinem KI-Assistenten, fertig und behalte es auf deiner eigenen Seite.',
    ctaPrimary: 'Auf die Warteliste',
    ctaSecondary: 'So funktioniert’s',
  },

  cards: {
    aria: 'Beispielbildschirme aus der App',
    practice: {
      label: 'Übungsprojekt',
      title: 'Dreh ein 15-Sekunden-Video über ein Getränk',
      rows: [
        ['Kategorie', 'Kurzvideos'],
        ['Zeit', 'Etwa 40 Minuten'],
        ['Level', 'Start bei null'],
      ],
      body: 'Eine Einstellung, eine Idee. Slash fragt, du entscheidest.',
      foot: 'Kostenlos. Nichts ist öffentlich, bis du es veröffentlichst.',
    },
    brief: {
      label: 'Briefing',
      from: 'von einem Café',
      title: 'Ein 15-Sekunden-Video für ein Café',
      rows: [
        ['Kategorie', 'Kurzvideos'],
        ['Ergebnis', 'Ein Hochformat-Video, 15 Sekunden'],
        ['Zeitrahmen', 'Eine Woche'],
      ],
      body: 'Zeig die neuen Sommergetränke. Ruhig und warm.',
      foot: 'Von einem Unternehmen eingestellt',
    },
    coach: {
      label: 'KI-Assistent',
      you: 'Ich habe die neuen Getränke des Cafés gefilmt.',
      question: 'Was soll jemand, der das Café nicht kennt, in den ersten drei Sekunden fühlen?',
      reply: 'Ruhig und warm.',
      action: 'Mit KI eine erste Version machen',
      draftLabel: 'Entwurf',
      draftChip: 'Mit KI-Hilfe erstellt',
      draft: 'Starte beim Becher, nicht beim Schild. Dampf, ein langsames Eingießen, kein Voiceover. Letztes Bild: der Name des Cafés.',
      draftNote: 'Du kannst ihn bearbeiten. Das Projekt bleibt deins.',
      mic: 'Sprich statt zu tippen: Tipp auf das Mikrofon.',
    },
    page: {
      label: 'Deine Seite',
      name: 'Dein Name',
      fields: 'Kurzvideos · Poster und Logos',
      items: [
        { t: 'Video für ein Café', f: 'Kurzvideos' },
        { t: 'Poster für einen Filmabend', f: 'Poster und Logos' },
        { t: 'Logo für eine Bäckerei', f: 'Poster und Logos' },
      ],
      foot: 'Unternehmen sehen nur, was du veröffentlichst.',
    },
  },

  catch: {
    title: 'Jedes Portfolio beginnt mit *einem Projekt*.',
    text: `${NAME} gibt dir das Projekt, Slash als Hilfe zum Fertigmachen und eine Seite, auf der es bleibt.`,
  },

  examples: {
    title: 'Ein erstes Projekt kann *so aussehen*.',
    lead: 'Acht Beispiele, eins für jede Art von Projekt. Spiel den Clip ab, starte den Timer, hör dir den Jingle an. Die Kunden sind erfunden, und alles, was eine KI gemacht hat, ist gekennzeichnet.',
    mine: 'Mach dein eigenes',
    tags: { ai: 'Mit KI gemacht', code: 'Läuft wirklich', answer: 'Die Antwort hat die KI geschrieben' },
    nojs: 'Dieses Beispiel braucht JavaScript.',
    gallery: {
      video: { field: 'Kurzvideos', t: 'Sommergetränke, 5 Sekunden', for: 'Erfundener Kunde: Bar Ficus', cap: 'Sommergetränke', len: '0:05', alt: 'Video: ein hohes Glas Eiswasser mit Minze und einer Orangenscheibe auf einem Café-Tisch in der Abendsonne.' },
      poster: { field: 'Poster und Logos', t: 'Poster für einen Filmabend', for: 'Erfundener Kunde: Cinema Orsa', alt: 'Ein blaues Poster mit der Aufschrift FILMABEND und einem gelben Mond über einer Skyline aus Dächern. Freitag, 21:00 Uhr, auf dem Dach, Cinema Orsa.' },
      timer: { field: 'Websites und kleine Tools', t: 'Ein Lern-Timer', for: 'Erfundenes Briefing: Sofias Prüfungswoche', modes: ['Lernen · 25 Min.', 'Pause · 5 Min.'], group: 'Länge', start: 'Starten', pause: 'Pause', resume: 'Weiter', reset: 'Zurücksetzen', done: 'Die Zeit ist um. Mach eine Pause.' },
      listing: { field: 'Produktanzeigen', t: 'Anzeige für eine handgemachte Kerze', for: 'Erfundener Kunde: Cera Cera', title: 'Kerze Zeder & Rauch', points: ['Von Hand gegossenes Sojawachs', 'Brennt etwa 40 Stunden', 'In kleinen Chargen gemacht'], alt: 'Eine Kerze in einem Glas aus rauchigem Bernstein mit Holzdocht, vor fliederfarbenem Hintergrund.' },
      post: { field: 'Posts und Bildunterschriften', t: 'Post für einen Pflanzenladen', for: 'Erfundener Kunde: Sunny Plants', handle: 'sunnyplants', caption: 'Samstag: Bring eine traurige Pflanze mit, geh mit einer glücklichen nach Hause. Wir topfen den ganzen Tag um.', alt: 'Eine grüne Blattpflanze in einem Terrakotta-Topf auf einem Holzhocker, vor einer rosa Wand.' },
      jingle: { field: 'Musik und Sound', t: 'Jingle für eine Fahrradwerkstatt', for: 'Erfundener Kunde: Pedal Pals', play: 'Jingle abspielen', pause: 'Jingle pausieren', seek: 'Position im Jingle', hook: '„Pedal Pals, Pedal Pals!“', note: 'Auf Englisch gesungen.' },
      logo: { field: 'Poster und Logos', t: 'Logo für eine Bäckerei', for: 'Erfundener Kunde: Forno Gufo', alt: 'Ein Logo: ein marineblaues Eulengesicht aus einem Laib Brot, mit zwei Weizenähren als Augenbrauen, auf Gelb. Darunter: forno gufo.' },
      prompt: {
        field: 'KI-Prompts', t: 'Ein Prompt für einen Lernplan', for: 'Erfundenes Briefing: Sofias Prüfungswoche', promptLabel: 'Prompt', answerLabel: 'KI',
        prompt: 'Mach mir einen Lernplan für diese Woche. Ich habe am Freitag eine Mathe-Prüfung und muss am Mittwoch einen Geschichts-Aufsatz abgeben. Ich kann täglich 90 Minuten lernen. Eine Zeile pro Tag.',
        answer: ['Mo: Matheaufgaben, 45 Min., dann Geschichte lesen, 45 Min.', 'Di: Aufsatz gliedern, 60 Min., dann Matheformeln, 30 Min.', 'Mi: Aufsatz fertig schreiben, 60 Min., und abgeben.', 'Do: eine alte Mathe-Prüfung, 90 Min.', 'Fr: Mathe wiederholen, 30 Min. Dann die Prüfung. Ausruhen.'],
      },
    },
    items: {
      video: { t: 'Sommergetränke, 5 Sekunden', cat: 'Kurzvideos', lines: ['Sommergetränke', '0:05'] },
      poster: { t: 'Poster für einen Filmabend', cat: 'Poster und Logos', lines: ['Film', 'abend', 'FR · 21:00 · DACH'] },
      web: { t: 'Ein Lern-Timer', cat: 'Websites und kleine Tools', lines: ['Lern-Timer', 'Starten'] },
      listing: { t: 'Anzeige für eine handgemachte Kerze', cat: 'Produktanzeigen', lines: ['Kerze Zeder & Rauch', 'Von Hand gegossenes Sojawachs', 'Brennt etwa 40 Stunden', 'In kleinen Chargen gemacht'] },
      post: { t: 'Post für einen Pflanzenladen', cat: 'Posts und Bildunterschriften', lines: ['pflanzenladen', 'Samstag: Bring eine traurige Pflanze mit,', 'geh mit einer glücklichen nach Hause.', 'Wir topfen den ganzen Tag um.'] },
      music: { t: 'Jingle für eine Fahrradwerkstatt', cat: 'Musik und Sound', lines: ['Fahrrad-Jingle', '0:20'] },
      logo: { t: 'Logo für eine Bäckerei', cat: 'Poster und Logos', lines: ['gufo', 'BÄCKEREI'] },
      prompt: { t: 'Ein Prompt für einen Lernplan', cat: 'KI-Prompts', lines: ['Schreib einen Plan in drei Zeilen', 'für meine Lernwoche,', 'eine Zeile pro Tag.', 'Mo: Mathe, 40 Minuten', 'Di: Geschichte, 30 Minuten', 'Mi: Pause, dann Wiederholung'] },
    },
    people: {
      Sanne: { cats: 'Kurzvideos · Posts und Bildunterschriften', bio: 'Ich lasse kleine Dinge ruhig aussehen.' },
      Elin: { cats: 'Poster und Logos', bio: 'Poster, Logos und eine sehr gute Schrift.' },
      Mats: { cats: 'Websites und kleine Tools · KI-Prompts', bio: 'Kleine Tools, die eine Sache richtig gut machen.' },
    },
    profile: { label: 'Beispielseite', msg: `Nachricht auf ${NAME}`, next: 'Dein nächstes Projekt' },
  },

  demo: {
    note: 'Die App beim Öffnen.',
    alt: 'Die slashkern-App öffnet sich: Slash, der Zeiger mit Augen, sieht sich um und bleibt neben dem Namen stehen.',
    play: 'Video abspielen',
    pause: 'Video pausieren',
  },

  quiz: {
    nav: 'Quiz',
    eyebrow: 'Quiz in einer Minute',
    title: 'Welche Art *Maker* bist du?',
    lead: 'Fünf Fragen, ohne Anmeldung. Ein spielerischer Tipp, wo du anfangen kannst, kein Test. Deine Antworten bleiben in deinem Browser.',
    start: 'Quiz starten',
    noscript: 'Das Quiz braucht JavaScript. Du kannst dich trotzdem unten auf die Warteliste setzen.',
    progress: 'Frage {n} von {total}',
    friend: 'Bei einem Freund oder einer Freundin kam „{name}“ raus. Und bei dir?',
    youAre: 'Du bist',
    cardTop: 'Welche Art Maker bist du?',
    fun: 'Ein Spiel, kein Test.',
    share: 'Mein Ergebnis teilen',
    saved: 'Bild gespeichert',
    copy: 'Link kopieren',
    copied: 'Link kopiert',
    again: 'Nochmal machen',
    join: 'Auf die Warteliste',
    shareText: `Ich bin {name} auf ${NAME}. Welche Art Maker bist du?`,
    firstLabel: 'Dein erstes Projekt',
    also: 'Auch in deinem Mix',
    // Jede Antwort ist ein echtes Projekt der App: [Text, Typ, Index des Projekts im Bereich der App]. Sieben Typen pro Frage, kein Projekt wiederholt sich.
    questions: [
      { q: 'Der kleine Laden von Freunden braucht Hilfe. Du bietest an:', a: [['Den langsamen Clip auf die besten Sekunden kürzen.', 'video', 0], ['Einen Sticker für die Ladentür entwerfen.', 'poster', 1], ['Die Bio so umschreiben, dass sie nach ihnen klingt.', 'posts', 3], ['Den kaputten Kaufen-Button reparieren.', 'web', 0], ['Die Anzeige umschreiben, auf die niemand antwortet.', 'listing', 0], ['Die Musik für ihr Video aussuchen.', 'music', 1], ['Die KI ihren Post schreiben lassen, mit echten Fakten.', 'prompt', 0]] },
      { q: 'Dein Gruppenchat braucht dich. Du…', a: [['Rettest die Party-Playlist.', 'music', 0], ['Lässt die KI das Geburtstagsessen planen.', 'prompt', 2], ['Drehst einen 10-Sekunden-Streich über den verschwundenen Lautsprecher.', 'video', 1], ['Suchst 6 Bilder für das neue Zimmer einer Freundin aus.', 'poster', 2], ['Schreibst die Geburtstagsnachricht auf drei Arten.', 'posts', 2], ['Findest das Schlupfloch in der Regel der Gruppe.', 'web', 2], ['Verkaufst deine alte Jacke, ohne den Preis zu senken.', 'listing', 2]] },
      { q: 'Online ist etwas kaputt. Was reparierst du zuerst?', a: [['Ein unhöflicher Kommentar, der eine ruhige Antwort braucht.', 'posts', 4], ['Ein Rabatt, der alles teurer macht.', 'web', 3], ['Ein Käufer, der nach „Noch zu haben?“ verstummt ist.', 'listing', 5], ['Ein Playlist-Name, den niemand antippt.', 'music', 3], ['Eine KI, die sich Antworten ausdenkt.', 'prompt', 3], ['Untertitel, zu klein zum Lesen.', 'video', 3], ['Ein dunkles Foto von tollen Sneakern.', 'poster', 3]] },
      { q: 'Was würdest du am stolzesten zeigen?', a: [['Eine Umfrage, die gezeigt hat, was die Leute kaufen würden.', 'listing', 4], ['Ein Beat, den ein Fitnessstudio in seinen Videos nutzt.', 'music', 4], ['Ein KI-Quiz, mit dem eine Freundin gelernt hat.', 'prompt', 1], ['Ein 20-Sekunden-Interview, über das alle gelacht haben.', 'video', 2], ['Das Vorschaubild mit den meisten Klicks.', 'poster', 5], ['Der Name einer neuen Eissorte.', 'posts', 5], ['Eine automatische Antwort auf „Preis?“', 'web', 4]] },
      { q: 'Such dir ein Projekt fürs Wochenende aus.', a: [['Schritte so genau, dass ein Roboter dein Basilikum gießen könnte.', 'web', 5], ['Ein 15-Sekunden-Video, das eine scharfe Soße verkauft.', 'listing', 1], ['Vier eingängige Zeilen für eine winzige Studentenküche.', 'music', 5], ['Eine KI-Tabelle, wer in der WG wem was schuldet.', 'prompt', 4], ['Sportkommentar zu einem Skate-Clip.', 'video', 4], ['Das erste Bild eines Posts, damit die Leute weiterwischen.', 'poster', 4], ['Eine Bildunterschrift, auf die Freunde antworten.', 'posts', 0]] },
    ],
    results: {
      video: { name: 'Filmemacher', line: 'Du siehst die Szene vor allen anderen.' },
      poster: { name: 'Designer', line: 'Du siehst, was nicht stimmt, und reparierst es.' },
      posts: { name: 'Texter', line: 'Du sagst es kürzer, und besser.' },
      web: { name: 'Builder', line: 'Du baust lieber die Sache, als darüber zu reden.' },
      listing: { name: 'Verkäufer', line: 'Du kannst erklären, warum etwas es wert ist.' },
      music: { name: 'Sound Maker', line: 'Du hörst, was ein Moment braucht.' },
      prompt: { name: 'Prompter', line: 'Du stellst der KI bessere Fragen als die meisten.' },
    },
    projects: {
      poster: ['Mach eine volle Story lesbar', 'Beschreib einen Sticker für eine Bar', 'Beschreib 6 Bilder für Elenas Zimmer', 'Verbessere ein dunkles Sneaker-Foto', 'Plane das erste Bild eines Posts', 'Plane 2 Thumbnails, wähl das bessere'],
      posts: ['Schreib eine Caption, auf die Freunde antworten', 'Schreib Leo eine freundliche Erinnerung', 'Schreib eine Geburtstagsnachricht auf drei Arten', 'Schreib eine Bio neu, die nichts sagt', 'Antworte auf einen unhöflichen Kommentar', 'Benenne eine neue Eissorte'],
      web: ['Reparier den Button, der grün bleibt', 'Schreib Regeln für ein Pizza-Quiz', 'Finde den Trick, reparier die Regel', 'Reparier einen Rabatt, der mehr kostet', 'Schreib eine Auto-Antwort auf „Preis?“', 'Schreib Schritte, denen ein Roboter folgen kann'],
      video: ['Behalte die besten 6 Sekunden', 'Plane einen lustigen 10-Sekunden-Clip', 'Interviewe jemanden zu einem peinlichen Moment', 'Mach aus Mini-Text lesbare Untertitel', 'Kommentiere einen Skate-Clip wie im Sport-TV', 'Antworte mit einem Video auf einen Kommentar'],
      listing: ['Schreib eine Lampen-Anzeige neu, auf die keiner antwortet', 'Plane ein 15-Sekunden-Video für eine scharfe Soße', 'Bleib bei deinem Preis und freundlich', 'Schreib die aufdringliche Nachricht eines Ladens neu', 'Schreib eine Umfrage: Sticker oder Postkarten?', 'Antworte auf „Ist das noch zu haben?“'],
      music: ['Streich einen Song, ordne den Rest', 'Wähl, wann die Musik einsetzt', 'Antworte nach einem miesen Tag', 'Benenne eine Playlist um, die keiner antippt', 'Klopf einen Beat für ein Gym', 'Schreib vier eingängige Zeilen zum Summen'],
      prompt: ['Schreib Danas Prompt mit ihren Fakten neu', 'Lass eine KI Sofia abfragen', 'Plan Giulias Abendessen mit einem Prompt', 'Hindere eine KI daran, Antworten zu erfinden', 'Mach aus chaotischen Ausgaben eine Tabelle', 'Hilf jemandem, eine Wohnung auszusuchen'],
    },
  },

  band: {
    title: 'Welche Art Maker bist du?',
    text: 'Eine Minute, fünf Fragen, ohne Anmeldung.',
    cta: 'Quiz machen',
  },

  spot: {
    title: 'Deine Idee, *Szene für Szene.*',
    text: 'Schreib eine Zeile. Slash macht daraus Einstellungen und eine Bildunterschrift. Dann setzt du es um: Dreh es mit dem Handy oder nimm ein KI-Videotool.',
    steps: ['Such dir ein kurzes Videoprojekt aus.', 'Lies das Briefing.', 'Schreib deine Idee in einer Zeile auf.', 'Hol dir die Einstellungen und die Bildunterschrift.'],
    app: 'In der App',
    out: 'Was du machen kannst',
    caps: ['Ich habe eine KI gebeten, diese Flasche in einem Wort zu beschreiben.', 'Ein Wort:', 'KALT.'],
    ai: 'Mit KI-Hilfe erstellt',
    labelApp: 'Video: wie in der App aus einer Idee Einstellungen und eine Bildunterschrift werden',
    labelOut: 'Video: ein fertiges kurzes Beispiel, gemacht mit einem KI-Videotool',
    note: 'Ein Beispielprojekt mit einer erfundenen Flasche, beschleunigt. Der Teil in der App ist vom echten Prototyp aufgenommen. Dieses Video wurde mit einem KI-Videotool gemacht.',
  },

  how: {
    id: 'so-gehts',
    title: 'Mach es. Behalte es. *Werde gefunden.*',
    steps: [
      { n: '01', t: 'Mach es mit Slash', d: 'Such dir ein kurzes Projekt aus. Slash stellt dir eine Frage nach der anderen und macht auf Wunsch eine erste Version. Du bearbeitest sie, damit sie deine bleibt.' },
      { n: '02', t: 'Behalte es auf deiner Seite', d: 'Alles, was du fertig machst, landet auf deiner eigenen Seite. Es bleibt privat, bis du es veröffentlichst.' },
      { n: '03', t: 'Werde von Unternehmen gefunden', d: `Sobald wir öffnen, können Unternehmen durchstöbern, was du veröffentlichst, und dir auf ${NAME} schreiben. Deine E-Mail bleibt privat.` },
    ],
  },

  find: {
    id: 'so-wirst-du-gefunden',
    title: 'Deine Projekte. *Du entscheidest.*',
    lead: 'Du bestimmst, was Unternehmen sehen und mit wem du sprichst.',
    rows: [
      ['Unternehmen sehen', 'Nur die Projekte, auf die du stolz bist.'],
      ['Deine E-Mail', 'Bleibt privat. Unternehmen schreiben dir auf slashkern.'],
      ['Veröffentlichen', 'Mit einem Tipp, wenn du bereit bist.'],
      ['Für Creator', 'Kostenlos beitreten, machen und veröffentlichen.'],
    ],
    notice: 'Deine Seite zeigt, was du kannst.',
  },

  fields: [
    { name: 'Kurzvideos', line: 'Plane, dreh und schneide 15 Sekunden rund um eine Idee.' },
    { name: 'Poster und Logos', line: 'Gestalte ein Poster oder ein Logo für ein kleines Unternehmen und sag, warum.' },
    { name: 'Posts und Bildunterschriften', line: 'Schreib einen Post, der nach einem Menschen klingt, nicht nach Werbung.' },
    { name: 'Websites und kleine Tools', line: 'Bau eine kleine Seite oder ein Tool, ein funktionierender Schritt nach dem anderen.' },
    { name: 'Produktanzeigen', line: 'Sag einer fremden Person genau, was sie bekommt.' },
    { name: 'Musik und Sound', line: 'Mach einen kurzen Track oder einen Jingle für jemand Bestimmtes.' },
    { name: 'KI-Prompts', line: 'Schreib klare Anweisungen für eine KI und prüfe, was zurückkommt.' },
  ],

  creatorsBlock: {
    title: 'Fang klein an. *Mach* etwas fertig.',
    text: 'Such dir ein kurzes Projekt aus, mach es mit Slash fertig und behalte es auf deiner Seite. Kostenlos für Creator.',
    link: 'Mehr für Creator',
  },
  companiesBlock: {
    title: 'Spar dir den Lebenslauf. *Sieh dir die Projekte an.*',
    text: 'Ein Lebenslauf sagt, was jemand kann. Ein fertiges Projekt zeigt es.',
    points: ['Stell ein kurzes Briefing ein.', 'Sieh dir fertige Projekte an.', 'Schreib Creator auf der Plattform an.'],
    link: 'Mehr für Unternehmen',
  },

  faq: {
    title: 'Fragen, *beantwortet.*',
    more: 'Noch eine Frage? Schreib uns:',
    items: [
      { q: 'Ist es für Creator kostenlos?', a: 'Ja. Du zahlst nie etwas, auch nicht zum Veröffentlichen.' },
      { q: 'Ich fange bei null an. Kann ich mitmachen?', a: 'Ja, genau dafür ist es gemacht. Ein Übungsprojekt dauert etwa 40 Minuten, und Slash hilft dir bei jedem Schritt.' },
      { q: 'Macht die KI das Projekt für mich?', a: 'Sie hilft, du machst es fertig. Slash stellt Fragen und zeigt dir, was fehlt. Willst du einen Vorsprung? Dann macht Slash eine erste Version, gekennzeichnet mit „Mit KI-Hilfe erstellt“. Du bearbeitest sie und entscheidest, was du veröffentlichst.' },
      { q: 'Ist das Betrug?', a: 'Nein. Creator zahlen nie, bisher bekommt noch niemand Geld ausgezahlt, und du entscheidest, was öffentlich wird. Wenn dich jemand bittet, für ein Projekt zu zahlen, sind wir das nicht. Sag uns Bescheid.' },
      { q: 'Was kann ich machen?', a: 'Sieben Arten von Projekten: Kurzvideos, Poster und Logos, Posts und Bildunterschriften, Websites und kleine Tools, Produktanzeigen, Musik und Sound und KI-Prompts.' },
      { q: 'Wie melden sich Unternehmen bei mir?', a: `Über ${NAME}. Du liest die Nachricht und entscheidest, ob du antwortest. Deine E-Mail bleibt privat.` },
      { q: 'Wer kann mitmachen, und wo?', a: 'Alle ab 18 Jahren, in ganz Europa. Die App gibt es in sechs Sprachen.' },
      { q: 'Wann geht es los?', a: `Noch kein Datum. Wir bauen noch daran. Hinterlass deine E-Mail, dann schreiben wir dir einmal, wenn es losgeht.` },
    ],
  },

  final: {
    id: 'early-access',
    title: 'Sei früh dabei.',
    text: `Eine E-Mail von uns, wenn ${NAME} öffnet. Mehr nicht.`,
  },

  form: {
    emailLabel: 'E-Mail',
    emailPlaceholder: 'du@beispiel.de',
    roleLabel: 'Ich melde mich an als',
    roleCreator: 'Creator',
    roleCompany: 'Unternehmen',
    consentBefore: `Ich bin einverstanden, dass ${NAME} meine E-Mail speichert, um mir Bescheid zu sagen, wenn es öffnet. Ich bin 18 oder älter. Siehe die `,
    consentLink: 'Datenschutzseite',
    consentAfter: '.',
    submit: 'Auf die Warteliste',
    sending: 'Wird gesendet…',
    small: `Wir nutzen deine E-Mail nur dafür. Bitte uns jederzeit, sie zu löschen: ${EMAIL}`,
    errEmailEmpty: 'Gib deine E-Mail-Adresse ein.',
    errEmailInvalid: 'Gib eine gültige E-Mail-Adresse ein, zum Beispiel name@beispiel.de.',
    errConsent: 'Setz den Haken, um weiterzumachen.',
    errSend: `Das Senden hat nicht geklappt. Versuch es noch mal oder schreib an ${EMAIL}.`,
    okTitle: 'Du bist auf der Liste.',
    okText: `Danke. Wir schreiben dir einmal, wenn ${NAME} öffnet.`,
    shareTitle: 'Bring jemanden mit.',
    shareText: 'Bring Freunde mit und werde früher eingeladen.',
    shareButton: 'Deinen Link teilen',
    shareCopy: 'Link kopieren',
    shareCopied: 'Link kopiert',
    shareMessage: `Ich habe mich gerade auf die ${NAME}-Liste gesetzt: von null zum Produkt.`,
  },

  footer: {
    contact: 'Kontakt',
    follow: 'Instagram',
    legal: 'Rechtliches',
    share: 'Diese Website teilen',
    shareCopied: 'Link kopiert',
    shareMessage: `${NAME}: von null zum Produkt.`,
  },

  creatorsPage: {
    before: 'Mach dein ',
    mark: 'erstes Projekt',
    after: ' fertig.',
    sub: 'Kurze Projekte, bei denen du bei null starten kannst. Slash hilft, du machst es fertig, und alles landet auf deiner eigenen Seite.',
    cta: 'Auf die Warteliste',
    ctaSecondary: 'Lern Slash kennen',
    slashSays: 'Hi, ich bin Slash. Ich stelle Fragen, zeige dir, was fehlt, und schreibe eine erste Version, wenn du eine willst.',
    coachTitle: 'Slash hilft. Du machst es fertig.',
    coachText: 'Slash ist eine KI. Sie fragt, für wen das Projekt ist und was du streichen würdest. Willst du einen Vorsprung? Bitte um eine erste Version und mach sie zu deiner.',
    doTitle: 'Das macht Slash',
    doItems: ['Eine Frage nach der anderen stellen.', 'Zeigen, was unklar ist oder fehlt.', 'Auf Wunsch eine erste Version schreiben, gekennzeichnet mit „Mit KI-Hilfe erstellt“.'],
    dontTitle: 'Das macht Slash nicht',
    dontItems: ['Etwas für dich veröffentlichen.', 'Deine Entscheidungen treffen.', 'Seine Hilfe verstecken.'],
    fieldsTitle: 'Sieben Dinge, die du *machen* kannst.',
    fieldsText: 'Alle kurz, alle starten bei null. Such dir eins aus.',
    pageTitle: 'Eine Seite mit *deinem Namen*.',
    pageText: 'Alles, was du fertig machst, lebt auf einer Seite, deiner KernCard. Unternehmen sehen nur, was du veröffentlichst. Das hier ist ein Beispiel.',
    publishTitle: 'Du entscheidest, was öffentlich wird.',
    publishSteps: [
      { t: 'Mach das Projekt fertig', d: 'Es bleibt privat, während du es machst.' },
      { t: 'Veröffentliche es auf deiner Seite', d: 'Drück auf „Veröffentlichen“, wenn dir das Ergebnis gefällt.' },
      { t: 'Unternehmen können es finden', d: 'Sie stöbern nach Kategorie durch veröffentlichte Projekte.' },
      { t: `Sie können dir auf ${NAME} schreiben`, d: 'Deine E-Mail bleibt privat, und du entscheidest, ob du antwortest.' },
    ],
    ctaTitle: 'Starte als Creator.',
    ctaText: `Eine E-Mail von uns, wenn ${NAME} öffnet.`,
  },

  companiesPage: {
    before: 'Finde Creator über das, was sie ',
    mark: 'gemacht',
    after: ' haben.',
    sub: 'Stell ein kurzes Briefing ein, stöbere durch fertige Projekte und schreib die Creator an, die dir gefallen.',
    cta: 'Auf die Warteliste',
    ctaSecondary: 'So funktioniert’s',
    showTitle: 'Was du einstellst. Was du siehst.',
    showText: 'Beispielbildschirme, keine echten Briefings oder Creator.',
    browseTitle: 'Stöbere durch Creator nach dem, *was sie gemacht haben*.',
    browseText: 'Jeder Creator hat eine Seite mit fertigen Projekten. Das sind Beispiele, keine echten Personen.',
    featuresTitle: 'Was du tun kannst',
    features: [
      { t: 'Ein kurzes Briefing einstellen', d: 'Ein paar Zeilen: was du brauchst, die Kategorie und wie ein gutes Ergebnis aussieht.' },
      { t: 'Website einfügen, Entwurf bekommen', d: 'Füge deinen Link ein, und die KI schreibt den Entwurf für ein Briefing. Du bearbeitest ihn, und ohne dich geht nichts online.' },
      { t: 'Fertige Projekte ansehen', d: 'Stöbere nach Kategorie. Du siehst, was jemand gemacht hat, nicht nur, was jemand zu können sagt.' },
      { t: 'Auf der Plattform schreiben', d: `Schreib über ${NAME} an Creator. Ihre E-Mail bleibt privat, und sie entscheiden, ob sie antworten.` },
    ],
    howTitle: 'So funktioniert es für Unternehmen',
    steps: [
      { n: '01', t: 'Stell ein kurzes Briefing ein', d: 'Ein paar Zeilen dazu, was du brauchst und wie ein gutes Ergebnis aussieht.' },
      { n: '02', t: 'Sieh dir Projekte an', d: 'Creator machen sie mit Slash. Du stöberst durch das, was sie veröffentlichen.' },
      { n: '03', t: 'Schreib Creator an', d: 'Über die Plattform. Ihre E-Mail bleibt privat.' },
    ],
    ctaTitle: 'Stell dein erstes Briefing ein.',
    ctaText: `Eine E-Mail von uns, wenn ${NAME} öffnet.`,
  },

  legal: {
    updated: 'Zuletzt aktualisiert',
    back: 'Zurück zur Startseite',
    privacy: {
      title: 'Datenschutz',
      intro: `Dies ist eine Übersetzung. Wenn sie von der englischen Fassung abweicht, gilt die englische Fassung. Diese Seite gilt nur für diese Website, die Early-Access-Seite. Sie sagt dir, welche personenbezogenen Daten wir verarbeiten, warum, und was du dazu tun kannst. Die ${NAME}-App bekommt eine eigene Datenschutzseite, wenn sie öffnet.`,
      summaryTitle: 'Kurz gesagt',
      summary: [
        ['Wer', `${OWNER} (Italien) betreibt ${NAME} und ist der Verantwortliche für die Daten. Kontakt: ${mail}.`],
        ['Was', 'Deine E-Mail, ob du als Creator oder als Unternehmen mitmachst, der gesetzte Haken und dein Teilen-Code (plus der Code der Person, über deren Link du gekommen bist). Netlify kann außerdem technische Daten speichern, zum Beispiel deine IP-Adresse.'],
        ['Warum', `Um dir Bescheid zu sagen, wenn ${NAME} öffnet, und um Leute früher einzuladen, die Freunde mitbringen. Kein Newsletter, keine Werbung.`],
        ['Wo', 'Netlify (USA) hostet die Website und speichert die Anmeldungen für uns. Akismet (USA) prüft sie auf Spam.'],
        ['Wie lange', `Bis wir dir sagen, dass ${NAME} offen ist, oder du uns bittest, deine Anmeldung zu löschen, und nie länger als 12 Monate ab dem Tag, an dem du dich angemeldet hast.`],
        ['Deine Rechte', `Schreib an ${mail}, um deine Daten einzusehen, zu berichtigen oder zu löschen oder um deine Einwilligung zu widerrufen.`],
        ['Cookies', 'Keine, also kein Cookie-Banner. Keine Analyse, kein Tracking, keine Werbung. Das Quiz läuft in deinem Browser und sendet nichts.'],
      ],
      sections: [
        {
          h: 'Wer verantwortlich ist',
          p: [`Verantwortlicher für die Daten ist ${OWNER}, der ${NAME} von Italien aus baut und betreibt. Bei allem, was deine Daten betrifft, schreib an ${mail}.`],
        },
        {
          h: 'Was wir erfassen',
          p: [
            'Wenn du dich für den Early Access anmeldest, sendet das Formular: deine E-Mail-Adresse; ob du als Creator oder als Unternehmen mitmachst; dass du den Haken gesetzt hast, um zuzustimmen und zu bestätigen, dass du 18 oder älter bist; die Sprache der Seite; einen zufälligen Code für deinen eigenen Teilen-Link; und, falls du den Link einer anderen Person geöffnet hast, den Code dieser Person.',
            'Netlify, das das Formular betreibt, kann mit jeder Anmeldung auch technische Daten speichern, zum Beispiel deine IP-Adresse, deinen Browsertyp und die Seite, von der aus du sie gesendet hast.',
            'Wenn du irgendeine Seite öffnest, verarbeiten die Server von Netlify außerdem technische Daten, zum Beispiel deine IP-Adresse, deinen Browser und die Adresse der Seite (einschließlich eines Teilen-Codes, falls der Link einen hat), um die Seite auszuliefern und die Website zu schützen.',
            'Sonst erfassen wir nichts. Wir fragen nicht nach deinem Namen.',
          ],
        },
        {
          h: 'Wofür wir sie nutzen, und die Rechtsgrundlage',
          p: [
            `Deine Anmeldung: um dir Bescheid zu sagen, wenn ${NAME} öffnet, und, falls Freunde sich über deinen Link anmelden, um dich früher einzuladen. Sonst nichts: kein Newsletter, keine Werbung, und wir geben deine E-Mail nie an Unternehmen auf ${NAME} weiter. Die Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die du gibst, indem du den Haken setzt.`,
            'Technische Daten und Spam-Prüfung: um die Website auszuliefern, sie sicher zu halten und gefälschte Anmeldungen von der Liste fernzuhalten. Die Rechtsgrundlage ist unser berechtigtes Interesse an einer funktionierenden, sicheren Website (Art. 6 Abs. 1 lit. f DSGVO). Wir nutzen diese Daten nicht, um dich zu verfolgen oder ein Profil von dir zu erstellen.',
            `Du entscheidest selbst, ob du uns deine E-Mail gibst. Ohne sie können wir dir nicht sagen, wann ${NAME} öffnet. Wir treffen keine automatisierten Entscheidungen über dich: Freunde mitzubringen verschiebt nur deine Einladung nach vorn.`,
          ],
        },
        {
          h: 'Wer sie bekommt',
          p: [
            'Netlify, Inc. (USA) hostet diese Website und speichert die Anmeldungen für uns. Es handelt in unserem Auftrag, als unser Auftragsverarbeiter, auf Grundlage seines Auftragsverarbeitungsvertrags (AVV). Netlify prüft jede Anmeldung mit Akismet, einem Dienst von Automattic, Inc. (USA), auf Spam. Siehe die Datenschutzseiten von <a href="https://www.netlify.com/privacy/" rel="noopener">Netlify</a> und <a href="https://automattic.com/privacy/" rel="noopener">Automattic</a>.',
            'Wir verkaufen deine Daten nicht und geben sie an niemanden sonst weiter. Wenn wir später einen Mail-Dienst nutzen, um dir zu schreiben, nennen wir ihn vorher auf dieser Seite.',
          ],
        },
        {
          h: 'Daten außerhalb der EU',
          p: ['Netlify und Akismet sitzen in den USA, deshalb werden deine Daten auch dort verarbeitet. Netlify, Inc. gibt an, am EU-U.S. Data Privacy Framework teilzunehmen, dem die Europäische Kommission ein angemessenes Schutzniveau bescheinigt hat (Beschluss vom 10. Juli 2023), und dass sein Auftragsverarbeitungsvertrag (AVV) die EU-Standardvertragsklauseln enthält. Du kannst bei uns Einzelheiten zu diesen Garantien anfragen.'],
        },
        {
          h: 'Wie lange wir sie aufbewahren',
          p: [
            `Deine Anmeldung: bis wir dir gesagt haben, dass ${NAME} offen ist, oder bis du deine Einwilligung widerrufst oder uns bittest, sie zu löschen, und nie länger als 12 Monate ab dem Tag, an dem du dich angemeldet hast. Dann löschen wir sie bei Netlify, einschließlich der Spam-Liste, und aus jeder Kopie, die wir aufbewahren.`,
            'Technische Daten: Netlify bewahrt seine Server-Logs nach seinen eigenen Aufbewahrungsregeln auf. Wir laden sie nicht herunter und bewahren sie nicht auf.',
          ],
        },
        {
          h: 'Deine Einwilligung widerrufen',
          p: [`Du kannst deine Einwilligung jederzeit widerrufen, indem du an ${mail} schreibst. Wir löschen dann deine Anmeldung (E-Mail, Rolle und Codes) und schreiben dir nicht. Wenn Freunde sich über deinen Link angemeldet haben, bleiben ihre Anmeldungen bestehen, aber dein Code führt nicht mehr zu dir. Der Widerruf macht das, was wir vorher getan haben, nicht unrechtmäßig.`],
        },
        {
          h: 'Deine Rechte',
          p: [`Nach der DSGVO kannst du von uns verlangen, dass du deine Daten einsehen und eine Kopie bekommen kannst, dass wir sie berichtigen, löschen oder ihre Nutzung einschränken, oder dass wir sie dir in einem gängigen Format schicken, damit du sie woanders hinnehmen kannst. Du kannst außerdem der Nutzung technischer Daten widersprechen. Schreib an ${mail}: Wir antworten innerhalb eines Monats. Wenn du denkst, dass wir mit deinen Daten falsch umgehen, kannst du dich bei der italienischen Datenschutzbehörde (<a href="https://www.garanteprivacy.it" rel="noopener">Garante per la protezione dei dati personali</a>) oder bei der Behörde in dem EU-Land beschweren, in dem du lebst oder tätig bist.`],
        },
        {
          h: 'Cookies',
          p: [
            'Diese Website setzt keine Cookies und nutzt keine ähnliche Technik, zum Beispiel Local Storage oder Tracking-Pixel. Sie hat keine Analyse und keine Werbung. Weil es keine Cookies gibt, gibt es auch kein Cookie-Banner.',
            'Schriften, Bilder und Videos sind Dateien auf dieser Website, deshalb schickt das Öffnen einer Seite nichts an andere Unternehmen. Nur Netlify, das die Website hostet, bekommt deine Anfrage.',
            'Das Quiz läuft in deinem Browser. Deine Antworten werden nicht gespeichert oder gesendet, und sie sind weg, wenn du die Seite neu lädst. Ein geteilter Quiz-Link zeigt nur, welches Ergebnis du bekommen hast (zum Beispiel ?r=video). Die Teilen-Buttons öffnen das Teilen-Menü deines Handys oder kopieren den Link. Wir sehen nicht, an wen du ihn schickst; wir sehen nur Anmeldungen, die über deinen Link kommen.',
            'Der Instagram-Link und der Garante-Link führen dich zu diesen Websites, wo deren eigene Regeln gelten.',
            'Falls wir jemals Cookies oder Analyse hinzufügen, aktualisieren wir zuerst diese Seite und fragen nach deiner Einwilligung, wo das Gesetz es verlangt.',
          ],
        },
        { h: 'Alter', p: [`${NAME} ist für Menschen ab 18 Jahren. Bitte nutze das Formular nicht, wenn du jünger bist. Wenn wir erfahren, dass sich jemand unter 18 angemeldet hat, löschen wir die Anmeldung.`] },
        { h: 'Änderungen', p: ['Wenn sich diese Seite ändert, aktualisieren wir das Datum oben. Wir nutzen deine Daten nicht für etwas Neues, ohne dich vorher zu fragen.'] },
      ],
    },
    terms: {
      title: 'Bedingungen',
      intro: `Dies ist eine Übersetzung. Wenn sie von der englischen Fassung abweicht, gilt die englische Fassung. Diese Bedingungen gelten für diese Website und die Anmeldung für den Early Access. Die ${NAME}-App bekommt eigene Bedingungen, wenn sie öffnet.`,
      sections: [
        { h: 'Early Access', p: [`${NAME} ist im Early Access und wird noch gebaut. Es ist noch nicht geöffnet. Diese Website, einschließlich der Beispielbildschirme, zeigt die Idee und kann sich ändern. Wir können das Projekt ändern, pausieren oder beenden.`] },
        { h: 'Wer es nutzen kann', p: ['Du musst 18 oder älter sein, um das Anmeldeformular zu nutzen.'] },
        { h: 'Keine Garantien', p: [`Wir geben keine Garantie dafür, wann ${NAME} öffnet, was es enthalten wird oder was du davon bekommst. Wir versprechen nicht, dass dich jemand kontaktiert, auswählt oder bezahlt. Diese Website wird so bereitgestellt, wie sie ist.`] },
        { h: 'Beispiele', p: ['Bildschirme und Texte, die als „Beispiel“ gekennzeichnet sind, sind Muster. Es sind keine echten Nutzer, Unternehmen, Projekte oder Ergebnisse.'] },
        { h: 'Deine E-Mail', p: ['Wenn du dich anmeldest, nutzen wir deine E-Mail nur so, wie die Datenschutzseite es beschreibt.'] },
        { h: 'Deinen Link teilen', p: ['Wer Freunde mitbringt, wird früher eingeladen. Das ist die einzige Belohnung: keine Preise und keine Zahlungen, und wir können sie ändern oder beenden.'] },
        { h: 'Recht', p: ['Für diese Bedingungen gilt italienisches Recht. Das nimmt dir keine Rechte, die du als Verbraucher nach dem Recht deines Landes hast.'] },
        { h: 'Änderungen', p: ['Wenn sich diese Bedingungen ändern, aktualisieren wir das Datum oben.'] },
        { h: 'Kontakt', p: [`Fragen: ${mail}.`] },
      ],
    },
  },
};
