// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'FoxyYTs', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Proyectos de GitHub',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['FoxyYTs/SGI', 'FoxyYTs/SGI-App'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Mis Proyectos',
      projects: [
        {
          title: 'Entorno SGI - Sistema de Gestión Integral de Laboratorio',
          description:
            'Desarrollado para el Politécnico Colombiano Jaime Isaza Cadavid, el Entorno SGI optimiza la gestión de laboratorios. Incluye un sitio web (Django, JavaScript), aplicación de escritorio (Java Swing) y planificación para móvil (Kotlin). Debido a restricciones de seguridad, el acceso es mediante VPN, pero se muestran capturas de pantalla y el código fuente está disponible en GitHub.',
          imageUrl: '', // Enlace a la primera captura de pantalla
          link: '', // Puedes dejarlo vacío o enlazar al repo principal del SGI
        },
        {
          title: 'Semillero de Realidad Virtual - [Nombre del proyecto VR]',
          description:
            'Participación en el semillero de realidad virtual, enfocado en [breve descripción del proyecto]. Se utilizó [tecnologías]. [Si tienes un enlace a un demo o algo público, ponlo aquí].',
          imageUrl: '', // Enlace a una imagen del proyecto VR
          link: '', // Enlace al demo, video, etc.
        },
        // Otros proyectos
      ],
    },
  },
  seo: {
    title: 'Portafolio de Jose Andres Daza Gallego',
    description:
      'Portafolio personal de Jose Andres Daza Gallego, estudiante de Ingeniería Informática con experiencia en desarrollo web, desarrollo móvil, data science, devops y realidad virtual.',
    imageURL: '',
  },
  social: {
    linkedin: 'jose-andres-daza-gallego',
    x: 'FoxyYTs',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'foxy200442@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'JavaScript',
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'Java',
    'Python',
    'C++',
    'C#',
    'HTML'
  ],
  experiences: [
    {
      company: 'Politécnico Colombiano Jaime Isaza Cadavid',
      position: 'Monitor de Laboratorio',
      from: 'Febrero 2024',
      to: 'Junio 2024',
      companyLink: 'https://www.politecnicojic.edu.co/',
    },
    {
      company: 'Politécnico Colombiano Jaime Isaza Cadavid',
      position: 'Encargado y Creador del Servidor del Laboratorio',
      from: 'Enero 2024',
      to: 'Presente',
      companyLink: 'https://www.politecnicojic.edu.co/',
    },
  ],
  certifications: [
    {
        name: 'Certified Kubernetes Administrator (CKA)',
        body: 'Demuestra habilidades en la administración de Kubernetes, la plataforma líder para la orquestación de contenedores.',
        year: 'April 2025',
        link: 'ude.my/UC-dbc23515-cecf-4fae-b1a3-985daf57dd48',
    },
    {
        name: 'Curso de Java SE Orientado a Objetos',
        body: 'Certifica el conocimiento en Java SE con enfoque en Programación Orientada a Objetos.',
        year: 'September 2023',
        link: 'https://platzi.com/@JoseDaza/',
    },
    {
        name: 'Curso de Programación Orientada a Objetos',
        body: 'Certifica el conocimiento en los principios y prácticas de la Programación Orientada a Objetos.',
        year: 'April 2023',
        link: 'https://platzi.com/@JoseDaza/',
    },
    {
        name: 'Curso de Computación Básica',
        body: 'Certifica el conocimiento en los fundamentos de la computación.',
        year: 'February 2023',
        link: 'https://platzi.com/@JoseDaza/',
    },
    {
        name: 'Curso de Introducción a Java SE',
        body: 'Certifica la introducción y conocimientos básicos del lenguaje de programación Java SE.',
        year: 'November 2022',
        link: 'https://platzi.com/@JoseDaza/',
    },
    {
        name: 'Curso de Prework: Configuración de Entorno de Desarrollo en Windows',
        body: 'Certifica la habilidad para configurar un entorno de desarrollo en el sistema operativo Windows.',
        year: 'December 2021',
        link: 'https://platzi.com/@JoseDaza/',
    },
    {
        name: 'Curso Básico de Python',
        body: 'Certifica la introducción y conocimientos básicos del lenguaje de programación Python.',
        year: 'August 2021',
        link: 'https://platzi.com/@JoseDaza/',
    },
    {
        name: 'Curso de Creación de Videojuegos',
        body: 'Certifica la habilidad para crear videojuegos.',
        year: 'January 2021',
        link: 'https://platzi.com/@JoseDaza/',
    },

],
educations: [
    {
      institution: 'Politécnico Colombiano Jaime Isaza Cadavid',
      degree: 'Ingeniería Informática',
      from: 'Agosto 2022',
      to: 'Presente (6to Semestre)',
    },
    {
      institution: 'Institución Educativa Inem José Félix de Restrepo',
      degree: 'Bachiller en Media tecnica Informatica',
      from: 'Febrero 2015"',
      to: 'Diciembre 2020',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
