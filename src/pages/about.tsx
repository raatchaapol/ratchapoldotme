"use client";

import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { MainLayout } from "@/components/common/MainLayout";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { FunctionComponent } from "react";

const About: FunctionComponent = () => {
    return (
        <MainLayout>
            <Container maxW="container.lg" py={{ base: 12, md: 16 }}>
                <SectionHeader
                    title="About Me"
                    subtitle="Full-Stack Engineer Passionate About Frontend Development"
                />

                <Stack gap={8} maxW="2xl">
                    <Text fontSize="lg" lineHeight="1.8" color="fg.muted">
                        I'm a full-stack software engineer with a strong passion
                        for building beautiful, performant user interfaces. With
                        expertise spanning both frontend and backend
                        technologies, I create seamless, end-to-end solutions
                        that users love to interact with.
                    </Text>

                    <Box>
                        <Text as="h3" fontSize="xl" fontWeight="bold" mb={3}>
                            My Journey
                        </Text>
                        <Text fontSize="lg" lineHeight="1.8" color="fg.muted">
                            My career has been focused on understanding the
                            intersection between great design and solid
                            engineering. I believe that the best applications
                            are those that combine intuitive user experiences
                            with clean, maintainable code. I'm constantly
                            learning new technologies and best practices to stay
                            at the forefront of modern web development.
                        </Text>
                    </Box>

                    <Box>
                        <Text as="h3" fontSize="xl" fontWeight="bold" mb={3}>
                            What I Love
                        </Text>
                        <Text fontSize="lg" lineHeight="1.8" color="fg.muted">
                            I'm passionate about performance optimization, user
                            experience design, and writing clean, well-tested
                            code. I enjoy solving complex problems and mentoring
                            other developers. When I'm not coding, you can find
                            me exploring new technologies or contributing to
                            open-source projects.
                        </Text>
                    </Box>
                </Stack>
            </Container>
        </MainLayout>
    );
};

export default About;
