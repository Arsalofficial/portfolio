import { useState } from 'react'
import './App.css'
import Hero from './HeroSection/Hero'
import About from './Aboutme/About'
import Project from './Project/Project'
import Contactus from './Contact/Contactus'
import Footer from './Footer/Footer'
import { InfiniteMovingCardsDemo } from './Skills/Movingdemo'

function App() {

  return (
    <>
    <Hero/>
    <About/>
    <Project/>
    <InfiniteMovingCardsDemo/>
    <Contactus/>
    <Footer/>
    </>
  )
}

export default App
