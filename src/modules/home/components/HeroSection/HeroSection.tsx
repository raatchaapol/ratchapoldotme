"use client";

import { VStack, Box } from "@chakra-ui/react";
import { TerminalHeader } from "./TerminalHeader";
import { HeroTitle } from "./HeroTitle";
import { BiographyText } from "./BiographyText";
import { QuickStats } from "./QuickStats";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { CTAButtons } from "./CTAButtons";
import type { FunctionComponent } from "react";

interface HeroSectionProps {
    terminal: string;
    systemInit: string;
    title: {
        main: string;
        sub: string;
        secondary: string;
    };
    bio: {
        text: string;
        highlight1: string;
        and: string;
        highlight2: string;
        closing: string;
    };
    stats: readonly { value: string; label: string }[];
    availability: {
        status: string;
        active: boolean;
    };
}

export const HeroSection: FunctionComponent<HeroSectionProps> = ({
    terminal,
    systemInit,
    title,
    bio,
    stats,
    availability,
}) => {
    return (
        <VStack align="flex-start" gap={6} position="relative">
            {/* Scan Line Effect */}
            <Box className="scan-effect" />

            <TerminalHeader path={terminal} />

            <HeroTitle
                systemInit={systemInit}
                mainTitle={title.main}
                subTitle={title.sub}
                secondaryText={title.secondary}
            />

            <BiographyText {...bio} />

            <QuickStats stats={stats} />

            <AvailabilityBadge
                status={availability.status}
                active={availability.active}
            />

            <CTAButtons />
        </VStack>
    );
};
