"use client";

import {
    Box,
    Container,
    VStack,
    HStack,
    Button,
    Text,
    Link,
} from "@chakra-ui/react";
import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";
import { hackerColors } from "@/theme/colors";
import { NeonText } from "@/components/gamification/NeonText";
import type { FunctionComponent } from "react";

interface ErrorPageProps {
    error?: Error | null;
    reset?: () => void;
    statusCode?: number;
    message?: string;
}

export const ErrorPage: FunctionComponent<ErrorPageProps> = ({
    error,
    reset,
    statusCode = 500,
    message,
}) => {
    const errorMessage = message || error?.message || "Something went wrong";
    const isNotFound = statusCode === 404;

    return (
        <Box
            minH="100vh"
            bg={hackerColors.darkBg}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            overflow="hidden"
        >
            {/* Animated background */}
            <style>{`
                @keyframes glitch-error {
                    0%, 100% {
                        transform: translate(0);
                    }
                    20% {
                        transform: translate(-2px, 2px);
                    }
                    40% {
                        transform: translate(-2px, -2px);
                    }
                    60% {
                        transform: translate(2px, 2px);
                    }
                    80% {
                        transform: translate(2px, -2px);
                    }
                }

                @keyframes scan-error {
                    0% {
                        transform: translateY(-100%);
                    }
                    100% {
                        transform: translateY(100%);
                    }
                }

                .error-icon {
                    animation: glitch-error 0.3s infinite;
                }

                .scan-line {
                    animation: scan-error 4s linear infinite;
                }
            `}</style>

            {/* Background grid */}
            <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                backgroundImage={`
                    linear-gradient(0deg, transparent 24%, rgba(255, 0, 0, .05) 25%, rgba(255, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, .05) 75%, rgba(255, 0, 0, .05) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(255, 0, 0, .05) 25%, rgba(255, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, .05) 75%, rgba(255, 0, 0, .05) 76%, transparent 77%, transparent)
                `}
                backgroundSize="50px 50px"
                pointerEvents="none"
                opacity={0.3}
            />

            {/* Scan line effect */}
            <Box
                className="scan-line"
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100px"
                background="linear-gradient(180deg, transparent, rgba(255, 0, 0, 0.1), transparent)"
                pointerEvents="none"
            />

            <Container maxW="container.md">
                <VStack gap={8} align="center">
                    {/* Error Terminal Box */}
                    <Box
                        w="100%"
                        p={8}
                        bg={hackerColors.darkBg3}
                        border={`2px solid ${hackerColors.neonPink}`}
                        borderRadius="8px"
                        boxShadow={`0 0 30px ${hackerColors.neonPink}50`}
                        position="relative"
                    >
                        {/* Terminal Header */}
                        <HStack
                            mb={6}
                            pb={4}
                            borderBottom={`1px solid ${hackerColors.borderNeon}`}
                        >
                            <Box display="flex" gap={2}>
                                <Box
                                    w={3}
                                    h={3}
                                    borderRadius="50%"
                                    bg={hackerColors.neonPink}
                                />
                                <Box
                                    w={3}
                                    h={3}
                                    borderRadius="50%"
                                    bg={hackerColors.neonPink}
                                    opacity={0.5}
                                />
                                <Box
                                    w={3}
                                    h={3}
                                    borderRadius="50%"
                                    bg={hackerColors.neonPink}
                                    opacity={0.3}
                                />
                            </Box>
                            <Text
                                fontSize="sm"
                                color={hackerColors.neonPink}
                                fontFamily="monospace"
                            >
                                // SYSTEM ERROR
                            </Text>
                        </HStack>

                        <VStack gap={6} align="center">
                            {/* Error Icon */}
                            <Box
                                className="error-icon"
                                as={FaExclamationTriangle}
                                fontSize="6xl"
                                color={hackerColors.neonPink}
                                filter={`drop-shadow(0 0 20px ${hackerColors.neonPink})`}
                            />

                            {/* Error Code */}
                            <VStack gap={2}>
                                <NeonText
                                    color="pink"
                                    fontSize="6xl"
                                    glow
                                    as="div"
                                >
                                    {statusCode}
                                </NeonText>
                                <Text
                                    fontSize="xl"
                                    color={hackerColors.textPrimary}
                                    fontFamily="monospace"
                                    fontWeight="bold"
                                    textAlign="center"
                                >
                                    {isNotFound
                                        ? "PAGE NOT FOUND"
                                        : "SYSTEM MALFUNCTION"}
                                </Text>
                            </VStack>

                            {/* Error Message */}
                            <Box
                                p={4}
                                bg={hackerColors.darkBg2}
                                border={`1px solid ${hackerColors.neonPink}`}
                                borderRadius="4px"
                                w="100%"
                            >
                                <Text
                                    fontSize="sm"
                                    color={hackerColors.textPrimary}
                                    fontFamily="monospace"
                                    textAlign="center"
                                >
                                    <Text
                                        as="span"
                                        color={hackerColors.neonPink}
                                    >
                                        &gt;
                                    </Text>{" "}
                                    {errorMessage}
                                </Text>
                            </Box>

                            {/* Error Stack (in development) */}
                            {error?.stack &&
                                process.env.NODE_ENV === "development" && (
                                    <Box
                                        p={4}
                                        bg={hackerColors.darkBg}
                                        border={`1px solid ${hackerColors.borderNeon}`}
                                        borderRadius="4px"
                                        w="100%"
                                        maxH="200px"
                                        overflowY="auto"
                                    >
                                        <Text
                                            fontSize="xs"
                                            color={hackerColors.textSecondary}
                                            fontFamily="monospace"
                                            whiteSpace="pre-wrap"
                                        >
                                            {error.stack}
                                        </Text>
                                    </Box>
                                )}

                            {/* Action Buttons */}
                            <HStack gap={4} pt={4}>
                                <Link
                                    href="/"
                                    _hover={{ textDecoration: "none" }}
                                >
                                    <Button
                                        size="lg"
                                        bg={hackerColors.neonGreen}
                                        color={hackerColors.darkBg}
                                        fontFamily="monospace"
                                        fontWeight="bold"
                                        _hover={{
                                            boxShadow: hackerColors.glowGreen,
                                            transform: "translateY(-2px)",
                                        }}
                                    >
                                        <FaHome
                                            style={{ marginRight: "8px" }}
                                        />
                                        GO HOME
                                    </Button>
                                </Link>

                                {reset && !isNotFound && (
                                    <Button
                                        onClick={reset}
                                        size="lg"
                                        bg="transparent"
                                        border={`2px solid ${hackerColors.neonCyan}`}
                                        color={hackerColors.neonCyan}
                                        fontFamily="monospace"
                                        fontWeight="bold"
                                        _hover={{
                                            boxShadow: hackerColors.glowCyan,
                                            bg: `${hackerColors.neonCyan}20`,
                                        }}
                                    >
                                        <FaRedo
                                            style={{ marginRight: "8px" }}
                                        />
                                        TRY AGAIN
                                    </Button>
                                )}
                            </HStack>

                            {/* Footer Message */}
                            <Text
                                fontSize="xs"
                                color={hackerColors.textDimmed}
                                fontFamily="monospace"
                                textAlign="center"
                                pt={4}
                            >
                                {isNotFound
                                    ? "The page you're looking for doesn't exist in this dimension."
                                    : "Our engineers have been notified and are working on a fix."}
                            </Text>
                        </VStack>
                    </Box>

                    {/* Terminal Command Hint */}
                    <Box
                        p={3}
                        bg={hackerColors.darkBg2}
                        border={`1px solid ${hackerColors.borderNeon}`}
                        borderRadius="4px"
                    >
                        <Text
                            fontSize="xs"
                            color={hackerColors.neonGreen}
                            fontFamily="monospace"
                        >
                            <Text as="span" color={hackerColors.neonCyan}>
                                $
                            </Text>{" "}
                            Try navigating back or contact support if the
                            problem persists
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};
