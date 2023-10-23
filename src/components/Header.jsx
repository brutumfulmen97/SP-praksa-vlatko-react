import styles from "../styles/header.module.scss";
import logo from "../assets/header-logo.svg";
import close from "../assets/close.svg";
import hamburger from "../assets/hamburger.svg";
import pdf from "../assets/pdf.svg";
import sat from "../assets/sat.svg";
import { useContext, useEffect, useState } from "react";
import { useWindowReSize } from "../hooks/useWindowResize";
import { ThemeContext } from "../context/theme-context";
import { ChevronDown } from "lucide-react";

export default function Header() {
    const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const { theme, setTheme } = useContext(ThemeContext);

    const width = useWindowReSize();

    useEffect(() => {
        if (width >= 1440) {
            setIsTablet(false);
            setIsMobile(false);
        } else if (width >= 768) {
            setIsTablet(true);
            setIsMobile(false);
        } else {
            setIsTablet(false);
            setIsMobile(true);
        }
    }, [width]);

    return (
        <header>
            <div className={styles.header__main}>
                <div className={styles.header__logo}>
                    <img
                        src={logo}
                        alt="logo"
                        onClick={() => {
                            setTheme(theme === "dark" ? "light" : "dark");
                        }}
                    />
                </div>
                <div className={styles.dark_mode_toggle}>
                    <label htmlFor="checkbox" className={styles.switch}>
                        <input
                            type="checkbox"
                            id="checkbox"
                            checked={theme === "dark"}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setTheme("dark");
                                } else {
                                    setTheme("light");
                                }
                            }}
                        />
                        <div
                            className={`${styles.klizac}`}
                            style={{
                                borderRadius: "34px",
                            }}
                        ></div>
                    </label>
                </div>
                <nav className={styles.header__nav}>
                    {!isMobile && !isTablet && (
                        <div className={styles.header__nav_xl}>
                            <a href="#">Die Metzgerei</a>
                            <a href="#">Dry Aged</a>
                            <a href="#">Fleischversand</a>
                            <a href="#">Events/Kurse</a>
                            <a href="#">Partyservice</a>
                            <a href="#">Tagesessen</a>
                            <a href="#">Impressum</a>
                            <a href="#">Kontakt</a>
                        </div>
                    )}

                    {isTablet && (
                        <div className={styles.header__nav_md}>
                            <a href="#">Tagesessen</a>
                            <a href="#">Impressum</a>
                            <a href="#">Kontakt</a>
                            <div
                                className={styles.dropdown}
                                onClick={() =>
                                    setIsTabletMenuOpen(!isTabletMenuOpen)
                                }
                            >
                                <div className={styles.dropdown_title}>
                                    <p>More</p>
                                    <ChevronDown />
                                </div>
                                {isTabletMenuOpen && (
                                    <div className={styles.dropdown_content}>
                                        <a href="#">Die Metzgerei</a>
                                        <a href="#">Dry Aged</a>
                                        <a href="#">Fleischversand</a>
                                        <a href="#">Events/Kurse</a>
                                        <a href="#">Partyservice</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </nav>
                <div className={styles.header__pdf}>
                    <img src={pdf} alt="" />
                    <p>download</p>
                </div>
                {isMobile && (
                    <div className={styles.header__nav_sm}>
                        <img
                            src={hamburger}
                            className={styles.hamburger}
                            onClick={() => setIsMobileMenuOpen(true)}
                        />
                        {isMobileMenuOpen && (
                            <div className={styles.mobile_menu}>
                                <img
                                    src={close}
                                    className={styles.close_btn}
                                    alt="close button"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                />
                                <a href="#">Die Metzgerei</a>
                                <a href="#">Dry Aged</a>
                                <a href="#">Fleischversand</a>
                                <a href="#">Events/Kurse</a>
                                <a href="#">Partyservice</a>
                                <a href="#">Tagesessen</a>
                                <a href="#">Impressum</a>
                                <a href="#">Kontakt</a>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className={styles.header__opentime}>
                <div>
                    <img src={sat} alt="sat" />
                </div>
                <p>
                    <b>Opentime: </b>Di. - Fr.: 07:00-13:00 und 15:00-18:30.
                    Sa.: 07:30 - 12:30
                </p>
            </div>
            <div className={styles.header__christmastime}>
                <p>
                    <b>Christmas opentime:</b>
                </p>
                <p>
                    Di. - Fr.: 07:00-13:00 und 15:00-18:30. Sa.: 07:30 - 12:30
                </p>
            </div>
        </header>
    );
}
