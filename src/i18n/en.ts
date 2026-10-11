import { NAME, EMAIL, OWNER } from '../site';

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

export const en = {
  lang: 'en',
  ogLocale: 'en_US',
  paths: { creators: 'creators', companies: 'companies', privacy: 'privacy', terms: 'terms' },
  skip: 'Skip to content',
  slogan: 'Make something companies can hire you for.',
  example: 'Example',
  switchTo: { label: 'Italiano', short: 'IT', aria: 'Leggi questo sito in italiano' },
  nav: { creators: 'For creators', companies: 'For companies', cta: 'Get early access', aria: 'Main', home: `${NAME} home` },

  meta: {
    home: {
      title: `${NAME}: make something companies can hire you for`,
      description:
        'Make a project with a coach that asks the right questions, keep it on your own page and get found by companies. Early access.',
    },
    creators: {
      title: `For creators · ${NAME}`,
      description:
        'Make a short project with a coach that asks the right questions, keep it on your own page and get found by companies. Free for creators. Early access.',
    },
    companies: {
      title: `For companies · ${NAME}`,
      description:
        'Post a short brief, see the projects creators have finished and contact them through the platform. Early access.',
    },
    privacy: { title: `Privacy · ${NAME}`, description: `How ${NAME} handles the email you leave on this site. No cookies, no tracking.` },
    terms: { title: `Terms · ${NAME}`, description: `Plain terms for the ${NAME} website and early-access sign-up.` },
  },

  hero: {
    chip: 'Early access',
    before: 'Make something ',
    mark: 'companies can hire you',
    after: ' for.',
    sub: 'Short projects. No experience needed. A coach that helps you make it.',
    ctaPrimary: 'Get early access',
    ctaSecondary: 'How it works',
    note: 'Free for creators. This is early access.',
  },

  cards: {
    aria: 'Example screens from the app',
    practice: {
      label: 'Practice project',
      title: 'Film a 15 second video of a drink',
      rows: [
        ['Field', 'Video'],
        ['Time', 'About 40 minutes'],
        ['Level', 'No experience needed'],
      ],
      body: 'One shot, one idea. The coach asks, you decide.',
      foot: 'Free. Nothing is public until you publish it.',
    },
    brief: {
      label: 'Brief',
      from: 'from a café',
      title: 'A 15 second video for a café',
      rows: [
        ['Field', 'Video'],
        ['Result', 'One vertical video, 15 seconds'],
        ['Timing', 'One week'],
      ],
      body: 'Show the new summer drinks. Calm and warm.',
      foot: 'Posted by a company',
    },
    coach: {
      label: 'Coach',
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
      fields: 'Video · Design',
      items: [
        { t: 'Video for a café', f: 'Video' },
        { t: 'Poster for a film night', f: 'Design' },
        { t: 'Logo for a bakery', f: 'Design' },
      ],
      foot: 'Companies see only what you publish.',
    },
  },

  how: {
    id: 'how',
    title: 'How it works in three steps',
    steps: [
      { n: '01', t: 'Make a project with a coach', d: 'The coach asks the right questions, and can draft a first version if you ask. You edit it, so the project stays yours.' },
      { n: '02', t: 'Keep it on your own page', d: 'Every finished project goes on your page. Only what you choose to publish is visible. Nothing goes public before you say so.' },
      { n: '03', t: 'Get found by companies', d: 'Companies read your projects and write to you through the platform. Your email stays private.' },
    ],
  },

  find: {
    id: 'how-found',
    title: 'How companies will find you',
    lead: 'Nothing is hidden. This is what we know today, and what we have not decided yet.',
    rows: [
      ['What companies see', 'Only the projects you choose to publish on your page.'],
      ['What is public', 'You decide. Nothing goes public before you say so.'],
      ['Who gets a project', 'A company chooses who gets a project, and pays them.'],
      ['The platform’s cut', 'Not decided yet. We will tell you before it applies.'],
    ],
    notice: 'Nobody is paying yet. This is early access.',
  },

  fields: [
    { name: 'Design', line: 'Make a poster, a logo or a page layout, then explain your choices.' },
    { name: 'Writing', line: 'Write a product text, a short story or a bio, and make it clearer with each question.' },
    { name: 'Code', line: 'Build a small web page or tool, one working step at a time.' },
    { name: 'Video', line: 'Plan, shoot and cut a short video with a real purpose.' },
    { name: 'Selling online', line: 'Set up a small shop page, write the offer and plan how to reach buyers.' },
    { name: 'Music', line: 'Make a short track or a jingle and decide who it is for.' },
    { name: 'Prompting with AI', line: 'Give an AI clear instructions and check what comes back.' },
  ],

  creatorsBlock: {
    eyebrow: 'For creators',
    title: 'Small first projects. Real ones.',
    text: 'No experience needed. Pick a short project, make it with the coach and keep it on your own page. Free for creators.',
    link: 'More for creators',
  },
  companiesBlock: {
    eyebrow: 'For companies',
    title: 'Post a short brief. See real projects.',
    text: 'Tell creators what you need in a few lines. See the projects they have finished and contact the ones you like, through the platform.',
    points: ['Post a short brief.', 'See finished projects.', 'Contact creators through the platform.'],
    link: 'More for companies',
  },

  faq: {
    title: 'Questions',
    items: [
      { q: 'Is it free for creators?', a: 'Yes. You do not pay to join, to make a project or to publish it.' },
      { q: 'Who can join?', a: 'Anyone aged 18 or older. You do not need experience.' },
      { q: 'Does the AI do my work?', a: 'Not on its own. The coach asks questions and points at what is missing. If you ask, it can draft a first version to start from. You edit it, change it and decide what to publish.' },
      { q: 'Is this a scam?', a: 'Fair question. Nothing is paid yet, no fees are charged to creators, and you decide what to publish. If anyone asks you to pay to get a project, it is not us: write to us.' },
      { q: 'How do companies contact me?', a: `Through the platform. A company sends you a message on ${NAME} and you decide whether to reply. Your email stays private.` },
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
  },

  footer: {
    contact: 'Contact',
    follow: 'Instagram',
    legal: 'Legal',
    built: 'Built in Turin, Italy. Early access.',
  },

  creatorsPage: {
    eyebrow: 'For creators',
    before: 'Make a ',
    mark: 'real',
    after: ' project.\nGet found.',
    sub: 'Make a short project with a coach that asks the right questions, and keep it on your own page. No experience needed.',
    cta: 'Get early access',
    ctaSecondary: 'Meet the coach',
    coachTitle: 'A coach that asks the right questions.',
    coachText: 'The coach is an AI. It asks the question that makes your project better. If you want a start, ask for a first version and edit it. The project stays yours.',
    doTitle: 'The coach does',
    doItems: ['Asks one question at a time.', 'Points at what is unclear or missing.', 'Drafts a first version only if you ask, marked Made with AI help.'],
    dontTitle: 'The coach does not',
    dontItems: ['Publish anything for you.', 'Decide for you.', 'Hide its help: drafts say Made with AI help.'],
    fieldsTitle: 'Seven fields, one project at a time.',
    fieldsText: 'Short projects in seven fields. Here is what you can make.',
    publishTitle: 'You choose what goes public.',
    publishSteps: [
      { t: 'Finish the project', d: 'Until it is finished, it stays private.' },
      { t: 'Publish it on your own page', d: 'Press publish when you are happy with the result.' },
      { t: 'Companies find it', d: 'Companies browse published projects by field.' },
      { t: `They contact you through ${NAME}`, d: 'The message arrives on the platform. Your email stays private and you decide whether to reply.' },
    ],
    ctaTitle: 'Start as a creator.',
    ctaText: `Leave your email. We write once, when ${NAME} opens.`,
  },

  companiesPage: {
    eyebrow: 'For companies',
    before: 'Find creators by what they’ve ',
    mark: 'made',
    after: '.',
    sub: 'Post a short brief. See the projects creators have finished and published. Contact the ones you like, through the platform.',
    cta: 'Get early access',
    ctaSecondary: 'See how it works',
    showTitle: 'What you post. What you see.',
    showText: 'Example screens. They are not real briefs or creators.',
    featuresTitle: 'What you can do',
    features: [
      { t: 'Post a short brief', d: 'A few lines are enough: what you need, which field, and what a good result looks like.' },
      { t: 'Paste your website, get a draft', d: 'Paste the link to your website and the AI drafts a brief. You edit it and decide what to post. Nothing goes live without you.' },
      { t: 'See finished projects', d: 'Look through published projects by field. You see what a creator made, not only what they say they can do.' },
      { t: 'Contact through the platform', d: `Write to the creators you like through ${NAME}. Their email stays private and they choose whether to reply.` },
    ],
    howTitle: 'How it works for companies',
    steps: [
      { n: '01', t: 'Post a short brief', d: 'A few lines on what you need and what a good result looks like.' },
      { n: '02', t: 'See projects', d: 'Creators make projects with a coach. Browse what they publish.' },
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
        ['On this site', 'No cookies, no analytics, no tracking, no ads. No requests to other websites: fonts and images come from this site.'],
      ],
      sections: [
        {
          h: 'What we collect',
          p: [
            'Only what you type in the early-access form: your email address and whether you join as a creator or a company. The form also records that you ticked the box to agree and to confirm that you are 18 or older. We collect nothing else.',
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
