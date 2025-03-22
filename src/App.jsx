import React from 'react'
import Hero from './components/Hero'
import NavBars from './components/utils/NavBars'
import Footer from './components/utils/Footer'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Education from './components/Education'

export default function App() {
  return (
    <div>
      <NavBars/>
      <Hero/>
      <Education/>
      <Skills/>
      <Work/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
