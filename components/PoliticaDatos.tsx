
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CustomCursor } from './CustomCursor';
import {
  POLICY_CONTACT,
  POLICY_DATE,
  POLICY_SECTIONS,
  POLICY_VERSION,
  type PolicyBlock,
} from '../data/privacyPolicy';

const Block: React.FC<{ block: PolicyBlock }> = ({ block }) => {
  switch (block.type) {
    case 'p':
      return <p className="text-[15px] leading-relaxed text-zinc-600 md:text-base dark:text-neutral-400">{block.text}</p>;

    case 'h3':
      return (
        <h3 className="pt-2 font-sync text-[11px] uppercase tracking-[0.25em] text-zinc-900 dark:text-white">
          {block.text}
        </h3>
      );

    case 'ul':
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-zinc-600 md:text-base dark:text-neutral-400">
              <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1FCDD2]" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'dl':
      return (
        <dl className="space-y-4">
          {block.items.map((item) => (
            <div key={item.term}>
              <dt className="font-semibold text-zinc-900 dark:text-white">{item.term}</dt>
              <dd className="text-[15px] leading-relaxed text-zinc-600 md:text-base dark:text-neutral-400">{item.text}</dd>
            </div>
          ))}
        </dl>
      );

    case 'table':
      return (
        <div className="overflow-x-auto rounded-2xl border border-zinc-200/90 dark:border-white/10">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <tbody>
              {block.rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i === 0 ? '' : 'border-t border-zinc-200/90 dark:border-white/10'}
                >
                  <th
                    scope="row"
                    className="w-[42%] bg-zinc-100/70 px-5 py-4 align-top font-sync text-[10px] uppercase tracking-widest text-zinc-700 dark:bg-white/[0.03] dark:text-neutral-300"
                  >
                    {row.label}
                  </th>
                  <td className="px-5 py-4 align-top text-zinc-600 dark:text-neutral-400">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
};

export const PoliticaDatos: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace(/^#/, '');
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }, [location.hash, location.pathname]);

  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 transition-colors dark:bg-[#050505] dark:text-white">
      <CustomCursor />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#1FCDD2] z-[60] origin-left" style={{ scaleX }} />

      <Navbar />

      <main>
        {/* Encabezado */}
        <section className="relative overflow-hidden px-6 pt-28 pb-14 md:px-12 md:pt-36 md:pb-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1FCDD2]/5 via-transparent to-transparent" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 font-sync text-[10px] uppercase tracking-[0.25em] text-zinc-500 transition-colors hover:text-[#1FCDD2] dark:text-neutral-500 interactive"
            >
              <ArrowLeft size={14} aria-hidden />
              Volver al inicio
            </Link>

            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1FCDD2]/25 bg-[#1FCDD2]/10 px-4 py-2 font-sync text-[10px] uppercase tracking-[0.25em] text-[#1FCDD2]">
              <ShieldCheck size={14} aria-hidden />
              Protección de datos
            </p>

            <h1 className="mb-6 font-headline text-4xl font-bold leading-[0.95] tracking-tighter text-zinc-900 md:text-6xl dark:text-white">
              Política de tratamiento de datos personales
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-neutral-400">
              Elaborada por {POLICY_CONTACT.razonSocial} en cumplimiento de la Ley 1581 de 2012 y el Decreto 1074 de 2015.
            </p>

            <p className="mt-6 font-sync text-[10px] uppercase tracking-[0.25em] text-zinc-500 dark:text-neutral-500">
              Versión {POLICY_VERSION} · Fecha de emisión: {POLICY_DATE}
            </p>
          </div>
        </section>

        {/* Índice */}
        <section className="px-6 pb-4 md:px-12">
          <nav aria-label="Contenido de la política" className="mx-auto max-w-4xl">
            <div className="rounded-[28px] border border-zinc-200/90 bg-white p-6 shadow-sm md:p-8 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="mb-5 font-sync text-[10px] uppercase tracking-[0.25em] text-zinc-600 dark:text-neutral-500">
                Contenido
              </p>
              <ol className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                {POLICY_SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-3 py-1 text-sm text-zinc-600 transition-colors hover:text-[#1FCDD2] dark:text-neutral-400 interactive"
                    >
                      <span className="font-sync text-[11px] tabular-nums text-zinc-400 dark:text-neutral-600">
                        {section.number.padStart(2, '0')}
                      </span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
        </section>

        {/* Secciones */}
        <section className="px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-4xl space-y-14 md:space-y-20">
            {POLICY_SECTIONS.map((section) => (
              <motion.article
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                className="scroll-mt-28"
              >
                <h2 className="mb-6 font-headline text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl dark:text-white">
                  <span className="mr-3 text-[#1FCDD2]">{section.number}.</span>
                  {section.title}
                </h2>
                <div className="space-y-5">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Canal de contacto */}
        <section className="border-t border-zinc-200/80 bg-zinc-100/80 px-6 py-16 md:px-12 md:py-20 dark:border-white/5 dark:bg-black/40">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 font-headline text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl dark:text-white">
              ¿Quieres ejercer tus derechos?
            </h2>
            <p className="mb-8 max-w-2xl text-zinc-600 dark:text-neutral-400">
              Escríbenos indicando tu nombre completo, documento de identidad, la descripción del derecho que deseas
              ejercer y tus datos de contacto.
            </p>
            <div className="flex flex-wrap gap-4">
              {POLICY_CONTACT.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}?subject=Ejercicio%20de%20derechos%20-%20datos%20personales`}
                  className="rounded-full border border-zinc-300/90 px-6 py-3 font-sync text-[10px] uppercase tracking-[0.2em] text-zinc-800 transition-colors hover:border-[#1FCDD2]/60 hover:text-[#1FCDD2] dark:border-white/15 dark:text-white interactive"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
