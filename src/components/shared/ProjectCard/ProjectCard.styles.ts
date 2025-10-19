import { hackerColors } from "@/theme/colors";

export const cardContainerStyles = {
    p: 6,
    bg: hackerColors.darkBg3,
    border: `1px solid ${hackerColors.borderNeon}`,
    borderRadius: "8px",
    transition: "all 0.3s ease",
    position: "relative" as const,
    overflow: "hidden" as const,
    _hover: {
        borderColor: hackerColors.neonCyan,
        boxShadow: hackerColors.glowCyan,
        transform: "translateY(-4px)",
    },
};

export const difficultyStarStyles = (isActive: boolean) => ({
    color: isActive ? hackerColors.neonCyan : hackerColors.darkBg2,
    fontSize: "xs" as const,
});

export const difficultyLabelStyles = {
    fontSize: "xs" as const,
    color: hackerColors.textSecondary,
    fontFamily: "monospace",
    ml: 2,
};

export const descriptionTextStyles = {
    color: hackerColors.textPrimary,
    lineHeight: "1.6",
    fontSize: "sm" as const,
};

export const tagStyles = {
    px: 3,
    py: 1,
    bg: `rgba(0, 212, 255, 0.1)`,
    border: `1px solid ${hackerColors.neonCyan}`,
    borderRadius: "4px",
    fontSize: "xs" as const,
    fontFamily: "monospace",
    color: hackerColors.neonCyan,
    transition: "all 0.2s",
    _hover: {
        bg: `rgba(0, 212, 255, 0.2)`,
        boxShadow: `0 0 10px ${hackerColors.neonCyan}`,
    },
};

export const linkWrapperStyles = {
    textDecoration: "none",
    flex: 1,
};

export const primaryButtonStyles = {
    size: "sm" as const,
    width: "100%",
    bg: hackerColors.neonCyan,
    color: hackerColors.darkBg,
    fontFamily: "monospace",
    fontWeight: "bold" as const,
    fontSize: "xs" as const,
    _hover: {
        boxShadow: hackerColors.glowCyan,
        transform: "translateY(-2px)",
    },
};

export const secondaryButtonStyles = {
    size: "sm" as const,
    width: "100%",
    bg: "transparent",
    border: `1px solid ${hackerColors.neonCyan}`,
    color: hackerColors.neonCyan,
    fontFamily: "monospace",
    fontWeight: "bold" as const,
    fontSize: "xs" as const,
    _hover: {
        boxShadow: hackerColors.glowCyan,
        bg: "rgba(0, 212, 255, 0.1)",
        transform: "translateY(-2px)",
    },
};
