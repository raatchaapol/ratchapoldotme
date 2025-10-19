"use client";

import { VStack, Text, HStack, Box } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface JourneySectionProps {
    title: string;
    paragraphs: readonly string[];
    tag: string;
}

export const JourneySection: FunctionComponent<JourneySectionProps> = ({
    title,
    paragraphs,
    tag,
}) => {
    return (
        <TerminalBox title={title} color="cyan">
            <VStack align="start" gap={4}>
                {paragraphs.map((paragraph, index) => (
                    <Text
                        key={index}
                        color={hackerColors.textPrimary}
                        fontSize="md"
                        lineHeight="1.8"
                    >
                        {paragraph}
                    </Text>
                ))}
                <HStack gap={2}>
                    <Box
                        as={FaRocket}
                        color={hackerColors.neonCyan}
                        fontSize="lg"
                    />
                    <Text
                        color={hackerColors.neonCyan}
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
