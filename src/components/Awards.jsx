import styles from "../styles/awards.module.scss";
import data from "../data.json";

const { awardsContent } = data;

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
