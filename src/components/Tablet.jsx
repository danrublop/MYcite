import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Html, Float, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { TabletUI } from './TabletUI'

export const Tablet = ({ position, rotation, activeApp, setActiveApp, isFocused }) => {
    const meshRef = useRef()

    // Tablet dimensions
    const width = 11
    const height = 7.7
    const radius = 0.6 

    // Screen dimensions (94% coverage)
    const screenWidth = width * 0.94
    const screenHeight = height * 0.94

    return (
        <group position={position} rotation={rotation}>
            {/* Main Body */}
            <RoundedBox 
                ref={meshRef}
                args={[width, height, 0.4]} 
                radius={radius} 
                smoothness={4}
                castShadow
            >
                <meshStandardMaterial 
                    color="#c7c7cc" 
                    metalness={0.8} 
                    roughness={0.2} 
                />
            </RoundedBox>

            {/* Screen Glass */}
            <mesh position={[0, 0, 0.21]}>
                <planeGeometry args={[screenWidth, screenHeight]} />
                <meshStandardMaterial 
                    color="#000000" 
                    roughness={0.1}
                    metalness={0.2}
                />
                
                <Html
                    transform
                    scale={screenWidth / 800} // Map 800px width to screen
                    distanceFactor={10}
                    position={[0, 0, 0.01]}
                    occlude="blending"
                >
                    <div style={{ 
                        width: '800px', 
                        height: '600px',
                        borderRadius: '32px',
                        overflow: 'hidden',
                        background: '#000'
                    }}>
                        <TabletUI activeApp={activeApp} setActiveApp={setActiveApp} />
                    </div>
                </Html>
            </mesh>
        </group>
    )
}
