import styles from './Header.module.css'

export default function HeaderInfo({item, isAccent}){
    return(
    <>
    <li className={styles.header__item}> <a href="#" className={`${styles.header__link} ${isAccent ? styles.accent : styles.nonaccent}`}>{item}</a> </li>
    </>
    )
}