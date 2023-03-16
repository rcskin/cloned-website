import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Series from "./components/Series";
import Movies from "./components/Movies";
import Shows from "./components/Shows";
import Kids from "./components/Kids";
import Devices from "./components/Devices";
import End from "./components/End";

function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <Series />
      <Movies />
      <Shows />
      <Kids />
      <Devices />
      <End />
      <a className='link' href='https://www.paramountplus.com/gb/'>https://www.paramountplus.com/gb/</a>
    </div>
  );
}

export default App;
