"use client";

import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import { FaChartLine } from "react-icons/fa";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface StatsCardProps {
    successRate: string;
    onTimeDelivery: string;
}

export const StatsCard: FunctionComponent<StatsCardProps> = ({
    successRate,
    onTimeDelivery,
}) => {
    return (
        <Box
            className="dashboard-card"
            bg={hackerColors.darkBg2}
            border={`2px solid ${hackerColors.neonCyan}`}
            borderRadius="10px"
            p={5}
            position="relative"
            overflow="hidden"
        >
            <VStack align="flex-start" gap={3}>
                <HStack gap={2}>
                    <FaChartLine color={hackerColors.neonCyan} size={16} />
                    <Text
                        fontSize="xs"
                        fontFamily="monospace"
                        color={hackerColors.neonCyan}
                    >
                        STATS
                    </Text>
                </HStack>

                <VStack align="flex-start" gap={2} w="full">
                    <HStack justify="space-between" w="full">
                        <Text fontSize="xs" color={hackerColors.textSecondary}>
                            Success Rate
                        </Text>
                        <Text
                            fontSize="md"
                            fontFamily="monospace"
                            color={hackerColors.neonGreen}
                            fontWeight="bold"
                        >
                            {successRate}
                        </Text>
                    </HStack>
                    <HStack justify="space-between" w="full">
                        <Text fontSize="xs" color={hackerColors.textSecondary}>
                            On-Time Delivery
                        </Text>
                        <Text
                            fontSize="md"
                            fontFamily="monospace"
                            color={hackerColors.neonCyan}
                            fontWeight="bold"
                        >
                            {onTimeDelivery}
                        </Text>
                    </HStack>
                </VStack>
            </VStack>
        </Box>
    );
};
