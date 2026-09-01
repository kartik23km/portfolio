import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function PageReveal({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0: name in, 1: name out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 700);
    const t2 = setTimeout(() => onComplete(), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 1 && (
        <motion.div
          key="reveal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-9998 bg-(--bg-primary) flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="font-extrabold tracking-[0.2em] uppercase text-(--text-primary)"
            style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)" }}
          >
            KM
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
