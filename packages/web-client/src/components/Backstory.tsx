const Backstory = () => {
    return (
        <div className="bg-[url(/src/assets/level_select.png)] bg-cover bg-center bg-no-repeat w-full py-16">
            <div className="flex flex-col max-w-6xl mx-auto">
                <h1 className="font-['Alexandria'] font-bold text-5xl text-white p-10 text-center">Backstory</h1>

                <div className="flex flex-col mb-10">
                    <div className="w-lg lg:w-4xl md:w-2xl bg-linear-to-b from-black to-transparent px-10 py-5 mx-auto h-[600px]">
                        <p className="font-['Alexandria'] text-left text-lg text-xl/9 md:text-2xl/12" data-aos="fade-up">
                            <span className="text-5xl">Sunken Mesa,</span> A mysterious, remote, yet advanced city found in Veridian Deep where the only place human civilization can take
                            place. Due to the apocalypse caused by H6TV4 Epidemic, the human civilization created advanced technology inside the Veridian Deep Chasm 
                            called A69I420 or the Artifical Intelligence 6-94020 Network. People are forced to live in the chasm to avoid the catastrophe caused by the apocalypse.
                            However, people are being experimented on by scientists to discover a cure against the epidemic. The protagonist is against on the unethical experimentation
                            of people so they will try to escape the chasm by all cost. What will be their fate outside the chasm?
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Backstory;