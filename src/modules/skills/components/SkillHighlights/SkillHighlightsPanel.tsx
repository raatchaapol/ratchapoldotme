"use client";

import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { hackerColors } from "@/theme/colors";
import { NeonText } from "@/components/gamification/NeonText";
import { skillHighlights } from "../../constants/skillsData";
import type { FunctionComponent } from "react";

interface SkillHighlightsPanelProps {
    getCategoryId: (category: string) => string;
}

export const SkillHighlightsPanel: FunctionComponent<
    SkillHighlightsPanelProps
> = ({ getCategoryId }) => {
    const highlights = [
        {
            title: "Frontend",
            categoryName: "Frontend Development",
            data: skillHighlights.frontend,
            color: "green" as const,
        },
        {
            title: "Backend",
            categoryName: "Backend Development",
            data: skillHighlights.backend,
            color: "cyan" as const,
        },
        {
            title: "DevOps",
            categoryName: "DevOps & Tools",
            data: skillHighlights.devops,
            color: "purple" as const,
        },
    ];

    const handleCardClick = (categoryName: string) => {
        const element = document.getElementById(getCategoryId(categoryName));
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <VStack align="stretch" gap={5}>
            <HStack gap={2} mb={1}>
                <Text
                    fontSize="sm"
                    fontFamily="monospace"
                    color={hackerColors.neonGreen}
                >
                    &gt;
                </Text>
                <NeonText color="green" fontSize="lg" glow={false}>
                    Key Achievements
                </NeonText>
            </HStack>

            {highlights.map((highlight) => (
                <Box
                    key={highlight.title}
                    p={5}
                    bg={hackerColors.darkBg3}
                    border={`1px solid ${hackerColors.borderNeon}`}
                    borderRadius="8px"
                    transition="all 0.3s ease"
                    cursor="pointer"
                    onClick={() => handleCardClick(highlight.categoryName)}
                    _hover={{
                        borderColor: hackerColors.neonGreen,
                        boxShadow: hackerColors.glowGreen,
                        "& .hint-text": {
                            opacity: 1,
                        },
                    }}
                >
                    <VStack align="start" gap={3}>
                        <HStack justify="space-between" width="100%">
                            <NeonText
                                color={highlight.color}
                                fontSize="md"
                                glow={false}
                            >
                                {highlight.title}
                            </NeonText>
                            <Text
                                className="hint-text"
                                fontSize="xs"
                                color={hackerColors.neonCyan}
                                fontFamily="monospace"
                                opacity={0}
                                transition="opacity 0.3s ease"
                            >
                                Click to view →
                            </Text>
                        </HStack>
                        <VStack align="start" gap={2.5} width="100%">
                            {highlight.data.achievements.map(
                                (achievement, idx) => (
                                    <HStack key={idx} gap={2} align="start">
                                        <Box
                                            as={FaCheckCircle}
                                            color={hackerColors.neonGreen}
                                            fontSize="xs"
                                            mt={0.5}
                                            flexShrink={0}
                                        />
                                        <Text
                                            fontSize="sm"
                                            color={hackerColors.textPrimary}
                                            fontFamily="monospace"
                                            lineHeight="1.6"
                                        >
                                            {achievement}
                                        </Text>
                                    </HStack>
                                )
                            )}
                        </VStack>
                    </VStack>
                </Box>
            ))}
        </VStack>
    );
};
