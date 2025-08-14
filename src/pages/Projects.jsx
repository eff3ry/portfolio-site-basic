import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Projects.css';

const exampleProjects = [
    {
        title: 'Project Alpha',
        description: 'A brief description of Project Alpha.',
        link: '#'
    },
    {
        title: 'Project Beta',
        description: 'A brief description of Project Beta.',
        link: '#'
    },
    {
        title: 'Project Gamma',
        description: 'A brief description of Project Gamma.',
        link: '#'
    }
];

const Projects = () => {
    return (
        <>
            <Header />
            <div className="projects-content">
                <h1 className="projects-title">Projects</h1>
                <div className="projects-list">
                    {exampleProjects.map((project, idx) => (
                        <div key={idx} className="project-card">
                            <h2 className="project-card-title">{project.title}</h2>
                            <p className="project-card-desc">{project.description}</p>
                            <a href={project.link} className="project-card-link" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Projects;