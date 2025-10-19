"use client";

import { Container, Stack, Text, Box, HStack } from "@chakra-ui/react";
import { MainLayout } from "@/components/common/MainLayout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SkillBadge } from "@/components/common/SkillBadge";
import { skills } from "@/content/skills";
import type { FunctionComponent } from "react";

const Skills: FunctionComponent = () => {
    return (
        <MainLayout>
            <Container maxW="container.lg" py={{ base: 12, md: 16 }}>
                <SectionHeader
                    title="Technical Skills"
                    subtitle="Technologies and tools I work with"
                />

                <Stack gap={12}>
                    {skills.map((skillGroup) => (
                        <Box key={skillGroup.category}>
                            <Text
                                as="h3"
                                fontSize="xl"
                                fontWeight="bold"
                                mb={6}
                            >
                                {skillGroup.category}
                            </Text>
                            <HStack gap={4} flexWrap="wrap">
                                {skillGroup.items.map((skill) => (
                                    <SkillBadge
                                        key={skill.name}
                                        skill={skill.name}
                                    />
                                ))}
                            </HStack>
                        </Box>
                    ))}
                </Stack>
            </Container>
        </MainLayout>
    );
};

export default Skills;
