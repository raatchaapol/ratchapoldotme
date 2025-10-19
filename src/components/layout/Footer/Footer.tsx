"use client";

import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { hackerColors } from "@/theme/colors";
import { NeonText } from "@/components/gamification/NeonText";
import { PERSONAL_INFO } from "@/shared/constants";
import {
    footerContainerStyles,
    copyrightTextStyles,
    socialLinkStyles,
    socialIconStyles,
} from "./Footer.styles";
import type { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box as="footer" {...footerContainerStyles}>
            <Container maxW="container.xl" py={8}>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="space-between"
                    align={{ base: "start", md: "center" }}
                    gap={6}
                >
                    {/* Copyright */}
                    <Text {...copyrightTextStyles}>
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
                            {...socialLinkStyles}
                        >
                            <Box
                                as={FaGithub}
                                {...socialIconStyles(
                                    hackerColors.neonGreen,
                                    hackerColors.neonGreen
                                )}
                            />
                        </Link>
                        <Link
                            href={PERSONAL_INFO.LINKEDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                            {...socialLinkStyles}
                        >
                            <Box
                                as={FaLinkedin}
                                {...socialIconStyles(
                                    hackerColors.neonCyan,
                                    hackerColors.neonCyan
                                )}
                            />
                        </Link>
                        <Link
                            href={`mailto:${PERSONAL_INFO.EMAIL}`}
                            {...socialLinkStyles}
                        >
                            <Box
                                as={FaEnvelope}
                                {...socialIconStyles(
                                    hackerColors.neonPurple,
                                    hackerColors.neonPurple
                                )}
                            />
                        </Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};
