import React from 'react';
import Grid from './components/grid/Grid';
import Rules from './components/rules/Rules';
import About from './components/about/About';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='title-container'>
        <h1>Welcome to Conway's Game of Life!</h1>
      </div>
      <div className='grid-about-container'>
        <Grid />
        <About />
      </div>
      <div className='rules-footer-container'>
        <Rules />
        <Footer />
      </div>
    </div>
  );
}

export default App;
