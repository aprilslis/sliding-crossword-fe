export enum TextColor {
    Coffee = "text-brown-1",
    Chocolate = "text-brown-2",
    Caramel = "text-brown-3",
    Latte = "text-brown-4",
}

export enum BorderColor {
    Coffee = "border-brown-1",
    Chocolate = "border-brown-2",
    Caramel = "border-brown-3",
    Latte = "border-brown-4",
}

interface DisplayGridProps {
    className: string;
    outerBorder: BorderColor;
    topRowWords?: TextColor;
    allWords: TextColor;
}

export const DisplayGrid = ({
    className,
    outerBorder,
    topRowWords,
    allWords,
}: DisplayGridProps) => {
    const getWordColor = (index: number) => {
        return index === 0 && topRowWords ? topRowWords : allWords;
    };
    const capitalize = (str: string) => str.toUpperCase();
    const grid = [
        ["a", "b", "c", "d", "e"],
        ["f", "g", "h", "i", "j"],
        ["k", "l", "m", "n", "o"],
        ["p", "q", "r", "s", "t"],
        ["", "z", "w", "x", "v"],
    ].map((row) => row.map((cell) => (cell === "" ? "" : capitalize(cell))));

    return (
        <div
            className={`overflow-hidden border-2 ${outerBorder} h-fit bg-brown-4 rounded-3xl ${className}`}
        >
            {grid.map((row, i) => (
                <div key={i} className="flex">
                    {row.map((cell, j) => (
                        <div
                            key={j}
                            className={`border ${getWordColor(
                                i
                            )} bg-secondary-background border-brown-2 flex items-center justify-center w-28 h-28 text-7xl`}
                        >
                            {cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
