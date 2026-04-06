
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectDetail } from './ProjectDetail';
import { portfolioProjects, type PortfolioProject } from '../data/portfolioData';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const slideEase = [0.16, 1, 0.3, 1] as const;

/** Mosaico 12 columnas (md+): filas 1–2 bloque grande + 4 celdas; fila 3 tres iguales; fila 4 dos anchas */
const MOSAIC_MD_CLASSES: string[] = [
  'md:col-start-1 md:col-end-8 md:row-start-1 md:row-span-2',
  'md:col-start-8 md:col-end-11 md:row-start-1',
  'md:col-start-11 md:col-end-13 md:row-start-1',
  'md:col-start-8 md:col-end-11 md:row-start-2',
  'md:col-start-11 md:col-end-13 md:row-start-2',
  'md:col-start-1 md:col-end-5 md:row-start-3',
  'md:col-start-5 md:col-end-9 md:row-start-3',
  'md:col-start-9 md:col-end-13 md:row-start-3',
  'md:col-start-1 md:col-end-7 md:row-start-4',
  'md:col-start-7 md:col-end-13 md:row-start-4',
];

const PortfolioCard: React.FC<{
  project: PortfolioProject;
  index: number;
  onClick: () => void;
  mosaicClassName: string;
  isHeroTile: boolean;
  fullMosaic: boolean;
}> = ({ project, index, onClick, mosaicClassName, isHeroTile, fullMosaic }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const fromLeft = index % 2 === 0;
  const offset = prefersReducedMotion ? 0 : fromLeft ? 48 : -48;
  const stagger = prefersReducedMotion ? 0 : (index % 3) * 0.04;

  return (
    <motion.div
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -10% 0px' }}
      transition={{
        duration: prefersReducedMotion ? 0.35 : 0.65,
        delay: stagger,
        ease: slideEase,
      }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={`group relative col-span-12 overflow-hidden cursor-pointer interactive bg-neutral-900 will-change-transform ${
        fullMosaic ? 'min-h-[240px] sm:min-h-[260px]' : 'min-h-[220px] md:min-h-[280px]'
      } ${mosaicClassName}`}
    >
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-neutral-800 flex items-center justify-center"
          >
            <div className="absolute font-sync text-[10px] uppercase tracking-widest text-neutral-500 opacity-50">
              Cargando...
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0">
        <motion.img
          src={project.img}
          alt={project.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

      <div
        className={`absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ${
          isHeroTile ? 'md:p-10' : ''
        }`}
      >
        <span className="text-[10px] md:text-xs font-sync uppercase tracking-widest text-[#1FCDD2] mb-1 md:mb-2 block">
          {project.category}
        </span>
        <h3
          className={`font-headline font-bold text-white mb-2 md:mb-4 leading-tight ${
            isHeroTile ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl' : 'text-xl sm:text-2xl md:text-3xl'
          }`}
        >
          {project.title}
        </h3>
        <div className="h-[2px] w-0 bg-[#1FCDD2] group-hover:w-full transition-all duration-500 max-w-[120px]" />
        <p className="mt-2 md:mt-4 text-[9px] md:text-[10px] font-sync uppercase tracking-widest text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Ver detalle del proyecto
        </p>
      </div>
    </motion.div>
  );
};

const PORTFOLIO_FILTERS = ['Todo', 'Creación de marca', 'Empaques', 'Publicidad'] as const;

export const Portfolio: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<(typeof PORTFOLIO_FILTERS)[number]>('Todo');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    filter === 'Todo'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  return (
    <section className="py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-4xl font-headline font-bold tracking-tighter text-zinc-900 md:text-6xl dark:text-white"
            >
              CASOS DE <span className="text-zinc-400 dark:text-neutral-600">ÉXITO</span>
            </motion.h2>
            <p className="max-w-xl font-sync text-sm uppercase leading-relaxed tracking-widest text-zinc-600 dark:text-neutral-500">
              Proyectos destacados alineados al portafolio público de{' '}
              <a
                href="https://mtmmarcatumarca.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1FCDD2]/90 hover:text-[#1FCDD2] underline underline-offset-2"
              >
                mtmmarcatumarca.com
              </a>
              .
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4 justify-end">
            {PORTFOLIO_FILTERS.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-5 py-2 font-sync text-[10px] uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? 'border-[#1FCDD2] bg-[#1FCDD2] text-black'
                    : 'border-zinc-300/90 text-zinc-800 hover:border-[#1FCDD2]/40 dark:border-white/10 dark:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mosaico full width: sangría viewport sin provocar scroll horizontal */}
      <div className="relative w-screen max-w-[100vw] left-1/2 right-auto -translate-x-1/2 px-2 sm:px-3 md:px-4">
        <div
          className="grid grid-cols-12 gap-2 sm:gap-2.5 md:gap-3 auto-rows-[minmax(200px,24vh)] md:auto-rows-[minmax(160px,20vh)]"
          style={{ gridAutoFlow: 'dense' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const fullMosaic = filteredProjects.length === 10;
              const mosaicClassName = fullMosaic
                ? MOSAIC_MD_CLASSES[index] ?? 'md:col-span-4'
                : 'md:col-span-4';
              return (
                <PortfolioCard
                  key={project.id}
                  index={index}
                  project={project}
                  fullMosaic={fullMosaic}
                  isHeroTile={index === 0 && fullMosaic}
                  mosaicClassName={mosaicClassName}
                  onClick={() => {
                    if (project.brandingCaseSlug) {
                      navigate(`/proyectos/branding/${project.brandingCaseSlug}`);
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
                    setSelectedProject(project);
                  }}
                />
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};
