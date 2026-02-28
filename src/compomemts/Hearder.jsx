import HeaderInfo from "./HearderInfo";
import styles from './Header.module.css'
import styless from './AmazingServises.module.css'


export default function Header({ itemm }) {
    return (
        <header>
            <a href="#" className={styles.logo}>MoGo</a>
            <hr className={styless.header__hr} />
            <ul className={styles.header__list}>
                {
                    itemm.map(info => {
                        return (
                            <HeaderInfo
                                key={info.item}
                                item={info.item}
                                isAccent={info.isAccent}
                            />
                        )
                    })
                }
            </ul>
        </header>
    )
}