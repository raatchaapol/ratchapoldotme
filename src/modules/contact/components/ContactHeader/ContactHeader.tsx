"use client";

import { VStack, Box, Text } from "@chakra-ui/react";
import { GlitchText } from "@/components/gamification/GlitchText";
import { NeonText } from "@/components/gamification/NeonText";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface ContactHeaderProps {
    comment: string;
    title: string;
    subtitle: string;
}

export const ContactHeader: FunctionComponent<ContactHeaderProps> = ({
    comment,
    title,
    subtitle,
}) => {
    return (
        <VStack align="start" gap={8} mb={12}>
            <Box>
                <Text
                    fontSize="xs"
                    fontFamily="monospace"
                    color={hackerColors.neonGreen}
                    mb={4}
                >
                    {comment}
                </Text>
                <GlitchText color="green">
                    <Text
                        as="h1"
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontWeight="bold"
                        fontFamily="monospace"
                    >
                        {title}
                    </Text>
                </GlitchText>
                <Box mt={3}>
                    <NeonText color="cyan" fontSize="lg">
                        {subtitle}
                    </NeonText>
                </Box>
            </Box>
        </VStack>
    );
};
