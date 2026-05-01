import { useState, useCallback } from 'react';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Stars from './components/Stars';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const onDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <Loader onDone={onDone} />}
      <div className={`app${loaded ? ' app--ready' : ''}`}>
        <div className="grain" />
        <Stars />
        <Cursor />
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}