"use client";

import { Box, HStack, Text } from "@chakra-ui/react";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent, ReactNode } from "react";

interface TerminalBoxProps {
    children: ReactNode;
    title?: string;
    color?: "green" | "cyan" | "purple";
}

export const TerminalBox: FunctionComponent<TerminalBoxProps> = ({
    children,
    title,
    color = "green",
}) => {
    const colorMap = {
        green: hackerColors.neonGreen,
        cyan: hackerColors.neonCyan,
        purple: hackerColors.neonPurple,
    };

    const selectedColor = colorMap[color];

    return (
        <Box
            border={`1px solid ${hackerColors.borderNeon}`}
            borderRadius="4px"
            bg={hackerColors.darkBg3}
            p={4}
            position="relative"
            overflow="hidden"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: selectedColor,
                boxShadow: hackerColors.glowGreen,
                opacity: 0.5,
            }}
        >
            {/* Terminal Header */}
            {title && (
                <HStack
                    mb={4}
                    pb={2}
                    borderBottom={`1px solid ${hackerColors.borderNeon}`}
                >
                    <Box display="flex" gap={1}>
                        <Box
                            w={3}
                            h={3}
                            borderRadius="50%"
                            bg={selectedColor}
                        />
                        <Box
                            w={3}
                            h={3}
                            borderRadius="50%"
                            bg={selectedColor}
                            opacity={0.5}
                        />
                        <Box
                            w={3}
                            h={3}
                            borderRadius="50%"
                            bg={selectedColor}
                            opacity={0.3}
                        />
                    </Box>
                    <Text
                        fontSize="xs"
                        color={selectedColor}
                        fontFamily="monospace"
                    >
                        {title}
                    </Text>
                </HStack>
            )}

            {/* Content */}
            <Box
                color={hackerColors.textPrimary}
                fontFamily="monospace"
                fontSize="sm"
            >
                {children}
            </Box>
        </Box>
    );
};
