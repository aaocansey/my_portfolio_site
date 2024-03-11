import { useState } from 'react'
import Home from './sections/Home.jsx'
import AboutMe from './sections/AboutMe.jsx'
import Skills from './sections/Skills.jsx'

function App() {

  return (
    <div style={{backgroundColor: '#232323'}}>
     <Home/>
     <AboutMe/>
     <Skills/>
    </div>
  )
}

export default App
