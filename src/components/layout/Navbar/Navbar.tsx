"use client";

import {
    Box,
    Container,
    Flex,
    HStack,
    IconButton,
    VStack,
    Text,
    Link,
} from "@chakra-ui/react";
import { FaMoon, FaSun, FaTerminal, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useColorMode } from "@/components/ui/color-mode";
import { hackerColors } from "@/theme/colors";
import { NeonText } from "@/components/gamification/NeonText";
import { NAV_LINKS } from "@/shared/constants";
import type { FunctionComponent } from "react";

export const Navbar: FunctionComponent = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const NavLink = ({ href, label }: { href: string; label: string }) => (
        <Link
            href={href}
            color={hackerColors.textPrimary}
            textDecoration="none"
            fontFamily="monospace"
            fontSize={{ base: "lg", md: "sm" }}
            fontWeight="medium"
            position="relative"
            transition="all 0.3s ease"
            _hover={{
                color: hackerColors.neonGreen,
                textShadow: hackerColors.glowGreen,
                transform: "translateX(4px)",
            }}
            css={{
                "&::before": {
                    content: '"> "',
                    color: hackerColors.neonCyan,
                    opacity: 0,
                    marginRight: "-16px",
                    transition: "all 0.3s ease",
                },
                "&:hover::before": {
                    opacity: 1,
                    marginRight: "4px",
                },
            }}
            onClick={() => setIsMobileMenuOpen(false)}
        >
            {label}
        </Link>
    );

    return (
        <>
            <style>{`
                @keyframes glitch-navbar {
                    0%, 100% {
                        text-shadow: 0 0 10px ${hackerColors.neonGreen};
                    }
                    25% {
                        text-shadow: 2px 0 10px ${hackerColors.neonCyan}, -2px 0 10px ${hackerColors.neonPink};
                    }
                    50% {
                        text-shadow: 0 0 10px ${hackerColors.neonGreen};
                    }
                    75% {
                        text-shadow: -2px 0 10px ${hackerColors.neonCyan}, 2px 0 10px ${hackerColors.neonPink};
                    }
                }

                .navbar-glitch:hover {
                    animation: glitch-navbar 0.3s ease-in-out;
                }

                .mobile-menu-enter {
                    animation: slideInRight 0.3s ease-out;
                }

                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                .cyber-border {
                    position: relative;
                }

                .cyber-border::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, 
                        transparent 0%, 
                        ${hackerColors.neonCyan} 20%, 
                        ${hackerColors.neonGreen} 50%, 
                        ${hackerColors.neonCyan} 80%, 
                        transparent 100%
                    );
                    box-shadow: 0 0 10px ${hackerColors.neonGreen};
                }
            `}</style>

            <Box
                as="nav"
                className="cyber-border"
                bg={hackerColors.darkBg2}
                position="sticky"
                top="0"
                zIndex="100"
                boxShadow={`0 4px 20px rgba(0, 255, 65, 0.15)`}
                backdropFilter="blur(10px)"
            >
                <Container maxW="container.xl" py={4}>
                    <Flex justify="space-between" align="center">
                        {/* Logo with Terminal Icon */}
                        <Link
                            href="/"
                            display="flex"
                            alignItems="center"
                            gap={2}
                            textDecoration="none"
                            className="navbar-glitch"
                            transition="all 0.3s"
                            _hover={{
                                transform: "scale(1.05)",
                            }}
                        >
                            <Box
                                as={FaTerminal}
                                color={hackerColors.neonGreen}
                                fontSize="lg"
                                filter={`drop-shadow(0 0 8px ${hackerColors.neonGreen})`}
                            />
                            <NeonText color="green" glow as="span">
                                ratchapol.me
                            </NeonText>
                        </Link>

                        {/* Desktop Nav Links */}
                        {!isMobile && (
                            <HStack gap={8}>
                                {NAV_LINKS.map((link) => (
                                    <NavLink
                                        key={link.href}
                                        href={link.href}
                                        label={link.label}
                                    />
                                ))}
                            </HStack>
                        )}

                        {/* Right Side Actions */}
                        <HStack gap={2}>
                            {/* Theme Toggle */}
                            <IconButton
                                size="sm"
                                bg="transparent"
                                border={`1px solid ${hackerColors.borderNeon}`}
                                color={hackerColors.neonGreen}
                                _hover={{
                                    bg: hackerColors.darkBg3,
                                    boxShadow: hackerColors.glowGreen,
                                    transform: "translateY(-2px)",
                                }}
                                onClick={toggleColorMode}
                                aria-label="Toggle color mode"
                                transition="all 0.3s"
                            >
                                {colorMode === "light" ? <FaMoon /> : <FaSun />}
                            </IconButton>

                            {/* Mobile Menu Toggle */}
                            {isMobile && (
                                <IconButton
                                    size="sm"
                                    bg="transparent"
                                    border={`1px solid ${hackerColors.neonCyan}`}
                                    color={hackerColors.neonCyan}
                                    _hover={{
                                        bg: hackerColors.darkBg3,
                                        boxShadow: hackerColors.glowCyan,
                                        transform: "rotate(90deg)",
                                    }}
                                    onClick={() =>
                                        setIsMobileMenuOpen(!isMobileMenuOpen)
                                    }
                                    aria-label="Toggle menu"
                                    transition="all 0.3s"
                                >
                                    {isMobileMenuOpen ? (
                                        <FaTimes />
                                    ) : (
                                        <FaBars />
                                    )}
                                </IconButton>
                            )}
                        </HStack>
                    </Flex>
                </Container>
            </Box>

            {/* Mobile Menu Drawer */}
            {isMobile && isMobileMenuOpen && (
                <Box
                    position="fixed"
                    top="0"
                    right="0"
                    bottom="0"
                    width="280px"
                    bg={hackerColors.darkBg}
                    borderLeft={`2px solid ${hackerColors.neonCyan}`}
                    boxShadow={`-4px 0 30px rgba(0, 212, 255, 0.3)`}
                    zIndex="99"
                    className="mobile-menu-enter"
                    overflowY="auto"
                >
                    {/* Mobile Menu Header */}
                    <Box
                        p={6}
                        borderBottom={`1px solid ${hackerColors.borderNeon}`}
                        bg={hackerColors.darkBg2}
                    >
                        <HStack justify="space-between" mb={2}>
                            <HStack gap={2}>
                                <FaTerminal
                                    color={hackerColors.neonCyan}
                                    size={16}
                                />
                                <Text
                                    fontFamily="monospace"
                                    color={hackerColors.neonCyan}
                                    fontSize="xs"
                                >
                                    NAVIGATION
                                </Text>
                            </HStack>
                            <IconButton
                                size="xs"
                                bg="transparent"
                                color={hackerColors.neonPink}
                                _hover={{
                                    transform: "rotate(90deg)",
                                }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <FaTimes />
                            </IconButton>
                        </HStack>
                        <Text
                            fontSize="xs"
                            fontFamily="monospace"
                            color={hackerColors.textDimmed}
                        >
                            {"// Select destination"}
                        </Text>
                    </Box>

                    {/* Mobile Nav Links */}
                    <VStack align="stretch" gap={0} p={6}>
                        {NAV_LINKS.map((link, index) => (
                            <Box
                                key={link.href}
                                py={4}
                                borderBottom={
                                    index < NAV_LINKS.length - 1
                                        ? `1px solid ${hackerColors.darkBg3}`
                                        : "none"
                                }
                            >
                                <HStack gap={3}>
                                    <Text
                                        fontFamily="monospace"
                                        fontSize="xs"
                                        color={hackerColors.neonGreen}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </Text>
                                    <NavLink
                                        href={link.href}
                                        label={link.label}
                                    />
                                </HStack>
                            </Box>
                        ))}
                    </VStack>

                    {/* Mobile Menu Footer */}
                    <Box
                        position="absolute"
                        bottom="0"
                        left="0"
                        right="0"
                        p={6}
                        borderTop={`1px solid ${hackerColors.borderNeon}`}
                        bg={hackerColors.darkBg2}
                    >
                        <Text
                            fontSize="xs"
                            fontFamily="monospace"
                            color={hackerColors.textDimmed}
                            textAlign="center"
                        >
                            <Text as="span" color={hackerColors.neonGreen}>
                                &gt;
                            </Text>{" "}
                            Full-Stack Engineer
                        </Text>
                    </Box>
                </Box>
            )}

            {/* Mobile Menu Overlay */}
            {isMobile && isMobileMenuOpen && (
                <Box
                    position="fixed"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="rgba(0, 0, 0, 0.7)"
                    backdropFilter="blur(4px)"
                    zIndex="98"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};
