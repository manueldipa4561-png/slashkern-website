import { NAME, EMAIL, OWNER } from '../site';

const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

export const en = {
  lang: 'en',
  ogLocale: 'en_US',
  paths: { creators: 'creators', companies: 'companies', privacy: 'privacy', terms: 'terms' },
  skip: 'Skip to content',
  slogan: 'Don’t guess your passion. Test it.',
  example: 'Example',
  switchTo: { label: 'Italiano', short: 'IT', aria: 'Leggi questo sito in italiano' },
  nav: { creators: 'For creators', companies: 'For companies', cta: 'Get early access', aria: 'Main', home: `${NAME} home` },

  meta: {
    home: {
      title: `${NAME}: Learn by doing. Get found.`,
      description:
        'Short guided projects in seven fields, with an AI coach that asks questions. Publish what you make and let companies find you. Early access.',
    },
    creators: {
      title: `For creators · ${NAME}`,
      description:
        'Pick a short project, make it with an AI coach that only asks questions, publish it on your own page and get found. Free for creators.',
    },
    companies: {
      title: `For companies · ${NAME}`,
      description:
        'Post a short brief, or paste your website and get a draft. Browse what creators have made and contact them through the platform.',
    },
    privacy: { title: `Privacy · ${NAME}`, description: `How ${NAME} handles the email you leave on this site. No cookies, no tracking.` },
    terms: { title: `Terms · ${NAME}`, description: `Plain terms for the ${NAME} website and early-access sign-up.` },
  },

  hero: {
    chip: 'Early access · built in Turin',
    before: 'Learn by doing. Get ',
    mark: 'found.',
    sub: 'Short guided projects in seven fields. An AI coach asks the questions and you do the work. Publish what you make and let companies find you.',
    ctaCreator: 'Start as a creator',
    ctaCompany: 'Post a brief',
    note: 'Free for creators. Early access, built in Turin, Italy.',
  },

  cards: {
    aria: 'Example screens from the app',
    draft: {
      label: 'Draft brief',
      title: 'Start from your website',
      field: 'Your website',
      url: 'your-website.example',
      action: 'Draft a brief',
      result: 'Draft ready. You edit it before it goes live.',
    },
    brief: {
      label: 'Brief',
      from: 'From a small café',
      title: 'Three Instagram posts for a new menu',
      rows: [
        ['Field', 'Design'],
        ['Result', '3 square images'],
        ['Timing', 'Two weeks'],
      ],
      body: 'We want calm, warm posts. Show the new drinks.',
      foot: 'Posted by a company',
    },
    project: {
      chip: 'Published',
      field: 'Design',
      title: 'Poster for a neighbourhood film night',
      by: 'On your own page',
      note: 'Made with the coach. Published by the creator.',
      action: `Contact through ${NAME}`,
    },
    coach: {
      label: 'Coach',
      you: 'I wrote a short intro for my portfolio page.',
      question: 'Who reads it first, and what should they do next?',
      hint: 'The coach asks. You decide.',
    },
  },

  how: {
    id: 'how',
    title: 'How it works',
    steps: [
      { n: '01', t: 'Pick a project', d: 'Choose a short guided project in one of seven fields.' },
      { n: '02', t: 'Make it with the coach', d: 'The AI coach asks questions. You answer by improving the project. It never does the work for you.' },
      { n: '03', t: 'Publish it', d: 'When it is done, you choose to publish it on your own page. Nothing goes public before you say so.' },
      { n: '04', t: 'Get found', d: `Companies browse published projects. If they like yours, they contact you through ${NAME}.` },
    ],
  },

  fields: [
    { name: 'Design', line: 'Make a poster, a logo or a page layout, then explain your choices.' },
    { name: 'Writing', line: 'Write a product text, a short story or a bio, and make it clearer with each question.' },
    { name: 'Code', line: 'Build a small web page or tool, one working step at a time.' },
    { name: 'Video', line: 'Plan, shoot and cut a short video with a real purpose.' },
    { name: 'Selling online', line: 'Set up a small shop page, write the offer and plan how to reach buyers.' },
    { name: 'Music', line: 'Make a short track or a jingle and decide who it is for.' },
    { name: 'Prompting with AI', line: 'Learn to give an AI clear instructions and check what comes back.' },
  ],

  creatorsBlock: {
    eyebrow: 'For creators',
    title: 'Real projects, not lessons.',
    text: 'Pick one of seven fields. Each project is short and guided. The coach asks one question at a time, so you improve the project yourself.',
    free: 'Free for creators.',
    link: 'More for creators',
  },
  companiesBlock: {
    eyebrow: 'For companies',
    title: 'Find creators by what they’ve made.',
    text: 'Post a short brief, or paste your website and get a draft brief to edit. Then browse published projects and contact the creators you like, through the platform.',
    points: ['Paste your website, get a draft brief.', 'Browse published projects.', 'Contact creators through the platform.'],
    link: 'More for companies',
  },

  early: {
    chip: 'Early access',
    title: 'Early access, built in Turin.',
    text: `${NAME} is not open to everyone yet. We are building it in Turin, Italy. We have no user numbers, partner logos or testimonials to show, so this page has none. The screens above are marked Example because they are examples.`,
    rows: [
      ['Creators', 'Free.'],
      ['Companies', 'Free during early access. A paid plan comes later.'],
      ['Opening', 'No date yet. Leave your email and we write once, when it opens.'],
    ],
  },

  faq: {
    title: 'Questions',
    items: [
      { q: 'Is it free?', a: `Yes, for creators. Companies use ${NAME} for free during early access. A paid plan for companies comes later, and we will say so before it starts.` },
      { q: 'Who can join?', a: 'Anyone aged 18 or older. You do not need experience in a field to start.' },
      { q: 'Does the AI do my work?', a: 'No. The coach asks questions and points at what is missing. You write, design, build and decide. That is how you learn, and why the project stays yours.' },
      { q: 'Who sees my projects?', a: 'Only what you publish. Everything else stays private to you.' },
      { q: 'How do companies contact me?', a: `Through the platform. A company sends you a message on ${NAME} and you decide whether to reply. Your email stays private.` },
      { q: 'When does it open?', a: `We have no date yet. ${NAME} is in early access and still being built in Turin. Leave your email and we write once, when it opens.` },
    ],
  },

  final: {
    id: 'early-access',
    title: 'We tell you when it opens.',
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
    title: 'Learn by doing. Get found.',
    sub: 'Pick a short project, make it with an AI coach that only asks questions, and publish it on your own page.',
    cta: 'Get early access',
    ctaSecondary: 'See the seven fields',
    fieldsTitle: 'Seven fields, one project at a time.',
    fieldsText: 'Each project is short and guided. Here is what you can make.',
    coachTitle: 'A coach that asks. Not one that does it for you.',
    coachText: 'The coach is an AI. Its role is to ask the question that makes your project better. The project stays yours.',
    doTitle: 'The coach does',
    doItems: ['Asks one question at a time.', 'Points at what is unclear or missing.', 'Asks you to try again after each change.'],
    dontTitle: 'The coach does not',
    dontItems: ['Write your project.', 'Give you a finished answer to copy.', 'Decide for you.'],
    publishTitle: 'You choose what goes public.',
    publishText: 'Only what you publish is visible to others.',
    publishSteps: [
      { t: 'Finish the project', d: 'Until it is finished, it stays private.' },
      { t: 'Publish it on your own page', d: 'Press publish when you are happy with the result.' },
      { t: 'Companies find it', d: 'Companies browse published projects by field.' },
      { t: `They contact you through ${NAME}`, d: 'The message arrives on the platform. Your email stays private and you decide whether to reply.' },
    ],
    freeTitle: 'Free for creators.',
    freeText: 'You do not pay to learn or to publish.',
    ctaTitle: 'Start as a creator.',
    ctaText: `Leave your email. We write once, when ${NAME} opens.`,
  },

  companiesPage: {
    eyebrow: 'For companies',
    title: 'Find creators by what they’ve made.',
    sub: 'Post a short brief. Browse projects that creators finished and published. Contact the ones you like, through the platform.',
    cta: 'Get early access',
    ctaSecondary: 'See how it works',
    howTitle: 'How it works for companies',
    steps: [
      { n: '01', t: 'Write a brief', d: 'Write a few lines about what you need, or paste your website.' },
      { n: '02', t: 'Edit the draft', d: 'The AI drafts a brief from your website. You edit it before it goes live.' },
      { n: '03', t: 'Browse projects', d: 'See what creators have already made and published.' },
      { n: '04', t: 'Contact the ones you like', d: `Write to them through ${NAME}. Their email stays private.` },
    ],
    featuresTitle: 'What you can do',
    features: [
      { t: 'Post a brief', d: 'Write a short brief: what you need, which field, and what a good result looks like. A few lines are enough.' },
      { t: 'Paste your website, get a draft brief', d: 'Paste the link to your website. The AI writes a draft brief from it. You edit it and decide what to post. Nothing goes live without you.' },
      { t: 'Browse projects', d: 'Look through published projects by field. You see what a creator made, not only what they say they can do.' },
      { t: 'Contact through the platform', d: `Write to the creators you like through ${NAME}. Their email stays private and they choose whether to reply.` },
    ],
    pricingTitle: 'Pricing, in short',
    pricingText: `${NAME} is free for companies during early access. A paid plan comes later. We show no price yet because there is no price to show. We will tell you before anything changes.`,
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
