import { useRef, useState } from 'react'
import { motion } from 'motion/react'

export function MagneticButton({ children, className = '', onClick, href, as: Tag = 'button' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * 0.25
    const dy = (e.clientY - cy) * 0.25
    setPos({ x: dx, y: dy })
  }

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 })
  }

  const props = {
    ref,
    className,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    ...(href ? { href } : {}),
  }

  return (
    <motion.div
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
      style={{ display: 'inline-block' }}
    >
      {Tag === 'a' ? (
        <a {...props}>{children}</a>
      ) : (
        <button {...props}>{children}</button>
      )}
    </motion.div>
  )
}
