/**
 * Casos de redes sociales — ruta `/proyectos/redes-sociales/:slug`.
 * Misma plantilla: `CaseStudyProject`; `contentPillars` se muestra como tipología si no hay `disciplines`.
 *
 * Para añadir un proyecto:
 * 1. Imágenes en `public/Proyectos/{CarpetaCliente}/`.
 * 2. Entrada en `socialMediaProjectsBySlug`.
 * 3. En `portfolioData` asigna `socialMediaCaseSlug` al caso del home y ajusta `id` si enlazas desde el catálogo.
 */

import type { CaseStudyProject } from './caseStudyProject.types';

export type SocialMediaProjectCase = CaseStudyProject;

const U = '/Proyectos/Unilago';

export const socialMediaProjectsBySlug: Record<string, CaseStudyProject> = {
  unilago: {
    slug: 'unilago',
    brandName: 'Unilago',
    heroTitleLine2: 'Contenido y comunidad',
    pageTitle: 'Redes sociales · CC Unilago',
    category: 'Redes sociales',
    client: 'Unilago — Centro comercial',
    year: '2024',
    summary:
      'Estrategia y operación de redes para el centro comercial: contenido orientado a resultados, refuerzo de posicionamiento en categoría tecnología y retail, y piezas que mantienen activa la conversación con la comunidad.',
    body: '¿Tu marca necesita conectar con su comunidad? Diseñemos una estrategia que marque la diferencia.',
    recognition: {
      title: 'Criterio de trabajo',
      body:
        'Calendario alineado a hitos comerciales, formatos nativos por canal y mensajes claros sobre oferta y experiencia en el centro, priorizando engagement sostenido frente a picos aislados de alcance.',
    },
    contentPillars: ['Creación de contenido', 'Videos'],
    services: [
      'Estrategia de contenido',
      'Creación de contenido',
      'Video para redes',
      'Pauta publicitaria',
    ],
    team: [
      { name: 'David Guerrero', role: 'Director creativo' },
      { name: 'Carolina Betancur', role: 'Social media manager' },
      { name: 'Mike Artunduaga', role: 'Director de fotografía' },
    ],
    heroImage: `${U}/centrocomercial-unilago-proyecto-social-media-resultados-posicionamiento-tecnologia-05-600x391.png`,
    gallery: [
      {
        src: `${U}/centrocomercial-unilago-proyecto-social-media-resultados-posicionamiento-tecnologia-07-600x391.png`,
        alt: 'Unilago — resultados y posicionamiento',
        caption: 'Resultados',
      },
      {
        src: `${U}/Unilago-MTM-Marca-tu-marca3.png`,
        alt: 'Unilago — pieza de contenido',
        caption: 'Contenido',
      },
      {
        src: `${U}/Unilago-MTM-Marca-tu-marca1-169x300.png`,
        alt: 'Unilago — formato vertical',
        caption: 'Piezas sociales',
      },
      {
        src: `${U}/centrocomercial-unilago-proyecto-social-media-resultados-posicionamiento-tecnologia-02-300x195.png`,
        alt: 'Unilago — métricas y alcance',
        caption: 'Alcance',
      },
      {
        src: `${U}/centrocomercial-unilago-proyecto-social-media-resultados-posicionamiento-tecnologia-03-300x195.png`,
        alt: 'Unilago — campaña digital',
        caption: 'Campaña',
      },
      {
        src: `${U}/centrocomercial-unilago-proyecto-social-media-resultados-posicionamiento-tecnologia-04-300x195.png`,
        alt: 'Unilago — desempeño',
        caption: 'Desempeño',
      },
      {
        src: `${U}/centrocomercial-unilago-proyecto-social-media-resultados-posicionamiento-tecnologia-06-300x195.png`,
        alt: 'Unilago — contenido',
        caption: 'Feed',
      },
      {
        src: `${U}/centrocomercial-unilago-proyecto-social-media-resultados-posicionamiento-tecnologia-07-300x195.png`,
        alt: 'Unilago — detalle de pieza',
        caption: 'Detalle',
      },
    ],
    related: [
      { label: 'Alianza Francesa', href: 'https://mtmmarcatumarca.com/proyectos/', external: true },
      { label: 'Festival El Convite', href: 'https://mtmmarcatumarca.com/proyectos/', external: true },
      { label: 'Eureka Café', href: 'https://mtmmarcatumarca.com/proyectos/', external: true },
    ],
  },
};
