"use client";

import { Box } from "@chakra-ui/react";
import { hackerColors } from "@/theme/colors";
import { useState, useRef, useEffect } from "react";
import {
    glitchAnimations,
    outerBoxStyles,
    glitchContainerStyles,
    secondaryTextStyles,
    mainContentStyles,
} from "./GlitchText.styles";
import type { FunctionComponent } from "react";

interface GlitchTextProps {
    children: React.ReactNode;
    color?: "green" | "cyan" | "purple" | "pink";
    secondaryText?: React.ReactNode;
}

export const GlitchText: FunctionComponent<GlitchTextProps> = ({
    children,
    color = "green",
    secondaryText,
}) => {
    const colorMap = {
        green: hackerColors.neonGreen,
        cyan: hackerColors.neonCyan,
        purple: hackerColors.neonPurple,
        pink: hackerColors.neonPink,
    };

    const selectedColor = colorMap[color];

    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) / (rect.width / 2);
            const deltaY = (e.clientY - centerY) / (rect.height / 2);

            // Max tilt of 5 degrees
            setTilt({
                x: deltaY * 5,
                y: deltaX * -5,
            });
        };

        const handleMouseLeave = () => {
            setTilt({ x: 0, y: 0 });
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (container) {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <Box ref={containerRef} {...outerBoxStyles}>
            <style>{glitchAnimations}</style>

            <Box {...glitchContainerStyles(tilt)}>
                {/* Secondary Text - Dual glitch layers (cyan + pink, behind everything) */}
                {secondaryText && (
                    <>
                        <Box
                            {...secondaryTextStyles(tilt)}
                            className="glitch-secondary glitch-secondary-cyan"
                        >
                            {secondaryText}
                        </Box>
                        <Box
                            {...secondaryTextStyles(tilt)}
                            className="glitch-secondary glitch-secondary-pink"
                        >
                            {secondaryText}
                        </Box>
                    </>
                )}

                {/* Main Content - Highest Layer */}
                <Box {...mainContentStyles(selectedColor)}>{children}</Box>

                {/* Glitch Layer 1 (Cyan) - Behind main, shows same as main */}
                <Box className="glitch-layer glitch-layer-1" aria-hidden="true">
                    {children}
                </Box>

                {/* Glitch Layer 2 (Pink) - Behind cyan, shows same as main */}
                <Box className="glitch-layer glitch-layer-2" aria-hidden="true">
                    {children}
                </Box>
            </Box>
        </Box>
    );
};
