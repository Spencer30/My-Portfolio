import React from 'react';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe'
import Skills from './components/Skills';
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
