"use client";

import { PersonData, Locale } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import { LangSwitch } from "./LangSwitch";
import { useEffect, useState, useRef } from "react";

const translations = {
  pt: {
    selectedWork: "Trabalhos",
    studio: "Estúdio",
    contact: "Contacto",
    archive: "Arquivo",
    scroll: "Rolar",
    theStudio: "O Estúdio",
    approach: "Abordagem",
    expertise: "Especialização",
    background: "Formação",
    inquiries: "Consultas",
    letsBuild: "Vamos construir algo",
    extraordinary: "extraordinário.",
    firstName: "Nome",
    email: "E-mail",
    subject: "Assunto",
    message: "Mensagem",
    designing: "Desenhando",
    spacesShadows: "Espaços & Sombras",
  },
  en: {
    selectedWork: "Selected Work",
    studio: "Studio",
    contact: "Contact",
    archive: "Archive",
    scroll: "Scroll",
    theStudio: "The Studio",
    approach: "Approach",
    expertise: "Expertise",
    background: "Background",
    inquiries: "Inquiries",
    letsBuild: "Let's build something",
    extraordinary: "extraordinary.",
    firstName: "First name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    designing: "Designing",
    spacesShadows: "Spaces & Shadows",
  }
};

export function Portfolio({ data, locale }: { data: PersonData, locale: Locale }) {
  const { projects, social } = data;
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const t = translations[locale];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroRef.current.style.opacity = `${1 - (scrolled / 600)}`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F0F0F0] font-sans antialiased selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* Decorative Gold Lines (Background) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 hidden md:block">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
           <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#D4AF37" strokeWidth="0.5" />
           <line x1="100%" y1="20%" x2="0" y2="80%" stroke="#D4AF37" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#0A0A0A]/90 backdrop-blur-md' : 'py-6 bg-transparent'}`}>
        <div className="px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 items-center max-w-[1920px] mx-auto">
          {/* Logo */}
          <div className="flex flex-col">
            <h1 className="text-sm md:text-base font-medium tracking-[0.1em] uppercase text-white">{data.displayName}</h1>
            <p className="text-[9px] md:text-[10px] tracking-widest mt-1 text-[#D4AF37] uppercase font-semibold">{data.role[locale]}</p>
          </div>
          
          {/* Center Nav */}
          <nav className="hidden md:flex items-center justify-center gap-10 text-[10px] tracking-[0.2em] uppercase font-semibold">
            <a href="#work" className="text-white hover:text-[#D4AF37] transition-colors">{t.selectedWork}</a>
            <a href="#about" className="text-white hover:text-[#D4AF37] transition-colors">{t.studio}</a>
            <a href="#contact" className="text-white hover:text-[#D4AF37] transition-colors">{t.contact}</a>
          </nav>
          
          {/* Right Action */}
          <div className="flex items-center justify-end">
            <div className="relative flex items-center gap-2 bg-[#1A1A1A] border border-[#333] rounded-full px-3 py-1.5 text-[9px] md:text-[10px] tracking-widest text-[#888] font-semibold">
              <span className={locale === 'pt' ? 'text-[#D4AF37]' : ''}>PT</span>
              <span>/</span>
              <span className={locale === 'en' ? 'text-[#D4AF37]' : ''}>EN</span>
              <div className="absolute inset-0 opacity-0 w-full h-full cursor-pointer">
                <LangSwitch locale={locale} label={locale === 'pt' ? 'EN' : 'PT'} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden">
          {/* Photorealistic Dark Architecture Background */}
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity grayscale"></div>
          {/* Gradient masking for depth */}
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80"></div>
          
          <div ref={heroRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center h-full pt-20">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 md:mb-8 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/30 to-[#D4AF37]/20 border border-[#D4AF37]/50 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"></div>
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-[#E8C550] font-bold text-center">
                {data.availability.note[locale]}
              </span>
            </div>
            
            {/* Main Title */}
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-serif font-light tracking-tight leading-[1.1] md:leading-[1] text-[#F9F9F9] drop-shadow-2xl mb-6 flex flex-col items-center">
              <span className="italic text-[#F9F9F9]/90 md:pr-12">{t.designing}</span> 
              <span className="font-medium text-center">{t.spacesShadows}</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-[#AAAAAA] max-w-xl mx-auto font-light leading-relaxed text-justify px-4">
              {data.positioning[locale]}
            </p>
          </div>
          
          {/* Scroll Capsule */}
          <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20">
            <div className="flex flex-col items-center justify-center w-[50px] md:w-[60px] h-[75px] md:h-[90px] rounded-full bg-gradient-to-b from-[#2A2A2A] to-[#111111] border border-[#444] shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_2px_10px_rgba(255,255,255,0.1)]">
              <span className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-[#AAA] mb-2 font-bold">{t.scroll}</span>
              <ArrowDown className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#AAA] animate-bounce" />
            </div>
          </div>
        </section>

        {/* SELECTED WORK SECTION */}
        <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 relative z-10">
            <div>
              <span className="text-[#D4AF37] text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold mb-3 block">{t.archive}</span>
              <h3 className="text-3xl md:text-4xl lg:text-[56px] font-light tracking-tight text-white mb-2">{t.selectedWork}</h3>
            </div>
            {/* Fake Gold Toggle */}
            <div className="hidden md:flex bg-[#0A0A0A] rounded-full p-1.5 border border-[#333] items-center gap-2">
              <div className="w-[60px] h-[24px] rounded-full bg-gradient-to-r from-[#D4AF37] to-[#8C6D1F] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]"></div>
              <div className="w-[40px] h-[24px] rounded-full bg-[#1A1A1A] flex items-center justify-center">
                <div className="w-3 h-[2px] bg-[#666]"></div>
              </div>
            </div>
          </div>
          
          {/* True 4-Column Masonry (using CSS columns) */}
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6 relative z-10">
            {[
              { type: 'square', title: 'Project Project', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop' },
              { type: 'tall', title: 'Project Visualize', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=400&auto=format&fit=crop' },
              { type: 'tall-medium', title: 'Project Project', img: 'https://images.unsplash.com/photo-1545063914-a1a6dd144577?q=80&w=400&auto=format&fit=crop' },
              { type: 'square', title: 'Project Project', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop' },
              { type: 'tall-large', title: 'Project Project', img: 'https://images.unsplash.com/photo-1506526615598-cb54131afdf2?q=80&w=400&auto=format&fit=crop' },
              { type: 'square', title: 'Project Visualize', img: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=400&auto=format&fit=crop' },
              { type: 'square-tall', title: 'Project Project', img: 'https://images.unsplash.com/photo-1481253127861-534498168948?q=80&w=400&auto=format&fit=crop' },
              { type: 'square', title: 'Project Visualize', img: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=400&auto=format&fit=crop' }
            ].map((item, idx) => {
              const aspect = 
                item.type === 'square' ? 'aspect-square' :
                item.type === 'tall' ? 'aspect-[3/4]' :
                item.type === 'tall-medium' ? 'aspect-[4/5]' :
                item.type === 'tall-large' ? 'aspect-[2/3]' :
                'aspect-[5/6]';
                
              return (
                <a 
                  key={idx}
                  href="#"
                  className={`group block relative overflow-hidden rounded-2xl bg-[#141414]/20 border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl break-inside-avoid w-full ${aspect}`}
                >
                  <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                  
                  <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(255,255,255,0.1) 50%)', backgroundSize: '4px 100%' }}></div>
                  
                  <div 
                    className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity bg-cover bg-center group-hover:scale-105 group-hover:opacity-30 transition-all duration-700"
                    style={{ backgroundImage: `url('${item.img}')` }}
                  ></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                    <div className="bg-[#111]/60 backdrop-blur-md px-3 py-1.5 rounded-[6px] border border-white/5 shadow-sm">
                      <span className="text-[9px] md:text-[10px] font-medium text-[#EEE] tracking-wide">{item.title}</span>
                    </div>
                    <div className="bg-[#111]/60 backdrop-blur-md w-6 h-6 md:w-7 md:h-7 rounded-[6px] border border-white/5 shadow-sm flex items-center justify-center">
                       <div className="w-2 h-2 md:w-2.5 md:h-2.5 border-[1.5px] border-[#888] rounded-[3px] opacity-70"></div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* STUDIO SECTION */}
        <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-[1920px] mx-auto border-t border-[#222]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            
            {/* Left Content */}
            <div className="pt-4 md:pt-8">
              <span className="text-[#D4AF37] text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold mb-3 block">{t.theStudio}</span>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-16 md:mb-24 text-white">{t.approach}</h3>
              
              <div className="flex gap-2 text-[#D4AF37] mb-12 md:mb-16">
                 <div className="w-1.5 h-5 md:w-2 md:h-6 bg-[#D4AF37] transform rotate-12"></div>
                 <div className="w-1.5 h-5 md:w-2 md:h-6 bg-[#D4AF37] transform rotate-12"></div>
                 <div className="w-1.5 h-5 md:w-2 md:h-6 bg-[#D4AF37] transform rotate-12"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 border-t border-[#222] pt-10 md:pt-12">
                <div>
                  <h5 className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-4 md:mb-6">{t.expertise}</h5>
                  <ul className="space-y-4 md:space-y-6">
                    {data.skills.map(group => (
                      <li key={group.id} className="text-xs md:text-sm">
                        <span className="text-[#555] text-[10px] md:text-[11px] block mb-1">{group.title[locale]}</span>
                        <span className="font-medium text-[#CCC] leading-relaxed block text-justify pr-2">{group.items.join(', ')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-4 md:mb-6">
                    {t.background}
                  </h5>
                  <ul className="space-y-4 md:space-y-6">
                    {data.education.map(edu => (
                      <li key={edu.degree[locale]} className="text-xs md:text-sm">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1 sm:gap-4">
                           <span className="font-medium text-[#CCC]">{edu.degree[locale]}</span>
                           <span className="text-[#555] text-[9px] md:text-[10px] whitespace-nowrap">{edu.start} — {edu.end}</span>
                        </div>
                        <span className="text-[#D4AF37] text-[10px] md:text-[11px]">{edu.school}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right 3D Joint Render (Simulated) */}
            <div className="relative aspect-square md:aspect-video lg:aspect-square xl:aspect-video rounded-lg overflow-hidden bg-[#0A0A0A] flex items-center justify-center mt-8 lg:mt-0 shadow-lg">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop')] opacity-10 mix-blend-screen grayscale"></div>
               {/* Minimalist representation of the 3D metal joint in the reference */}
               <div className="relative z-10 w-[200px] h-[200px] md:w-[300px] md:h-[300px] transform scale-75 md:scale-100">
                 {/* Center column */}
                 <div className="absolute top-0 left-[110px] w-[80px] h-[300px] bg-gradient-to-r from-[#111] via-[#444] to-[#111] border-x border-[#555]"></div>
                 {/* Left arm */}
                 <div className="absolute top-[110px] left-0 w-[110px] h-[80px] bg-gradient-to-b from-[#444] via-[#222] to-[#111] border-y border-[#555]"></div>
                 {/* Right arm */}
                 <div className="absolute top-[110px] right-0 w-[110px] h-[80px] bg-gradient-to-b from-[#444] via-[#222] to-[#111] border-y border-[#555]"></div>
                 
                 {/* Gold highlights in the joints */}
                 <div className="absolute top-[110px] left-[110px] w-[80px] h-[80px] border-4 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]"></div>
                 <div className="absolute top-[115px] left-[115px] w-[70px] h-[70px] border-2 border-[#D4AF37]/50"></div>
                 <div className="absolute top-[125px] left-[125px] w-[50px] h-[50px] bg-[#111] shadow-[inset_0_0_10px_#000]"></div>
               </div>
            </div>
            
          </div>
        </section>
        
        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 md:py-40 px-6 md:px-8 text-center relative border-t border-[#222]">
          
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[#D4AF37] text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold mb-6 md:mb-8 block">{t.inquiries}</span>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-12 md:mb-16 text-[#F9F9F9] px-4">
              {t.letsBuild} <br className="hidden md:block"/> {t.extraordinary}
            </h2>
            
            {/* The 3D Gold Bar Button */}
            <div className="mb-16 md:mb-24 relative group cursor-pointer w-full max-w-[280px] mx-auto flex justify-center">
              {/* Glow */}
              <div className="absolute inset-0 bg-[#D4AF37] blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              {/* 3D Bar */}
              <div className="relative w-full h-[45px] bg-gradient-to-b from-[#F2D780] via-[#C9A232] to-[#917118] border border-[#FFEA9B] flex items-center justify-center
                              shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_4px_10px_rgba(255,255,255,0.6),inset_0_-4px_10px_rgba(0,0,0,0.4)]
                              before:content-[''] before:absolute before:inset-0 before:border-[3px] before:border-t-white/40 before:border-b-black/40 before:border-l-white/20 before:border-r-black/20">
                {/* Center Ridge for 3D bevel effect */}
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-white/50 to-black/30 -translate-x-1/2"></div>
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-white/20 via-black/10 to-black/40 -translate-y-1/2"></div>
              </div>
            </div>
            
            {/* Minimalist Contact Form (Visual only, matching screenshot) */}
            <div className="w-full max-w-xl mx-auto space-y-6 md:space-y-8 text-left px-4">
              <div className="border-b border-[#333] pb-2">
                <input type="text" placeholder={t.firstName} className="w-full bg-transparent outline-none text-xs md:text-sm text-white placeholder:text-[#555]" />
              </div>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
                <div className="border-b border-[#333] pb-2 flex-1">
                  <input type="email" placeholder={t.email} className="w-full bg-transparent outline-none text-xs md:text-sm text-white placeholder:text-[#555]" />
                </div>
                <div className="border-b border-[#333] pb-2 flex-1 flex justify-between items-center relative">
                  <input type="text" placeholder={t.subject} className="w-full bg-transparent outline-none text-xs md:text-sm text-white placeholder:text-[#555] pr-6" />
                  <ArrowDown className="w-3 h-3 text-[#555] absolute right-0" />
                </div>
              </div>
              <div className="border-b border-[#333] pb-2">
                <input type="text" placeholder={t.message} className="w-full bg-transparent outline-none text-xs md:text-sm text-white placeholder:text-[#555]" />
              </div>
            </div>

          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="px-6 md:px-12 py-10 bg-[#000] flex flex-col items-center">
        {/* N Logo */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-b from-[#CCC] to-[#666] flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,1),inset_0_2px_5px_rgba(255,255,255,0.8)] mb-12">
           <span className="text-black font-serif font-bold text-base md:text-lg">N</span>
        </div>
        
        <div className="w-full max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center text-[#555] text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold gap-8 md:gap-0 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <span>© {new Date().getFullYear()} {data.displayName}</span>
            {/* Author Badge */}
            <a href="https://wmonteiro.pt" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#111] p-1.5 pr-4 rounded-full border border-[#222] hover:border-[#D4AF37]/50 transition-colors w-max mx-auto md:mx-0 group">
              <img src="/perfil2.png" alt="William Monteiro" className="w-6 h-6 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
              <div className="flex flex-col text-left">
                <span className="text-[7px] text-[#888] leading-none mb-0.5">Template created by</span>
                <span className="text-[9px] text-[#CCC] group-hover:text-[#D4AF37] leading-none">William Monteiro</span>
              </div>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
             {social.linkedin && <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#D4AF37]">LinkedIn</a>}
             {social.website && <a href={social.website} target="_blank" rel="noreferrer" className="hover:text-[#D4AF37]">Website</a>}
          </div>
        </div>
      </footer>
    </div>
  );
}
