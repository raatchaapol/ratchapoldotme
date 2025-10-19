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
import {
    navbarAnimations,
    navContainerStyles,
    logoLinkStyles,
    logoIconStyles,
    navLinkStyles,
    navLinkCss,
    themeToggleStyles,
    mobileMenuToggleStyles,
    mobileDrawerStyles,
    mobileMenuHeaderStyles,
    mobileMenuCloseButtonStyles,
    mobileMenuItemStyles,
    mobileMenuFooterStyles,
    mobileOverlayStyles,
} from "./Navbar.styles";
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
            {...navLinkStyles}
            css={navLinkCss}
            onClick={() => setIsMobileMenuOpen(false)}
        >
            {label}
        </Link>
    );

    return (
        <>
            <style>{navbarAnimations}</style>

            <Box as="nav" className="cyber-border" {...navContainerStyles}>
                <Container maxW="container.xl" py={4}>
                    <Flex justify="space-between" align="center">
                        {/* Logo with Terminal Icon */}
                        <Link href="/" {...logoLinkStyles}>
                            <Box as={FaTerminal} {...logoIconStyles} />
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
                                {...themeToggleStyles}
                                onClick={toggleColorMode}
                                aria-label="Toggle color mode"
                            >
                                {colorMode === "light" ? <FaMoon /> : <FaSun />}
                            </IconButton>

                            {/* Mobile Menu Toggle */}
                            {isMobile && (
                                <IconButton
                                    {...mobileMenuToggleStyles}
                                    onClick={() =>
                                        setIsMobileMenuOpen(!isMobileMenuOpen)
                                    }
                                    aria-label="Toggle menu"
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
                <Box {...mobileDrawerStyles}>
                    {/* Mobile Menu Header */}
                    <Box {...mobileMenuHeaderStyles}>
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
                                {...mobileMenuCloseButtonStyles}
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
                                {...mobileMenuItemStyles(
                                    index,
                                    NAV_LINKS.length
                                )}
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
                    <Box {...mobileMenuFooterStyles}>
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
                    {...mobileOverlayStyles}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};
