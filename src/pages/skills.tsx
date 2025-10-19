"use client";

import { Container, VStack, Text, Box } from "@chakra-ui/react";
import { MainLayout } from "@/components/common/MainLayout";
import { GlitchText } from "@/components/gamification/GlitchText";
import { NeonText } from "@/components/gamification/NeonText";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { SkillLevel } from "@/components/gamification/SkillLevel";
import { hackerColors } from "@/theme/colors";
import { skills } from "@/content/skills";
import type { FunctionComponent } from "react";

const Skills: FunctionComponent = () => {
    const colorMap = ["green", "cyan", "purple"] as const;

    return (
        <MainLayout>
            <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
                {/* Page Title */}
                <VStack align="start" gap={8} mb={12}>
                    <Box>
                        <Text
                            fontSize="xs"
                            fontFamily="monospace"
                            color={hackerColors.neonPurple}
                            mb={4}
                        >
                            // Skills
                        </Text>
                        <GlitchText color="purple">
                            <Text
                                as="h1"
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="bold"
                                fontFamily="monospace"
                            >
                                TECHNICAL EXPERTISE
                            </Text>
                        </GlitchText>
                        <Box mt={3}>
                            <NeonText color="cyan" fontSize="lg">
                                &gt; Technologies and tools I work with
                            </NeonText>
                        </Box>
                    </Box>
                </VStack>

                {/* Skills Categories */}
                <VStack align="stretch" gap={8} maxW="4xl">
                    {skills.map((skillGroup, idx) => (
                        <TerminalBox
                            key={skillGroup.category}
                            title={`// ${skillGroup.category}`}
                            color={colorMap[idx % colorMap.length]}
                        >
                            <VStack align="stretch" gap={4}>
                                {skillGroup.items.map((skill) => (
                                    <SkillLevel
                                        key={skill.name}
                                        name={skill.name}
                                        level={skill.level}
                                    />
                                ))}
                            </VStack>
                        </TerminalBox>
                    ))}
                </VStack>

                {/* Footer Message */}
                <Box pt={12}>
                    <Text
                        fontSize="xs"
                        fontFamily="monospace"
                        color={hackerColors.textSecondary}
                    >
                        <NeonText color="purple" glow={false}>
                            &gt;
                        </NeonText>{" "}
                        Continuously learning and adapting to new technologies
                    </Text>
                </Box>
            </Container>
        </MainLayout>
    );
};

export default Skills;
