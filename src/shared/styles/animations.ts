import { hackerColors } from "@/theme/colors";

export const animations = {
    scanLine: {
        "0%": { top: "0%" },
        "100%": { top: "100%" },
    },
    bounceResume: {
        "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
        },
        "40%": {
            transform: "translateY(-10px)",
        },
        "60%": {
            transform: "translateY(-5px)",
        },
    },
    pulseGlow: {
        "0%, 100%": {
            boxShadow: `0 0 8px ${hackerColors.neonCyan}`,
        },
        "50%": {
            boxShadow: `0 0 15px ${hackerColors.neonCyan}`,
        },
    },
} as const;

export const animationKeyframes = `
    @keyframes scan-line {
        0% { top: 0%; }
        100% { top: 100%; }
    }

    @keyframes bounce-resume {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }

    @keyframes pulse-glow {
        0%, 100% {
            box-shadow: 0 0 8px ${hackerColors.neonCyan};
        }
        50% {
            box-shadow: 0 0 15px ${hackerColors.neonCyan};
        }
    }
`;
