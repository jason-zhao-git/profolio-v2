import {
  RiMailLine,
  RiTwitterXLine,
  RiLinkedinLine,
  RiGithubLine,
  RiFileTextLine,
  RiGitRepositoryLine,
  RiInstagramLine,
  RiYoutubeLine,
} from "react-icons/ri";

import React from "react";

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
  description: React.ReactNode;
  websiteLink: string;
  endDate: string | null;
  startDate: string;
  currentlyWorking: boolean;
  technologies: string[];
  logo?: string;
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
    company: "BigHat Biosciences",
    role: "Software Engineer (Co-op)",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Audit-Trail&nbsp;UI</strong> — React + TypeScript front-end +
          Python/Falcon API on DynamoDB; record look-ups now take seconds for 35
          + scientists.
        </li>
        <li>
          Maintained a <strong>serverless event pipeline</strong> (AWS Lambda +
          Kinesis) that guarantees loss-less, traceable LIMS events.
        </li>
        <li>
          Authored <strong>hands-free CI/CD</strong>: BuildSpec workflows build,
          test & publish pinned Docker images in &lt; 5 min (vs. 30 min manual).
        </li>
        <li>
          Standardised 80 + Pydantic/SQLAlchemy models on a common ORM base,
          trimming boilerplate 5 % and easing audits.
        </li>
      </ul>
    ),
    websiteLink: "https://www.bighatbio.com",
    startDate: "2025-01",
    endDate: null,
    currentlyWorking: true,
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "AWS",
      "AWS lambda",
      "AWS Kinesis",
      "DynamoDB",
      "Docker",
      "Alembic",
      "SQLAlchemy",
      "Pydantic",
      "PostgreSQL",
      "cypress",
    ],
    logo: "/logos/bighat.svg",
  },
  {
    company: "UCSF – Andrej Šali Lab",
    role: "Student Research Intern",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Automated GPU scheduling for 200 + MD runs, saving ≈ 10
          engineer-hours/week.
        </li>
        <li>
          Built RMSD, trajectory & pair-distance pipelines to validate every
          simulation.
        </li>
        <li>
          Developed <strong>Markov State Models</strong> to reveal transitions
          in disordered proteins.
        </li>
        <li>
          Integrated FRET data into MD workflows, boosting simulation fidelity.
        </li>
      </ul>
    ),
    websiteLink: "https://salilab.org",
    startDate: "2023-03",
    endDate: "2023-09",
    currentlyWorking: false,
    technologies: [
      "Python",
      "bash",
      "GROMACS",
      "OpenMM",
      "PyTorch",
      "NumPy",
      "Pandas",
      "Markov State Models",
      "GPU Computing",
    ],
    logo: "/logos/ucsf.svg",
  },

  {
    company:
      "Lawrence Berkeley National Laboratory — Biological Systems & Engineering",
    role: "Student Backend Engineer",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Co-designed an OO <strong>retrosynthesis algorithm</strong> that
          generates PKS sequences for target molecules.
        </li>
        <li>
          Upgraded ClusterCAD backend (Python + Django) and integrated the new
          algorithm.
        </li>
        <li>Algorithm adopted by multiple LBNL teams in their web tools.</li>
      </ul>
    ),
    websiteLink: "https://biosciences.lbl.gov",
    startDate: "2022-08",
    endDate: "2023-02",
    currentlyWorking: false,
    technologies: ["Python", "Django", "PostgreSQL", "React"],
  },

  {
    company: "Geopogo",
    role: "Software Engineer Intern",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Prototyped a MagicLeap console app in Unity for one-handed 3-D model
          interaction.
        </li>
        <li>
          Implemented a <strong>gravity-gun</strong> ray-casting system inspired
          by G-Mod.
        </li>
        <li>
          Prototype adopted by firms to demo architectural models in mixed
          reality.
        </li>
      </ul>
    ),
    websiteLink: "https://www.geopogo.com/",
    startDate: "2022-05",
    endDate: "2022-09",
    currentlyWorking: false,
    technologies: ["Unity", "C#", "MagicLeap", "AR"],
  },

  {
    company: "Institute of Computing Technology, Chinese Academy of Sciences",
    role: "Student Researcher",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Built a mass-spectrometry peptide-matching pipeline, dramatically
          accelerating MS-2 identifications.
        </li>
      </ul>
    ),
    websiteLink: "http://english.ict.cas.cn",
    startDate: "2019-06",
    endDate: "2019-08",
    currentlyWorking: false,
    technologies: ["Python", "Shell", "Bioinformatics", "Mass Spectrometry"],
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
    name: "LinkedIn",
    icon: RiLinkedinLine,
    href: "https://www.linkedin.com/in/jingqiao-zhao/",
  },
  {
    name: "GitHub",
    icon: RiGithubLine,
    href: "https://github.com/jason-zhao-git",
  },
  { name: "Resume", icon: RiFileTextLine, href: "/resume/jin_zhao.pdf" },
  {
    name: "Playlist",
    icon: RiYoutubeLine,
    href: "https://music.youtube.com/playlist?list=PL5K3bNYKh_g5g7-iu3gfT8lkslS0JE8ub&si=o2BLEKNGmC_Dr4f-",
  },
  {
    name: "Instagram",
    icon: RiInstagramLine,
    href: "https://www.instagram.com/jing.zh_/",
  },
];
