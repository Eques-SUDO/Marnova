import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PresidentMessage from './components/PresidentMessage';
import About from './components/About';
import OurHistory from './components/OurHistory';
import OurSubsidiaries from './components/OurSubsidiaries';
import OurValues from './components/OurValues';
import OurVision from './components/OurVision';
import Services from './components/Services';
import ClientPortfolio from './components/ClientPortfolio';
import OurFuture from './components/OurFuture';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll as any);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll as any);
      });
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <PresidentMessage />
      <About />
      <OurHistory />
      <OurSubsidiaries />
      <OurValues />
      <OurVision />
      <Services />
      <ClientPortfolio />
      <OurFuture />
      <Footer />
    </div>
  );
}

export default App
