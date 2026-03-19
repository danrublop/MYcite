import { useState, useRef, useEffect } from 'react'
import { motion, useSpring, useMotionValue, useTransform, animate } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import { TabletUI } from './components/TabletUI'
import BallCanvas from './components/Ball3D'
import './App.css'

function App() {
  const [activeApp, setActiveApp] = useState('home')
  const [focusedItem, setFocusedItem] = useState(null)
  const [isHovering3D, setIsHovering3D] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [lines, setLines] = useState([])
  const [currentLine, setCurrentLine] = useState({})
  const [penColor, setPenColor] = useState('#000000')
  const [showToast, setShowToast] = useState(false)
  const deskRef = useRef(null)
  
  // Ref to track last pen position for smoothing
  const lastPenPos = useRef(null)

  const copyEmail = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText('daniel.lopez.3@stonybrook.edu')
    setShowToast(true)
  setTimeout(() => setShowToast(false), 2000)
}


  // 1. Dynamic Pixel Coordinates for responsive dragging
  const x = useMotionValue(window.innerWidth / 2)
  const y = useMotionValue(window.innerHeight / 2)
  
  // 2. Physics & State Values
  const rotationBase = useMotionValue(0)
  const initialScale = window.innerWidth < 768 ? 0.3 : 0.65
  const scaleBase = useMotionValue(initialScale)
  const dragRot = useMotionValue(0)
  const dragScaleMult = useMotionValue(1)
  
  const combinedRotation = useTransform([rotationBase, dragRot], ([base, drag]) => base + drag)
  const combinedScale = useTransform([scaleBase, dragScaleMult], ([base, mult]) => base * mult)

  const grabOffset = useRef({ x: 0, y: 0 })

  // Initialize position on mount and handle resize
  useEffect(() => {
    const initX = window.innerWidth / 2
    const initY = window.innerHeight / 2
    x.set(initX)
    y.set(initY)
    
    const mobile = window.innerWidth < 768
    setIsMobile(mobile)
    scaleBase.set(mobile ? 0.3 : 0.65)

    const handleResize = () => {
      const mobileResize = window.innerWidth < 768
      x.set(window.innerWidth / 2)
      y.set(window.innerHeight / 2)
      setIsMobile(mobileResize)
      scaleBase.set(mobileResize ? 0.3 : 0.65)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleFocus = (item) => {
    if (focusedItem) return
    setFocusedItem(item)

    // Removed iPad auto-focus logic to keep it stationary in center
    
    if (item === 'ipad') {
      // Logic removed as per request to keep it always centered and usable
    }
  }

  const handleUnfocus = (e) => {
    if (e) e.stopPropagation()
    const item = focusedItem
    setFocusedItem(null)

    if (item === 'ipad') {
      // No longer zooming back to side
    }
  }

  const handleDragStart = (e, info) => {
    const rect = e.target.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    grabOffset.current = {
      x: (info.point.x - centerX) / (rect.width / 2),
      y: (info.point.y - centerY) / (rect.height / 2)
    }
    dragScaleMult.set(1.05)
  }

  const handleDrag = (e, info) => {
    // Gravity Dangle based on grab point
    const dangle = -Math.atan2(grabOffset.current.x, -grabOffset.current.y) * 12
    const torque = (info.velocity.x * grabOffset.current.y - info.velocity.y * grabOffset.current.x) * 0.008
    dragRot.set(dangle + torque)
  }

  const handleDragEnd = () => {
    rotationBase.set(rotationBase.get() + dragRot.get())
    dragRot.set(0)
    dragScaleMult.set(1)
  }

  const handlePenMove = (pos, registry) => {
    // 1. Guard against iPad
    const dxIPad = Math.abs(pos.x - registry.ipad.pos.x)
    const dyIPad = Math.abs(pos.y - registry.ipad.pos.y)
    if (dxIPad < registry.ipad.size.x / 2 && dyIPad < registry.ipad.size.y / 2) {
      lastPenPos.current = null
      return
    }

    // 2. Smoothing / Interpolation
    let newPoints = []
    if (lastPenPos.current) {
      const dist = Math.sqrt((pos.x - lastPenPos.current.x)**2 + (pos.y - lastPenPos.current.y)**2)
      if (dist > 0.15) {
        // Interpolate points for smoothness if moving fast
        const steps = Math.min(10, Math.floor(dist / 0.1))
        for (let i = 1; i < steps; i++) {
          const t = i / steps
          newPoints.push([
            lastPenPos.current.x + (pos.x - lastPenPos.current.x) * t,
            lastPenPos.current.y + (pos.y - lastPenPos.current.y) * t,
            0.005
          ])
        }
      }
    }
    
    newPoints.push([pos.x, pos.y, 0.005])
    lastPenPos.current = pos

    setCurrentLine(prev => ({
      points: [...(prev.points || []), ...newPoints],
      color: penColor
    }))
  }

  const lastEraserPos = useRef(null)

  const handleErase = (pos) => {
    const eraseRadius = 0.8
    
    // Sample points along the path from last pos to current pos for continuous erasing
    let samplePoints = [pos]
    if (lastEraserPos.current) {
      const dist = Math.sqrt((pos.x - lastEraserPos.current.x)**2 + (pos.y - lastEraserPos.current.y)**2)
      if (dist > 0.1) {
        const steps = Math.min(10, Math.floor(dist / 0.1))
        for (let i = 1; i < steps; i++) {
          const t = i / steps
          samplePoints.push({
            x: lastEraserPos.current.x + (pos.x - lastEraserPos.current.x) * t,
            y: lastEraserPos.current.y + (pos.y - lastEraserPos.current.y) * t
          })
        }
      }
    }
    lastEraserPos.current = pos

    setLines(prev => {
      const nextLines = []
      prev.forEach(line => {
        let currentSegment = []
        
        line.points.forEach(p => {
          const isErased = samplePoints.some(sample => {
            const dx = p[0] - sample.x
            const dy = p[1] - sample.y
            return Math.sqrt(dx*dx + dy*dy) <= eraseRadius
          })

          if (isErased) {
            // End current segment if it has enough points
            if (currentSegment.length > 1) {
              nextLines.push({ ...line, points: currentSegment })
            }
            currentSegment = []
          } else {
            currentSegment.push(p)
          }
        })

        // Push final segment if any
        if (currentSegment.length > 1) {
          nextLines.push({ ...line, points: currentSegment })
        }
      })
      return nextLines
    })
  }

  useEffect(() => {
    const handleUp = () => {
      if (currentLine.points && currentLine.points.length > 0) {
        setLines(prev => [...prev, currentLine])
        setCurrentLine({})
        lastPenPos.current = null
        lastEraserPos.current = null
      }
    }
    window.addEventListener('pointerup', handleUp)
    return () => window.removeEventListener('pointerup', handleUp)
  }, [currentLine])

  return (
    <div 
      className={`app-container focus-${focusedItem || 'none'}`}
      onClick={() => {
        if (focusedItem) setFocusedItem(null)
      }}
    >
      <header className="site-header">
        <h1>Daniel Lopez</h1>
      </header>

      <nav className="top-right-nav">
        <button className="pushable pushable-blue" onClick={copyEmail}>
          <span className="pushable-shadow"></span>
          <span className="pushable-edge"></span>
          <span className="pushable-front"><Mail size={18} /></span>
        </button>
      </nav>
      <div 
        className="desk-surface" 
        ref={deskRef}
      >
        {/* Background Drawing Layer (Below iPad) - Only on Desktop */}
        {!isMobile && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
            <BallCanvas 
              mode="ink"
              lines={lines}
              currentLine={currentLine}
              ipadX={x}
              ipadY={y}
            />
          </div>
        )}

        <motion.div 
          className="ipad-frame-container"
          style={{ 
            position: 'fixed',
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%',
            rotate: combinedRotation,
            scale: scaleBase,
            zIndex: 20, // Keep iPad consistently above desk items
            pointerEvents: isHovering3D ? 'none' : 'auto'
          }}
        >
          <div className="ipad-frame">
            <div className="ipad-screen">
              <TabletUI activeApp={activeApp} setActiveApp={setActiveApp} />
              <div className="ipad-home-button" onClick={() => setActiveApp('home')} />
            </div>
          </div>
          <motion.div 
            className="ipad-shadow"
            animate={{
              opacity: 0.18,
              scale: 1.15,
              y: 30
            }}
          />
        </motion.div>

        {/* Color Picker UI - Only show on Desktop */}
        {!isMobile && (
          <div 
            className="color-picker-container" 
            onClick={(e) => e.stopPropagation()}
          >
            {['#000000', '#ff2d55', '#34c759', '#007aff', '#ff9500', '#af52de'].map(color => (
              <button
                key={color}
                className={`color-dot ${penColor === color ? 'active' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setPenColor(color)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Foreground 3D Objects Layer (Above iPad) */}
      <BallCanvas 
        mode="objects"
        isMobile={isMobile}
        penColor={penColor} 
        ipadX={x} 
        ipadY={y} 
        onPenMove={handlePenMove}
        onErase={handleErase}
        setIsHovering3D={setIsHovering3D}
      />

      {/* Toast Notification */}
      <motion.div 
        className="toast-notification"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showToast ? 1 : 0, y: showToast ? 0 : 50 }}
        transition={{ duration: 0.3 }}
      >
        Email copied to clipboard!
      </motion.div>
    </div>
  )
}

export default App
