"use client";

import { Container, Grid, VStack } from "@chakra-ui/react";
import { MainLayout } from "@/components/layout";
import { HeroSection } from "./components/HeroSection";
import { ExpertisePanel } from "./components/ExpertisePanel/ExpertisePanel";
import { KeyHighlightsPanel } from "./components/KeyHighlightsPanel/KeyHighlightsPanel";
import { DashboardCards } from "./components/DashboardCards";
import {
    HERO_DATA,
    EXPERTISE_DATA,
    KEY_HIGHLIGHTS,
    DASHBOARD_STATS,
    TOP_SKILLS,
    SERVICES,
    CONNECT_LINKS,
} from "./constants/homeData";
import { homeKeyframes } from "./Home.styles";
import type { FunctionComponent } from "react";

export const HomePage: FunctionComponent = () => {
    return (
        <MainLayout>
            <style>{homeKeyframes}</style>

            <Container maxW="container.xl" py={{ base: 8, md: 12 }}>
                {/* Hero Section - Split Screen */}
                <Grid
                    templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }}
                    gap={10}
                    mb={12}
                    minH="70vh"
                    alignItems="center"
                >
                    {/* LEFT SIDE - Hero Content */}
                    <HeroSection {...HERO_DATA} />

                    {/* RIGHT SIDE - Compact Info Panel */}
                    <VStack gap={5} align="stretch">
                        <ExpertisePanel items={EXPERTISE_DATA} />
                        <KeyHighlightsPanel highlights={KEY_HIGHLIGHTS} />
                    </VStack>
                </Grid>

                {/* Dashboard Cards Section */}
                <DashboardCards
                    stats={DASHBOARD_STATS}
                    topSkills={TOP_SKILLS}
                    services={SERVICES}
                    connectLinks={CONNECT_LINKS}
                />
            </Container>
        </MainLayout>
    );
};
