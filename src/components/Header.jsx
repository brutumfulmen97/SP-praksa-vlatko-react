import styles from "../styles/header.module.scss";
import logo from "../assets/header-logo.svg";
import pdf from "../assets/pdf.svg";
import sat from "../assets/sat.svg";
import { useEffect, useState } from "react";
import { useWindowReSize } from "../hooks/useWindowResize";

export default function Header() {
    const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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
                    <img src={logo} alt="logo" />
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
                                More 🔽
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
                        <svg
                            className={styles.hamburger}
                            width="800px"
                            height="800px"
                            viewBox="0 0 20 20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <title>hamburger</title>
                            <desc>Created with Sketch Beta.</desc>
                            <defs></defs>
                            <g id="Page-1" stroke="none" fill="none">
                                <g
                                    id="Icon-Set-Filled"
                                    transform="translate(-212.000000, -888.000000)"
                                    fill="#000000"
                                >
                                    <path
                                        d="M230,904 L214,904 C212.896,904 212,904.896 212,906 C212,907.104 212.896,908 214,908 L230,908 C231.104,908 232,907.104 232,906 C232,904.896 231.104,904 230,904 L230,904 Z M230,896 L214,896 C212.896,896 212,896.896 212,898 C212,899.104 212.896,900 214,900 L230,900 C231.104,900 232,899.104 232,898 C232,896.896 231.104,896 230,896 L230,896 Z M214,892 L230,892 C231.104,892 232,891.104 232,890 C232,888.896 231.104,888 230,888 L214,888 C212.896,888 212,888.896 212,890 C212,891.104 212.896,892 214,892 L214,892 Z"
                                        id="hamburger"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                        {isMobileMenuOpen && (
                            <div className={styles.mobile_menu}>
                                <svg
                                    className={styles.close_btn}
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <path
                                        d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
                                        fill="#1C274C"
                                    />
                                    <path
                                        d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                                        fill="#1C274C"
                                    />
                                </svg>
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
