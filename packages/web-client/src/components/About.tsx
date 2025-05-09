const About = () => {
    return (
        <div className="bg-[url(/src/assets/level_bg_cave.png)] bg-cover bg-center bg-no-repeat">
            <h1 className="font-['Alexandria'] font-bold text-5xl text-white p-10">About the Game</h1>
            <div className='flex flex-col gap-8 p-10'>
                <div className="font-['Alexandria'] font-bold flex flex-col lg:flex-row gap-8 py-5 justify-center" data-aos="fade-up">
                    <div className="text-white max-w-xl text-lg leading-relaxed">
                        <p className="mb-4">Escape the Chasm is an arcade-survival platforming game,
                            where the player has to rise up the depths of the earth by completing objectives,
                            gathering resources, conquering their foes, and surviving as long as possible.
                        </p>
                        <p>Escape the Chasm’s gameplay revolves around the player defeating the enemies 
                            on different platforms. There will be a variety of platforms with different lengths and heights 
                            for the player to jump on. In every level, there will be a limited number of enemies that will spawn, 
                            incrementally increasing its difficulty.
                        </p>
                    </div>

                    <div className="w-full max-w-3xl p-5" data-aos="fade-up">
                        
                        <div className="relative w-full pt-[56.25%] "> 
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=DaS2U2niKAPoKZUH"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default About;
