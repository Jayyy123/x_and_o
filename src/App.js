import './App.css';

import React, { Component } from 'react'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Game from './components/Game/Game';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Hero/>
        <Game />
      </div>
    )
  }
}

export default App