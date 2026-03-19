import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { useRef, useState, useMemo, useEffect } from 'react'
import { ContactShadows, Environment, Float, Line, OrthographicCamera } from '@react-three/drei'
import * as THREE from 'three'

// Shared physics state for collision avoidance
const registry = {
    ball: { pos: new THREE.Vector3(), radius: 0.6, isDragging: false },
    pen: { points: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()], radius: 0.35, isDragging: false },
    eraser: { points: [new THREE.Vector3(), new THREE.Vector3()], radius: 0.65, isDragging: false },
    // Updated Collision Zones for stationary iPad (Scale 0.65 mapping)
    ipad: { pos: new THREE.Vector3(0, 0, 0), size: new THREE.Vector2(9.2, 7.0) }
}

function resolveCollision(pos, radius, id) {
    const push = new THREE.Vector3()
    
    // Precise Collision with Tablet removed to allow objects to move over it
    
    // Check against Ball
    if (id !== 'ball') {
        const d = pos.distanceTo(registry.ball.pos)
        const min = radius + registry.ball.radius
        if (d < min) {
            const force = (min - d) * 3.0 // Much harder contact
            push.add(new THREE.Vector3().subVectors(pos, registry.ball.pos).normalize().multiplyScalar(force))
        }
    }
    
    // Check against Pen (3 points)
    if (id !== 'pen') {
        registry.pen.points.forEach(p => {
            const d = pos.distanceTo(p)
            const min = radius + registry.pen.radius
            if (d < min) {
                const force = (min - d) * 3.0
                push.add(new THREE.Vector3().subVectors(pos, p).normalize().multiplyScalar(force))
            }
        })
    }
    
    // Check against Eraser (2 points)
    if (id !== 'eraser') {
        registry.eraser.points.forEach(p => {
            const d = pos.distanceTo(p)
            const min = radius + registry.pen.radius
            if (d < min) {
                const force = (min - d) * 3.0
                push.add(new THREE.Vector3().subVectors(pos, p).normalize().multiplyScalar(force))
            }
        })
    }
    
    return push
}

// Physics Ball following the exact specs provided
function PhysicsBall({ setIsHovering3D }) {
    const meshRef = useRef()
    const shadowRef = useRef()
    const { viewport, size, gl, camera } = useThree()
    
    // Physics State
    const pos = useRef(new THREE.Vector2(6, -4))
    const vel = useRef(new THREE.Vector2(0, 0))
    const radius = 0.5
    const [isDragging, setIsDragging] = useState(false)
    const dragStart = useRef(new THREE.Vector2())
    const lastPos = useRef(new THREE.Vector2())
    const prevPos = useRef(new THREE.Vector2())

    // Create Checker Texture
    const checkerTexture = useMemo(() => {
        const texSize = 512
        const data = new Uint8Array(texSize * texSize * 4)
        for (let i = 0; i < texSize; i++) {
            for (let j = 0; j < texSize; j++) {
                // Larger squares for better visibility (32x32 tiles)
                const c = (((i & 64) ^ (j & 64))) ? 255 : 0
                const stride = (i * texSize + j) * 4
                // Red and White checkered pattern
                data[stride] = 255     // R
                data[stride + 1] = c   // G
                data[stride + 2] = c   // B
                data[stride + 3] = 255 // A
            }
        }
        const tex = new THREE.DataTexture(data, texSize, texSize, THREE.RGBAFormat)
        tex.needsUpdate = true
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping
        return tex
    }, [])

    const onPointerDown = (e) => {
        e.stopPropagation()
        const rect = gl.domElement.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * viewport.width - viewport.width / 2
        const y = -(((e.clientY - rect.top) / rect.height) * viewport.height - viewport.height / 2)
        
        const dist = Math.sqrt((x - pos.current.x) ** 2 + (y - pos.current.y) ** 2)
        if (dist < radius * 1.5) {
            setIsDragging(true)
            setIsHovering3D(true)
            e.target.setPointerCapture(e.pointerId)
        }
    }

    const onPointerUp = (e) => {
        if (!isDragging) return
        setIsDragging(false)
        setIsHovering3D(false)
        e.target.releasePointerCapture(e.pointerId)
    }

    const onPointerMove = (e) => {
        if (!isDragging) return
        const rect = gl.domElement.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * viewport.width - viewport.width / 2
        const y = -(((e.clientY - rect.top) / rect.height) * viewport.height - viewport.height / 2)
        pos.current.set(x, y)
    }

    // Create Directional Shadow Texture (Non-uniform)
    const shadowTexture = useMemo(() => {
        const size = 128
        const canvas = document.createElement('canvas')
        canvas.width = canvas.height = size
        const ctx = canvas.getContext('2d')
        // Off-center gradient to simulate directional falloff
        const gradient = ctx.createRadialGradient(size/2 - 5, size/2 + 5, 0, size/2, size/2, size/2)
        gradient.addColorStop(0, 'rgba(0,0,0,0.5)')
        gradient.addColorStop(0.5, 'rgba(0,0,0,0.15)')
        gradient.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, size, size)
        return new THREE.CanvasTexture(canvas)
    }, [])

    useFrame((state, dt) => {
        const frameDt = Math.min(dt, 0.1)

        if (isDragging) {
            const instantVelX = (pos.current.x - prevPos.current.x) / frameDt
            const instantVelY = (pos.current.y - prevPos.current.y) / frameDt
            vel.current.x += (instantVelX - vel.current.x) * 0.4
            vel.current.y += (instantVelY - vel.current.y) * 0.4
            prevPos.current.copy(pos.current)
        } else {
            const friction = Math.pow(0.985, frameDt * 60)
            vel.current.multiplyScalar(friction)
            pos.current.x += vel.current.x * frameDt
            pos.current.y += vel.current.y * frameDt
            
            const margin = radius + 0.1
            const limitX = (viewport.width / 2) - margin
            const limitY = (viewport.height / 2) - margin
            
            if (Math.abs(pos.current.x) > limitX) {
                pos.current.x = Math.sign(pos.current.x) * limitX
                vel.current.x *= -0.7
            }
            if (Math.abs(pos.current.y) > limitY) {
                pos.current.y = Math.sign(pos.current.y) * limitY
                vel.current.y *= -0.7
            }
        }

        // Update registry
        registry.ball.pos.set(pos.current.x, pos.current.y, radius)
        registry.ball.isDragging = isDragging

        // Separation from other items - High iteration count for solid feel
        for (let i = 0; i < 6; i++) {
            const sep = resolveCollision(new THREE.Vector3(pos.current.x, pos.current.y, radius), radius, 'ball')
            pos.current.x += sep.x
            pos.current.y += sep.y
            if (i === 0) {
                vel.current.x += sep.x * 12.0
                vel.current.y += sep.y * 12.0
            }
        }

        meshRef.current.position.set(pos.current.x, pos.current.y, radius)
        
        // Directional Shadow Physics
        const speed = vel.current.length()
        const lift = isDragging ? 0.05 : 0 // Slight lift when dragging
        
        // Shadow projects away from light at (10, 10, 10)
        const shadowOffset = 0.1 + lift * 0.5
        shadowRef.current.position.set(
            pos.current.x + 0.15, 
            pos.current.y - 0.15, 
            0.005
        )
        
        // Reactive scale and blur based on "lift" and speed
        const s = 1 + lift * 2 + speed * 0.01
        shadowRef.current.scale.set(s, s * 0.9, 1)
        shadowRef.current.material.opacity = Math.max(0.1, 0.35 - lift * 2 - speed * 0.005)
        
        // Rolling rotation
        if (speed > 0.05) {
            const axis = new THREE.Vector3(-vel.current.y, vel.current.x, 0).normalize()
            const angle = (speed * frameDt) / radius
            const deltaQ = new THREE.Quaternion().setFromAxisAngle(axis, angle)
            meshRef.current.quaternion.premultiply(deltaQ)
        }
    })

    return (
        <group onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerMove={onPointerMove}>
            {/* Directional Stretched Shadow */}
            <mesh ref={shadowRef}>
                <planeGeometry args={[radius * 4, radius * 3.5]} />
                <meshBasicMaterial map={shadowTexture} transparent depthWrite={false} />
            </mesh>
            
            {/* Premium Physical Ball */}
            <mesh ref={meshRef} castShadow rotation={[0.5, 0.5, 0]}>
                <sphereGeometry args={[radius, 64, 64]} />
                <meshPhysicalMaterial 
                    map={checkerTexture} 
                    roughness={0.1} 
                    metalness={0.4} // Balanced metalness to avoid "white/black" contrast
                    clearcoat={1}
                    envMapIntensity={1.2}
                />
            </mesh>
        </group>
    )
}

function PenModel({ tipRef, color = "#000" }) {
    return (
        <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh>
                <cylinderGeometry args={[0.08, 0.08, 4, 32]} />
                <meshPhysicalMaterial color="#111" roughness={0.25} metalness={0.3} clearcoat={1} envMapIntensity={1} />
            </mesh>
            <mesh position={[0, 0.8, 0]}>
                <cylinderGeometry args={[0.088, 0.088, 0.2, 32]} />
                <meshBasicMaterial color={color} />
            </mesh>
            <mesh position={[0.1, 1.2, 0]}>
                <boxGeometry args={[0.04, 0.8, 0.1]} />
                <meshPhysicalMaterial color="#ffffff" metalness={1} roughness={0} />
            </mesh>
            <mesh position={[0, -1.8, 0]}>
                <cylinderGeometry args={[0.08, 0.02, 0.4, 32]} />
                <meshPhysicalMaterial color="#ffffff" metalness={1} roughness={0} />
            </mesh>
            <mesh position={[0, -2, 0]} ref={tipRef}>
                <sphereGeometry args={[0.03, 16, 16]} />
                <meshBasicMaterial color={color} />
            </mesh>
        </group>
    )
}

function EraserModel({ tipRef, texture, sleeveTexture, sleeveSideTexture }) {
    const shape = useMemo(() => {
        const s = new THREE.Shape()
        // Softer Asymmetrical Side View
        // More subtle slope on both ends
        s.moveTo(-1.0, -0.2) 
        s.lineTo(1.0, -0.2)  
        s.lineTo(0.9, 0.2)   
        s.lineTo(-0.7, 0.2)  
        s.lineTo(-1.0, -0.2)
        return s
    }, [])

    const sleeveMaterialSide = useMemo(() => new THREE.MeshPhysicalMaterial({ 
        map: sleeveSideTexture, 
        roughness: 1, 
        polygonOffset: true, 
        polygonOffsetFactor: -1, 
        polygonOffsetUnits: -1 
    }), [sleeveSideTexture])

    const sleeveMaterialBranded = useMemo(() => new THREE.MeshPhysicalMaterial({ 
        map: sleeveTexture, 
        roughness: 1, 
        polygonOffset: true, 
        polygonOffsetFactor: -1, 
        polygonOffsetUnits: -1 
    }), [sleeveTexture])

    return (
        <group>
            {/* RubberBody - Extruded along Width axis */}
            <mesh castShadow position={[0, 0, -0.4]}>
                <extrudeGeometry args={[shape, { depth: 0.8, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.01 }]} />
                <meshPhysicalMaterial 
                    map={texture}
                    roughness={0.9} 
                    metalness={0.05} 
                />
            </mesh>
            {/* Wrapper - Multi-material branding on front/back faces now */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1.0, 0.42, 0.82]} />
                <primitive object={sleeveMaterialSide} attach="material-0" />
                <primitive object={sleeveMaterialSide} attach="material-1" />
                <primitive object={sleeveMaterialSide} attach="material-2" />
                <primitive object={sleeveMaterialSide} attach="material-3" />
                <primitive object={sleeveMaterialBranded} attach="material-4" />
                <primitive object={sleeveMaterialBranded} attach="material-5" />
            </mesh>
            {/* The "Contact" point - centered underneath */}
            <mesh position={[0, -0.2, 0]} ref={tipRef}>
                <sphereGeometry args={[0.12, 8, 8]} />
                <meshBasicMaterial transparent opacity={0} />
            </mesh>
        </group>
    )
}

function DraggableEraser({ initialPos, onErase, setIsHovering3D }) {
    const meshRef = useRef()
    const shadowRef = useRef()
    const tipRef = useRef()
    const { viewport, gl } = useThree()
    const [position, setPosition] = useState(new THREE.Vector3(...initialPos))
    const [isDragging, setIsDragging] = useState(false)
    
    const currentPos = useRef(new THREE.Vector3(...initialPos))
    const targetPos = useRef(new THREE.Vector3(...initialPos))
    const vel = useRef(new THREE.Vector3())

    const eraserTexture = useMemo(() => {
        const size = 256
        const canvas = document.createElement('canvas')
        canvas.width = canvas.height = size
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#ff6dae'
        ctx.fillRect(0, 0, size, size)
        // Rubber Grain
        for (let i = 0; i < 8000; i++) {
            ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.05})`
            ctx.fillRect(Math.random() * size, Math.random() * size, 1, 1)
        }
        const tex = new THREE.CanvasTexture(canvas)
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping
        return tex
    }, [])

    const sleeveTexture = useMemo(() => {
        const size = 512
        const canvas = document.createElement('canvas')
        canvas.width = canvas.height = size
        const ctx = canvas.getContext('2d')
        // Clean White base
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, size, size)
        
        // Two Crisp Blue Stripes
        ctx.fillStyle = '#0061ff'
        ctx.fillRect(0, 80, size, 50)
        ctx.fillRect(0, size - 130, size, 50)
        
        // High-End Branding
        ctx.fillStyle = '#111'
        ctx.font = 'bold 70px sans-serif'
        ctx.textAlign = 'center'
        // Vertical centering for the box face
        ctx.fillText('SOFT', size/2, size/2)
        ctx.font = '30px sans-serif'
        ctx.fillText('ERASER', size/2, size/2 + 45)
        
        const tex = new THREE.CanvasTexture(canvas)
        tex.anisotropy = 16
        return tex
    }, [])

    const sleeveSideTexture = useMemo(() => {
        const size = 512
        const canvas = document.createElement('canvas')
        canvas.width = canvas.height = size
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, size, size)
        return new THREE.CanvasTexture(canvas)
    }, [])

    const shadowTexture = useMemo(() => {
        const size = 64
        const canvas = document.createElement('canvas')
        canvas.width = canvas.height = size
        const ctx = canvas.getContext('2d')
        const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2)
        gradient.addColorStop(0, 'rgba(0,0,0,0.12)')
        gradient.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, size, size)
        return new THREE.CanvasTexture(canvas)
    }, [])

    useFrame(() => {
        const factor = isDragging ? 0.35 : 0.1
        const prev = currentPos.current.clone()
        currentPos.current.lerp(targetPos.current, factor)
        vel.current.subVectors(currentPos.current, prev) // Track velocity for physics
        
        if (isDragging) {
            // Gravity Dangle: The eraser "hangs" based on drag speed/direction
            // reactive tilt + gravity drag
            const targetRotX = 0.4 + (vel.current.y * 5.0) 
            const targetRotY = -(vel.current.x * 5.0)
            const targetRotZ = 0.5 + (vel.current.x * 2.0)
            
            meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * 0.15
            meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * 0.15
            meshRef.current.rotation.z += (targetRotZ - meshRef.current.rotation.z) * 0.15
            
            targetPos.current.z = 1.3 // Lifted for dangle room
        } else {
            // Idle: Aligned parallel to pen, right side up
            targetPos.current.z = 0.18
            const restingX = 0.15 // Tilt away from camera
            const restingZ = 0.55 // Natural desk angle
            
            meshRef.current.rotation.x += (restingX - meshRef.current.rotation.x) * 0.1
            meshRef.current.rotation.y += (0 - meshRef.current.rotation.y) * 0.1
            meshRef.current.rotation.z += (restingZ - meshRef.current.rotation.z) * 0.1
        }

        // Update registry for collision - Use two points for the oblong shape
        if (meshRef.current) {
            const eraserDir = new THREE.Vector3(1, 0, 0).applyEuler(meshRef.current.rotation).normalize()
            const center = currentPos.current.clone()
            // Radius is 0.55, Visual Width is ~3.0. Spread points to cover the ends.
            registry.eraser.points[0].copy(center).addScaledVector(eraserDir, -0.9)
            registry.eraser.points[1].copy(center).addScaledVector(eraserDir, 0.9)
            registry.eraser.isDragging = isDragging
        }

        // Apply separation - Multiple iterations
        for (let i = 0; i < 6; i++) {
            const push = resolveCollision(currentPos.current.clone(), 0.8, 'eraser')
            currentPos.current.x += push.x
            currentPos.current.y += push.y
            targetPos.current.x += push.x
            targetPos.current.y += push.y
        }

        setPosition(currentPos.current.clone())
        
        if (shadowRef.current) {
            // Dynamic Shadow Grounding
            const shadowOffset = 0.05 + currentPos.current.z * 0.15
            shadowRef.current.position.set(currentPos.current.x + shadowOffset, currentPos.current.y - shadowOffset, 0.001)
            
            // Shadow softens and expands as it lifts
            const baseOpacity = isDragging ? 0.06 : 0.1
            shadowRef.current.material.opacity = Math.max(0.02, baseOpacity - currentPos.current.z * 0.02)
            
            const s = 1.0 + currentPos.current.z * 0.6
            shadowRef.current.scale.set(s, s, 1)
        }

        if (isDragging && onErase && tipRef.current) {
            const worldTip = new THREE.Vector3()
            tipRef.current.getWorldPosition(worldTip)
            onErase(worldTip)
        }
    })

    return (
        <group 
            onPointerDown={(e) => { 
                e.stopPropagation(); 
                setIsDragging(true); 
                setIsHovering3D(true);
                e.target.setPointerCapture(e.pointerId); 
                gl.domElement.style.cursor = 'grabbing' 
            }}
            onPointerUp={(e) => { 
                setIsDragging(false); 
                setIsHovering3D(false);
                e.target.releasePointerCapture(e.pointerId); 
                gl.domElement.style.cursor = 'grab' 
            }}
            onPointerMove={(e) => {
                if (!isDragging) return
                const rect = gl.domElement.getBoundingClientRect()
                const x = ((e.clientX - rect.left) / rect.width) * viewport.width - viewport.width / 2
                const y = -(((e.clientY - rect.top) / rect.height) * viewport.height - viewport.height / 2)
                targetPos.current.set(x, y, 0.8)
            }}
            onPointerOver={() => { if(!isDragging) { gl.domElement.style.cursor = 'grab'; setIsHovering3D(true); } }}
            onPointerOut={() => { if(!isDragging) { gl.domElement.style.cursor = 'auto'; setIsHovering3D(false); } }}
        >
            <mesh ref={shadowRef}>
                <planeGeometry args={[2, 2]} />
                <meshBasicMaterial map={shadowTexture} transparent opacity={0.15} depthWrite={false} />
            </mesh>
            <group ref={meshRef} position={position} scale={1.5} rotation={[0, 0, 0]}>
                <EraserModel tipRef={tipRef} texture={eraserTexture} sleeveTexture={sleeveTexture} sleeveSideTexture={sleeveSideTexture} />
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 0.5, 1.5]} />
                    <meshBasicMaterial transparent opacity={0} />
                </mesh>
            </group>
        </group>
    )
}

function DraggablePen({ initialPos, onMove, color = "#000", setIsHovering3D }) {
    const meshRef = useRef()
    const shadowRef = useRef()
    const tipRef = useRef()
    const { viewport, gl } = useThree()
    const [position, setPosition] = useState(new THREE.Vector3(...initialPos))
    const [isDragging, setIsDragging] = useState(false)
    const [rotation, setRotation] = useState(new THREE.Euler(0.4, 0, 0.5))
    
    // Physics tracking
    const currentPos = useRef(new THREE.Vector3(...initialPos))
    const targetPos = useRef(new THREE.Vector3(...initialPos))
    const vel = useRef(new THREE.Vector3())

    // Pen Shadow Texture
    const shadowTexture = useMemo(() => {
        const size = 64
        const canvas = document.createElement('canvas')
        canvas.width = canvas.height = size
        const ctx = canvas.getContext('2d')
        const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2)
        gradient.addColorStop(0, 'rgba(0,0,0,0.15)')
        gradient.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, size, size)
        return new THREE.CanvasTexture(canvas)
    }, [])

    const onPointerDown = (e) => {
        e.stopPropagation()
        setIsDragging(true)
        setIsHovering3D(true)
        e.target.setPointerCapture(e.pointerId)
        gl.domElement.style.cursor = 'grabbing'
    }

    const onPointerUp = (e) => {
        setIsDragging(false)
        setIsHovering3D(false)
        e.target.releasePointerCapture(e.pointerId)
        gl.domElement.style.cursor = 'grab'
    }

    const onPointerMove = (e) => {
        if (!isDragging) return
        const rect = gl.domElement.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * viewport.width - viewport.width / 2
        const y = -(((e.clientY - rect.top) / rect.height) * viewport.height - viewport.height / 2)
        targetPos.current.set(x, y, 1.2)
    }

    useFrame((state, dt) => {
        // High follow speed while dragging to keep cursor "on" the pen
        const factor = isDragging ? 0.4 : 0.1
        currentPos.current.lerp(targetPos.current, factor)
        
        if (isDragging) {
            const dx = targetPos.current.x - currentPos.current.x
            const dy = targetPos.current.y - currentPos.current.y
            
            const targetRotX = 0.4 - dy * 1.5
            const targetRotY = dx * 1.5
            const targetRotZ = 0.5 + dx * 0.5
            
            meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * 0.1
            meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * 0.1
            meshRef.current.rotation.z += (targetRotZ - meshRef.current.rotation.z) * 0.1
        } else {
            targetPos.current.z = 0.2 // Closer to desk when idle
            meshRef.current.rotation.x += (0.4 - meshRef.current.rotation.x) * 0.05
            meshRef.current.rotation.z += (0.5 - meshRef.current.rotation.z) * 0.05
        }

        // Update pen collision points (Tip, Center, End)
        if (meshRef.current) {
            const penDir = new THREE.Vector3(0, 1, 0).applyEuler(meshRef.current.rotation).normalize()
            const center = currentPos.current.clone()
            registry.pen.points[0].copy(center).addScaledVector(penDir, -1.8) // Tip
            registry.pen.points[1].copy(center) // Center
            registry.pen.points[2].copy(center).addScaledVector(penDir, 1.8)  // Cap
            registry.pen.isDragging = isDragging

            // Collision separation - Higher iterations
            for (let i = 0; i < 6; i++) {
                const pushTotal = new THREE.Vector3()
                registry.pen.points.forEach(p => {
                    pushTotal.add(resolveCollision(p, 0.35, 'pen'))
                })
                currentPos.current.x += pushTotal.x
                currentPos.current.y += pushTotal.y
                targetPos.current.x += pushTotal.x
                targetPos.current.y += pushTotal.y
            }
        }

        setPosition(currentPos.current.clone())
        
        // Dynamic Pen Shadow Physics
        if (shadowRef.current) {
            const shadowOffset = 0.15 + currentPos.current.z * 0.25
            shadowRef.current.position.set(currentPos.current.x + shadowOffset, currentPos.current.y - shadowOffset, 0.001)
            
            // Blur effect: Shadow gets larger and fainter as pen lifts
            const s = 1.0 + currentPos.current.z * 0.6
            shadowRef.current.scale.set(s, s, 1)
            shadowRef.current.material.opacity = Math.max(0.02, 0.2 - currentPos.current.z * 0.1)
        }

        if (isDragging && onMove && tipRef.current) {
            // Update color in userData for the PenModel to pick up
            tipRef.current.userData.color = color
            // Get actual world position of the pen tip
            const worldTip = new THREE.Vector3()
            tipRef.current.getWorldPosition(worldTip)
            onMove(worldTip, registry)
        }
    })

    return (
        <group 
            onPointerDown={onPointerDown} 
            onPointerUp={onPointerUp} 
            onPointerMove={onPointerMove}
            onPointerOver={() => { if(!isDragging) { gl.domElement.style.cursor = 'grab'; setIsHovering3D(true); } }}
            onPointerOut={() => { if(!isDragging) { gl.domElement.style.cursor = 'auto'; setIsHovering3D(false); } }}
        >
            <mesh ref={shadowRef}>
                <planeGeometry args={[1.5, 6]} />
                <meshBasicMaterial map={shadowTexture} transparent opacity={0.1} depthWrite={false} />
            </mesh>
            <group ref={meshRef} position={position} scale={1.8}>
                <PenModel tipRef={tipRef} color={color} />
                
                {/* Large transparent Hitbox for easier dragging */}
                <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 5]} />
                    <meshBasicMaterial transparent opacity={0} />
                </mesh>
            </group>
        </group>
    )
}

export default function BallCanvas({ 
    mode = "objects",
    penColor = "#000", 
    ipadX, 
    ipadY, 
    lines = [], 
    currentLine = {}, 
    onPenMove, 
    onErase,
    setIsHovering3D = () => {},
    isMobile = false
}) {
    // Sync physical boundaries with DOM positions in real-time
    useEffect(() => {
        const syncPhysics = () => {
            if (ipadX && ipadY) {
                // Map pixel coordinates to world coordinates (Center = 0, 1 unit = 80px)
                registry.ipad.pos.x = (ipadX.get() - window.innerWidth / 2) / 80
                registry.ipad.pos.y = -(ipadY.get() - window.innerHeight / 2) / 80
            }
        }

        // Initial sync
        syncPhysics()

        // Sync on Every Motion Change
        const unsubs = [
            ipadX.on('change', syncPhysics),
            ipadY.on('change', syncPhysics)
        ]

        return () => unsubs.forEach(unsub => unsub())
    }, [ipadX, ipadY])

    return (
        <div className="fullscreen-ball-layer" style={{ zIndex: mode === "objects" ? 1000 : 10 }}>
            <Canvas 
                shadows 
                gl={{ antialias: true, alpha: true }}
                eventSource={document.body}
                eventPrefix="client"
                onPointerMissed={() => {}}
                style={{ background: 'transparent', pointerEvents: 'none' }}
            >
                {/* 1 world unit = 80px mapping */}
                <OrthographicCamera 
                    makeDefault 
                    position={[0, 0, 100]} 
                    zoom={isMobile ? 60 : 80} 
                    near={0.1} 
                    far={1000} 
                />
                
                {/* Ultra-High-End Studio Lighting Rig */}
                <Environment preset="studio" />
                <ambientLight intensity={0.2} />
                
                {/* Master Top-Down Spotlight for 3D Pop */}
                <spotLight 
                    position={[0, 15, 10]} 
                    angle={0.25} 
                    penumbra={1} 
                    intensity={8} 
                    color="#ffffff" 
                    castShadow
                />
                
                {/* Secondary Key Light */}
                <directionalLight 
                    position={[10, 10, 5]} 
                    intensity={2.5} 
                    color="#ffffff"
                />
                
                {/* Cinematic Fill (Deep Blue) */}
                <pointLight position={[-15, 0, 15]} intensity={3} color="#0061ff" />
                
                {/* Warm Accent Rim */}
                <pointLight position={[15, -5, 20]} intensity={1.5} color="#ffccaa" />
                
                {/* Grounding Floor Light */}
                <rectAreaLight width={50} height={50} intensity={1} position={[0, -10, 5]} rotation={[-Math.PI / 2, 0, 0]} />
                
                {mode === "ink" && (
                    <>
                        {lines.map((line, i) => (
                            <Line key={i} points={line.points} color={line.color} lineWidth={4} />
                        ))}
                        {currentLine.points && currentLine.points.length > 1 && (
                            <Line points={currentLine.points} color={currentLine.color} lineWidth={4} />
                        )}
                    </>
                )}

                {mode === "objects" && (
                    <>
                        <PhysicsBall setIsHovering3D={setIsHovering3D} />
                        {!isMobile && (
                            <>
                                <DraggablePen initialPos={[-8, -1, 1]} onMove={onPenMove} color={penColor} setIsHovering3D={setIsHovering3D} />
                                <DraggableEraser initialPos={[4.2, -1.5, 1]} onErase={onErase} setIsHovering3D={setIsHovering3D} />
                            </>
                        )}
                    </>
                )}
            </Canvas>
        </div>
    )
}
