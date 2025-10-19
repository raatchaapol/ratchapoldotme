"use client";

import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { hackerColors } from "@/theme/colors";
import { NeonText } from "@/components/gamification/NeonText";
import { PERSONAL_INFO } from "@/shared/constants";
import type { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            as="footer"
            bg={hackerColors.darkBg2}
            borderTopWidth="2px"
            borderTopColor={hackerColors.borderNeon}
            boxShadow={`0 0 20px rgba(0, 255, 65, 0.1)`}
        >
            <Container maxW="container.xl" py={8}>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="space-between"
                    align={{ base: "start", md: "center" }}
                    gap={6}
                >
                    {/* Copyright */}
                    <Text
                        color={hackerColors.textSecondary}
                        fontSize="sm"
                        fontFamily="monospace"
                    >
                        © {currentYear}{" "}
                        <NeonText color="green" glow={false} as="span">
                            ratchapol.me
                        </NeonText>
                        . All rights reserved.
                    </Text>

                    {/* Social Links */}
                    <HStack gap={6}>
                        <Link
                            href={PERSONAL_INFO.GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                            _hover={{ textDecoration: "none" }}
                            transition="all 0.3s"
                        >
                            <Box
                                as={FaGithub}
                                color={hackerColors.textSecondary}
                                _hover={{
                                    color: hackerColors.neonGreen,
                                    filter: `drop-shadow(0 0 10px ${hackerColors.neonGreen})`,
                                }}
                                transition="all 0.2s"
                            />
                        </Link>
                        <Link
                            href={PERSONAL_INFO.LINKEDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                            _hover={{ textDecoration: "none" }}
                            transition="all 0.3s"
                        >
                            <Box
                                as={FaLinkedin}
                                color={hackerColors.textSecondary}
                                _hover={{
                                    color: hackerColors.neonCyan,
                                    filter: `drop-shadow(0 0 10px ${hackerColors.neonCyan})`,
                                }}
                                transition="all 0.2s"
                            />
                        </Link>
                        <Link
                            href={`mailto:${PERSONAL_INFO.EMAIL}`}
                            _hover={{ textDecoration: "none" }}
                            transition="all 0.3s"
                        >
                            <Box
                                as={FaEnvelope}
                                color={hackerColors.textSecondary}
                                _hover={{
                                    color: hackerColors.neonPurple,
                                    filter: `drop-shadow(0 0 10px ${hackerColors.neonPurple})`,
                                }}
                                transition="all 0.2s"
                            />
                        </Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};
