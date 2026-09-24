"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Locale, ProjectImage } from "@/lib/data";
import type { getMessages } from "@/lib/i18n";

type Messages = ReturnType<typeof getMessages>;

export function ProjectGallery({
  images,
  locale,
  copy,
}: {
  images: ProjectImage[];
  locale: Locale;
  copy: Messages;
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const current = images[index];

  // Percorre em ciclo: do último volta ao primeiro.
  const go = (step: number) => setIndex((value) => (value + step + total) % total);

  return (
    <section
      className="project-gallery"
      aria-roledescription="carousel"
      aria-label={copy.accessibility.gallery}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(-1);
        if (event.key === "ArrowRight") go(1);
      }}
    >
      <div className="gallery-frame">
        {images.map((image, position) => (
          <figure
            key={image.src}
            className={`gallery-slide${position === index ? " active" : ""}`}
            aria-hidden={position !== index}
          >
            {/* Sem `hidden`: um slide em display:none nunca carregaria a imagem. */}
            <Image
              src={image.src}
              alt={image.caption[locale]}
              fill
              quality={90}
              {...(position === 0 ? { preload: true } : { loading: "eager" as const })}
              sizes="(max-width: 1120px) 100vw, 1120px"
            />
          </figure>
        ))}

        {total > 1 && (
          <>
            <button
              className="gallery-arrow prev"
              type="button"
              onClick={() => go(-1)}
              aria-label={copy.accessibility.previousImage}
            >
              <ChevronLeft size={17} aria-hidden="true" />
            </button>
            <button
              className="gallery-arrow next"
              type="button"
              onClick={() => go(1)}
              aria-label={copy.accessibility.nextImage}
            >
              <ChevronRight size={17} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      <div className="gallery-bar">
        <p aria-live="polite">
          <span className="gallery-count">
            {index + 1}/{total}
          </span>
          {current.caption[locale]}
        </p>

        {total > 1 && (
          <div className="gallery-dots">
            {images.map((image, position) => (
              <button
                key={image.src}
                type="button"
                className={position === index ? "active" : undefined}
                aria-label={image.caption[locale]}
                aria-current={position === index}
                onClick={() => setIndex(position)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
