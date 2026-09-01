import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "./layout/Section";
import { capabilities } from "../data/capabilities";

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Section id="capabilities">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-4 sm:gap-6">
          <div>
            <span className="section-label block mb-3 md:mb-4">What I Do</span>
            <h2 className="display-sm">Capabilities</h2>
          </div>
          <p className="body-lg max-w-90">
            A focused set of skills applied with care — not a list of every tool
            I've touched.
          </p>
        </div>

        {/* Capability rows */}
        <div>
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.number}
              className="capability-row py-6 sm:py-8 cursor-pointer"
              onHoverStart={() => setActiveIndex(i)}
              onHoverEnd={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              style={{
                borderTop: "1px solid",
                borderColor:
                  activeIndex === i ? "var(--accent)" : "var(--border)",
              }}
            >
              <div className="flex items-start gap-4 sm:gap-8">
                {/* Number */}
                <motion.span
                  animate={{
                    color:
                      activeIndex === i ? "var(--accent)" : "var(--text-muted)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="font-extrabold text-[0.75rem] tracking-widest min-w-8 sm:min-w-10 pt-[0.35rem]"
                >
                  {cap.number}
                </motion.span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <motion.h3
                      animate={{
                        x: activeIndex === i ? 6 : 0,
                        color:
                          activeIndex === i
                            ? "var(--text-primary)"
                            : "var(--text-primary)",
                      }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      className="font-bold tracking-[-0.02em] text-lg sm:text-xl md:text-2xl"
                    >
                      {cap.title}
                    </motion.h3>

                    <motion.div
                      animate={{
                        opacity: activeIndex === i ? 1 : 0,
                        x: activeIndex === i ? 0 : -6,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-(--accent) whitespace-nowrap shrink-0"
                      aria-hidden="true"
                    >
                      ↗
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="body-lg mt-3 max-w-140">
                          {cap.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {cap.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 sm:px-3 py-1 border border-(--border) text-[0.7rem] sm:text-[0.72rem] font-medium tracking-wider text-(--text-muted)"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Last border */}
          <div className="border-t border-(--border)" />
        </div>
      </div>
    </Section>
  );
}
