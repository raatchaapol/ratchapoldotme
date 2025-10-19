"use client";

import { Heading, Stack, Text } from "@chakra-ui/react";
import type { FunctionComponent } from "react";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}

export const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
    title,
    subtitle,
}) => {
    return (
        <Stack gap={4} mb={12}>
            <Heading as="h2" size="2xl">
                {title}
            </Heading>
            {subtitle && (
                <Text color="fg.muted" fontSize="lg">
                    {subtitle}
                </Text>
            )}
        </Stack>
    );
};
