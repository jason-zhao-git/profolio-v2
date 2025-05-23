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
  name: string;
  description: string | React.ReactNode;
  tag: string;
  image: string;
  tech: string[];
  course?: string;
  demo?: string;
  code?: string;
  spec?: string;
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

export const bklprojectList = [
  {
    name: "Software Engineering",
    description:
      "Implemented a version control system that mimics some of the features of the popular system Git (add, commit, push, merge, etc.) through serialization. The project focuses intensively on data structures like HashMap and file manipulation.",
    tag: "Web Development",
    image: "/images/projects/gitlet.png",
    tech: ["Java", "Version Control", "HashMap", "Serialization"],
    course: "CS 61B: Data Structures",
  },
  {
    name: "SimpleDB Database",
    description:
      "Implemented a fully functional database with features such as B+ tree indexed data, Joins, Query optimizer, Queuing, Multigranular locking, and Recovery.",
    tag: "Database Systems",
    image: "/images/projects/simpledb.png",
    tech: [
      "Java",
      "Database",
      "B+ Tree",
      "Join/Query Optimization",
      "Concurrency",
    ],
    course: "CS 186: Introduction to Database Systems",
  },
  {
    name: "Pacman AI",
    description:
      "Implemented different versions of Pacman agents AI each using distinctive strategies, such as expectimax search, Q-learning, and Particle Filtering based on Bayes Net inference.",
    tag: "Artificial Intelligence",
    image: "/images/projects/pacman.png",
    tech: [
      "Python",
      "AI",
      "Search",
      "Reinforcement Learning",
      "Bayesian Inference",
    ],
    course: "CS 188: Introduction to Artificial Intelligence",
  },
  {
    name: "2D World Engine",
    description:
      "Created an engine for generating explorable 2D tile-based worlds. The project involved the entire development cycle from ideation to presentation, focusing on software engineering principles and handling complex codebases.",
    tag: "Software Engineering",
    image: "/images/projects/2dworld.png",
    tech: [
      "Java",
      "Software Engineering",
      "Procedural generation",
      "Pseudorandomness",
    ],
    course: "CS 61B: Data Structures",
  },
  {
    name: "Secure File Sharing System",
    description:
      "Designed a secure file sharing system using encryption techniques to ensure data confidentiality and integrity. The system includes user authentication, file storage and retrieval, and secure file sharing and revocation on an Unrestricted Access Database.",
    tag: "Security",
    image: "/images/projects/securefilesharing.png",
    tech: ["Java", "Encryption", "Hashing", "RSA", "AES"],
    course: "CS 161: Computer Security",
  },
  {
    name: "Web Server Breach",
    description:
      "Exploited a poorly designed website to understand common web vulnerabilities including Cross-Site Request Forgery (CSRF), SQL Injection, Cross-Site Scripting (XSS), and more. The project involved identifying and exploiting these vulnerabilities, and then implementing fixes to secure the website.",
    tag: "Web Security",
    image: "/images/projects/webserverbreach.png",
    tech: ["SQL", "Cybersecurity", "SQL Injection", "XSS", "CSRF", "IDOR"],
    course: "CS 161: Computer Security",
  },
];

export const randoprojects = [
  {
    name: "Polite Shell",
    description:
      "Well, turns out a basic shell is not too hard to build. An interactive command-line program that enforces politeness before executing commands. This shell adds a fun twist to your typical experience by requiring polite language and offering unique commands.",
    tag: "Shell",
    image: "/images/projects/politeshell.png",
    tech: ["Go", "Shell", "Unix/Linux"],
    code: "https://github.com/jason-zhao-git/politeshell/tree/main",
    spec: "https://github.com/jason-zhao-git/politeshell/blob/main/README.md"
  },
]


export const FeaturedList = [
  {
    name: '"Quest-Flow" Interactive Quest Builder',
    description: (
      <div>
        <p>
          Developed AI-QuestBuilder, an innovative web application designed to
          create game-like achievements and complex workflows.
        </p>
        <p className="mt-2">Key features include:</p>
        <ul>
          <li>
            • <strong>Dynamic Node and Edge Management:</strong> Easily add and
            manage workflow components.
          </li>
          <li>
            • <strong>State Persistence:</strong> Maintains workflow integrity
            across sessions.
          </li>
          <li>
            • <strong>Graph Algorithms:</strong> Optimizes workflow creation and
            management.
          </li>
          <li>
            • <strong>Responsive Design:</strong> Adapts to various devices for
            a better user experience.
          </li>
          <li>
            • <strong>Intelligent Recommendations:</strong> Uses Gemini API for
            smart suggestions.
          </li>
        </ul>
        <p className="mt-2">
          This project showcases the seamless integration of advanced front-end
          technologies with intelligent backend services to deliver a robust and
          user-centric application.
        </p>
      </div>
    ),
    tag: "Web Development",
    image: "/images/projects/aiquest1.png",
    tech: ["Next.js", "React", "TypeScript", "JavaScript"],
    demo: "https://ai-powered-achvments.vercel.app/",
    code: "https://github.com/jason-zhao-git/ai-powered-achvments",
    spec: "https://github.com/jason-zhao-git/ai-powered-achvments",
  },
];

export const allProjects: Project[] = [
  ...FeaturedList,
  ...randoprojects,
  ...bklprojectList,
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

export interface Education {
  school: string;
  degree: string | React.ReactNode;
  gpa?: string;
  startDate: string; // "YYYY-MM"
  endDate: string; // "YYYY-MM"
  description: React.ReactNode;
  logo: string; // path to SVG / PNG seal
  website: string;
}

export const educationData: Education[] = [
  {
    school: "University of Michigan, Ann Arbor",
    degree: "M.S. in Bioinformatics",
    startDate: "2025-08",
    endDate: "2027-05",
    gpa: "Expected 2027",
    website: "https://umich.edu",
    logo: "/seals/umich.svg",
    description: (
      <>
        Relevant Coursework: Mathematical Modeling, Computational Systems, Deep Learning, Applied Statistics.
      </>
    ),
  },
  /* ─────────────  UC Berkeley – Computer Science  ───────────── */
  {
    school:
      "University of California, Berkeley – College of Computing, Data Science & Society (CDSS)",
    degree: "B.A. Computer Science",
    startDate: "2020-08",
    endDate: "2024-12",
    gpa: "3.66",
    website: "https://cdss.berkeley.edu/",
    logo: "/seals/ucb.svg",
    description: (
      <>
        Courses: Programming Foundations & OOP, Data Structures, Discrete Math &
        Probability, Data Science Principles, Algorithm Design, Operating
        Systems, Database Systems, Internet Architecture, Artificial
        Intelligence, Machine Learning, Computer Security, Optimization.
      </>
    ),
  },

  /* ─────────────  UC Berkeley – Molecular & Cell Biology  ───── */
  {
    school: "University of California, Berkeley – College of Letters & Science",
    degree: (
      <>
        B.A. Molecular & Cell Biology
        <br />
        <span className=" text-sm">
          (Genetics, Genomics & Development)
        </span>
      </>
    ),
    startDate: "2020-08",
    endDate: "2024-12",
    gpa: "3.6",
    website: "https://ls.berkeley.edu/",
    logo: "/seals/ucb.svg",
    description: (
      <>
        Courses: Organic Chemistry (lecture + lab), Biophysical Chemistry,
        Biochemistry & Metabolism, Molecular Biology, Genetics & Genomics
        (lecture + lab), Molecular Medicine, Bacterial Pathogenesis, Immunology.
      </>
    ),
  },

  /* ─────────────  Johns Hopkins – Summer Program  ───────────── */
  {
    school: "Johns Hopkins University",
    degree: "Bioengineering & Biomedical Engineering",
    startDate: "2019-05",
    endDate: "2019-08",
    gpa: "4.0",
    website: "https://www.jhu.edu/",
    logo: "/seals/jhu.svg",
    description: (
      <>Courses: General Molecular Biology, Protein Engineering, Biochemistry</>
    ),
  },

  {
    school: "Austin Preparatory School",
    degree: "High School Diploma",
    startDate: "2018-08",
    endDate: "2020-06",
    gpa: "4.0",
    website: "https://www.austinprep.org/",
    logo: "/seals/ap.svg",
    description: (
      <>
        College-preparatory curriculum with emphasis on interdisciplinary
        learning, writing, ethics, and the humanities. Participated in science
        fairs, math leagues, and other extracurricular activities; strong
        foundations in STEM and liberal arts.
      </>
    ),
  },
];
