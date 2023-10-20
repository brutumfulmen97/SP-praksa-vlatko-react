import styles from "../styles/spices.module.scss";

import zacini from "../assets/zacini.jpg";

export default function Spices() {
    return (
        <section className={styles.section__spices}>
            <div className={styles.section__spices_image}>
                <img src={zacini} alt="zacini" />
            </div>
            <div className={styles.section__spices_info}>
                <h2>Custome spices for your meat</h2>
                <h3>
                    Turnbeutel nostrud exercitation ullamco Sprechen Sie deutsch
                </h3>
                <p>
                    Odio principes iracundia Müller Rice pri. Ut vel solum
                    mandamus, Kartoffelkopf natum adversarium ei ius, diam
                    Schmetterling honestatis eum.
                </p>
                <p>
                    Wiener Schnitzel amet, consectetur Handtasche elit, sed do
                    eiusmod tempor Stuttgart ut labore et dolore magna 99
                    Luftballons Ut enim ad minim veniam, Turnbeutel nostrud
                    exercitation ullamco laboris nisi Sprechen Sie deutsch
                    aliquip ex ea commodo consequat.
                </p>
            </div>
        </section>
    );
}
