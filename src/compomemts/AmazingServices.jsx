import AmazingServicesInfo from "./AmazingServicesInfo";
import styles from "./AmazingServises.module.css"

export default function AmazingServices({ card }) {
    return (
        <section>
            <h3 className={styles.pre__title}>We work with</h3>
            <h1 className={styles.main__title}>Amazing Services</h1>
            <hr className={styles.main__hr} />
            <ul className={styles.main__list}>
                {
                    card.map(info => {
                        return (
                            <AmazingServicesInfo
                                img={info.img}
                                title={info.title}
                                descr={info.descr}
                            />
                        )
                    })
                }
            </ul>
        </section>

    )
}