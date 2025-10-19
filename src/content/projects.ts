export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
    difficulty: 1 | 2 | 3 | 4 | 5; // 1-5 difficulty stars
}

export const projects: Project[] = [
    {
        title: "Typeahead Search Engine",
        description:
            "High-performance typeahead search with instant autocomplete suggestions. Built with React and optimized for speed and user experience.",
        tags: ["React", "Frontend", "Performance", "Search"],
        link: "https://typeahead.ratchapol.me/",
        github: "https://github.com/raatchaapol/typeahead-search",
        difficulty: 3,
    },
    {
        title: "Portfolio Website",
        description:
            "Modern, responsive portfolio showcasing full-stack development skills. Built with React, TypeScript, and Chakra UI with gamification elements.",
        tags: ["React", "TypeScript", "Chakra UI", "Full-Stack"],
        link: "https://ratchapol.me/",
        difficulty: 3,
    },
];
