import { motion } from "motion/react";
import { Section } from "./layout/Section";

export default function About() {
  return (
    <Section id="about">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: heading + label */}
          <div className="lg:col-span-5 static lg:sticky lg:top-25">
            <span className="section-label block mb-4 md:mb-5">About Me</span>
            <h2 className="display-sm mb-6 md:mb-8">
              A Little
              <br />
              About Me.
            </h2>

            {/* Visual accent block */}
            <div className="w-16 md:w-20 h-0.5 bg-(--accent) mb-6 md:mb-8" />

            {/* Name card */}
            <div className="border border-(--border) p-5 md:p-6 bg-(--bg-elevated)">
              <div className="text-base font-extrabold tracking-[-0.01em] text-(--text-primary) mb-1">
                Kartik Malhotra
              </div>
              <div className="text-[0.8rem] text-(--text-muted) mb-5">
                Senior Software Engineer · Freelance Developer
              </div>

              <div className="flex flex-col gap-2.5">
                {[
                  ["Focus", "Frontend · Full Stack"],
                  ["Location", "India"],
                  ["Status", "Available for Projects"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between items-center text-[0.78rem]"
                  >
                    <span className="text-(--text-muted)">{k}</span>
                    <span className="text-(--text-secondary) font-medium">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: bio content */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-7">
            <p className="body-lg">
              I'm a software engineer who genuinely enjoys building things that
              look and feel great. My work lives at the intersection of
              engineering and design — I care equally about clean code and
              polished interfaces.
            </p>
            <p className="body-lg">
              I've worked on production applications across different
              industries, which means I understand the real constraints that
              come with building software: deadlines, performance budgets,
              maintainability requirements and the need to actually ship.
            </p>
            <p className="body-lg">
              As a freelancer, I work closely with clients to understand not
              just what they want to build, but{" "}
              <em className="text-(--text-primary) italic">why</em> — so the end
              result actually solves the right problem.
            </p>
            <p className="body-lg">
              I'm frontend-focused but comfortable throughout the stack. I tend
              to be opinionated about performance, accessibility and the small
              details that separate a mediocre interface from one that people
              enjoy using.
            </p>

            {/* Qualities list */}
            <div className="mt-4 pt-6 md:pt-8 border-t border-(--border) grid grid-cols-1 sm:grid-cols-2 gap-3.5 md:gap-4">
              {[
                "Detail-oriented",
                "Performance-conscious",
                "Clean code advocate",
                "Collaborative by nature",
                "Honest communicator",
                "Always shipping",
              ].map((q) => (
                <div
                  key={q}
                  className="flex items-center gap-2.5 text-[0.875rem] text-(--text-secondary)"
                >
                  <span className="text-(--accent) text-[0.7rem]">◆</span>
                  {q}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
