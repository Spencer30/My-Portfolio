import React from 'react';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe'
import Skills from './components/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
