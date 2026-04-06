
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Instagram, Linkedin, Twitter, HelpCircle, ChevronRight, ChevronLeft } from 'lucide-react';

export const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    empresa: '',
    mensaje: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const steps = [
    { id: 1, label: "Identidad" },
    { id: 2, label: "Conexión" },
    { id: 3, label: "Proyecto" }
  ];

  return (
    <section className="rounded-t-[50px] bg-zinc-50 px-6 py-24 text-zinc-950 md:rounded-t-[100px] md:px-12 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9] mb-10"
          >
            ¿LISTO <br /> PARA <br /> MARCAR?
          </motion.h2>
          
          <div className="space-y-6">
            <p className="text-xl text-zinc-700 leading-relaxed max-w-md dark:text-zinc-300">
              Diligencia el formulario para contactarte. <br />
              <span className="font-semibold text-zinc-900 dark:text-white">Completa el formulario y muy pronto nos comunicaremos para agendar.</span>
            </p>
            
            <div className="flex gap-6 pt-6">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: '#1FCDD2', color: '#000', borderColor: '#1FCDD2' }}
                  className="w-12 h-12 rounded-full border border-zinc-300 bg-white text-zinc-800 flex items-center justify-center transition-all dark:border-white/20 dark:bg-zinc-900 dark:text-zinc-100 interactive"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-zinc-200 bg-white p-8 shadow-sm ring-1 ring-zinc-950/5 md:p-12 dark:border-zinc-700 dark:bg-zinc-900 dark:ring-white/10"
        >
          {/* Indicador de Pasos */}
          <div className="flex justify-between items-center mb-12">
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-2 flex-1 relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-sync text-xs font-medium transition-all duration-500 z-10 ${
                  step >= s.id
                    ? 'bg-[#1FCDD2] text-zinc-950 shadow-sm'
                    : 'bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
                }`}>
                  {s.id}
                </div>
                <span
                  className={`text-[9px] font-sync uppercase tracking-widest ${
                    step >= s.id ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-500 dark:text-zinc-500'
                  }`}
                >
                  {s.label}
                </span>
                {s.id < 3 && (
                  <div
                    className={`absolute top-5 left-[60%] w-[80%] h-px ${
                      step > s.id ? 'bg-[#1FCDD2]' : 'bg-zinc-300 dark:bg-zinc-600'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <label className="text-[10px] font-sync uppercase tracking-widest text-zinc-600 dark:text-zinc-300">Nombre</label>
                  <input 
                    type="text" 
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full bg-transparent border-b border-zinc-400 py-4 text-xl font-light text-zinc-950 placeholder:text-zinc-500 focus:border-[#1FCDD2] focus:outline-none focus:ring-0 transition-colors dark:border-zinc-500 dark:text-zinc-50 dark:placeholder:text-zinc-500" 
                    placeholder="Tu nombre completo..." 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-sync uppercase tracking-widest text-zinc-600 dark:text-zinc-300">Empresa</label>
                  <input 
                    type="text" 
                    value={formData.empresa}
                    onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                    className="w-full bg-transparent border-b border-zinc-400 py-4 text-xl font-light text-zinc-950 placeholder:text-zinc-500 focus:border-[#1FCDD2] focus:outline-none focus:ring-0 transition-colors dark:border-zinc-500 dark:text-zinc-50 dark:placeholder:text-zinc-500" 
                    placeholder="Nombre de tu negocio..." 
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <label className="text-[10px] font-sync uppercase tracking-widest text-zinc-600 dark:text-zinc-300">Correo electrónico</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-zinc-400 py-4 text-xl font-light text-zinc-950 placeholder:text-zinc-500 focus:border-[#1FCDD2] focus:outline-none focus:ring-0 transition-colors dark:border-zinc-500 dark:text-zinc-50 dark:placeholder:text-zinc-500" 
                    placeholder="email@corporativo.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-sync uppercase tracking-widest text-zinc-600 dark:text-zinc-300">Whatsapp</label>
                  <input 
                    type="tel" 
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full bg-transparent border-b border-zinc-400 py-4 text-xl font-light text-zinc-950 placeholder:text-zinc-500 focus:border-[#1FCDD2] focus:outline-none focus:ring-0 transition-colors dark:border-zinc-500 dark:text-zinc-50 dark:placeholder:text-zinc-500" 
                    placeholder="+57 300 000 0000" 
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <label className="text-[10px] font-sync uppercase tracking-widest text-zinc-600 dark:text-zinc-300">¿Cómo podemos ayudarte?</label>
                  <textarea 
                    rows={4} 
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    className="w-full resize-none border-b border-zinc-400 bg-transparent py-4 text-lg font-light text-zinc-950 placeholder:text-zinc-500 focus:border-[#1FCDD2] focus:outline-none focus:ring-0 transition-colors dark:border-zinc-500 dark:text-zinc-50 dark:placeholder:text-zinc-500" 
                    placeholder="Cuéntanos brevemente sobre tu proyecto..." 
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-700">
            {step > 1 && (
              <button 
                onClick={prevStep}
                type="button"
                className="flex items-center gap-2 font-sync text-[10px] uppercase tracking-widest text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                <ChevronLeft size={16} /> Anterior
              </button>
            )}
            
            <div className="flex-1" />

            {step < 3 ? (
              <button 
                type="button"
                onClick={nextStep}
                className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-zinc-950 px-10 py-5 font-sync text-[10px] uppercase tracking-widest text-white interactive dark:bg-zinc-100 dark:text-zinc-950"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-zinc-950">Siguiente</span>
                <ChevronRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:text-zinc-950" />
                <div className="absolute inset-0 bg-[#1FCDD2] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            ) : (
              <button type="button" className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-zinc-950 px-10 py-5 font-sync text-[10px] uppercase tracking-widest text-white interactive dark:bg-zinc-100 dark:text-zinc-950">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-zinc-950">Enviar Propuesta</span>
                <Send size={16} className="relative z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-zinc-950" />
                <div className="absolute inset-0 bg-[#1FCDD2] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
