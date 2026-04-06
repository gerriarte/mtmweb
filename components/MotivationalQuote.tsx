
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Settings } from 'lucide-react';

export const MotivationalQuote: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-zinc-50 px-6 py-32 transition-colors dark:bg-[#050505]">
      {/* Background Decorative Element: Machine Gear Symbolism */}
      <motion.div 
        style={{ rotate }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]"
      >
        <Settings size={800} strokeWidth={0.5} className="text-zinc-900 dark:text-white" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-headline font-bold uppercase italic leading-[1.1] tracking-tighter text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
              "CONSTRUYAMOS JUNTOS UNA <span className="text-[#1FCDD2]">ESTRUCTURA DIGITAL</span> PARA TU MARCA, QUE FUNCIONE Y QUE PERDURE, JUNTOS FUNCIONAMOS COMO UNA GRAN <span className="text-zinc-500 dark:text-neutral-500">MÁQUINA</span>."
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-[2px] bg-[#1FCDD2] my-12"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="font-headline text-lg font-bold tracking-widest text-zinc-900 md:text-xl dark:text-white">
              DAVID GUERRERO
            </p>
            <p className="font-sync text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#1FCDD2]">
              CEO MTM MARCA TU MARCA
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute left-1/2 top-0 w-[1px] h-32 bg-gradient-to-b from-[#1FCDD2]/30 to-transparent" />
      <div className="absolute left-1/2 bottom-0 w-[1px] h-32 bg-gradient-to-t from-[#1FCDD2]/30 to-transparent" />
    </section>
  );
};
