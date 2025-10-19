"use client";

import {
    Button,
    Container,
    Flex,
    Heading,
    Text,
    Box,
    VStack,
    HStack,
} from "@chakra-ui/react";
import { Link } from "react-router";
import { MainLayout } from "@/components/common/MainLayout";
import { NeonText } from "@/components/gamification/NeonText";
import { GlitchText } from "@/components/gamification/GlitchText";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { hackerColors } from "@/theme/colors";
import { FaArrowRight, FaTerminal } from "react-icons/fa";
import type { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
    return (
        <MainLayout>
            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                @keyframes pulse-glow {
                    0%, 100% {
                        box-shadow: 0 0 20px ${hackerColors.neonGreen};
                    }
                    50% {
                        box-shadow: 0 0 40px ${hackerColors.neonGreen}, 0 0 60px ${hackerColors.neonGreen};
                    }
                }

                @keyframes scan-horizontal {
                    0% {
                        top: 0;
                    }
                    100% {
                        top: 100%;
                    }
                }

                @keyframes blink-cursor {
                    0%, 49% {
                        opacity: 1;
                    }
                    50%, 100% {
                        opacity: 0;
                    }
                }

                .cyber-button {
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .cyber-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.5s;
                }

                .cyber-button:hover::before {
                    left: 100%;
                }

                .scanning-line {
                    animation: scan-horizontal 3s infinite;
                }

                .tech-badge {
                    position: relative;
                    overflow: hidden;
                }

                .tech-badge::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                        45deg,
                        transparent,
                        rgba(0, 255, 65, 0.1),
                        transparent
                    );
                    transform: rotate(45deg);
                    animation: shine 3s infinite;
                }

                @keyframes shine {
                    0% {
                        transform: translateX(-100%) translateY(-100%) rotate(45deg);
                    }
                    100% {
                        transform: translateX(100%) translateY(100%) rotate(45deg);
                    }
                }

                .tech-badge:hover::before {
                    animation: shine 0.6s;
                }
            `}</style>

            <Container maxW="container.xl" py={{ base: 16, md: 32 }}>
                <Flex
                    direction="column"
                    align="start"
                    justify="center"
                    minH="80vh"
                    gap={12}
                >
                    {/* Terminal Header */}
                    <Box width="100%" maxW="2xl">
                        <HStack mb={6} gap={2}>
                            <FaTerminal
                                color={hackerColors.neonGreen}
                                size={20}
                            />
                            <Text
                                fontSize="xs"
                                fontFamily="monospace"
                                color={hackerColors.neonGreen}
                            >
                                ~/terminal/portfolio.sh
                            </Text>
                        </HStack>

                        {/* Glitch Title */}
                        <Box mb={8}>
                            <GlitchText color="green">
                                <Heading
                                    as="h1"
                                    size="4xl"
                                    fontWeight="bold"
                                    fontFamily="monospace"
                                >
                                    FULL-STACK ENGINEER
                                </Heading>
                            </GlitchText>
                        </Box>

                        {/* Subtitle with typewriter effect */}
                        <Box mb={8}>
                            <NeonText
                                color="cyan"
                                glow
                                typewriter
                                delay={0}
                                fontSize="xl"
                            >
                                &gt; Crafting elegant, performant frontend
                                experiences
                            </NeonText>
                            <NeonText
                                color="cyan"
                                glow
                                typewriter
                                delay={2}
                                fontSize="xl"
                            >
                                &gt; Building robust backend systems
                            </NeonText>
                        </Box>
                    </Box>

                    {/* Description Terminal Box */}
                    <TerminalBox title="// About Me" color="green">
                        <VStack align="start" gap={3}>
                            <Text
                                color={hackerColors.textPrimary}
                                fontSize="sm"
                                lineHeight="1.8"
                            >
                                Welcome to my digital workspace. I'm Pete, a
                                full-stack engineer with a deep passion for
                                frontend development.
                            </Text>
                            <Text
                                color={hackerColors.textPrimary}
                                fontSize="sm"
                                lineHeight="1.8"
                            >
                                I build modern, responsive applications using
                                React, TypeScript, and cutting-edge
                                technologies. Every project is an opportunity to
                                create something exceptional.
                            </Text>
                            <Text
                                color={hackerColors.neonGreen}
                                fontSize="xs"
                                fontFamily="monospace"
                            >
                                &gt; Status: Open to opportunities
                            </Text>
                        </VStack>
                    </TerminalBox>

                    {/* CTA Buttons */}
                    <HStack gap={4} flexWrap="wrap" pt={4}>
                        {/* Primary Button */}
                        <Link to="/projects">
                            <Button
                                className="cyber-button"
                                size="lg"
                                px={8}
                                bg={hackerColors.neonGreen}
                                color={hackerColors.darkBg}
                                fontWeight="bold"
                                fontFamily="monospace"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "translateY(-3px)",
                                    boxShadow: `0 0 20px ${hackerColors.neonGreen}`,
                                    bg: hackerColors.neonGreen,
                                }}
                                _active={{
                                    transform: "translateY(-1px)",
                                }}
                            >
                                <HStack gap={2}>
                                    <span>&gt; View Projects</span>
                                    <FaArrowRight size={16} />
                                </HStack>
                            </Button>
                        </Link>

                        {/* Secondary Button */}
                        <Link to="/contact">
                            <Button
                                className="cyber-button"
                                size="lg"
                                px={8}
                                bg="transparent"
                                color={hackerColors.neonCyan}
                                border={`2px solid ${hackerColors.neonCyan}`}
                                fontWeight="bold"
                                fontFamily="monospace"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "translateY(-3px)",
                                    boxShadow: `0 0 20px ${hackerColors.neonCyan}`,
                                    bg: "rgba(0, 212, 255, 0.1)",
                                }}
                                _active={{
                                    transform: "translateY(-1px)",
                                }}
                            >
                                <HStack gap={2}>
                                    <span>&gt; Get in Touch</span>
                                    <FaArrowRight size={16} />
                                </HStack>
                            </Button>
                        </Link>
                    </HStack>

                    {/* Stats/Info Cards */}
                    <HStack gap={6} pt={8} flexWrap="wrap" width="100%">
                        <Box
                            px={6}
                            py={4}
                            border={`1px solid ${hackerColors.borderNeon}`}
                            bg={hackerColors.darkBg3}
                            borderRadius="4px"
                            transition="all 0.3s"
                            _hover={{
                                boxShadow: hackerColors.glowGreen,
                                borderColor: hackerColors.neonGreen,
                            }}
                        >
                            <NeonText color="green" glow fontSize="2xl">
                                5+
                            </NeonText>
                            <Text
                                color={hackerColors.textSecondary}
                                fontSize="xs"
                                fontFamily="monospace"
                            >
                                Years Experience
                            </Text>
                        </Box>

                        <Box
                            px={6}
                            py={4}
                            border={`1px solid ${hackerColors.borderNeon}`}
                            bg={hackerColors.darkBg3}
                            borderRadius="4px"
                            transition="all 0.3s"
                            _hover={{
                                boxShadow: hackerColors.glowCyan,
                                borderColor: hackerColors.neonCyan,
                            }}
                        >
                            <NeonText color="cyan" glow fontSize="2xl">
                                50+
                            </NeonText>
                            <Text
                                color={hackerColors.textSecondary}
                                fontSize="xs"
                                fontFamily="monospace"
                            >
                                Projects Shipped
                            </Text>
                        </Box>

                        <Box
                            px={6}
                            py={4}
                            border={`1px solid ${hackerColors.borderNeon}`}
                            bg={hackerColors.darkBg3}
                            borderRadius="4px"
                            transition="all 0.3s"
                            _hover={{
                                boxShadow: "0 0 10px rgba(179, 0, 255, 0.6)",
                                borderColor: hackerColors.neonPurple,
                            }}
                        >
                            <NeonText color="purple" glow fontSize="2xl">
                                100%
                            </NeonText>
                            <Text
                                color={hackerColors.textSecondary}
                                fontSize="xs"
                                fontFamily="monospace"
                            >
                                Passion Level
                            </Text>
                        </Box>
                    </HStack>

                    {/* Quick Skills Preview */}
                    <Box width="100%" maxW="4xl" pt={8}>
                        <VStack align="start" width="100%" gap={6}>
                            {/* Section Header */}
                            <Box>
                                <HStack gap={2} mb={2}>
                                    <Text
                                        fontSize="xs"
                                        fontFamily="monospace"
                                        color={hackerColors.neonGreen}
                                    >
                                        // Tech Stack
                                    </Text>
                                    <Box
                                        width="2px"
                                        height="16px"
                                        bg={hackerColors.neonGreen}
                                        opacity={0.5}
                                    />
                                </HStack>
                            </Box>

                            {/* Tech Badges */}
                            <HStack gap={3} flexWrap="wrap">
                                {[
                                    { name: "React", color: "cyan" },
                                    { name: "TypeScript", color: "green" },
                                    { name: "Node.js", color: "green" },
                                    { name: "Chakra UI", color: "purple" },
                                    { name: "Performance", color: "cyan" },
                                    { name: "Full-Stack", color: "pink" },
                                ].map((skill) => {
                                    const colorMap: Record<string, string> = {
                                        green: hackerColors.neonGreen,
                                        cyan: hackerColors.neonCyan,
                                        purple: hackerColors.neonPurple,
                                        pink: hackerColors.neonPink,
                                    };

                                    const glowMap: Record<string, string> = {
                                        green: hackerColors.glowGreen,
                                        cyan: hackerColors.glowCyan,
                                        purple: "0 0 10px rgba(179, 0, 255, 0.6)",
                                        pink: "0 0 10px rgba(255, 0, 110, 0.6)",
                                    };

                                    const selectedColor = colorMap[skill.color];
                                    const selectedGlow = glowMap[skill.color];

                                    return (
                                        <Box
                                            key={skill.name}
                                            className="tech-badge"
                                            px={4}
                                            py={2.5}
                                            bg={`rgba(0, 255, 65, 0.05)`}
                                            border={`1.5px solid ${selectedColor}`}
                                            borderRadius="6px"
                                            fontSize="sm"
                                            fontFamily="monospace"
                                            fontWeight="600"
                                            color={selectedColor}
                                            transition="all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
                                            position="relative"
                                            cursor="pointer"
                                            _hover={{
                                                transform:
                                                    "translateY(-6px) scale(1.05)",
                                                boxShadow: selectedGlow,
                                                bg: `rgba(0, 255, 65, 0.15)`,
                                                borderColor: selectedColor,
                                            }}
                                            _active={{
                                                transform:
                                                    "translateY(-3px) scale(1.02)",
                                            }}
                                        >
                                            <Box position="relative" zIndex={1}>
                                                &lt;{skill.name} /&gt;
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </HStack>

                            {/* Visual Separator */}
                            <Box
                                width="100%"
                                height="1px"
                                background={`linear-gradient(90deg, ${hackerColors.neonGreen}, transparent)`}
                                opacity={0.3}
                            />

                            {/* Status Line */}
                            <Text
                                fontSize="xs"
                                fontFamily="monospace"
                                color={hackerColors.textSecondary}
                            >
                                <NeonText color="green" glow={false}>
                                    &gt;
                                </NeonText>{" "}
                                Always learning new technologies and best
                                practices
                            </Text>
                        </VStack>
                    </Box>
                </Flex>
            </Container>
        </MainLayout>
    );
};

export default Home;
