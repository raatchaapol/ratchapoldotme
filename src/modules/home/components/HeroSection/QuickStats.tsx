"use client";

import { HStack, VStack, Text } from "@chakra-ui/react";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface StatItem {
    value: string;
    label: string;
}

interface QuickStatsProps {
    stats: readonly StatItem[];
}

const getColorForIndex = (index: number): string => {
    const colors = [
        hackerColors.neonGreen,
        hackerColors.neonCyan,
        hackerColors.neonPurple,
    ];
    return colors[index % colors.length];
};

export const QuickStats: FunctionComponent<QuickStatsProps> = ({ stats }) => {
    return (
        <HStack gap={6} flexWrap="wrap">
            {stats.map((stat, index) => (
                <VStack key={stat.label} align="flex-start" gap={1}>
                    <Text
                        fontSize="2xl"
                        fontFamily="monospace"
                        color={getColorForIndex(index)}
                        fontWeight="bold"
                    >
                        {stat.value}
                    </Text>
                    <Text fontSize="sm" color={hackerColors.textSecondary}>
                        {stat.label}
                    </Text>
                </VStack>
            ))}
        </HStack>
    );
};
