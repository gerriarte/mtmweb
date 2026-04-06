
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Cargos según MTM. Fotos en `/public/Team` asignadas por coherencia con el nombre del archivo.
 * Archivos sin asignar en esta vista: perfiles-para-web-10.jpg, perfiles-para-web-06.jpg,
 * perfiles-para-web-02.webp, Adrian.jpg, Nico.JPG, Milo.jpg,
 * Manejo-de-redes-sociales-en-Bogota-186.jpg, Manejo-de-redes-sociales-en-Bogota-187.jpg,
 * Manejo-de-redes-sociales-en-Bogota-188.jpg,
 * perfiles-para-web_Mesa-de-trabajo-1.webp (intercambiar en el array si corresponden a otra persona).
 */
const teamMembers = [
  {
    id: 1,
    name: 'David Guerrero',
    role: 'CEO y Director Creativo',
    img: '/Team/David%20Guerrero.jpg',
  },
  {
    id: 8,
    name: 'Carolina Betancur',
    role: 'Social Media Manager',
    img: '/Team/Carolina%20Betancur.jpg',
  },
  {
    id: 9,
    name: 'Mike Artunduaga',
    role: 'Director de fotografía',
    img: '/Team/Mike%20Artuduanga.webp',
  },
  {
    id: 2,
    name: 'Camila Garavito',
    role: 'Key Account Manager',
    img: '/Team/Camila%20Garavito.jpg',
  },
  {
    id: 4,
    name: 'Gerardo Riarte',
    role: 'Web Designer',
    img: '/Team/gera.jpg',
  },
  {
    id: 3,
    name: 'Jack Muñoz',
    role: 'Modelador 3D',
    img: '/Team/Jack%20Mu%C3%B1oz.jpg',
  },
  {
    id: 5,
    name: 'Carol Matallana',
    role: 'SEO/SEM Specialist',
    img: '/Team/Carol%20Matallana.jpg',
  },
  {
    id: 6,
    name: 'Rubén Martín',
    role: 'Ilustrador digital',
    img: '/Team/ruben%20Martin.jpg',
  },
  {
    id: 7,
    name: 'David Veloza',
    role: 'Creador audiovisual',
    img: '/Team/David%20Veloza.jpg',
  },
  {
    id: 10,
    name: 'Sebastian Gutierres',
    role: 'Creador audiovisual',
    img: '/Team/Sebastian%20Gutierez.webp',
  },
  {
    id: 11,
    name: 'Adrian Olarte',
    role: 'Creador audiovisual',
    img: '/Team/Adrian%20Olarte%20%20Creador%20Audiovisual.jpg',
  },
  {
    id: 12,
    name: 'Milo Restrepo',
    role: 'Social Media Manager',
    img: '/Team/Milo%20Restrepo%20Social%20Media%20Manager.jpg',
  },
  {
    id: 13,
    name: 'Nicolás Torres',
    role: 'Diseñador Gráfico',
    img: '/Team/Nicol%C3%A1s%20Torres%20%20Dise%C3%B1ador%20Gr%C3%A1fico.JPG',
  },
];

export const Team: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-50 transition-colors dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-headline font-bold tracking-tighter text-zinc-900 md:text-6xl dark:text-white"
          >
            EL <span className="text-zinc-400 dark:text-neutral-600">EQUIPO</span>
          </motion.h2>
          <div className="w-20 h-1 bg-[#1FCDD2]" />
          <p className="mt-8 font-sync text-xs uppercase tracking-[0.2em] text-zinc-600 max-w-xl dark:text-neutral-400">
            Más de 8 años construyendo marcas en Bogotá. Ellos ya conocieron la energía MTM; faltas tú.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 interactive"
            >
              <img
                src={member.img}
                alt={member.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#1FCDD2] font-sync text-[8px] md:text-[10px] uppercase tracking-widest mb-1 leading-snug">
                  {member.role}
                </p>
                <h3 className="text-white font-headline font-bold text-xs md:text-sm leading-tight">
                  {member.name}
                </h3>
                <div className="h-[1px] w-0 bg-[#1FCDD2] mt-2 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
