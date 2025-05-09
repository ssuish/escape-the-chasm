import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/footer/Footer';
import Roadmap from '../components/roadmap/Roadmap';
import Team from '../components/team/Team';
import Backstory from '../components/backstory/Backstory';

const Onboarding = () => {
    return(
        <>
            <Hero />
            <About />
            <Backstory />
            <Roadmap />
            <Team />
            <Footer />
        </>
    )
}

export default Onboarding;