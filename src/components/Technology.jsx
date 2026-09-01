import { useState } from "react";
import { Section } from "./layout/Section";
import { technologies } from "../data/technologies";

function TechTag({ tech }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="tech-tag relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
    >
      <span
        className="font-bold tracking-tight transition-colors duration-250 cursor-default select-none text-xl sm:text-3xl lg:text-4xl"
        style={{
          color: hovered ? "var(--text-primary)" : "var(--text-muted)",
        }}
      >
        {tech.name}
      </span>

      {/* Tooltip */}
      <div
        aria-hidden="true"
        className="absolute bottom-[calc(100%+10px)] left-1/2 bg-(--bg-elevated) border border-(--border)px-3.5 py-1.5 text-[0.75rem] whitespace-nowrap text-(--text-secondary) pointer-events-none transition-[opacity,transform] duration-200 z-10 hidden sm:block"
        style={{
          transform: `translateX(-50%) translateY(${hovered ? 0 : "6px"})`,
          opacity: hovered ? 1 : 0,
        }}
      >
        {tech.description}
      </div>
    </div>
  );
}

export default function Technology() {
  return (
    <Section id="technology">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-4 sm:gap-6">
          <div>
            <span className="section-label block mb-3 md:mb-4">
              Technical Depth
            </span>
            <h2 className="display-sm">
              Built With Modern
              <br />
              Technology.
            </h2>
          </div>
          <p className="body-sm max-w-70">
            Hover or tap any technology to see how I use it.
          </p>
        </div>

        {/* Tags flow */}
        <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4">
          {technologies.map((tech, i) => (
            <span
              key={tech.name}
              className="flex items-baseline gap-4 sm:gap-8"
            >
              <TechTag tech={tech} />
              {i < technologies.length - 1 && (
                <span
                  aria-hidden="true"
                  className="w-1 h-1 rounded-full bg-(--border) inline-block mb-1 shrink-0"
                />
              )}
            </span>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-(--border) flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="body-sm">
            Plus: PostgreSQL · MongoDB · Express · Next.js · Figma · Webpack ·
            CSS Animations
          </p>
          <span className="text-[0.65rem] tracking-[0.12em] uppercase text-(--text-muted) shrink-0">
            Always learning
          </span>
        </div>
      </div>
    </Section>
  );
}
