import Login from './account/Login';
import Logo from '../assets/EscapeTheChasm.png';

const Hero = () => {

    return (
        <div className='bg-[url(/src/assets/bg.png)] bg-cover bg-no-repeat bg-center w-screen h-screen py-10'>
            <div className="flex flex-col items-center justify-center text-white pb-15">
                <img src={Logo} alt="/" className='my-5 scale-75 md:scale-100'/>
                <h2 className="font-['Alexandria'] font-bold text-[#4379D5] text-2xl py-3 md:text-3xl">Survival Platform Game</h2>
                <h1 className="font-['Alexandria'] font-bold pb-3 text-5xl md:text-6xl">Escape the Chasm</h1>
                <h2 className="font-['Alexandria'] font-bold pb-5 text-xl md:text-2xl">Play Bold. Earn a Legacy</h2>
                <Login />
            </div>
        </div>
        
    )
}

export default Hero;