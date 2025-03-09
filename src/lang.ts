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
        description: string;
        startDate: string;
        endDate: string;
      };
      zite: {
        description: string;
        startDate: string;
        endDate: string;
      };
      gainapp: {
        description: string;
        startDate: string;
        endDate: string;
      };
    };
    projectsSection: string;
    projects: {
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
        description: `Development and maintenance of three products for clients in the
        digital printing industry, optimizing processes and enhancing user experience.
        Implementation of new features across all layers of the stack, backend and frontend
        performance optimization, bug resolution, and continuous improvement, ensuring
        platform scalability.`,
        startDate: "July 2024",
        endDate: "Present",
      },
      zite: {
        description: `Full-stack development of a platform designed to improve private market
        investment processes. Focus on user experience, leading the product's UI redesign.
        Responsible for bug resolution, continuous application improvements, and contributing
        new ideas to the product. Deep understanding of the business to provide digital
        solutions that enable investors to manage their portfolios and centralize their
        workflow in a single platform.`,
        startDate: "Apr. 2024",
        endDate: "July 2024",
      },
      gainapp: {
        description: `Growth + Software Engineering (+ Data). Develop and maintain Gain's main
        website and blog. Implement and configure campaign-related web technology such as UTM
        tags, tracking pixels, SEO, software vendor reviews and Google Analytics. Build and
        follow-up marketing and product dashboards in event-driven analytics software such as
        Mixpanel and Hotjar.`,
        startDate: "Sept. 2023",
        endDate: "Mar. 2024",
      },
    },
    projectsSection: "Projects",
    projects: {
      buno: {
        description: `SaaS that connects businesses with freelance attorneys for on-demand legal 
        services. It offers a seamless way to find, hire, and collaborate with lawyers for contracts, 
        business formation, and more—providing flexible, cost-effective legal support.`,
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
        description: `Desarrollo y mantenimiento de tres productos para clientes en la
        industria de la impresión digital, optimizando procesos y mejorando la experiencia
        del usuario. Implementación de nuevas funcionalidades en todas las capas del stack,
        optimización del rendimiento del backend y frontend, resolución de bugs y mejora
        continua, asegurando la escalabilidad de las plataformas.`,
        startDate: "jul. 2024",
        endDate: "Actualidad",
      },
      zite: {
        description: `Desarrollo full-stack de una plataforma diseñada para mejorar los procesos
        de inversión del mercado privado. Priorización de la experiencia del usuario;
        rediseño de la UI del producto. Encargado de resolver bugs, mejora continua de 
        la aplicación y aportar nuevas ideas al producto. Profunda comprensión del negocio
        para ofrecer soluciones digitales que permitan a los inversores administrar su
        portafolio y centralizar su workflow.`,
        startDate: "abr. 2024",
        endDate: "jul. 2024",
      },
      gainapp: {
        description: `Growth + Software Engineering (+ Data). Desarrollar y mantener el website
        y el blog de Gain. Implementar y configurar tecnologías web para campañas de marketing
        como UTM tags, tracking pixels, SEO, software vendor reviews y Google Analytics.
        Implementar y diseñar dashboards de datos con métricas de Marketing, Producto y website
        en herramientas event-driven como Mixpanel y Hotjar.`,
        startDate: "sept. 2023",
        endDate: "mar. 2024",
      },
    },
    projectsSection: "Proyectos",
    projects: {
      buno: {
        description: `SaaS que conecta personas y empresas con abogados independientes para servicios 
        legales a demanda. Ofrece una manera fluida de encontrar, contratar y colaborar con 
        abogados para contratos, formación de empresas y más, proporcionando un soporte legal 
        flexible y rentable.`,
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
