"use client";

import { VStack, Text, Box, Button, HStack } from "@chakra-ui/react";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface EmailSectionProps {
    title: string;
    description: string;
    email: string;
    buttonText: string;
}

export const EmailSection: FunctionComponent<EmailSectionProps> = ({
    title,
    description,
    email,
    buttonText,
}) => {
    return (
        <TerminalBox title={title} color="green">
            <VStack align="start" gap={4}>
                <Text color={hackerColors.textPrimary} fontSize="md">
                    {description}
                </Text>
                <Box>
                    <Text
                        color={hackerColors.neonGreen}
                        fontSize="lg"
                        fontFamily="monospace"
                        mb={3}
                    >
                        {email}
                    </Text>
                    <a
                        href={`mailto:${email}`}
                        style={{ textDecoration: "none" }}
                    >
                        <Button
                            size="md"
                            bg={hackerColors.neonGreen}
                            color={hackerColors.darkBg}
                            fontFamily="monospace"
                            fontWeight="bold"
                            _hover={{
                                boxShadow: hackerColors.glowGreen,
                                transform: "translateY(-2px)",
                            }}
                        >
                            <HStack gap={2}>
                                <FaEnvelope size={14} />
                                <span>{buttonText}</span>
                                <FaArrowRight size={12} />
                            </HStack>
                        </Button>
                    </a>
                </Box>
            </VStack>
        </TerminalBox>
    );
};
