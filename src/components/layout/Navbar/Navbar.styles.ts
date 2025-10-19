import { hackerColors } from "@/theme/colors";

// Keyframe animations
export const navbarAnimations = `
    @keyframes glitch-navbar {
        0%, 100% {
            text-shadow: 0 0 10px ${hackerColors.neonGreen};
        }
        25% {
            text-shadow: 2px 0 10px ${hackerColors.neonCyan}, -2px 0 10px ${hackerColors.neonPink};
        }
        50% {
            text-shadow: 0 0 10px ${hackerColors.neonGreen};
        }
        75% {
            text-shadow: -2px 0 10px ${hackerColors.neonCyan}, 2px 0 10px ${hackerColors.neonPink};
        }
    }

    .navbar-glitch:hover {
        animation: glitch-navbar 0.3s ease-in-out;
    }

    .mobile-menu-enter {
        animation: slideInRight 0.3s ease-out;
    }

    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .cyber-border {
        position: relative;
    }

    .cyber-border::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, 
            transparent 0%, 
            ${hackerColors.neonCyan} 20%, 
            ${hackerColors.neonGreen} 50%, 
            ${hackerColors.neonCyan} 80%, 
            transparent 100%
        );
        box-shadow: 0 0 10px ${hackerColors.neonGreen};
    }
`;

// Navigation container styles
export const navContainerStyles = {
    bg: hackerColors.darkBg2,
    position: "sticky" as const,
    top: "0",
    zIndex: "100",
    boxShadow: `0 4px 20px rgba(0, 255, 65, 0.15)`,
    backdropFilter: "blur(10px)",
};

// Logo link styles
export const logoLinkStyles = {
    display: "flex",
    alignItems: "center",
    gap: 2,
    textDecoration: "none",
    className: "navbar-glitch",
    transition: "all 0.3s",
    outline: "none",
    _focus: {
        outline: "none",
        boxShadow: "none",
    },
    _focusVisible: {
        outline: `2px solid ${hackerColors.neonGreen}`,
        outlineOffset: "4px",
    },
    _hover: {
        transform: "scale(1.05)",
    },
};

// Logo icon styles
export const logoIconStyles = {
    color: hackerColors.neonGreen,
    fontSize: "lg" as const,
    filter: `drop-shadow(0 0 8px ${hackerColors.neonGreen})`,
};

// Nav link styles
export const navLinkStyles = {
    color: hackerColors.textPrimary,
    textDecoration: "none",
    fontFamily: "monospace",
    fontSize: { base: "lg", md: "sm" },
    fontWeight: "medium" as const,
    position: "relative" as const,
    transition: "all 0.3s ease",
    outline: "none",
    _focus: {
        outline: "none",
        boxShadow: "none",
    },
    _focusVisible: {
        outline: `2px solid ${hackerColors.neonGreen}`,
        outlineOffset: "4px",
    },
    _hover: {
        color: hackerColors.neonGreen,
        textShadow: hackerColors.glowGreen,
        transform: "translateX(4px)",
    },
};

// Nav link CSS (pseudo-elements)
export const navLinkCss = {
    "&::before": {
        content: '"> "',
        color: hackerColors.neonCyan,
        opacity: 0,
        marginRight: "-16px",
        transition: "all 0.3s ease",
    },
    "&:hover::before": {
        opacity: 1,
        marginRight: "4px",
    },
};

// Theme toggle button styles
export const themeToggleStyles = {
    size: "sm" as const,
    bg: "transparent",
    border: `1px solid ${hackerColors.borderNeon}`,
    color: hackerColors.neonGreen,
    outline: "none",
    _focus: {
        outline: "none",
        boxShadow: "none",
    },
    _focusVisible: {
        boxShadow: `0 0 0 3px ${hackerColors.neonGreen}40`,
    },
    _hover: {
        bg: hackerColors.darkBg3,
        boxShadow: hackerColors.glowGreen,
        transform: "translateY(-2px)",
    },
    transition: "all 0.3s",
};

// Mobile menu toggle button styles
export const mobileMenuToggleStyles = {
    size: "sm" as const,
    bg: "transparent",
    border: `1px solid ${hackerColors.neonCyan}`,
    color: hackerColors.neonCyan,
    outline: "none",
    _focus: {
        outline: "none",
        boxShadow: "none",
    },
    _focusVisible: {
        boxShadow: `0 0 0 3px ${hackerColors.neonCyan}40`,
    },
    _hover: {
        bg: hackerColors.darkBg3,
        boxShadow: hackerColors.glowCyan,
        transform: "rotate(90deg)",
    },
    transition: "all 0.3s",
};

// Mobile drawer styles
export const mobileDrawerStyles = {
    position: "fixed" as const,
    top: "0",
    right: "0",
    bottom: "0",
    width: "280px",
    bg: hackerColors.darkBg,
    borderLeft: `2px solid ${hackerColors.neonCyan}`,
    boxShadow: `-4px 0 30px rgba(0, 212, 255, 0.3)`,
    zIndex: "99",
    className: "mobile-menu-enter",
    overflowY: "auto" as const,
};

// Mobile menu header styles
export const mobileMenuHeaderStyles = {
    p: 6,
    borderBottom: `1px solid ${hackerColors.borderNeon}`,
    bg: hackerColors.darkBg2,
};

// Mobile menu close button styles
export const mobileMenuCloseButtonStyles = {
    size: "xs" as const,
    bg: "transparent",
    color: hackerColors.neonPink,
    outline: "none",
    _focus: {
        outline: "none",
        boxShadow: "none",
    },
    _focusVisible: {
        boxShadow: `0 0 0 3px ${hackerColors.neonPink}40`,
    },
    _hover: {
        transform: "rotate(90deg)",
    },
};

// Mobile menu item container styles
export const mobileMenuItemStyles = (index: number, total: number) => ({
    py: 4,
    borderBottom:
        index < total - 1 ? `1px solid ${hackerColors.darkBg3}` : "none",
});

// Mobile menu footer styles
export const mobileMenuFooterStyles = {
    position: "absolute" as const,
    bottom: "0",
    left: "0",
    right: "0",
    p: 6,
    borderTop: `1px solid ${hackerColors.borderNeon}`,
    bg: hackerColors.darkBg2,
};

// Mobile overlay styles
export const mobileOverlayStyles = {
    position: "fixed" as const,
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    bg: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(4px)",
    zIndex: "98",
};
