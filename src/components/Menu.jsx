import styles from "../styles/menu.module.scss";
import data from "../data.json";

const { menuContent } = data;

export default function Menu() {
    return (
        <section className={styles.section__menu}>
            {menuContent.map((item, i) => (
                <div key={i}>
                    <img src={item.img} alt="menu item" />
                    <p>{item.text}</p>
                </div>
            ))}
        </section>
    );
}
