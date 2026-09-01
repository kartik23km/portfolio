import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./layout/Section";
import { services } from "../data/services";

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <Section id="services">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <span className="section-label block mb-4">Services</span>
          <h2 className="display-sm">What Can We Build?</h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: category list */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {services.map((service, i) => (
              <button
                key={service.id}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className="block w-full text-left bg-transparent border-none cursor-pointer transition-[border-color,background] duration-300 p-4 sm:p-5"
                style={{
                  borderLeft: `2px solid ${active === i ? "var(--accent)" : "var(--border)"}`,
                  background:
                    active === i ? "rgba(200,134,26,0.04)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (active !== i)
                    e.currentTarget.style.background = "rgba(242,240,234,0.02)";
                }}
                onMouseLeave={(e) => {
                  if (active !== i)
                    e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-[0.35rem] transition-colors duration-250"
                  style={{
                    color: active === i ? "var(--accent)" : "var(--text-muted)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  className="font-bold tracking-[-0.02em] transition-colors duration-250 text-lg sm:text-xl"
                  style={{
                    color:
                      active === i
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                  }}
                >
                  {service.label}
                </div>
                <div className="text-[0.8rem] text-(--text-muted) mt-1 transition-colors duration-250">
                  {service.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border border-(--border) bg-(--bg-elevated) static lg:sticky lg:top-22.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-(--accent) mb-3 sm:mb-4">
                  {String(active + 1).padStart(2, "0")} — {current.label}
                </div>

                <h3 className="font-extrabold tracking-tight mb-4 sm:mb-5 leading-[1.15] text-xl sm:text-2xl lg:text-3xl">
                  {current.subtitle}
                </h3>

                <p className="body-lg mb-6 sm:mb-8">{current.description}</p>

                <div className="flex flex-col gap-4 mb-6 sm:mb-8">
                  <div>
                    <div className="text-[0.65rem] tracking-[0.12em] uppercase text-(--text-muted) mb-[0.35rem]">
                      Suitable For
                    </div>
                    <div className="text-[0.875rem] text-(--text-secondary)">
                      {current.audience}
                    </div>
                  </div>
                  <div>
                    <div className="text-[0.65rem] tracking-[0.12em] uppercase text-(--text-muted) mb-[0.35rem]">
                      What I Handle
                    </div>
                    <div className="text-[0.875rem] text-(--text-secondary)">
                      {current.scope}
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-centergap-1.5 text-[0.8rem] font-semibold tracking-[0.06em] text-(--accent) no-underline transition-[gap] duration-250 hover:gap-3"
                >
                  Discuss This Project <ArrowUpRight size={14} />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
