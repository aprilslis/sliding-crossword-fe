import { Color, DisplayGrid } from "./DisplayGrid";

import styles from "./StartGame.module.scss";

export const StartGame = () => {
  return (
    <div>
      <DisplayGrid
        className={`${styles["front-grid"]}`}
        outerBorder={Color.Coffee}
        topRowWords={Color.Coffee}
        allWords={Color.Latte}
      />
      <DisplayGrid
        className={`${styles["middle-grid"]}`}
        outerBorder={Color.Chocolate}
        allWords={Color.Caramel}
      />
      <DisplayGrid
        className={`${styles["back-grid"]}`}
        outerBorder={Color.Chocolate}
        allWords={Color.Chocolate}
      />
    </div>
  );
};
