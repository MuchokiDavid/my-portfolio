import React from 'react'
import Hero from './components/Hero'
import NavBars from './components/NavBars'
import Footer from './components/Footer'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import About from './components/About'

export default function App() {
  return (
    <div>
      <NavBars/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
