import styles from "../styles/divider.module.scss";

import logo from "../assets/logo-div.svg";
import logoL from "../assets/logo-div2.svg";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

export default function Divider() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.logo_divider}>
            <img
                src={theme === "dark" ? logo : logoL}
                alt="logo-divider"
                data-aos="fade-down"
            />
        </div>
    );
}
