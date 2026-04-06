
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface StatItemProps {
  number: number;
  label: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, number, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => setDisplayValue(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, number]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-8 glass-panel rounded-3xl group hover:border-[#1FCDD2]/30 transition-all duration-500">
      <div className="relative mb-4">
        <motion.span 
          className="text-5xl md:text-7xl font-headline font-bold text-[#1FCDD2] tracking-tighter"
        >
          {displayValue}{suffix}
        </motion.span>
        <div className="absolute -inset-4 bg-[#1FCDD2]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <p className="max-w-[150px] text-[10px] font-sync uppercase leading-relaxed tracking-[0.3em] text-zinc-600 md:text-xs dark:text-neutral-400">
        {label}
      </p>
    </div>
  );
};

export const Stats: React.FC = () => {
  const stats = [
    { number: 40, label: "Marcas Construidas" },
    { number: 12, label: "Integrantes" },
    { number: 180, label: "Proyectos Ejecutados" },
    { number: 8, label: "Años de Experiencia" },
  ];

  return (
    <section className="border-y border-zinc-200/80 bg-zinc-100 py-24 px-6 transition-colors dark:border-white/5 dark:bg-[#050505] md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-headline font-bold tracking-tighter text-zinc-900 md:text-6xl dark:text-white"
          >
            ¿QUÉ HEMOS <span className="text-zinc-400 dark:text-neutral-600">LOGRADO?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl font-sync text-sm uppercase tracking-widest text-zinc-600 dark:text-neutral-500"
          >
            En estos años de recorrido, hemos alcanzado felizmente estos resultados
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <StatItem number={stat.number} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
