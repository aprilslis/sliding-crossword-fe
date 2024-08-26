import { Button } from "../Button";

export const Menu = () => {
    return (
        <div className="w-6/12">
            <div className="flex flex-col">
                <div className="text-6xl font-jua mb-4">Sliding</div>
                <div className="text-6xl font-jua mb-4">Crossword</div>
            </div>
            <div className="text-2xl">Sliding puzzles but with crosswords!</div>
            <div className="my-8">
                <Button>Rules</Button>
                <Button>Past Puzzles</Button>
                <Button>Rules</Button>
            </div>
        </div>
    );
};
