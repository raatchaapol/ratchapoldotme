"use client";

import { HStack, Button } from "@chakra-ui/react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-router";
import { hackerColors } from "@/theme/colors";
import { ROUTES, PERSONAL_INFO } from "@/shared/constants";
import type { FunctionComponent } from "react";

export const CTAButtons: FunctionComponent = () => {
    return (
        <HStack gap={4} flexWrap="wrap" pt={2}>
            <Link to={ROUTES.PROJECTS}>
                <Button
                    className="cyber-button"
                    size="lg"
                    px={10}
                    py={6}
                    bg={hackerColors.neonGreen}
                    color={hackerColors.darkBg}
                    fontWeight="bold"
                    fontFamily="monospace"
                    fontSize="md"
                    _hover={{
                        transform: "translateY(-4px)",
                        boxShadow: `0 0 30px ${hackerColors.neonGreen}`,
                    }}
                >
                    <HStack gap={2}>
                        <span>View Projects</span>
                        <FaArrowRight size={16} />
                    </HStack>
                </Button>
            </Link>

            <a
                href={PERSONAL_INFO.RESUME_URL}
                download={PERSONAL_INFO.RESUME_FILENAME}
                style={{ textDecoration: "none" }}
            >
                <Button
                    className="cyber-button resume-button"
                    size="lg"
                    px={10}
                    py={6}
                    bg="transparent"
                    color={hackerColors.neonCyan}
                    border={`2px solid ${hackerColors.neonCyan}`}
                    fontWeight="bold"
                    fontFamily="monospace"
                    fontSize="md"
                    _hover={{
                        transform: "translateY(-4px)",
                        boxShadow: `0 0 30px ${hackerColors.neonCyan}`,
                        bg: "rgba(0, 212, 255, 0.1)",
                    }}
                >
                    <HStack gap={2}>
                        <FaDownload size={16} />
                        <span>Resume</span>
                    </HStack>
                </Button>
            </a>
        </HStack>
    );
};
