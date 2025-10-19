"use client";

import { HStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { NeonText } from "./NeonText";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface ProjectRatingProps {
    difficulty: 1 | 2 | 3 | 4 | 5;
}

const getDifficultyLabel = (difficulty: number): string => {
    const labels = [
        "",
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert",
        "Legendary",
    ];
    return labels[difficulty] || "Unknown";
};

const getDifficultyColor = (
    difficulty: number
): "green" | "cyan" | "purple" | "pink" => {
    const colors: ("green" | "cyan" | "purple" | "pink")[] = [
        "green",
        "green",
        "cyan",
        "purple",
        "pink",
        "pink",
    ];
    return colors[difficulty] || "green";
};

export const ProjectRating: FunctionComponent<ProjectRatingProps> = ({
    difficulty,
}) => {
    const stars = Array.from({ length: 5 }, (_, i) => i < difficulty);
    const color = getDifficultyColor(difficulty);

    return (
        <HStack gap={2}>
            {stars.map((filled, i) => (
                <FaStar
                    key={i}
                    size={14}
                    color={
                        filled
                            ? hackerColors.neonGreen
                            : hackerColors.textDimmed
                    }
                    style={{
                        filter: filled
                            ? `drop-shadow(${hackerColors.glowGreen})`
                            : "none",
                        transition: "all 0.3s ease",
                    }}
                />
            ))}
            <NeonText color={color} glow fontSize="xs">
                {getDifficultyLabel(difficulty)}
            </NeonText>
        </HStack>
    );
};
