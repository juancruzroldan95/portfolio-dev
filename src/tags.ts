import NextJS from "./icons/NextJS.astro";
import Tailwind from "./icons/Tailwind.astro";
import React from "./icons/React.astro";
import TypeScript from "./icons/TypeScript.astro";
import JavaScript from "./icons/JavaScript.astro";
import NodeJS from "./icons/NodeJS.astro";
import Express from "./icons/ExpressJS.astro";
import Firebase from "./icons/Firebase.astro";
import MongoDB from "./icons/MongoDB.astro";
import PostgreSQL from "./icons/PostgreSQL.astro";
import MySQL from "./icons/MySQL.astro";
import Docker from "./icons/Docker.astro";
import AWS from "./icons/AWS.astro";
import Vercel from "./icons/Vercel.astro";
import ShadCN from "./icons/ShadCN.astro";
import Drizzle from "./icons/Drizzle.astro";
import Sequelize from "./icons/Sequelize.astro";
import Neon from "./icons/Neon.astro";
import Zod from "./icons/Zod.astro";
import Gemini from "./icons/Gemini.astro";
import Zustand from "./icons/Zustand.astro";

export const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  REACT: {
    name: "React",
    class: "bg-[#20232A] text-white",
    icon: React,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#3178C6] text-white",
    icon: TypeScript,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-[#F7DF1E] text-black",
    icon: JavaScript,
  },
  NODE: {
    name: "Node.js",
    class: "bg-[#026E00] text-white",
    icon: NodeJS,
  },
  EXPRESS: {
    name: "Express.js",
    class: "bg-[#000000] text-white",
    icon: Express,
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-stone-800 text-white",
    icon: Firebase,
  },
  MONGODB: {
    name: "MongoDB",
    class: "bg-[#113422] text-[#00ED64]",
    icon: MongoDB,
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    class: "bg-[#002B36] text-[#4c9ee0]",
    icon: PostgreSQL,
  },
  MYSQL: {
    name: "MySQL",
    class: "bg-gray-100 text-[#f29221]",
    icon: MySQL,
  },
  DOCKER: {
    name: "Docker",
    class: "bg-[#0c2545] text-[#0db7ed]",
    icon: Docker,
  },
  AWS: {
    name: "AWS",
    class: "bg-[#232F3E] text-[#FF9900]",
    icon: AWS,
  },
  VERCEL: {
    name: "Vercel",
    class: "bg-black text-white",
    icon: Vercel,
  },
  SHADCNUI: {
    name: "ShadCN UI",
    class: "bg-black text-white",
    icon: ShadCN,
  },
  DRIZZLE: {
    name: "Drizzle ORM",
    class: "bg-black text-white",
    icon: Drizzle,
  },
  SEQUELIZE: {
    name: "Sequelize",
    class: "bg-stone-800 text-white",
    icon: Sequelize,
  },
  NEON: {
    name: "Neon",
    class: "bg-black text-white",
    icon: Neon,
  },
  ZOD: {
    name: "Zod",
    class: "bg-white text-black",
    icon: Zod,
  },
  GEMINI: {
    name: "Gemini",
    class: "bg-sky-100 text-black",
    icon: Gemini,
  },
  ZUSTAND: {
    name: "Zustand",
    class: "bg-yellow-500 text-blue-900",
    icon: Zustand,
  },
} as const;