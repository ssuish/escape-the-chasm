import styles from './Roadmap.module.css';

const Roadmap = () => {
    return (
        <div className={styles.roadmap}>
            <div className={styles.header}>
                <h1>Development Roadmap</h1>

                <div className={styles.line}>
                    <div className={styles.roadline}></div>

                    <div className={styles.quartercircles}>
                        <div className={styles.circle}><span><h1>Q1</h1></span></div>
                        <div className={styles.circle}><span><h1>Q2</h1></span></div>
                        <div className={styles.circle}><span><h1>Q3</h1></span></div>
                        <div className={styles.circle}><span><h1>Q4</h1></span></div>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.card1}>
                            <header>Pre Launch & Soft Launch</header>
                            <span>
                                <p>Foundation Phase - Establishing the core mechanics and infastructure.</p>
                                    <li>Develop game prototype with basic mechanics</li>
                                    <li>Implement wallet connection functionality</li>
                                    <li>Design character and environment assets</li>
                                    <li>Setup smart contract development environement</li>
                            </span>
                        </div>
                        <div className={styles.card2}>
                        <header>Launch</header>
                            <span>
                                <p>Initial Game Release - Launch core game levels with full tokenomics integration.</p>
                                    <li>Buy power-ups and boposters with crypto</li>
                                    <li>Customize weapon upgrades with stars</li>
                                    <li>Trade satrs and NFT badges in a marketplace</li>
                                    <li>Access unique new levels</li>
                            </span>
                        </div>
                        <div className={styles.card3}>
                        <header>Expansion</header>
                            <span>
                                <p>Social Features & Leaderboards - Roll out comptetive features and exclusive content.</p>
                                    <li>Compete on leaderboards with NFT badges and stars</li>
                                    <li>Unlock exclusive levels with special badges</li>
                                    <li>Earn royalties from NFTs</li>
                                    <li>Enjooy trading cooldowns for a fair market</li>
                            </span>
                        </div>
                        <div className={styles.card4}>
                        <header>Sustained Growth</header>
                            <span>
                                <p>New NFT Series & Seasonal Events - Drive engagement while maintaining long-term interest.</p>
                                    <li>Launch limited-edition NFT badges for events and trournaments</li>
                                    <li>Monitor and adjust in-game economic metrics for stability</li>
                                    <li>Expand marketplace based on community feedback</li>
                                    <li>Integrate with external platforms for broader visibility</li>
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Roadmap;