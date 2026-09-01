import { useState } from "react";
import { motion } from "motion/react";
import { Section } from "./layout/Section";

const reasons = [
  {
    label: "Communication",
    icon: "↔",
    description:
      "You'll always know what's happening. Clear updates, honest timelines and no radio silence.",
  },
  {
    label: "Engineering",
    icon: "⌬",
    description:
      "Clean, well-structured code that's easy to maintain — not a pile of hacks that works today and breaks tomorrow.",
  },
  {
    label: "Design Sense",
    icon: "◐",
    description:
      "I care about how things look. Not just functionality — the visual details that make interfaces feel premium.",
  },
  {
    label: "Performance",
    icon: "⚡",
    description:
      "Fast websites rank better, convert better and keep users. Speed isn't a bonus — it's part of the work.",
  },
  {
    label: "Ownership",
    icon: "◎",
    description:
      "I don't just deliver code and disappear. I take responsibility for the final product and what it accomplishes.",
  },
  {
    label: "Focused Scope",
    icon: "◈",
    description:
      "I take a limited number of projects at a time. When we work together, you get my full attention.",
  },
];

export default function WhyMe() {
  const [hovered, setHovered] = useState(null);

  return (
    <Section id="why">
      <div className="container-main">
        <div className="mb-10 md:mb-16">
          <span className="section-label block mb-3 md:mb-4">
            Why Work With Me
          </span>
          <h2 className="display-sm">
            What You Can
            <br />
            Expect.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-(--border) border border-(--border)">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.label}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-[background] duration-300 bg-(--bg-primary)"
              style={{
                background:
                  hovered === i ? "var(--bg-elevated)" : "var(--bg-primary)",
              }}
            >
              {/* Accent left bar */}
              <motion.div
                animate={{ opacity: hovered === i ? 1 : 0 }}
                className="absolute top-0 left-0 w-0.5 bg-(--accent) transition-[height] duration-400"
                style={{ height: hovered === i ? "100%" : "0%" }}
              />

              <div
                className="text-2xl mb-4 sm:mb-5 transition-colors duration-250 leading-none"
                aria-hidden="true"
                style={{
                  color: hovered === i ? "var(--accent)" : "var(--text-muted)",
                }}
              >
                {reason.icon}
              </div>

              <h3 className="text-sm sm:text-base font-bold tracking-[0.04em] uppercase text-(--text-primary) mb-2.5 sm:mb-3">
                {reason.label}
              </h3>

              <p className="text-[0.85rem] sm:text-[0.875rem] leading-[1.65] text-(--text-secondary)">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
