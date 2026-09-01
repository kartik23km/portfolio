import { useState } from "react";
import { ArrowUpRight, CheckCircle, AlertCircle, Loader } from "lucide-react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "cda1d2ab-8def-4a73-aeb0-ee83fb466287");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult(
          "Message sent! I'll get back to you within 1–2 business days.",
        );
        event.target.reset();
      } else {
        setStatus("error");
        setResult("Something went wrong. Please try emailing me directly.");
      }
    } catch {
      setStatus("error");
      setResult("Network error. Please try again or email me directly.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="cf-name"
            className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-(--text-muted)"
          >
            Your Name
          </label>
          <input
            id="cf-name"
            type="text"
            name="name"
            required
            placeholder="Alex Johnson"
            className="w-full bg-(--bg-primary) border border-(--border) text-(--text-primary) px-4 py-3 text-[0.875rem] outline-none transition-colors duration-200 focus:border-(--accent) placeholder:text-(--text-muted)"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="cf-email"
            className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-(--text-muted)"
          >
            Email Address
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            required
            placeholder="alex@company.com"
            className="w-full bg-(--bg-primary) border border-(--border) text-(--text-primary) px-4 py-3 text-[0.875rem] outline-none transition-colors duration-200 focus:border-(--accent) placeholder:text-(--text-muted)"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="cf-subject"
          className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-(--text-muted)"
        >
          What are you working on?
        </label>
        <input
          id="cf-subject"
          type="text"
          name="subject"
          required
          placeholder="Website redesign, new web app, landing page..."
          className="w-full bg-(--bg-primary) border border-(--border) text-(--text-primary) px-4 py-3 text-[0.875rem] outline-none transition-colors duration-200 focus:border-(--accent) placeholder:text-(--text-muted)"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="cf-message"
          className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-(--text-muted)"
        >
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, your timeline, and a rough budget range..."
          className="w-full bg-(--bg-primary) border border-(--border) text-(--text-primary) px-4 py-3 text-[0.875rem] outline-none transition-colors duration-200 focus:border-(--accent) placeholder:text-(--text-muted) resize-none"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        id="cf-submit"
        disabled={status === "loading"}
        className="btn-primary justify-center w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader size={15} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowUpRight size={15} />
          </>
        )}
      </button>

      {/* Status message */}
      {result && (
        <div
          className={`flex items-start gap-3 p-4 border text-[0.85rem] leading-[1.6] ${
            status === "success"
              ? "border-green-500/30 bg-green-500/5 text-green-400"
              : "border-red-500/30 bg-red-500/5 text-red-400"
          }`}
        >
          {status === "success" ? (
            <CheckCircle size={16} className="shrink-0 mt-0.5" />
          ) : (
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
          )}
          {result}
        </div>
      )}
    </form>
  );
}
