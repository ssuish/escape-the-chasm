import "./App.css";
//import { useOpenConnectModal } from "@0xsequence/connect";
//import Onboarding from "./components/Onboarding";
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
