"use client";

import { Container, VStack } from "@chakra-ui/react";
import { MainLayout } from "@/components/layout";
import { SkillsHeader } from "./components/SkillsHeader/SkillsHeader";
import { SkillCategory } from "./components/SkillCategory/SkillCategory";
import { SkillsFooter } from "./components/SkillsFooter/SkillsFooter";
import { skills } from "./constants/skillsData";
import type { FunctionComponent } from "react";

export const SkillsPage: FunctionComponent = () => {
    const colorMap = ["green", "cyan", "purple"] as const;

    return (
        <MainLayout>
            <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
                <SkillsHeader />

                <VStack align="stretch" gap={8} maxW="4xl">
                    {skills.map((skillGroup, idx) => (
                        <SkillCategory
                            key={skillGroup.category}
                            category={skillGroup.category}
                            items={skillGroup.items}
                            color={colorMap[idx % colorMap.length]}
                        />
                    ))}
                </VStack>

                <SkillsFooter />
            </Container>
        </MainLayout>
    );
};
