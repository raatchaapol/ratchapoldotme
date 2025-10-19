"use client";

import { Box } from "@chakra-ui/react";
import type { FunctionComponent } from "react";

interface SkillBadgeProps {
    skill: string;
}

export const SkillBadge: FunctionComponent<SkillBadgeProps> = ({ skill }) => {
    return (
        <Box
            px={4}
            py={2}
            bg="blue.subtle"
            color="blue.fg"
            borderRadius="full"
            fontSize="sm"
            fontWeight="500"
            border="1px solid"
            borderColor="blue.muted"
            transition="all 0.2s"
            _hover={{
                bg: "blue.muted",
                transform: "translateY(-2px)",
                boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)",
            }}
        >
            {skill}
        </Box>
    );
};
