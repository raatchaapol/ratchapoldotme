import type { DifficultyLevel } from "./common.types";

export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
    difficulty: DifficultyLevel;
}
