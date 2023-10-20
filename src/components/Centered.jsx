import styles from "../styles/centered.module.scss";

import Button from "./Button";

const centeredContent = [
    `Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
    Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad
    minim veniam, Turnbeutel nostrud exercitation ullamco laboris
    nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.`,
    "Wiener Schnitzel aute irure dolor in Guten Tag mollit anim Stuttgart.",
    "id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior",
];

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
