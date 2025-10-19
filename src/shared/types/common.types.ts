export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export type ColorVariant = "green" | "cyan" | "purple" | "pink";

export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

export type SkillLevel = number; // 1-10
