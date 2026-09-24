"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import type { getMessages } from "@/lib/i18n";

type Props = {
  email: string;
  formEndpoint?: string;
  copy: ReturnType<typeof getMessages>["form"];
};

export function ContactForm({ email, formEndpoint, copy }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function submitFallback(formData: FormData) {
    const name = String(formData.get("name") ?? "");
    const sender = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio contact — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${sender}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!formEndpoint) return; // Se não houver endpoint, o form faz a ação nativa para o submitFallback
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const form = e.currentTarget;
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000); // Volta ao normal passado 5 seg
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form 
      action={formEndpoint ? undefined : submitFallback} 
      onSubmit={formEndpoint ? handleSubmit : undefined}
      className="contact-form"
    >
      <div className="field-row">
        <label>
          <span>{copy.name}</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder={copy.namePlaceholder}
            required
            disabled={status === "submitting"}
          />
        </label>
        <label>
          <span>{copy.email}</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder={copy.emailPlaceholder}
            required
            disabled={status === "submitting"}
          />
        </label>
      </div>
      <label>
        <span>{copy.message}</span>
        <textarea
          name="message"
          rows={6}
          placeholder={copy.messagePlaceholder}
          required
          disabled={status === "submitting"}
        />
      </label>
      <button className="button button-primary" type="submit" disabled={status === "submitting" || status === "success"}>
        {status === "submitting" ? "A enviar..." : status === "success" ? <><CheckCircle2 className="icon" /> Enviado!</> : <>{copy.submit} <Send size={17} aria-hidden="true" /></>}
      </button>
      {status === "error" && <p style={{ color: "red", marginTop: "1rem" }}>Ocorreu um erro. Por favor, tente novamente.</p>}
    </form>
  );
}
