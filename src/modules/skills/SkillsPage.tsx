"use client";

import { Container, VStack, Box, Grid } from "@chakra-ui/react";
import { MainLayout } from "@/components/layout";
import { SkillsHeader } from "./components/SkillsHeader/SkillsHeader";
import { SkillsOverview } from "./components/SkillsOverview/SkillsOverview";
import { SkillCategory } from "./components/SkillCategory/SkillCategory";
import { SkillHighlightsPanel } from "./components/SkillHighlights/SkillHighlightsPanel";
import { SkillsFooter } from "./components/SkillsFooter/SkillsFooter";
import { skills } from "./constants/skillsData";
import type { FunctionComponent } from "react";

export const SkillsPage: FunctionComponent = () => {
    const colorMap = ["green", "cyan", "purple"] as const;

    // Map category names to IDs for scrolling
    const getCategoryId = (category: string) => {
        return category.toLowerCase().replace(/\s+/g, "-");
    };

    return (
        <MainLayout>
            <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
                {/* Header */}
                <SkillsHeader />

                {/* Stats Overview */}
                <SkillsOverview />

                {/* Two Column Layout */}
                <Grid
                    templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }}
                    gap={10}
                    alignItems="flex-start"
                >
                    {/* Left Column - Technical Skills (Slightly Larger) */}
                    <VStack align="stretch" gap={6}>
                        {skills.map((skillGroup, idx) => (
                            <Box
                                key={skillGroup.category}
                                id={getCategoryId(skillGroup.category)}
                                scrollMarginTop="120px"
                            >
                                <SkillCategory
                                    category={skillGroup.category}
                                    items={skillGroup.items}
                                    color={colorMap[idx % colorMap.length]}
                                />
                            </Box>
                        ))}
                    </VStack>

                    {/* Right Column - Achievements (Sticky) */}
                    <Box
                        position={{ base: "relative", lg: "sticky" }}
                        top={{ base: "0", lg: "100px" }}
                        maxH={{ base: "none", lg: "calc(100vh - 120px)" }}
                        overflowY={{ base: "visible", lg: "auto" }}
                        css={{
                            "&::-webkit-scrollbar": {
                                width: "8px",
                            },
                            "&::-webkit-scrollbar-track": {
                                background: "transparent",
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#00ff41",
                                borderRadius: "4px",
                            },
                            "&::-webkit-scrollbar-thumb:hover": {
                                background: "#00d4ff",
                            },
                        }}
                    >
                        <SkillHighlightsPanel getCategoryId={getCategoryId} />
                    </Box>
                </Grid>

                {/* Footer */}
                <SkillsFooter />
            </Container>
        </MainLayout>
    );
};
