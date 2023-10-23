import Button from "./Button";
import styles from "../styles/cta.module.scss";
import daska from "../assets/daska.png";

import { Parallax } from "react-parallax";

export default function Cta() {
    return (
        <Parallax
            className={styles.section__cta}
            bgImage={daska}
            strength={500}
            blur={{ min: -15, max: 15 }}
        >
            <div className={styles.filter}>
                <div className={styles.section__cta_info}>
                    <h2>Fleischversand</h2>
                    <Button variant={"secondary"}>Jetzt bestellen</Button>
                </div>
            </div>
        </Parallax>
    );
}
