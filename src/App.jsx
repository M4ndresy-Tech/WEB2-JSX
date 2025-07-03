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
import Pedagogique from './Components/pedagogique'

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

    
    </> 
  );
}

export default App
