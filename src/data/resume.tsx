import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Oday Tarek",
  initials: "OT",
  url: "https://odaytarek.com",
  location: "Giza, Egypt",
  locationLink: "https://www.google.com/maps/place/giza",
  description:
    "Software Engineer turned ",
  summary:
    "I'm a full-stack developer with a passion for blending creativity and code to architect robust digital solutions. With over 3 years of experience, I specialize in the MERN stack, microservices, and cloud-native applications. My goal is to transform complex requirements into scalable and maintainable systems.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "TailwindCSS",
    "Shadcn UI",
    "Typescript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "Coolify",
    "AWS",
    "GCS",
    "Stripe",
    "Paymob",
    "Cloudflare Workers",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "odaytarek62@gmail.com",
    tel: "+201143776030",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AKira0169",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/odaytarek",
        icon: Icons.linkedin,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "mailto:odaytarek62@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: " Mantaray Digital Solutions",
      href: "https://mantaray.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/Frame 9.svg",
      start: "Dec 2024",
      end: "Present",
      description:
        "Spearheaded the development of full-stack web applications using React, Next.js, and Tailwind CSS on the frontend, with a robust NestJS backend architecture. Designed and deployed scalable services with Docker and implemented CI/CD pipelines to automate testing, integration, and deployment. Integrated Google Cloud Storage (GCS) for secure and efficient image handling, and implemented user authentication flows using Google OAuth 2.0.Worked in close collaboration with cross-functional teams, including product managers and designers, to deliver responsive, mobile-friendly UIs and high-performance APIs. Actively led code reviews, mentored junior developers, and enforced clean code standards and best practices across the team. Contributed to technical strategy, system architecture, and innovation efforts, driving the delivery of scalable, maintainable, and secure solutions aligned with business goals.",
    },
  ],
  education: [
    {
      school: "Faculty of Engineering, Ain Shams University",
      href: "https://www.asu.edu.eg/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/Frame 10.svg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Signature Stays",
      href: "https://signaturestays.io/",
      dates: "Dec 2024 - May 2025 ",
      active: true,
      description:
        "Signature Stays is a booking platform for our partner's properties.",
      technologies: [
        "Hostex",
        "Next.js",
        "Typescript",
        "MongoDB",
        "NestJS",
        "TailwindCSS",
        "Paymob",
        "Shadcn UI",
        "Google OAuth 2.0",
        "Casel",
        "Google Cloud Storage (GCS)",
        "Docker",
        "Coolify",
      ],
      links: [
        {
          type: "Website",
          href: "https://signaturestays.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/signature-stays.png",
      video:
        "",
    },
    {
      title: "YallaPass Dashboard",
      href: "https://staging.dashboard.yallapass.app/",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "YallaPass is a platform that allows users to create and manage Studios and manage their bookings.",
      technologies: [
        "Next.js",
        "NestJS",
        "Typescript",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Paymob",
        "Shadcn UI",
        "Google OAuth 2.0",
        "Casl",
        "Google Cloud Storage (GCS)",
        "Docker",
        "Coolify",
      ],
      links: [
        {
          type: "Website",
          href: "https://dashboard.yallapass.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/yallapass-dashboard.png",
      video: "",
    },
    {
      title: "Online Learning Platform",
      href: "https://github.com/AKira0169/onlineLearningPlatFrom",
      dates: "May 2024 - August 2024",
      active: true,
      description:
        "Developed an open-source online learning platform for students to learn and improve their skills.",
      technologies: [
        "Express.js",
        "Typescript",
        "MongoDB",
        "Mongoose",
        "Stripe",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AKira0169/onlineLearningPlatFrom",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Doctech",
      href: "https://doctech.nl",
      dates: "Dec 2023 - May 2024",
      active: true,
      description:
        "A platform for doctors to manage their patients and appointments.",
      technologies: [
        "Express.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Docker",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Website",
          href: "https://doctech.nl",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/doctech.png",
      video:
        "",
    },
  ],

} as const;
