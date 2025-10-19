"use client";

import { Container, Stack, Text, Box, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MainLayout } from "@/components/common/MainLayout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { contactEmail } from "@/content/social";
import type { FunctionComponent } from "react";

interface StyledLinkProps {
    href: string;
    children: React.ReactNode;
    target?: string;
    rel?: string;
}

const StyledLink: FunctionComponent<StyledLinkProps> = ({
    href,
    children,
    target,
    rel,
}) => (
    <a
        href={href}
        target={target}
        rel={rel}
        style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingTop: "8px",
            paddingBottom: "8px",
            borderWidth: "1px",
            borderColor: "var(--chakra-colors-blue-solid)",
            color: "var(--chakra-colors-blue-solid)",
            borderRadius: "6px",
            transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.background =
                "var(--chakra-colors-blue-solid)";
            e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--chakra-colors-blue-solid)";
        }}
    >
        {children}
    </a>
);

const Contact: FunctionComponent = () => {
    return (
        <MainLayout>
            <Container maxW="container.lg" py={{ base: 12, md: 16 }}>
                <SectionHeader
                    title="Get In Touch"
                    subtitle="Let's connect and explore opportunities together"
                />

                <Stack gap={12} maxW="2xl">
                    {/* Email */}
                    <Box>
                        <Text as="h3" fontSize="lg" fontWeight="bold" mb={4}>
                            Email
                        </Text>
                        <StyledLink href={`mailto:${contactEmail}`}>
                            <FaEnvelope size={16} />
                            Send me an email
                        </StyledLink>
                        <Text color="fg.muted" fontSize="sm" mt={2}>
                            {contactEmail}
                        </Text>
                    </Box>

                    {/* Social Links */}
                    <Box>
                        <Text as="h3" fontSize="lg" fontWeight="bold" mb={4}>
                            Follow Me
                        </Text>
                        <HStack gap={4}>
                            <StyledLink
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub size={16} />
                                GitHub
                            </StyledLink>
                            <StyledLink
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin size={16} />
                                LinkedIn
                            </StyledLink>
                        </HStack>
                    </Box>

                    {/* Response Time */}
                    <Box
                        p={6}
                        bg="blue.subtle"
                        borderRadius="lg"
                        borderLeftWidth="4px"
                        borderLeftColor="blue.solid"
                    >
                        <Text fontWeight="bold" mb={2}>
                            Response Time
                        </Text>
                        <Text color="fg.muted">
                            I typically respond to emails within 24 hours. Feel
                            free to reach out with any questions, collaboration
                            opportunities, or just to say hello!
                        </Text>
                    </Box>
                </Stack>
            </Container>
        </MainLayout>
    );
};

export default Contact;
