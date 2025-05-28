import {Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import {useRef} from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import { useTheme } from './context/ThemeContext';

const RotatingCube = () => {
    const meshRef = useRef();

    useFrame(() => {
        if (!meshRef.current) return
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.z += 0.01;
    })

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshNormalMaterial />
        </mesh>
    )
}

const App = () => {
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

                <RotatingCube/>

            </Canvas>
            <Header />
            <Footer />
        </div>
    )
}
export default App;
