import { useState, useEffect, useRef } from 'react'

export function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref?.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const updateProgress = () => {
          const rect = el.getBoundingClientRect()
          const windowH = window.innerHeight
          const total = rect.height + windowH
          const visible = windowH - rect.top
          const p = Math.min(Math.max(visible / total, 0), 1)
          setProgress(p)
        }
        window.addEventListener('scroll', updateProgress, { passive: true })
        updateProgress()
        return () => window.removeEventListener('scroll', updateProgress)
      },
      { threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return progress
}
