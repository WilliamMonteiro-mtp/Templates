"use client";

import { Check, Clipboard, Maximize2, WrapText } from "lucide-react";
import { useState } from "react";
import { useForge } from "@/components/shell/AppShell";
import type { Locale } from "@/data/catalog";

const samples = {
  TypeScript: `type User = {
  id: string;
  name: string;
  status: "active" | "invited";
};

export async function listUsers(
  options: { limit?: number; status?: User["status"] }
): Promise<User[]> {
  const response = await fetch("/v1/users?" + new URLSearchParams({
    limit: String(options.limit ?? 20),
    status: options.status ?? "active",
  }));

  if (!response.ok) throw new Error("Request failed");
  return response.json();
}`,
  HTML: `<form class="profile-form" aria-labelledby="form-title">
  <h2 id="form-title">Create your profile</h2>
  <label for="email">Email address</label>
  <input id="email" type="email" autocomplete="email" required />
  <button type="submit">Continue</button>
</form>`,
  CSS: `.button {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  padding-inline: 16px;
  border: 1px solid var(--border);
  background: var(--accent);
  color: var(--accent-ink);
  transition: 140ms ease;
}

.button:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 3px;
}`,
  JSON: `{
  "user": {
    "id": "usr_4821",
    "name": "Alex Morgan",
    "email": "alex@example.com",
    "status": "active",
    "roles": ["developer", "editor"]
  }
}`,
  Bash: `curl --request GET \\
  --url "https://api.forge.dev/v1/users?limit=20" \\
  --header "Authorization: Bearer $FORGE_API_KEY" \\
  --header "Accept: application/json"`,
};

export function CodeBlock({ locale, initial = "TypeScript", compact = false }: { locale: Locale; initial?: keyof typeof samples; compact?: boolean }) {
  const [language, setLanguage] = useState<keyof typeof samples>(initial);
  const [wrapped, setWrapped] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useForge();
  const code = samples[language];

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast(locale === "pt" ? "Código copiado" : "Code copied");
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className={`code-block ${expanded ? "expanded" : ""} ${compact ? "compact" : ""}`}>
      <header>
        <div className="traffic"><i /><i /><i /></div>
        <select value={language} onChange={(e) => setLanguage(e.target.value as keyof typeof samples)} aria-label="Language">
          {Object.keys(samples).map((item) => <option key={item}>{item}</option>)}
        </select>
        <div className="code-actions">
          <button onClick={() => setWrapped(!wrapped)} title="Word wrap"><WrapText size={14} /></button>
          <button onClick={() => setExpanded(!expanded)} title="Expand"><Maximize2 size={14} /></button>
          <button onClick={copy}>{copied ? <Check size={14} /> : <Clipboard size={14} />}{copied ? "Copied" : "Copy"}</button>
        </div>
      </header>
      <div className={wrapped ? "code-body wrapped" : "code-body"}>
        <div className="line-numbers">{code.split("\n").map((_, i) => <span key={i}>{i + 1}</span>)}</div>
        <pre><code>{code}</code></pre>
      </div>
    </div>
  );
}
