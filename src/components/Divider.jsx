import styles from "../styles/divider.module.scss";

import logo from "../assets/logo-div.svg";

export default function Divider() {
    return (
        <div className={styles.logo_divider}>
            <img src={logo} alt="logo-divider" data-aos="fade-down" />
        </div>
    );
}
