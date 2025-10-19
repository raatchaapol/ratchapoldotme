import { hackerColors } from "@/theme/colors";

export const cyberButtonStyles = {
    position: "relative" as const,
    overflow: "hidden" as const,
    transition: "all 0.3s ease",
    "&::before": {
        content: '""',
        position: "absolute" as const,
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
        transition: "left 0.5s",
    },
    "&:hover::before": {
        left: "100%",
    },
};

export const dashboardCardStyles = {
    transition: "all 0.3s ease",
    "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 0 35px rgba(0, 255, 65, 0.25)",
    },
};

export const scanEffectStyles = {
    position: "absolute" as const,
    width: "100%",
    height: "2px",
    background: `linear-gradient(90deg, transparent, ${hackerColors.neonCyan}, transparent)`,
    animation: "scan-line 4s ease-in-out infinite",
    opacity: 0.3,
};
