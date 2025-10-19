"use client";

import { Container, Grid } from "@chakra-ui/react";
import { MainLayout } from "@/components/common/MainLayout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProjectCard } from "@/components/common/ProjectCard";
import { projects } from "@/content/projects";
import type { FunctionComponent } from "react";

const Projects: FunctionComponent = () => {
    return (
        <MainLayout>
            <Container maxW="container.lg" py={{ base: 12, md: 16 }}>
                <SectionHeader
                    title="Featured Projects"
                    subtitle="A selection of my best work showcasing full-stack development"
                />

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={8}
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </Grid>
            </Container>
        </MainLayout>
    );
};

export default Projects;
