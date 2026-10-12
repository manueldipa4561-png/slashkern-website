import { NAME, EMAIL, OWNER } from '../site';

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

export const en = {
  lang: 'en',
  ogLocale: 'en_US',
  paths: { creators: 'creators', companies: 'companies', privacy: 'privacy', terms: 'terms', quiz: 'quiz' },
  skip: 'Skip to content',
  slogan: 'Make something companies can hire you for.',
  example: 'Example',
  switchTo: { label: 'Italiano', short: 'IT', aria: 'Leggi questo sito in italiano' },
  nav: { creators: 'For creators', companies: 'For companies', cta: 'Get early access', aria: 'Main', home: `${NAME} home` },

  meta: {
    home: {
      title: `${NAME}: make something companies can hire you for`,
      description:
        'Make a short project with an AI assistant that asks one question at a time. Keep it on your own page, and companies can find it. Early access.',
    },
    creators: {
      title: `For creators · ${NAME}`,
      description:
        'Make a short project with an AI assistant that asks one question at a time, keep it on your own page and let companies find it. Free for creators. Early access.',
    },
    companies: {
      title: `For companies · ${NAME}`,
      description:
        'Post a short brief, see the projects creators have finished and contact them through the platform. Early access.',
    },
    quiz: { title: `Which kind of maker are you? · ${NAME}`, description: 'A one minute quiz: five questions to find where to start. No sign-up, and your answers stay in your browser.' },
    privacy: { title: `Privacy · ${NAME}`, description: `How ${NAME} handles the email you leave on this site. No cookies, no tracking.` },
    terms: { title: `Terms · ${NAME}`, description: `Plain terms for the ${NAME} website and early-access sign-up.` },
  },

  hero: {
    chip: 'Early access',
    before: 'Make something ',
    mark: 'companies can hire you',
    after: ' for.',
    sub: 'No experience needed. An AI assistant asks the questions, you make the project, and companies can find it.',
    ctaPrimary: 'Get early access',
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
        ['Level', 'No experience needed'],
      ],
      body: 'One shot, one idea. The assistant asks, you decide.',
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
    title: 'Companies ask for a *portfolio*. You need a first project to make one.',
    text: `${NAME} gives you short projects to start with, an AI assistant to get you through them and a page to keep them on.`,
  },

  examples: {
    title: 'Projects you can finish *in an afternoon*.',
    lead: 'Eight samples of what goes on a page. The creators and briefs are made up, and the photos and the video were made with AI.',
    mine: 'Make yours',
    all: 'All',
    filter: 'Filter by category',
    items: {
      video: { t: 'Summer drinks, 5 seconds', cat: 'Short videos', lines: ['Summer drinks', '0:05'] },
      poster: { t: 'Poster for a film night', cat: 'Posters and logos', lines: ['Film', 'night', 'FRI · 21:00 · ROOFTOP'] },
      web: { t: 'A study timer', cat: 'Websites and small tools', lines: ['Study timer', 'Start'] },
      listing: { t: 'Listing for a handmade candle', cat: 'Product listings', lines: ['Cedar & smoke candle', 'Hand-poured soy wax', 'Burns for about 40 hours', 'Made in small batches'] },
      post: { t: 'Post for a plant shop', cat: 'Posts and captions', lines: ['plantshop', 'Saturday: bring a sad plant,', 'leave with a happy one.', 'We repot all day.'] },
      music: { t: 'Jingle for a bike repair shop', cat: 'Music and sound', lines: ['Bike shop jingle', '0:20'] },
      logo: { t: 'Logo for a bakery', cat: 'Posters and logos', lines: ['rye', 'BAKERY'] },
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
    note: 'The opening screen of the app.',
    alt: 'The opening screen of the app on a phone: Make something companies can hire you for.',
    play: 'Play video',
    pause: 'Pause video',
  },

  quiz: {
    nav: 'Quiz',
    eyebrow: 'One minute quiz',
    title: 'Which kind of *maker* are you?',
    lead: 'Five questions, no sign-up. A fun guess at where to start, not a test. Your answers stay in your browser.',
    start: 'Start the quiz',
    noscript: 'The quiz needs JavaScript. You can still join the early-access list below.',
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
    join: 'Join early access',
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
    text: 'A one minute quiz. Five questions, no sign-up.',
    cta: 'Take the quiz',
  },

  spot: {
    title: 'Type the idea. *Get the spot.*',
    text: 'Open the app, open a project, type your idea. You get the plan and the shot list. This example is a made-up water bottle.',
    steps: ['Open the app.', 'Open a project.', 'Type your idea.', 'Get your spot.'],
    app: 'In the app',
    out: 'The spot',
    caps: ['I asked an AI to describe this bottle in one word.', 'One word:', 'COLD.'],
    ai: 'Made with AI help',
    labelApp: 'Video: making a product spot in the app',
    labelOut: 'Video: the finished example spot',
    note: 'Example with a made-up product, sped up. The app run is recorded from the prototype and gives you the plan and the shot list. The clip was made with an AI video tool. Trends move fast, and nothing here promises reach.',
  },

  how: {
    id: 'how',
    title: 'Make it. Keep it. *Get found.*',
    steps: [
      { n: '01', t: 'Make it with an AI assistant', d: 'Pick a short project. The assistant asks one question at a time, and drafts a first version only if you ask. You edit it, so it stays yours.' },
      { n: '02', t: 'Keep it on your page', d: 'Every finished project goes on your own page. It stays private until you press publish.' },
      { n: '03', t: 'Get found by companies', d: 'Companies browse published projects and write to you through the platform. Your email stays private.' },
    ],
  },

  find: {
    id: 'how-found',
    title: 'How companies will *find you*',
    lead: 'Here is what we know today, and what we have not decided yet.',
    rows: [
      ['What companies see', 'Only the projects you choose to publish on your page.'],
      ['What is public', 'You decide. Nothing goes public before you say so.'],
      ['Who gets a project', 'A company chooses who gets a project, and pays them.'],
      ['The platform’s cut', 'Not decided yet. We will tell you before it applies.'],
    ],
    notice: 'Nobody is paying yet. This is early access.',
  },

  fields: [
    { name: 'Short videos', line: 'Plan, film and cut a 15 second video around one clear idea.' },
    { name: 'Posters and logos', line: 'Make a poster or a logo for a small business, then explain your choices.' },
    { name: 'Posts and captions', line: 'Write a post that sounds like a person, not like an ad.' },
    { name: 'Websites and small tools', line: 'Build a small page or tool, one working step at a time.' },
    { name: 'Product listings', line: 'Write a listing that tells a stranger exactly what they get.' },
    { name: 'Music and sound', line: 'Make a short track or a jingle and decide who it is for.' },
    { name: 'AI prompts', line: 'Write clear instructions for an AI, then check what comes back.' },
  ],

  creatorsBlock: {
    title: 'Start small. *Finish* something.',
    text: 'No experience needed. Pick a short project, make it with the assistant and keep it on your own page. Free for creators.',
    link: 'More for creators',
  },
  companiesBlock: {
    title: 'Skip the CV. *See the work.*',
    text: 'Tell creators what you need in a few lines. See the projects they have finished and contact the ones you like, through the platform.',
    points: ['Post a short brief.', 'See finished projects.', 'Contact creators through the platform.'],
    link: 'More for companies',
  },

  faq: {
    title: 'Questions',
    items: [
      { q: 'Is it free for creators?', a: 'Yes. You do not pay to join, to make a project or to publish it.' },
      { q: 'I have no experience. Can I join?', a: 'Yes, that is who it is for. Projects start small: a practice project takes about 40 minutes, and the assistant helps at every step.' },
      { q: 'Does the AI do my work?', a: 'Not on its own. The assistant asks questions and points at what is missing. If you ask, it can draft a first version to start from, marked Made with AI help. You edit it, change it and decide what to publish.' },
      { q: 'Is this a scam?', a: 'No. Creators are not charged anything, nothing is paid out yet, and you decide what to publish. If anyone asks you to pay to get a project, it is not us: write to us.' },
      { q: 'What can I make?', a: 'Seven kinds of projects: short videos, posters and logos, posts and captions, websites and small tools, product listings, music and sound, and AI prompts.' },
      { q: 'How do companies contact me?', a: `Through the platform. A company sends you a message on ${NAME} and you decide whether to reply. Your email stays private.` },
      { q: 'Who can join, and where?', a: 'Anyone aged 18 or older. It is made for creators across Europe and starts in English. Companies will contact you about real projects, and the rules for younger people differ from country to country.' },
      { q: 'When does it open?', a: `We have no date yet. ${NAME} is in early access and still being built in Turin. Leave your email and we write once, when it opens.` },
    ],
  },

  final: {
    id: 'early-access',
    title: 'Get in early.',
    text: `Leave your email. We write once, when ${NAME} opens. Nothing else.`,
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
    submit: 'Get early access',
    sending: 'Sending…',
    small: `We use your email for this only. Ask us to delete it any time: ${EMAIL}`,
    errEmailEmpty: 'Enter your email address.',
    errEmailInvalid: 'Enter a valid email address, like name@example.com.',
    errConsent: 'Tick the box to continue.',
    errSend: `Could not send. Try again, or write to ${EMAIL}.`,
    okTitle: 'You are on the list.',
    okText: `Thanks. We have your email and will write once, when ${NAME} opens.`,
    shareTitle: 'Bring a friend.',
    shareText: 'People who bring friends get invited earlier.',
    shareButton: 'Share your link',
    shareCopy: 'Copy link',
    shareCopied: 'Link copied',
    shareMessage: `I just joined the ${NAME} list: make something companies can hire you for.`,
  },

  footer: {
    contact: 'Contact',
    follow: 'Instagram',
    legal: 'Legal',
    built: 'Built in Turin, Italy. Early access.',
    share: 'Share this site',
    shareCopied: 'Link copied',
    shareMessage: `${NAME}: make something companies can hire you for.`,
  },

  creatorsPage: {
    before: 'Make a ',
    mark: 'real',
    after: ' project.\nGet found.',
    sub: 'Make a short project with an AI assistant, and keep it on your own page. No experience needed.',
    cta: 'Get early access',
    ctaSecondary: 'Meet the assistant',
    slashSays: 'Hi, I am Slash, your AI assistant. I ask the questions. I only draft if you ask.',
    coachTitle: 'An AI assistant that asks. You decide.',
    coachText: 'The assistant is an AI. It asks things like who the project is for and what you would cut. If you want a start, ask for a first version and edit it. The project stays yours.',
    doTitle: 'The assistant does',
    doItems: ['Asks one question at a time.', 'Points at what is unclear or missing.', 'Drafts a first version only if you ask, marked Made with AI help.'],
    dontTitle: 'The assistant does not',
    dontItems: ['Publish anything for you.', 'Decide for you.', 'Hide its help: drafts say Made with AI help.'],
    fieldsTitle: 'Seven things you can *make*.',
    fieldsText: 'Short projects, no experience needed. Pick one.',
    pageTitle: 'A page with *your name* on it.',
    pageText: 'Everything you finish goes on one page. Companies see only what you publish. This is an example page, not a real creator.',
    publishTitle: 'You choose what goes public.',
    publishSteps: [
      { t: 'Finish the project', d: 'Until it is finished, it stays private.' },
      { t: 'Publish it on your own page', d: 'Press publish when you are happy with the result.' },
      { t: 'Companies find it', d: 'Companies browse published projects by category.' },
      { t: `They contact you through ${NAME}`, d: 'The message arrives on the platform. Your email stays private and you decide whether to reply.' },
    ],
    ctaTitle: 'Start as a creator.',
    ctaText: `Leave your email. We write once, when ${NAME} opens.`,
  },

  companiesPage: {
    before: 'Find creators by what they’ve ',
    mark: 'made',
    after: '.',
    sub: 'Post a short brief, see finished projects and contact the creators you like through the platform.',
    cta: 'Get early access',
    ctaSecondary: 'See how it works',
    showTitle: 'What you post. What you see.',
    showText: 'Example screens. They are not real briefs or creators.',
    browseTitle: 'Browse creators by *what they made*.',
    browseText: 'Each creator has a page with finished projects. These are example profiles, not real people.',
    featuresTitle: 'What you can do',
    features: [
      { t: 'Post a short brief', d: 'A few lines are enough: what you need, which category, and what a good result looks like.' },
      { t: 'Paste your website, get a draft', d: 'Paste the link to your website and the AI drafts a brief. You edit it and decide what to post. Nothing goes live without you.' },
      { t: 'See finished projects', d: 'Look through published projects by category. You see what a creator made, not only what they say they can do.' },
      { t: 'Contact through the platform', d: `Write to the creators you like through ${NAME}. Their email stays private and they choose whether to reply.` },
    ],
    howTitle: 'How it works for companies',
    steps: [
      { n: '01', t: 'Post a short brief', d: 'A few lines on what you need and what a good result looks like.' },
      { n: '02', t: 'See projects', d: 'Creators make projects with an AI assistant. Browse what they publish.' },
      { n: '03', t: 'Contact creators', d: 'Write to them through the platform. Their email stays private.' },
    ],
    ctaTitle: 'Post your first brief.',
    ctaText: `Leave your email. We write once, when ${NAME} opens.`,
  },

  legal: {
    noteLabel: 'Draft',
    note: 'This page needs a lawyer’s review before launch.',
    updated: 'Last updated',
    back: 'Back to home',
    privacy: {
      title: 'Privacy',
      intro: `This page covers this website only: the early-access page. The ${NAME} app will have its own privacy page when it opens.`,
      summaryTitle: 'What we keep',
      summary: [
        ['What', 'The email address you type, and whether you join as a creator or a company.'],
        ['Why', `To tell you when ${NAME} opens. We write once, when it opens. No ads.`],
        ['Where', 'Stored by the form host (Netlify). We read the sign-ups there.'],
        ['How long', `Until we have told you that ${NAME} is open, or until you ask us to delete it. If it has not opened after 12 months, we delete it.`],
        ['Delete it', `Write to ${mail} and we delete it.`],
        ['On this site', 'No cookies, no analytics, no tracking, no ads. No requests to other websites: fonts, images and videos come from this site.'],
        ['Quiz and sharing', 'The quiz runs in your browser and sends nothing. If you join, the form adds a random code for your own share link, and the code of the friend whose link you used, if any.'],
      ],
      sections: [
        {
          h: 'What we collect',
          p: [
            'Only what you type in the early-access form: your email address and whether you join as a creator or a company. The form also records that you ticked the box to agree and to confirm that you are 18 or older. It also adds a random code for your own share link and, if you came from a friend’s link, that friend’s code. The codes are not linked to anything else. We collect nothing else.',
            'Like every website host, the form host also processes technical data, such as your IP address, to deliver the page and filter spam.',
          ],
        },
        {
          h: 'Why we use it, and the legal basis',
          p: [
            `Only to tell you when ${NAME} opens. The legal basis is your consent (GDPR Art. 6(1)(a)), which you give by ticking the box. You can withdraw it at any time by writing to ${mail}. Withdrawing does not affect what we did before.`,
          ],
        },
        {
          h: 'Who gets it',
          p: [
            'The form host (Netlify) stores the sign-ups for us and acts on our behalf. Netlify is a US company, so your data may be processed outside the EU. We do not sell your email or share it with anyone else.',
            'If we later use a mail service to write to you, we will name it on this page first.',
          ],
        },
        {
          h: 'How long we keep it',
          p: [`Until we have told you that ${NAME} is open, or until you ask us to delete it. If ${NAME} has not opened 12 months after you signed up, we delete your email.`],
        },
        {
          h: 'Your rights',
          p: [
            `You can ask to see, correct or delete your data, to limit how we use it, or to take a copy with you. Write to ${mail}. You can also complain to the Italian data protection authority (<a href="https://www.garanteprivacy.it" rel="noopener">Garante per la protezione dei dati personali</a>).`,
          ],
        },
        {
          h: 'Cookies and tracking',
          p: ['This site sets no cookies. It has no analytics, no tracking pixels and no ads. It loads nothing from other websites: the fonts are served from this site.'],
        },
        { h: 'Age', p: [`${NAME} is for people aged 18 and over. Please do not use the form if you are younger.`] },
        { h: 'Changes', p: ['If this page changes, we update the date at the top.'] },
        { h: `Who runs ${NAME}`, p: [`${NAME} is built and run by ${OWNER} (Italy), the data controller. Contact: ${mail}.`] },
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
        { h: 'Law', p: ['Italian law applies to these terms. This does not remove any rights you have as a consumer under the law of your country.'] },
        { h: 'Changes', p: ['If these terms change, we update the date at the top.'] },
        { h: 'Contact', p: [`Questions: ${mail}.`] },
      ],
    },
  },
};

export type Copy = typeof en;
