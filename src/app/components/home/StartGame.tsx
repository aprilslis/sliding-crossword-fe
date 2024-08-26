import { DisplayGrid } from "./DisplayGrid";

import styles from "./StartGame.module.scss";

export const StartGame = () => {
    return (
        <div>
            <DisplayGrid className={`${styles["front-grid"]}`} />
            <DisplayGrid className={`${styles["middle-grid"]}`} />
            <DisplayGrid className={`${styles["back-grid"]}`} />
        </div>
    );
};
