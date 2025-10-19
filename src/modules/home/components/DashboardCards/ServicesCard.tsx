"use client";

import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import { FaBolt } from "react-icons/fa";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface ServiceItem {
    label: string;
    color: "green" | "cyan" | "purple" | "pink";
}

interface ServicesCardProps {
    services: readonly ServiceItem[];
}

const colorMap = {
    green: hackerColors.neonGreen,
    cyan: hackerColors.neonCyan,
    purple: hackerColors.neonPurple,
    pink: hackerColors.neonPink,
};

export const ServicesCard: FunctionComponent<ServicesCardProps> = ({
    services,
}) => {
    return (
        <Box
            className="dashboard-card"
            bg={hackerColors.darkBg2}
            border={`2px solid ${hackerColors.neonPink}`}
            borderRadius="10px"
            p={5}
            position="relative"
            overflow="hidden"
        >
            <VStack align="flex-start" gap={3}>
                <HStack gap={2}>
                    <FaBolt color={hackerColors.neonPink} size={16} />
                    <Text
                        fontSize="xs"
                        fontFamily="monospace"
                        color={hackerColors.neonPink}
                    >
                        SERVICES
                    </Text>
                </HStack>

                <VStack align="stretch" gap={2} w="full">
                    {services.map((service) => (
                        <HStack key={service.label} gap={2}>
                            <Box
                                w="5px"
                                h="5px"
                                bg={colorMap[service.color]}
                                borderRadius="full"
                            />
                            <Text
                                color={hackerColors.textPrimary}
                                fontSize="xs"
                            >
                                {service.label}
                            </Text>
                        </HStack>
                    ))}
                </VStack>
            </VStack>
        </Box>
    );
};
