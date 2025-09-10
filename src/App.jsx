import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Project from './Components/Project/Projects'
import Hero from './Components/Hero/Hero'
function App() {
  
  return (
    <>
    <div className="min-h-screen text-slate-100 bg-slate-900">
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App