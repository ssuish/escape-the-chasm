import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <div className={`${styles.header} mb-6`}>
                <h1 className="text-4xl font-bold text-white">About the Game</h1>
            </div>

            <div className={`${styles.content} flex flex-col lg:flex-row gap-8 items-center justify-center`} data-aos="fade-up">
                <div className={`${styles.text} text-white max-w-xl text-lg leading-relaxed`}>
                    <p className="mb-4">
                        <span>
                            <strong>Escape the Chasm</strong> is an arcade-survival platforming game,
                            where the player has to rise up the depths of the earth by completing objectives,
                            gathering resources, conquering their foes, and surviving as long as possible.
                        </span>
                    </p>

                    <p>
                        <span>
                            <strong>Escape the Chasm’s</strong> gameplay revolves around the player defeating the enemies 
                            on different platforms. There will be a variety of platforms with different lengths and heights 
                            for the player to jump on. In every level, there will be a limited number of enemies that will spawn, 
                            incrementally increasing its difficulty.
                        </span>
                    </p>
                </div>

                <div className={`${styles.video} w-full max-w-3xl`} data-aos="fade-up">
                    
                    <div className="relative w-full pt-[56.25%]"> 
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=DaS2U2niKAPoKZUH"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
