"use client";

import { VStack, Text, HStack, Box } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface WhoIAmSectionProps {
    title: string;
    content: string;
    tag: string;
}

export const WhoIAmSection: FunctionComponent<WhoIAmSectionProps> = ({
    title,
    content,
    tag,
}) => {
    return (
        <TerminalBox title={title} color="green">
            <VStack align="start" gap={4}>
                <Text
                    color={hackerColors.textPrimary}
                    fontSize="md"
                    lineHeight="1.8"
                >
                    {content}
                </Text>
                <HStack gap={2}>
                    <Box
                        as={FaCode}
                        color={hackerColors.neonGreen}
                        fontSize="lg"
                    />
                    <Text
                        color={hackerColors.neonGreen}
                        fontSize="sm"
                        fontFamily="monospace"
                    >
                        {tag}
                    </Text>
                </HStack>
            </VStack>
        </TerminalBox>
    );
};
