import WhoAreWeInfo from "./WhoAreWeInfo";
import styles from "./WhoAreWe.module.css"

export default function WhoAreWe({ card }) {
    return (
        <section>
            <h3 className={styles.pre__title}>Who we are</h3>
            <h1 className={styles.main__title}>Meet our team</h1>
            <hr className={styles.main__hr} />
            <p className={styles.main__title__2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <ul className={styles.main__list__team}>
                {
                    card.map(info => {
                        return (
                            <WhoAreWeInfo
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