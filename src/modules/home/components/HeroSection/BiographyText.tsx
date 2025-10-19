"use client";

import { Text } from "@chakra-ui/react";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface BiographyTextProps {
    text: string;
    highlight1: string;
    and: string;
    highlight2: string;
    closing: string;
}

export const BiographyText: FunctionComponent<BiographyTextProps> = ({
    text,
    highlight1,
    and,
    highlight2,
    closing,
}) => {
    return (
        <Text
            fontSize="md"
            color={hackerColors.textPrimary}
            lineHeight="1.8"
            maxW="500px"
        >
            {text}{" "}
            <Text as="span" color={hackerColors.neonCyan} fontWeight="bold">
                {highlight1}
            </Text>{" "}
            {and}{" "}
            <Text as="span" color={hackerColors.neonPurple} fontWeight="bold">
                {highlight2}
            </Text>
            {closing}
        </Text>
    );
};
