import styles from './Header.module.css'
import PropTypes from 'prop-types'

export default function HeaderInfo({item, isAccent}){
    return(
    <>
    <li className={styles.header__item}> <a href="#" className={`${styles.header__link} ${isAccent ? styles.accent : styles.nonaccent}`}>{item}</a> </li>
    </>
    )
}

HeaderInfo.PropTypes={
    item: PropTypes.string.isRequired,
    isAccent: PropTypes.bool
}