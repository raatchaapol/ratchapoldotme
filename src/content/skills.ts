export interface SkillItem {
    name: string;
    level: number; // 1-10
}

export interface SkillCategory {
    category: string;
    items: SkillItem[];
}

export const skills: SkillCategory[] = [
    {
        category: "Frontend",
        items: [
            { name: "React", level: 9 },
            { name: "TypeScript", level: 8 },
            { name: "JavaScript", level: 9 },
            { name: "Chakra UI", level: 8 },
            { name: "Responsive Design", level: 9 },
            { name: "Performance Optimization", level: 8 },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", level: 7 },
            { name: "REST APIs", level: 8 },
            { name: "Database Design", level: 7 },
            { name: "System Architecture", level: 7 },
        ],
    },
    {
        category: "Tools & DevOps",
        items: [
            { name: "Git", level: 9 },
            { name: "Vite", level: 8 },
            { name: "TypeScript", level: 8 },
            { name: "Biome", level: 7 },
            { name: "Docker", level: 6 },
            { name: "CI/CD", level: 6 },
        ],
    },
];
