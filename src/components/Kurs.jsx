import styles from "../styles/kurs.module.scss";
import Button from "./Button";
import raznjic from "../assets/raznjic.jpg";

export default function Kurs() {
    return (
        <section className={styles.section__kurs}>
            <div className={styles.section__kurs_info}>
                <h2>Buchen Sie den Grillkurs jetzt</h2>
                <ul>
                    <li>professioneller Lehrer</li>
                    <li>ausgezeichneter Metzger</li>
                    <li>1 Tag</li>
                    <li>lernen Sie die Kunst des Grillens</li>
                </ul>
                <Button variant={"secondary"}>Grillkurs</Button>
            </div>
            <div className={styles.section__kurs_image}>
                <img src={raznjic} alt="raznjic" />
            </div>
        </section>
    );
}
