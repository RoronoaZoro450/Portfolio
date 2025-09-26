import React from 'react';
import './Projects.css';
const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'UrbanThreads',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB],
      demoUrl: 'https://urban-thread-ten.vercel.app',
      githubUrl: 'https://github.com/RoronoaZoro450/UrbanThread',
      featured: true
    },
    {
      id: 2,
      title: 'BlockThrust',
      description: 'CryptoPlace is a web app that integrates CoinGecko API to provide real-time cryptocurrency prices and interactive charts for seamless market tracking.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['React','Node.js'],
      demoUrl: 'https://blockthrust.vercel.app',
      githubUrl: 'https://github.com/RoronoaZoro450/BLOCKTHRUST',
      featured: false
    },
    {
      id: 3,
      title: 'Law-AI',
      description: 'Law AI is a platform that simplifies legal documents, detects hidden clauses, and provides AI-powered legal assistance with real-time insights',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
      demoUrl: 'https://lawai-puce.vercel.app',
      githubUrl: 'https://github.com/RoronoaZoro450/Law-Ai',
      featured: true
    },
  ];
  
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a
                      href={project.demoUrl}
                      className="action-btn demo-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="action-btn github-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <p>Want to see more projects?</p>
          <a href="#contact" className="view-more-btn">
            Let's Work Together
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="floating-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
    </section>
  );
};

export default Projects;
