import React, { ReactNode } from "react";

interface ButtonProps {
    onClick?: () => void;
    children: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center mt-2 bg-secondary-background p-2 text-xl rounded-lg border-2 w-44 h-9"
        >
            {children}
        </button>
    );
};
