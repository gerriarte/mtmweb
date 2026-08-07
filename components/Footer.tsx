
import React from 'react';
import { Link } from 'react-router-dom';
import { POLICY_CONTACT } from '../data/privacyPolicy';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-zinc-200/80 bg-zinc-100 dark:border-white/5 dark:bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          {/* Chip oscuro en modo claro para que el logo blanco/cian sea legible; transparente en oscuro */}
          <div className="rounded-2xl bg-zinc-900 px-5 py-4 dark:bg-transparent dark:p-0">
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
        </div>
        
        <div className="text-zinc-500 text-[10px] font-sync uppercase tracking-[0.2em] text-center md:text-left dark:text-neutral-500">
          © 2024 MTM CREATIVE AGENCY. <br className="md:hidden" /> TODOS LOS DERECHOS RESERVADOS.
          <br />
          <span className="normal-case tracking-normal">
            {POLICY_CONTACT.razonSocial} · NIT {POLICY_CONTACT.nit}
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-sync uppercase tracking-widest text-zinc-600 dark:text-neutral-500">
          <Link to="/crean2" className="hover:text-[#1FCDD2] transition-colors">Crean2</Link>
          <Link to="/politica-de-datos" className="hover:text-[#1FCDD2] transition-colors">
            Política de datos
          </Link>
          <Link to="/politica-de-datos#derechos" className="hover:text-[#1FCDD2] transition-colors">
            Habeas data
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-zinc-200/80 pt-8 text-center text-[11px] leading-relaxed text-zinc-500 md:text-left dark:border-white/5 dark:text-neutral-500">
        Tratamos tus datos personales conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015. Consulta nuestra{' '}
        <Link to="/politica-de-datos" className="text-[#1FCDD2] underline underline-offset-4 hover:opacity-80">
          Política de Tratamiento de Datos Personales
        </Link>{' '}
        o escríbenos a{' '}
        <a
          href={`mailto:${POLICY_CONTACT.emails[1]}`}
          className="text-[#1FCDD2] underline underline-offset-4 hover:opacity-80"
        >
          {POLICY_CONTACT.emails[1]}
        </a>{' '}
        para ejercer tus derechos como titular.
      </div>
    </footer>
  );
};
