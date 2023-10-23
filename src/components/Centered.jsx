import styles from "../styles/centered.module.scss";
import data from "../data.json";

const { centeredContent } = data;
import Button from "./Button";

export default function Centered() {
    return (
        <section className={styles.section__centered}>
            <h2>Das Handwerk</h2>
            <h3>alles über unsere Hausgemachte Produkte</h3>
            {centeredContent.map((item, i) => (
                <p key={i}>{item}</p>
            ))}

            <Button variant="primary">Das Handwerk</Button>
        </section>
    );
}
