"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";

export function LeadForm({
  formName,
  submitLabel = "Submit",
  fields = ["name", "email", "company", "url"],
}: {
  formName: string;
  submitLabel?: string;
  fields?: Array<"name" | "email" | "company" | "url" | "phone" | "message">;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formName, ...data }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-2 border-iron-orange bg-iron-orange/5 p-6 text-iron-black">
        <p className="font-bold">Thanks — we&apos;ve got it.</p>
        <p className="mt-1 text-sm text-iron-body">
          A member of the Brand Iron team will follow up shortly.
        </p>
      </div>
    );
  }

  const labels: Record<string, string> = {
    name: "Full name",
    email: "Work email",
    company: "Company",
    url: "Website URL",
    phone: "Phone",
    message: "Anything else we should know?",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field}>
          <label
            htmlFor={field}
            className="mb-1 block text-sm font-semibold text-iron-black"
          >
            {labels[field]}
          </label>
          {field === "message" ? (
            <textarea
              id={field}
              name={field}
              rows={4}
              className="w-full border border-iron-line px-4 py-3 text-sm outline-none focus:border-iron-orange"
            />
          ) : (
            <input
              id={field}
              name={field}
              type={field === "email" ? "email" : "text"}
              required={field === "name" || field === "email"}
              className="w-full border border-iron-line px-4 py-3 text-sm outline-none focus:border-iron-orange"
            />
          )}
        </div>
      ))}
      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Submitting…" : submitLabel}
      </Button>
      {status === "error" ? (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email {""}
          <a className="underline" href="mailto:hello@brandiron.net">
            hello@brandiron.net
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
