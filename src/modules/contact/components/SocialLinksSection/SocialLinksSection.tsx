"use client";

import { VStack, Text, Flex, Button, HStack } from "@chakra-ui/react";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";
import type { IconType } from "react-icons";

interface SocialLink {
    icon: IconType;
    label: string;
    url: string;
}

interface SocialLinksSectionProps {
    links: readonly SocialLink[];
}

export const SocialLinksSection: FunctionComponent<SocialLinksSectionProps> = ({
    links,
}) => {
    return (
        <TerminalBox title="// Social Networks" color="cyan">
            <VStack align="start" gap={4}>
                <Text color={hackerColors.textPrimary} fontSize="md">
                    Connect with me on social platforms:
                </Text>
                <Flex gap={4} flexWrap="wrap">
                    {links.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    size="md"
                                    bg="transparent"
                                    border={`2px solid ${hackerColors.neonCyan}`}
                                    color={hackerColors.neonCyan}
                                    fontFamily="monospace"
                                    fontWeight="bold"
                                    _hover={{
                                        boxShadow: hackerColors.glowCyan,
                                        bg: "rgba(0, 212, 255, 0.1)",
                                        transform: "translateY(-2px)",
                                    }}
                                >
                                    <HStack gap={2}>
                                        <Icon size={16} />
                                        <span>{link.label}</span>
                                    </HStack>
                                </Button>
                            </a>
                        );
                    })}
                </Flex>
            </VStack>
        </TerminalBox>
    );
};
