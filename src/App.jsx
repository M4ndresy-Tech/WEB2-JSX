import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import SomeOutlets from './Components/SomeOutlets';
import Domain from './Components/Domain';
import Admission from './Components/Admission';
import Pedagogique from './Components/pedagogique';
import KeyBoardSlider from './Components/KeyBoardSlider';
import TeachersSlider from './Components/TeachersSlider';

function App() {

  return (
    <>
      <Header />
      <main>
        <KeyBoardSlider />
        <AboutUs />
        <TeachersSlider/>
        <SomeOutlets />
        <Domain />
        <Admission />
        <Pedagogique />
        
      </main>
    </>
  );
}

export default App;
