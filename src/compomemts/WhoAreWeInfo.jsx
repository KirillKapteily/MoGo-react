import styles from "./WhoAreWe.module.css"

export default function WhoAreWeInfo({img, title, descr}) {
    return(
        <li className={styles.who__are__we__item}>
            <img src={img} alt={title} />
            <h3 className={styles.list__title}>{title}</h3>
            <p className={styles.list__desc}>{descr}</p>
        </li>
    )
}