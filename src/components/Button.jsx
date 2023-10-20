import styles from "../styles/button.module.scss";

export default function Button({ variant, children }) {
    return (
        <div
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
