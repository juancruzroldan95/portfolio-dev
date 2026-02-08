export const SITE = {
  title: "Juan Cruz Roldan",
};

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/juancruzroldan95",
    linkTitle: `${SITE.title} on Github`,
    icon: "github",
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/juancruzroldan",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: "linkedin",
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/chakaroldan/",
    linkTitle: `${SITE.title} on Instagram`,
    icon: "instagram",
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:juancruz.roldan19@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: "mail",
    active: true,
  },
] as const;
