const sharedTeamLinks = {
  laia: { linkedin: 'https://www.linkedin.com/in/laia-mogas-pladevall/', photo: 'team/laia mogas.jfif' },
  noa: { linkedin: 'https://www.linkedin.com/in/noa-mediavilla/', photo: 'team/noa mediavilla.jfif' },
  arnau: { linkedin: 'https://www.linkedin.com/in/arnau-biosca-p%C3%A9rez-57254429b/', photo: 'team/arnau biosca.jfif' },
  silvia: { linkedin: 'https://www.linkedin.com/in/s%C3%ADlvia-f-688699229/', photo: 'team/silvia fabregas.jfif' },
  roberto: { linkedin: 'https://www.linkedin.com/in/roberto-nsoni/', photo: 'team/roberto nsoni.jfif' },
  pau: { linkedin: 'https://www.linkedin.com/in/paumilapuig/', photo: 'team/pau mila.jfif' },
  laura: { linkedin: 'https://www.linkedin.com/in/laurarebollocrespo', photo: 'team/laura rebollo.jpg' },
};

const translations = {
  ca: {
    meta: {
      htmlLang: 'ca',
    },
    nav: {
      about: 'Qui som?',
      goals: 'Objectius',
      projects: 'Projectes',
      team: 'Equip',
      join: 'Uneix-te!',
      languageLabel: 'Idioma',
    },
    home: {
      titlePrefix: "Associació d'Estudiants",
      titleMiddle: 'de',
      titleHighlight: 'Dades',
      description: 'Connectant talent, dades i futur. Som l\'associació d\'estudiants del grau en Ciència i Enginyeria de Dades de la UPC.',
    },
    goals: {
      title: 'Els nostres objectius',
      items: [
        {
          title: 'Educació',
          description: 'Millorar el grau i fer divulgació en ciència de dades i IA',
        },
        {
          title: 'Comunitat',
          description: 'Crear vincles entre estudiants, alumni i professionals',
        },
        {
          title: 'Futur',
          description: "Impulsar el futur de l'ecosistema tecnològic català",
        },
      ],
    },
    projects: {
      title: 'Els nostres projectes',
      moreInfo: 'Més informació',
      learnMore: 'Saber-ne més',
      videos: 'Vídeos',
      items: {
        datathon: {
          title: 'Datathon FME',
          text: 'La datató més gran de Catalunya, amb +400 participants. Un esdeveniment de 30 hores en què els equips resolen reptes reals amb ciència de dades i IA.',
        },
        dataTalks: {
          title: 'Data Talks',
          text: 'Aprèn sobre la ciència de dades i les seves aplicacions de la mà de ponents amb àmplia experiència en el sector.',
        },
        apunts: {
          title: 'Apunts Dades',
          text: "Un recull d'apunts i exàmens de les assignatures del nostre grau. Amb una plataforma col·laborativa on preguntar i resoldre dubtes.",
        },
        dataDays: {
          title: 'Data Days',
          text: 'Un cicle de xerrades, tallers i activitats al voltant de la ciència i enginyeria de dades. Per a estudiants de tots els nivells i professionals!',
        },
      },
    },
    team: {
      title: 'El nostre equip',
      members: [
        { name: 'Laia Mogas', role: 'Presidenta', ...sharedTeamLinks.laia },
        { name: 'Noa Mediavilla', role: 'Secretària', ...sharedTeamLinks.noa },
        { name: 'Arnau Biosca', role: 'Tresorer', ...sharedTeamLinks.arnau },
        { name: 'Sílvia Fàbregas', role: 'Vocal', ...sharedTeamLinks.silvia },
        { name: 'Roberto Nsoni', role: 'Director Datathon', ...sharedTeamLinks.roberto },
        { name: 'Pau Milà', role: 'Director DataTalks', ...sharedTeamLinks.pau },
        { name: 'Laura Rebollo', role: 'Directora Comunicació', ...sharedTeamLinks.laura },
      ],
    },
    join: {
      title: 'Vols col·laborar?',
      studentText: "Si ets estudiant o alumni del grau en Ciència i Enginyeria de Dades de la UPC, pots unir-te a l'associació!",
      collaborationText: 'També estem oberts a noves idees i col·laboracions amb altres entitats!',
    },
    contact: {
      success: "Gràcies! El teu missatge s'ha enviat correctament.",
      error: "Hi ha hagut un error. Torna-ho a provar o envia'ns un correu directe.",
      name: 'Nom complet *',
      namePlaceholder: 'El Teu Nom',
      email: 'Correu electrònic *',
      emailPlaceholder: 'exemple@email.com',
      subject: 'Assumpte *',
      subjectPlaceholder: 'Sobre què vols parlar?',
      message: 'Missatge *',
      messagePlaceholder: "Explica'ns la teva proposta...",
      submitting: 'Enviant...',
      submit: 'Enviar missatge',
    },
    footer: {
      copyright: "Associació d'Estudiants de Dades",
    },
  },
  en: {
    meta: {
      htmlLang: 'en',
    },
    nav: {
      about: 'About us',
      goals: 'Goals',
      projects: 'Projects',
      team: 'Team',
      join: 'Join us',
      languageLabel: 'Language',
    },
    home: {
      titlePrefix: 'Data Students',
      titleMiddle: '',
      titleHighlight: 'Association',
      description: 'Connecting talent, data and the future. We are the student association of the BSc in Data Science and Engineering at UPC.',
    },
    goals: {
      title: 'Our goals',
      items: [
        {
          title: 'Education',
          description: 'Improve the degree and share knowledge about data science and AI',
        },
        {
          title: 'Community',
          description: 'Build connections between students, alumni and professionals',
        },
        {
          title: 'Future',
          description: 'Boost the future of the Catalan technology ecosystem',
        },
      ],
    },
    projects: {
      title: 'Our projects',
      moreInfo: 'More information',
      learnMore: 'Learn more',
      videos: 'Videos',
      items: {
        datathon: {
          title: 'Datathon FME',
          text: 'The largest datathon in Catalonia, with more than 400 participants. A 30-hour event where teams solve real challenges with data science and AI.',
        },
        dataTalks: {
          title: 'Data Talks',
          text: 'Learn about data science and its applications from speakers with broad industry experience.',
        },
        apunts: {
          title: 'Apunts Dades',
          text: 'A collection of notes and exams from our degree subjects, with a collaborative platform for asking questions and solving doubts.',
        },
        dataDays: {
          title: 'Data Days',
          text: 'A series of talks, workshops and activities around data science and engineering, for students of all levels and professionals.',
        },
      },
    },
    team: {
      title: 'Our team',
      members: [
        { name: 'Laia Mogas', role: 'President', ...sharedTeamLinks.laia },
        { name: 'Noa Mediavilla', role: 'Secretary', ...sharedTeamLinks.noa },
        { name: 'Arnau Biosca', role: 'Treasurer', ...sharedTeamLinks.arnau },
        { name: 'Sílvia Fàbregas', role: 'Board member', ...sharedTeamLinks.silvia },
        { name: 'Roberto Nsoni', role: 'Datathon Director', ...sharedTeamLinks.roberto },
        { name: 'Pau Milà', role: 'DataTalks Director', ...sharedTeamLinks.pau },
        { name: 'Laura Rebollo', role: 'Communications Director', ...sharedTeamLinks.laura },
      ],
    },
    join: {
      title: 'Want to collaborate?',
      studentText: 'If you are a student or alumni of the BSc in Data Science and Engineering at UPC, you can join the association!',
      collaborationText: 'We are also open to new ideas and collaborations with other organizations!',
    },
    contact: {
      success: 'Thank you. Your message has been sent successfully.',
      error: 'Something went wrong. Please try again or email us directly.',
      name: 'Full name *',
      namePlaceholder: 'Your name',
      email: 'Email address *',
      emailPlaceholder: 'example@email.com',
      subject: 'Subject *',
      subjectPlaceholder: 'What would you like to talk about?',
      message: 'Message *',
      messagePlaceholder: 'Tell us about your proposal...',
      submitting: 'Sending...',
      submit: 'Send message',
    },
    footer: {
      copyright: 'Data Students Association',
    },
  },
};

export default translations;
