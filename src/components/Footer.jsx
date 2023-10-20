import styles from "../styles/footer.module.scss";
import logo from "../assets/header-logo.svg";
import info from "../assets/info.png";
import drustvene from "../assets/drustvene mreze.png";

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer__main}>
                <div className={styles.footer__main_info}>
                    <img className={styles.lokacija} src={info} />
                    <div>
                        <p>Klauprechtstraße 25</p>
                        <p>76137 Karlsruhe, Germany</p>
                        <p>+49 721 358060</p>
                        <p>info@partyservice-brath.de</p>
                    </div>
                </div>
                <div className={styles.footer__main_logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.footer__main_social}>
                    <p>Besuchen Sie uns auf:</p>
                    <img src={drustvene} alt="" />
                </div>
            </div>
            <div className={styles.footer__main_copyright}>
                <p>© 2020 by Metzgerei Heiko Brath GmbH, Deutschland</p>
                <p>
                    Code and design by <span>StudioPresent</span>
                </p>
            </div>
        </footer>
    );
}
