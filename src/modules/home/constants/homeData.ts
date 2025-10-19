import {
    FaCode,
    FaServer,
    FaRocket,
    FaChartLine,
    FaBolt,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { STATS, PERSONAL_INFO } from "@/shared/constants";

export const HERO_DATA = {
    terminal: "~/portfolio/home.sh",
    systemInit: ">> SYSTEM.DEVELOPER.INIT()",
    title: {
        main: "FULL-STACK",
        sub: "ENGINEER",
        secondary: "SOFTWARE ENGINEER",
    },
    bio: {
        text: "Specializing in building",
        highlight1: "scalable web applications",
        and: "and",
        highlight2: "high-performance APIs",
        closing:
            ". Passionate about clean code, modern architecture, and exceptional user experience.",
    },
    stats: [
        { value: STATS.YEARS_EXPERIENCE, label: "Years Exp" },
        { value: STATS.PROJECTS_COUNT, label: "Projects" },
        { value: STATS.TECHNOLOGIES_COUNT, label: "Technologies" },
    ],
    availability: {
        status: "AVAILABLE FOR HIRE",
        active: true,
    },
} as const;

export const EXPERTISE_DATA = [
    {
        icon: FaCode,
        color: "cyan",
        title: "Frontend Development",
        subtitle: "React, TypeScript, Next.js",
    },
    {
        icon: FaServer,
        color: "purple",
        title: "Backend Development",
        subtitle: "Node.js, Python, PostgreSQL",
    },
    {
        icon: FaRocket,
        color: "pink",
        title: "DevOps & Cloud",
        subtitle: "Docker, AWS, CI/CD",
    },
] as const;

export const KEY_HIGHLIGHTS = [
    {
        label: "Full-stack web apps",
        level: "EXPERT",
        color: "green",
    },
    {
        label: "RESTful & GraphQL APIs",
        level: "EXPERT",
        color: "cyan",
    },
    {
        label: "Cloud deployment",
        level: "ADVANCED",
        color: "purple",
    },
] as const;

export const DASHBOARD_STATS = {
    successRate: "98%",
    onTimeDelivery: "100%",
} as const;

export const TOP_SKILLS = [
    { name: "React/Next.js", stars: 5, color: "green" },
    { name: "TypeScript", stars: 5, color: "cyan" },
] as const;

export const SERVICES = [
    { label: "Web Apps", color: "green" },
    { label: "API Design", color: "cyan" },
    { label: "Cloud Deploy", color: "purple" },
] as const;

export const CONNECT_LINKS = [
    {
        icon: FaGithub,
        label: "GitHub",
        url: PERSONAL_INFO.GITHUB,
        color: "cyan",
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        url: PERSONAL_INFO.LINKEDIN,
        color: "purple",
    },
    {
        icon: FaEnvelope,
        label: "Email Me",
        url: "/contact",
        color: "pink",
        internal: true,
    },
] as const;

export const DASHBOARD_CARD_ICONS = {
    stats: FaChartLine,
    topSkills: FaCode,
    services: FaBolt,
    connect: FaEnvelope,
} as const;
