
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
import Technos from './Components/Technos';
import Partner from './Components/Partner';
import Hei from './Components/Footer';
import Footer from './Components/Footer';
import Declaration_ from 'postcss/lib/declaration';


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
        <Technos/>
        <Partner/>
      </main>
      <Footer/>
    </>

  );
}

export default App;
