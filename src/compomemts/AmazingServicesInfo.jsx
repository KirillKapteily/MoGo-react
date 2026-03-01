import styles from "./AmazingServises.module.css";
import PropTypes from "prop-types";

export default function AmazingServicesInfo({ img, title, descr }) {
    const fixedPath = `${import.meta.env.BASE_URL}${img}`.replace("//", "/");

    return (
        <li>
            <div className={styles.as__wrapper}>
                <div>
                    <img src={fixedPath} alt={title} className={styles.as__img} width="37" height="37" />
                </div>
                <div>
                    <h3 className={styles.card__title}>{title}</h3>
                    <p className={styles.text__list}>{descr}</p>
                </div>
            </div>


        </li>
    )
}

AmazingServicesInfo.PropTypes={
img: PropTypes.string.isRequired,
title: PropTypes.string,
descr: PropTypes.string,
}