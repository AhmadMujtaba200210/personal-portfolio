import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Home  from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Quote from './components/quote/Quote';
import Services from './components/services/Services';
function App() {
  return (
  <>
  
    <Header/>

    <main className='main'>
        <Quote/>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
    </main>
    
  </>
  );
}

export default App;
