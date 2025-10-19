"use client";

import { Box, Text } from "@chakra-ui/react";
import { NeonText } from "@/components/gamification/NeonText";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

export const SkillsFooter: FunctionComponent = () => {
    return (
        <Box pt={12}>
            <Text
                fontSize="xs"
                fontFamily="monospace"
                color={hackerColors.textSecondary}
            >
                <NeonText color="purple" glow={false}>
                    &gt;
                </NeonText>{" "}
                Continuously learning and adapting to new technologies
            </Text>
        </Box>
    );
};
