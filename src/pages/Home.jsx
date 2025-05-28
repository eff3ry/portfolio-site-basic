import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import '../styles/Home.css';
import {RotatingCube} from "../components/RotatingShape.jsx";

const Home = () => {
    // Calculate aspect ratio
    const aspect = window.innerWidth / window.innerHeight;
    const d = 5; // Camera distance from origin
    const { theme } = useTheme();

    // Set background color based on the theme
    const backgroundColor = theme === 'dark' ? '#242424' : '#F0F0F0';

    return (
        <div style={{ position: 'relative' }}>
            <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    orthographic
                    camera={{
                        position: [0, 0, d],
                        zoom: 1,
                        left: -aspect * d,
                        right: aspect * d,
                        top: d,
                        bottom: -d,
                        near: 0.1,
                        far: 1000
                    }}>
                <OrbitControls enableZoom enablePan={false} enableRotate />

                <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />

                <color attach="background" args={[backgroundColor]}/>

                <RotatingCube/>

            </Canvas>
            <Header />
            <header className="home-header">
                <div className="home-content">
                    <h1 className="main-title">Jeffery Tolmie</h1>
                    <h2 className="subtitle"><a href="https://www.aut.ac.nz/">AUT</a> Student Studying Computer Science</h2>
                    <h2 className="subtitle">Major in Software Development | Minor in Artificial Intelligence</h2>
                </div>
            </header>
            <Footer />
        </div>

    )
}

export default Home;