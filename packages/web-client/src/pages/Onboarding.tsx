import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Roadmap from '../components/roadmap/Roadmap';
import Team from '../components/team/Team';
import Mechanics from '../components/mechanics/Mechanics';
import Backstory from '../components/backstory/Backstory';

const Onboarding = () => {
    return(
        <>
            <Hero />
            <About />
            <Mechanics />
            <Backstory />
            <Roadmap />
            <Team />
            <Contact />
            <Footer />
        </>
    )
}

export default Onboarding;