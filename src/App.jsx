import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import SomeOutlets from './Components/SomeOutlets';
import Domain from './Components/Domain';
import Admission from './Components/Admission';
import Pedagogique from './Components/pedagogique';
import KeyBoardSlider from './Components/KeyBoardSlider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <KeyBoardSlider />
        <AboutUs />
        <SomeOutlets />
        <Domain />
        <Admission />
        <Pedagogique />
      </main>
    </>
  );
}

export default App;
