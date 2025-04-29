import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Roadmap from '../components/roadmap/Roadmap';
import Team from '../components/team/Team';

const Onboarding = () => {
    return(
        <>
            <Hero />
            <About />
            <Roadmap />
            <Team />
            <Contact />
            <Footer />
        </>
    )
}

export default Onboarding;