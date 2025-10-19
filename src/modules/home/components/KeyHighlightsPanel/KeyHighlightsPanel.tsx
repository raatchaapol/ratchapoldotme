"use client";

import { VStack, HStack, Text, Box } from "@chakra-ui/react";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface HighlightItem {
    label: string;
    level: string;
    color: "green" | "cyan" | "purple" | "pink";
}

interface KeyHighlightsPanelProps {
    highlights: readonly HighlightItem[];
}

const colorMap = {
    green: hackerColors.neonGreen,
    cyan: hackerColors.neonCyan,
    purple: hackerColors.neonPurple,
    pink: hackerColors.neonPink,
};

export const KeyHighlightsPanel: FunctionComponent<KeyHighlightsPanelProps> = ({
    highlights,
}) => {
    return (
        <TerminalBox title="key.highlights">
            <VStack align="stretch" gap={3}>
                {highlights.map((item) => (
                    <HStack key={item.label} justify="space-between">
                        <HStack gap={2}>
                            <Box
                                w="6px"
                                h="6px"
                                bg={colorMap[item.color]}
                                borderRadius="full"
                            />
                            <Text
                                color={hackerColors.textPrimary}
                                fontSize="sm"
                            >
                                {item.label}
                            </Text>
                        </HStack>
                        <Text
                            color={colorMap[item.color]}
                            fontSize="xs"
                            fontFamily="monospace"
                            fontWeight="bold"
                        >
                            {item.level}
                        </Text>
                    </HStack>
                ))}
            </VStack>
        </TerminalBox>
    );
};
