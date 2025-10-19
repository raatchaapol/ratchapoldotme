"use client";

import { Container, Grid, VStack, Box, Text } from "@chakra-ui/react";
import { MainLayout } from "@/components/common/MainLayout";
import { ProjectCard } from "@/components/common/ProjectCard";
import { GlitchText } from "@/components/gamification/GlitchText";
import { NeonText } from "@/components/gamification/NeonText";
import { hackerColors } from "@/theme/colors";
import { projects } from "@/content/projects";
import type { FunctionComponent } from "react";

const Projects: FunctionComponent = () => {
    return (
        <MainLayout>
            <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
                {/* Page Title */}
                <VStack align="start" gap={8} mb={12}>
                    <Box>
                        <Text
                            fontSize="xs"
                            fontFamily="monospace"
                            color={hackerColors.neonCyan}
                            mb={4}
                        >
                            // Portfolio
                        </Text>
                        <GlitchText color="cyan">
                            <Text
                                as="h1"
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="bold"
                                fontFamily="monospace"
                            >
                                FEATURED PROJECTS
                            </Text>
                        </GlitchText>
                        <Box mt={3}>
                            <NeonText color="green" fontSize="lg">
                                &gt; A selection of my best full-stack work
                            </NeonText>
                        </Box>
                    </Box>
                </VStack>

                {/* Project Grid */}
                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={8}
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </Grid>

                {/* Footer Message */}
                <Box pt={12}>
                    <Text
                        fontSize="xs"
                        fontFamily="monospace"
                        color={hackerColors.textSecondary}
                    >
                        <NeonText color="cyan" glow={false}>
                            &gt;
                        </NeonText>{" "}
                        More projects coming soon... Check my GitHub for latest
                        work
                    </Text>
                </Box>
            </Container>
        </MainLayout>
    );
};

export default Projects;
