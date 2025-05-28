import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";


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

const RotatingDodecahedron = () => {
    const meshRef = useRef();

    useFrame(() => {
        if (!meshRef.current) return
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.z += 0.01;
    })

    return (
        <mesh ref={meshRef}>
            <tetrahedronGeometry />
            <meshNormalMaterial/>
        </mesh>
    )
}

export {RotatingCube , RotatingDodecahedron};