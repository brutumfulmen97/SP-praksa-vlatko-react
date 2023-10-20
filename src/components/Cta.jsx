import Button from "./Button";
import styles from "../styles/cta.module.scss";
import daska from "../assets/daska.png";

export default function Cta() {
    return (
        <div className={styles.section__cta}>
            <img src={daska} alt="daska" />
            <div className={styles.filter}>
                <div className={styles.section__cta_info}>
                    <h2
                    // className="relax"
                    // data-rellax-speed="-1"
                    // data-rellax-zindex="5"
                    // data-rellax-percentage="0.4"
                    >
                        Fleischversand
                    </h2>
                    <Button
                        variant={"secondary"}
                        // className="relax"
                        // data-rellax-speed="-1"
                        // data-rellax-zindex="5"
                        // data-rellax-percentage="0.3"
                    >
                        Jetzt bestellen
                    </Button>
                </div>
            </div>
        </div>
    );
}
