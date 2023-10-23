import styles from "../styles/popup.module.scss";
import { useEffect, useCallback } from "react";
import Button from "./Button";

export default function Popup() {
    function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const popupCB = useCallback(async () => {
        await wait(3000);
        document.body.style.overflow = "hidden";
        const popup = document.getElementById("overlay");
        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const left = (screenWidth - popupWidth) / 2;
        const top = (screenHeight - popupHeight) / 2;
        popup.style.left = left + "px";
        popup.style.top = top + "px";
        popup.style.display = "block";
        window.removeEventListener("scroll", popupCB);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", popupCB);
        return () => window.removeEventListener("scroll", popupCB);
    }, [popupCB]);

    return (
        <div className={styles.overlay} id="overlay">
            <div className={styles.popup}>
                <span
                    className={styles.close_button}
                    id="close-button"
                    onClick={() => {
                        document.body.style.overflow = "auto";
                        const popup = document.getElementById("overlay");
                        popup.style.display = "none";
                    }}
                >
                    X
                </span>
                <p>
                    🌟 Congratulations! You&apos;ve unlocked an exclusive offer!
                    🌟
                </p>
                <p>
                    <strong>Limited Time Offer:</strong>
                </p>
                <p>🔥 Get 20% off on your next purchase! 🔥</p>
                <Button id="claim-button" variant={"primary"}>
                    Claim My Discount
                </Button>
                <p>
                    <em>Don&apos;t miss out on this incredible deal!</em>
                </p>
            </div>
        </div>
    );
}
