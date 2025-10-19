"use client";

import { VStack } from "@chakra-ui/react";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { SkillLevel } from "@/components/gamification/SkillLevel";
import type { SkillItem } from "@/shared/types";
import type { FunctionComponent } from "react";

interface SkillCategoryProps {
    category: string;
    items: SkillItem[];
    color: "green" | "cyan" | "purple";
}

export const SkillCategory: FunctionComponent<SkillCategoryProps> = ({
    category,
    items,
    color,
}) => {
    return (
        <TerminalBox title={`// ${category}`} color={color}>
            <VStack align="stretch" gap={4}>
                {items.map((skill) => (
                    <SkillLevel
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                    />
                ))}
            </VStack>
        </TerminalBox>
    );
};
