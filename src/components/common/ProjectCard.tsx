"use client";

import { Box, Flex, HStack, VStack, Text, Button } from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";
import { hackerColors } from "@/theme/colors";
import { NeonText } from "@/components/gamification/NeonText";
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
        <Box
            p={6}
            bg={hackerColors.darkBg3}
            border={`1px solid ${hackerColors.borderNeon}`}
            borderRadius="8px"
            transition="all 0.3s ease"
            position="relative"
            overflow="hidden"
            _hover={{
                borderColor: hackerColors.neonCyan,
                boxShadow: hackerColors.glowCyan,
                transform: "translateY(-4px)",
            }}
        >
            {/* Difficulty Stars */}
            <HStack gap={1} mb={3}>
                {[...Array(5)].map((_, idx) => (
                    <Box
                        key={idx}
                        as={FaStar}
                        color={
                            idx < difficulty
                                ? hackerColors.neonCyan
                                : hackerColors.darkBg2
                        }
                        fontSize="xs"
                    />
                ))}
                <Text
                    fontSize="xs"
                    color={hackerColors.textSecondary}
                    fontFamily="monospace"
                    ml={2}
                >
                    Difficulty
                </Text>
            </HStack>

            <VStack align="start" gap={4}>
                {/* Title */}
                <NeonText color="cyan" fontSize="xl" glow={false}>
                    {title}
                </NeonText>

                {/* Description */}
                <Text
                    color={hackerColors.textPrimary}
                    lineHeight="1.6"
                    fontSize="sm"
                >
                    {description}
                </Text>

                {/* Tags */}
                <HStack gap={2} flexWrap="wrap">
                    {tags.map((tag) => (
                        <Box
                            key={tag}
                            px={3}
                            py={1}
                            bg={`rgba(0, 212, 255, 0.1)`}
                            border={`1px solid ${hackerColors.neonCyan}`}
                            borderRadius="4px"
                            fontSize="xs"
                            fontFamily="monospace"
                            color={hackerColors.neonCyan}
                            transition="all 0.2s"
                            _hover={{
                                bg: `rgba(0, 212, 255, 0.2)`,
                                boxShadow: `0 0 10px ${hackerColors.neonCyan}`,
                            }}
                        >
                            {tag}
                        </Box>
                    ))}
                </HStack>

                {/* Links */}
                <Flex gap={3} pt={2} width="100%">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", flex: 1 }}
                    >
                        <Button
                            size="sm"
                            width="100%"
                            bg={hackerColors.neonCyan}
                            color={hackerColors.darkBg}
                            fontFamily="monospace"
                            fontWeight="bold"
                            fontSize="xs"
                            _hover={{
                                boxShadow: hackerColors.glowCyan,
                                transform: "translateY(-2px)",
                            }}
                        >
                            <HStack gap={2}>
                                <FaExternalLinkAlt size={12} />
                                <span>View Live</span>
                            </HStack>
                        </Button>
                    </a>
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", flex: 1 }}
                        >
                            <Button
                                size="sm"
                                width="100%"
                                bg="transparent"
                                border={`1px solid ${hackerColors.neonCyan}`}
                                color={hackerColors.neonCyan}
                                fontFamily="monospace"
                                fontWeight="bold"
                                fontSize="xs"
                                _hover={{
                                    boxShadow: hackerColors.glowCyan,
                                    bg: "rgba(0, 212, 255, 0.1)",
                                    transform: "translateY(-2px)",
                                }}
                            >
                                <HStack gap={2}>
                                    <FaGithub size={12} />
                                    <span>Source</span>
                                </HStack>
                            </Button>
                        </a>
                    )}
                </Flex>
            </VStack>
        </Box>
    );
};
