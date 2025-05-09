
const devTeam = [
    {
        name: "ssuish",
        role: "Project Manager, Back-end Developer, Game Developer",
        image: ""
    },
    {
        name: "BlazenAkali",
        role: "UI/UX Designer, Front-end Developer",
        image: ""
    },
    {
        name: "OneEyeWasTaken",
        role: "UI/UX Designer, Front-end Developer",
        image: ""
    },
    {
        name: "Meroulei",
        role: "2D Artist, Animator",
        image: ""
    },
    {
        name: "Kristo777",
        role: "2D Artist, Animator",
        image: ""
    },
    {
        name: "Izanami212",
        role: "Game Developer",
        image: ""
    }
];

const Team = () => {
    return (
        <>
            <div className="flex flex-col w-screen h-screen px-[50px] py-[30px] snap-center scroll-smooth bg-linear-to-b from-black to-gray">
                <div className="font-['Alexandria'] font-bold text-2xl left-0 right-0 top-0 bottom-0">
                    <h1>Development Team</h1>
                </div>

                <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-2  gap-x-4 gap-y-4 lg:gap-x-2 pt-5 w-full items-center justify-items-center">

                    {devTeam.map((member, index) => (
                        <div key={index} className="flex flex-col items-center justify-center max-w-[350px] max-h-[250px] lg:h-[250px] h-auto bg-white rounded-lg shadow-lg p-4 text-black 
                            hover:scale-105 transition-transform duration-300 ease-in-out">
                            <img src={member.image} alt={member.name} className="w-[600px] h-2/3 object-cover rounded-full" />
                            <h2 className="font-['Alexandria'] font-bold text-xl font-bold mt-4">{member.name}</h2>
                            <p className="font-['Alexandria'] font-bold text-blue-500 text-center">{member.role}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default Team;