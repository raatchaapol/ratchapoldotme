"use client";

import { VStack, Box, Text } from "@chakra-ui/react";
import { GlitchText } from "@/components/gamification/GlitchText";
import { NeonText } from "@/components/gamification/NeonText";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

export const SkillsHeader: FunctionComponent = () => {
    return (
        <VStack align="start" gap={8} mb={12}>
            <Box>
                <Text
                    fontSize="xs"
                    fontFamily="monospace"
                    color={hackerColors.neonPurple}
                    mb={4}
                >
                    // Skills
                </Text>
                <GlitchText color="purple">
                    <Text
                        as="h1"
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontWeight="bold"
                        fontFamily="monospace"
                    >
                        TECHNICAL EXPERTISE
                    </Text>
                </GlitchText>
                <Box mt={3}>
                    <NeonText color="cyan" fontSize="lg">
                        &gt; Technologies and tools I work with
                    </NeonText>
                </Box>
            </Box>
        </VStack>
    );
};
