// gitprofile.config.ts

const CONFIG_ES = {
  github: {
    username: 'FoxyYTs',
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Proyectos de GitHub 🚀',
      mode: 'manual',
      automatic: {
        sortBy: 'stars',
        limit: 6,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: ['FoxyYTs/SGI_LAB_MANAGER_FRONTEND', 'FoxyYTs/pensum-interactivo'],
      },
    },
    external: {
      header: 'Mis Proyectos ✨',
      projects: [
        {
          title: 'SGI LAB MANAGER - Visión General 📊',
          description:
            'Sistema integral de gestión de laboratorio para el Politécnico Colombiano Jaime Isaza Cadavid (Rionegro). App multi-plataforma en Flutter/Dart con backend Django REST. Infraestructura propia: Docker + Nginx + PostgreSQL + Cloudflare Zero Trust Tunnel. 71 tests automatizados con pytest. En producción activa.',
          imageUrl: 'https://raw.githubusercontent.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND/main/frontend/docs/screenshots/02_dashboard.png',
          link: 'https://github.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND',
        },
        {
          title: 'SGI LAB MANAGER - Inventario y Seguridad Química ⚗️',
          description:
            'Control de insumos (Implemento, Vidriería, Químico, Equipo) con semáforo de stock en tiempo real. Ficha GHS completa: pictogramas GHS01–GHS09, rombo NFPA 704, frases H/P, EPP. Extracción automática de FDS desde PDF con IA (Groq/Llama 3.1). Generación de etiquetas GHS en PDF en 4 formatos. Exportación a formato Colmena ARL.',
          imageUrl: 'https://raw.githubusercontent.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND/main/frontend/docs/screenshots/04_ficha_sga.png',
          link: 'https://github.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND',
        },
        {
          title: 'SGI LAB MANAGER - Préstamos, Horarios e Informes 📋',
          description:
            'Flujo completo de préstamos (PENDIENTE → ACTIVO → DEVUELTO) con descuento de stock automático. Horario semanal Lun–Sáb con vistas de encargados y asignaturas. 6 tipos de informes en PDF y Excel. Formularios públicos por QR sin login para solicitudes, horas monitor y reportes de rotura.',
          imageUrl: 'https://raw.githubusercontent.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND/main/frontend/docs/screenshots/08_informes.png',
          link: 'https://github.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND',
        },
        {
          title: 'SGI LAB MANAGER - Infraestructura y Seguridad 🔒',
          description:
            'Modo offline con SQLite y cola de sincronización automática. JWT con refresco transparente y blacklist. Respaldos automáticos cifrados (pg_dump → gzip → GPG AES-256 → GitHub privado). Monitor de disponibilidad cada 5 min con alertas por Telegram. Cloudflare Zero Trust: ningún puerto expuesto directamente.',
          imageUrl: 'https://raw.githubusercontent.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND/main/frontend/docs/screenshots/03_inventario.png',
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
          imageUrl: 'https://raw.githubusercontent.com/FoxyYTs/pensum-interactivo/main/docs/preview.png',
          link: 'https://foxyyts.github.io/pensum-interactivo',
        },
      ],
    },
  },
  seo: {
    title: 'Portafolio de Jose Andres Daza Gallego',
    description: 'Portafolio personal de Jose Andres Daza Gallego, estudiante de Ingeniería Informática con experiencia en desarrollo web, desarrollo móvil, data science, devops y realidad virtual.',
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
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: 'foxyyts',
    telegram: 'FoxyYTs',
    website: '',
    phone: '',
    email: 'foxy200442@gmail.com',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/1WJDMu-_4dG7YsA3YcKkEGoWmONs9Q5bA/view?usp=sharing',
  },
  skills: [
    'Python', 'Java', 'JavaScript', 'C++', 'C#', 'Dart',
    'HTML', 'CSS', 'Flutter',
    'Node.js', 'PHP', 'Django',
    'MySQL', 'PostgreSQL', 'MongoDB',
    'Git', 'Docker', 'Unity', 'Blender', 'Cloudflare',
    'Groq', 'Llama 3.1', 'Google Cloud TTS', 'Stitch',
    'Scrum',
    'Linux(Ubuntu, Kali, Arch)', 'Windows',
  ],
  experiences: [
    {
      company: 'SGI LAB MANAGER',
      position: 'Creador y Desarrollador Principal 🛠️',
      from: 'Febrero 2024',
      to: 'Presente',
      companyLink: 'https://github.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND',
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
      body: 'Certificación Linux Essentials del Linux Professional Institute.',
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
      name: 'Bootcamp DevOps Project Lab',
      body: 'Certifica la participación en el Bootcamp DevOps Project Lab, impartido por SoftServe, con enfoque en la práctica de proyectos DevOps.',
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
      degree: 'Técnico en Programación 🏫',
      from: 'Febrero 2015',
      to: 'Diciembre 2020',
    },
  ],
  googleAnalytics: {
    id: 'G-5NPY5MX45W',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
      'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
      'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
      'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
      'night', 'coffee', 'winter', 'dim', 'nord', 'sunset', 'caramellatte',
      'abyss', 'silk', 'procyon',
    ],
  },
  footer: `Hecho con <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> y ❤️`,
  enablePWA: true,
};

const CONFIG_EN = {
  github: {
    username: 'FoxyYTs',
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects 🚀',
      mode: 'manual',
      automatic: {
        sortBy: 'stars',
        limit: 6,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: ['FoxyYTs/SGI_LAB_MANAGER_FRONTEND', 'FoxyYTs/pensum-interactivo'],
      },
    },
    external: {
      header: 'My Projects ✨',
      projects: [
        {
          title: 'SGI LAB MANAGER - Overview 📊',
          description:
            'Full-featured lab management system for Politécnico Colombiano Jaime Isaza Cadavid (Rionegro). Cross-platform app in Flutter/Dart with Django REST backend. Own infrastructure: Docker + Nginx + PostgreSQL + Cloudflare Zero Trust Tunnel. 71 automated tests with pytest. Currently in active production.',
          imageUrl: 'https://raw.githubusercontent.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND/main/frontend/docs/screenshots/02_dashboard.png',
          link: 'https://github.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND',
        },
        {
          title: 'SGI LAB MANAGER - Inventory & Chemical Safety ⚗️',
          description:
            'Supply control (Tools, Glassware, Chemicals, Equipment) with real-time stock traffic light. Full GHS sheet: GHS01–GHS09 pictograms, NFPA 704 diamond, H/P phrases, PPE. Automatic SDS extraction from PDF using AI (Groq/Llama 3.1). GHS label generation in PDF across 4 formats. Export to Colmena ARL format.',
          imageUrl: 'https://raw.githubusercontent.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND/main/frontend/docs/screenshots/04_ficha_sga.png',
          link: 'https://github.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND',
        },
        {
          title: 'SGI LAB MANAGER - Loans, Schedules & Reports 📋',
          description:
            'Full loan workflow (PENDING → ACTIVE → RETURNED) with automatic stock deduction. Weekly schedule Mon–Sat with lab staff and subject views. 6 report types in PDF and Excel. Public QR forms (no login) for loan requests, monitor hours, and breakage reports.',
          imageUrl: 'https://raw.githubusercontent.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND/main/frontend/docs/screenshots/08_informes.png',
          link: 'https://github.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND',
        },
        {
          title: 'SGI LAB MANAGER - Infrastructure & Security 🔒',
          description:
            'Offline mode with SQLite and automatic sync queue. Transparent JWT refresh with blacklist. Automated encrypted backups (pg_dump → gzip → GPG AES-256 → private GitHub). Availability monitor every 5 min with Telegram alerts. Cloudflare Zero Trust: no ports exposed directly.',
          imageUrl: 'https://raw.githubusercontent.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND/main/frontend/docs/screenshots/03_inventario.png',
          link: 'https://github.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND',
        },
        {
          title: 'VR Research Group - Immersive Learning Environments 🎓',
          description:
            '⚠️ Project concluded. Development of 3D immersive environments to preserve educational spaces (classroom, lab, building) and project future constructions at Politécnico Colombiano Jaime Isaza Cadavid. Used 3D scanning, Unity/Blender modeling, and VRChat deployment. The project was discontinued due to loss of institutional research support.',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imgegrupo.jpg?raw=true',
        },
        {
          title: 'VR Research Group - Goals & Methodology 🎯',
          description:
            '⚠️ Project concluded. Goals: digitally preserve existing spaces, project future ones, improve educational accessibility. Methodology: Research, 3D Modeling, VRChat deployment, user evaluation. A functional virtual campus prototype was achieved before the group was disbanded.',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imggrupo.jpg?raw=true',
        },
        {
          title: 'VR Research Group - Results & Impact 📈',
          description:
            '⚠️ Project concluded. Results: digital collection of 3 educational environments and a virtual campus prototype in VRChat. Impact: interactive learning, inclusive access to physical spaces, and digital preservation of institutional heritage.',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imgpresentacion.jpg?raw=true',
        },
        {
          title: 'VR Research Group - Technical Details ⚙️',
          description:
            '⚠️ Project concluded. Technologies: Virtual/Augmented Reality, 3D Scanning, 3D Modeling (Unity, Blender), VRChat. Main challenge overcome: optimizing VR environments for accessible consumer hardware.',
          imageUrl: 'https://github.com/FoxyYTs/imgs/blob/main/imgmodels.jpg?raw=true',
        },
        {
          title: 'Interactive Academic Curriculum — PCJIC 🎓',
          description:
            'Interactive academic curriculum visualizer for all 8 degree programs at the Rionegro campus of Politécnico Colombiano Jaime Isaza Cadavid. Directed graph with D3.js: courses, prerequisites, credits, and completion percentage with localStorage persistence. PWA deployed on GitHub Pages with CI/CD via GitHub Actions. Adapted fork of a Chilean open-source project.',
          imageUrl: 'https://raw.githubusercontent.com/FoxyYTs/pensum-interactivo/main/docs/preview.png',
          link: 'https://foxyyts.github.io/pensum-interactivo',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio — Jose Andres Daza Gallego',
    description: 'Personal portfolio of Jose Andres Daza Gallego, Computer Engineering student with experience in web development, mobile development, DevOps, server administration, and virtual reality.',
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
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: 'foxyyts',
    telegram: 'FoxyYTs',
    website: '',
    phone: '',
    email: 'foxy200442@gmail.com',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/1AQEI4ZM9KXzf5nJpip5j96s7Ekj67veG/view?usp=sharing',
  },
  skills: [
    'Python', 'Java', 'JavaScript', 'C++', 'C#', 'Dart',
    'HTML', 'CSS', 'Flutter',
    'Node.js', 'PHP', 'Django',
    'MySQL', 'PostgreSQL', 'MongoDB',
    'Git', 'Docker', 'Unity', 'Blender', 'Cloudflare',
    'Groq', 'Llama 3.1', 'Google Cloud TTS', 'Stitch',
    'Scrum',
    'Linux(Ubuntu, Kali, Arch)', 'Windows',
  ],
  experiences: [
    {
      company: 'SGI LAB MANAGER',
      position: 'Creator & Lead Developer 🛠️',
      from: 'February 2024',
      to: 'Present',
      companyLink: 'https://github.com/FoxyYTs/SGI_LAB_MANAGER_FRONTEND',
    },
    {
      company: 'Politécnico Colombiano Jaime Isaza Cadavid',
      position: 'Laboratory Monitor 🧪',
      from: 'February 2024',
      to: 'Present',
      companyLink: 'https://www.politecnicojic.edu.co/',
    },
    {
      company: 'Politécnico Colombiano Jaime Isaza Cadavid',
      position: 'Lab Server Administrator & Creator 🌐',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://www.politecnicojic.edu.co/',
    },
  ],
  certifications: [
    {
      name: 'MongoDB for SQL Professionals',
      year: 'November 2025',
      link: 'https://learn.mongodb.com/c/r0Q-OyvpRNa1u05RIrvIog',
    },
    {
      name: 'Linux Essentials',
      body: 'Linux Essentials certification by the Linux Professional Institute.',
      year: 'November 2025',
      link: 'https://www.credly.com/badges/8cdf2b90-6313-418f-b203-78ab6e55f9aa',
    },
    {
      name: 'Django Course 💻',
      body: 'Certifies knowledge in web development with the Django framework.',
      year: 'August 2025',
      link: 'https://platzi.com/p/JoseDaza/curso/9574-course/diploma/detalle/',
    },
    {
      name: 'Python Course 🐍',
      body: 'Certifies knowledge and participation in the Python course.',
      year: 'August 2025',
      link: 'https://platzi.com/p/JoseDaza/curso/1104-course/diploma/detalle/',
    },
    {
      name: 'Certified Kubernetes Administrator (CKA) ☁️',
      body: 'Demonstrates skills in Kubernetes administration, the leading container orchestration platform.',
      year: 'April 2025',
      link: 'https://ude.my/UC-dbc23515-cecf-4fae-b1a3-985daf57dd48',
    },
    {
      name: 'DevOps Project Lab Bootcamp',
      body: 'Certifies participation in the DevOps Project Lab Bootcamp by SoftServe, focused on hands-on DevOps projects.',
      year: 'March - June 2025',
    },
    {
      name: 'Java SE Object-Oriented Programming ☕',
      body: 'Certifies knowledge in Java SE with a focus on Object-Oriented Programming.',
      year: 'September 2023',
      link: 'https://platzi.com/p/JoseDaza/curso/1629-course/diploma/detalle/',
    },
    {
      name: 'Object-Oriented Programming Course 🧩',
      body: 'Certifies knowledge of the principles and practices of Object-Oriented Programming.',
      year: 'April 2023',
      link: 'https://platzi.com/p/JoseDaza/curso/1474-course/diploma/detalle/',
    },
    {
      name: 'Game Development Course 🎮',
      body: 'Certifies the ability to create video games.',
      year: 'January 2021',
      link: 'https://platzi.com/p/JoseDaza/curso/1062-course/diploma/detalle/',
    },
  ],
  educations: [
    {
      institution: 'Politécnico Colombiano Jaime Isaza Cadavid',
      degree: 'B.Eng. in Computer Engineering 🎓',
      from: 'August 2022',
      to: 'Present (8th Semester)',
    },
    {
      institution: 'I.E. INEM José Félix de Restrepo',
      degree: 'Technical High School Diploma in Programming 🏫',
      from: 'February 2015',
      to: 'December 2020',
    },
  ],
  googleAnalytics: {
    id: 'G-5NPY5MX45W',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
      'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
      'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
      'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
      'night', 'coffee', 'winter', 'dim', 'nord', 'sunset', 'caramellatte',
      'abyss', 'silk', 'procyon',
    ],
  },
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export { CONFIG_ES, CONFIG_EN };
