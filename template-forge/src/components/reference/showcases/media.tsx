"use client";

/* eslint-disable @next/next/no-img-element */
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  X,
} from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/data/catalog";

const photos = [
  { src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1400&q=85", title: { pt: "Escritório Northstar", en: "Northstar office" }, meta: "4032 × 3024 · 1.2 MB" },
  { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=85", title: { pt: "Estudo de materiais", en: "Material study" }, meta: "3000 × 2000 · 860 KB" },
  { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85", title: { pt: "Sistemas silenciosos", en: "Quiet systems" }, meta: "2800 × 1867 · 740 KB" },
  { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85", title: { pt: "Espaço partilhado", en: "Shared space" }, meta: "3200 × 2133 · 910 KB" },
  { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85", title: { pt: "Sessão de trabalho", en: "Working session" }, meta: "2600 × 1733 · 690 KB" },
];

export function MediaShowcase({ slug, locale }: { slug: string; locale: Locale }) {
  const isPt = locale === "pt";

  if (slug === "gallery") return <GalleryShowcase locale={locale} />;
  if (slug === "lightbox") return <LightboxShowcase locale={locale} />;
  if (slug === "carousel") return <CarouselShowcase locale={locale} />;
  if (slug === "comparison") return <ComparisonShowcase locale={locale} />;
  if (slug === "audio") return <AudioShowcase locale={locale} />;
  if (slug === "players") return <PlayersShowcase locale={locale} />;
  if (slug === "video") return <VideoShowcase locale={locale} />;

  return (
    <div className="showcase-stack">
      <section className="panel">
        <header className="panel-head"><span className="technical-label">RESPONSIVE IMAGE</span><small>{isPt ? "Proporção fixa, recorte centrado" : "Fixed ratio, centred crop"}</small></header>
        <figure className="figure-block">
          <img src={photos[0].src} alt={photos[0].title[locale]} />
          <figcaption><strong>{photos[0].title[locale]}</strong><code>{photos[0].meta}</code></figcaption>
        </figure>
      </section>

      <section className="panel">
        <header className="panel-head"><span className="technical-label">ASPECT RATIOS</span><small>1:1 · 4:3 · 16:9 · 3:4</small></header>
        <div className="ratio-row">
          {[["1 / 1", "1:1"], ["4 / 3", "4:3"], ["16 / 9", "16:9"], ["3 / 4", "3:4"]].map(([ratio, label], index) => (
            <div key={label}><div style={{ aspectRatio: ratio }}><img src={photos[index + 1].src} alt="" /></div><small>{label}</small></div>
          ))}
        </div>
      </section>

      <div className="two-column">
        <section className="panel">
          <header className="panel-head"><span className="technical-label">IMAGE CARD</span><small>{isPt ? "Com metadados" : "With metadata"}</small></header>
          <article className="image-card">
            <img src={photos[2].src} alt={photos[2].title[locale]} />
            <div><span className="technical-label">{isPt ? "ESTUDO · 2026" : "STUDY · 2026"}</span><strong>{photos[2].title[locale]}</strong><p>{isPt ? "Fotografia documental de espaços de trabalho contemporâneos." : "Documentary photography of contemporary workspaces."}</p></div>
          </article>
        </section>
        <section className="panel">
          <header className="panel-head"><span className="technical-label">OVERLAY</span><small>{isPt ? "Texto sobre imagem" : "Text over image"}</small></header>
          <div className="image-overlay">
            <img src={photos[3].src} alt={photos[3].title[locale]} />
            <div><span className="technical-label">FEATURED</span><strong>{isPt ? "Arquitetura do quotidiano" : "Architecture of the everyday"}</strong><small>{isPt ? "Leitura de 6 minutos" : "6 minute read"}</small></div>
          </div>
        </section>
      </div>

      <section className="panel">
        <header className="panel-head"><span className="technical-label">LOADING & FALLBACK</span><small>{isPt ? "Estados antes e sem imagem" : "States before and without an image"}</small></header>
        <div className="ratio-row">
          <div><div className="sk sk-image tall" /><small>{isPt ? "A carregar" : "Loading"}</small></div>
          <div><div className="image-fallback"><span>IC</span></div><small>{isPt ? "Substituto com iniciais" : "Initials fallback"}</small></div>
          <div><div className="image-fallback broken"><X size={16} />{isPt ? "Indisponível" : "Unavailable"}</div><small>{isPt ? "Erro de carregamento" : "Load error"}</small></div>
        </div>
      </section>
    </div>
  );
}

function GalleryShowcase({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const [layout, setLayout] = useState<"masonry" | "grid" | "scroll">("masonry");
  return (
    <section className="panel">
      <header className="panel-head">
        <span className="technical-label">EDITORIAL GALLERY</span>
        <div className="segmented">
          {(["masonry", "grid", "scroll"] as const).map((value) => (
            <button key={value} className={layout === value ? "active" : ""} onClick={() => setLayout(value)}>{value.toUpperCase()}</button>
          ))}
        </div>
      </header>
      <div className={`f-gallery ${layout}`}>
        {photos.map((photo, index) => (
          <figure key={photo.src}>
            <img src={photo.src} alt={photo.title[locale]} />
            <figcaption><small>0{index + 1}</small><strong>{photo.title[locale]}</strong></figcaption>
          </figure>
        ))}
      </div>
      <footer className="panel-foot">{photos.length} {isPt ? "imagens · AVIF otimizado" : "images · AVIF optimised"}</footer>
    </section>
  );
}

function LightboxShowcase({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <section className="panel">
        <header className="panel-head"><span className="technical-label">LIGHTBOX</span><small>{isPt ? "Clique numa imagem · navegue com as setas" : "Click an image · navigate with arrows"}</small></header>
        <div className="f-gallery grid">
          {photos.map((photo, index) => (
            <figure key={photo.src}><button onClick={() => setActive(index)} aria-label={photo.title[locale]}><img src={photo.src} alt={photo.title[locale]} /><span><Maximize2 size={14} /></span></button></figure>
          ))}
        </div>
      </section>
      {active !== null && (
        <div className="f-lightbox" role="dialog" aria-modal="true" aria-label={photos[active].title[locale]}>
          <button className="lb-close" onClick={() => setActive(null)} aria-label={isPt ? "Fechar" : "Close"}><X size={18} /></button>
          <button className="lb-prev" onClick={() => setActive((active + photos.length - 1) % photos.length)} aria-label={isPt ? "Anterior" : "Previous"}><ChevronLeft size={20} /></button>
          <figure><img src={photos[active].src} alt={photos[active].title[locale]} /><figcaption><strong>{photos[active].title[locale]}</strong><code>{photos[active].meta}</code><small>{active + 1} / {photos.length}</small></figcaption></figure>
          <button className="lb-next" onClick={() => setActive((active + 1) % photos.length)} aria-label={isPt ? "Seguinte" : "Next"}><ChevronRight size={20} /></button>
        </div>
      )}
    </>
  );
}

function CarouselShowcase({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const [index, setIndex] = useState(0);
  return (
    <section className="panel">
      <header className="panel-head"><span className="technical-label">CAROUSEL</span><small>{index + 1} / {photos.length}</small></header>
      <div className="f-carousel">
        <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {photos.map((photo) => (
            <figure key={photo.src}><img src={photo.src} alt={photo.title[locale]} /><figcaption>{photo.title[locale]}</figcaption></figure>
          ))}
        </div>
        <button className="carousel-arrow prev" onClick={() => setIndex((index + photos.length - 1) % photos.length)} aria-label={isPt ? "Anterior" : "Previous"}><ChevronLeft size={17} /></button>
        <button className="carousel-arrow next" onClick={() => setIndex((index + 1) % photos.length)} aria-label={isPt ? "Seguinte" : "Next"}><ChevronRight size={17} /></button>
      </div>
      <div className="carousel-dots">
        {photos.map((photo, dot) => <button key={photo.src} className={dot === index ? "active" : ""} onClick={() => setIndex(dot)} aria-label={`${isPt ? "Ir para" : "Go to"} ${dot + 1}`} />)}
      </div>
      <div className="carousel-thumbs">
        {photos.map((photo, thumb) => <button key={photo.src} className={thumb === index ? "active" : ""} onClick={() => setIndex(thumb)}><img src={photo.src} alt="" /></button>)}
      </div>
    </section>
  );
}

function ComparisonShowcase({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const [position, setPosition] = useState(52);
  return (
    <section className="panel">
      <header className="panel-head"><span className="technical-label">BEFORE / AFTER</span><small>{isPt ? "Arraste o cursor para comparar" : "Drag the slider to compare"}</small></header>
      <div className="f-compare">
        <img className="compare-after" src={photos[0].src} alt={isPt ? "Depois" : "After"} />
        <div className="compare-before" style={{ width: `${position}%` }}>
          <img src={photos[2].src} alt={isPt ? "Antes" : "Before"} style={{ width: `${10000 / position}%` }} />
        </div>
        <span className="compare-handle" style={{ left: `${position}%` }}><i /></span>
        <span className="compare-tag left">{isPt ? "ANTES" : "BEFORE"}</span>
        <span className="compare-tag right">{isPt ? "DEPOIS" : "AFTER"}</span>
        <input type="range" value={position} min={4} max={96} onChange={(event) => setPosition(Number(event.target.value))} aria-label={isPt ? "Posição da comparação" : "Comparison position"} />
      </div>
    </section>
  );
}

function VideoShowcase({ locale }: { locale: Locale }) {
  const isPt = locale === "pt";
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(38);
  return (
    <section className="panel">
      <header className="panel-head"><span className="technical-label">VIDEO PLAYER</span><small>4K · 02:48 · {isPt ? "legendas disponíveis" : "captions available"}</small></header>
      <div className="f-video">
        <img src={photos[2].src} alt="" />
        <button className="video-center" onClick={() => setPlaying(!playing)} aria-label={playing ? (isPt ? "Pausar" : "Pause") : (isPt ? "Reproduzir" : "Play")}>
          {playing ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
        </button>
        {playing && <span className="video-caption">{isPt ? "“Os sistemas de design escalam quando as decisões são documentadas.”" : "“Design systems scale when decisions are documented.”"}</span>}
        <div className="video-bar">
          <button onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause" : "Play"}>{playing ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}</button>
          <span>0{Math.floor(progress / 40)}:{String(Math.floor(progress * 1.68) % 60).padStart(2, "0")} / 02:48</span>
          <input type="range" value={progress} onChange={(event) => setProgress(Number(event.target.value))} aria-label={isPt ? "Progresso" : "Progress"} />
          <button aria-label={isPt ? "Volume" : "Volume"}><Volume2 size={14} /></button>
          <button className="cc">CC</button>
          <button aria-label={isPt ? "Ecrã inteiro" : "Fullscreen"}><Maximize2 size={14} /></button>
        </div>
      </div>
      <footer className="panel-foot">{isPt ? "Suporta picture-in-picture, legendas e atalhos de teclado (espaço, setas, M)." : "Supports picture-in-picture, captions and keyboard shortcuts (space, arrows, M)."}</footer>
    </section>
  );
}

function AudioShowcase({ locale }: { locale: Locale }) {
  return <PlayersShowcase locale={locale} audioOnly />;
}

function PlayersShowcase({ locale, audioOnly = false }: { locale: Locale; audioOnly?: boolean }) {
  const isPt = locale === "pt";
  const [playing, setPlaying] = useState<string | null>("podcast");
  const tracks = [
    { id: "t1", title: { pt: "Escala sem deriva", en: "Scale without drift" }, time: "18:42" },
    { id: "t2", title: { pt: "Tokens na prática", en: "Tokens in practice" }, time: "24:10" },
    { id: "t3", title: { pt: "Acessibilidade primeiro", en: "Accessibility first" }, time: "31:05" },
  ];
  return (
    <div className="showcase-stack">
      <section className="panel">
        <header className="panel-head"><span className="technical-label">PODCAST PLAYER</span><small>FORGE RADIO · EP. 024</small></header>
        <div className="f-audio">
          <img src={photos[4].src} alt="" />
          <div className="audio-body">
            <strong>{isPt ? "Sistemas de design: escalar sem deriva" : "Design systems: scale without drift"}</strong>
            <small>{isPt ? "com Maya Chen e Kenji Sato" : "with Maya Chen and Kenji Sato"}</small>
            <div className="audio-wave">{Array.from({ length: 48 }).map((_, index) => <i key={index} className={index < 18 ? "played" : ""} style={{ height: `${10 + ((index * 17) % 26)}px` }} />)}</div>
            <div className="audio-controls">
              <button aria-label={isPt ? "Retroceder" : "Rewind"}><SkipBack size={14} /></button>
              <button className="audio-main" onClick={() => setPlaying(playing === "podcast" ? null : "podcast")} aria-label={playing === "podcast" ? "Pause" : "Play"}>{playing === "podcast" ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" />}</button>
              <button aria-label={isPt ? "Avançar" : "Forward"}><SkipForward size={14} /></button>
              <span>07:12 / 18:42</span>
              <button className="speed">1.0×</button>
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <header className="panel-head"><span className="technical-label">PLAYLIST</span><small>{tracks.length} {isPt ? "episódios" : "episodes"}</small></header>
        <ul className="f-playlist">
          {tracks.map((track, index) => (
            <li key={track.id} className={playing === track.id ? "active" : ""}>
              <button onClick={() => setPlaying(playing === track.id ? null : track.id)} aria-label={`${isPt ? "Reproduzir" : "Play"} ${track.title[locale]}`}>
                {playing === track.id ? <Pause size={13} fill="currentColor" /> : <Play size={13} fill="currentColor" />}
              </button>
              <span className="track-index">0{index + 1}</span>
              <strong>{track.title[locale]}</strong>
              {playing === track.id && <span className="track-eq"><i /><i /><i /></span>}
              <code>{track.time}</code>
            </li>
          ))}
        </ul>
      </section>

      {!audioOnly && (
        <section className="panel">
          <header className="panel-head"><span className="technical-label">COMPACT VIDEO</span><small>{isPt ? "Leitor incorporado" : "Embedded player"}</small></header>
          <div className="f-mini-player">
            <img src={photos[1].src} alt="" />
            <div><strong>{isPt ? "Dentro do atelier" : "Inside the atelier"}</strong><small>02:48 · 4K</small><div className="mini-track"><i style={{ width: "42%" }} /></div></div>
            <button aria-label="Play"><Play size={15} fill="currentColor" /></button>
          </div>
        </section>
      )}
    </div>
  );
}
