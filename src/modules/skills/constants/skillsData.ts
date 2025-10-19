import type { SkillCategory } from "@/shared/types";

export const skills: SkillCategory[] = [
    {
        category: "Frontend Development",
        items: [
            { name: "React", level: 9 },
            { name: "TypeScript", level: 9 },
            { name: "JavaScript", level: 9 },
            { name: "Next.js", level: 8 },
            { name: "Chakra UI", level: 8 },
            { name: "Tailwind CSS", level: 8 },
            { name: "Redux", level: 7 },
            { name: "React Query", level: 8 },
        ],
    },
    {
        category: "Backend Development",
        items: [
            { name: "Node.js", level: 8 },
            { name: "Express.js", level: 8 },
            { name: "REST APIs", level: 9 },
            { name: "GraphQL", level: 7 },
            { name: "PostgreSQL", level: 7 },
            { name: "MongoDB", level: 7 },
            { name: "Redis", level: 6 },
        ],
    },
    {
        category: "DevOps & Tools",
        items: [
            { name: "Git & GitHub", level: 9 },
            { name: "Docker", level: 7 },
            { name: "CI/CD", level: 7 },
            { name: "AWS", level: 6 },
            { name: "Nginx", level: 6 },
            { name: "Linux", level: 7 },
        ],
    },
];

export const skillsStats = {
    totalProjects: "25+",
    yearsExperience: "5+",
    technologiesMastered: "30+",
    githubContributions: "1000+",
};

export const topSkills = [
    { name: "Full-Stack Development", icon: "💻" },
    { name: "System Architecture", icon: "🏗️" },
    { name: "Performance Optimization", icon: "⚡" },
    { name: "Team Collaboration", icon: "🤝" },
];

export const certifications = [
    {
        title: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        year: "2023",
    },
    {
        title: "React Advanced Patterns",
        issuer: "Frontend Masters",
        year: "2024",
    },
];

export const skillHighlights = {
    frontend: {
        description:
            "Expert in building responsive, performant web applications",
        achievements: [
            "Built 15+ production React applications",
            "Improved performance by 60% through optimization",
            "Designed reusable component libraries",
        ],
    },
    backend: {
        description: "Proficient in designing scalable server architectures",
        achievements: [
            "Designed APIs serving 100K+ requests/day",
            "Implemented microservices architecture",
            "Optimized database queries for 10x speed improvement",
        ],
    },
    devops: {
        description: "Experienced in modern DevOps practices and CI/CD",
        achievements: [
            "Automated deployment pipelines",
            "Reduced deployment time by 80%",
            "Managed containerized applications at scale",
        ],
    },
};
