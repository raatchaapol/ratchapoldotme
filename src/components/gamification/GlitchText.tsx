"use client";

import { Box, Text } from "@chakra-ui/react";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface GlitchTextProps {
    children: React.ReactNode;
    color?: "green" | "cyan" | "purple" | "pink";
}

export const GlitchText: FunctionComponent<GlitchTextProps> = ({
    children,
    color = "green",
}) => {
    const colorMap = {
        green: hackerColors.neonGreen,
        cyan: hackerColors.neonCyan,
        purple: hackerColors.neonPurple,
        pink: hackerColors.neonPink,
    };

    const selectedColor = colorMap[color];

    return (
        <Box position="relative" display="inline-block">
            <style>{`
                @keyframes glitch {
                    0% {
                        clip-path: inset(40% 0 61% 0);
                        transform: translate(0, 0);
                    }
                    20% {
                        clip-path: inset(92% 0 1% 0);
                        transform: translate(-2px, 2px);
                    }
                    40% {
                        clip-path: inset(43% 0 1% 0);
                        transform: translate(-2px, -2px);
                    }
                    60% {
                        clip-path: inset(25% 0 58% 0);
                        transform: translate(2px, -2px);
                    }
                    80% {
                        clip-path: inset(54% 0 7% 0);
                        transform: translate(2px, 2px);
                    }
                    100% {
                        clip-path: inset(58% 0 43% 0);
                        transform: translate(0, 0);
                    }
                }

                @keyframes glitch-shadow {
                    0% {
                        text-shadow: -3px 0 #ff006e, 3px 0 #00d4ff;
                    }
                    50% {
                        text-shadow: 3px 0 #ff006e, -3px 0 #00d4ff;
                    }
                    100% {
                        text-shadow: -3px 0 #ff006e, 3px 0 #00d4ff;
                    }
                }
            `}</style>

            <Text
                color={selectedColor}
                fontWeight="bold"
                position="relative"
                _before={{
                    content: '"' + String(children) + '"',
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    opacity: 0.8,
                    color: hackerColors.neonCyan,
                    animation: "glitch 2s infinite",
                    zIndex: "-1",
                }}
                _after={{
                    content: '"' + String(children) + '"',
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    opacity: 0.8,
                    color: hackerColors.neonPink,
                    animation: "glitch 2s infinite reverse",
                    zIndex: "-2",
                }}
            >
                {children}
            </Text>
        </Box>
    );
};
