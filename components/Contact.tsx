
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
    <section className="rounded-t-[50px] bg-white px-6 py-24 text-zinc-900 md:rounded-t-[100px] md:px-12 dark:bg-zinc-950 dark:text-white">
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
            <p className="text-xl text-neutral-600 leading-relaxed max-w-md">
              Diligencia el formulario para contactarte. <br />
              <span className="text-black font-bold">Completa el formulario y muy pronto nos comunicaremos para agendar.</span>
            </p>
            
            <div className="flex gap-6 pt-6">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: '#1FCDD2', color: '#000', borderColor: '#1FCDD2' }}
                  className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-all interactive"
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
          className="rounded-[40px] border border-zinc-200/80 bg-zinc-50 p-8 md:p-12 dark:border-white/10 dark:bg-zinc-900/60"
        >
          {/* Indicador de Pasos */}
          <div className="flex justify-between items-center mb-12">
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-2 flex-1 relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-sync text-xs transition-all duration-500 z-10 ${
                  step >= s.id ? 'bg-[#1FCDD2] text-black' : 'bg-black/5 text-neutral-400'
                }`}>
                  {s.id}
                </div>
                <span className={`text-[8px] font-sync uppercase tracking-widest ${step >= s.id ? 'text-black' : 'text-neutral-400'}`}>{s.label}</span>
                {s.id < 3 && (
                  <div className={`absolute top-5 left-[60%] w-[80%] h-[1px] ${step > s.id ? 'bg-[#1FCDD2]' : 'bg-black/5'}`} />
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
                  <label className="text-[10px] font-sync uppercase tracking-widest text-neutral-400">Nombre</label>
                  <input 
                    type="text" 
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-[#1FCDD2] transition-colors text-xl font-light" 
                    placeholder="Tu nombre completo..." 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-sync uppercase tracking-widest text-neutral-400">Empresa</label>
                  <input 
                    type="text" 
                    value={formData.empresa}
                    onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                    className="w-full bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-[#1FCDD2] transition-colors text-xl font-light" 
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
                  <label className="text-[10px] font-sync uppercase tracking-widest text-neutral-400">Correo electrónico</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-[#1FCDD2] transition-colors text-xl font-light" 
                    placeholder="email@corporativo.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-sync uppercase tracking-widest text-neutral-400">Whatsapp</label>
                  <input 
                    type="tel" 
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-[#1FCDD2] transition-colors text-xl font-light" 
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
                  <label className="text-[10px] font-sync uppercase tracking-widest text-neutral-400">¿Cómo podemos ayudarte?</label>
                  <textarea 
                    rows={4} 
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    className="w-full bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-[#1FCDD2] transition-colors text-lg font-light resize-none" 
                    placeholder="Cuéntanos brevemente sobre tu proyecto..." 
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-black/5">
            {step > 1 && (
              <button 
                onClick={prevStep}
                className="flex items-center gap-2 text-neutral-400 hover:text-black transition-colors font-sync text-[10px] uppercase tracking-widest"
              >
                <ChevronLeft size={16} /> Anterior
              </button>
            )}
            
            <div className="flex-1" />

            {step < 3 ? (
              <button 
                onClick={nextStep}
                className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full font-sync uppercase text-[10px] tracking-widest overflow-hidden relative interactive"
              >
                <span className="relative z-10">Siguiente</span>
                <ChevronRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-[#1FCDD2] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            ) : (
              <button className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full font-sync uppercase text-[10px] tracking-widest overflow-hidden relative interactive">
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">Enviar Propuesta</span>
                <Send size={16} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-black transition-all duration-300" />
                <div className="absolute inset-0 bg-[#1FCDD2] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
