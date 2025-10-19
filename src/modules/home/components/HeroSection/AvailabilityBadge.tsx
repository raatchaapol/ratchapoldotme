"use client";

import { HStack, Text, Box } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface AvailabilityBadgeProps {
    status: string;
    active: boolean;
}

export const AvailabilityBadge: FunctionComponent<AvailabilityBadgeProps> = ({
    status,
    active,
}) => {
    return (
        <HStack
            gap={3}
            px={6}
            py={3}
            bg={`rgba(0, 255, 65, 0.1)`}
            border={`2px solid ${hackerColors.neonGreen}`}
            borderRadius="8px"
        >
            <Box
                as={FaCircle}
                color={hackerColors.neonGreen}
                animation={active ? "pulse 2s infinite" : undefined}
                fontSize="10px"
            />
            <Text
                color={hackerColors.neonGreen}
                fontSize="sm"
                fontFamily="monospace"
                fontWeight="bold"
            >
                {status}
            </Text>
        </HStack>
    );
};
