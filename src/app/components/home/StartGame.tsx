import { BorderColor, TextColor, DisplayGrid } from "./DisplayGrid";

import styles from "./StartGame.module.scss";

export const StartGame = () => {
    return (
        <div>
            <DisplayGrid
                className={`${styles["front-grid"]}`}
                outerBorder={BorderColor.Coffee}
                topRowWords={TextColor.Coffee}
                allWords={TextColor.Latte}
            />
            <DisplayGrid
                className={`${styles["middle-grid"]}`}
                outerBorder={BorderColor.Chocolate}
                allWords={TextColor.Caramel}
            />
            <DisplayGrid
                className={`${styles["back-grid"]}`}
                outerBorder={BorderColor.Chocolate}
                allWords={TextColor.Chocolate}
            />
        </div>
    );
};
