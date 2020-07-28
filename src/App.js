import React, {useRef} from 'react';
import './App.scss';
import SocialIcon from './components/SocialIcon.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Header from './components/Header.js';
import About from './components/About.js';

function App() {

  const scrollTo = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const scrollRef = useRef(null);
  const executeScroll = () => scrollTo(scrollRef);

  return (

    <div className="App">

      <Header executeScroll={executeScroll}/>
      <About ref={scrollRef}/>
      <div className="linebreak"/>
      <Portfolio/>

    </div>

  );
}

export default App;
