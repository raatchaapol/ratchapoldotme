"use client";

import { HStack, VStack, Text, Box } from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface ResponseTimeSectionProps {
    title: string;
    heading: string;
    description: string;
}

export const ResponseTimeSection: FunctionComponent<
    ResponseTimeSectionProps
> = ({ title, heading, description }) => {
    return (
        <TerminalBox title={title} color="purple">
            <HStack align="start" gap={4}>
                <Box
                    as={FaClock}
                    color={hackerColors.neonPurple}
                    fontSize="2xl"
                    mt={1}
                />
                <VStack align="start" gap={2}>
                    <Text
                        color={hackerColors.neonPurple}
                        fontSize="md"
                        fontWeight="bold"
                    >
                        {heading}
                    </Text>
                    <Text
                        color={hackerColors.textPrimary}
                        fontSize="sm"
                        lineHeight="1.6"
                    >
                        {description}
                    </Text>
                </VStack>
            </HStack>
        </TerminalBox>
    );
};
