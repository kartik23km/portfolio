import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export function Section({ children, className = '', id = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id={id}
      ref={ref}
      className={`section-spacing ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}
