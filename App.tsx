
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Home } from './components/Home';
import { Crean2 } from './components/Crean2';
import { Proyectos } from './components/Proyectos';
import { CaseStudyProjectPage } from './components/CaseStudyProjectPage';

const pageEase = [0.16, 1, 0.3, 1] as const;

function AnimatedRoutes() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.45, ease: pageEase }}
        className="min-h-screen"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/crean2" element={<Crean2 />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/branding/:slug" element={<CaseStudyProjectPage />} />
          <Route path="/proyectos/redes-sociales/:slug" element={<CaseStudyProjectPage />} />
          <Route path="/proyectos/caso/:slug" element={<CaseStudyProjectPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <AnimatePresence>
          {loading ? (
            <motion.div
              key="loader"
              className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-zinc-50 dark:bg-[#050505]"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.75, ease: pageEase }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center flex flex-col items-center"
            >
              <div
                className="mb-8 flex justify-center"
                style={{ perspective: 900 }}
              >
                <motion.div
                  className="will-change-transform"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{
                    rotateY: [0, 14, 0, -9, 0],
                    rotateZ: [0, 1.5, 0, -1.5, 0],
                  }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: [0.45, 0.05, 0.55, 0.95],
                  }}
                >
                  <motion.img
                    src="/MTM%20-%20Blanco.png"
                    alt="MTM — Marca tu Marca"
                    className="w-28 h-28 md:w-32 md:h-32 object-contain block [transform:translateZ(0)]"
                    decoding="async"
                    animate={{
                      scale: [1, 1.06, 1],
                      opacity: [0.92, 1, 0.92],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              </div>
              <div className="w-48 h-[2px] bg-neutral-800 relative">
                <motion.div
                  className="absolute inset-0 bg-[#1FCDD2]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
              <p className="mt-6 text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-sync dark:text-neutral-500">
                MARCA TU MARCA
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: pageEase }}
          >
            <BrowserRouter>
              <AnimatedRoutes />
            </BrowserRouter>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default App;
