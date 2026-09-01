import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useMousePosition } from "../hooks/useMousePosition";

const floatingElements = [
  { text: "AVAILABLE FOR FREELANCE", x: "72%", y: "18%", rotate: 0 },
  { text: "→ 2024", x: "8%", y: "65%", rotate: -90 },
  { text: "REACT · VITE · NODE", x: "75%", y: "80%", rotate: 0 },
];

export default function Hero() {
  const { x, y, isTouch } = useMousePosition();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };
  const lineVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      aria-label="Hero"
      className="relative flex flex-col justify-center min-h-svh overflow-hidden pt-20 pb-12"
    >
      {/* Grid overlay */}
      <div className="grid-overlay" aria-hidden="true" />

      {/* Cursor glow - desktop only */}
      {!isTouch && (
        <div
          className="cursor-glow"
          aria-hidden="true"
          style={{ left: x, top: y }}
        />
      )}

      {/* Ambient gradient */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-20%] right-[-10%] rounded-full pointer-events-none"
        style={{
          width: "min(700px, 80vw)",
          height: "min(700px, 80vw)",
          background:
            "radial-gradient(circle, rgba(200,134,26,0.05) 0%, transparent 65%)",
        }}
      />

      {/* Floating decorative labels — desktop only */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.2, delay: 1.5 + i * 0.2 }}
          className="absolute text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-(--text-muted) pointer-events-none select-none hidden lg:block"
          style={{
            left: el.x,
            top: el.y,
            transform: `rotate(${el.rotate}deg)`,
          }}
        >
          {el.text}
        </motion.div>
      ))}

      {/* Availability indicator — side column, desktop only */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute top-1/2 hidden md:flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[#4ade80] [writing-mode:vertical-rl] [text-orientation:mixed]"
        style={{
          left: "clamp(1.25rem, 5vw, 5rem)",
          transform: "rotate(180deg)",
        }}
      >
        <span className="pulse-dot" />
        Available
      </motion.div>

      {/* MAIN HERO CONTENT */}
      <div className="container-main relative z-2">
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 md:mb-10"
        >
          <span className="section-label">
            Senior Software Engineer · Freelance Developer
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-8 md:mb-12"
        >
          {["I BUILD DIGITAL", "EXPERIENCES THAT", "PEOPLE REMEMBER."].map(
            (line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  variants={lineVariants}
                  className="display block"
                  style={{
                    color: i === 2 ? "transparent" : "var(--text-primary)",
                    WebkitTextStroke:
                      i === 2 ? "1px rgba(242,240,234,0.5)" : "none",
                  }}
                >
                  {line}
                </motion.h1>
              </div>
            ),
          )}
        </motion.div>

        {/* Sub copy + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-col sm:flex-row flex-wrap items-start sm:items-end gap-8 md:gap-12"
        >
          <p className="body-lg max-w-120">
            I design and build modern websites and web applications for
            businesses, startups and individuals who care about how their
            product looks and performs.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
            >
              Start a Project <ArrowUpRight size={15} />
            </a>
            <a
              href="#capabilities"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#capabilities")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-ghost"
            >
              See What I Do
            </a>
          </div>
        </motion.div>

        {/* Bottom metadata row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 md:mt-20 pt-8 border-t border-(--border) flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
        >
          <div className="flex gap-6 md:gap-12 flex-wrap">
            {[
              { label: "Based In", value: "India" },
              { label: "Speciality", value: "Frontend · Full Stack" },
              { label: "Status", value: "● Open to Work" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-[0.65rem] tracking-[0.12em] uppercase text-(--text-muted) mb-1">
                  {item.label}
                </div>
                <div
                  className="text-[0.85rem] font-medium"
                  style={{
                    color:
                      item.label === "Status"
                        ? "#4ade80"
                        : "var(--text-secondary)",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator — desktop only */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="hidden sm:flex flex-col items-center gap-1.5 text-(--text-muted)"
          >
            <div
              className="w-px h-10"
              style={{
                background:
                  "linear-gradient(to bottom, var(--accent), transparent)",
              }}
            />
            <span className="text-[0.6rem] tracking-[0.12em] uppercase">
              Scroll
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
