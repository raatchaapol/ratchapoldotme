"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { GlitchText } from "@/components/gamification/GlitchText";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface HeroTitleProps {
    systemInit: string;
    mainTitle: string;
    subTitle: string;
    secondaryText: string;
}

export const HeroTitle: FunctionComponent<HeroTitleProps> = ({
    systemInit,
    mainTitle,
    subTitle,
    secondaryText,
}) => {
    return (
        <Box>
            <Text
                fontSize="sm"
                fontFamily="monospace"
                color={hackerColors.neonCyan}
                mb={3}
            >
                {systemInit}
            </Text>
            <GlitchText color="green" secondaryText={secondaryText}>
                <Heading
                    as="h1"
                    fontSize={{
                        base: "4xl",
                        md: "5xl",
                        lg: "6xl",
                    }}
                    fontWeight="bold"
                    fontFamily="monospace"
                    lineHeight="1.1"
                >
                    {mainTitle}
                    <br />
                    {subTitle}
                </Heading>
            </GlitchText>
        </Box>
    );
};
