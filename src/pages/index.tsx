"use client";

import {
    Button,
    Container,
    Flex,
    Text,
    Box,
    VStack,
    HStack,
    Heading,
} from "@chakra-ui/react";
import { Link } from "react-router";
import { MainLayout } from "@/components/common/MainLayout";
import { NeonText } from "@/components/gamification/NeonText";
import { GlitchText } from "@/components/gamification/GlitchText";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { hackerColors } from "@/theme/colors";
import { FaArrowRight, FaTerminal, FaDownload, FaCircle } from "react-icons/fa";
import type { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
    return (
        <MainLayout>
            <style>{`
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
            `}</style>

            {/* OPTION A: Minimalist Hero-Focused */}
            <Container maxW="container.xl" py={{ base: 16, md: 20 }}>
                {/* Hero Section - Centered & Clean */}
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    minH="90vh"
                    textAlign="center"
                    gap={10}
                >
                    {/* Terminal Header */}
                    <HStack gap={2}>
                        <FaTerminal color={hackerColors.neonGreen} size={20} />
                        <Text
                            fontSize="xs"
                            fontFamily="monospace"
                            color={hackerColors.neonGreen}
                        >
                            ~/terminal/portfolio.sh
                        </Text>
                    </HStack>

                    {/* Main Title */}
                    <VStack gap={6}>
                        <GlitchText
                            color="green"
                            secondaryText="SOFTWARE ENGINEER"
                        >
                            <Heading
                                as="h1"
                                fontSize={{ base: "5xl", md: "7xl" }}
                                fontWeight="bold"
                                fontFamily="monospace"
                            >
                                FULL-STACK ENGINEER
                            </Heading>
                        </GlitchText>

                        {/* Subtitle */}
                        <VStack gap={3}>
                            <NeonText color="cyan" glow fontSize="xl">
                                &gt; Crafting elegant, performant experiences
                            </NeonText>
                            <NeonText color="cyan" glow fontSize="xl">
                                &gt; Building robust backend systems
                            </NeonText>
                        </VStack>
                    </VStack>

                    {/* Availability Badge */}
                    <HStack
                        gap={3}
                        px={8}
                        py={3}
                        bg={`rgba(0, 255, 65, 0.1)`}
                        border={`2px solid ${hackerColors.neonGreen}`}
                        borderRadius="8px"
                    >
                        <Box
                            as={FaCircle}
                            color={hackerColors.neonGreen}
                            animation="pulse 2s infinite"
                            fontSize="12px"
                        />
                        <Text
                            color={hackerColors.neonGreen}
                            fontSize="md"
                            fontFamily="monospace"
                            fontWeight="bold"
                        >
                            OPEN TO OPPORTUNITIES
                        </Text>
                    </HStack>

                    {/* CTA Buttons */}
                    <HStack gap={5} flexWrap="wrap" justify="center" pt={4}>
                        <Link to="/projects">
                            <Button
                                className="cyber-button"
                                size="lg"
                                px={12}
                                py={7}
                                bg={hackerColors.neonGreen}
                                color={hackerColors.darkBg}
                                fontWeight="bold"
                                fontFamily="monospace"
                                fontSize="md"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "translateY(-4px)",
                                    boxShadow: `0 0 30px ${hackerColors.neonGreen}`,
                                }}
                            >
                                <HStack gap={3}>
                                    <span>&gt; View Projects</span>
                                    <FaArrowRight size={18} />
                                </HStack>
                            </Button>
                        </Link>

                        <a
                            href="/resume.pdf"
                            download="Pete_Resume.pdf"
                            style={{ textDecoration: "none" }}
                        >
                            <Button
                                className="cyber-button"
                                size="lg"
                                px={12}
                                py={7}
                                bg="transparent"
                                color={hackerColors.neonCyan}
                                border={`2px solid ${hackerColors.neonCyan}`}
                                fontWeight="bold"
                                fontFamily="monospace"
                                fontSize="md"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "translateY(-4px)",
                                    boxShadow: `0 0 30px ${hackerColors.neonCyan}`,
                                    bg: "rgba(0, 212, 255, 0.1)",
                                }}
                            >
                                <HStack gap={3}>
                                    <FaDownload size={18} />
                                    <span>Download Resume</span>
                                </HStack>
                            </Button>
                        </a>
                    </HStack>
                </Flex>

                {/* Value Proposition - 3 Cards */}
                <VStack gap={20} py={24}>
                    <Text
                        fontSize="sm"
                        fontFamily="monospace"
                        color={hackerColors.neonGreen}
                        textAlign="center"
                    >
                        // What Makes Me Different
                    </Text>

                    <Flex
                        gap={8}
                        flexWrap="wrap"
                        justify="center"
                        maxW="6xl"
                        mx="auto"
                    >
                        {[
                            {
                                icon: "⚡",
                                title: "Performance Expert",
                                desc: "I optimize applications for speed and scalability, ensuring exceptional user experiences",
                                color: "cyan",
                            },
                            {
                                icon: "🎨",
                                title: "Frontend Specialist",
                                desc: "Deep expertise in React and modern UX/UI, crafting interfaces users love",
                                color: "green",
                            },
                            {
                                icon: "🔧",
                                title: "Full-Stack Ready",
                                desc: "From backend architecture to deployment, I handle the entire development lifecycle",
                                color: "purple",
                            },
                        ].map((item, idx) => {
                            const colorMap: Record<string, string> = {
                                green: hackerColors.neonGreen,
                                cyan: hackerColors.neonCyan,
                                purple: hackerColors.neonPurple,
                            };
                            const glowMap: Record<string, string> = {
                                green: hackerColors.glowGreen,
                                cyan: hackerColors.glowCyan,
                                purple: "0 0 10px rgba(179, 0, 255, 0.6)",
                            };

                            return (
                                <Box
                                    key={idx}
                                    flex="1"
                                    minW="280px"
                                    maxW="360px"
                                    px={8}
                                    py={8}
                                    bg={hackerColors.darkBg3}
                                    border={`1px solid ${hackerColors.borderNeon}`}
                                    borderRadius="12px"
                                    transition="all 0.4s"
                                    textAlign="center"
                                    _hover={{
                                        borderColor: colorMap[item.color],
                                        boxShadow: glowMap[item.color],
                                        transform: "translateY(-8px)",
                                    }}
                                >
                                    <Text fontSize="4xl" mb={4}>
                                        {item.icon}
                                    </Text>
                                    <Text
                                        fontSize="lg"
                                        fontWeight="bold"
                                        color={colorMap[item.color]}
                                        mb={3}
                                        fontFamily="monospace"
                                    >
                                        {item.title}
                                    </Text>
                                    <Text
                                        fontSize="sm"
                                        color={hackerColors.textPrimary}
                                        lineHeight="1.7"
                                    >
                                        {item.desc}
                                    </Text>
                                </Box>
                            );
                        })}
                    </Flex>

                    {/* Featured Project Teaser */}
                    <Box width="100%" maxW="4xl" mx="auto">
                        <TerminalBox title="// Featured Project" color="cyan">
                            <VStack align="start" gap={4}>
                                <NeonText color="cyan" fontSize="2xl">
                                    Typeahead Search Engine
                                </NeonText>
                                <Text
                                    color={hackerColors.textPrimary}
                                    fontSize="md"
                                    lineHeight="1.7"
                                >
                                    High-performance autocomplete with 2.3ms
                                    response time, serving 10K+ users. Built
                                    with React, TypeScript, and performance
                                    optimization at its core.
                                </Text>
                                <HStack gap={4} pt={2}>
                                    <a
                                        href="https://typeahead.ratchapol.me/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            size="md"
                                            bg={hackerColors.neonCyan}
                                            color={hackerColors.darkBg}
                                            fontFamily="monospace"
                                            _hover={{
                                                boxShadow:
                                                    hackerColors.glowCyan,
                                                transform: "translateY(-2px)",
                                            }}
                                        >
                                            View Live Demo →
                                        </Button>
                                    </a>
                                    <Link to="/projects">
                                        <Button
                                            size="md"
                                            bg="transparent"
                                            border={`1px solid ${hackerColors.neonGreen}`}
                                            color={hackerColors.neonGreen}
                                            fontFamily="monospace"
                                            _hover={{
                                                boxShadow:
                                                    hackerColors.glowGreen,
                                                bg: "rgba(0, 255, 65, 0.1)",
                                                transform: "translateY(-2px)",
                                            }}
                                        >
                                            View All Projects →
                                        </Button>
                                    </Link>
                                </HStack>
                            </VStack>
                        </TerminalBox>
                    </Box>

                    {/* Footer CTA */}
                    <Box textAlign="center" pt={12}>
                        <Text
                            fontSize="sm"
                            fontFamily="monospace"
                            color={hackerColors.textSecondary}
                            mb={6}
                        >
                            <NeonText color="green" glow={false}>
                                &gt;
                            </NeonText>{" "}
                            Ready to build something amazing together?
                        </Text>
                        <Link to="/contact">
                            <Button
                                size="lg"
                                bg="transparent"
                                border={`2px solid ${hackerColors.neonGreen}`}
                                color={hackerColors.neonGreen}
                                fontFamily="monospace"
                                fontWeight="bold"
                                _hover={{
                                    boxShadow: hackerColors.glowGreen,
                                    bg: "rgba(0, 255, 65, 0.1)",
                                    transform: "translateY(-3px)",
                                }}
                            >
                                <HStack gap={2}>
                                    <span>Get in Touch</span>
                                    <FaArrowRight size={16} />
                                </HStack>
                            </Button>
                        </Link>
                    </Box>
                </VStack>
            </Container>
        </MainLayout>
    );
};

export default Home;
