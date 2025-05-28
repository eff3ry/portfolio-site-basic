import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import {RotatingDodecahedron} from "../components/RotatingShape.jsx";



const Projects = () => {
  // Calculate aspect ratio
  const aspect = window.innerWidth / window.innerHeight;
  const d = 5; // Camera distance from origin
  const { theme } = useTheme();

  // Set background color based on theme
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

          <RotatingDodecahedron/>
      </Canvas>
      <Header />
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000, pointerEvents: 'none' }}>
        <h1 style={{ color: 'var(--font-color)', fontSize: '3rem', textAlign: 'center', pointerEvents: 'auto' }}>Projects</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;