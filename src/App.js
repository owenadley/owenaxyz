import React, {useRef, useEffect} from 'react';
import './App.scss';
import Portfolio from './components/Portfolio/Portfolio.js';
import Header from './components/Header.js';
import About from './components/About.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    // create ref to about section for scroll on button click
    this.scrollRef = React.createRef(null);
  }


  componentDidMount() {
    document.title = "Owen Adley";
  }

  scrollTo = (ref) => window.scrollTo(0, ref.current.offsetTop);
  executeScroll = () => this.scrollTo(this.scrollRef);

  render() {

    
    return (

      <div className="App">    
          <Header executeScroll={this.executeScroll}/>
          <About ref={this.scrollRef}/>
          <div className="linebreak"/>
          <Portfolio/>
      </div>

    );
  }
}

export default App;
