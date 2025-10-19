import { FaLightbulb, FaRocket, FaHeart, FaCode } from "react-icons/fa";

export const ABOUT_HEADER = {
    comment: "// About Me",
    title: "FULL-STACK ENGINEER",
    subtitle: "> Passionate about frontend development",
} as const;

export const WHO_I_AM = {
    title: "// Who I Am",
    content:
        "I'm a full-stack software engineer with a strong passion for building beautiful, performant user interfaces. With expertise spanning both frontend and backend technologies, I create seamless, end-to-end solutions that users love to interact with.",
    tag: "> Clean code enthusiast",
} as const;

export const MY_JOURNEY = {
    title: "// My Journey",
    paragraphs: [
        "My career has been focused on understanding the intersection between great design and solid engineering. I believe that the best applications are those that combine intuitive user experiences with clean, maintainable code.",
        "I'm constantly learning new technologies and best practices to stay at the forefront of modern web development.",
    ],
    tag: "> Always evolving",
} as const;

export const PASSION_ITEMS = [
    {
        icon: FaLightbulb,
        title: "Problem Solving",
        description: "Complex challenges drive me",
    },
    {
        icon: FaRocket,
        title: "Performance",
        description: "Speed & optimization matter",
    },
    {
        icon: FaHeart,
        title: "UX Design",
        description: "Users come first",
    },
    {
        icon: FaCode,
        title: "Clean Code",
        description: "Maintainable & tested",
    },
] as const;

export const PASSION_FOOTER_NOTE =
    "When I'm not coding, you can find me exploring new technologies, mentoring developers, or contributing to open-source projects." as const;

export const PAGE_FOOTER = "> Let's build something amazing together" as const;
