
import React from 'react';
import { motion } from 'framer-motion';

/** Archivos en `/public/Marcas` — clientes y aliados MTM */
const clientLogos = [
  '/Marcas/logos-actualizados-web-06.png',
  '/Marcas/logos-actualizados-web-07.png',
  '/Marcas/logos-actualizados-web-08.png',
  '/Marcas/logos-actualizados-web-09.png',
  '/Marcas/logos-actualizados-web-12.png',
  '/Marcas/logos-actualizados-web-23.png',
  '/Marcas/logos-actualizados-web-26.png',
  '/Marcas/logos-actualizados-web-30.png',
  '/Marcas/logos-actualizados-web-33.png',
  '/Marcas/logos-actualizados-web-34.png',
  '/Marcas/logos-actualizados-web-38.png',
] as const;

export const Clients: React.FC = () => {
  const infiniteClients = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="overflow-hidden border-t border-zinc-200/80 bg-zinc-50 py-24 transition-colors dark:border-white/5 dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-headline font-bold tracking-tighter mb-4"
        >
          CLIENTES <span className="text-zinc-400 dark:text-neutral-600">Y ALIADOS</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sync text-[10px] uppercase tracking-widest text-zinc-600 md:text-xs dark:text-neutral-500"
        >
          Ellos ya conocieron la energía MTM, faltas tú.
        </motion.p>
      </div>

      <div className="relative flex">
        <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-zinc-50 to-transparent pointer-events-none dark:from-[#050505]" />
        <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-zinc-50 to-transparent pointer-events-none dark:from-[#050505]" />

        <motion.div
          className="flex gap-12 md:gap-[4.5rem] items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {infiniteClients.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="group flex flex-col items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 interactive shrink-0"
            >
              <div className="h-40 sm:h-48 md:h-64 w-[min(36rem,calc(100vw-2.5rem))] md:w-[44rem] md:max-w-none flex items-center justify-center px-6 md:px-8">
                <img
                  src={logo}
                  alt={`Logo de marca aliada ${(index % clientLogos.length) + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full w-auto object-contain object-center transition-all duration-500"
                />
              </div>
              <span className="mt-4 text-[8px] font-sync uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity text-[#1FCDD2]">
                Creative Partner
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 text-center">
        <p className="text-neutral-600 font-sync text-[10px] uppercase tracking-[0.5em]">
          Estas son marcas que han confiado en nosotros
        </p>
      </div>
    </section>
  );
};
