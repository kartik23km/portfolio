import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./layout/Section";

const suitableFor = [
  "Business Websites",
  "Landing Pages",
  "Web Applications",
  "Website Redesigns",
  "WordPress Sites",
  "E-Commerce",
];

export default function Availability() {
  return (
    <Section id="availability">
      <div className="container-main">
        <div className="border border-(--border) bg-(--bg-elevated) relative overflow-hidden p-6 sm:p-10 lg:p-16">
          {/* Background gradient */}
          <div
            aria-hidden="true"
            className="absolute top-[-30%] right-[-10%] w-150 h-150 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(200,134,26,0.07) 0%, transparent 60%)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-1">
            {/* Left */}
            <div className="lg:col-span-7">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[rgba(74,222,128,0.25)] bg-[rgba(74,222,128,0.06)] mb-6 sm:mb-8">
                <span className="pulse-dot" />
                <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[#4ade80]">
                  Currently Available
                </span>
              </div>

              <h2 className="font-extrabold tracking-tight leading-[1.08] text-(--text-primary) mb-5 text-2xl sm:text-4xl lg:text-5xl">
                Accepting a<br />
                limited number of
                <br />
                new projects.
              </h2>

              <p className="body-lg mb-8 sm:mb-10">
                I keep my client list intentionally small so every project gets
                the focus it deserves. If you have a project in mind, now is a
                good time to reach out.
              </p>

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
            </div>

            {/* Right: suitable for list */}
            <div className="lg:col-span-5">
              <div className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-(--text-muted) mb-4 sm:mb-6">
                Suitable For
              </div>
              <div className="flex flex-col">
                {suitableFor.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 py-3.5 sm:py-4 border-b border-(--border)"
                  >
                    <span className="text-(--accent) text-[0.65rem] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-(--text-secondary)">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
