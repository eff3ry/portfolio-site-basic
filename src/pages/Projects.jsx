import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Projects.css';

const projectList = [
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
        <div style={{ position: 'relative' }}>
            <Header />
            <div className="projects-content">
                <h1 className="projects-title">Projects</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;