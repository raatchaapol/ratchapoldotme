"use client";

import { Box, Text } from "@chakra-ui/react";
import { NeonText } from "@/components/gamification/NeonText";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

export const ProjectsFooter: FunctionComponent = () => {
    return (
        <Box pt={12}>
            <Text
                fontSize="xs"
                fontFamily="monospace"
                color={hackerColors.textSecondary}
            >
                <NeonText color="cyan" glow={false}>
                    &gt;
                </NeonText>{" "}
                More projects coming soon... Check my GitHub for latest work
            </Text>
        </Box>
    );
};
