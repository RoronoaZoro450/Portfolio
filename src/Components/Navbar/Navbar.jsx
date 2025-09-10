import React, { useState, useEffect } from 'react'
import '../Navbar/Navbar.css'
import { CircleDot } from 'lucide-react';

function Navbar() {
    const [isInProjects, setIsInProjects] = useState(false);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const projectsSection = document.querySelector('#projects');
            if (projectsSection) {
                const rect = projectsSection.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Check if projects section is in viewport
                const isVisible = rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5;
                setIsInProjects(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Check initial state
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <aside className={`navbar-vertical ${isInProjects ? 'navbar-red' : ''}`}>
            <nav>
                <a href="#home" className='dot'><CircleDot size={32} /></a>
                <ul>
                    <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")}>About</a></li>
                    <li><a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>Projects</a></li>
                    <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Contact</a></li>
                    <li><a href="/resume.pdf">Resume</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Navbar;