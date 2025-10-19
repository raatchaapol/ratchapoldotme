"use client";

import { Container } from "@chakra-ui/react";
import { MainLayout } from "@/components/layout";
import { ProjectsHeader } from "./components/ProjectsHeader/ProjectsHeader";
import { ProjectGrid } from "./components/ProjectGrid/ProjectGrid";
import { ProjectsFooter } from "./components/ProjectsFooter/ProjectsFooter";
import { projects } from "./constants/projectsData";
import type { FunctionComponent } from "react";

export const ProjectsPage: FunctionComponent = () => {
    return (
        <MainLayout>
            <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
                <ProjectsHeader />
                <ProjectGrid projects={projects} />
                <ProjectsFooter />
            </Container>
        </MainLayout>
    );
};
