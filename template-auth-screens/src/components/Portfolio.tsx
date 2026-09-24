"use client";

import { ArrowRight, Hexagon } from "lucide-react";
import { useState } from "react";

export function Portfolio() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mock login
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-[var(--void)] text-[var(--text)] font-sans flex flex-col md:flex-row">
      
      {/* Left Side: Auth Form */}
      <div className="w-full md:w-1/2 flex flex-col min-h-screen relative">
        
        {/* Header */}
        <header className="p-6 md:p-10 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 bg-[var(--gold-500)] text-white rounded-[var(--radius-sm)] flex items-center justify-center">
              WM
            </div>
            Template Auth
          </div>
        </header>

        {/* Form Container */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-xl mx-auto w-full pb-20">
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 tracking-tight">Bem-vindo de volta</h1>
            <p className="text-[var(--text-secondary)]">Insira os seus dados para aceder à plataforma.</p>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 border border-[var(--border)] rounded-[var(--radius-sm)] py-2.5 text-sm font-bold hover:bg-[var(--card-hover)] transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> GitHub
            </button>
            <button className="flex items-center justify-center gap-2 border border-[var(--border)] rounded-[var(--radius-sm)] py-2.5 text-sm font-bold hover:bg-[var(--card-hover)] transition-colors">
              <Hexagon className="w-4 h-4" /> Google
            </button>
          </div>

          <div className="relative flex items-center mb-6">
            <div className="flex-grow border-t border-[var(--border)]"></div>
            <span className="flex-shrink-0 mx-4 text-[var(--text-secondary)] text-xs uppercase font-medium">
              Or continue with email
            </span>
            <div className="flex-grow border-t border-[var(--border)]"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Email address</label>
              <input 
                type="email" 
                required
                className="w-full bg-[var(--void)] border border-[var(--border)] rounded-[var(--radius-sm)] px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--gold-500)] transition-colors shadow-sm"
                placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Password</label>
                <a href="#" className="text-sm font-medium text-[var(--gold-600)] hover:text-[var(--gold-500)]">Forgot password?</a>
              </div>
              <input 
                type="password" 
                required
                className="w-full bg-[var(--void)] border border-[var(--border)] rounded-[var(--radius-sm)] px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--gold-500)] transition-colors shadow-sm"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[var(--gold-500)] text-white rounded-[var(--radius-sm)] py-2.5 text-sm font-bold hover:bg-[var(--gold-600)] transition-colors mt-2"
            >
              Sign In
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-[var(--text-secondary)]">
            Não tens conta? <a href="#" className="font-medium text-[var(--gold-400)] hover:underline">Regista-te grátis</a>
          </p>
        </div>

        {/* Author Badge (Bottom Left) */}
        <div className="absolute bottom-6 left-6 md:left-10 z-20">
          <a href="https://wmonteiro.pt" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[var(--card)] p-1.5 pr-4 rounded-full border border-[var(--border)] hover:border-[var(--gold-400)] transition-colors w-max group shadow-lg">
            <img src="/perfil2.png" alt="William Monteiro" className="w-6 h-6 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-[var(--text-secondary)] leading-none mb-0.5">Template created by</span>
              <span className="text-xs text-[var(--text)] group-hover:text-[var(--gold-400)] font-medium leading-none">William Monteiro</span>
            </div>
          </a>
        </div>
      </div>

      {/* Right Side: Promo Image / Testimonial (Hidden on mobile) */}
      <div className="hidden md:flex md:w-1/2 bg-[var(--elevated)] border-l border-[var(--border)] p-12 lg:p-24 flex-col justify-between relative overflow-hidden">
        
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-[var(--gold-400)] to-transparent blur-[120px] opacity-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-[var(--gold-700)] to-transparent blur-[100px] opacity-20"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--gold-500)]/30 bg-[var(--gold-500)]/10 text-[var(--gold-400)] text-xs font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--gold-400)] animate-pulse"></span>
            Nova Funcionalidade
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight tracking-tight">
            Acelere o seu fluxo com a nossa plataforma.
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Junte-se a milhares de equipas que já estão a construir o futuro.
          </p>
        </div>

        {/* Mock UI Element - Glassmorphism */}
        <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-[var(--radius-lg)] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/10 p-6 translate-x-8 translate-y-8 hover:translate-x-6 transition-transform duration-500">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] rounded-full flex items-center justify-center font-bold text-lg text-[var(--void)]">
              WM
            </div>
            <div>
              <div className="font-bold text-[var(--text)]">William Monteiro</div>
              <div className="text-xs text-[var(--gold-400)]">Enterprise Plan</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-2 w-full bg-white/10 rounded-full"></div>
            <div className="h-2 w-5/6 bg-white/10 rounded-full"></div>
            <div className="h-2 w-4/6 bg-white/10 rounded-full"></div>
          </div>
        </div>

      </div>

    </div>
  );
}
