export enum Color {
  Coffee = "brown-1",
  Chocolate = "brown-2",
  Caramel = "brown-3",
  Latte = "brown-4",
}

interface DisplayGridProps {
  className: string;
  outerBorder: Color;
  topRowWords?: Color;
  allWords: Color;
}

export const DisplayGrid = ({
  className,
  outerBorder,
  topRowWords,
  allWords,
}: DisplayGridProps) => {
  const getWordColor = (index: number) => {
    if (index === 0 && topRowWords) return `text-${topRowWords}`;
    return `text-${allWords}`;
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
      className={`overflow-hidden border-2 border-${outerBorder} h-fit bg-brown-4 rounded-3xl ${className}`}
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
