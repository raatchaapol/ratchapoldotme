import { hackerColors } from "@/theme/colors";

export const homeStyles = {
    cyberButton: {
        position: "relative" as const,
        overflow: "hidden" as const,
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
    },
    dashboardCard: {
        transition: "all 0.3s ease",
        "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 0 35px rgba(0, 255, 65, 0.25)",
        },
    },
    scanEffect: {
        position: "absolute" as const,
        width: "100%",
        height: "2px",
        background: `linear-gradient(90deg, transparent, ${hackerColors.neonCyan}, transparent)`,
        animation: "scan-line 4s ease-in-out infinite",
        opacity: 0.3,
    },
    resumeButton: {
        animation:
            "bounce-resume 2s ease-in-out infinite, pulse-glow 2s ease-in-out infinite",
    },
} as const;

export const homeKeyframes = `
    .cyber-button {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .cyber-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }

    .cyber-button:hover::before {
        left: 100%;
    }

    .dashboard-card {
        transition: all 0.3s ease;
    }

    .dashboard-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 0 35px rgba(0, 255, 65, 0.25);
    }

    @keyframes scan-line {
        0% { top: 0%; }
        100% { top: 100%; }
    }

    .scan-effect {
        position: absolute;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, ${hackerColors.neonCyan}, transparent);
        animation: scan-line 4s ease-in-out infinite;
        opacity: 0.3;
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

    .resume-button {
        animation: bounce-resume 2s ease-in-out infinite, pulse-glow 2s ease-in-out infinite;
    }

    .resume-button:hover {
        animation: none !important;
    }
`;
