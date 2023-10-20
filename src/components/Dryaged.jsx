import styles from "../styles/dryaged.module.scss";
import Button from "./Button";
import meso1 from "../assets/meso1.png";
import meso2 from "../assets/meso2.png";
import meso3 from "../assets/meso3.png";
import meso4 from "../assets/meso4.png";

export default function Dryaged() {
    return (
        <section className={styles.section__dry_aged}>
            <div className={styles.section__dry_aged_left}>
                <div>
                    <h2>Dry Aged</h2>
                    <h3>Alte Wutz, Dry Aged</h3>
                </div>
                <p>
                    Halt amet, consectetur Handtasche elit, sed do eiusmod
                    tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut
                    enim ad minim veniam, Turnbeutel nostrud exercitation
                    ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea
                    commodo consequat. Wiener Schnitzel aute irure dolor in
                    reprehenderit Guten Tag mollit anim Stuttgart.
                </p>
                <p>
                    id latine indoctum complectitur HugoClub Mate mea meliore
                    denique nominavi id. Ohrwurm expetenda nam an, his ei Reise
                    euismod assentior.
                </p>
                <div className={styles.buttons}>
                    <Button variant={"primary"}>Dry Aged</Button>
                    <Button variant={"primary"}>Alte Wurtz</Button>
                </div>
            </div>
            <div className={styles.section__dry_aged_right}>
                <div className={styles.gore}>
                    <img src={meso1} alt="meso" />
                </div>
                <div className={styles.dole}>
                    <img src={meso2} alt="meso" />
                    <img src={meso3} alt="meso" />
                    <img src={meso4} alt="meso" />
                </div>
            </div>
        </section>
    );
}
