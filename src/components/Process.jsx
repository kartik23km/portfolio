import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Section } from "./layout/Section";
import { processSteps } from "../data/process";

function ProcessStep({ step, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      transition={{ ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="grid grid-cols-[2.25rem_1fr] sm:grid-cols-[3rem_1fr] gap-4 sm:gap-8 pb-10 sm:pb-14 last:pb-0">
        {/* Left column: number + line */}
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 border border-(--border) flex items-center justify-center text-[0.65rem] sm:text-[0.7rem] font-bold tracking-widest text-(--accent) shrink-0 bg-(--bg-primary) relative z-1">
            {step.number}
          </div>
          {index < processSteps.length - 1 && (
            <div className="w-px flex-1 mt-2 bg-(--border)" />
          )}
        </div>

        {/* Right column: content */}
        <div className="pb-2">
          <h3 className="font-bold tracking-[-0.02em] text-(--text-primary) mb-2 sm:mb-3 pt-[0.2rem] sm:pt-[0.4rem] text-base sm:text-xl">
            {step.title}
          </h3>
          <p className="body-lg max-w-130">{step.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <Section id="process">
      <div className="container-main">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end mb-12 md:mb-20">
          <div>
            <span className="section-label block mb-3 md:mb-4">How I Work</span>
            <h2 className="display-sm">
              From Idea
              <br />
              To Launch.
            </h2>
          </div>
          <p className="body-lg max-w-100">
            A clear, collaborative process so you always know where things
            stand. No surprises. No vague timelines.
          </p>
        </div>

        {/* Process steps */}
        <div className="max-w-170">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
