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
      depay: {
        description: string[];
        startDate: string;
        endDate: string;
      };
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
      hardy: {
        description: string;
      },
      walletly: {
        description: string;
      },
      buno: {
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
    greeting: "Hi, I'm",
    description: `Software developer from Buenos Aires with 3+ years of experience. I care deeply about delivering quality software, focusing on architecture and system design. I am always looking for new patterns, technologies, and people to learn from to improve my work. On every team I join, I strive to be a positive influence and someone my teammates can count on, helping us deliver tangible results on time.`,
    experienceSection: "Work Experience",
    techStack: "Tech Stack",
    jobs: {
      depay: {
        description: [
          `Build and operate the settlement engine that moves customer funds across accounts and providers.`,
          `Integrated 8 payment and crypto providers and launched 3 new payment rails to production.`,
          `Migrated the legacy funds API from an ECS monolith to Balance Engine: 10 EKS workers using Kafka, PostgreSQL, and a Debezium outbox, now in production.`,
          `Rolled out a “build once, promote everywhere” CI/CD pipeline across 4 repositories.`,
          `Technical reference for a team of 6 engineers through code reviews, design spikes, and architecture conventions.`,
        ],
        startDate: "Nov 2025",
        endDate: "Present",
      },
      taktiful: {
        description: [
          `Lead developer of the company's AI platform: a single API providing AI-generated embellishment masks and print-ready PDFs to every Taktiful product and client.`,
          `Reduced vendor lock-in and outage risk by routing requests across 5+ AI providers with automatic fallback.`,
          `Turned an internal tool into a sellable product with multi-tenant API keys and per-client cost tracking for billing.`,
          `Led the development of an AI-powered, Canva-like app for creating print-ready embellishment files without Illustrator, Photoshop, or a designer.`,
          `Showcased the MVP at PRINTING United Expo 2025 in Las Vegas, starting business conversations with Staples and Shutterstock.`,
        ],
        startDate: "Jul 2024",
        endDate: "Nov 2025",
      },
      zite: {
        description: [
          `Developed end-to-end features for a SaaS platform designed to streamline investment workflows, 
          particularly in private markets where assets like stocks, debt, and real estate are traded privately.`,
        ],
        startDate: "Apr 2024",
        endDate: "Jul 2024",
      },
      gainapp: {
        description: [
          `Developed Gain's main website and blog. Implemented digital marketing technologies. 
          Designed and built marketing and product dashboards using event-based analytics 
          tools like Mixpanel and Hotjar.`,
        ],
        startDate: "Sep 2023",
        endDate: "Jun 2024",
      },
    },
    projectsSection: "Projects",
    projects: {
      hardy: {
        description: `Hardy is a website for a peanut butter company. 
        The website showcases the products, recipes, the brand story, and provides an easy way for 
        potential customers to get in touch. It was designed with a focus on the brand's 
        visual identity, emphasizing warmth and simplicity in the user experience.`,
      },
      walletly: {
        description: `Walletly is a fully functional demo of a modern onboarding experience for digital 
        wallets. It focuses on creating smooth, validated, multi-step signup flows — ideal for fintech 
        and finance-related products where regulatory and KYC compliance is required.`
      },
      buno: {
        description: `Buno is an AI-powered platform that connects clients with attorneys. It offers a 
        seamless way to find, hire, and collaborate with qualified attorneys for legal services. 
        It also allows attorneys to offer their services and increase their client base.`,
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
    description: `Desarrollador de software de Buenos Aires con más de 3 años de experiencia. Me importa mucho entregar software de calidad, con foco en la arquitectura y el diseño de sistemas. Siempre busco nuevos patrones, tecnologías y personas de quienes aprender para mejorar mi trabajo. En cada equipo al que me sumo, me esfuerzo por ser una influencia positiva y alguien en quien mis compañeros puedan confiar, ayudándonos a entregar resultados concretos a tiempo.`,
    experienceSection: "Experiencia Laboral",
    techStack: "Tecnologías",
    jobs: {
      depay: {
        description: [
          `Desarrollo y opero el motor de liquidación que mueve fondos de clientes entre cuentas y proveedores.`,
          `Integré 8 proveedores de pagos y cripto y llevé 3 nuevas vías de pago a producción.`,
          `Migré la API de fondos de un monolito en ECS a Balance Engine: 10 workers en EKS con Kafka, PostgreSQL y un outbox con Debezium, ya en producción.`,
          `Implementé un pipeline de CI/CD de “compilar una vez, promover a todos los entornos” en 4 repositorios.`,
          `Soy referente técnico de un equipo de 6 ingenieros: revisiones de código, exploración de soluciones y convenciones de arquitectura.`,
        ],
        startDate: "nov. 2025",
        endDate: "Presente",
      },
      taktiful: {
        description: [
          `Fui el desarrollador principal de la plataforma de IA de la empresa: una API que genera máscaras para acabados de impresión y PDFs listos para imprimir para todos los productos y clientes de Taktiful.`,
          `Reduje la dependencia de proveedores y el riesgo de interrupciones al distribuir solicitudes entre más de 5 proveedores de IA con fallback automático.`,
          `Convertí una herramienta interna en un producto comercializable con claves de API por cliente y seguimiento de costos para facturación.`,
          `Lideré el desarrollo de una aplicación de diseño tipo Canva con IA para crear archivos de acabados listos para imprimir sin Illustrator, Photoshop ni un diseñador.`,
          `Presenté el MVP en PRINTING United Expo 2025 en Las Vegas, lo que inició conversaciones comerciales con Staples y Shutterstock.`,
        ],
        startDate: "jul. 2024",
        endDate: "nov. 2025",
      },
      zite: {
        description: [
          `Desarrollé features completos en una plataforma SaaS diseñada para agilizar los flujos 
          de trabajo de inversión, especialmente en los mercados privados donde se negocian activos 
          como acciones, deuda y bienes raíces de forma privada.`,
        ],
        startDate: "abr. 2024",
        endDate: "jul. 2024",
      },
      gainapp: {
        description: [
          `Desarrollé y mantuve el sitio web principal y el blog de Gain. 
          Implementé tecnologías de marketing digital como optimización SEO y UTM tags. 
          Construí dashboards para el equipo de Growth y Producto en Mixpanel y Hotjar.`,
        ],
        startDate: "sept. 2023",
        endDate: "jun. 2024",
      },
    },
    projectsSection: "Proyectos",
    projects: {
      hardy: {
        description: `Hardy es una landing page para una marca de cremas de maní. 
        El sitio presenta los productos, recetas, la historia de la marca y facilita el contacto con potenciales clientes. 
        Fue diseñado con foco en la identidad visual de la marca, priorizando la calidez y 
        simplicidad en la experiencia de usuario.`,
      },
      walletly: {
        description: `Walletly es una demo de un onboarding flow moderno para billeteras digitales. 
        Se enfoca en crear flujos de sign up fluídos, validados, persistentes y de varias etapas — ideales 
        para productos financieros y de fintech donde se requiere cumplimiento regulatorio y KYC.`,
      },
      buno: {
        description: `Buno es una plataforma potenciada con IA que conecta clientes con abogados. 
        Es una nueva forma de encontrar, contratar y colaborar con abogados calificados para cualquier tipo 
        de servicio legal. También permite a los abogados ofrecer sus servicios y aumentar su cartera de clientes.`,
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
