"use client";

import { Grid } from "@chakra-ui/react";
import { ProjectCard } from "@/components/shared";
import type { Project } from "@/shared/types";
import type { FunctionComponent } from "react";

interface ProjectGridProps {
    projects: Project[];
}

export const ProjectGrid: FunctionComponent<ProjectGridProps> = ({
    projects,
}) => {
    return (
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </Grid>
    );
};
