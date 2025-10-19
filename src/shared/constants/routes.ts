import { Path } from "@/router";

export const ROUTES: Record<string, Path> = {
    HOME: "/",
    ABOUT: "/about",
    PROJECTS: "/projects",
    SKILLS: "/skills",
    CONTACT: "/contact",
} as const;

export const NAV_LINKS = [
    { label: "Home", href: ROUTES.HOME },
    { label: "About", href: ROUTES.ABOUT },
    { label: "Projects", href: ROUTES.PROJECTS },
    { label: "Skills", href: ROUTES.SKILLS },
    { label: "Contact", href: ROUTES.CONTACT },
] as const;
