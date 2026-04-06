import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Play, X } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { GeminiAssistant } from './GeminiAssistant';
import { CustomCursor } from './CustomCursor';
import { getCaseStudyProject } from '../data/caseStudyRegistry';
import { toYoutubeEmbed } from '../utils/youtubeEmbed';

const ease = [0.16, 1, 0.3, 1] as const;
const slideEase = ease;

function MetaSlashes({ items }: { items: React.ReactNode[] }) {
  const flat = items.filter(Boolean);
  return (
    <p className="font-sync text-[10px] md:text-[11px] uppercase leading-relaxed tracking-[0.28em] text-zinc-600 dark:text-neutral-500">
      {flat.map((node, i) => (
        <span key={i}>
          {i > 0 && <span className="mx-2 text-zinc-400 md:mx-3 dark:text-neutral-700">/</span>}
          {node}
        </span>
      ))}
    </p>
  );
}

/**
 * Plantilla única de ficha de caso (branding, redes sociales, integrados).
 * Datos: `data/caseStudyRegistry.ts` y archivos por vertical.
 */
export const CaseStudyProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getCaseStudyProject(slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const tipologiaItems = useMemo(() => {
    if (!project) return [];
    if (project.disciplines?.length) return project.disciplines;
    return project.contentPillars ?? [];
  }, [project]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (!project) return;
      if (e.key === 'ArrowRight')
        setLightbox((i) => (i === null ? 0 : Math.min(project.gallery.length - 1, i + 1)));
      if (e.key === 'ArrowLeft') setLightbox((i) => (i === null ? 0 : Math.max(0, i - 1)));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, project]);

  if (!project) {
    return <Navigate to="/proyectos" replace />;
  }

  const videos = project.videos ?? [];
  const videoEmbeds = videos
    .map((v, i) => ({ ...v, embed: toYoutubeEmbed(v.url), index: i }))
    .filter((v): v is typeof v & { embed: string } => v.embed != null);

  const metaItems: React.ReactNode[] = [
    <span key="c">
      Cliente <span className="text-zinc-800 dark:text-neutral-300">{project.client}</span>
    </span>,
    <span key="y">
      Año <span className="text-zinc-800 dark:text-neutral-300">{project.year}</span>
    </span>,
  ];
  if (project.webUrl) {
    metaItems.push(
      <a
        key="w"
        href={project.webUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1FCDD2]/90 hover:text-[#1FCDD2] underline underline-offset-4 decoration-white/15 hover:decoration-[#1FCDD2]/50 transition-colors interactive inline-flex items-center gap-1"
      >
        {project.webUrlLabel ?? 'Ver web'}
        <ExternalLink size={12} className="opacity-70" aria-hidden />
      </a>
    );
  }

  const galleryIntro =
    project.category.toLowerCase().includes('redes') || (project.contentPillars?.length && !project.disciplines?.length)
      ? 'Selección de piezas para redes y campañas. Pulsa para ampliar.'
      : 'Selección de piezas gráficas y aplicaciones de marca. Pulsa para ampliar.';

  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 transition-colors dark:bg-[#050505] dark:text-white">
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#1FCDD2] z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <section id="ic-hero" className="relative pt-28 md:pt-36 pb-0 px-6 md:px-12 lg:px-16 border-b border-zinc-200/80 dark:border-white/[0.08]">
          <div className="max-w-[1400px] mx-auto">
            <Link
              to="/proyectos"
              className="mb-10 inline-flex items-center gap-2 font-sync text-[10px] uppercase tracking-[0.25em] text-zinc-600 transition-colors hover:text-[#1FCDD2] md:mb-12 dark:text-neutral-500 interactive"
            >
              <ArrowLeft size={14} aria-hidden />
              Proyectos
            </Link>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sync text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#1FCDD2] mb-8 md:mb-10"
            >
              {project.category}
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end pb-14 md:pb-20">
              <div className="lg:col-span-7 xl:col-span-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04, duration: 0.55, ease: slideEase }}
                  className="font-headline font-bold tracking-tighter leading-[0.88]"
                >
                  <span className="block text-[clamp(2.5rem,8vw,5.75rem)] text-zinc-900 dark:text-white">{project.brandName}</span>
                  {(project.heroTitleLine2 ?? '').trim() !== '' && (
                    <span className="mt-1 block text-[clamp(2.5rem,8vw,5.75rem)] text-zinc-400 md:mt-2 dark:text-neutral-600">
                      {project.heroTitleLine2}
                    </span>
                  )}
                </motion.h1>
                <p className="mt-6 max-w-xl font-sync text-xs uppercase tracking-[0.2em] text-zinc-600 md:mt-8 md:text-sm dark:text-neutral-500">
                  {project.pageTitle}
                </p>
              </div>

              <div className="lg:col-span-5 xl:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5, ease: slideEase }}
                  className="space-y-6"
                >
                  <p className="text-sm font-light leading-[1.75] text-zinc-600 md:text-base dark:text-neutral-400">{project.summary}</p>
                  {project.body && (
                    <p className="text-sm font-light leading-relaxed text-zinc-600 md:text-[15px] dark:text-neutral-500">{project.body}</p>
                  )}
                  <div className="h-px w-full max-w-md bg-gradient-to-r from-zinc-300/80 via-zinc-200/40 to-transparent dark:from-white/25 dark:via-white/10" />
                  <MetaSlashes items={metaItems} />
                  {tipologiaItems.length > 0 && (
                    <p className="font-sync text-[10px] uppercase leading-relaxed tracking-[0.25em] text-zinc-600 dark:text-neutral-600">
                      <span className="text-zinc-500 dark:text-neutral-500">Tipología</span>
                      <span className="mx-2 text-zinc-400 md:mx-3 dark:text-neutral-700">/</span>
                      {tipologiaItems.map((d, i) => (
                        <span key={d}>
                          {i > 0 && <span className="mx-2 text-zinc-400 md:mx-3 dark:text-neutral-700">/</span>}
                          <span className="text-zinc-700 dark:text-neutral-400">{d}</span>
                        </span>
                      ))}
                    </p>
                  )}
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="w-full border-t border-zinc-200/70 dark:border-white/[0.06]"
          >
            <div className="max-w-[1600px] mx-auto">
              <img
                src={project.heroImage}
                alt={project.brandName}
                className="w-full aspect-[21/10] md:aspect-[2.4/1] object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </section>

        {project.recognition && (
          <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 border-b border-zinc-200/80 dark:border-white/[0.08]">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl dark:text-white">
                  {project.recognition.title}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-3xl text-base font-light leading-[1.8] text-zinc-600 md:text-lg dark:text-neutral-400">
                  {project.recognition.body}
                </p>
              </div>
            </div>
          </section>
        )}

        <section id="ic-story" className="py-16 md:py-24 px-6 md:px-12 lg:px-16 border-b border-zinc-200/80 dark:border-white/[0.08]">
          <div className="max-w-[1400px] mx-auto">
            <p className="mb-6 font-sync text-[10px] uppercase tracking-[0.35em] text-zinc-600 md:mb-8 dark:text-neutral-600">
              Servicios realizados
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
              {project.services.map((s) => (
                <li
                  key={s}
                  className="border-b border-zinc-200/80 pb-3 text-sm font-light text-zinc-800 md:text-base dark:border-white/[0.06] dark:text-neutral-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {videoEmbeds.length > 0 && (
          <section id="ic-videos" className="py-16 md:py-28 px-6 md:px-12 lg:px-16 border-b border-zinc-200/80 dark:border-white/[0.08]">
            <div className="max-w-[900px] mx-auto">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-12 md:mb-16">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-white">Audiovisual</h2>
                <span className="inline-flex items-center gap-2 text-[#1FCDD2]/80 font-sync text-[10px] uppercase tracking-[0.3em]">
                  <Play size={16} fill="currentColor" className="opacity-80" aria-hidden />
                  {videoEmbeds.length} piezas
                </span>
              </div>
              <div className="space-y-14 md:space-y-20">
                {videoEmbeds.map((v) => (
                  <div key={`${v.embed}-${v.index}`} className="space-y-4">
                    <div className="relative aspect-video w-full overflow-hidden border border-zinc-200/80 bg-zinc-100 dark:border-white/[0.08] dark:bg-neutral-950">
                      <iframe
                        src={v.embed}
                        title={v.title ?? `Video ${v.index + 1}`}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    </div>
                    {v.title && (
                      <p className="font-sync text-[10px] uppercase tracking-[0.3em] text-zinc-600 dark:text-neutral-500">{v.title}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="ic-feed" className="py-16 md:py-28 px-6 md:px-12 lg:px-16 border-b border-zinc-200/80 dark:border-white/[0.08]">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12 md:mb-16 max-w-2xl">
              <h2 className="font-headline text-2xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-white">Imágenes del caso</h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-zinc-600 md:text-base dark:text-neutral-500">{galleryIntro}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {project.gallery.map((item, i) => (
                <button
                  key={`${item.src}-${i}`}
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group text-left interactive"
                >
                  <div className="relative overflow-hidden border border-zinc-200/80 bg-zinc-100 dark:border-white/[0.08] dark:bg-neutral-950 aspect-[4/3] md:aspect-auto md:min-h-[280px]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  {item.caption && (
                    <p className="mt-3 font-sync text-[10px] uppercase tracking-[0.28em] text-zinc-600 dark:text-neutral-500">
                      {item.caption}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {project.team && project.team.length > 0 && (
          <section id="ic-team" className="py-16 md:py-24 px-6 md:px-12 lg:px-16 border-b border-zinc-200/80 dark:border-white/[0.08]">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="mb-10 font-headline text-2xl font-bold tracking-tight text-zinc-900 md:mb-14 md:text-3xl dark:text-white">Equipo</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
                {project.team.map((t) => (
                  <div key={t.name}>
                    <p className="text-base font-medium text-zinc-900 dark:text-white">{t.name}</p>
                    <p className="mt-2 font-sync text-[10px] uppercase tracking-[0.2em] text-zinc-600 dark:text-neutral-500">{t.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {project.related && project.related.length > 0 && (
          <section id="ic-related" className="py-16 md:py-20 px-6 md:px-12 lg:px-16 border-b border-zinc-200/80 dark:border-white/[0.08]">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="mb-8 font-headline text-xl font-bold tracking-tight text-zinc-900 md:text-2xl dark:text-white">Más proyectos</h2>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-3 font-sync text-[10px] md:text-[11px] uppercase tracking-[0.22em]">
                {project.related.map((r, i) => (
                  <span key={r.label} className="inline-flex items-center">
                    {i > 0 && <span className="mx-3 text-zinc-400 md:mx-4 dark:text-neutral-700">/</span>}
                    {r.external ? (
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 underline decoration-zinc-300/60 underline-offset-4 transition-colors hover:text-[#1FCDD2] hover:decoration-[#1FCDD2]/40 dark:text-neutral-400 dark:decoration-white/10 interactive inline-flex items-center gap-1"
                      >
                        {r.label}
                        <ExternalLink size={11} className="opacity-60" aria-hidden />
                      </a>
                    ) : (
                      <Link
                        to={r.href}
                        className="text-zinc-600 underline decoration-zinc-300/60 underline-offset-4 transition-colors hover:text-[#1FCDD2] hover:decoration-[#1FCDD2]/40 dark:text-neutral-400 dark:decoration-white/10 interactive"
                      >
                        {r.label}
                      </Link>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-20 md:py-24 px-6 text-center border-b border-zinc-200/80 dark:border-white/[0.08]">
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#1FCDD2] text-black text-[10px] font-sync uppercase tracking-[0.25em] hover:brightness-110 transition-[filter] interactive"
          >
            Hablemos de tu marca
          </Link>
        </section>
      </main>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-[#1FCDD2] hover:text-[#1FCDD2] transition-colors interactive z-10"
              aria-label="Cerrar"
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22, ease }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.gallery[lightbox].src}
                alt={project.gallery[lightbox].alt}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              {project.gallery[lightbox].caption && (
                <p className="mt-4 text-center font-sync text-[10px] uppercase tracking-widest text-zinc-600 dark:text-neutral-500">
                  {project.gallery[lightbox].caption}
                </p>
              )}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  type="button"
                  disabled={lightbox <= 0}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((i) => (i === null ? 0 : Math.max(0, i - 1)));
                  }}
                  className="p-3 rounded-full border border-white/15 disabled:opacity-30 hover:border-[#1FCDD2] interactive"
                  aria-label="Anterior"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  disabled={lightbox >= project.gallery.length - 1}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((i) =>
                      i === null ? 0 : Math.min(project.gallery.length - 1, i + 1)
                    );
                  }}
                  className="p-3 rounded-full border border-white/15 disabled:opacity-30 hover:border-[#1FCDD2] interactive"
                  aria-label="Siguiente"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <GeminiAssistant />
    </div>
  );
};

/** @deprecated Usar `CaseStudyProjectPage`; se mantiene por compatibilidad con imports antiguos. */
export const IntegratedCaseProjectPage = CaseStudyProjectPage;
