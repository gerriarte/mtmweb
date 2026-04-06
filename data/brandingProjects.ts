/**
 * Casos de branding con ficha propia (`/proyectos/branding/:slug`).
 * Misma plantilla que el resto: `CaseStudyProject` vía `getCaseStudyProject`.
 *
 * Para añadir un proyecto:
 * 1. Coloca imágenes en `public/Proyectos/{slug}/`.
 * 2. Añade una entrada en `brandingProjectsBySlug`.
 * 3. Enlaza desde `portfolioData` (`brandingCaseSlug`) y/o `mtmProyectosCatalog` (`brandingCaseSlug`).
 */

import type { CaseStudyProject } from './caseStudyProject.types';

export type BrandingProjectCase = CaseStudyProject;

const WF = '/Proyectos/wonderfood';

export const brandingProjectsBySlug: Record<string, CaseStudyProject> = {
  wonderfood: {
    slug: 'wonderfood',
    brandName: 'Wonderfood',
    heroTitleLine2: 'Identidad y contenido',
    pageTitle: 'Identidad corporativa · Wonderfood',
    category: 'Branding',
    client: 'Wonderfood',
    year: '2024',
    summary:
      'Estrategia de contenido y piezas visuales para una marca de insumos y soluciones para la industria alimentaria: sistema gráfico coherente, narrativa de producto y piezas que refuerzan la percepción de calidad, complementadas con pauta orientada a conversión.',
    body: '¿Tu marca necesita conectar con su comunidad? Diseñemos una estrategia que marque la diferencia.',
    recognition: {
      title: 'Criterio de trabajo',
      body:
        'Priorizamos legibilidad en retail y digital, tono cercano al mundo gastronómico y consistencia entre propuestas Foodeal y el ecosistema Wonderfood, para que cada pieza refuerce confianza y diferenciación sin ruido visual.',
    },
    disciplines: ['Branding', 'Sistema gráfico', 'Contenido', 'Pauta'],
    services: ['Estrategia de contenido', 'Creación de contenido', 'Pauta publicitaria'],
    team: [
      { name: 'David Guerrero', role: 'Director creativo' },
      { name: 'Carolina Betancur', role: 'Social media manager' },
      { name: 'Mike Artunduaga', role: 'Director de fotografía' },
    ],
    heroImage: `${WF}/propuesta-foodeal-01-1024x724.png`,
    gallery: [
      { src: `${WF}/propuesta-foodeal-02-1024x724.png`, alt: 'Wonderfood — propuesta visual 2', caption: 'Sistema gráfico' },
      { src: `${WF}/propuesta-foodeal-06-1024x724.png`, alt: 'Wonderfood — propuesta visual 3', caption: 'Aplicación' },
      { src: `${WF}/86.jpg`, alt: 'Wonderfood — pieza de marca', caption: 'Marca' },
      { src: `${WF}/87-1024x683.jpg`, alt: 'Wonderfood — identidad', caption: 'Identidad' },
      { src: `${WF}/90-1024x683.jpg`, alt: 'Wonderfood — contenido', caption: 'Contenido' },
      { src: `${WF}/92.jpg`, alt: 'Wonderfood — campaña', caption: 'Campaña' },
      { src: `${WF}/93.jpg`, alt: 'Wonderfood — pieza gráfica', caption: 'Piezas' },
      { src: `${WF}/96.jpg`, alt: 'Wonderfood — detalle', caption: 'Detalle' },
      { src: `${WF}/96-930x620.jpg`, alt: 'Wonderfood — aplicación', caption: 'Aplicación' },
      { src: `${WF}/98.jpg`, alt: 'Wonderfood — storytelling visual', caption: 'Storytelling' },
      { src: `${WF}/99.jpg`, alt: 'Wonderfood — cierre de marca', caption: 'Cierre' },
    ],
    related: [
      { label: 'Pietro', href: 'https://mtmmarcatumarca.com/proyectos/', external: true },
      { label: 'Boatte', href: 'https://mtmmarcatumarca.com/proyectos/', external: true },
      { label: 'LETRAS', href: 'https://mtmmarcatumarca.com/proyectos/', external: true },
    ],
  },
};

export const brandingProjectSlugs = Object.keys(brandingProjectsBySlug);
