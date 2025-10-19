"use client";

import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";
import type { IconType } from "react-icons";

interface ContactLink {
    icon: IconType;
    label: string;
    url: string;
    color: "green" | "cyan" | "purple" | "pink";
    internal?: boolean;
}

interface ContactCardProps {
    links: readonly ContactLink[];
}

const colorMap = {
    green: hackerColors.neonGreen,
    cyan: hackerColors.neonCyan,
    purple: hackerColors.neonPurple,
    pink: hackerColors.neonPink,
};

export const ContactCard: FunctionComponent<ContactCardProps> = ({ links }) => {
    return (
        <Box
            className="dashboard-card"
            bg={hackerColors.darkBg2}
            border={`2px solid ${hackerColors.neonGreen}`}
            borderRadius="10px"
            p={5}
            position="relative"
            overflow="hidden"
        >
            <VStack align="flex-start" gap={3}>
                <HStack gap={2}>
                    <FaEnvelope color={hackerColors.neonGreen} size={16} />
                    <Text
                        fontSize="xs"
                        fontFamily="monospace"
                        color={hackerColors.neonGreen}
                    >
                        CONNECT
                    </Text>
                </HStack>

                <VStack align="stretch" gap={2} w="full">
                    {links.map((link) => {
                        const Icon = link.icon;
                        const content = (
                            <HStack gap={2} _hover={{ opacity: 0.8 }}>
                                <Icon color={colorMap[link.color]} size={14} />
                                <Text
                                    color={hackerColors.textPrimary}
                                    fontSize="xs"
                                >
                                    {link.label}
                                </Text>
                            </HStack>
                        );

                        if (link.internal) {
                            return (
                                <Link key={link.label} to={link.url}>
                                    {content}
                                </Link>
                            );
                        }

                        return (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                            >
                                {content}
                            </a>
                        );
                    })}
                </VStack>
            </VStack>
        </Box>
    );
};
