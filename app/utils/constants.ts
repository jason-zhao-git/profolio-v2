import {
  RiMailLine,
  RiTwitterXLine,
  RiLinkedinLine,
  RiGithubLine,
  RiFileTextLine,
  RiGitRepositoryLine,
} from "react-icons/ri";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  tags: string[];
  publishedDate: string;
  readTime: string;
  author: string;
  link: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  description: string;
  websiteLink: string;
  endDate: string | null;
  startDate: string;
  currentlyWorking: boolean;
  technologies: string[];
}

export interface SocialLink {
  name: string;
  icon: React.ElementType;
  href: string;
}

export const projects: Project[] = [
  {
    title: "FileDrop",
    description:
      "Launched open-source platform for secure file sharing using WebRTC. Implemented seamless peer-to-peer file transfers and real-time chat, with cross-platform compatibility.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Socket.io",
      "WebRTC",
    ],
    liveLink: "https://file-drops.vercel.app/",
    githubLink: "https://github.com/YugBhanushali/FileDrop",
  },
  {
    title: "Code To Image",
    description:
      "Developed a tool enabling users to create visually appealing code snippets with customizable fonts, themes, and backgrounds. Featured on Product Hunt, ranked 48th of the day.",
    technologies: ["React.js", "Styled-Components", "Vercel"],
    liveLink: "https://codetoimg.vercel.app/",
    githubLink: "https://github.com/YugBhanushali/code-to-image",
  },
  {
    title: "KeyBeats",
    description:
      "Realistic mechanical keyboard sounds with 13 different switch profiles. A menubar application with adjustable volume control and an easy-to-use interface.",
    technologies: ["Electron.js", "JavaScript"],
    liveLink: "https://keybeats.yugbhanushali.com/",
    githubLink: "https://github.com/YugBhanushali/keyBeats",
  },
  {
    title: "Git Fetch Pro",
    description:
      "An npm package that allows users to easily download specific subfolders from GitHub repositories, offering both a user-friendly interface and a CLI tool for advanced usage. Users can download only what they need without cloning the entire repository.",
    technologies: ["TypeScript", "Node.js", "NPM"],
    liveLink: "https://gitfetchpro.vercel.app/", // You can add the live link here if available
    githubLink: "https://github.com/YugBhanushali/git-fetch-pro", // Replace with the GitHub repo link
  },
  {
    title: "ZipURL",
    description:
      "URL shortening service with customizable links, link management, click analytics, and QR code generation for easy sharing.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    liveLink: "https://zipurl.vercel.app/",
    githubLink: "https://github.com/YugBhanushali/ZipURL",
  },
  {
    title: "WebWall",
    description:
      "Command-line tool to block and unblock websites by modifying the hosts file, providing efficient website access management.",
    technologies: ["JavaScript", "npm-package"],
    liveLink: "https://www.npmjs.com/package/webwall",
    githubLink: "https://github.com/YugBhanushali/webwall",
  },
  {
    title: "Supabase Contribution",
    description:
      "Fixed a critical bug in Supabase Website, improving the app's stability and preventing crashes when hovering over search results containing quotes.",
    technologies: ["TypeScript", "React.js"],
    liveLink: "https://supabase.com",
    githubLink: "https://github.com/supabase/supabase/pull/18302",
  },
  {
    title: "Event Hub",
    description:
      "Engineered a student event platform with secure club sign-in and intuitive event management features, including a card-based UI for event highlighting.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    liveLink: "hhttps://eventhubs.vercel.app/",
    githubLink: "https://github.com/YugBhanushali/Event-Hub-Frontend",
  },
];

export const workExperiences: WorkExperience[] = [
  {
    company: "Tracks and Towers Pvt Ltd",
    role: "Founding Engineer",
    description: `
      Building scalable backend systems and managing deployments, with occasional frontend development.
    `,
    websiteLink: "https://tracksandtowers.com",
    startDate: "March 2024",
    endDate: "December 2024",
    currentlyWorking: false,
    technologies: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "Supabase",
      "Shadcn",
      "NextAuth",
      "Zod",
      "Prisma",
      "VPS",
      "Docker",
      "CI/CD",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    company: "Healiom Inc",
    role: "Frontend Development Intern",
    description: `
      Worked on developing and improving the patient portal.
    `,
    websiteLink: "https://healiom.com",
    startDate: "March 2024",
    endDate: "May 2024",
    currentlyWorking: false,
    technologies: [
      "React.js",
      "Redux",
      "JavaScript",
      "Shadcn UI",
      "GetStream SDK",
    ],
  },
];
export const skills = [
  {
    name: "React.js",
    categories: ["Frontend"],
    src: "/skills/react.svg",
    proficiency: 3,
  },
  {
    name: "Next.js",
    categories: ["Frontend", "Backend"],
    src: "/skills/nextjs.svg",
    proficiency: 4,
  },
  {
    name: "HTML",
    categories: ["Frontend"],
    src: "/skills/html.svg",
    proficiency: 5,
  },
  {
    name: "CSS",
    categories: ["Frontend"],
    src: "/skills/css.svg",
    proficiency: 5,
  },
  {
    name: "Tailwind CSS",
    categories: ["Frontend"],
    src: "/skills/tailwind.svg",
    proficiency: 3,
  },
  {
    name: "Material UI",
    categories: ["Frontend"],
    src: "/skills/mui.svg",
    proficiency: 2,
  },
  {
    name: "Python",
    categories: ["AI/ML", "Programming Language", "Backend", "Bioinformatics"],
    src: "/skills/python.svg",
    proficiency: 5,
  },
  {
    name: "Java",
    categories: ["Programming Language", "Backend"],
    src: "/skills/java.svg",
    proficiency: 5,
  },
  {
    name: "C",
    categories: ["Programming Language", "Backend"],
    src: "/skills/c.svg",
    proficiency: 4,
  },
  {
    name: "C++",
    categories: ["Programming Language"],
    src: "/skills/cplusplus.svg",
    proficiency: 1,
  },
  {
    name: "C#",
    categories: ["Programming Language"],
    src: "/skills/csharp.svg",
    proficiency: 1,
  },
  {
    name: "SQL",
    categories: ["Database", "Backend"],
    src: "/skills/sql.svg",
    proficiency: 5,
  },
  {
    name: "SQLAlchemy",
    categories: ["Backend", "Database"],
    src: "/skills/sqlalchemy.svg",
    proficiency: 3,
  },
  {
    name: "Alembic",
    categories: ["Backend", "Database"],
    src: "/skills/alembic.svg",
    proficiency: 3,
  },
  {
    name: "JavaScript",
    categories: ["Programming Language", "Frontend"],
    src: "/skills/javascript.svg",
    proficiency: 3,
  },
  {
    name: "Bash",
    categories: ["Backend", "Programming Language"],
    src: "/skills/bash.svg",
    proficiency: 3,
  },
  {
    name: "x86",
    categories: ["Programming Language"],
    src: "/skills/x86.svg",
    proficiency: 1,
  },
  {
    name: "Go",
    categories: ["Programming Language", "Backend"],
    src: "/skills/go.svg",
    proficiency: 3,
  },
  {
    name: "Django",
    categories: ["Backend"],
    src: "/skills/django.svg",
    proficiency: 4,
  },
  {
    name: "Django REST API",
    categories: ["Backend"],
    src: "/skills/DRF.svg",
    proficiency: 2,
  },
  {
    name: "FastAPI",
    categories: ["Backend"],
    src: "/skills/DRF.svg",
    proficiency: 3,
  },
  {
    name: "Prisma",
    categories: ["Backend"],
    src: "/skills/prisma.svg",
    proficiency: 1,
  },
  {
    name: "Postgre SQL",
    categories: ["Database", "Backend"],
    src: "/skills/postgresql.svg",
    proficiency: 2,
  },
  {
    name: "MySQL",
    categories: ["Database", "Backend"],
    src: "/skills/mysql.svg",
    proficiency: 4,
  },
  {
    name: "AWS",
    categories: ["Tools & Platforms", "Backend"],
    src: "/skills/aws.svg",
    proficiency: 2,
  },
  {
    name: "GIT",
    categories: ["Tools & Platforms"],
    src: "/skills/git.svg",
    proficiency: 5,
  },
  {
    name: "VS Code",
    categories: ["Tools & Platforms"],
    src: "/skills/vscode.svg",
    proficiency: 5,
  },
  {
    name: "PyCharm",
    categories: ["Tools & Platforms"],
    src: "/skills/pycharm.svg",
    proficiency: 2,
  },
  {
    name: "Slack",
    categories: ["Tools & Platforms"],
    src: "/skills/slack.svg",
    proficiency: 5,
  },
  {
    name: "Unix/ Linux",
    categories: ["Tools & Platforms"],
    src: "/skills/linux.svg",
    proficiency: 4,
  },
  {
    name: "PyTorch",
    categories: ["AI/ML", "Bioinformatics"],
    src: "/skills/pytorch.svg",
    proficiency: 3,
  },
  {
    name: "Scikit-learn",
    categories: ["AI/ML", "Data Science", "Bioinformatics"],
    src: "/skills/scikit-learn.svg",
    proficiency: 2,
  },
  {
    name: "NumPy",
    categories: ["Data Science", "Bioinformatics", "AI/ML"],
    src: "/skills/numpy.svg",
    proficiency: 4,
  },
  {
    name: "Pandas",
    categories: ["Data Science", "Bioinformatics", "AI/ML"],
    src: "/skills/pandas.svg",
    proficiency: 4,
  },
  {
    name: "Matplot lib",
    categories: ["Data Science", "Bioinformatics"],
    src: "/skills/matplotlib.svg",
    proficiency: 3,
  },
  {
    name: "Seaborn",
    categories: ["Data Science", "Bioinformatics"],
    src: "/skills/seaborn.svg",
    proficiency: 2,
  },
  {
    name: "OpenMM",
    categories: ["Bioinformatics"],
    src: "/skills/openmm.svg",
    proficiency: 3,
  },
  {
    name: "GROMACS",
    categories: ["Bioinformatics"],
    src: "/skills/gromacs.svg",
    proficiency: 3,
  },
  {
    name: "Mandarin",
    categories: ["Human Language"],
    src: "/skills/mandarin.svg",
    proficiency: 5,
  },
  {
    name: "English",
    categories: ["Human Language"],
    src: "/skills/english.svg",
    proficiency: 5,
  },
  {
    name: "Japanese",
    categories: ["Human Language"],
    src: "/skills/japanese.svg",
    proficiency: 2,
  },
  {
    name: "Swimming",
    categories: ["Sports/Hobbies"],
    src: "/skills/swimming.svg",
    proficiency: 2,
  },
  {
    name: "Anime",
    categories: ["Sports/Hobbies"],
    src: "/skills/anime.svg",
    proficiency: 5,
  },
  {
    name: "Minecraft",
    categories: ["Sports/Hobbies"],
    src: "/skills/minecraft.svg",
    proficiency: 5,
  },
  {
    name: "Muay Thai",
    categories: ["Sports/Hobbies"],
    src: "/skills/taekwondo.svg",
    proficiency: 3,
  },
  {
    name: "Weight Training",
    categories: ["Sports/Hobbies"],
    src: "/skills/taekwondo.svg",
    proficiency: 5,
  },
  {
    name: "Baking",
    categories: ["Sports/Hobbies"],
    src: "/skills/baking.svg",
    proficiency: 4,
  },
  {
    name: "Culinary Arts",
    categories: ["Sports/Hobbies"],
    src: "/skills/culinary_arts.svg",
    proficiency: 3,
  },
  {
    name: "Hiking",
    categories: ["Sports/Hobbies"],
    src: "/skills/hiking.svg",
    proficiency: 3,
  },
  {
    name: "Vocal Performance",
    categories: ["Sports/Hobbies"],
    src: "/skills/singing.svg",
    proficiency: 4,
  },
  {
    name: "Agile",
    categories: ["Soft Skills"],
    src: "/skills/agile.svg",
    proficiency: 4,
  },
  {
    name: "Team Collaboration",
    categories: ["Soft Skills"],
    src: "/skills/collaboration.svg",
    proficiency: 4,
  },
  {
    name: "Creative Problem Solving",
    categories: ["Soft Skills"],
    src: "/skills/problem_solving.svg",
    proficiency: 4,
  },
  {
    name: "Time Management",
    categories: ["Soft Skills"],
    src: "/skills/time_management.svg",
    proficiency: 4,
  },
  {
    name: "Cypress",
    categories: ["Tools & Platforms"],
    src: "/skills/cypress.svg",
    proficiency: 3,
  },
  {
    name: "Jest",
    categories: ["Tools & Platforms"],
    src: "/skills/jest.svg",
    proficiency: 3,
  },
  {
    name: "CI/CD",
    categories: ["Tools & Platforms"],
    src: "/skills/ci/cd.svg",
    proficiency: 3,
  },
  {
    name: "TypeScript",
    categories: ["Programming Language", "Frontend"],
    src: "/skills/typescript.svg",
    proficiency: 3,
  },
  {
    name: "Node.js",
    categories: ["Backend"],
    src: "/skills/nodejs.svg",
    proficiency: 1,
  },
  {
    name: "Docker",
    categories: ["Tools & Platforms"],
    src: "/skills/docker.svg",
    proficiency: 3,
  },
  {
    name: "Jira",
    categories: ["Tools & Platforms"],
    src: "/skills/docker.svg",
    proficiency: 3,
  },
  {
    name: "Object-Oriented Programming",
    categories: ["Knowledge"],
    src: "/skills/oop.svg",
    proficiency: 3,
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    icon: RiMailLine,
    href: "zhao.jing.qiao1@gmail.com",
  },
  {
    name: "Twitter",
    icon: RiTwitterXLine,
    href: "",
  },
  {
    name: "LinkedIn",
    icon: RiLinkedinLine,
    href: "https://www.linkedin.com/in/yug-bhanushali-b3b872224/",
  },
  {
    name: "GitHub",
    icon: RiGithubLine,
    href: "https://github.com/YugBhanushali",
  },
  { name: "Resume", icon: RiFileTextLine, href: "/resume/Yug-Bhanushali.pdf" },
  {
    name: "Repository",
    icon: RiGitRepositoryLine, // You can choose a suitable icon
    href: "https://github.com/YugBhanushali/v2-portfolio", // Replace with your repo link
  },
];
