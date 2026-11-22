"use client";

import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";

const topics = [
  "General enquiry",
  "Booking support",
  "Payment issue",
  "Partnership",
  "Media",
  "Careers",
  "Other",
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-[15px] text-[#111827] shadow-sm outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#26C165] focus:ring-2 focus:ring-[#26C165]/20";

const ContactForm = () => {
  const [submittedTo, setSubmittedTo] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const topic = String(data.get("topic") || "General enquiry");
    const message = String(data.get("message") || "").trim();

    const subject = `${topic} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Topic: ${topic}`,
      "",
      message,
    ].join("\n");

    const recipient = ["Partnership", "Media"].includes(topic)
      ? "info@cabsandmore.com"
      : "support@cabsandmore.com";

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmittedTo(recipient);
  };

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-[24px] font-bold text-[#111827] md:text-[28px]">
        Send us a message
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-[#6b7280]">
        Fill in the form and we&apos;ll open your email app with the details
        ready to send.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="text-[13px] font-semibold text-[#374151]"
            >
              Full name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Wanjiku"
              className={fieldClass}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="text-[13px] font-semibold text-[#374151]"
            >
              Email address
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jane@example.com"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-topic"
            className="text-[13px] font-semibold text-[#374151]"
          >
            What is this about?
          </label>
          <div className="relative">
            <select
              id="contact-topic"
              name="topic"
              defaultValue="General enquiry"
              className={`${fieldClass} appearance-none pr-10`}
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]"
              aria-hidden="true"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-[13px] font-semibold text-[#374151]"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Tell us how we can help..."
            className={`${fieldClass} resize-y`}
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#26C165] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1fa855]"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Send message
          </button>
          <p className="text-[13px] text-[#6b7280]">
            Opens your email app — nothing is sent automatically.
          </p>
        </div>

        {submittedTo ? (
          <p
            role="status"
            className="rounded-xl bg-[#F0FBF4] px-4 py-3 text-[14px] font-medium text-[#1f4d33]"
          >
            Your email app should open with the message pre-filled. If it
            didn&apos;t, email us directly at{" "}
            <span className="font-semibold">{submittedTo}</span>.
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default ContactForm;