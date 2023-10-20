import styles from "../styles/landing.module.scss";

import mesar from "../assets/mesar.jpg";

export default function Landing() {
    return (
        <div className={styles.landing}>
            <div className={styles.landing__image}>
                <img src={mesar} alt="measar" />
            </div>
            <div className={styles.landing__content}>
                <div className={styles.landing__content_text}>
                    <h1>Heiko Brath Metzgermeister</h1>
                    <p>
                        Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen
                        et. Tollit argumentum ius an. Pfannkuchen lobortis
                        elaboraret per ne, nam Aperol Spritz probatus pertinax.
                    </p>
                </div>
            </div>
        </div>
    );
}
