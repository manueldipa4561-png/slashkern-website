import { NAME, EMAIL, OWNER } from '../site';

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

export const en = {
  lang: 'en',
  ogLocale: 'en_US',
  paths: { creators: 'creators', companies: 'companies', privacy: 'privacy', terms: 'terms', quiz: 'quiz' },
  skip: 'Skip to content',
  slogan: 'From zero to product.',
  example: 'Example',
  switchTo: { label: 'Italiano', short: 'IT', aria: 'Leggi questo sito in italiano' },
  nav: { creators: 'For creators', companies: 'For companies', cta: 'Join the waitlist', aria: 'Main', home: `${NAME} home` },

  meta: {
    home: {
      title: `${NAME} · From zero to product`,
      description:
        'From zero to product. Pick a short project, finish it with Slash, your AI assistant, and keep it on your own page. Free for creators.',
    },
    creators: {
      title: `For creators: finish your first project · ${NAME}`,
      description:
        'Short projects, an AI assistant and a page for everything you finish. Companies see what you publish once we open. Free for creators.',
    },
    companies: {
      title: `For companies: find creators by what they made · ${NAME}`,
      description:
        'Post a short brief, browse finished projects and message creators on the platform. Join the waitlist.',
    },
    quiz: { title: `Which kind of maker are you? · ${NAME}`, description: 'Five questions, one minute, no sign-up. Find where to start. Your answers stay in your browser.' },
    privacy: { title: `Privacy · ${NAME}`, description: `How ${NAME} handles the email you leave on this site. No cookies, no tracking.` },
    terms: { title: `Terms · ${NAME}`, description: `Plain terms for the ${NAME} website and early-access sign-up.` },
  },

  hero: {
    chip: 'Free for creators',
    before: 'From zero ',
    mark: 'to product.',
    after: '',
    sub: 'Pick a short project, finish it with Slash, your AI assistant, and keep it on your own page.',
    ctaPrimary: 'Join the waitlist',
    ctaSecondary: 'How it works',
  },

  cards: {
    aria: 'Example screens from the app',
    practice: {
      label: 'Practice project',
      title: 'Film a 15 second video of a drink',
      rows: [
        ['Category', 'Short videos'],
        ['Time', 'About 40 minutes'],
        ['Level', 'Start from zero'],
      ],
      body: 'One shot, one idea. Slash asks, you decide.',
      foot: 'Free. Nothing is public until you publish it.',
    },
    brief: {
      label: 'Brief',
      from: 'from a café',
      title: 'A 15 second video for a café',
      rows: [
        ['Category', 'Short videos'],
        ['Result', 'One vertical video, 15 seconds'],
        ['Timing', 'One week'],
      ],
      body: 'Show the new summer drinks. Calm and warm.',
      foot: 'Posted by a company',
    },
    coach: {
      label: 'AI assistant',
      you: 'I filmed the café’s new drinks.',
      question: 'What should a stranger feel in the first three seconds?',
      reply: 'Calm and warm.',
      action: 'Make a first version with AI',
      draftLabel: 'Draft',
      draftChip: 'Made with AI help',
      draft: 'Open on the cup, not the sign. Steam, a slow pour, no voice-over. Last frame: the café’s name.',
      draftNote: 'You can edit it. The project stays yours.',
      mic: 'Talk instead of typing: tap the microphone.',
    },
    page: {
      label: 'Your page',
      name: 'Your name',
      fields: 'Short videos · Posters and logos',
      items: [
        { t: 'Video for a café', f: 'Short videos' },
        { t: 'Poster for a film night', f: 'Posters and logos' },
        { t: 'Logo for a bakery', f: 'Posters and logos' },
      ],
      foot: 'Companies see only what you publish.',
    },
  },

  catch: {
    title: 'Every portfolio starts with *one project*.',
    text: `${NAME} gives you the project, Slash to help you finish it and a page to keep it on.`,
  },

  examples: {
    title: 'A first project can *look like this*.',
    lead: 'Eight examples, one per kind of project. Play the clip, start the timer, hear the jingle. The clients are made up, and every AI-made part is tagged.',
    mine: 'Make yours',
    tags: { ai: 'Made with AI', code: 'Runs for real', answer: 'AI wrote the answer' },
    nojs: 'This example needs JavaScript.',
    // Eight finished things, each real: a clip that plays, a poster, a timer that runs, a listing, a post, a jingle that plays, a logo, a prompt and its answer.
    gallery: {
      video: { field: 'Short videos', t: 'Summer drinks, 5 seconds', for: 'Made-up client: Bar Ficus', cap: 'Summer drinks', len: '0:05', alt: 'Video: a tall glass of iced water with mint and an orange slice on a café table in the evening sun.' },
      poster: { field: 'Posters and logos', t: 'Poster for a film night', for: 'Made-up client: Cinema Orsa', alt: 'A blue poster that says FILM NIGHT, with a yellow moon over a skyline of rooftops. Friday, 21:00, rooftop, Cinema Orsa.' },
      timer: { field: 'Websites and small tools', t: 'A study timer', for: 'Made-up brief: Sofia’s exam week', modes: ['Study · 25 min', 'Break · 5 min'], group: 'Length', start: 'Start', pause: 'Pause', resume: 'Resume', reset: 'Reset', done: 'Time is up. Take a break.' },
      listing: { field: 'Product listings', t: 'Listing for a handmade candle', for: 'Made-up client: Cera Cera', title: 'Cedar & smoke candle', points: ['Hand-poured soy wax', 'Burns for about 40 hours', 'Made in small batches'], alt: 'A candle in a smoked amber glass jar with a wooden wick, on a lilac background.' },
      post: { field: 'Posts and captions', t: 'Post for a plant shop', for: 'Made-up client: Sunny Plants', handle: 'sunnyplants', caption: 'Saturday: bring a sad plant, leave with a happy one. We repot all day.', alt: 'A leafy green plant in a terracotta pot on a wooden stool, in front of a pink wall.' },
      jingle: { field: 'Music and sound', t: 'Jingle for a bike repair shop', for: 'Made-up client: Pedal Pals', play: 'Play the jingle', pause: 'Pause the jingle', seek: 'Position in the jingle', hook: '“Pedal Pals, Pedal Pals!”', note: '' },
      logo: { field: 'Posters and logos', t: 'Logo for a bakery', for: 'Made-up client: Forno Gufo', alt: 'A logo: a navy owl face made from a loaf of bread, with two wheat ears as eyebrows, on yellow. Under it: forno gufo.' },
      prompt: {
        field: 'AI prompts', t: 'A prompt for a study plan', for: 'Made-up brief: Sofia’s exam week', promptLabel: 'Prompt', answerLabel: 'AI',
        prompt: 'Make me a study plan for this week. I have a maths exam on Friday and a history essay due on Wednesday. I can study 90 minutes a day. One line per day.',
        answer: ['Mon: maths exercises, 45 min, then history reading, 45 min.', 'Tue: outline the essay, 60 min, then maths formulas, 30 min.', 'Wed: finish the essay, 60 min, and hand it in.', 'Thu: one past maths paper, 90 min.', 'Fri: maths review, 30 min. Then the exam. Rest.'],
      },
    },
    items: {
      video: { t: 'Summer drinks, 5 seconds', cat: 'Short videos', lines: ['Summer drinks', '0:05'] },
      poster: { t: 'Poster for a film night', cat: 'Posters and logos', lines: ['Film', 'night', 'FRI · 21:00 · ROOFTOP'] },
      web: { t: 'A study timer', cat: 'Websites and small tools', lines: ['Study timer', 'Start'] },
      listing: { t: 'Listing for a handmade candle', cat: 'Product listings', lines: ['Cedar & smoke candle', 'Hand-poured soy wax', 'Burns for about 40 hours', 'Made in small batches'] },
      post: { t: 'Post for a plant shop', cat: 'Posts and captions', lines: ['plantshop', 'Saturday: bring a sad plant,', 'leave with a happy one.', 'We repot all day.'] },
      music: { t: 'Jingle for a bike repair shop', cat: 'Music and sound', lines: ['Bike shop jingle', '0:20'] },
      logo: { t: 'Logo for a bakery', cat: 'Posters and logos', lines: ['gufo', 'BAKERY'] },
      prompt: { t: 'A prompt for a study plan', cat: 'AI prompts', lines: ['Write a three-line plan', 'for my study week,', 'one line per day.', 'Mon: maths, 40 minutes', 'Tue: history, 30 minutes', 'Wed: rest, then review'] },
    },
    people: {
      Sanne: { cats: 'Short videos · Posts and captions', bio: 'Making small things look calm.' },
      Elin: { cats: 'Posters and logos', bio: 'Posters, logos and one very good font.' },
      Mats: { cats: 'Websites and small tools · AI prompts', bio: 'Small tools that do one thing well.' },
    },
    profile: { label: 'Example page', msg: `Message on ${NAME}`, next: 'Your next project' },
  },

  demo: {
    note: 'The app, with sample content.',
    alt: 'The app on a phone: a card for a short project and the way to your page.',
    play: 'Play video',
    pause: 'Pause video',
  },

  quiz: {
    nav: 'Quiz',
    eyebrow: 'One minute quiz',
    title: 'Which kind of *maker* are you?',
    lead: 'Five questions, no sign-up. A fun guess at where to start, not a test. Your answers stay in your browser.',
    start: 'Start the quiz',
    noscript: 'The quiz needs JavaScript. You can still join the waitlist below.',
    progress: 'Question {n} of {total}',
    friend: 'A friend got “{name}”. Which one are you?',
    youAre: 'You are',
    cardTop: 'Which kind of maker are you?',
    fun: 'A fun guess, not a test.',
    share: 'Share my result',
    saved: 'Image saved',
    copy: 'Copy link',
    copied: 'Link copied',
    again: 'Take it again',
    join: 'Join the waitlist',
    shareText: `I am {name} on ${NAME}. Which kind of maker are you?`,
    questions: [
      { q: 'It is Friday night and you have one free hour. You…', a: [['Film something small that caught your eye.', 'video'], ['Make a poster for no reason.', 'poster'], ['Write something and post it.', 'posts'], ['Tinker with a tool or a web page.', 'web']] },
      { q: 'Your friends say you are the one who…', a: [['Always has the right playlist.', 'music'], ['Asks AI the strangest questions.', 'prompt'], ['Finds the best thing to buy and explains why.', 'listing'], ['Is always filming something.', 'video']] },
      { q: 'On your phone you spend the most time…', a: [['Writing captions and messages.', 'posts'], ['Playing with sounds and edits.', 'music'], ['Trying out new apps and sites.', 'web'], ['In design and photo apps.', 'poster']] },
      { q: 'What would make you proudest?', a: [['A clever trick with AI.', 'prompt'], ['A clear text that made someone say yes.', 'listing'], ['A design people stop to look at.', 'poster'], ['A video people send to their friends.', 'video']] },
      { q: 'In a new app, you first…', a: [['Click around to see how it is made.', 'web'], ['Read the words.', 'posts'], ['Turn the sound on.', 'music'], ['Try to break the AI.', 'prompt']] },
    ],
    results: {
      video: { name: 'The Filmer', line: 'You see the scene before anyone else does.', first: 'Start with a 15 second video.' },
      poster: { name: 'The Designer', line: 'You notice what looks off, and fix it.', first: 'Start with a poster or a sticker idea.' },
      posts: { name: 'The Writer', line: 'You say it shorter, and better.', first: 'Start with one short, kind message.' },
      web: { name: 'The Builder', line: 'You would rather make the thing than talk about it.', first: 'Start with a tiny web page.' },
      listing: { name: 'The Seller', line: 'You can explain why something is worth it.', first: 'Start with a product listing.' },
      music: { name: 'The Sound Maker', line: 'You hear what a moment needs.', first: 'Start with a 10 second sound.' },
      prompt: { name: 'The Prompter', line: 'You ask AI better questions than most people.', first: 'Start with a prompt that gives a clear plan.' },
    },
  },

  band: {
    title: 'Which kind of maker are you?',
    text: 'One minute, five questions, no sign-up.',
    cta: 'Take the quiz',
  },

  spot: {
    title: 'Type the idea. *Get the spot.*',
    text: 'Type your idea into a project and get the plan and the shot list. The water bottle here is made up.',
    steps: ['Open the app.', 'Open a project.', 'Type your idea.', 'Get your spot.'],
    app: 'In the app',
    out: 'The spot',
    caps: ['I asked an AI to describe this bottle in one word.', 'One word:', 'COLD.'],
    ai: 'Made with AI help',
    labelApp: 'Video: making a product spot in the app',
    labelOut: 'Video: the finished example spot',
    note: 'Made-up product, sped up. The app run is recorded from the prototype, and the clip was made with an AI video tool. We promise no views.',
  },

  how: {
    id: 'how',
    title: 'Make it. Keep it. *Get found.*',
    steps: [
      { n: '01', t: 'Make it with Slash', d: 'Pick a short project. Slash asks one question at a time and drafts a first version if you want one. You edit it, so it stays yours.' },
      { n: '02', t: 'Keep it on your page', d: 'Everything you finish lands on your own page. It stays private until you publish.' },
      { n: '03', t: 'Get found by companies', d: `Once we open, companies can browse what you publish and message you on ${NAME}. Your email stays private.` },
    ],
  },

  find: {
    id: 'how-found',
    title: 'Your work. *Your call.*',
    lead: 'You choose what companies see, and who you talk to.',
    rows: [
      ['Companies see', 'Only the projects you are proud of.'],
      ['Your email', 'Stays private. Companies write to you on slashkern.'],
      ['Going public', 'One tap, when you are ready.'],
      ['For creators', 'Free to join, make and publish.'],
    ],
    notice: 'Your page shows what you can do.',
  },

  fields: [
    { name: 'Short videos', line: 'Plan, film and cut 15 seconds around one idea.' },
    { name: 'Posters and logos', line: 'Design a poster or a logo for a small business, and say why.' },
    { name: 'Posts and captions', line: 'Write a post that sounds like a person, not an ad.' },
    { name: 'Websites and small tools', line: 'Build a small page or tool, one working step at a time.' },
    { name: 'Product listings', line: 'Tell a stranger exactly what they get.' },
    { name: 'Music and sound', line: 'Make a short track or a jingle for someone in particular.' },
    { name: 'AI prompts', line: 'Write clear instructions for an AI and check what comes back.' },
  ],

  creatorsBlock: {
    title: 'Start small. *Finish* something.',
    text: 'Pick a short project, finish it with Slash and keep it on your page. Free for creators.',
    link: 'More for creators',
  },
  companiesBlock: {
    title: 'Skip the CV. *See the work.*',
    text: 'A CV says what someone can do. A finished project shows it.',
    points: ['Post a short brief.', 'See finished projects.', 'Message creators on the platform.'],
    link: 'More for companies',
  },

  faq: {
    title: 'Questions',
    items: [
      { q: 'Is it free for creators?', a: 'Yes. You never pay, not even to publish.' },
      { q: 'I am starting from zero. Can I join?', a: 'Yes, that is who it is for. A practice project takes about 40 minutes, and Slash helps at every step.' },
      { q: 'Does the AI do my work?', a: 'It helps, you finish. Slash asks questions and points at what is missing. Want a head start? It drafts a first version, tagged Made with AI help. You edit it and decide what to publish.' },
      { q: 'Is this a scam?', a: 'No. Creators never pay, nobody is paid out yet, and you decide what goes public. If someone asks you to pay for a project, it is not us. Tell us.' },
      { q: 'What can I make?', a: 'Seven kinds of projects: short videos, posters and logos, posts and captions, websites and small tools, product listings, music and sound, and AI prompts.' },
      { q: 'How do companies contact me?', a: `Through ${NAME}. You read the message and decide whether to reply. Your email stays private.` },
      { q: 'Who can join, and where?', a: 'Anyone aged 18 or over, across Europe. The app comes in six languages.' },
      { q: 'When does it open?', a: `No date yet. We are still building it in Turin. Leave your email and we write once, when it opens.` },
    ],
  },

  final: {
    id: 'early-access',
    title: 'Get in early.',
    text: `One email from us, when ${NAME} opens. That is all.`,
  },

  form: {
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    roleLabel: 'I am joining as',
    roleCreator: 'Creator',
    roleCompany: 'Company',
    consentBefore: `I agree that ${NAME} stores my email to tell me when it opens. I am 18 or older. See the `,
    consentLink: 'Privacy page',
    consentAfter: '.',
    submit: 'Join the waitlist',
    sending: 'Sending…',
    small: `We use your email for this only. Ask us to delete it any time: ${EMAIL}`,
    errEmailEmpty: 'Enter your email address.',
    errEmailInvalid: 'Enter a valid email address, like name@example.com.',
    errConsent: 'Tick the box to continue.',
    errSend: `Could not send. Try again, or write to ${EMAIL}.`,
    okTitle: 'You are on the list.',
    okText: `Thanks. We will write once, when ${NAME} opens.`,
    shareTitle: 'Bring a friend.',
    shareText: 'Bring friends, get invited sooner.',
    shareButton: 'Share your link',
    shareCopy: 'Copy link',
    shareCopied: 'Link copied',
    shareMessage: `I just joined the ${NAME} list: from zero to product.`,
  },

  footer: {
    contact: 'Contact',
    follow: 'Instagram',
    legal: 'Legal',
    built: 'Built in Turin, Italy.',
    share: 'Share this site',
    shareCopied: 'Link copied',
    shareMessage: `${NAME}: from zero to product.`,
  },

  creatorsPage: {
    before: 'Finish your ',
    mark: 'first project',
    after: '.',
    sub: 'Short projects you can start from zero. Slash helps, you finish, and it all goes on your own page.',
    cta: 'Join the waitlist',
    ctaSecondary: 'Meet Slash',
    slashSays: 'Hi, I am Slash. I ask questions, point at gaps and draft a first version when you want one.',
    coachTitle: 'Slash helps. You finish.',
    coachText: 'Slash is an AI. It asks who the project is for and what you would cut. Want a head start? Ask for a first version, then make it yours.',
    doTitle: 'Slash does',
    doItems: ['Asks one question at a time.', 'Points at what is unclear or missing.', 'Drafts a first version when you ask, tagged Made with AI help.'],
    dontTitle: 'Slash does not',
    dontItems: ['Publish anything for you.', 'Make your choices.', 'Hide its help.'],
    fieldsTitle: 'Seven things you can *make*.',
    fieldsText: 'All short, all start from zero. Pick one.',
    pageTitle: 'A page with *your name* on it.',
    pageText: 'Everything you finish lives on one page, your KernCard. Companies see only what you publish. This one is an example.',
    publishTitle: 'You choose what goes public.',
    publishSteps: [
      { t: 'Finish the project', d: 'It stays private while you make it.' },
      { t: 'Publish it on your page', d: 'Press publish when you like the result.' },
      { t: 'Companies can find it', d: 'They browse published projects by category.' },
      { t: `They can message you on ${NAME}`, d: 'Your email stays private, and you decide whether to reply.' },
    ],
    ctaTitle: 'Start as a creator.',
    ctaText: `One email from us, when ${NAME} opens.`,
  },

  companiesPage: {
    before: 'Find creators by what they’ve ',
    mark: 'made',
    after: '.',
    sub: 'Post a short brief, browse finished projects and message the creators you like.',
    cta: 'Join the waitlist',
    ctaSecondary: 'How it works',
    showTitle: 'What you post. What you see.',
    showText: 'Example screens, not real briefs or creators.',
    browseTitle: 'Browse creators by *what they made*.',
    browseText: 'Every creator has a page of finished projects. These are examples, not real people.',
    featuresTitle: 'What you can do',
    features: [
      { t: 'Post a short brief', d: 'A few lines: what you need, the category and what good looks like.' },
      { t: 'Paste your website, get a draft', d: 'Paste your link and the AI drafts a brief. You edit it, and nothing goes live without you.' },
      { t: 'See finished projects', d: 'Browse by category. You see what someone made, not only what they say they can do.' },
      { t: 'Message on the platform', d: `Write to creators through ${NAME}. Their email stays private, and they choose whether to reply.` },
    ],
    howTitle: 'How it works for companies',
    steps: [
      { n: '01', t: 'Post a short brief', d: 'A few lines on what you need and what good looks like.' },
      { n: '02', t: 'See projects', d: 'Creators make them with Slash. You browse what they publish.' },
      { n: '03', t: 'Message creators', d: 'Through the platform. Their email stays private.' },
    ],
    ctaTitle: 'Post your first brief.',
    ctaText: `One email from us, when ${NAME} opens.`,
  },

  legal: {
    updated: 'Last updated',
    back: 'Back to home',
    privacy: {
      title: 'Privacy',
      intro: `This page covers this website only: the early-access page. It says what personal data we handle, why, and what you can do about it. The ${NAME} app will have its own privacy page when it opens.`,
      summaryTitle: 'In short',
      summary: [
        ['Who', `${OWNER} (Italy) runs ${NAME} and is the data controller. Contact: ${mail}.`],
        ['What', 'Your email, whether you join as a creator or a company, the ticked box and your share code (plus a friend’s code if you used their link). Netlify may also save technical data, such as your IP address.'],
        ['Why', `To tell you when ${NAME} opens, and to invite people who bring friends earlier. No newsletter, no ads.`],
        ['Where', 'Netlify (USA) hosts the site and stores the sign-ups for us. Akismet (USA) checks them for spam.'],
        ['How long', `Until we tell you ${NAME} is open or you ask us to delete it, and never more than 12 months after you signed up.`],
        ['Your rights', `Write to ${mail} to see, correct or delete your data, or to withdraw your consent.`],
        ['Cookies', 'None, so no cookie banner. No analytics, no tracking, no ads. The quiz runs in your browser and sends nothing.'],
      ],
      sections: [
        {
          h: 'Who is responsible',
          p: [`The data controller is ${OWNER}, who builds and runs ${NAME} from Italy. For anything about your data, write to ${mail}.`],
        },
        {
          h: 'What we collect',
          p: [
            'When you sign up for early access, the form sends: your email address; whether you join as a creator or a company; that you ticked the box to agree and to confirm you are 18 or older; the language of the page; a random code for your own share link; and, if you opened a friend’s link, that friend’s code.',
            'Netlify, which runs the form, may also save technical data with each sign-up, such as your IP address, your browser type and the page you sent it from.',
            'When you open any page, Netlify’s servers also process technical data, such as your IP address, your browser and the page address (including a share code, if the link has one), to deliver the page and protect the site.',
            'We collect nothing else. We do not ask for your name.',
          ],
        },
        {
          h: 'Why we use it, and the legal basis',
          p: [
            `Your sign-up: to tell you when ${NAME} opens and, if friends sign up through your link, to invite you earlier. Nothing else: no newsletter, no ads, and we never give your email to companies on ${NAME}. The legal basis is your consent (GDPR Art. 6(1)(a)), which you give by ticking the box.`,
            'Technical data and spam checks: to deliver the site, keep it safe and keep fake sign-ups off the list. The legal basis is our legitimate interest in a working, safe website (GDPR Art. 6(1)(f)). We do not use this data to track or profile you.',
            `Giving us your email is your choice. Without it, we cannot tell you when ${NAME} opens. We make no automated decisions about you: bringing friends only moves your invite earlier.`,
          ],
        },
        {
          h: 'Who gets it',
          p: [
            'Netlify, Inc. (USA) hosts this site and stores the sign-ups for us. It acts on our behalf, as our processor, under its data processing agreement. Netlify checks every sign-up for spam with Akismet, a service of Automattic, Inc. (USA). See the <a href="https://www.netlify.com/privacy/" rel="noopener">Netlify</a> and <a href="https://automattic.com/privacy/" rel="noopener">Automattic</a> privacy pages.',
            'We do not sell your data or give it to anyone else. If we later use a mail service to write to you, we will name it on this page first.',
          ],
        },
        {
          h: 'Data outside the EU',
          p: ['Netlify and Akismet are based in the USA, so your data is also processed there. Netlify, Inc. says it takes part in the EU-U.S. Data Privacy Framework, which the European Commission found to give adequate protection (decision of 10 July 2023), and that its data processing agreement includes the EU Standard Contractual Clauses. You can ask us for details of these safeguards.'],
        },
        {
          h: 'How long we keep it',
          p: [
            `Your sign-up: until we have told you that ${NAME} is open, or until you withdraw your consent or ask us to delete it, and never more than 12 months after you signed up. Then we delete it from Netlify, spam list included, and from any copy we keep.`,
            'Technical data: Netlify keeps its server logs under its own retention rules. We do not download or keep them.',
          ],
        },
        {
          h: 'Withdrawing your consent',
          p: [`You can withdraw your consent at any time by writing to ${mail}. We then delete your sign-up (email, role and codes) and do not write to you. If friends signed up through your link, their sign-ups stay, but your code no longer leads to you. Withdrawing does not make what we did before unlawful.`],
        },
        {
          h: 'Your rights',
          p: [`Under the GDPR you can ask us to see your data and get a copy, correct it, delete it, limit how we use it, or send it to you in a common format to take elsewhere. You can also object to our use of technical data. Write to ${mail}: we answer within one month. If you think we handle your data wrongly, you can complain to the Italian data protection authority (<a href="https://www.garanteprivacy.it" rel="noopener">Garante per la protezione dei dati personali</a>) or to the authority in the EU country where you live or work.`],
        },
        {
          h: 'Cookies',
          p: [
            'This site sets no cookies and uses no similar technology, such as local storage or tracking pixels. It has no analytics and no ads. Because there are no cookies, there is no cookie banner.',
            'Fonts, images and videos are files on this site, so opening a page sends nothing to other companies. Only Netlify, which hosts the site, receives your request.',
            'The quiz runs in your browser. Your answers are not saved or sent, and they are gone when you reload the page. A shared quiz link only shows which result you got (for example ?r=video). Share buttons open your phone’s share menu or copy the link. We do not see who you send it to; we only see sign-ups that come through your link.',
            'The Instagram link and the Garante link take you to those websites, where their own rules apply.',
            'If we ever add cookies or analytics, we will update this page first and ask for your consent where the law requires it.',
          ],
        },
        { h: 'Age', p: [`${NAME} is for people aged 18 and over. Please do not use the form if you are younger. If we learn that someone under 18 signed up, we delete the sign-up.`] },
        { h: 'Changes', p: ['If this page changes, we update the date at the top. We will not use your data for anything new without asking you first.'] },
      ],
    },
    terms: {
      title: 'Terms',
      intro: `These terms cover this website and the early-access sign-up. The ${NAME} app will have its own terms when it opens.`,
      sections: [
        { h: 'Early access', p: [`${NAME} is in early access and still being built in Turin, Italy. It is not open yet. This site, including the example screens, shows the idea and can change. We may change, pause or stop the project.`] },
        { h: 'Who can use it', p: ['You must be 18 or older to use the sign-up form.'] },
        { h: 'No guarantees', p: [`We give no guarantee about when ${NAME} opens, what it will include, or what you will get from it. We do not promise that anyone will contact, choose or pay you. This site is provided as it is.`] },
        { h: 'Examples', p: ['Screens and texts marked Example are samples. They are not real users, companies, projects or results.'] },
        { h: 'Your email', p: ['If you sign up, we use your email only as the Privacy page describes.'] },
        { h: 'Sharing your link', p: ['People who bring friends get invited earlier. That is the only reward: no prizes and no payments, and we may change or stop it.'] },
        { h: 'Law', p: ['Italian law applies to these terms. This does not remove any rights you have as a consumer under the law of your country.'] },
        { h: 'Changes', p: ['If these terms change, we update the date at the top.'] },
        { h: 'Contact', p: [`Questions: ${mail}.`] },
      ],
    },
  },
};

export type Copy = typeof en;
