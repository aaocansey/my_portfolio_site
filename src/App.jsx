import { useState } from 'react'
import Home from './sections/Home.jsx'
import AboutMe from './sections/AboutMe.jsx'
import Skills from './sections/Skills.jsx'
import Portfolio from './sections/Porfolio.jsx'
import Contact from './sections/Contact.jsx'

function App() {

  return (
    <div style={{backgroundColor: '#232323'}}>
     <Home/>
     <AboutMe/>
     <Skills/>
     <Portfolio/>
     <Contact/>
    </div>
  )
}

export default App
