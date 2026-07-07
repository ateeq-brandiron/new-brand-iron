"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formName: "newsletter", ...data }),
    }).catch(() => null);
    setStatus("success");
  }

  if (status === "success") {
    return <p className="text-sm text-iron-orange">You&rsquo;re subscribed. Welcome aboard.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-xs items-center gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="Email"
        className="w-full rounded-full border border-white/40 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/60 outline-none focus:border-white"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        aria-label="Subscribe"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-iron-forest-1 hover:bg-iron-orange hover:text-white"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
