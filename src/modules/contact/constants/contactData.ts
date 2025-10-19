import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PERSONAL_INFO } from "@/shared/constants";

export const CONTACT_HEADER = {
    comment: "// Contact",
    title: "GET IN TOUCH",
    subtitle: "> Let's connect and build something amazing",
} as const;

export const EMAIL_SECTION = {
    title: "// Email",
    description: "Ready to collaborate? Send me a message:",
    email: PERSONAL_INFO.EMAIL,
    buttonText: "Send Email",
} as const;

export const SOCIAL_LINKS = [
    {
        icon: FaGithub,
        label: "GitHub",
        url: PERSONAL_INFO.GITHUB,
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        url: PERSONAL_INFO.LINKEDIN,
    },
] as const;

export const RESPONSE_TIME = {
    title: "// Response Time",
    heading: "Usually within 24 hours",
    description:
        "I typically respond to emails within 24 hours. Feel free to reach out with any questions, collaboration opportunities, or just to say hello!",
} as const;

export const PAGE_FOOTER = "> Looking forward to hearing from you!" as const;
