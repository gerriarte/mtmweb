
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems: { name: string; to: string }[] = [
  { name: 'Inicio', to: '/#home' },
  { name: 'Servicios', to: '/#services' },
  { name: 'Portfolio', to: '/#portfolio' },
  { name: 'Proyectos', to: '/proyectos' },
  { name: 'Crean2', to: '/crean2' },
  { name: 'Equipo', to: '/#team' },
  { name: 'Contacto', to: '/#contact' },
];

const overlayEase = [0.16, 1, 0.3, 1] as const;

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.hash, closeMenu]);

  const linkVariants = {
    hidden: { opacity: 0, y: 36 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.04 + i * 0.055, duration: 0.55, ease: overlayEase },
    }),
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,padding,color] duration-500 px-5 py-4 md:px-10 md:py-6 flex justify-between items-center ${
          scrolled || isMenuOpen
            ? 'bg-white/80 text-zinc-900 backdrop-blur-xl dark:bg-black/50 dark:text-white md:dark:bg-black/40 border-b border-zinc-200/60 dark:border-transparent'
            : 'bg-transparent text-white'
        }`}
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 group relative z-[60]"
        >
          <motion.span
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: overlayEase }}
            className="flex items-center"
          >
            <img
              src="/MTM%20-%20Blanco%20y%20azul.png"
              alt="Marca tu Marca — MTM"
              className="h-7 w-auto max-w-[min(72vw,280px)] md:h-9 md:max-w-[min(50vw,340px)] lg:h-10 object-contain object-left transition-transform duration-500 group-hover:scale-[1.02]"
              decoding="async"
            />
          </motion.span>
        </Link>

        <div className="flex items-center gap-2 md:gap-4 relative z-[60]">
          <ThemeToggle
            className={
              scrolled || isMenuOpen
                ? ''
                : 'border-white/25 bg-white/10 dark:border-white/15 dark:bg-white/[0.08]'
            }
          />

          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.5 }}>
            <Link
              to="/#contact"
              className={`inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full border text-[9px] md:text-[10px] font-sync uppercase tracking-[0.2em] transition-colors duration-300 interactive ${
                scrolled || isMenuOpen
                  ? 'border-zinc-300/80 text-zinc-900 hover:bg-[#1FCDD2] hover:text-black hover:border-[#1FCDD2] dark:border-white/15 dark:text-white'
                  : 'border-white/15 text-white hover:bg-[#1FCDD2] hover:text-black hover:border-[#1FCDD2]'
              }`}
            >
              Hablemos
              <ArrowUpRight size={14} className="opacity-70" aria-hidden />
            </Link>
          </motion.div>

          <motion.button
            type="button"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onClick={() => setIsMenuOpen(true)}
            className={`flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 font-sync text-[9px] md:text-[10px] uppercase tracking-[0.35em] transition-colors interactive ${
              scrolled || isMenuOpen
                ? 'text-zinc-800 hover:text-[#1FCDD2] dark:text-white/90 dark:hover:text-[#1FCDD2]'
                : 'text-white/90 hover:text-[#1FCDD2]'
            }`}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu-overlay"
          >
            <Menu size={20} strokeWidth={1.5} className="md:w-[22px] md:h-[22px]" aria-hidden />
            <span className="hidden sm:inline">Menú</span>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            id="site-menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Navegación principal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: overlayEase }}
            className="fixed inset-0 z-[200] flex flex-col bg-zinc-50 text-zinc-900 dark:bg-[#030303] dark:text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: overlayEase }}
              className="flex justify-between items-center px-5 py-5 md:px-10 md:py-8 border-b border-zinc-200/80 dark:border-white/[0.06]"
            >
              <Link to="/" onClick={closeMenu} className="opacity-90 hover:opacity-100 transition-opacity">
                <img
                  src="/MTM%20-%20Blanco%20y%20azul.png"
                  alt="Marca tu Marca — MTM"
                  className="h-7 md:h-9 w-auto max-w-[240px] object-contain object-left"
                  decoding="async"
                />
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                className="flex items-center gap-3 font-sync text-[10px] uppercase tracking-[0.35em] text-zinc-500 hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-white transition-colors interactive py-3 pl-4"
              >
                <span className="hidden sm:inline">Cerrar</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300/80 hover:border-[#1FCDD2]/60 hover:text-[#1FCDD2] dark:border-white/10 dark:hover:border-[#1FCDD2]/50 transition-colors">
                  <X size={22} strokeWidth={1.25} />
                </span>
              </button>
            </motion.div>

            <div className="flex-1 flex flex-col justify-center px-5 md:px-14 lg:px-20 py-10 overflow-y-auto">
              <nav className="max-w-5xl mx-auto w-full space-y-2 md:space-y-4">
                {navItems.map((item, i) => (
                  <motion.div key={item.name} custom={i} variants={linkVariants} initial="hidden" animate="show" exit="hidden">
                    <Link
                      to={item.to}
                      onClick={closeMenu}
                      className="group flex items-start gap-4 md:gap-10 py-3 md:py-4 border-b border-zinc-200/70 dark:border-white/[0.06] last:border-0 interactive"
                    >
                      <span className="font-sync text-[10px] md:text-xs text-zinc-500 dark:text-neutral-600 tabular-nums pt-2 md:pt-3 shrink-0 w-8 md:w-10">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-headline text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-900 group-hover:text-[#1FCDD2] dark:text-white dark:group-hover:text-[#1FCDD2] transition-colors duration-300 leading-[0.95]">
                        {item.name}
                      </span>
                      <ArrowUpRight
                        className="ml-auto mt-2 md:mt-4 w-5 h-5 md:w-6 md:h-6 text-zinc-400 dark:text-neutral-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                        aria-hidden
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.45, ease: overlayEase }}
              className="px-5 md:px-14 lg:px-20 py-8 md:py-10 border-t border-zinc-200/80 bg-zinc-100/80 dark:border-white/[0.06] dark:bg-black/40"
            >
              <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div>
                  <p className="font-sync text-[9px] uppercase tracking-[0.4em] text-zinc-500 dark:text-neutral-600 mb-3">¿Cómo podemos ayudarte?</p>
                  <a
                    href="mailto:info@mtmmarcatumarca.com"
                    className="text-lg md:text-xl text-zinc-900 hover:text-[#1FCDD2] dark:text-white dark:hover:text-[#1FCDD2] transition-colors interactive break-all"
                  >
                    info@mtmmarcatumarca.com
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 text-[10px] font-sync uppercase tracking-[0.2em] text-zinc-600 dark:text-neutral-500">
                  <a href="#" className="hover:text-[#1FCDD2] transition-colors interactive">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-[#1FCDD2] transition-colors interactive">
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
