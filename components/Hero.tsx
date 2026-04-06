
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Play, X, MessageSquare, ArrowDown } from 'lucide-react';

type HeroTitlePhase = 'mtm' | 'makeThemMove' | 'marcaTuMarca';

const letterVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  }),
  exit: { opacity: 0, y: -16, filter: 'blur(6px)', transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.2 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
  exit: { opacity: 0, scale: 0.98, filter: 'blur(8px)', transition: { duration: 0.4 } },
};

export const Hero: React.FC = () => {
  const [showFullVideo, setShowFullVideo] = useState(false);
  const [titlePhase, setTitlePhase] = useState<HeroTitlePhase>('mtm');

  useEffect(() => {
    const toMake = window.setTimeout(() => setTitlePhase('makeThemMove'), 2400);
    const toMarca = window.setTimeout(() => setTitlePhase('marcaTuMarca'), 2400 + 4200);
    return () => {
      window.clearTimeout(toMake);
      window.clearTimeout(toMarca);
    };
  }, []);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const videoId = '_Ywxc2KsjTE';

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Immersive Video Background */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black"
      >
        {/* Ambient Gradient Fallback */}
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
             <div className="absolute top-1/4 left-1/4 w-full h-full bg-[#1FCDD2]/20 blur-[150px] rounded-full animate-pulse" />
             <div className="absolute bottom-1/4 right-1/4 w-full h-full bg-blue-900/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
        <div className="absolute inset-0 bg-black/20 z-10 backdrop-grayscale-[0.2]" />
        
        <iframe
          className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] md:w-[130vw] md:h-[130vh] lg:w-[110vw] lg:h-[110vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover opacity-60"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1&origin=${origin}&playsinline=1&si=hmlom_JiPklOIMyf`}
          title="MTM Cinematic Reel"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </motion.div>

      {/* Decorative Scanlines or Grid */}
      <div className="absolute inset-0 pointer-events-none z-[5] opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-[#1FCDD2]" />
            <span className="text-[10px] md:text-xs font-sync uppercase tracking-[0.5em] text-[#1FCDD2]">
              Creative Production House
            </span>
            <div className="h-[1px] w-8 bg-[#1FCDD2]" />
          </div>
          
          <div className="min-h-[1.1em] md:min-h-[1.05em] mb-10 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {titlePhase === 'mtm' && (
                <motion.h1
                  key="phase-mtm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-6xl md:text-9xl lg:text-[11rem] font-headline font-bold leading-[0.85] tracking-tighter text-white flex justify-center"
                  aria-label="MTM"
                >
                  {['M', 'T', 'M'].map((ch, i) => (
                    <motion.span
                      key={ch + i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="inline-block"
                    >
                      {ch}
                    </motion.span>
                  ))}
                </motion.h1>
              )}

              {titlePhase === 'makeThemMove' && (
                <motion.h1
                  key="phase-mtm-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-bold leading-[1.05] tracking-tight text-white text-center max-w-5xl px-2 flex flex-wrap justify-center gap-x-3 md:gap-x-5 gap-y-1"
                  aria-label="Make Them Move"
                >
                  {['Make', 'Them', 'Move'].map((word, i) => (
                    <motion.span
                      key={word}
                      custom={i}
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="inline-block whitespace-nowrap"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
              )}

              {titlePhase === 'marcaTuMarca' && (
                <motion.h1
                  key="phase-marca-tu-marca"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-6xl md:text-9xl lg:text-[11rem] font-headline font-bold leading-[0.85] tracking-tighter text-white"
                  aria-label="Marca tu Marca"
                >
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Marca
                  </motion.span>
                  <motion.span
                    className="block text-gradient"
                    initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    tu Marca.
                  </motion.span>
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          
          <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Estrategias disruptivas y producción audiovisual de alto nivel para marcas que no temen ser protagonistas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center"
        >
          {/* Botón Hablemos Ahora - Prominente #1FCDD2 */}
          <Link
            to="/#contact"
            className="group relative px-10 py-5 bg-[#1FCDD2] text-black rounded-full font-sync text-[10px] md:text-xs uppercase font-bold tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(31,205,210,0.3)] flex items-center gap-3 interactive"
          >
            <MessageSquare size={16} />
            <span className="relative z-10">Hablemos Ahora</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link
            to="/proyectos"
            className="group relative px-10 py-5 bg-white text-black rounded-full font-sync text-[10px] md:text-xs uppercase font-bold tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 interactive"
          >
            <span className="relative z-10">Ver Proyectos</span>
            <div className="absolute inset-0 bg-[#1FCDD2] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          
          <button 
            onClick={() => setShowFullVideo(true)}
            className="flex items-center gap-3 px-10 py-5 border border-white/10 backdrop-blur-md rounded-full font-sync text-[10px] md:text-xs uppercase tracking-widest hover:bg-white/5 transition-all duration-300 group"
          >
            <div className="w-8 h-8 bg-[#1FCDD2] rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
              <Play size={14} fill="black" />
            </div>
            <span>Reproducir Reel</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll to explore — patrón tipo agencias premium */}
      <motion.button
        type="button"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 text-[#1FCDD2] z-10 interactive group cursor-pointer bg-transparent border-0 p-0"
        aria-label="Desplazar a servicios"
      >
        <span className="text-[9px] md:text-[10px] font-sync uppercase tracking-[0.45em] text-white/70 group-hover:text-[#1FCDD2] transition-colors">
          Scroll to explore
        </span>
        <span className="relative flex h-14 w-8 items-start justify-center overflow-hidden rounded-full border border-white/15 bg-black/20 backdrop-blur-sm">
          <motion.span
            className="mt-2 block h-2 w-0.5 rounded-full bg-[#1FCDD2]"
            animate={{ y: [0, 18, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
          />
          <ArrowDown
            className="absolute bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 text-white/40 group-hover:text-[#1FCDD2] transition-colors"
            strokeWidth={1.5}
            aria-hidden
          />
        </span>
      </motion.button>

      {/* Full Screen Video Modal */}
      <AnimatePresence>
        {showFullVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-20"
          >
            <button 
              onClick={() => setShowFullVideo(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={40} strokeWidth={1} />
            </button>
            <div className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                title="MTM Full Showreel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
