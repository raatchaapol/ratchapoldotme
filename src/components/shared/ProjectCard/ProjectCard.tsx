"use client";

import {
    Box,
    Flex,
    HStack,
    VStack,
    Text,
    Button,
    Link,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";
import { NeonText } from "@/components/gamification/NeonText";
import {
    cardContainerStyles,
    difficultyStarStyles,
    difficultyLabelStyles,
    descriptionTextStyles,
    tagStyles,
    linkWrapperStyles,
    primaryButtonStyles,
    secondaryButtonStyles,
} from "./ProjectCard.styles";
import type { FunctionComponent } from "react";

export interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
    difficulty?: number;
}

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
    title,
    description,
    tags,
    link,
    github,
    difficulty = 3,
}) => {
    return (
        <Box {...cardContainerStyles}>
            {/* Difficulty Stars */}
            <HStack gap={1} mb={3}>
                {[...Array(5)].map((_, idx) => (
                    <Box
                        key={idx}
                        as={FaStar}
                        {...difficultyStarStyles(idx < difficulty)}
                    />
                ))}
                <Text {...difficultyLabelStyles}>Difficulty</Text>
            </HStack>

            <VStack align="start" gap={4}>
                {/* Title */}
                <NeonText color="cyan" fontSize="xl" glow={false}>
                    {title}
                </NeonText>

                {/* Description */}
                <Text {...descriptionTextStyles}>{description}</Text>

                {/* Tags */}
                <HStack gap={2} flexWrap="wrap">
                    {tags.map((tag) => (
                        <Box key={tag} {...tagStyles}>
                            {tag}
                        </Box>
                    ))}
                </HStack>

                {/* Links */}
                <Flex gap={3} pt={2} width="100%">
                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        {...linkWrapperStyles}
                    >
                        <Button {...primaryButtonStyles}>
                            <HStack gap={2}>
                                <FaExternalLinkAlt size={12} />
                                <span>View Live</span>
                            </HStack>
                        </Button>
                    </Link>
                    {github && (
                        <Link
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            {...linkWrapperStyles}
                        >
                            <Button {...secondaryButtonStyles}>
                                <HStack gap={2}>
                                    <FaGithub size={12} />
                                    <span>Source</span>
                                </HStack>
                            </Button>
                        </Link>
                    )}
                </Flex>
            </VStack>
        </Box>
    );
};
