"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { NeonText } from "./NeonText";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface SkillLevelProps {
    name: string;
    level: number; // 1-10
}

export const SkillLevel: FunctionComponent<SkillLevelProps> = ({
    name,
    level,
}) => {
    const percentage = (level / 10) * 100;

    return (
        <VStack align="start" width="100%" gap={2}>
            <HStack justify="space-between" width="100%">
                <Text
                    fontSize="sm"
                    color={hackerColors.textPrimary}
                    fontFamily="monospace"
                    fontWeight="medium"
                >
                    {name}
                </Text>
                <NeonText color="cyan" glow fontSize="sm">
                    {level}/10
                </NeonText>
            </HStack>

            {/* Progress Bar */}
            <Box
                width="100%"
                height="8px"
                bg={hackerColors.darkBg2}
                border={`1px solid ${hackerColors.borderNeon}`}
                borderRadius="2px"
                position="relative"
                overflow="hidden"
            >
                {/* Filled portion */}
                <Box
                    height="100%"
                    width={`${percentage}%`}
                    bg={hackerColors.neonGreen}
                    transition="width 0.6s ease"
                    boxShadow={hackerColors.glowGreen}
                />

                {/* Animated scan line */}
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    background="linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
                    animation="scan 2s infinite"
                />
            </Box>

            <style>{`
                @keyframes scan {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </VStack>
    );
};
