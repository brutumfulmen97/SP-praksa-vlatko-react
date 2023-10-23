import styles from "../styles/partner.module.scss";
import Button from "./Button";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import partnerDark from "../assets/jre.svg";
import partnerLight from "../assets/jre2.svg";

export default function Partner() {
    const { theme } = useContext(ThemeContext);
    return (
        <section className={styles.section__partner}>
            <div className={styles.section__partner_image}>
                <img
                    src={theme === "dark" ? partnerDark : partnerLight}
                    alt=""
                />
            </div>
            <div className={styles.section__partner_info}>
                <h2>Metzgerei Brath ist Mitglied im Genussnetzwerk</h2>
                <Button variant={"primary"}>Gehen zu site</Button>
            </div>
        </section>
    );
}
