
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SECTIONS = [
  { id: 'home', label: 'Inicio' },
  { id: 'services', label: 'Servicios' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'team', label: 'Equipo' },
  { id: 'contact', label: 'Contacto' },
] as const;

export const SectionScrollNav: React.FC = () => {
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers: ScrollTrigger[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top 45%',
          end: 'bottom 45%',
          onEnter: () => setActive(id),
          onEnterBack: () => setActive(id),
        })
      );
    });

    gsap.fromTo(
      '[data-scroll-nav-item]',
      { autoAlpha: 0, x: 16 },
      { autoAlpha: 1, x: 0, duration: 0.45, stagger: 0.08, ease: 'power2.out', delay: 0.15 }
    );

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className="fixed right-5 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 pointer-events-auto"
      aria-label="Secciones de la página"
    >
      {SECTIONS.map(({ id, label }, i) => {
        const isActive = active === id;
        return (
          <motion.button
            key={id}
            type="button"
            onClick={() => scrollTo(id)}
            data-scroll-nav-item
            className="group relative flex items-center justify-end gap-3 interactive outline-none"
            aria-label={`Ir a ${label}`}
            aria-current={isActive ? 'true' : undefined}
            whileHover={{ x: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          >
            <span
              className={`font-sync text-[8px] uppercase tracking-[0.25em] transition-opacity duration-300 ${
                isActive
                  ? 'text-[#1FCDD2] opacity-100'
                  : 'text-zinc-400 opacity-0 group-hover:opacity-70 dark:text-neutral-500'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className={`block rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive
                  ? 'h-10 w-[3px] bg-[#1FCDD2] shadow-[0_0_12px_rgba(31,205,210,0.5)]'
                  : 'h-2 w-[3px] bg-zinc-400/50 group-hover:h-6 group-hover:bg-zinc-500 dark:bg-white/25 dark:group-hover:bg-white/50'
              }`}
            />
          </motion.button>
        );
      })}
    </nav>
  );
};
