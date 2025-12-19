import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to section
  const scrollToSection = (sectionId : any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
    
  };

  return (
    <div className="app-container">
      <Navbar activeSection={activeSection } scrollToSection={scrollToSection} />
      
      {/* All sections on one page */}
      <section id="home">
        <Home />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="pricing">
        <Pricing />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
     < ScrollToTop />
    </div>
  );
}

export default App;