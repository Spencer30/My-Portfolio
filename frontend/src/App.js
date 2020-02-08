import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe'
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'
import TweetDeck from './components/twitter-Style/TweetDeck';

function App() {
  const [showTweet, setShowTweet] = useState(false);

  const handleShowTweets=()=>{
    setShowTweet((prev)=>{return !prev});
  }
  return (
    <div className="App">
      <Home display={showTweet} tweetClick={handleShowTweets}/>
      <TweetDeck display={showTweet}/>
      <AboutMe display={showTweet}/>
      <Skills display={showTweet}/>
      <Projects display={showTweet}/>
      <Contact display={showTweet}/>
      <Footer />
    </div>
  );
}

export default App;
