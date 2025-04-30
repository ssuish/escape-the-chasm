
import styles from './Hero.module.css';
import { FaPlay } from "react-icons/fa";

import { useOpenConnectModal } from "@0xsequence/connect";

const Hero = () => {
    const { setOpenConnectModal } = useOpenConnectModal();

    const handleConnect = () => {
        setOpenConnectModal(true); 
    }
    return (
        <div className={styles.hero}>
            <img className={styles.logo} src='../src/assets/ChasmTitle_optimized.png' alt=""></img>
            <div className={styles.subtitle}>Survival Platform Game</div>
            <div className={styles.maintitle}>Escape the Chasm</div>
            <div className={styles.tagline}>Play Bold. Earn a Legacy</div>
            <button className={styles.button} onClick={handleConnect}><FaPlay style={{height:20}}/>Play Game</button>
        </div>
    )
}

export default Hero;