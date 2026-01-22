import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingParticles = () => {
    const meshRef = useRef<THREE.Points>(null!);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    });

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <points ref={meshRef}>
                <sphereGeometry args={[15, 64, 64]} />
                <pointsMaterial
                    size={0.05}
                    color="#ffffff"
                    transparent
                    opacity={0.6}
                    sizeAttenuation={true}
                />
            </points>
        </Float>
    );
};

const Canvas3D = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas style={{ background: '#000000' }}>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                <ambientLight intensity={0.5} />
                <FloatingParticles />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export default Canvas3D;
