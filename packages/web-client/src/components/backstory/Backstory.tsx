import styles from './Backstory.module.css';

const Backstory = () => {
    return (
        <div className={styles.backstory}>
            <div className={styles.header}>
                <h1>Backstory</h1>
            </div>

            <div className={styles.story}>
                <p className={styles.text}>
                    <span className={styles.city}>Sunken Mesa,</span> a mysterious, remote, yet advanced city found in Veridian Deep where the only place human civilization can take
                    place. Due to the apocalypse caused by H6TV4 Epidemic, the human civilization created advanced technology inside the Veridian Deep Chasm 
                    called A69I420 or the Artifical Intelligence 6-94020 Network. People are forced to live in the chasm to avoid the catastrophe caused by the apocalypse.
                    However, people are being experimented on by scientists to discover a cure against the epidemic. The protagonist is against on the unethical experimentation
                    of people so they will try to escape the chasm by all cost. What will be their fate outside the chasm?
                </p>
             </div>
            
        </div>
    )
}

export default Backstory;