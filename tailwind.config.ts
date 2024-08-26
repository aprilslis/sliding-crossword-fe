import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            "brown-1": "#5B4E45",
            "brown-2": "#AE998B",
            "brown-3": "#DCBAA1",
            "brown-4": "#E3D1C5",
            "primary-background": "#F9F7EE",
            "secondary-background": "#FFFFFF",
        },
        fontFamily: {
            jua: ["Jua", "sans-serif"],
            itim: ["Itim", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-xstops))",
            },
        },
    },
    plugins: [],
};
export default config;
