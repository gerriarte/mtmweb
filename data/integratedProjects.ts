/**
 * Casos integrados (web + branding + contenido + audiovisual, etc.)
 * Ruta canónica: `/proyectos/caso/:slug`
 *
 * Vídeos: URLs tipo `watch?v=` o una línea por URL en `public/Proyectos/.../URLvideos.txt`.
 */

import type { CaseStudyProject, CaseStudyVideo } from './caseStudyProject.types';

export type IntegratedProjectCase = CaseStudyProject;

const I = '/Proyectos/Impoxfast';

/** Mismas líneas que `public/Proyectos/Impoxfast/URLvideos.txt` */
const IMPOXFAST_VIDEOS: CaseStudyVideo[] = [
  { url: 'https://www.youtube.com/watch?v=eK2xoMeKgyg&t=7s', title: 'Pieza 1' },
  {
    url: 'https://www.youtube.com/watch?v=7z86OZ6A9G0&time_continue=5',
    title: 'Pieza 2',
  },
  { url: 'https://www.youtube.com/watch?v=k_ftgmVl47E&t=11s', title: 'Pieza 3' },
  { url: 'https://www.youtube.com/watch?v=yOVnnAG-vnc&t=14s', title: 'Pieza 4' },
];

export const integratedProjectsBySlug: Record<string, CaseStudyProject> = {
  impoxfast: {
    slug: 'impoxfast',
    brandName: 'IMPOXFAST',
    heroTitleLine2: 'Marca, digital y contenido',
    pageTitle: 'Web, marca y contenido · IMPOXFAST',
    category: 'Caso integrado',
    client: 'IMPOXFAST',
    year: '2024',
    summary:
      'Proyecto integral para IMPOXFAST: presencia digital con sitio web, branding y piezas visuales coherentes, fotografía de espacios y producto, creación de contenido para redes y piezas en video complementadas con pauta.',
    body: '¿Tu marca necesita conectar con su comunidad? Diseñemos una estrategia que marque la diferencia.',
    recognition: {
      title: 'Criterio de trabajo',
      body:
        'Este caso integra identidad, entorno físico, piezas para redes y soporte web en un solo relato de marca. La prioridad fue claridad comercial y coherencia visual en cada punto de contacto, sin perder cercanía con la comunidad B2B de IMPOXFAST.',
    },
    disciplines: ['Branding', 'Fotografía', 'Creación de contenido', 'Diseño web'],
    services: [
      'Estrategia de contenido',
      'Creación de contenido',
      'Pauta publicitaria',
      'Diseño web',
      'Branding',
      'Fotografía',
    ],
    team: [
      { name: 'David Guerrero', role: 'Director creativo' },
      { name: 'Carolina Betancur', role: 'Social media manager' },
      { name: 'Mike Artunduaga', role: 'Director de fotografía' },
      { name: 'Gerardo Riarte', role: 'Web developer' },
    ],
    heroImage: `${I}/oficinas-impox.png`,
    videos: IMPOXFAST_VIDEOS,
    webUrlLabel: 'Ver web',
    gallery: [
      { src: `${I}/oficinas-impox.png`, alt: 'IMPOXFAST — identidad y espacio', caption: 'Marca' },
      { src: `${I}/carrusel-8-0156-1.png`, alt: 'IMPOXFAST — carrusel', caption: 'Carrusel' },
      {
        src: `${I}/carrusel-equipo-comercial-01.jpg`,
        alt: 'IMPOXFAST — equipo comercial',
        caption: 'Equipo comercial',
      },
      { src: `${I}/oficinas-impox2.png`, alt: 'IMPOXFAST — oficinas', caption: 'Oficinas' },
      { src: `${I}/oficinas-impox3.png`, alt: 'IMPOXFAST — espacios', caption: 'Espacios' },
      { src: `${I}/oficinas-impox4.png`, alt: 'IMPOXFAST — instalaciones', caption: 'Instalaciones' },
      {
        src: `${I}/Post-Impoxfast-compreseed_1.jpg`,
        alt: 'IMPOXFAST — post redes',
        caption: 'Redes sociales',
      },
      {
        src: `${I}/Post-Impoxfast-compreseed_5-1.jpg`,
        alt: 'IMPOXFAST — contenido',
        caption: 'Contenido',
      },
      {
        src: `${I}/Post-productos-Impoxfast-05-1.jpg`,
        alt: 'IMPOXFAST — producto',
        caption: 'Producto',
      },
      { src: `${I}/Sin-titulo-1-1.png`, alt: 'IMPOXFAST — pieza gráfica', caption: 'Gráfica' },
      { src: `${I}/Sin-titulo-12.png`, alt: 'IMPOXFAST — pieza 12', caption: 'Pieza' },
      { src: `${I}/Sin-titulo-13.png`, alt: 'IMPOXFAST — pieza 13', caption: 'Pieza' },
      { src: `${I}/Sin-titulo-14.png`, alt: 'IMPOXFAST — pieza 14', caption: 'Pieza' },
    ],
    related: [
      { label: 'Festival El Convite', href: 'https://mtmmarcatumarca.com/proyectos/', external: true },
      {
        label: 'Duvy Class',
        href: 'https://mtmmarcatumarca.com/proyectos/',
        external: true,
      },
      { label: 'Alianza Francesa', href: 'https://mtmmarcatumarca.com/proyectos/', external: true },
    ],
  },
};
