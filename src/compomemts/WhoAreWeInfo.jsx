import styles from "./WhoAreWe.module.css"
import PropTypes from "prop-types"

export default function WhoAreWeInfo({img, title, descr}) {
    const fixedPath = `${import.meta.env.BASE_URL}${img}`.replace("//", "/")
    return(
        <li className={styles.who__are__we__item}>
            <img src={fixedPath} alt={title} />
            <h3 className={styles.list__title}>{title}</h3>
            <p className={styles.list__desc}>{descr}</p>
        </li>
    )
}


WhoAreWeInfo.PropTypes={
img: PropTypes.string.isRequired,
title: PropTypes.string,
descr: PropTypes.string,
}