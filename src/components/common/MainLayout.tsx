"use client";

import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent, ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({
    children,
}) => {
    return (
        <Flex
            direction="column"
            minH="100vh"
            bg={hackerColors.darkBg}
            color={hackerColors.textPrimary}
        >
            <style>{`
                @keyframes scanlines {
                    0% {
                        background-position: 0 0;
                    }
                    100% {
                        background-position: 0 4px;
                    }
                }

                body {
                    background-color: ${hackerColors.darkBg};
                    color: ${hackerColors.textPrimary};
                }

                ::selection {
                    background-color: ${hackerColors.neonGreen};
                    color: ${hackerColors.darkBg};
                }
            `}</style>

            <Navbar />
            <Box as="main" flex="1" position="relative" overflow="hidden">
                {/* Subtle background grid effect */}
                <Box
                    position="fixed"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    backgroundImage={`
                        linear-gradient(0deg, transparent 24%, rgba(0, 255, 65, .05) 25%, rgba(0, 255, 65, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .05) 75%, rgba(0, 255, 65, .05) 76%, transparent 77%, transparent),
                        linear-gradient(90deg, transparent 24%, rgba(0, 255, 65, .05) 25%, rgba(0, 255, 65, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .05) 75%, rgba(0, 255, 65, .05) 76%, transparent 77%, transparent)
                    `}
                    backgroundSize="50px 50px"
                    pointerEvents="none"
                    zIndex={0}
                />

                {/* Content */}
                <Box position="relative" zIndex={1}>
                    {children}
                </Box>
            </Box>
            <Footer />
        </Flex>
    );
};
