import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.header}>
                <h1>About the Game</h1>
            </div>

            <div className={styles.content}>
                <div className={styles.text}>
                  <p><span>Escape the Chasm is an arcade-survival platforming game, 
                    where the player has to rise up the depths of the earth by completing objectives,
                    gathering resources, conquering their foes, and surviving as long as possible.</span></p><br />

                <p><span>Escape the Chasm’s gameplay revolves around the player defeating the enemies 
                    on different platforms. There will be a variety of platforms with different lengths and heights 
                    for the player to jump on. In every level, there will be a limited number of enemies that will spawn, 
                    incrementally increasing its difficulty.</span></p>
                </div>
                
                <div className={styles.video}>
                    <iframe 
                        width="600" 
                        height="315"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=DaS2U2niKAPoKZUH" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                        picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default About;