export type PortfolioServiceVertical =
  | 'branding'
  | 'web'
  | 'strategy'
  | 'audiovisual'
  | 'fotografia';

export interface PortfolioProject {
  id: number;
  title: string;
  /** Filtros: Creación de marca · Empaques · Publicidad */
  category: string;
  /** Casos en modales de servicios */
  serviceVertical: PortfolioServiceVertical;
  img: string;
  description: string;
  client: string;
  year: string;
  gallery: { type: 'image' | 'video'; url: string; caption?: string }[];
  /** Si existe, el caso abre la plantilla `/proyectos/branding/:slug` en lugar del modal */
  brandingCaseSlug?: string;
  /** Si existe, el caso abre la plantilla `/proyectos/redes-sociales/:slug` en lugar del modal */
  socialMediaCaseSlug?: string;
  /** Caso integrado (web + piezas + video): `/proyectos/caso/:slug` */
  integratedCaseSlug?: string;
}

/**
 * Diez casos con nombres alineados al portafolio destacado en
 * https://mtmmarcatumarca.com/
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: 'Wonderfood',
    category: 'Creación de marca',
    serviceVertical: 'branding',
    brandingCaseSlug: 'wonderfood',
    img: '/Proyectos/wonderfood/propuesta-foodeal-01-1024x724.png',
    description:
      'Estrategia de contenido para insumos de calidad: piezas que conectan con la comunidad de tatuadores profesionales y pauta que impulsó las ventas.',
    client: 'Wonderfood',
    year: '2024',
    gallery: [
      {
        type: 'image',
        url: '/Proyectos/wonderfood/propuesta-foodeal-01-1024x724.png',
        caption: 'Propuesta visual',
      },
      {
        type: 'image',
        url: '/Proyectos/wonderfood/propuesta-foodeal-02-1024x724.png',
        caption: 'Sistema gráfico',
      },
    ],
  },
  {
    id: 2,
    title: 'Unilago',
    category: 'Publicidad',
    serviceVertical: 'strategy',
    socialMediaCaseSlug: 'unilago',
    img: '/Proyectos/Unilago/centrocomercial-unilago-proyecto-social-media-resultados-posicionamiento-tecnologia-05-600x391.png',
    description:
      'Redes sociales para el centro comercial Unilago: creación de contenido, video y pauta alineados a posicionamiento en tecnología y retail.',
    client: 'Unilago',
    year: '2024',
    gallery: [
      {
        type: 'image',
        url: '/Proyectos/Unilago/centrocomercial-unilago-proyecto-social-media-resultados-posicionamiento-tecnologia-05-600x391.png',
        caption: 'Campaña social',
      },
      {
        type: 'image',
        url: '/Proyectos/Unilago/Unilago-MTM-Marca-tu-marca3.png',
        caption: 'Contenido',
      },
    ],
  },
  {
    id: 3,
    title: 'Super Ricas',
    category: 'Empaques',
    serviceVertical: 'fotografia',
    img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=1000',
    description:
      'Fotografía de producto y piezas gráficas para categoría de alimentos: textura, color y presentación que refuerzan recordación en anaquel.',
    client: 'Super Ricas',
    year: '2023',
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=1200',
        caption: 'Producto',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=1000',
        caption: 'Packaging',
      },
    ],
  },
  {
    id: 4,
    title: 'LUISA FRANCO',
    category: 'Creación de marca',
    serviceVertical: 'branding',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1000',
    description:
      'Proyecto editorial y marca personal: sistema tipográfico, piezas para medios y narrativa alineada a la voz de la autora.',
    client: 'LUISA FRANCO',
    year: '2024',
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1200',
        caption: 'Sistema gráfico',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000',
        caption: 'Aplicaciones',
      },
    ],
  },
  {
    id: 5,
    title: 'Los Olivos proyectos audiovisuales 2023',
    category: 'Publicidad',
    serviceVertical: 'audiovisual',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000',
    description:
      'Producción audiovisual con dirección de arte y post: piezas para redes, formatos largos y contenido alineado a la marca del proyecto.',
    client: 'Los Olivos',
    year: '2023',
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200',
        caption: 'Rodaje',
      },
      { type: 'video', url: '#', caption: 'Resumen audiovisual' },
    ],
  },
  {
    id: 6,
    title: 'IMPOXFAST',
    category: 'Creación de marca',
    serviceVertical: 'web',
    integratedCaseSlug: 'impoxfast',
    img: '/Proyectos/Impoxfast/oficinas-impox.png',
    description:
      'Caso integral: web, branding, fotografía, contenido para redes, piezas en video y pauta — alineado al portafolio en mtmmarcatumarca.com.',
    client: 'IMPOXFAST',
    year: '2024',
    gallery: [
      {
        type: 'image',
        url: '/Proyectos/Impoxfast/oficinas-impox.png',
        caption: 'Marca',
      },
      {
        type: 'image',
        url: '/Proyectos/Impoxfast/carrusel-8-0156-1.png',
        caption: 'Carrusel',
      },
    ],
  },
  {
    id: 7,
    title: 'Hotel Inter Bogotà',
    category: 'Creación de marca',
    serviceVertical: 'web',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000',
    description:
      'Experiencia digital para hospitalidad: storytelling del destino, reservas y diseño responsive acorde a estándares de la marca.',
    client: 'Hotel Inter Bogotà',
    year: '2023',
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
        caption: 'Hero y estructura',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000',
        caption: 'Detalle',
      },
    ],
  },
  {
    id: 8,
    title: 'FESTIVAL EL CONVITE',
    category: 'Publicidad',
    serviceVertical: 'branding',
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=1000',
    description:
      'Identidad de festival y piezas de difusión: energía de marca, sistemas gráficos para evento multisede y activaciones con la comunidad.',
    client: 'Festival El Convite',
    year: '2024',
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=1200',
        caption: 'Key visual',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1429963354344-1a51b459dd80?auto=format&fit=crop&q=80&w=1000',
        caption: 'Experiencia',
      },
    ],
  },
  {
    id: 9,
    title: 'Dance hall Paradise',
    category: 'Creación de marca',
    serviceVertical: 'branding',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000',
    description:
      'Branding para espacio de baile y eventos: look nocturno, motion y aplicaciones que refuerzan la personalidad del venue.',
    client: 'Dance hall Paradise',
    year: '2024',
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200',
        caption: 'Look & feel',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000',
        caption: 'Evento',
      },
    ],
  },
  {
    id: 10,
    title: 'Dahian Lorena – Yaya y Daimu',
    category: 'Creación de marca',
    serviceVertical: 'branding',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
    description:
      'Creación de marca y narrativa para proyecto editorial: universo visual, personajes y piezas que acompañan el lanzamiento del libro.',
    client: 'Dahian Lorena',
    year: '2023',
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
        caption: 'Identidad',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1000',
        caption: 'Aplicaciones digitales',
      },
    ],
  },
];

export function getBrandingProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.serviceVertical === 'branding');
}

export function getWebProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.serviceVertical === 'web');
}

export function getStrategyProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.serviceVertical === 'strategy');
}

export function getAudiovisualProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.serviceVertical === 'audiovisual');
}

export function getFotografiaProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.serviceVertical === 'fotografia');
}
