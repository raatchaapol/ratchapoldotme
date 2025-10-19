"use client";

import { Box, Grid, VStack, Text } from "@chakra-ui/react";
import { hackerColors } from "@/theme/colors";
import { NeonText } from "@/components/gamification/NeonText";
import { skillsStats } from "../../constants/skillsData";
import type { FunctionComponent } from "react";

export const SkillsOverview: FunctionComponent = () => {
    const stats = [
        {
            label: "Years",
            value: skillsStats.yearsExperience,
            color: "green" as const,
        },
        {
            label: "Projects",
            value: skillsStats.totalProjects,
            color: "cyan" as const,
        },
        {
            label: "Technologies",
            value: skillsStats.technologiesMastered,
            color: "purple" as const,
        },
        {
            label: "Contributions",
            value: skillsStats.githubContributions,
            color: "pink" as const,
        },
    ];

    return (
        <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap={4}
            mb={10}
        >
            {stats.map((stat) => (
                <Box
                    key={stat.label}
                    p={5}
                    bg={hackerColors.darkBg3}
                    border={`1px solid ${hackerColors.borderNeon}`}
                    borderRadius="8px"
                    transition="all 0.3s ease"
                    _hover={{
                        borderColor: hackerColors.neonGreen,
                        boxShadow: hackerColors.glowGreen,
                        transform: "translateY(-2px)",
                    }}
                >
                    <VStack align="center" gap={2}>
                        <NeonText color={stat.color} fontSize="3xl" glow>
                            {stat.value}
                        </NeonText>
                        <Text
                            fontSize="xs"
                            fontFamily="monospace"
                            color={hackerColors.textSecondary}
                            textAlign="center"
                        >
                            {stat.label}
                        </Text>
                    </VStack>
                </Box>
            ))}
        </Grid>
    );
};
