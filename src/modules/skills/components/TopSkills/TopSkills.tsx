"use client";

import { Box, Grid, VStack, Text, HStack } from "@chakra-ui/react";
import { hackerColors } from "@/theme/colors";
import { NeonText } from "@/components/gamification/NeonText";
import { topSkills } from "../../constants/skillsData";
import type { FunctionComponent } from "react";

export const TopSkills: FunctionComponent = () => {
    return (
        <Box mb={12}>
            <HStack mb={6} gap={2}>
                <Text
                    fontSize="sm"
                    fontFamily="monospace"
                    color={hackerColors.neonCyan}
                >
                    &gt;
                </Text>
                <NeonText color="cyan" fontSize="xl" glow={false}>
                    Core Competencies
                </NeonText>
            </HStack>

            <Grid
                templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(4, 1fr)",
                }}
                gap={4}
            >
                {topSkills.map((skill) => (
                    <Box
                        key={skill.name}
                        p={6}
                        bg={`rgba(0, 212, 255, 0.05)`}
                        border={`1px solid ${hackerColors.neonCyan}`}
                        borderRadius="8px"
                        transition="all 0.3s ease"
                        cursor="pointer"
                        _hover={{
                            bg: `rgba(0, 212, 255, 0.1)`,
                            boxShadow: hackerColors.glowCyan,
                            transform: "scale(1.05)",
                        }}
                    >
                        <VStack gap={3}>
                            <Text fontSize="3xl">{skill.icon}</Text>
                            <Text
                                fontSize="sm"
                                fontFamily="monospace"
                                color={hackerColors.neonCyan}
                                textAlign="center"
                                fontWeight="medium"
                            >
                                {skill.name}
                            </Text>
                        </VStack>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};
