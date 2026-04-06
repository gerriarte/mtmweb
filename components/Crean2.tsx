
import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { GeminiAssistant } from './GeminiAssistant';
import { CustomCursor } from './CustomCursor';
import { ChevronDown, Package, Store, UtensilsCrossed, Send } from 'lucide-react';

const stats = [
  { label: 'Marcas intervenidas', value: '200+' },
  { label: 'Integrantes', value: '15+' },
  { label: 'Proyectos impresos', value: '5.000+' },
  { label: 'Años de experiencia', value: '8+' },
];

const crean2Team = [
  { name: 'Karen Patiño', role: 'Administrativo', img: 'https://picsum.photos/400/500?random=51' },
  { name: 'Alexander Rodríguez', role: 'Gerente general', img: 'https://picsum.photos/400/500?random=52' },
  { name: 'Marisol Ramos', role: 'Gerente de ventas', img: 'https://picsum.photos/400/500?random=53' },
  { name: 'Juan Camilo', role: 'Auxiliar de producción', img: 'https://picsum.photos/400/500?random=54' },
];

const kitsEmpresariales = [
  { name: 'Kit empresarial 1', price: '$24.900' },
  { name: 'Kit empresarial 2', price: '$39.500' },
  { name: 'Kit empresarial 3', price: '$59.800' },
  { name: 'Kit empresarial 4', price: '$82.300' },
];

const kitsStand = [
  { name: 'Kit Stand 3', price: '$599.900' },
  { name: 'Kit Stand 2', price: '$859.900' },
  { name: 'Kit Stand 1', price: '$1.399.000' },
];

const kitsRestaurantes = [
  { name: 'Emprendedores y locales comerciales 3', price: '$600.000' },
  { name: 'Emprendedores y locales comerciales 2', price: '$1.100.000' },
  { name: 'Emprendedores y locales comerciales 1', price: '$1.500.000' },
];

const faqEntregas = [
  { q: '¿Cuánto tarda la producción de un pedido?', a: 'Los tiempos dependen del volumen y acabados. Al cotizar te damos una fecha estimada y seguimiento en cada etapa.' },
  { q: '¿Hacen envíos fuera de Bogotá?', a: 'Sí. Coordinamos logística nacional según el proyecto. Indícanos ciudad y tipo de material en el formulario.' },
  { q: '¿Puedo revisar una muestra antes de tirar tiraje completo?', a: 'En la mayoría de proyectos ofrecemos prueba de color o prototipo según el tipo de pieza.' },
];

const faqAcabados = [
  { q: '¿Qué acabados ofrecen en impresión?', a: 'Laminados mate/brillo, barniz UV sectorizado, troquelado, encuadernación y más, según el formato.' },
  { q: '¿Trabajan papel certificado o ecológico?', a: 'Podemos proponer sustratos FSC y alternativas según tu presupuesto y la identidad de marca.' },
  { q: '¿Ayudan con el diseño si solo tengo la idea?', a: 'Sí. Nuestro equipo gráfico puede desarrollar pieza desde brief o ajustar archivos que ya tengas.' },
];

const galleryImages = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/600/450?random=${60 + i}`);

const serviceOptions = [
  'Audiovisual',
  'Páginas web',
  'Branding',
  'Redes sociales',
  'Realidad aumentada',
  'Jingle',
  'Impresión / kits',
];

export const Crean2: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [openFaq, setOpenFaq] = useState<{ section: 'e' | 'a'; i: number } | null>(null);
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    servicio: '',
    detalles: '',
  });

  const toggleFaq = (section: 'e' | 'a', i: number) => {
    setOpenFaq((prev) => (prev?.section === section && prev.i === i ? null : { section, i }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Crean2 — ${form.servicio || 'Consulta'}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nServicio: ${form.servicio}\n\n${form.detalles}`
    );
    window.location.href = `mailto:info@mtmmarcatumarca.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 transition-colors dark:bg-[#050505] dark:text-white">
      <CustomCursor />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#1FCDD2] z-[60] origin-left" style={{ scaleX }} />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1FCDD2]/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sync text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#1FCDD2] mb-6"
            >
              Aliado MTM — Marca tu Marca
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-8 font-headline text-4xl font-bold leading-[0.95] tracking-tighter text-zinc-900 md:text-6xl lg:text-7xl dark:text-white"
            >
              Crean2 <span className="text-zinc-500 dark:text-neutral-500">Agencia Gráfica SAS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-600 md:text-xl dark:text-neutral-400"
            >
              Empresa líder en desarrollo de branding y publicidad: soluciones integrales para tu material publicitario,
              impresión y presencia de marca. Los creativos dejamos pasión en todo lo que hacemos.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <a
                href="#kits"
                className="px-8 py-3 rounded-full bg-[#1FCDD2] text-black font-sync text-[10px] uppercase tracking-[0.2em] interactive"
              >
                Ver kits
              </a>
              <Link
                to="/#contact"
                className="rounded-full border border-zinc-300/90 px-8 py-3 font-sync text-[10px] uppercase tracking-[0.2em] text-zinc-800 hover:border-[#1FCDD2]/50 dark:border-white/15 dark:text-white interactive"
              >
                Contacto MTM
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-zinc-200/80 bg-zinc-100/90 px-6 py-16 md:px-12 md:py-24 dark:border-white/5 dark:bg-black/40">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-center font-headline text-3xl font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-white"
            >
              ¿Qué hemos logrado?
            </motion.h2>
            <p className="mx-auto mb-14 max-w-2xl text-center font-sync text-[10px] uppercase tracking-[0.25em] text-zinc-600 dark:text-neutral-500">
              Más de 8 años trabajando juntos para mejorar marcas
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-zinc-200/90 bg-white p-8 text-center shadow-sm md:rounded-3xl dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="mb-2 font-headline text-3xl font-bold text-[#1FCDD2] md:text-5xl">{s.value}</div>
                  <div className="font-sync text-[9px] uppercase tracking-widest text-zinc-600 md:text-[10px] dark:text-neutral-400">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <h2 className="mb-4 font-headline text-3xl font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-white">
                Conoce al equipo <span className="text-zinc-500 dark:text-neutral-600">Crean2</span>
              </h2>
              <div className="w-20 h-1 bg-[#1FCDD2]" />
              <p className="mt-6 max-w-xl text-sm text-zinc-600 md:text-base dark:text-neutral-400">
                Ellos ya conocieron nuestra energía; falta que nos conozcas tú.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {crean2Team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5"
                >
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <p className="text-[#1FCDD2] font-sync text-[8px] md:text-[9px] uppercase tracking-widest mb-1">{m.role}</p>
                    <h3 className="font-headline font-bold text-sm md:text-base text-white">{m.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Kits */}
        <section id="kits" className="border-y border-zinc-200/80 bg-zinc-100/50 px-6 py-20 md:px-12 md:py-28 dark:border-white/5 dark:bg-white/[0.02]">
          <div className="max-w-7xl mx-auto space-y-20">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="mb-4 font-headline text-3xl font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-white">
                Kits empresariales y soluciones
              </h2>
              <p className="text-sm text-zinc-600 dark:text-neutral-500">
                Precios orientativos en COP + IVA. Cotización final según especificaciones.
              </p>
            </div>

            <KitBlock
              icon={<Package className="w-6 h-6" />}
              title="Detalles empresariales"
              subtitle="Kits empresariales corporativos personalizados"
              items={kitsEmpresariales}
            />
            <KitBlock
              icon={<Store className="w-6 h-6" />}
              title="Stand — presencia de marca"
              subtitle="Presencia física para ferias y eventos"
              items={kitsStand}
            />
            <KitBlock
              icon={<UtensilsCrossed className="w-6 h-6" />}
              title="Imprescindible para restaurantes"
              subtitle="Emprendedores y locales comerciales"
              items={kitsRestaurantes}
            />
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="mb-10 text-center font-headline text-3xl font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-white">
              Crean2 <span className="text-zinc-500 dark:text-neutral-600">en imágenes</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {galleryImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.04 }}
                  className="aspect-[4/3] overflow-hidden rounded-xl border border-zinc-200/90 bg-neutral-900 dark:border-white/10"
                >
                  <img src={src} alt={`Proyecto Crean2 ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-zinc-200/80 bg-zinc-100 px-6 py-20 md:px-12 md:py-28 dark:border-white/5 dark:bg-black/50">
          <div className="max-w-4xl mx-auto space-y-16">
            <FaqColumn
              title="Preguntas de entregas"
              items={faqEntregas}
              section="e"
              openFaq={openFaq}
              onToggle={toggleFaq}
            />
            <FaqColumn
              title="Preguntas de acabados"
              items={faqAcabados}
              section="a"
              openFaq={openFaq}
              onToggle={toggleFaq}
            />
          </div>
        </section>

        {/* CTA + form */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-headline text-3xl font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-white">
                ¿Preparado para impulsar tu marca?
              </h2>
              <p className="text-lg text-zinc-600 dark:text-neutral-400">
                Tomar decisiones inteligentes será lo que te defina. Déjanos tus datos y revisamos tu necesidad con el equipo comercial.
              </p>
              <p className="mt-4 text-sm text-zinc-500 dark:text-neutral-600">
                Tan pronto tengamos tu mensaje, te contactamos con prontitud.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-[32px] border border-zinc-200/90 bg-white p-8 shadow-sm backdrop-blur-md md:p-12 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="mb-2 block font-sync text-[10px] uppercase tracking-widest text-zinc-600 dark:text-neutral-500">Tu nombre</span>
                  <input
                    required
                    type="text"
                    value={form.nombre}
                    onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                    className="w-full rounded-xl border border-zinc-200/90 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-[#1FCDD2] focus:outline-none dark:border-white/10 dark:bg-black/40 dark:text-white dark:placeholder:text-neutral-600"
                    placeholder="Nombre completo"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-sync text-[10px] uppercase tracking-widest text-zinc-600 dark:text-neutral-500">Tu email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full rounded-xl border border-zinc-200/90 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-[#1FCDD2] focus:outline-none dark:border-white/10 dark:bg-black/40 dark:text-white dark:placeholder:text-neutral-600"
                    placeholder="correo@empresa.com"
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="mb-2 block font-sync text-[10px] uppercase tracking-widest text-zinc-600 dark:text-neutral-500">WhatsApp</span>
                  <input
                    required
                    type="tel"
                    value={form.whatsapp}
                    onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))}
                    className="w-full rounded-xl border border-zinc-200/90 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-[#1FCDD2] focus:outline-none dark:border-white/10 dark:bg-black/40 dark:text-white dark:placeholder:text-neutral-600"
                    placeholder="+57 ..."
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-sync text-[10px] uppercase tracking-widest text-zinc-600 dark:text-neutral-500">Tipo de servicio</span>
                  <select
                    value={form.servicio}
                    onChange={(e) => setForm((f) => ({ ...f, servicio: e.target.value }))}
                    className="w-full rounded-xl border border-zinc-200/90 bg-zinc-50 px-4 py-3 text-zinc-900 focus:border-[#1FCDD2] focus:outline-none dark:border-white/10 dark:bg-black/40 dark:text-white"
                  >
                    <option value="">Selecciona</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-white dark:bg-[#111]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block font-sync text-[10px] uppercase tracking-widest text-zinc-600 dark:text-neutral-500">Danos más detalles</span>
                <textarea
                  rows={4}
                  value={form.detalles}
                  onChange={(e) => setForm((f) => ({ ...f, detalles: e.target.value }))}
                  className="w-full resize-none rounded-xl border border-zinc-200/90 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-[#1FCDD2] focus:outline-none dark:border-white/10 dark:bg-black/40 dark:text-white dark:placeholder:text-neutral-600"
                  placeholder="Brief, plazos, cantidades..."
                />
              </label>
              <button
                type="submit"
                className="w-full md:w-auto md:min-w-[200px] inline-flex items-center justify-center gap-2 rounded-full bg-[#1FCDD2] text-black font-sync text-[10px] uppercase tracking-[0.2em] py-4 px-10 interactive"
              >
                <Send size={16} />
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <GeminiAssistant />
    </div>
  );
};

function KitBlock({
  icon,
  title,
  subtitle,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: { name: string; price: string }[];
}) {
  return (
    <div>
      <div className="flex items-start gap-4 mb-8">
        <div className="rounded-2xl bg-[#1FCDD2]/15 text-[#1FCDD2] p-4 border border-[#1FCDD2]/20">{icon}</div>
        <div>
          <h3 className="font-headline text-xl font-bold tracking-tight text-zinc-900 md:text-2xl dark:text-white">{title}</h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-neutral-500">{subtitle}</p>
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col gap-2 rounded-2xl border border-zinc-200/90 bg-white px-5 py-4 transition-colors hover:border-[#1FCDD2]/30 dark:border-white/10 dark:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-sm font-medium text-zinc-900 dark:text-white">{item.name}</span>
            <span className="whitespace-nowrap font-headline text-lg text-[#1FCDD2]">{item.price}</span>
            <span className="font-sync text-[10px] uppercase tracking-wider text-zinc-500 sm:sr-only dark:text-neutral-500">Precios + IVA</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 font-sync text-[10px] uppercase tracking-widest text-zinc-600 dark:text-neutral-600">Precios más IVA · sujetos a cambio</p>
    </div>
  );
}

function FaqColumn({
  title,
  items,
  section,
  openFaq,
  onToggle,
}: {
  title: string;
  items: { q: string; a: string }[];
  section: 'e' | 'a';
  openFaq: { section: 'e' | 'a'; i: number } | null;
  onToggle: (section: 'e' | 'a', i: number) => void;
}) {
  return (
    <div>
      <h3 className="mb-8 text-center font-headline text-2xl font-bold tracking-tighter text-zinc-900 md:text-3xl md:text-left dark:text-white">{title}</h3>
      <div className="space-y-3">
        {items.map((item, i) => {
          const open = openFaq?.section === section && openFaq.i === i;
          return (
            <div key={item.q} className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white dark:border-white/10 dark:bg-white/[0.02]">
              <button
                type="button"
                onClick={() => onToggle(section, i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-white/[0.04]"
              >
                <span className="pr-4 text-sm text-zinc-800 md:text-base dark:text-white">{item.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-[#1FCDD2] transition-transform ${open ? 'rotate-180' : ''}`} />
              </button>
              {open && (
                <div className="border-t border-zinc-200/80 px-5 pb-4 pt-3 text-sm leading-relaxed text-zinc-600 dark:border-white/5 dark:text-neutral-400">{item.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
