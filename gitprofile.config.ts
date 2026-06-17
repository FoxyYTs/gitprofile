// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'FoxyYTs', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Proyectos de GitHub 🚀',
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
        projects: ['FoxyYTs/SGI_LAB_MANAGER_FRONTEND', 'FoxyYTs/pensum-interactivo'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Mis Proyectos ✨',
      projects: [
        {
          title: 'SGI LAB MANAGER - Visión General 📊',
          description:
            'Sistema integral de gestión de laboratorio para el Politécnico Colombiano Jaime Isaza Cadavid (Rionegro). App multi-plataforma en Flutter/Dart con backend Django REST. Infraestructura propia: Docker + Nginx + PostgreSQL + Cloudflare Zero Trust Tunnel. 71 tests automatizados con pytest. En producción activa.',
          imageUrl: '',
          link: 'https://github.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND',
        },
        {
          title: 'SGI LAB MANAGER - Inventario y Seguridad Química ⚗️',
          description:
            'Control de insumos (Implemento, Vidriería, Químico, Equipo) con semáforo de stock en tiempo real. Ficha GHS completa: pictogramas GHS01–GHS09, rombo NFPA 704, frases H/P, EPP. Extracción automática de FDS desde PDF con IA (Groq/Llama 3.1). Generación de etiquetas GHS en PDF en 4 formatos. Exportación a formato Colmena ARL.',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imageweb.png?raw=true',
          link: 'https://github.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND',
        },
        {
          title: 'SGI LAB MANAGER - Préstamos, Horarios e Informes 📋',
          description:
            'Flujo completo de préstamos (PENDIENTE → ACTIVO → DEVUELTO) con descuento de stock automático. Horario semanal Lun–Sáb con vistas de encargados y asignaturas. 6 tipos de informes en PDF. Formularios públicos por QR sin login para solicitudes, horas monitor y reportes de rotura.',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imagepc.png?raw=true',
          link: 'https://github.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND',
        },
        {
          title: 'SGI LAB MANAGER - Infraestructura y Seguridad 🔒',
          description:
            'Modo offline con SQLite y cola de sincronización automática. JWT con refresco transparente y blacklist. Respaldos automáticos cifrados (pg_dump → gzip → GPG AES-256 → GitHub privado). Monitor de disponibilidad cada 5 min con alertas por Telegram. Cloudflare Zero Trust: ningún puerto expuesto directamente.',
          imageUrl: '',
          link: 'https://github.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND',
        },
        {
          title: 'Semillero RV - Ambientes Inmersivos de Aprendizaje 🎓',
          description:
            '⚠️ Proyecto finalizado. Desarrollo de entornos 3D inmersivos para conservar espacios educativos (aula, laboratorio, edificio) y proyectar futuras construcciones en el Politécnico Colombiano Jaime Isaza Cadavid. Usó escaneo 3D, modelado con Unity/Blender e implementación en VR Chat. El proyecto no continuó debido a problemas con el área de investigación de la universidad que sostenía el semillero.',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imgegrupo.jpg?raw=true',
        },
        {
          title: 'Semillero RV - Objetivos y Metodología 🎯',
          description:
            '⚠️ Proyecto finalizado. Objetivos: conservar digitalmente espacios existentes, proyectar futuros, mejorar accesibilidad educativa. Metodología: Investigación, Modelado 3D, Implementación en VR Chat, Evaluación con usuarios. Se logró un prototipo funcional de campus virtual antes del cierre del semillero.',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imggrupo.jpg?raw=true',
        },
        {
          title: 'Semillero RV - Resultados e Impacto 📈',
          description:
            '⚠️ Proyecto finalizado. Resultados obtenidos: colección digital de 3 entornos educativos y prototipo de campus virtual en VR Chat. Impacto alcanzado: enseñanza interactiva, acceso inclusivo a espacios físicos y preservación digital del patrimonio institucional.',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imgpresentacion.jpg?raw=true',
        },
        {
          title: 'Semillero RV - Detalles Técnicos ⚙️',
          description:
            '⚠️ Proyecto finalizado. Tecnologías utilizadas: Realidad Virtual/Aumentada, Escaneo 3D, Modelado 3D (Unity, Blender), VR Chat. Principal desafío superado: optimización de entornos VR para hardware accesible.',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imgmodels.jpg?raw=true',
        },
        {
          title: 'Pensum Interactivo - Politécnico Colombiano JIC 🎓',
          description:
            'Visualizador interactivo de pensum académico para las 8 carreras de la sede Rionegro del Politécnico Colombiano Jaime Isaza Cadavid. Grafo dirigido con D3.js: asignaturas, prerrequisitos, créditos y porcentaje de avance. PWA desplegada en GitHub Pages con CI/CD via GitHub Actions. Fork adaptado de un proyecto chileno de código abierto.',
          imageUrl: '',
          link: 'https://foxyyts.github.io/pensum-interactivo',
        },
        // Otros proyectos
      ],
    },
  },
  seo: {
    title: 'Portafolio de Jose Andres Daza Gallego',
    description:'Portafolio personal de Jose Andres Daza Gallego, estudiante de Ingeniería Informática con experiencia en desarrollo web, desarrollo móvil, data science, devops y realidad virtual.',
    imageURL: '',
  },
  social: {
    linkedin: 'jose-andres-daza-gallego',
    x: 'FoxyYTs',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'foxy_yts',
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
    telegram: 'FoxyYTs',
    website: '',
    phone: '',
    email: 'foxy200442@gmail.com',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/1olYR87wFs1mOOySZDOzDRAvIBItwLcOJ/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
  // Lenguajes de Programación 💻
  'Python', 'Java', 'JavaScript', 'C++', 'C#', 'Dart',
  // Front-End 🎨
  'HTML', 'CSS', 'Flutter',
  // Back-End ⚙️
  'Node.js', 'PHP', 'Django',
  // Bases de Datos 🗄️
  'MySQL', 'PostgreSQL', 'MongoDB',
  // Herramientas y Tecnologías 🛠️
  'Git', 'Docker', 'Unity', 'Blender', 'Cloudflare',
  // IA / LLMs 🤖
  'Groq', 'Llama 3.1', 'Google Cloud TTS', 'Stitch',
  // Metodologías 🗺️
  'Scrum',
  // Sistemas Operativos 🖥
  'Linux(Ubuntu, Kali, Arch)', 'Windows'
  ],
  experiences: [
    {
      company: 'SGI LAB MANAGER',
      position: 'Creador y Desarrollador Principal 🛠️',
      from: 'Febrero 2024',
      to: 'Presente',
      companyLink: 'https://github.com/FoxyYTs/SGI',
    },
    {
      company: 'Politécnico Colombiano Jaime Isaza Cadavid',
      position: 'Monitor de Laboratorio 🧪',
      from: 'Febrero 2024',
      to: 'Presente',
      companyLink: 'https://www.politecnicojic.edu.co/',
    },
    {
      company: 'Politécnico Colombiano Jaime Isaza Cadavid',
      position: 'Encargado y Creador del Servidor del Laboratorio 🌐',
      from: 'Enero 2024',
      to: 'Presente',
      companyLink: 'https://www.politecnicojic.edu.co/',
    },
  ],
  certifications: [
    {
      name: 'MongoDB for SQL Professionals',
      year: 'Noviembre 2025',
      link: 'https://learn.mongodb.com/c/r0Q-OyvpRNa1u05RIrvIog',
    },
    {
      name: 'Linux Essentials',
      body: 'certificación Linux Essentials del Linux Professional Institute.',
      year: 'Noviembre 2025',
      link: 'https://www.credly.com/badges/8cdf2b90-6313-418f-b203-78ab6e55f9aa',
    },
    {
      name: 'Curso de Django 💻',
      body: 'Certifica el conocimiento en el desarrollo web con el framework Django.',
      year: 'Agosto 2025',
      link: 'https://platzi.com/p/JoseDaza/curso/9574-course/diploma/detalle/',
    },
    {
      name: 'Curso de Python 🐍',
      body: 'Certifica los conocimientos y la participación en el Curso de Python.',
      year: 'Agosto 2025',
      link: 'https://platzi.com/p/JoseDaza/curso/1104-course/diploma/detalle/',
    },
    {
      name: 'Certified Kubernetes Administrator (CKA) ☁️',
      body: 'Demuestra habilidades en la administración de Kubernetes, la plataforma líder para la orquestación de contenedores.',
      year: 'Abril 2025',
      link: 'https://ude.my/UC-dbc23515-cecf-4fae-b1a3-985daf57dd48',
    },
    {
      name: 'Bootcamp Devops Project Lab',
      body: 'Certifica la participación en el Bootcamp Devops Project Lab, impartido por Softserve, con enfoque en la práctica de proyectos DevOps.',
      year: 'Marzo - Junio 2025',
    },
    {
      name: 'Curso de Java SE Orientado a Objetos ☕',
      body: 'Certifica el conocimiento en Java SE con enfoque en Programación Orientada a Objetos.',
      year: 'Septiembre 2023',
      link: 'https://platzi.com/p/JoseDaza/curso/1629-course/diploma/detalle/',
    },
    {
      name: 'Curso de Programación Orientada a Objetos 🧩',
      body: 'Certifica el conocimiento en los principios y prácticas de la Programación Orientada a Objetos.',
      year: 'Abril 2023',
      link: 'https://platzi.com/p/JoseDaza/curso/1474-course/diploma/detalle/',
    },
    {
      name: 'Curso de Creación de Videojuegos 🎮',
      body: 'Certifica la habilidad para crear videojuegos.',
      year: 'Enero 2021',
      link: 'https://platzi.com/p/JoseDaza/curso/1062-course/diploma/detalle/',
    },
  ],
  educations: [
    {
      institution: 'Politécnico Colombiano Jaime Isaza Cadavid',
      degree: 'Ingeniería Informática 🎓',
      from: 'Agosto 2022',
      to: 'Presente (8vo Semestre)',
    },
    {
      institution: 'Institución Educativa Inem José Félix de Restrepo',
      degree: 'Bachiller en Media tecnica Informatica 🏫',
      from: 'Febrero 2015',
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
    id: 'G-5NPY5MX45W', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
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
  footer: `Hecho con <a
        class="text-primary" href="https://github.com/arifszn/gitprofile"
        target="_blank"
        rel="noreferrer"
      >GitProfile</a> y ❤️`,

  enablePWA: true,
};

export default CONFIG;