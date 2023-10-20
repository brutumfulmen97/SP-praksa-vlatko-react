import styles from "../styles/awards.module.scss";

const awardsContent = [
    {
        img: "/nagrada1.svg",
        text: "Tollit argumentum genau Saepe lobortis",
    },
    {
        img: "/nagrada2.svg",
        text: "Schneewittchen denique",
    },
    {
        img: "/nagrada3.svg",
        text: "Grimms Märchen expetenda",
    },
    {
        img: "/nagrada4.svg",
        text: "Mettwurst mei ullum gloriatur.",
    },
];

export default function Awards() {
    return (
        <section className={styles.section__awards}>
            <div>
                <h2>Auszeichnungen</h2>
            </div>

            <div className={styles.section__awards_awards}>
                {awardsContent.map((item, i) => (
                    <div key={i}>
                        <img src={item.img} alt="nagrada" />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
