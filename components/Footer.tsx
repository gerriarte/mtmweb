
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-zinc-200/80 bg-zinc-100 dark:border-white/5 dark:bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src="/MTM%20-%20Blanco%20y%20azul.png"
            alt="MTM — Marca tu Marca"
            className="h-14 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity dark:hidden"
            decoding="async"
          />
          <img
            src="/MTM%20-%20Blanco.png"
            alt="MTM — Marca tu Marca"
            className="hidden h-14 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity dark:block"
            decoding="async"
          />
        </div>
        
        <div className="text-zinc-500 text-[10px] font-sync uppercase tracking-[0.2em] text-center md:text-left dark:text-neutral-500">
          © 2024 MTM CREATIVE AGENCY. <br className="md:hidden" /> TODOS LOS DERECHOS RESERVADOS.
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-sync uppercase tracking-widest text-zinc-600 dark:text-neutral-500">
          <Link to="/proyectos" className="hover:text-[#1FCDD2] transition-colors">Proyectos</Link>
          <Link to="/crean2" className="hover:text-[#1FCDD2] transition-colors">Crean2</Link>
          <a href="#" className="hover:text-[#1FCDD2] transition-colors">Privacidad</a>
          <a href="#" className="hover:text-[#1FCDD2] transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
};
