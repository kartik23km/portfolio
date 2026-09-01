import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "LinkedIn", href: "#" /* placeholder */ },
  { label: "GitHub", href: "#" /* placeholder */ },
  { label: "Email", href: "mailto:kartik.malhotra.dev@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-(--border) py-10 md:py-12">
      <div className="container-main flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
        {/* Left: name + title */}
        <div>
          <div className="font-extrabold text-[0.875rem] tracking-[0.08em] uppercase text-(--text-primary) mb-1">
            Kartik Malhotra
          </div>
          <div className="text-[0.78rem] text-(--text-muted)">
            Senior Software Engineer · Freelance Developer
          </div>
        </div>

        {/* Center: copyright */}
        <div className="text-[0.75rem] text-(--text-muted)">
          © {new Date().getFullYear()} — All rights reserved
        </div>

        {/* Right: links */}
        <nav
          aria-label="Social links"
          className="flex gap-5 sm:gap-6 flex-wrap"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="inline-flex items-center gap-1 text-[0.8rem] font-medium text-(--text-muted) no-underline transition-colors duration-250 hover:text-(--text-primary)"
            >
              {link.label}
              <ArrowUpRight size={11} />
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom strip */}
      <div className="container-main mt-8 pt-6 border-t border-(--border)">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[0.7rem] text-(--text-muted) tracking-[0.06em]">
            Designed &amp; built with care.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-transparent border border-(--border) text-(--text-muted) cursor-pointer px-3.5 py-1.5 text-[0.72rem] tracking-[0.08em] uppercase transition-[border-color,color] duration-250 hover:border-(--accent) hover:text-(--text-primary)"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
