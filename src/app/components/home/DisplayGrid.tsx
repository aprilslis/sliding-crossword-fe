interface DisplayGridProps {
    className: string;
}

export const DisplayGrid = ({ className }: DisplayGridProps) => {
    const capitalize = (str: string) => str.toUpperCase();
    const grid = [
        ["a", "b", "c", "d", "e"],
        ["f", "g", "h", "i", "j"],
        ["k", "l", "m", "n", "o"],
        ["p", "q", "r", "s", "t"],
        ["", "z", "w", "x", "v"],
    ].map((row) => row.map((cell) => (cell === "" ? "" : capitalize(cell))));

    const border: Record<string, string> = {
        "00": "border-t-0 border-l-0 rounded-tl-3xl",
        "01": "border-t-0",
        "02": "border-t-0",
        "03": "border-t-0",
        "04": "border-t-0 border-r-0 rounded-tr-3xl",
        "10": "border-l-0",
        "20": "border-l-0",
        "30": "border-l-0",
        "40": "border-l-0 border-b-0 rounded-bl-3xl",
        "41": "border-b-0",
        "42": "border-b-0",
        "43": "border-b-0",
        "44": "border-b-0 border-r-0 rounded-br-3xl",
        "14": "border-r-0",
        "24": "border-r-0",
        "34": "border-r-0",
        default: "",
    };

    return (
        <div className={`border-2 h-fit bg-brown-4 rounded-3xl ${className}`}>
            {grid.map((row, i) => (
                <div key={i} className="flex">
                    {row.map((cell, j) => (
                        <div
                            key={j}
                            className={`border bg-secondary-background border-brown-2 flex items-center justify-center w-20 h-20 text-5xl 
                                      ${border[`${i}${j}`]}  ${
                                cell === "" && `!bg-brown-4`
                            }`}
                        >
                            {cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
