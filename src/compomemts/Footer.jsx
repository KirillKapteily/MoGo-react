import styles from "./Footeer.module.css";

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer__wrapper}><p>© 2016 MoGo free PSD template by </p> <a href="#" className={styles.footer__link}>Laaqiq</a></div>
            <div><input type="email" name="email" placeholder="Your email" className={styles.footer__input}/> <button type="button" className={styles.sub__btn}>Subscribe</button></div >  
        </footer> 
            
    )
}