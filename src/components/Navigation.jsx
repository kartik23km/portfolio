import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handleMQ = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handleMQ);

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      mq.removeEventListener("change", handleMQ);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="fixed top-0 left-0 right-0 z-100"
      style={{
        transition:
          "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        background:
          scrolled || menuOpen ? "rgba(10, 10, 10, 0.92)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(242,240,234,0.08)"
          : "1px solid transparent",
      }}
    >
      {/* Main nav bar */}
      <div className="container-main flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
          className="font-extrabold text-[0.875rem] tracking-[0.08em] uppercase text-(--text-primary) no-underline transition-opacity duration-250 hover:opacity-70"
        >
          Kartik Malhotra
        </a>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav aria-label="Main navigation" className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-4.5 py-2 border border-[rgba(242,240,234,0.18)] text-(--text-primary) text-[0.78rem] font-semibold tracking-[0.04em] no-underline transition-[border-color,background] duration-250 hover:border-(--accent) hover:bg-[rgba(200,134,26,0.08)]"
            >
              Start a Conversation
              <ArrowUpRight size={13} />
            </a>
          </nav>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-transparent border-none cursor-pointer p-2 text-(--text-primary) flex items-center justify-center"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-(--border) p-8">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-(--text-primary) no-underline text-2xl font-bold tracking-[-0.02em] py-4 border-b border-(--border) block"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="btn-primary mt-8 self-start"
                >
                  Start a Conversation <ArrowUpRight size={14} />
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
