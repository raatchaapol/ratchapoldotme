"use client";

import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { StatsCard } from "./StatsCard";
import { TechStackCard } from "./TechStackCard";
import { ServicesCard } from "./ServicesCard";
import { ContactCard } from "./ContactCard";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface DashboardCardsProps {
    stats: { successRate: string; onTimeDelivery: string };
    topSkills: readonly {
        name: string;
        stars: number;
        color: "green" | "cyan" | "purple" | "pink";
    }[];
    services: readonly {
        label: string;
        color: "green" | "cyan" | "purple" | "pink";
    }[];
    connectLinks: readonly any[];
}

export const DashboardCards: FunctionComponent<DashboardCardsProps> = ({
    stats,
    topSkills,
    services,
    connectLinks,
}) => {
    return (
        <Box>
            <Text
                fontSize="xs"
                fontFamily="monospace"
                color={hackerColors.neonGreen}
                mb={6}
            >
                {"// DETAILED OVERVIEW"}
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={5}>
                <StatsCard {...stats} />
                <TechStackCard skills={topSkills} />
                <ServicesCard services={services} />
                <ContactCard links={connectLinks} />
            </SimpleGrid>
        </Box>
    );
};
