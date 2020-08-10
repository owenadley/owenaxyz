import React, {useRef, useEffect} from 'react';
import './App.scss';
import Portfolio from './components/Portfolio/Portfolio.js';
import Header from './components/Header.js';
import About from './components/About.js';

function App() {

  // set the document title on hook
  useEffect(() => {
    document.title = "Owen Adley";
  });

  // initialize ref to about section for auto scroll on arrow click
  const scrollRef = useRef(null);
  const scrollTo = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const executeScroll = () => scrollTo(scrollRef);

  // render SPA through three main components
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
