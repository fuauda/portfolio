import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Json Tree",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/userauth.jpg",
      DARK: "/images/projects/userauth.jpg",
    },
  },

  {
    index: 2,
    title: "Kanban",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/realstate.jpg",
      DARK: "/images/projects/realstate.jpg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "User  auth",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/userauth.jpg",
      "/images/projects/userauth.jpg",
    ],
    description:
      "A user authentication system built with Node.js that allows users to securely register, log in, and manage their sessions. It uses JWT for token-based authentication and provides a seamless, secure experience for managing user access.",
    sourceCodeHref: "#",
    
  },
  {
    name: "A real state app",
    favicon: "/images/projects/logos/realstate.ico",
    imageUrl: [
      "/images/projects/realstate.jpg",
      "/images/projects/realstate.jpg",
      "/images/projects/realstate.jpg",
    ],
    description:
      "A real estate website that showcases property listings with key details like bedrooms, bathrooms, and size. It features an intuitive design and easy navigation, allowing users to quickly find and explore available properties. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    sourceCodeHref: "#",
    
  },

  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
    liveWebsiteHref: siteMetadata.siteUrl,
  },



  {
    name: "Stock Managment system",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Stock Management System that helps businesses track their inventory and deliveries. It keeps stock levels updated, alerts for reorders, and monitors products from warehouse to delivery, making inventory easy to manage and ensuring timely shipments.",
    sourceCodeHref: "https://github.com/fuauda/BITS/tree/main/my-vite-app ",
  },
];
