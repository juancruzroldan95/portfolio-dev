type Translations = {
  [key in 'en' | 'es']: {
    nav: {
      home: string;
      experience: string;
      projects: string;
    };
    greeting: string;
    description: string;
    workExperience: string;
    projects: string;
  };
};

export const translations: Translations = {
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects"
    },
    greeting: "Hi, I am",
    description: `A full-stack web developer from Buenos Aires with 2+ years of experience
    building for the web. I care a lot about building a great product that users
    love. I'm always looking for new patterns, technologies, and people to learn
    from and improve my work. On every team I work on, I make great efforts to be
    a positive influence, deliver an excellent user experience, and help the team
    build a maintainable architecture.`,
    workExperience: "Work Experience",
    projects: "Projects"
  },
  es: {
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos"
    },
    greeting: "Hola, soy",
    description: `Desarrollador web full-stack de Buenos Aires con 2+ años de experiencia
    construyendo para la web. Me importa mucho construir un gran producto que los usuarios 
    disfruten usar. Siempre estoy buscando nuevos patrones de diseño, tecnologías y personas de las que aprender 
    y mejorar mi trabajo. En cada equipo en el que trabajo, me esfuerzo mucho por ser 
    una influencia positiva, ofrecer una excelente experiencia de usuario y ayudar al equipo 
    a construir una arquitectura mantenible.`,
    workExperience: "Experiencia Laboral",
    projects: "Proyectos"
  },
};
