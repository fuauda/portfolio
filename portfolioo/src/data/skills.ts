import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";

import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";


// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";

import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";


// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },

      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },

    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },

      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },


      {
        name: "Vite",
        icon: ViteSvg,
      },

    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },

    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },

      {
        name: "Prisma",
        icon: SiPrisma,
      },
    ],
  },


  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
    
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
