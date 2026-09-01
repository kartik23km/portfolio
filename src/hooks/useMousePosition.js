import { useState, useEffect } from 'react'

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Detect touch device
    const hasTouchScreen =
      'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouch(hasTouchScreen)

    if (hasTouchScreen) return

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return { ...position, isTouch }
}
