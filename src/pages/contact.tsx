"use client";

import {
    Container,
    VStack,
    Text,
    Box,
    HStack,
    Button,
    Flex,
} from "@chakra-ui/react";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaClock,
    FaArrowRight,
} from "react-icons/fa";
import { MainLayout } from "@/components/common/MainLayout";
import { GlitchText } from "@/components/gamification/GlitchText";
import { NeonText } from "@/components/gamification/NeonText";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { hackerColors } from "@/theme/colors";
import { contactEmail } from "@/content/social";
import type { FunctionComponent } from "react";

const Contact: FunctionComponent = () => {
    return (
        <MainLayout>
            <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
                {/* Page Title */}
                <VStack align="start" gap={8} mb={12}>
                    <Box>
                        <Text
                            fontSize="xs"
                            fontFamily="monospace"
                            color={hackerColors.neonGreen}
                            mb={4}
                        >
                            // Contact
                        </Text>
                        <GlitchText color="green">
                            <Text
                                as="h1"
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="bold"
                                fontFamily="monospace"
                            >
                                GET IN TOUCH
                            </Text>
                        </GlitchText>
                        <Box mt={3}>
                            <NeonText color="cyan" fontSize="lg">
                                &gt; Let's connect and build something amazing
                            </NeonText>
                        </Box>
                    </Box>
                </VStack>

                <VStack align="stretch" gap={8} maxW="4xl">
                    {/* Email Section */}
                    <TerminalBox title="// Email" color="green">
                        <VStack align="start" gap={4}>
                            <Text
                                color={hackerColors.textPrimary}
                                fontSize="md"
                            >
                                Ready to collaborate? Send me a message:
                            </Text>
                            <Box>
                                <Text
                                    color={hackerColors.neonGreen}
                                    fontSize="lg"
                                    fontFamily="monospace"
                                    mb={3}
                                >
                                    {contactEmail}
                                </Text>
                                <a
                                    href={`mailto:${contactEmail}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button
                                        size="md"
                                        bg={hackerColors.neonGreen}
                                        color={hackerColors.darkBg}
                                        fontFamily="monospace"
                                        fontWeight="bold"
                                        _hover={{
                                            boxShadow: hackerColors.glowGreen,
                                            transform: "translateY(-2px)",
                                        }}
                                    >
                                        <HStack gap={2}>
                                            <FaEnvelope size={14} />
                                            <span>Send Email</span>
                                            <FaArrowRight size={12} />
                                        </HStack>
                                    </Button>
                                </a>
                            </Box>
                        </VStack>
                    </TerminalBox>

                    {/* Social Links */}
                    <TerminalBox title="// Social Networks" color="cyan">
                        <VStack align="start" gap={4}>
                            <Text
                                color={hackerColors.textPrimary}
                                fontSize="md"
                            >
                                Connect with me on social platforms:
                            </Text>
                            <Flex gap={4} flexWrap="wrap">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button
                                        size="md"
                                        bg="transparent"
                                        border={`2px solid ${hackerColors.neonCyan}`}
                                        color={hackerColors.neonCyan}
                                        fontFamily="monospace"
                                        fontWeight="bold"
                                        _hover={{
                                            boxShadow: hackerColors.glowCyan,
                                            bg: "rgba(0, 212, 255, 0.1)",
                                            transform: "translateY(-2px)",
                                        }}
                                    >
                                        <HStack gap={2}>
                                            <FaGithub size={16} />
                                            <span>GitHub</span>
                                        </HStack>
                                    </Button>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button
                                        size="md"
                                        bg="transparent"
                                        border={`2px solid ${hackerColors.neonCyan}`}
                                        color={hackerColors.neonCyan}
                                        fontFamily="monospace"
                                        fontWeight="bold"
                                        _hover={{
                                            boxShadow: hackerColors.glowCyan,
                                            bg: "rgba(0, 212, 255, 0.1)",
                                            transform: "translateY(-2px)",
                                        }}
                                    >
                                        <HStack gap={2}>
                                            <FaLinkedin size={16} />
                                            <span>LinkedIn</span>
                                        </HStack>
                                    </Button>
                                </a>
                            </Flex>
                        </VStack>
                    </TerminalBox>

                    {/* Response Time Info */}
                    <TerminalBox title="// Response Time" color="purple">
                        <HStack align="start" gap={4}>
                            <Box
                                as={FaClock}
                                color={hackerColors.neonPurple}
                                fontSize="2xl"
                                mt={1}
                            />
                            <VStack align="start" gap={2}>
                                <Text
                                    color={hackerColors.neonPurple}
                                    fontSize="md"
                                    fontWeight="bold"
                                >
                                    Usually within 24 hours
                                </Text>
                                <Text
                                    color={hackerColors.textPrimary}
                                    fontSize="sm"
                                    lineHeight="1.6"
                                >
                                    I typically respond to emails within 24
                                    hours. Feel free to reach out with any
                                    questions, collaboration opportunities, or
                                    just to say hello!
                                </Text>
                            </VStack>
                        </HStack>
                    </TerminalBox>

                    {/* Footer Message */}
                    <Box pt={4}>
                        <Text
                            fontSize="xs"
                            fontFamily="monospace"
                            color={hackerColors.textSecondary}
                        >
                            <NeonText color="green" glow={false}>
                                &gt;
                            </NeonText>{" "}
                            Looking forward to hearing from you!
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </MainLayout>
    );
};

export default Contact;
