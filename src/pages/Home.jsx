import React from 'react'

import About from '../components/About'
import Skills from '../components/Skills'
import Education from '../components/Education'
// import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

export default function Home(){
  return (
    < >
      <Hero />
      <About />
      <Skills />
      <Education />
      {/* <Experience /> */}
      <Projects />
      <Contact />
    </>
  )
}
