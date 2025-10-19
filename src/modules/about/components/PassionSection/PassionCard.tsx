"use client";

import { Box, Text } from "@chakra-ui/react";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";
import type { IconType } from "react-icons";

interface PassionCardProps {
    icon: IconType;
    title: string;
    description: string;
}

export const PassionCard: FunctionComponent<PassionCardProps> = ({
    icon,
    title,
    description,
}) => {
    const Icon = icon;

    return (
        <Box
            flex="1"
            minW="200px"
            p={4}
            bg={hackerColors.darkBg3}
            border={`1px solid ${hackerColors.borderNeon}`}
            borderRadius="6px"
            transition="all 0.3s"
            _hover={{
                borderColor: hackerColors.neonPurple,
                boxShadow: "0 0 10px rgba(179, 0, 255, 0.6)",
                transform: "translateY(-4px)",
            }}
        >
            <Box
                as={Icon}
                color={hackerColors.neonPurple}
                fontSize="xl"
                mb={2}
            />
            <Text
                fontSize="sm"
                fontWeight="bold"
                color={hackerColors.neonPurple}
                mb={1}
            >
                {title}
            </Text>
            <Text fontSize="xs" color={hackerColors.textSecondary}>
                {description}
            </Text>
        </Box>
    );
};
