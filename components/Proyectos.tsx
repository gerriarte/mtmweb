
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { GeminiAssistant } from './GeminiAssistant';
import { CustomCursor } from './CustomCursor';
import { ProjectDetail } from './ProjectDetail';
import { portfolioProjects, type PortfolioProject, type PortfolioServiceVertical } from '../data/portfolioData';
import {
  mtmProyectosCatalog,
  PROYECTOS_FILTERS,
  type ProyectosPageFilter,
  type MtmProyectoCatalogItem,
} from '../data/mtmProyectosCatalog';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const slideEase = [0.16, 1, 0.3, 1] as const;

function toPortfolioProject(item: MtmProyectoCatalogItem, index: number): PortfolioProject {
  if (item.portfolioProjectId != null) {
    const p = portfolioProjects.find((x) => x.id === item.portfolioProjectId);
    if (p) {
      return { ...p, title: item.title, category: item.filter };
    }
  }
  const id = 90000 + index;
  const hero = `https://picsum.photos/seed/${item.slug}-h/1400/900`;
  const detail = `https://picsum.photos/seed/${item.slug}-d/1200/800`;
  return {
    id,
    title: item.title,
    category: item.filter,
    serviceVertical: 'branding' as PortfolioServiceVertical,
    img: `https://picsum.photos/seed/${item.slug}-card/800/1000`,
    description:
      'Proyecto desarrollado por MTM Marca tu Marca. Para conocer alcance, piezas y resultados, escríbenos y te compartimos el caso con el equipo.',
    client: 'MTM — casos reales',
    year: '—',
    gallery: [
      { type: 'image', url: hero, caption: 'Proyecto' },
      { type: 'image', url: detail, caption: 'Detalle' },
    ],
  };
}

export const Proyectos: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<ProyectosPageFilter>('Todo');
  const [selected, setSelected] = useState<PortfolioProject | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const resolved = useMemo(
    () => mtmProyectosCatalog.map((item, index) => ({ item, project: toPortfolioProject(item, index) })),
    []
  );

  const filtered = useMemo(() => {
    if (filter === 'Todo') return resolved;
    return resolved.filter(({ item }) => item.filter === filter);
  }, [resolved, filter]);

  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 transition-colors dark:bg-[#050505] dark:text-white">
      <CustomCursor />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#1FCDD2] z-[60] origin-left" style={{ scaleX }} />

      <Navbar />

      <main>
        {/* Hero editorial (referencia estructura tipo Creamos: titular partido + narrativa + meta) */}
        <section className="relative border-b border-zinc-200/80 px-6 pb-16 pt-28 md:px-12 md:pb-24 md:pt-36 lg:px-16 dark:border-white/[0.08]">
          <div className="max-w-[1400px] mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sync text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#1FCDD2] mb-8 md:mb-10"
            >
              MTM — portafolio
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
              <div className="lg:col-span-7 xl:col-span-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04, duration: 0.6, ease: slideEase }}
                  className="font-headline font-bold tracking-tighter leading-[0.88]"
                >
                  <span className="block text-[clamp(2.75rem,9vw,6.5rem)] text-zinc-900 dark:text-white">Proyectos</span>
                  <span className="mt-1 block text-[clamp(2.75rem,9vw,6.5rem)] text-zinc-400 md:mt-2 dark:text-neutral-600">
                    seleccionados
                  </span>
                </motion.h1>
              </div>
              <div className="lg:col-span-5 xl:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.55, ease: slideEase }}
                  className="space-y-6"
                >
                  <p className="text-sm font-light leading-[1.75] text-zinc-600 md:text-base dark:text-neutral-400">
                    Casos reales de branding, web, redes y contenido.
                  </p>
                  <div className="h-px w-full max-w-md bg-gradient-to-r from-zinc-300/80 via-zinc-200/50 to-transparent dark:from-white/25 dark:via-white/10" />
                  <p className="font-sync text-[10px] uppercase leading-relaxed tracking-[0.25em] text-zinc-600 dark:text-neutral-600">
                    Tipología ·{' '}
                    <span className="text-zinc-500 dark:text-neutral-400">
                      Branding / Social media / Web / Audiovisual
                    </span>
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Filtros estilo meta con separadores (inspirado en “Servicios / Ganadores / Publicidad”) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-14 md:mt-20 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-0"
            >
              <span className="shrink-0 font-sync text-[9px] uppercase tracking-[0.35em] text-zinc-600 sm:mr-4 dark:text-neutral-600">
                Filtrar
              </span>
              <nav className="flex flex-wrap items-center gap-y-2" aria-label="Filtros de proyectos">
                {PROYECTOS_FILTERS.map((f, i) => (
                  <span key={f} className="flex items-center">
                    {i > 0 && (
                      <span className="mx-3 select-none text-zinc-400 sm:mx-4 dark:text-neutral-700" aria-hidden>
                        /
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => setFilter(f)}
                      className={`font-sync text-[10px] md:text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 interactive pb-0.5 border-b-2 ${
                        filter === f
                          ? 'border-[#1FCDD2] text-zinc-900 dark:text-white'
                          : 'border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-800 dark:text-neutral-500 dark:hover:border-white/20 dark:hover:text-neutral-300'
                      }`}
                    >
                      {f}
                    </button>
                  </span>
                ))}
              </nav>
              <span className="mt-4 font-sync text-[9px] uppercase tracking-[0.3em] text-zinc-600 sm:ml-auto sm:mt-0 dark:text-neutral-600">
                {filtered.length} {filtered.length === 1 ? 'proyecto' : 'proyectos'}
                {filter !== 'Todo' ? ` · ${filter}` : ''}
              </span>
            </motion.div>
          </div>
        </section>

        {/* Bloque tipo “Reconocimientos”: dos columnas, título + texto */}
        <section className="border-b border-zinc-200/80 bg-zinc-100 px-6 py-12 md:px-12 md:py-16 lg:px-16 dark:border-white/[0.06] dark:bg-[#080808]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-headline text-lg font-bold tracking-tight text-zinc-900 md:text-xl dark:text-white">
                Reconocimientos
              </h2>
              <p className="mt-3 max-w-[220px] font-sync text-[9px] uppercase tracking-[0.35em] text-zinc-600 dark:text-neutral-600">
                Trayectoria MTM
              </p>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <p className="max-w-3xl text-sm font-light leading-[1.8] text-zinc-600 md:text-base dark:text-neutral-400">
                Más de ocho años construyendo marcas en Bogotá y proyectos digitales con enfoque en
                resultado. Algunos casos incluyen plantillas ampliadas en esta web — branding, redes
                sociales o casos integrados — para que veas el detalle del trabajo, no solo la portada.
              </p>
            </div>
          </div>
        </section>

        {/* Índice de casos: tarjetas editoriales (imagen + tipografía debajo) */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12 font-sync text-[10px] uppercase tracking-[0.4em] text-zinc-600 md:mb-16 dark:text-neutral-600"
            >
              Índice de casos
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-20">
              <AnimatePresence mode="popLayout">
                {filtered.map(({ item, project }, index) => (
                  <ProyectoCatalogCard
                    key={item.slug}
                    index={index}
                    project={project}
                    onOpen={() => {
                      if (item.brandingCaseSlug) {
                        navigate(`/proyectos/branding/${item.brandingCaseSlug}`);
                        return;
                      }
                      if (project.socialMediaCaseSlug) {
                        navigate(`/proyectos/redes-sociales/${project.socialMediaCaseSlug}`);
                        return;
                      }
                      if (project.integratedCaseSlug) {
                        navigate(`/proyectos/caso/${project.integratedCaseSlug}`);
                        return;
                      }
                      setSelected(project);
                    }}
                  />
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-20 flex flex-col items-center justify-center gap-4 border-t border-zinc-200/80 pt-12 sm:flex-row sm:flex-wrap sm:justify-between dark:border-white/[0.08] md:mt-28">
              <p className="text-center font-sync text-[9px] uppercase tracking-[0.35em] text-zinc-600 sm:text-left dark:text-neutral-600">
                ¿Siguiente paso?
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/#portfolio"
                  className="rounded-full border border-zinc-300/90 px-6 py-3 text-[10px] font-sync uppercase tracking-[0.2em] text-zinc-700 transition-colors hover:border-[#1FCDD2]/45 hover:text-zinc-900 dark:border-white/15 dark:text-neutral-300 dark:hover:text-white interactive"
                >
                  Casos en inicio
                </Link>
                <Link
                  to="/#contact"
                  className="px-6 py-3 rounded-full bg-[#1FCDD2] text-black text-[10px] font-sync uppercase tracking-[0.2em] hover:opacity-90 transition-opacity interactive"
                >
                  Hablemos de tu proyecto
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <GeminiAssistant />

      <AnimatePresence>
        {selected && (
          <ProjectDetail
            project={selected}
            onClose={() => setSelected(null)}
            backLabel="Volver a Proyectos"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProyectoCatalogCard: React.FC<{
  project: PortfolioProject;
  index: number;
  onOpen: () => void;
}> = ({ project, index, onOpen }) => {
  const [loaded, setLoaded] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const fromLeft = index % 2 === 0;
  const offset = prefersReducedMotion ? 0 : fromLeft ? 40 : -40;
  const stagger = prefersReducedMotion ? 0 : (index % 4) * 0.05;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
      transition={{
        duration: prefersReducedMotion ? 0.35 : 0.65,
        delay: stagger,
        ease: slideEase,
      }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
      className="group cursor-pointer interactive text-left"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-zinc-200/90 bg-neutral-900 md:aspect-[2/1] md:rounded-xl dark:border-white/[0.06]">
        {!loaded && (
          <div className="absolute inset-0 z-10 bg-neutral-800 flex items-center justify-center">
            <span className="font-sync text-[9px] uppercase tracking-widest text-neutral-600">Cargando</span>
          </div>
        )}
        <img
          src={project.img}
          alt=""
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04] ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm">
            <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden />
          </span>
        </div>
      </div>

      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
        <div className="min-w-0 flex-1">
          <p className="mb-2 font-sync text-[9px] uppercase tracking-[0.28em] text-zinc-600 md:text-[10px] dark:text-neutral-500">
            {project.category}
          </p>
          <h2 className="font-headline text-xl font-bold leading-[1.15] tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-[#1FCDD2] md:text-2xl lg:text-3xl dark:text-white">
            {project.title}
          </h2>
        </div>
        <span className="shrink-0 font-sync text-[9px] uppercase tracking-[0.35em] text-zinc-500 transition-colors group-hover:text-[#1FCDD2] sm:pb-1 dark:text-neutral-600">
          Ver caso →
        </span>
      </div>
    </motion.article>
  );
};
