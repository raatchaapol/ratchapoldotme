"use client";

import { VStack, Box, Text } from "@chakra-ui/react";
import { GlitchText } from "@/components/gamification/GlitchText";
import { NeonText } from "@/components/gamification/NeonText";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

export const ProjectsHeader: FunctionComponent = () => {
    return (
        <VStack align="start" gap={8} mb={12}>
            <Box>
                <Text
                    fontSize="xs"
                    fontFamily="monospace"
                    color={hackerColors.neonCyan}
                    mb={4}
                >
                    // Portfolio
                </Text>
                <GlitchText color="cyan">
                    <Text
                        as="h1"
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontWeight="bold"
                        fontFamily="monospace"
                    >
                        FEATURED PROJECTS
                    </Text>
                </GlitchText>
                <Box mt={3}>
                    <NeonText color="green" fontSize="lg">
                        &gt; A selection of my best full-stack work
                    </NeonText>
                </Box>
            </Box>
        </VStack>
    );
};
