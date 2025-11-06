type Translations = {
  [key in "en" | "es"]: {
    nav: {
      home: string;
      experience: string;
      projects: string;
    };
    greeting: string;
    description: string;
    experienceSection: string;
    techStack: string;
    jobs: {
      taktiful: {
        description: string[];
        startDate: string;
        endDate: string;
      };
      zite: {
        description: string[];
        startDate: string;
        endDate: string;
      };
      gainapp: {
        description: string[];
        startDate: string;
        endDate: string;
      };
    };
    projectsSection: string;
    projects: {
      buno: {
        description: string;
      },
      walletly: {
        description: string;
      },
      powerbutton: {
        description: string;
      },
      energialy: {
        description: string;
      },
    },
    codeButton: string;
    previewButton: string;
    footer: string;
  };
};

export const translations: Translations = {
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
    },
    greeting: "Hi, I am",
    description: `A full-stack web developer from Buenos Aires with 2+ years of experience
    building for the web. I care a lot about building a great product that users
    love. I'm always looking for new patterns, technologies, and people to learn
    from and improve my work. On every team I work on, I make great efforts to be
    a positive influence, deliver an excellent user experience, and help to
    build a maintainable architecture.`,
    experienceSection: "Work Experience",
    techStack: "Tech Stack",
    jobs: {
      taktiful: {
        description: [
          "Developed and maintained three products for the digital printing industry, adding new features while improving scalability and user experience across all the layers of the stack.",
          "Led the development of an Angular project from scratch. Developed a design software similar to Canva, integrating Meta's AI model “Segment Anything Model (SAM)” to generate SVG masks from images and produce ready-to-print PDF files for embellishment workflows. The MVP was showcased at the PRINTING United Expo 2025 in Las Vegas, attracting interest and initiating business opportunities with companies such as Staples and Shutterstock.",
        ],
        startDate: "Jul 2024",
        endDate: "Present",
      },
      zite: {
        description: [
          "Delivered end-to-end feature development across frontend and backend using Next.js, React, TypeScript, Node.js, and PostgreSQL in an AI-powered SaaS platform for private market investments.",
          "Migrated the platform's styling system to Shadcn UI components, including a full modal redesign and the development of dynamic table visibility controls used throughout the application.",
          "Built and maintained a layout system to visualize and manage kanban-style flows, helping users navigate complex investment processes more efficiently.",
        ],
        startDate: "Apr 2024",
        endDate: "Jul 2024",
      },
      gainapp: {
        description: [
          "Developed and maintained Gain's main website and blog, ensuring performance, brand consistency, and SEO best practices across the site.",
          "Implemented and configured digital marketing technologies such as UTM tags, tracking pixels, and integrations with software review platforms including G2, Capterra, GetApp, and Software Advice.",
          "Designed, built, and managed marketing and product dashboards using event-based analytics tools like Mixpanel and Hotjar, providing actionable insights to Product and Growth teams.",
        ],
        startDate: "Sep 2023",
        endDate: "Mar 2024",
      },
    },
    projectsSection: "Projects",
    projects: {
      buno: {
        description: `Buno is an AI-powered platform that connects clients with attorneys. It offers a 
        seamless way to find, hire, and collaborate with qualified attorneys for legal services. 
        It also allows attorneys to offer their services and increase their client base.`,
      },
      walletly: {
        description: `Walletly is a fully functional demo of a modern onboarding experience for digital 
        wallets. It focuses on creating smooth, validated, multi-step signup flows — ideal for fintech 
        and finance-related products where regulatory and KYC compliance is required.`
      },
      powerbutton: {
        description: `Final Project of the Next.js course at Coderhouse. Power Button is an e-commerce 
        built with Next.js, integrating authentication services and databases, with optimal performance 
        on SEO optimization.`,
      },
      energialy: {
        description: `Energialy is a platform to integrate into the Value Chain, manage contracts between 
        SMEs, and access financing for energy services and projects in Vaca Muerta. A single platform to 
        hire and be hired.`,
      },
    },
    codeButton: "Code",
    previewButton: "Preview",
    footer: "Almost All Rights Reserved",
  },
  es: {
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
    },
    greeting: "Hola, soy",
    description: `Desarrollador web full-stack de Buenos Aires con 2+ años de experiencia
    construyendo para la web. Me importa mucho construir un gran producto que los usuarios 
    disfruten usar. Siempre estoy buscando nuevos patrones de diseño, tecnologías y personas de las que aprender 
    y mejorar mi trabajo. En cada equipo en que trabajo, me esfuerzo mucho por ser 
    una influencia positiva, ofrecer una excelente experiencia de usuario y ayudar 
    a construir una arquitectura mantenible.`,
    experienceSection: "Experiencia Laboral",
    techStack: "Tecnologías",
    jobs: {
      taktiful: {
        description: [
          "Desarrollo y mantenimiento de tres productos para la industria de la impresión digital, agregando nuevas funcionalidades, la escalabilidad y la experiencia de usuario en todo el stack.",
          "Lideré el desarrollo de una aplicación en Angular desde cero. Desarrollé un software de diseño tipo Canva, integrando un modelo de Inteligencia Artificial de Meta “Segment Anything Model (SAM)” para generar máscaras SVG a partir de imágenes y producir archivos PDF ready-to-print para flujos de embellishment. El MVP fue presentado en la feria PRINTING United Expo 2025 en Las Vegas, despertando interés y dando inicio a negocios con empresas como Staples y Shutterstock.",
        ],
        startDate: "jul. 2024",
        endDate: "Actualidad",
      },
      zite: {
        description: [
          "Desarrollo end-to-end de funcionalidades en frontend y backend utilizando Next.js, React, TypeScript, Node.js y PostgreSQL en una plataforma SaaS potenciada con IA para inversiones en mercados privados.",
          "Migré el sistema de estilos de la plataforma a componentes de Shadcn UI, incluyendo la renovación de modales y el desarrollo de controles dinámicos de visibilidad de tablas utilizados en toda la aplicación.",
          "Diseñé y desarrollé un sistema de layout para visualizar y gestionar flujos tipo kanban, ayudando a los usuarios a navegar por procesos de inversión complejos de forma más clara y eficiente."
        ],
        startDate: "abr. 2024",
        endDate: "jul. 2024",
      },
      gainapp: {
        description: [
          "Desarrollé y mantuve el sitio web principal y el blog de Gain, asegurando rendimiento, coherencia visual con la marca y buenas prácticas de SEO en todo el sitio.",
          "Implementé y configuré tecnologías de marketing digital como UTM tags, tracking pixels, integraciones con plataformas de reseñas de software como G2, Capterra, GetApp y Software Advice.",
          "Implementé, diseñé, construí y gestioné dashboards de marketing y producto utilizando herramientas de analítica basadas en eventos como Mixpanel y Hotjar, brindando insights accionables a los equipos de Producto y Growth.",
        ],
        startDate: "sept. 2023",
        endDate: "mar. 2024",
      },
    },
    projectsSection: "Proyectos",
    projects: {
      buno: {
        description: `Buno es una plataforma potenciada con IA que conecta clientes con abogados. 
        Es una nueva forma de encontrar, contratar y colaborar con abogados calificados para cualquier tipo 
        de servicio legal. También permite a los abogados ofrecer sus servicios y aumentar su cartera de clientes.`,
      },
      walletly: {
        description: `Walletly es una demo de un onboarding flow moderno para billeteras digitales. 
        Se enfoca en crear flujos de sign up fluídos, validados, persistentes y de varias etapas — ideales 
        para productos financieros y de fintech donde se requiere cumplimiento regulatorio y KYC.`,
      },
      powerbutton: {
        description: `Proyecto final del curso de Next.js en Coderhouse. Power Button es un 
        e-commerce construido con Next.js, integrando servicios de autenticación y bases de datos, 
        con un rendimiento óptimo en optimización SEO.`,
      },
      energialy: {
        description: `Energialy es una plataforma para integrarse a la cadena de valor, gestionar 
        contratos entre PYMEs y acceder a financiamiento para servicios y proyectos energéticos en 
        Vaca Muerta. Una plataforma única para contratar y ser contratado.`,
      },
    },
    codeButton: "Repositorio",
    previewButton: "Deploy",
    footer: "Casi todos los derechos reservados"
  },
};
