"use client";

import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import { FaCode, FaStar } from "react-icons/fa";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface SkillItem {
    name: string;
    stars: number;
    color: "green" | "cyan" | "purple" | "pink";
}

interface TechStackCardProps {
    skills: readonly SkillItem[];
}

const colorMap = {
    green: hackerColors.neonGreen,
    cyan: hackerColors.neonCyan,
    purple: hackerColors.neonPurple,
    pink: hackerColors.neonPink,
};

export const TechStackCard: FunctionComponent<TechStackCardProps> = ({
    skills,
}) => {
    return (
        <Box
            className="dashboard-card"
            bg={hackerColors.darkBg2}
            border={`2px solid ${hackerColors.neonPurple}`}
            borderRadius="10px"
            p={5}
            position="relative"
            overflow="hidden"
        >
            <VStack align="flex-start" gap={3}>
                <HStack gap={2}>
                    <FaCode color={hackerColors.neonPurple} size={16} />
                    <Text
                        fontSize="xs"
                        fontFamily="monospace"
                        color={hackerColors.neonPurple}
                    >
                        TOP SKILLS
                    </Text>
                </HStack>

                <VStack align="stretch" gap={2} w="full">
                    {skills.map((skill) => (
                        <HStack key={skill.name} justify="space-between">
                            <Text
                                color={hackerColors.textPrimary}
                                fontSize="xs"
                            >
                                {skill.name}
                            </Text>
                            <HStack gap={0.5}>
                                {Array.from({ length: skill.stars }).map(
                                    (_, idx) => (
                                        <FaStar
                                            key={idx}
                                            color={colorMap[skill.color]}
                                            size={10}
                                        />
                                    )
                                )}
                            </HStack>
                        </HStack>
                    ))}
                </VStack>
            </VStack>
        </Box>
    );
};
