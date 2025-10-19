"use client";

import { Container, VStack, Box, Text } from "@chakra-ui/react";
import { MainLayout } from "@/components/layout";
import { NeonText } from "@/components/gamification/NeonText";
import { AboutHeader } from "./components/AboutHeader/AboutHeader";
import { WhoIAmSection } from "./components/WhoIAmSection/WhoIAmSection";
import { JourneySection } from "./components/JourneySection/JourneySection";
import { PassionSection } from "./components/PassionSection";
import {
    ABOUT_HEADER,
    WHO_I_AM,
    MY_JOURNEY,
    PASSION_ITEMS,
    PASSION_FOOTER_NOTE,
    PAGE_FOOTER,
} from "./constants/aboutData";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

export const AboutPage: FunctionComponent = () => {
    return (
        <MainLayout>
            <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
                <AboutHeader {...ABOUT_HEADER} />

                <VStack align="stretch" gap={8} maxW="4xl">
                    <WhoIAmSection {...WHO_I_AM} />
                    <JourneySection {...MY_JOURNEY} />
                    <PassionSection
                        title="// What I Love"
                        items={PASSION_ITEMS}
                        footerNote={PASSION_FOOTER_NOTE}
                    />

                    <Box pt={4}>
                        <Text
                            fontSize="xs"
                            fontFamily="monospace"
                            color={hackerColors.textSecondary}
                        >
                            <NeonText color="green" glow={false}>
                                &gt;
                            </NeonText>{" "}
                            {PAGE_FOOTER}
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </MainLayout>
    );
};
