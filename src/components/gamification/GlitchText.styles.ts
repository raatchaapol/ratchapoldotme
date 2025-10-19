import { hackerColors } from "@/theme/colors";

export const glitchAnimations = `
    .glitch-container {
        position: relative;
        display: inline-block;
        transition: transform 0.6s ease-out;
        transform-style: preserve-3d;
    }

    .glitch-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .glitch-layer-1 {
        color: ${hackerColors.neonCyan};
        opacity: 0.7;
        animation: glitch-1 2.5s infinite;
        z-index: 1;
    }

    .glitch-layer-2 {
        color: ${hackerColors.neonPink};
        opacity: 0.7;
        animation: glitch-2 2.5s infinite reverse;
        z-index: 2;
    }

    .glitch-secondary {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.45em;
        white-space: nowrap;
        pointer-events: none;
        z-index: 0;
        transition: transform 0.6s ease-out;
    }

    .glitch-secondary-cyan {
        color: ${hackerColors.neonCyan};
        opacity: 0.4;
        animation: glitch-secondary-1 6s infinite;
        text-shadow: 0 0 5px currentColor;
    }

    .glitch-secondary-pink {
        color: ${hackerColors.neonPink};
        opacity: 0.4;
        animation: glitch-secondary-2 6s infinite reverse;
        text-shadow: 0 0 5px currentColor;
    }

    @keyframes glitch-secondary-1 {
        0%, 20%, 40%, 60%, 80%, 100% {
            clip-path: inset(0 0 0 0);
        }
        10% {
            clip-path: inset(30% 0 50% 0);
        }
        30% {
            clip-path: inset(60% 0 20% 0);
        }
        50% {
            clip-path: inset(20% 0 60% 0);
        }
        70% {
            clip-path: inset(50% 0 30% 0);
        }
    }

    @keyframes glitch-secondary-2 {
        0%, 25%, 45%, 65%, 85%, 100% {
            clip-path: inset(0 0 0 0);
        }
        15% {
            clip-path: inset(40% 0 30% 0);
        }
        35% {
            clip-path: inset(20% 0 70% 0);
        }
        55% {
            clip-path: inset(70% 0 10% 0);
        }
        75% {
            clip-path: inset(35% 0 45% 0);
        }
    }

    @keyframes glitch-1 {
        0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(0, 0);
        }
        20% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(-2px, 2px);
        }
        40% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(-2px, -2px);
        }
        60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(2px, -2px);
        }
        80% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(2px, 2px);
        }
        100% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(0, 0);
        }
    }

    @keyframes glitch-2 {
        0% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(0, 0);
        }
        20% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(2px, -2px);
        }
        40% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(2px, 2px);
        }
        60% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(-2px, -2px);
        }
        80% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(-2px, 2px);
        }
        100% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(0, 0);
        }
    }
`;

export const outerBoxStyles = {
    position: "relative" as const,
    display: "inline-block",
    style: {
        perspective: "1000px",
    },
};

export const glitchContainerStyles = (tilt: { x: number; y: number }) => ({
    className: "glitch-container",
    position: "relative" as const,
    style: {
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    },
});

export const secondaryTextStyles = (tilt: { x: number; y: number }) => ({
    className: "glitch-secondary",
    "aria-hidden": true,
    style: {
        transform: `translateZ(-30px) translateX(${tilt.y * 2}px) translateY(${
            tilt.x * 2
        }px)`,
    },
});

export const mainContentStyles = (color: string) => ({
    position: "relative" as const,
    color,
    zIndex: 3,
});
