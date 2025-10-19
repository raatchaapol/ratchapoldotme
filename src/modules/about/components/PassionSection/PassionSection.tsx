"use client";

import { VStack, Flex, Text } from "@chakra-ui/react";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { PassionCard } from "./PassionCard";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";
import type { IconType } from "react-icons";

interface PassionItem {
    icon: IconType;
    title: string;
    description: string;
}

interface PassionSectionProps {
    title: string;
    items: readonly PassionItem[];
    footerNote: string;
}

export const PassionSection: FunctionComponent<PassionSectionProps> = ({
    title,
    items,
    footerNote,
}) => {
    return (
        <TerminalBox title={title} color="purple">
            <VStack align="start" gap={4}>
                <Flex gap={6} flexWrap="wrap">
                    {items.map((item, idx) => (
                        <PassionCard key={idx} {...item} />
                    ))}
                </Flex>
                <Text
                    color={hackerColors.textSecondary}
                    fontSize="sm"
                    fontStyle="italic"
                    pt={2}
                >
                    {footerNote}
                </Text>
            </VStack>
        </TerminalBox>
    );
};
