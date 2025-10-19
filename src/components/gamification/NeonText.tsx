"use client";

import { Text } from "@chakra-ui/react";
import { hackerColors } from "@/theme/colors";
import type { FunctionComponent } from "react";

interface NeonTextProps {
    children: React.ReactNode;
    color?: "green" | "cyan" | "purple" | "pink";
    glow?: boolean;
    typewriter?: boolean;
    delay?: number;
    fontSize?: string;
    as?: any;
}

export const NeonText: FunctionComponent<NeonTextProps> = ({
    children,
    color = "green",
    glow = true,
    typewriter = false,
    delay = 0,
    as = "span",
    fontSize = "1rem",
}) => {
    const colorMap = {
        green: hackerColors.neonGreen,
        cyan: hackerColors.neonCyan,
        purple: hackerColors.neonPurple,
        pink: hackerColors.neonPink,
    };

    const glowMap = {
        green: hackerColors.glowGreen,
        cyan: hackerColors.glowCyan,
        purple: hackerColors.glowPurple,
        pink: "0 0 10px rgba(255, 0, 110, 0.6)",
    };

    const getAnimationStyle = (): React.CSSProperties | undefined => {
        if (!typewriter) return undefined;

        return {
            animation: `typewriter 3s steps(${
                String(children).length
            }, end) ${delay}s forwards`,
            overflow: "hidden",
            whiteSpace: "nowrap",
            borderRight: `3px solid ${colorMap[color]}`,
            paddingRight: "8px",
        };
    };

    return (
        <Text
            as={as}
            color={colorMap[color]}
            textShadow={glow ? glowMap[color] : undefined}
            transition="all 0.3s ease"
            _hover={
                glow
                    ? {
                          textShadow: `0 0 20px ${colorMap[color]}`,
                      }
                    : undefined
            }
            style={getAnimationStyle()}
            fontSize={fontSize}
        >
            <style>{`
                @keyframes typewriter {
                    to {
                        left: 100%;
                    }
                }
            `}</style>
            {children}
        </Text>
    );
};
