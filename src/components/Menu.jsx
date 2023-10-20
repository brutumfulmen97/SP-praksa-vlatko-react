import styles from "../styles/menu.module.scss";

const menuContent = [
    {
        img: "/jelo1.png",
        text: "Wurstchen",
    },
    {
        img: "/jelo2.png",
        text: "Hanchen",
    },
    {
        img: "/jelo3.png",
        text: "Schwein",
    },
    {
        img: "/jelo4.png",
        text: "Rind",
    },
];

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
