import styles from "./AmazingServises.module.css"

export default function AmazingServicesInfo({img, title, descr}) {
    return(
        <li>
            <div className={styles.as__wrapper}>
                <div>
            <img src={img} alt={title} className={styles.as__img} width="37" height="37"/>
            </div>
            <div>
                 <h3 className={styles.card__title}>{title}</h3>
            <p className={styles.text__list}>{descr}</p>
            </div>
            </div>
            
    
        </li>
    )
}