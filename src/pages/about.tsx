"use client";

import { Box, Container, VStack, Text, HStack, Flex } from "@chakra-ui/react";
import { MainLayout } from "@/components/common/MainLayout";
import { NeonText } from "@/components/gamification/NeonText";
import { GlitchText } from "@/components/gamification/GlitchText";
import { TerminalBox } from "@/components/gamification/TerminalBox";
import { hackerColors } from "@/theme/colors";
import { FaCode, FaRocket, FaLightbulb, FaHeart } from "react-icons/fa";
import type { FunctionComponent } from "react";

const About: FunctionComponent = () => {
    return (
        <MainLayout>
            <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
                {/* Page Title */}
                <VStack align="start" gap={8} mb={12}>
                    <Box>
                        <Text
                            fontSize="xs"
                            fontFamily="monospace"
                            color={hackerColors.neonGreen}
                            mb={4}
                        >
                            // About Me
                        </Text>
                        <GlitchText color="green">
                            <Text
                                as="h1"
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="bold"
                                fontFamily="monospace"
                            >
                                FULL-STACK ENGINEER
                            </Text>
                        </GlitchText>
                        <Box mt={3}>
                            <NeonText color="cyan" fontSize="lg">
                                &gt; Passionate about frontend development
                            </NeonText>
                        </Box>
                    </Box>
                </VStack>

                <VStack align="stretch" gap={8} maxW="4xl">
                    {/* Who I Am */}
                    <TerminalBox title="// Who I Am" color="green">
                        <VStack align="start" gap={4}>
                            <Text
                                color={hackerColors.textPrimary}
                                fontSize="md"
                                lineHeight="1.8"
                            >
                                I'm a full-stack software engineer with a strong
                                passion for building beautiful, performant user
                                interfaces. With expertise spanning both
                                frontend and backend technologies, I create
                                seamless, end-to-end solutions that users love
                                to interact with.
                            </Text>
                            <HStack gap={2}>
                                <Box
                                    as={FaCode}
                                    color={hackerColors.neonGreen}
                                    fontSize="lg"
                                />
                                <Text
                                    color={hackerColors.neonGreen}
                                    fontSize="sm"
                                    fontFamily="monospace"
                                >
                                    &gt; Clean code enthusiast
                                </Text>
                            </HStack>
                        </VStack>
                    </TerminalBox>

                    {/* My Journey */}
                    <TerminalBox title="// My Journey" color="cyan">
                        <VStack align="start" gap={4}>
                            <Text
                                color={hackerColors.textPrimary}
                                fontSize="md"
                                lineHeight="1.8"
                            >
                                My career has been focused on understanding the
                                intersection between great design and solid
                                engineering. I believe that the best
                                applications are those that combine intuitive
                                user experiences with clean, maintainable code.
                            </Text>
                            <Text
                                color={hackerColors.textPrimary}
                                fontSize="md"
                                lineHeight="1.8"
                            >
                                I'm constantly learning new technologies and
                                best practices to stay at the forefront of
                                modern web development.
                            </Text>
                            <HStack gap={2}>
                                <Box
                                    as={FaRocket}
                                    color={hackerColors.neonCyan}
                                    fontSize="lg"
                                />
                                <Text
                                    color={hackerColors.neonCyan}
                                    fontSize="sm"
                                    fontFamily="monospace"
                                >
                                    &gt; Always evolving
                                </Text>
                            </HStack>
                        </VStack>
                    </TerminalBox>

                    {/* What I Love */}
                    <TerminalBox title="// What I Love" color="purple">
                        <VStack align="start" gap={4}>
                            <Flex gap={6} flexWrap="wrap">
                                {[
                                    {
                                        icon: FaLightbulb,
                                        title: "Problem Solving",
                                        desc: "Complex challenges drive me",
                                    },
                                    {
                                        icon: FaRocket,
                                        title: "Performance",
                                        desc: "Speed & optimization matter",
                                    },
                                    {
                                        icon: FaHeart,
                                        title: "UX Design",
                                        desc: "Users come first",
                                    },
                                    {
                                        icon: FaCode,
                                        title: "Clean Code",
                                        desc: "Maintainable & tested",
                                    },
                                ].map((item, idx) => (
                                    <Box
                                        key={idx}
                                        flex="1"
                                        minW="200px"
                                        p={4}
                                        bg={hackerColors.darkBg3}
                                        border={`1px solid ${hackerColors.borderNeon}`}
                                        borderRadius="6px"
                                        transition="all 0.3s"
                                        _hover={{
                                            borderColor:
                                                hackerColors.neonPurple,
                                            boxShadow:
                                                "0 0 10px rgba(179, 0, 255, 0.6)",
                                            transform: "translateY(-4px)",
                                        }}
                                    >
                                        <Box
                                            as={item.icon}
                                            color={hackerColors.neonPurple}
                                            fontSize="xl"
                                            mb={2}
                                        />
                                        <Text
                                            fontSize="sm"
                                            fontWeight="bold"
                                            color={hackerColors.neonPurple}
                                            mb={1}
                                        >
                                            {item.title}
                                        </Text>
                                        <Text
                                            fontSize="xs"
                                            color={hackerColors.textSecondary}
                                        >
                                            {item.desc}
                                        </Text>
                                    </Box>
                                ))}
                            </Flex>
                            <Text
                                color={hackerColors.textSecondary}
                                fontSize="sm"
                                fontStyle="italic"
                                pt={2}
                            >
                                When I'm not coding, you can find me exploring
                                new technologies, mentoring developers, or
                                contributing to open-source projects.
                            </Text>
                        </VStack>
                    </TerminalBox>

                    {/* Footer Message */}
                    <Box pt={4}>
                        <Text
                            fontSize="xs"
                            fontFamily="monospace"
                            color={hackerColors.textSecondary}
                        >
                            <NeonText color="green" glow={false}>
                                &gt;
                            </NeonText>{" "}
                            Let's build something amazing together
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </MainLayout>
    );
};

export default About;
