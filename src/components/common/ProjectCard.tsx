"use client";

import {
    Box,
    Flex,
    HStack,
    Stack,
    Text,
    Heading,
    Badge,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { FunctionComponent } from "react";

export interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
}

interface ProjectLinkProps {
    href: string;
    children: React.ReactNode;
}

const ProjectLink: FunctionComponent<ProjectLinkProps> = ({
    href,
    children,
}) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            paddingLeft: "12px",
            paddingRight: "12px",
            paddingTop: "6px",
            paddingBottom: "6px",
            backgroundColor: "var(--chakra-colors-blue-solid)",
            color: "white",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "500",
            transition: "all 0.2s",
            textDecoration: "none",
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
            e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(0)";
        }}
    >
        {children}
    </a>
);

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
    title,
    description,
    tags,
    link,
    github,
}) => {
    return (
        <Box
            p={6}
            borderWidth="1px"
            borderColor="border"
            borderRadius="lg"
            bg="bg.panel"
            transition="all 0.3s ease"
            _hover={{
                borderColor: "blue.solid",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
        >
            <Stack gap={4}>
                {/* Title */}
                <Heading as="h3" size="md">
                    {title}
                </Heading>

                {/* Description */}
                <Text color="fg.muted" lineHeight="1.6">
                    {description}
                </Text>

                {/* Tags */}
                <HStack gap={2} flexWrap="wrap">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="subtle" colorPalette="blue">
                            {tag}
                        </Badge>
                    ))}
                </HStack>

                {/* Links */}
                <Flex gap={3} pt={2}>
                    <ProjectLink href={link}>
                        <FaExternalLinkAlt size={14} />
                        View Project
                    </ProjectLink>
                    {github && (
                        <ProjectLink href={github}>
                            <FaGithub size={14} />
                            Source Code
                        </ProjectLink>
                    )}
                </Flex>
            </Stack>
        </Box>
    );
};
