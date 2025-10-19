"use client";

import { VStack, HStack, Text, VStack as ChakraVStack } from "@chakra-ui/react";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";
import type { IconType } from "react-icons";

interface ExpertiseItem {
    icon: IconType;
    color: "green" | "cyan" | "purple" | "pink";
    title: string;
    subtitle: string;
}

interface ExpertisePanelProps {
    items: readonly ExpertiseItem[];
}

const colorMap = {
    green: hackerColors.neonGreen,
    cyan: hackerColors.neonCyan,
    purple: hackerColors.neonPurple,
    pink: hackerColors.neonPink,
};

export const ExpertisePanel: FunctionComponent<ExpertisePanelProps> = ({
    items,
}) => {
    return (
        <TerminalBox title="core.expertise">
            <VStack align="stretch" gap={4}>
                {items.map((item) => {
                    const Icon = item.icon;
                    return (
                        <HStack key={item.title} gap={3}>
                            <Icon color={colorMap[item.color]} size={18} />
                            <ChakraVStack align="flex-start" gap={0}>
                                <Text
                                    color={hackerColors.textPrimary}
                                    fontWeight="bold"
                                    fontSize="sm"
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    color={hackerColors.textSecondary}
                                    fontSize="xs"
                                >
                                    {item.subtitle}
                                </Text>
                            </ChakraVStack>
                        </HStack>
                    );
                })}
            </VStack>
        </TerminalBox>
    );
};
