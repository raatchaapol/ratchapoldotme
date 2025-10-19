import { hackerColors } from "@/theme/colors";

export const footerContainerStyles = {
    bg: hackerColors.darkBg2,
    borderTopWidth: "2px",
    borderTopColor: hackerColors.borderNeon,
    boxShadow: `0 0 20px rgba(0, 255, 65, 0.1)`,
};

export const copyrightTextStyles = {
    color: hackerColors.textSecondary,
    fontSize: "sm" as const,
    fontFamily: "monospace",
};

export const socialLinkStyles = {
    _hover: { textDecoration: "none" },
    transition: "all 0.3s",
};

export const socialIconStyles = (iconColor: string, glowColor: string) => ({
    color: hackerColors.textSecondary,
    _hover: {
        color: iconColor,
        filter: `drop-shadow(0 0 10px ${glowColor})`,
    },
    transition: "all 0.2s",
});
