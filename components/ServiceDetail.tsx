
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Rocket, Zap, Award, ArrowUpRight, Globe, Hash, BarChart, Video, Camera } from 'lucide-react';
import { ProjectDetail } from './ProjectDetail';
import {
  getBrandingProjects,
  getWebProjects,
  getStrategyProjects,
  getAudiovisualProjects,
  getFotografiaProjects,
  type PortfolioProject,
} from '../data/portfolioData';

interface ServiceDetailProps {
  serviceType: string;
  onClose: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceType, onClose }) => {
  const isBranding = serviceType === 'branding';
  const isWeb = serviceType === 'web';
  const isStrategy = serviceType === 'strategy';
  const isAudiovisual = serviceType === 'audiovisual';
  const isFotografia = serviceType === 'fotografia' || serviceType === 'social';
  const [brandingProject, setBrandingProject] = useState<PortfolioProject | null>(null);
  const [webProject, setWebProject] = useState<PortfolioProject | null>(null);
  const [strategyProject, setStrategyProject] = useState<PortfolioProject | null>(null);
  const [audiovisualProject, setAudiovisualProject] = useState<PortfolioProject | null>(null);
  const [fotografiaProject, setFotografiaProject] = useState<PortfolioProject | null>(null);
  const brandingProjects = getBrandingProjects();
  const webProjects = getWebProjects();
  const strategyProjects = getStrategyProjects();
  const audiovisualProjects = getAudiovisualProjects();
  const fotografiaProjects = getFotografiaProjects();
  const nestedProjectOpen =
    !!brandingProject ||
    !!webProject ||
    !!strategyProject ||
    !!audiovisualProject ||
    !!fotografiaProject;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] overflow-y-auto bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white"
    >
      <button 
        type="button"
        onClick={onClose}
        className={`fixed top-8 right-8 z-[130] w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#1FCDD2] hover:text-black transition-all duration-300 group ${nestedProjectOpen ? 'opacity-0 pointer-events-none' : ''}`}
        aria-hidden={nestedProjectOpen}
      >
        <X className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        {isBranding ? (
          <div className="space-y-24">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <span className="text-[#1FCDD2] font-sync text-sm uppercase tracking-[0.4em] mb-6 block">Especialidad: Branding</span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter leading-[0.95] mb-8">
                  CONSTRUYE UNA MARCA INOLVIDABLE QUE <span className="text-gradient">CONQUISTE A TU AUDIENCIA.</span>
                </h1>
                <p className="text-xl text-neutral-400 leading-relaxed font-light max-w-xl">
                  En un mundo donde la primera impresión es decisiva, tu identidad visual es la clave para destacar.{' '}
                  <span className="text-white font-bold">Las marcas visualmente consistentes son 3.5 veces más memorables.</span>
                </p>
                <a
                  href="https://mtmmarcatumarca.com/brandlandingpage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-[#1FCDD2] font-sync text-xs uppercase tracking-widest hover:underline"
                >
                  Ver landing de branding →
                </a>
              </motion.div>

              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative aspect-square glass-panel rounded-[40px] overflow-hidden flex items-center justify-center p-20"
              >
                <div className="absolute inset-0 bg-[#1FCDD2]/5 animate-pulse" />
                <img 
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Branding Process"
                  className="w-full h-full object-cover rounded-3xl mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-10 left-10 right-10 bg-black/80 backdrop-blur-xl p-8 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-sync uppercase tracking-widest text-[#1FCDD2] mb-2">Impacto Visual</p>
                  <p className="text-white text-sm font-light italic">
                    &ldquo;El primer impacto es tu imagen ¿cómo quieres que te recuerden?&rdquo;
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Recarga tu marca section */}
            <div className="bg-[#1FCDD2] text-black rounded-[50px] p-12 md:p-24 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Zap size={300} strokeWidth={1} />
              </div>
              <div className="max-w-4xl relative z-10">
                <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tighter mb-8">RECARGA TU MARCA.</h2>
                <p className="text-lg md:text-xl leading-relaxed mb-8">
                  Recarga tu marca con nuestro servicio de branding. Destaca en un mercado saturado con una identidad que conecte
                  emocionalmente con los sentidos. Despierta el deseo de tus clientes contando una historia a través de tu marca.
                  Da el paso hacia el éxito ahora. Descubre cómo nuestro servicio puede impulsar tu negocio.
                </p>
                <p className="text-xl md:text-2xl font-bold leading-relaxed mb-10">
                  ¡Contáctanos y haz que tu marca destaque!
                </p>
                <a
                  href="https://mtmmarcatumarca.com/brandlandingpage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-black text-white px-10 py-5 rounded-full font-sync uppercase text-xs tracking-widest hover:scale-105 transition-transform"
                >
                  Ir al formulario en la web MTM
                </a>
              </div>
            </div>

            {/* Casos de branding: acceso a proyectos */}
            <div className="border-t border-white/10 pt-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tighter mb-2">
                    PROYECTOS DE <span className="text-[#1FCDD2]">BRANDING</span>
                  </h2>
                  <p className="text-neutral-500 font-sync text-xs uppercase tracking-widest max-w-2xl">
                    Entra a cada caso para ver el desafío, cliente y piezas del proyecto.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {brandingProjects.map((project) => (
                  <motion.button
                    key={project.id}
                    type="button"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    onClick={() => setBrandingProject(project)}
                    className="group relative text-left rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/50 hover:border-[#1FCDD2]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1FCDD2]"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.img}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-sync uppercase tracking-widest text-[#1FCDD2] mb-1 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-headline font-bold text-white leading-tight pr-2">
                          {project.title}
                        </h3>
                        <p className="text-neutral-500 text-xs mt-1">{project.client} · {project.year}</p>
                      </div>
                      <span className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#1FCDD2] group-hover:text-black group-hover:border-[#1FCDD2] transition-colors">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Tu Marca, Tu Diferencia */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-20">
              <div>
                <h2 className="text-3xl font-headline font-bold mb-6 flex items-center gap-4">
                  <Rocket className="text-[#1FCDD2]" /> TU MARCA, TU DIFERENCIA
                </h2>
                <p className="text-neutral-400 font-light mb-12 max-w-xl">
                  Desarrollamos estrategias de branding integrales que incluyen:
                </p>
                <div className="space-y-8">
                  {[
                    "Identidad visual única y memorable",
                    "Tono de voz y mensaje que resuena con tu audiencia",
                    "Elementos de marca consistentes en todos los puntos de contacto",
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-6 glass-panel rounded-2xl"
                    >
                      <CheckCircle2 className="text-[#1FCDD2] shrink-0" />
                      <p className="text-lg text-neutral-300 font-light">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-headline font-bold mb-12 flex items-center gap-4">
                  <Award className="text-[#1FCDD2]" /> ¿POR QUÉ ELEGIRNOS?
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    "Proceso estratégico basado en investigación de mercado",
                    "Equipo creativo con experiencia en múltiples industrias",
                    "Acompañamiento continuo en la implementación",
                  ].map((item, i) => (
                    <div key={i} className="p-8 border border-white/5 rounded-3xl hover:bg-white/5 transition-colors">
                      <p className="text-lg text-neutral-300 font-light flex gap-3">
                        <span className="text-[#1FCDD2] shrink-0">•</span>
                        <span>{item}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer de detalle */}
            <div className="text-center py-20 border-t border-white/5">
              <p className="text-2xl italic text-neutral-500 mb-12 font-light">
                &ldquo;Los creativos dejamos pasión en todo lo que hacemos&rdquo;
              </p>
              <h3 className="text-4xl font-headline font-bold mb-6">TU ÉXITO ES NUESTRA PRIORIDAD</h3>
              <p className="text-neutral-400 max-w-2xl mx-auto mb-6 leading-relaxed">
                Más que un proveedor de servicios, somos tu socio estratégico en el desarrollo y crecimiento de tu marca.
              </p>
              <p className="text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                Tu marca es mucho más que un logo: es la historia que conecta con tus clientes.
              </p>
              <button 
                onClick={onClose}
                className="group flex flex-col items-center gap-6 mx-auto"
              >
                <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#1FCDD2] group-hover:scale-110 transition-all duration-300">
                   <X size={20} className="group-hover:rotate-90 transition-transform" />
                </div>
                <span className="text-[#1FCDD2] font-sync text-[10px] uppercase tracking-[0.4em]">Cerrar Detalle</span>
              </button>
            </div>
          </div>
        ) : isWeb ? (
          <div className="space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <span className="text-[#1FCDD2] font-sync text-sm uppercase tracking-[0.4em] mb-6 block">
                  Especialidad: Web Experience
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter leading-[1.05] mb-8">
                  TU VITRINA AL MUNDO DIGITAL:{' '}
                  <span className="text-gradient">SITIOS WEB QUE CONVIERTEN.</span>
                </h1>
                <p className="text-xl text-neutral-400 leading-relaxed font-light max-w-xl">
                  Una página web no es solo tu presencia online: es tu vendedor 24/7. Creamos experiencias digitales que
                  transforman visitantes en clientes.
                </p>
                <a
                  href="https://mtmmarcatumarca.com/weblandingpage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-[#1FCDD2] font-sync text-xs uppercase tracking-widest hover:underline"
                >
                  Ver landing web MTM →
                </a>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative aspect-square glass-panel rounded-[40px] overflow-hidden flex items-center justify-center p-12"
              >
                <div className="absolute inset-0 bg-[#1FCDD2]/5 animate-pulse" />
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
                  alt=""
                  className="w-full h-full object-cover rounded-3xl mix-blend-overlay opacity-90 hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute bottom-10 left-10 right-10 bg-black/85 backdrop-blur-xl p-8 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-sync uppercase tracking-widest text-[#1FCDD2] mb-2">Datos</p>
                  <p className="text-white text-sm font-light">
                    El 97% de los consumidores busca en internet antes de comprar: tu web es el primer punto de contacto.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="glass-panel rounded-[32px] p-10 md:p-14 border border-white/10">
              <h2 className="text-2xl md:text-4xl font-headline font-bold tracking-tighter mb-6">
                Disminuye gastos físicos y vende mejor en línea
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed font-light max-w-4xl">
                En un mundo donde el 97% de los consumidores busca productos y servicios en internet antes de realizar una
                compra, no tener presencia web significa ser invisible para miles de clientes potenciales. Nuestra misión es
                transformar esa invisibilidad en oportunidades reales de crecimiento.
              </p>
            </div>

            <div className="bg-[#1FCDD2] text-black rounded-[50px] p-12 md:p-24 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Globe size={280} strokeWidth={1} />
              </div>
              <div className="max-w-4xl relative z-10">
                <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tighter mb-8">
                  DISEÑO WEB ORIENTADO A RESULTADOS
                </h2>
                <p className="text-lg md:text-xl leading-relaxed mb-10">
                  Tu espacio digital personalizado en internet, una vitrina virtual que permite a tu negocio o marca estar
                  presente las 24 horas del día, los 7 días de la semana. Es mucho más que un simple sitio online: es la
                  representación digital de lo que quieres transmitir y vender.
                </p>
                <a
                  href="https://mtmmarcatumarca.com/weblandingpage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-black text-white px-10 py-5 rounded-full font-sync uppercase text-xs tracking-widest hover:scale-105 transition-transform"
                >
                  Ir al formulario en la web MTM
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-headline font-bold mb-10 flex items-center gap-3">
                <Globe className="text-[#1FCDD2] w-8 h-8" />
                Lo que incluye tu proyecto web
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Diseño responsive y experiencia de usuario optimizada',
                  'Velocidad de carga y rendimiento superior',
                  'Integración con herramientas de marketing',
                  'SEO técnico desde la base',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 p-6 glass-panel rounded-2xl"
                  >
                    <CheckCircle2 className="text-[#1FCDD2] shrink-0 mt-0.5" />
                    <p className="text-lg text-neutral-300 font-light">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-20">
              <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tighter mb-2">
                  PROYECTOS <span className="text-[#1FCDD2]">WEB</span>
                </h2>
                <p className="text-neutral-500 font-sync text-xs uppercase tracking-widest max-w-2xl">
                  Casos y clientes — entra al detalle de cada experiencia digital.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {webProjects.map((project) => (
                  <motion.button
                    key={project.id}
                    type="button"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    onClick={() => setWebProject(project)}
                    className="group relative text-left rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/50 hover:border-[#1FCDD2]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1FCDD2]"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-sync uppercase tracking-widest text-[#1FCDD2] mb-1 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-headline font-bold text-white leading-tight pr-2">{project.title}</h3>
                        <p className="text-neutral-500 text-xs mt-1">
                          {project.client} · {project.year}
                        </p>
                      </div>
                      <span className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#1FCDD2] group-hover:text-black group-hover:border-[#1FCDD2] transition-colors">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">
              <div>
                <h2 className="text-3xl font-headline font-bold mb-10 tracking-tighter">
                  ¿POR QUÉ TU NEGOCIO NOS NECESITA?
                </h2>
                <div className="space-y-5">
                  {[
                    'Sitios web que reflejan la calidad de tu marca',
                    'Fácil administración y actualización',
                    'Optimización basada en datos',
                    'Soporte técnico confiable',
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-6 border border-white/5 rounded-2xl hover:bg-white/[0.03] transition-colors"
                    >
                      <p className="text-lg text-neutral-300 font-light flex gap-3">
                        <span className="text-[#1FCDD2] shrink-0">•</span>
                        <span>{item}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center glass-panel rounded-[32px] p-10 md:p-12 border border-[#1FCDD2]/20">
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-white mb-4">
                  Impulsa tu presencia online
                </h3>
                <p className="text-xl text-[#1FCDD2] font-headline font-semibold leading-snug">
                  Tu sitio web será tu activo digital más valioso.
                </p>
              </div>
            </div>

            <div className="text-center py-16 border-t border-white/5">
              <p className="text-2xl italic text-neutral-500 mb-10 font-light">
                &ldquo;Los creativos dejamos pasión en todo lo que hacemos&rdquo;
              </p>
              <p className="text-neutral-500 font-sync text-xs uppercase tracking-widest mb-8">
                Estas son marcas que han confiado en nosotros — ellos ya conocieron la energía MTM.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="group flex flex-col items-center gap-6 mx-auto"
              >
                <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#1FCDD2] group-hover:scale-110 transition-all duration-300">
                  <X size={20} className="group-hover:rotate-90 transition-transform" />
                </div>
                <span className="text-[#1FCDD2] font-sync text-[10px] uppercase tracking-[0.4em]">Cerrar detalle</span>
              </button>
            </div>
          </div>
        ) : isStrategy ? (
          <div className="space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <span className="text-[#1FCDD2] font-sync text-sm uppercase tracking-[0.4em] mb-6 block">
                  Especialidad: Estrategia Digital
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter leading-[1.1] mb-8">
                  IMPULSA TU NEGOCIO CON{' '}
                  <span className="text-gradient">MARKETING DIGITAL, CONTENIDO Y SEM</span>
                </h1>
                <p className="text-xl text-[#1FCDD2] font-headline font-semibold mb-4">
                  Conéctate con tu audiencia y haz crecer tu presencia en línea
                </p>
                <p className="text-lg text-neutral-400 leading-relaxed font-light max-w-xl mb-6">
                  En el competitivo mundo digital de hoy, es crucial destacarse y captar la atención de tu público objetivo.
                  Te ofrecemos soluciones personalizadas en marketing digital, creación de contenido y optimización para motores
                  de búsqueda (SEM) para que tu negocio brille en línea.
                </p>
                <p className="text-neutral-400 leading-relaxed font-light max-w-xl mb-6">
                  Es fundamental destacar y atraer tráfico de calidad a tu sitio web. Soluciones personalizadas en publicidad
                  en motores de búsqueda (SEM) para que tu negocio alcance nuevos niveles de éxito y visibilidad.
                </p>
                <a
                  href="https://mtmmarcatumarca.com/marketingdigitallandingpage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#1FCDD2] font-sync text-xs uppercase tracking-widest hover:underline"
                >
                  Ver landing marketing digital MTM →
                </a>
              </motion.div>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-panel rounded-[40px] p-10 md:p-14 border border-white/10"
              >
                <h2 className="text-2xl md:text-3xl font-headline font-bold mb-4">¿Buscas mejorar tus ventas?</h2>
                <h3 className="text-lg text-neutral-300 font-light mb-6">¿Qué tanto conoces tu marca?</h3>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  Agenda tu sesión de diagnóstico y descubre todo lo que podemos hacer por el crecimiento de tu empresa para
                  que cumplas tus objetivos.
                </p>
                <a
                  href="https://mtmmarcatumarca.com/marketingdigitallandingpage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1FCDD2] text-black px-8 py-4 rounded-full font-sync text-xs uppercase tracking-widest font-bold hover:scale-[1.02] transition-transform"
                >
                  Aplicar a diagnóstico
                </a>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Salesforce (2023)',
                  body:
                    'El 84% de las empresas reporta problemas de consistencia en su mensaje de marca a través de diferentes canales digitales.',
                },
                {
                  title: 'IBM (2023)',
                  body:
                    'El 70% de las empresas reconoce dificultades con la velocidad de adaptación a nuevas tecnologías y tendencias digitales.',
                },
                {
                  title: 'Content Marketing Institute (2023)',
                  body:
                    'Solo el 41% de las empresas tiene una estrategia de contenidos documentada, pese a hacer marketing de contenidos.',
                },
                {
                  title: 'Social Media Today (2023)',
                  body:
                    'El 72% de las marcas tiene problemas para mantener una presencia consistente en redes sociales.',
                },
              ].map((study, i) => (
                <div key={i} className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-[#1FCDD2]/30 transition-colors">
                  <p className="text-[10px] font-sync uppercase tracking-widest text-[#1FCDD2] mb-3">{study.title}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">{study.body}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Hash className="w-8 h-8 text-[#1FCDD2]" />,
                  title: 'Social media',
                  text:
                    '¿Quieres destacar en las redes? Creamos una presencia única que conecta con tu audiencia y una comunidad con estrategia que refleja la esencia de tu marca.',
                },
                {
                  icon: <Globe className="w-8 h-8 text-[#1FCDD2]" />,
                  title: 'Desarrollo web',
                  text:
                    'Sitios y landings alineados a tu embudo: velocidad, medición y experiencias que convierten visitas en oportunidades.',
                },
                {
                  icon: <BarChart className="w-8 h-8 text-[#1FCDD2]" />,
                  title: 'Google Ads',
                  text:
                    '¿Quieres destacar en las búsquedas relevantes para tu negocio? Optimizamos campañas para llegar a tu audiencia objetivo y generar conversiones.',
                },
              ].map((block, i) => (
                <div key={i} className="p-8 rounded-3xl border border-white/10 bg-neutral-900/40">
                  <div className="mb-4">{block.icon}</div>
                  <h3 className="text-lg font-headline font-bold text-white mb-3 uppercase tracking-wide">{block.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">{block.text}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-headline font-bold mb-10">Cómo trabajamos contigo</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Estrategia de marketing digital personalizada',
                    bullet: 'Diseñamos estrategias adaptadas a tus objetivos específicos.',
                  },
                  {
                    title: 'Estrategia SEM personalizada',
                    bullet: 'Diseñamos campañas adaptadas a tus objetivos específicos.',
                  },
                  {
                    title: 'Creación de contenido de calidad',
                    bullet: 'Generamos contenido atractivo y relevante que resuena con tu audiencia.',
                  },
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-2xl glass-panel border border-white/5">
                    <h3 className="text-white font-headline font-bold text-base mb-4">{item.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-[#1FCDD2]">•</span>
                      {item.bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1FCDD2] text-black rounded-[40px] p-10 md:p-16">
              <h2 className="text-2xl md:text-3xl font-headline font-bold mb-4">Diagnóstico digital</h2>
              <p className="text-lg max-w-2xl mb-8 opacity-90">
                Completa el formulario en nuestra web y muy pronto nos comunicaremos para agendar.
              </p>
              <a
                href="https://mtmmarcatumarca.com/marketingdigitallandingpage/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-black text-white px-10 py-4 rounded-full font-sync text-xs uppercase tracking-widest font-bold hover:scale-105 transition-transform"
              >
                Ir al formulario
              </a>
            </div>

            <div className="border-t border-white/10 pt-20">
              <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tighter mb-2">
                CASOS <span className="text-[#1FCDD2]">Y MARCAS</span>
              </h2>
              <p className="text-neutral-500 font-sync text-xs uppercase tracking-widest mb-12 max-w-2xl">
                Campañas y estrategias — abre cada proyecto para ver el detalle.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {strategyProjects.map((project) => (
                  <motion.button
                    key={project.id}
                    type="button"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    onClick={() => setStrategyProject(project)}
                    className="group relative text-left rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/50 hover:border-[#1FCDD2]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1FCDD2]"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-sync uppercase tracking-widest text-[#1FCDD2] mb-1 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-headline font-bold text-white leading-tight pr-2">{project.title}</h3>
                        <p className="text-neutral-500 text-xs mt-1">
                          {project.client} · {project.year}
                        </p>
                      </div>
                      <span className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#1FCDD2] group-hover:text-black group-hover:border-[#1FCDD2] transition-colors">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="text-center py-16 border-t border-white/5">
              <p className="text-2xl italic text-neutral-500 mb-6 font-light">
                &ldquo;Los creativos dejamos pasión en todo lo que hacemos&rdquo;
              </p>
              <p className="text-neutral-500 font-sync text-xs uppercase tracking-widest mb-10">
                Estas son marcas que han confiado en nosotros. Ellos ya conocieron la energía MTM.
              </p>
              <h3 className="text-xl font-headline font-bold text-neutral-400 mb-8">Lo que dicen nuestros clientes</h3>
              <button
                type="button"
                onClick={onClose}
                className="group flex flex-col items-center gap-6 mx-auto"
              >
                <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#1FCDD2] group-hover:scale-110 transition-all duration-300">
                  <X size={20} className="group-hover:rotate-90 transition-transform" />
                </div>
                <span className="text-[#1FCDD2] font-sync text-[10px] uppercase tracking-[0.4em]">Cerrar detalle</span>
              </button>
            </div>
          </div>
        ) : isAudiovisual ? (
          <div className="space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <span className="text-[#1FCDD2] font-sync text-sm uppercase tracking-[0.4em] mb-6 block">
                  Especialidad: Producción audiovisual
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter leading-[1.05] mb-8">
                  CAUTIVA A TU AUDIENCIA CON{' '}
                  <span className="text-gradient">CONTENIDO AUDIOVISUAL DE IMPACTO</span>
                </h1>
                <p className="text-xl text-neutral-400 leading-relaxed font-light max-w-xl mb-8">
                  En la era digital, el video es el rey del contenido. Producimos piezas audiovisuales que capturan la esencia de
                  tu marca y conectan emocionalmente con tu audiencia.
                </p>
                <a
                  href="https://mtmmarcatumarca.com/audiovisualeslandingpage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#1FCDD2] font-sync text-xs uppercase tracking-widest hover:underline"
                >
                  Ver landing audiovisual MTM →
                </a>
              </motion.div>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative aspect-video glass-panel rounded-[40px] overflow-hidden border border-white/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-xl p-6 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-sync uppercase tracking-widest text-[#1FCDD2] mb-2">Impacto</p>
                  <p className="text-white text-sm font-light italic">
                    &ldquo;El primer impacto es tu imagen ¿cómo quieres que te recuerden?&rdquo;
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="bg-[#1FCDD2] text-black rounded-[50px] p-12 md:p-24 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Video size={280} strokeWidth={1} />
              </div>
              <div className="max-w-4xl relative z-10">
                <h2 className="text-2xl md:text-4xl font-headline font-bold tracking-tighter mb-8">
                  CONTENIDO PROFESIONAL CON LA ESENCIA DE TU MARCA
                </h2>
                <p className="text-lg md:text-xl leading-relaxed mb-10">
                  Cautiva a tu audiencia con contenido audiovisual profesional (fotografía, video, jingle y animaciones) lleno
                  de energía y con la esencia de tu marca. Da el paso hacia el éxito visual. Descubre cómo potenciamos tu
                  imagen. ¡Contáctanos y haz que tu contenido brille!
                </p>
                <a
                  href="https://mtmmarcatumarca.com/audiovisualeslandingpage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-black text-white px-10 py-5 rounded-full font-sync uppercase text-xs tracking-widest hover:scale-105 transition-transform"
                >
                  Ir al formulario — diagnóstico
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-4xl font-headline font-bold mb-6">Servicios que transforman tu comunicación</h2>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-4xl mb-12 font-light">
                El poder de una imagen o video bien ejecutado trasciende palabras y conecta directamente con las emociones de
                tu audiencia ideal, creando un puente invisible entre tu marca y quienes realmente necesitan de ella.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Videos corporativos que cuentan tu historia',
                  'Contenido para redes sociales que genera engagement',
                  'Spots publicitarios que impulsan ventas',
                  'Videos explicativos que educan a tu audiencia',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 p-6 glass-panel rounded-2xl"
                  >
                    <CheckCircle2 className="text-[#1FCDD2] shrink-0 mt-0.5" />
                    <p className="text-lg text-neutral-300 font-light">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-10 leading-tight">
                  La calidad que <br />
                  <span className="text-[#1FCDD2]">tu marca merece</span>
                </h2>
                <div className="space-y-5">
                  {[
                    'Post-producción profesional',
                    'Equipo multidisciplinario',
                    'Producción audiovisual dinámica',
                    'Guiones creativos y storytelling efectivo',
                  ].map((item, i) => (
                    <div key={i} className="p-6 border border-white/5 rounded-2xl hover:bg-white/[0.03] transition-colors">
                      <p className="text-lg text-neutral-300 font-light flex gap-3">
                        <span className="text-[#1FCDD2] shrink-0">•</span>
                        <span>{item}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-panel rounded-[32px] p-10 md:p-12 border border-[#1FCDD2]/20 flex flex-col justify-center min-h-[280px]">
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-white mb-4">
                  Haz que tu mensaje sea inolvidable
                </h3>
                <p className="text-neutral-300 text-lg leading-relaxed">
                  Convertimos tus ideas en historias visuales que tu audiencia no podrá olvidar.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-20">
              <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tighter mb-2">
                PROYECTOS <span className="text-[#1FCDD2]">AUDIOVISUALES</span>
              </h2>
              <p className="text-neutral-500 font-sync text-xs uppercase tracking-widest mb-12 max-w-2xl">
                Rodajes, spots y piezas — abre cada caso para ver el detalle.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {audiovisualProjects.map((project) => (
                  <motion.button
                    key={project.id}
                    type="button"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    onClick={() => setAudiovisualProject(project)}
                    className="group relative text-left rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/50 hover:border-[#1FCDD2]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1FCDD2]"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-sync uppercase tracking-widest text-[#1FCDD2] mb-1 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-headline font-bold text-white leading-tight pr-2">{project.title}</h3>
                        <p className="text-neutral-500 text-xs mt-1">
                          {project.client} · {project.year}
                        </p>
                      </div>
                      <span className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#1FCDD2] group-hover:text-black group-hover:border-[#1FCDD2] transition-colors">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="text-center py-16 border-t border-white/5">
              <p className="text-2xl italic text-neutral-500 mb-6 font-light">
                &ldquo;Los creativos dejamos pasión en todo lo que hacemos&rdquo;
              </p>
              <p className="text-neutral-500 font-sync text-xs uppercase tracking-widest mb-10">
                Estas son marcas que han confiado en nosotros. Ellos ya conocieron la energía MTM.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="group flex flex-col items-center gap-6 mx-auto"
              >
                <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#1FCDD2] group-hover:scale-110 transition-all duration-300">
                  <X size={20} className="group-hover:rotate-90 transition-transform" />
                </div>
                <span className="text-[#1FCDD2] font-sync text-[10px] uppercase tracking-[0.4em]">Cerrar detalle</span>
              </button>
            </div>
          </div>
        ) : isFotografia ? (
          <div className="space-y-20">
            <div className="text-center max-w-4xl mx-auto px-2">
              <p className="text-[#1FCDD2] font-sync text-xs uppercase tracking-[0.35em] mb-6">FotoLinkedIn & canales digitales</p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold tracking-tighter leading-[1.1] mb-6">
                ¿QUIERES POTENCIAR
                <br />
                <span className="text-gradient">TU PERFIL DE LINKEDIN Y TUS CANALES DIGITALES?</span>
              </h1>
              <a
                href="https://mtmmarcatumarca.com/fotografialandingpage/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#1FCDD2] font-sync text-xs uppercase tracking-widest hover:underline"
              >
                Ver landing de fotografía MTM →
              </a>
            </div>

            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <Camera className="w-10 h-10 text-[#1FCDD2] shrink-0" />
                <div>
                  <p className="text-neutral-300 leading-relaxed text-lg">
                    Un perfil de LinkedIn con <span className="text-white font-semibold">foto profesional</span> recibe{' '}
                    <span className="text-[#1FCDD2] font-bold">21 veces más visitas</span> y{' '}
                    <span className="text-[#1FCDD2] font-bold">36 veces más mensajes</span>, lo que mejora la visibilidad y
                    oportunidades comerciales.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center font-sync text-xs uppercase tracking-widest text-neutral-500">
              Cupos disponibles — fechas referencia en web: 1, 2, 3 y 4 de enero (sujeto a agenda actual)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Maquillaje', text: 'Realza tu apariencia con un maquillaje que refleje tu mejor versión.' },
                { title: 'Asesoría de imagen', text: 'Te guiamos en la elección de atuendos que complementen tu estilo y sector profesional.' },
                { title: '10 fotografías', text: 'Serie editada, ideal para distintas ocasiones y formatos en LinkedIn.' },
                { title: 'Tips LinkedIn', text: 'Consejos exclusivos para optimizar tu perfil y aumentar tu visibilidad.' },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#1FCDD2]/30 transition-colors">
                  <h3 className="text-[#1FCDD2] font-headline font-bold text-sm uppercase tracking-widest mb-3">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1FCDD2] text-black rounded-[40px] p-10 md:p-16 text-center max-w-3xl mx-auto">
              <p className="text-3xl md:text-4xl font-headline font-bold mb-2">$500.000</p>
              <p className="text-sm font-sync uppercase tracking-widest mb-8 opacity-90">Sesiones empresariales</p>
              <a
                href="https://mtmmarcatumarca.com/fotografialandingpage/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-black text-white px-10 py-4 rounded-full font-sync text-xs uppercase tracking-widest font-bold hover:scale-105 transition-transform"
              >
                Agenda tu sesión
              </a>
            </div>

            <p className="text-center text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Las publicaciones con <span className="text-white">fotos</span> reciben un{' '}
              <span className="text-[#1FCDD2] font-semibold">38% más de interacción</span> en Facebook e Instagram, lo que
              aumenta el alcance y las oportunidades de conversión.
            </p>

            <div>
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-center mb-10">Sesiones para más canales</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Artísticas',
                    text:
                      'Ideal para cantantes, artistas, bandas, tatuadores, DJs, pintores: mostrar dinamismo, lanzamientos o tu nuevo estilo.',
                  },
                  {
                    title: 'Empresariales',
                    text:
                      'Empresas que quieren mostrar su equipo y enmarcar momentos que año a año hacen crecer su marca.',
                  },
                  {
                    title: 'Modelaje',
                    text:
                      'Renueva tu book si eres modelo o actor: la versatilidad que demuestres influye en tus contrataciones futuras.',
                  },
                ].map((col, i) => (
                  <div key={i} className="p-8 rounded-3xl border border-white/10 bg-neutral-900/40">
                    <h3 className="text-lg font-headline font-bold text-[#1FCDD2] mb-4 uppercase tracking-wide">{col.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed font-light">{col.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-16">
              <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tighter mb-2 text-center">
                PROYECTOS <span className="text-[#1FCDD2]">FOTOGRÁFICOS</span>
              </h2>
              <p className="text-neutral-500 font-sync text-xs uppercase tracking-widest mb-12 text-center max-w-2xl mx-auto">
                Sesiones y books — abre cada caso para ver el detalle.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fotografiaProjects.map((project) => (
                  <motion.button
                    key={project.id}
                    type="button"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    onClick={() => setFotografiaProject(project)}
                    className="group relative text-left rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/50 hover:border-[#1FCDD2]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1FCDD2]"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-sync uppercase tracking-widest text-[#1FCDD2] mb-1 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-headline font-bold text-white leading-tight pr-2">{project.title}</h3>
                        <p className="text-neutral-500 text-xs mt-1">
                          {project.client} · {project.year}
                        </p>
                      </div>
                      <span className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#1FCDD2] group-hover:text-black group-hover:border-[#1FCDD2] transition-colors">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="text-center py-12 border-t border-white/5">
              <p className="text-2xl italic text-neutral-500 mb-8 font-light">
                &ldquo;Los creativos dejamos pasión en todo lo que hacemos&rdquo;
              </p>
              <p className="text-neutral-500 font-sync text-xs uppercase tracking-widest mb-8">
                Estas son marcas que han confiado en nosotros. Ellos ya conocieron la energía MTM.
              </p>
              <a
                href="https://mtmmarcatumarca.com/fotografialandingpage/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mb-10 bg-[#1FCDD2] text-black px-8 py-4 rounded-full font-sync text-xs uppercase tracking-widest font-bold hover:scale-105 transition-transform"
              >
                Agenda tu sesión
              </a>
              <button type="button" onClick={onClose} className="group flex flex-col items-center gap-6 mx-auto">
                <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#1FCDD2] group-hover:scale-110 transition-all duration-300">
                  <X size={20} className="group-hover:rotate-90 transition-transform" />
                </div>
                <span className="text-[#1FCDD2] font-sync text-[10px] uppercase tracking-[0.4em]">Cerrar detalle</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-headline font-bold mb-8">DETALLE DE {serviceType.toUpperCase()}</h1>
            <p className="text-neutral-500 max-w-xl">Próximamente disponible con todo el poder creativo de MTM.</p>
            <button onClick={onClose} className="mt-12 text-[#1FCDD2] font-sync text-xs uppercase tracking-widest">Volver</button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {brandingProject && (
          <ProjectDetail
            key="branding-detail"
            project={brandingProject}
            onClose={() => setBrandingProject(null)}
            overlayZClass="z-[135]"
            closeButtonZClass="z-[140]"
            backLabel="Volver al servicio de branding"
          />
        )}
        {webProject && (
          <ProjectDetail
            key="web-detail"
            project={webProject}
            onClose={() => setWebProject(null)}
            overlayZClass="z-[135]"
            closeButtonZClass="z-[140]"
            backLabel="Volver a Web Experience"
          />
        )}
        {strategyProject && (
          <ProjectDetail
            key="strategy-detail"
            project={strategyProject}
            onClose={() => setStrategyProject(null)}
            overlayZClass="z-[135]"
            closeButtonZClass="z-[140]"
            backLabel="Volver a Estrategia Digital"
          />
        )}
        {audiovisualProject && (
          <ProjectDetail
            key="audiovisual-detail"
            project={audiovisualProject}
            onClose={() => setAudiovisualProject(null)}
            overlayZClass="z-[135]"
            closeButtonZClass="z-[140]"
            backLabel="Volver a Producción audiovisual"
          />
        )}
        {fotografiaProject && (
          <ProjectDetail
            key="fotografia-detail"
            project={fotografiaProject}
            onClose={() => setFotografiaProject(null)}
            overlayZClass="z-[135]"
            closeButtonZClass="z-[140]"
            backLabel="Volver a Fotografía & FotoLinkedIn"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
