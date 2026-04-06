
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Play, Image as ImageIcon, ExternalLink } from 'lucide-react';

interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    client: string;
    year: string;
    mainVideo?: string;
    gallery: ProjectMedia[];
  };
  onClose: () => void;
  /** Por encima de modales anidados (p. ej. detalle dentro de ServiceDetail) */
  overlayZClass?: string;
  /** Botón X superior (debe quedar por encima del overlay del padre) */
  closeButtonZClass?: string;
  /** Texto del botón inferior de cierre */
  backLabel?: string;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onClose,
  overlayZClass = 'z-[110]',
  closeButtonZClass = 'z-[120]',
  backLabel = 'Volver a Proyectos',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 ${overlayZClass} overflow-y-auto bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white`}
    >
      {/* Botón Cerrar */}
      <button 
        onClick={onClose}
        className={`fixed right-8 top-8 ${closeButtonZClass} flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200/90 text-zinc-900 backdrop-blur-md transition-all duration-300 hover:bg-[#1FCDD2] hover:text-black group dark:bg-white/10 dark:text-white`}
      >
        <X className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Header / Hero Section */}
      <section className="relative h-[70vh] w-full flex items-end p-8 md:p-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.gallery[0]?.url || "https://picsum.photos/1920/1080"} 
            className="w-full h-full object-cover opacity-40"
            alt={project.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#1FCDD2] font-sync text-sm uppercase tracking-[0.3em] mb-4 block">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-8xl font-headline font-bold tracking-tighter text-white mb-8">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-12 text-xs font-sync uppercase tracking-widest text-neutral-400">
              <div>
                <p className="text-neutral-600 mb-1">Cliente</p>
                <p className="text-white">{project.client}</p>
              </div>
              <div>
                <p className="text-neutral-600 mb-1">Año</p>
                <p className="text-white">{project.year}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
          <div className="lg:col-span-1">
            <h2 className="mb-6 text-2xl font-headline font-bold text-zinc-900 dark:text-white">El Desafío</h2>
            <p className="text-lg font-light leading-relaxed text-zinc-600 dark:text-neutral-400">
              {project.description}
            </p>
            <div className="mt-12 h-[1px] w-20 bg-[#1FCDD2]" />
          </div>

          <div className="lg:col-span-2 space-y-12">
            {project.gallery.slice(1).map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden bg-neutral-900"
              >
                {media.type === 'image' ? (
                  <img src={media.url} alt={media.caption} loading="lazy" className="w-full h-auto object-cover" />
                ) : (
                  <div className="relative aspect-video">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-20 h-20 bg-[#1FCDD2] text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <Play fill="black" size={24} />
                      </div>
                    </div>
                    <img src={project.gallery[0].url} loading="lazy" className="w-full h-full object-cover opacity-40 blur-sm" />
                  </div>
                )}
                {media.caption && (
                  <div className="border-t border-zinc-200/80 bg-zinc-100/80 p-6 backdrop-blur-sm dark:border-white/5 dark:bg-neutral-900/50">
                    <p className="font-sync text-sm uppercase tracking-widest text-zinc-600 dark:text-neutral-400">{media.caption}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="border-t border-zinc-200/80 py-32 text-center dark:border-white/5">
        <button 
          onClick={onClose}
          className="group flex flex-col items-center gap-6 mx-auto"
        >
          <span className="font-sync text-xs uppercase tracking-[0.5em] text-zinc-600 transition-colors group-hover:text-[#1FCDD2] dark:text-neutral-600">{backLabel}</span>
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-zinc-300/90 transition-all duration-300 group-hover:scale-110 group-hover:border-[#1FCDD2] dark:border-white/10">
             <X size={20} className="group-hover:rotate-90 transition-transform" />
          </div>
        </button>
      </section>
    </motion.div>
  );
};
