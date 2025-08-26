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
        projects: ['FoxyYTs/SGI', 'FoxyYTs/SGI-App'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Mis Proyectos ✨',
      projects: [
        {
          title: 'SGI LAB MANAGER - Sistema de Gestión de Inventarios 📊',
          description:
            'Sistema integral de gestión de inventarios diseñado para el laboratorio del Politécnico Colombiano Jaime Isaza Cadavid. Incluye: Web (HTML, PHP, CSS; futuro Django), Escritorio (Python) y Móvil (Java/Kotlin en planificación). ¡Control total de tu laboratorio! 🧪',
          imageUrl: '', // Añade una imagen representativa
          link: 'https://github.com/FoxyYTs/SGI', // Enlace al repositorio principal (página web)
        },
        {
          title: 'SGI LAB MANAGER - Detalles Web 🌐',
          description:
            'Página web para la gestión central del inventario: consulta, registro, reportes y administración. Tecnologías: HTML, PHP, CSS. Migración a Django planeada. ¡Acceso fácil desde cualquier lugar! 💻',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imageweb.png?raw=true', // Añade una imagen de la web
          link: 'https://github.com/FoxyYTs/SGI', // Enlace al repositorio de la web
        },
        {
          title: 'SGI LAB MANAGER - Detalles Escritorio 🖥️',
          description:
            'Aplicación de escritorio para tareas internas: entrada rápida de datos, gestión de usuarios, etiquetas. Desarrollado en Python. ¡Eficiencia al máximo! ⚡',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imagepc.png?raw=true', // Añade una imagen de la app de escritorio
          link: 'https://github.com/FoxyYTs/SGI-App', // Enlace al repositorio de la app de escritorio
        },
        {
          title: 'SGI LAB MANAGER - Detalles Móvil 📱',
          description:
            'Aplicación móvil (planificada) para consulta de inventario, solicitudes y notificaciones. Tecnologías en consideración: Java, Kotlin. ¡Tu inventario en la palma de tu mano! 🖐️',
          imageUrl: '', // Añade un mockup si tienes
        },
        {
          title: 'SGI LAB MANAGER - Info General 💡',
          description:
            'Objetivos: Centralizar gestión, info en tiempo real, trazabilidad, seguridad, optimizar procesos, reportes. Módulos: Insumos, Stock, Usuarios, Préstamos, Seguridad. Beneficiarios: Personal, Docentes, Administradores. ¡Innovación para el laboratorio! 🌟',
          imageUrl: '', // Añade una imagen general del proyecto
        },
        {
          title: 'Semillero RV - Ambientes Inmersivos de Aprendizaje 🎓',
          description:
            'Desarrollo de entornos 3D inmersivos para conservar espacios educativos (aula, laboratorio, edificio) y proyectar futuras construcciones en el Politécnico Colombiano Jaime Isaza Cadavid. Usa escaneo 3D, modelado (Unity/Blender), y VR. Actualmente implementado en VR Chat, con desarrollo futuro de motor propio en Unity para expandir funcionalidades. Busca innovación educativa y preservar patrimonio institucional. ¡El futuro de la educación está aquí! 👓',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imgegrupo.jpg?raw=true', // Añade una imagen representativa del proyecto
        },
        {
          title: 'Semillero RV - Objetivos y Metodología 🎯',
          description:
            'Objetivos: Conservar digitalmente espacios existentes, proyectar futuros, mejorar accesibilidad educativa. Metodología: Investigación, Modelado, Implementación (inicialmente en VR Chat, luego motor propio en Unity), Evaluación con usuarios. ¡Un enfoque innovador! 🚀',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imggrupo.jpg?raw=true', // Añade una imagen de la metodología o un diagrama
        },
        {
          title: 'Semillero RV - Resultados e Impacto 📈',
          description:
            'Resultados: Colección digital de 3 entornos, prototipo de campus virtual (en VR Chat). Impacto: Enseñanza interactiva, acceso inclusivo, preservación digital, innovación tecnológica. ¡Transformando la educación! ✨',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imgpresentacion.jpg?raw=true', // Añade una imagen de los resultados o del impacto del proyecto
        },
        {
          title: 'Semillero RV - Detalles Técnicos ⚙️',
          description:
            'Tecnologías: Realidad Virtual/Aumentada, Escaneo 3D, Modelado 3D (Unity, Blender), VR Chat (implementación actual), Unity (motor propio en desarrollo). Desafíos superados: Optimización de entornos VR. ¡Tecnología de vanguardia! 🛠️',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imgmodels.jpg?raw=true', // Añade una imagen de las tecnologías utilizadas
        },
        {
          title: 'Semillero RV - Contexto y Futuro 🔭',
          description:
            'Problema: Pérdida de memoria institucional y poca accesibilidad a entornos innovadores. Futuro: Integrar IA para guías, preservar actividades pedagógicas, recrear espacios culturales, desarrollo de motor propio en Unity para mayor control y personalización. ¡Construyendo el mañana! 🌟',
          imageUrl: '', // Añade una imagen del contexto o del futuro del proyecto
        }
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
  'Python', 'Java', 'JavaScript', 'C++', 'C#',
  // Front-End 🎨
  'HTML', 'CSS',
  // Back-End ⚙️
  'Node.js', 'PHP',
  // Bases de Datos 🗄️
  'MySQL', 'PostgreSQL', 'SQL',
  // Herramientas y Tecnologías 🛠️
  'Git', 'Unity', 'Blender',
  // Metodologías 🗺️
  'Scrum'
  ],
  experiences: [
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
      name: 'Curso de Computación Básica 📚',
      body: 'Certifica el conocimiento en los fundamentos de la computación.',
      year: 'Febrero 2023',
      link: 'https://platzi.com/p/JoseDaza/curso/2793-course/diploma/detalle/',
    },
    {
      name: 'Curso de Introducción a Java SE 📖',
      body: 'Certifica la introducción y conocimientos básicos del lenguaje de programación Java SE.',
      year: 'Noviembre 2022',
      link: 'https://platzi.com/p/JoseDaza/curso/1631-course/diploma/detalle/',
    },
    {
      name: 'Curso de Prework: Configuración de Entorno de Desarrollo en Windows 💻',
      body: 'Certifica la habilidad para configurar un entorno de desarrollo en el sistema operativo Windows.',
      year: 'Diciembre 2021',
      link: 'https://platzi.com/p/JoseDaza/curso/2042-course/diploma/detalle/',
    },
    {
      name: 'Curso Básico de Python 🐍',
      body: 'Certifica la introducción y conocimientos básicos del lenguaje de programación Python.',
      year: 'Agosto 2021',
      link: 'https://platzi.com/p/JoseDaza/curso/1937-course/diploma/detalle/',
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
      to: 'Presente (6to Semestre)',
    },
    {
      institution: 'Institución Educativa Inem José Félix de Restrepo',
      degree: 'Bachiller en Media tecnica Informatica 🏫',
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