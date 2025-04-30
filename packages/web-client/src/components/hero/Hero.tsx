
import styles from './Hero.module.css';
import Login from '../account/Login';

const Hero = () => {

    return (
        <div className={styles.hero}>
            <img className={styles.logo} src='../src/assets/ChasmTitle_optimized.png' alt=""></img>
            <div className={styles.subtitle}>Survival Platform Game</div>
            <div className={styles.maintitle}>Escape the Chasm</div>
            <div className={styles.tagline}>Play Bold. Earn a Legacy</div>
            <Login />
        </div>
    )
}

export default Hero;