import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Sliding Crossword",
    description: "Sliding puzzles but with crosswords!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
