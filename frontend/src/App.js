import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import GitHub from './components/GitHub';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider>
      <div className="App app-shell transition-colors duration-300">
        <div className="app-noise" aria-hidden="true" />
        <Header />
        <main className="app-main">
          <Hero />
          <About />
          <Services />
          <TechStack />
          <Projects />
          <GitHub />
          <Testimonials />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
