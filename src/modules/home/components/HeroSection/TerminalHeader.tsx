"use client";

import { HStack, Text } from "@chakra-ui/react";
import { FaTerminal } from "react-icons/fa";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface TerminalHeaderProps {
    path: string;
}

export const TerminalHeader: FunctionComponent<TerminalHeaderProps> = ({
    path,
}) => {
    return (
        <HStack gap={2}>
            <FaTerminal color={hackerColors.neonGreen} size={16} />
            <Text
                fontSize="xs"
                fontFamily="monospace"
                color={hackerColors.textSecondary}
            >
                {path}
            </Text>
        </HStack>
    );
};
