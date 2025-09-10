import React from 'react'
import '../About/About.css'
function About() {
  return (
    <section id="about" className="about">
    <div className="decorative-circle-1"></div>
    <div className="decorative-circle-2"></div>
    <div className="decorative-triangle"></div>
    <div className="code-icon"></div>
    
    <h2>About Me</h2>
    <p>
      Hi, I'm <span className="highlight">Nirbhay Shegale</span>, a web developer passionate about building responsive and clean web apps using React and Node.js.
    </p>
    <p>
      I have experience creating dynamic applications including cryptocurrency dashboards and travel booking systems. I love crafting clean UI/UX and exploring new technologies.
    </p>
    <h3>Skills</h3>
    <ul className="skills">
      <li>React</li>
      <li>Node.js</li>
      <li>JavaScript</li>
      <li>HTML & CSS</li>
      <li>MongoDB</li>
    </ul>
  </section>
  )
}

export default About