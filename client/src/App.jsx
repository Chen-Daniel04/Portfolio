import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkillsBar from './components/SkillsBar';
import AdditionalProjects from './components/AdditionalProjects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <SkillsBar />
      <AdditionalProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;