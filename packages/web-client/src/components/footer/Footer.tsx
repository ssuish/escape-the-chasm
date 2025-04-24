import styles from './Footer.module.css';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img className={styles.logo} src='../src/assets/TestLogo.png'></img>
            <p className={styles.copyright}><FaRegCopyright /><span>Escapism. All Right Reserved</span></p>
        </div>
    )
}

export default Footer;