import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import FadeInSection from './components/FadeInSection';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <FadeInSection>
          <Home />
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <Skills />
        </FadeInSection>
        <FadeInSection delay={0.4}>
          <Projects />
        </FadeInSection>
        <FadeInSection delay={0.6}>
          <Certifications />
        </FadeInSection>
        <FadeInSection delay={0.8}>
          <Contact />
        </FadeInSection>
      </main>
    </>
  );
}

export default App;
