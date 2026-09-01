import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail } from "lucide-react";
import ContactForm from "./ContactForm";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };
  const lineVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden border-t border-(--border) section-spacing"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-225 h-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(200,134,26,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container-main relative z-1">
        {/* Big editorial statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10 md:mb-16"
        >
          <span className="section-label block mb-6 md:mb-8">
            Let's Work Together
          </span>

          {[
            { text: "HAVE AN IDEA?", stroke: false },
            { text: "LET'S BUILD IT.", stroke: true },
          ].map(({ text, stroke }, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2
                variants={lineVariants}
                className="display block"
                style={{
                  color: stroke ? "transparent" : "var(--text-primary)",
                  WebkitTextStroke: stroke
                    ? "1px rgba(242,240,234,0.4)"
                    : "none",
                }}
              >
                {text}
              </motion.h2>
            </div>
          ))}
        </motion.div>

        {/* Two-column content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          {/* Left: description + contact info */}
          <div className="lg:col-span-5">
            <p className="body-lg mb-8 md:mb-10">
              Tell me what you're working on and I'll get back to you. No
              commitments required — just a conversation.
            </p>

            {/* Quick contact details */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              <div className="flex items-center gap-3 text-[0.8rem] text-(--text-muted)">
                <span className="text-(--accent)">◆</span>
                Based in India · Available globally
              </div>
              <div className="flex items-center gap-3 text-[0.8rem] text-(--text-muted)">
                <span className="text-(--accent)">◆</span>
                Response within 1–2 business days
              </div>
              <div className="flex items-center gap-3 text-[0.8rem] text-(--text-muted)">
                <span className="text-(--accent)">◆</span>
                Free initial consultation
              </div>
            </div>

            {/* Direct email fallback */}
            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-(--border)">
              <div className="text-[0.65rem] tracking-[0.12em] uppercase text-(--text-muted) mb-2">
                Or reach me directly
              </div>
              <a
                href="mailto:kartik.malhotra.dev@gmail.com"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-(--accent) no-underline transition-opacity duration-200 hover:opacity-75 break-all"
              >
                <Mail size={15} className="shrink-0" />
                kartik.malhotra.dev@gmail.com
              </a>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="lg:col-span-7 bg-(--bg-elevated) border border-(--border) p-5 sm:p-8">
            <div className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-(--text-muted) mb-5 sm:mb-6">
              Send a Message
            </div>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
