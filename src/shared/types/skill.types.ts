import type { SkillLevel } from "./common.types";

export interface SkillItem {
    name: string;
    level: SkillLevel;
}

export interface SkillCategory {
    category: string;
    items: SkillItem[];
}
