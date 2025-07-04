import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import AboutUs from './Components/AboutUs'
import SomeOutlets from './Components/SomeOutlets'
import Declaration_ from 'postcss/lib/declaration';
import Domain from './Components/Domain'
import Admission from './Components/Admission'
import Pedagogique from './Components/Pedagogique'
import Technos from './Components/Technos'
import Partner from './Components/Partner'
import Hei from './Components/Footer'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <AboutUs/>
   <SomeOutlets/>
   <Domain/>
   <Admission/>
   <Pedagogique/>
   <Technos/>
   <Partner/>
   <Footer/>
   

    
    </> 
  );
}

export default App
