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
    description: `Full-stack developer from Buenos Aires with 3+ years of experience
    building for the web.`,
    experienceSection: "Work Experience",
    techStack: "Tech Stack",
    jobs: {
      depay: {
        description: [
          `Developing the real-time payment rails of Latin America.`,
        ],
        startDate: "Nov 2025",
        endDate: "Present",
      },
      taktiful: {
        description: [
          `Led the development of a software similar to Canva, integrating Meta's AI model “Segment 
          Anything Model (SAM)” to generate SVG masks from images and produce ready-to-print PDF files 
          for embellishment workflows. The MVP was showcased at the PRINTING United Expo 2025 in Las 
          Vegas, attracting interest and initiating business opportunities with companies such as Staples 
          and Shutterstock.`,
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
        endDate: "Mar 2024",
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
    description: `Desarrollador full-stack de Buenos Aires con 3+ años de experiencia
    construyendo para la web.`,
    experienceSection: "Experiencia Laboral",
    techStack: "Tecnologías",
    jobs: {
      depay: {
        description: [
          `Desarrollando la red de pagos en tiempo real más grande de Latinoamérica.`,
        ],
        startDate: "nov. 2025",
        endDate: "Presente",
      },
      taktiful: {
        description: [
          `Lideré el desarrollo de un software de diseño tipo Canva, integrando un modelo de Inteligencia 
          Artificial de Meta “Segment Anything Model (SAM)” para generar máscaras SVG a partir de imágenes 
          y producir archivos PDF ready-to-print para flujos de embellishment. El MVP fue presentado en 
          la feria PRINTING United Expo 2025 en Las Vegas, despertando interés y dando inicio a negocios 
          con empresas como Staples y Shutterstock.`,
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
        endDate: "mar. 2024",
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
