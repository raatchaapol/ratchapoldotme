"use client";

import { Container, VStack, Box, Text } from "@chakra-ui/react";
import { MainLayout } from "@/components/layout";
import { NeonText } from "@/components/gamification/NeonText";
import { ContactHeader } from "./components/ContactHeader/ContactHeader";
import { EmailSection } from "./components/EmailSection/EmailSection";
import { SocialLinksSection } from "./components/SocialLinksSection/SocialLinksSection";
import { ResponseTimeSection } from "./components/ResponseTimeSection/ResponseTimeSection";
import {
    CONTACT_HEADER,
    EMAIL_SECTION,
    SOCIAL_LINKS,
    RESPONSE_TIME,
    PAGE_FOOTER,
} from "./constants/contactData";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

export const ContactPage: FunctionComponent = () => {
    return (
        <MainLayout>
            <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
                <ContactHeader {...CONTACT_HEADER} />

                <VStack align="stretch" gap={8} maxW="4xl">
                    <EmailSection {...EMAIL_SECTION} />
                    <SocialLinksSection links={SOCIAL_LINKS} />
                    <ResponseTimeSection {...RESPONSE_TIME} />

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
