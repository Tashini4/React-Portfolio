import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Services from './pages/Service';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="service" className="section">
          <Services />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
         <section id="footer" className="section">
          <Footer />
        </section>
      </main>

    </div>
  );
};

export default App;