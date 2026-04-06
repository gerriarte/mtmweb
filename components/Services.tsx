
import React from 'react';
import { motion } from 'framer-motion';
import { Video, Camera, Hash, Globe, BarChart, PenTool } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: string) => void;
}

const serviceList = [
  {
    id: "audiovisual",
    icon: <Video className="w-8 h-8" />,
    title: "Producción Audiovisual",
    desc: "Video, foto, jingle y animaciones con la esencia de tu marca: contenido audiovisual de impacto.",
    color: "from-[#1FCDD2] to-blue-600"
  },
  {
    id: "fotografia",
    icon: <Camera className="w-8 h-8" />,
    title: "Fotografía & FotoLinkedIn",
    desc: "Potencia tu perfil de LinkedIn y tus canales: sesión profesional, asesoría de imagen y fotos editadas.",
    color: "from-[#1FCDD2] to-emerald-500"
  },
  {
    id: "branding",
    icon: <PenTool className="w-8 h-8" />,
    title: "Branding & Diseño",
    desc: "Construye una marca inolvidable: identidad visual, tono de voz y storytelling que conecta con tu audiencia.",
    color: "from-[#1FCDD2] to-cyan-700"
  },
  {
    id: "strategy",
    icon: <Hash className="w-8 h-8" />,
    title: "Estrategia Digital",
    desc: "Marketing digital, contenido y SEM: soluciones personalizadas para conectar con tu audiencia y crecer en línea.",
    color: "from-[#1FCDD2] to-neutral-400"
  },
  {
    id: "web",
    icon: <Globe className="w-8 h-8" />,
    title: "Web Experience",
    desc: "Tu vitrina al mundo digital: sitios que convierten visitantes en clientes, con UX, velocidad y SEO técnico.",
    color: "from-[#1FCDD2] to-indigo-600"
  },
  {
    id: "ads",
    icon: <BarChart className="w-8 h-8" />,
    title: "Ads Management",
    desc: "Maximización de inversión a través de pauta publicitaria inteligente en Google y Meta.",
    color: "from-[#1FCDD2] to-blue-900"
  }
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-100 transition-colors dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-6"
          >
            LO QUE <span className="text-zinc-400 dark:text-neutral-600">HACEMOS</span>
          </motion.h2>
          <div className="w-20 h-1 bg-[#1FCDD2]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => onSelectService(service.id)}
              className="glass-panel p-10 rounded-3xl relative group overflow-hidden cursor-pointer"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              
              <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-[#1FCDD2]/10 group-hover:text-[#1FCDD2] transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4 text-zinc-900 dark:text-white">{service.title}</h3>
              <p className="text-zinc-600 leading-relaxed dark:text-neutral-400">
                {service.desc}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-xs font-sync uppercase tracking-widest text-zinc-500 group-hover:text-[#1FCDD2] dark:text-white/50 transition-colors">
                Saber más <span className="text-xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
