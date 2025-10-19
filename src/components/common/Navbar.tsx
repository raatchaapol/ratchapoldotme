"use client";

import { Box, Button, Container, Flex, HStack } from "@chakra-ui/react";
import { FaMoon, FaSun, FaTerminal } from "react-icons/fa";
import { useColorMode } from "@/components/ui/color-mode";
import { hackerColors } from "@/theme/colors";
import { NeonText } from "@/components/gamification/NeonText";
import type { FunctionComponent } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
];

export const Navbar: FunctionComponent = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isMobile = false;

    return (
        <Box
            as="nav"
            bg={hackerColors.darkBg2}
            borderBottomWidth="2px"
            borderBottomColor={hackerColors.borderNeon}
            position="sticky"
            top="0"
            zIndex="10"
            boxShadow={`0 0 20px rgba(0, 255, 65, 0.1)`}
        >
            <Container maxW="container.xl" py={4}>
                <Flex justify="space-between" align="center">
                    {/* Logo with Terminal Icon */}
                    <a
                        href="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            textDecoration: "none",
                        }}
                    >
                        <Box as={FaTerminal} color={hackerColors.neonGreen} />
                        <NeonText color="green" glow as="span">
                            ratchapol.me
                        </NeonText>
                    </a>

                    {/* Nav Links - Hide on mobile */}
                    {!isMobile && (
                        <HStack gap={8}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        color: hackerColors.textPrimary,
                                        textDecoration: "none",
                                        fontFamily: "monospace",
                                        fontSize: "14px",
                                        transition: "all 0.3s",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color =
                                            hackerColors.neonGreen;
                                        e.currentTarget.style.textShadow =
                                            hackerColors.glowGreen;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color =
                                            hackerColors.textPrimary;
                                        e.currentTarget.style.textShadow =
                                            "none";
                                    }}
                                >
                                    &gt; {link.label}
                                </a>
                            ))}
                        </HStack>
                    )}

                    {/* Theme Toggle */}
                    <Button
                        size="sm"
                        bg="transparent"
                        border={`1px solid ${hackerColors.borderNeon}`}
                        color={hackerColors.neonGreen}
                        _hover={{
                            bg: hackerColors.darkBg3,
                            boxShadow: hackerColors.glowGreen,
                        }}
                        onClick={toggleColorMode}
                        aria-label="Toggle color mode"
                    >
                        {colorMode === "light" ? <FaMoon /> : <FaSun />}
                    </Button>
                </Flex>
            </Container>
        </Box>
    );
};
