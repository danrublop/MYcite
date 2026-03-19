import { useRef, useState, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, ContactShadows, Environment, Float, Html } from '@react-three/drei'
import * as THREE from 'three'
import { Github, Linkedin, Mail, Twitter, MessageCircle } from 'lucide-react'
import { Tablet } from './Tablet'

function DraggableBall({ position: initialPos }) {
    const meshRef = useRef()
    const { size, viewport, camera } = useThree()
    const [position, setPosition] = useState(initialPos)
    const [isDragging, setIsDragging] = useState(false)
    const planeIntersectPoint = new THREE.Vector3()

    const onPointerDown = (e) => {
        e.stopPropagation()
        setIsDragging(true)
        e.target.setPointerCapture(e.pointerId)
    }

    const onPointerUp = (e) => {
        setIsDragging(false)
        e.target.releasePointerCapture(e.pointerId)
    }

    const onPointerMove = (e) => {
        if (!isDragging) return
        
        // Project mouse to plane at y=0.5 (ball height)
        const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.5)
        e.ray.intersectPlane(plane, planeIntersectPoint)
        
        if (planeIntersectPoint) {
            // Roll animation: distance moved
            const dx = planeIntersectPoint.x - position[0]
            const dz = planeIntersectPoint.z - position[2]
            
            meshRef.current.rotation.z -= dx * 1.5
            meshRef.current.rotation.x += dz * 1.5
            
            setPosition([planeIntersectPoint.x, 0.5, planeIntersectPoint.z])
        }
    }

    return (
        <mesh 
            ref={meshRef} 
            position={position}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerMove={onPointerMove}
            castShadow
        >
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial 
                color="#ff4d4d" 
                roughness={0.1} 
                metalness={0.2} 
                emissive="#330000"
                emissiveIntensity={0.2}
            />
            {/* Highlight */}
            <mesh position={[0.2, 0.2, 0.4]}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshBasicMaterial color="#ffffff" opacity={0.4} transparent />
            </mesh>
        </mesh>
    )
}

function Resume({ focusedItem, setFocusedItem }) {
    const groupRef = useRef()
    const [pos, setPos] = useState([4, 0.01, -2])
    const [isDragging, setIsDragging] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    // Simplified focus animation logic in the render loop or via state
    const targetScale = focusedItem === 'resume' ? 1.5 : 0.6
    const targetRot = focusedItem === 'resume' ? 0 : 0.1
    const targetPos = focusedItem === 'resume' ? [0.4, 0, 0] : pos // Centered when focused

    useFrame((state, delta) => {
        groupRef.current.position.lerp(new THREE.Vector3(...targetPos), 5 * delta)
        groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1).multiplyScalar(targetScale), 5 * delta)
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, focusedItem === 'resume' ? -Math.PI/2 : 0, 5 * delta)
    })

    return (
        <group 
            ref={groupRef} 
            rotation={[0, targetRot, 0]}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
            onDoubleClick={(e) => { e.stopPropagation(); setFocusedItem('resume'); }}
        >
            <mesh receiveShadow castShadow>
                <planeGeometry args={[6, 8]} />
                <meshStandardMaterial color="#ffffff" roughness={0.5} />
                <Html
                    transform
                    distanceFactor={8}
                    position={[0, 0, 0.01]}
                    occlude="blending"
                >
                    <div className="resume-paper" style={{ width: '450px', height: '600px', transform: 'scale(1)' }}>
                        <div className="resume-content">
                            <div className="resume-header">
                                <h1>Daniel Lopez</h1>
                                <p className="contact-info">Manhattan, NY</p>
                            </div>

                            <div className="resume-section">
                                <h3>Education</h3>
                                <div className="job"><strong>Stony Brook University</strong> <span>May 2028</span></div>
                                <div className="details">Bachelor of Science in Computer Science | Stony Brook, NY</div>
                                <p>Relevant Coursework: Applied Linear Algebra, Object-Oriented Programming, Classical Physics</p>
                            </div>

                            <div className="resume-section">
                                <h3>Technical Skills</h3>
                                <p><strong>Computer:</strong> Python, Java, Next.js, Three.js, CSS</p>
                                <p><strong>Tools:</strong> Cursor, Supabase, Claude Code, Stripe, Git, Ollama, React</p>
                                <p><strong>Skills:</strong> Machine Learning, AI | <strong>Certificates:</strong> NYC Comptroller Recognition</p>
                            </div>

                            <div className="resume-section">
                                <h3>Experience</h3>
                                <div className="job"><strong>Division of Information Technology</strong> <span>2026 – Present</span></div>
                                <div className="details">Client Support Technician | Stony Brook, NY</div>
                                <ul>
                                    <li>Resolve hardware/software issues for faculty/staff across help desk channels.</li>
                                    <li>Diagnose and repair university computer systems.</li>
                                </ul>
                            </div>
                        </div>
                        {focusedItem === 'resume' && <button className="close-resume" onClick={() => setFocusedItem(null)}>Close</button>}
                    </div>
                </Html>
            </mesh>
            {isHovered && !focusedItem && (
                <mesh position={[2.8, 3.8, 0.1]} rotation={[0, 0, 0]}>
                    <planeGeometry args={[1, 1]} />
                    <meshStandardMaterial color="#eee" side={THREE.DoubleSide} />
                </mesh>
            )}
        </group>
    )
}

export default function Experience({ activeApp, setActiveApp, focusedItem, setFocusedItem }) {
    const cameraRef = useRef()
    
    // Camera animation logic
    useFrame((state, delta) => {
        const ipadFocusPos = [-3, 8, 1.2]
        const defaultPos = [0, 20, 0]
        const targetPos = focusedItem === 'ipad' ? ipadFocusPos : defaultPos
        
        state.camera.position.lerp(new THREE.Vector3(...targetPos), 4 * delta)
        state.camera.lookAt(focusedItem === 'ipad' ? -3 : 0, 0, focusedItem === 'ipad' ? 1.2 : 0)
    })

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 20, 0]} fov={25} />
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
            <directionalLight 
                position={[-5, 10, 5]} 
                intensity={1} 
                castShadow 
                shadow-mapSize={[1024, 1024]}
            />

            <Environment preset="city" />

            <group 
                onDoubleClick={(e) => { e.stopPropagation(); setFocusedItem('ipad'); }}
            >
                <Tablet 
                    position={[-3, 0.2, 1]} 
                    rotation={[-Math.PI / 2, 0, -0.1]}
                    activeApp={activeApp}
                    setActiveApp={setActiveApp}
                    isFocused={focusedItem === 'ipad'}
                />
            </group>

            <DraggableBall position={[3, 0.5, 3]} />
            
            <Resume focusedItem={focusedItem} setFocusedItem={setFocusedItem} />

            <ContactShadows 
                position={[0, 0, 0]} 
                opacity={0.4} 
                scale={20} 
                blur={2} 
                far={4.5} 
            />
            
            {/* Ground Plane (invisible but receives clicks to unfocus) */}
            <mesh 
                rotation={[-Math.PI / 2, 0, 0]} 
                position={[0, -0.01, 0]}
                onDoubleClick={() => setFocusedItem(null)}
            >
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="#ffffff" opacity={0} transparent />
            </mesh>
        </>
    )
}
