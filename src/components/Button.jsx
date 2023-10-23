import styles from "../styles/button.module.scss";

export default function Button({ variant = "primary", style, children }) {
    return (
        <div
            style={style}
            className={
                variant === "primary"
                    ? styles.btn_primary
                    : styles.btn_secondary
            }
        >
            {children}
        </div>
    );
}
