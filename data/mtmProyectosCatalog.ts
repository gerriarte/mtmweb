/**
 * Catálogo alineado a https://mtmmarcatumarca.com/proyectos/
 * Filtros: Audiovisuales, Branding, Social Media, Web
 * portfolioProjectId enlaza con data/portfolioData.ts cuando existe caso detallado.
 */

export type ProyectosPageFilter = 'Todo' | 'Audiovisuales' | 'Branding' | 'Social Media' | 'Web';

export interface MtmProyectoCatalogItem {
  slug: string;
  title: string;
  filter: Exclude<ProyectosPageFilter, 'Todo'>;
  /** id en portfolioProjects; null si solo figura en el listado web sin ficha extendida local */
  portfolioProjectId: number | null;
  /** Caso con plantilla branding en `/proyectos/branding/:slug` */
  brandingCaseSlug?: string;
}

export const PROYECTOS_FILTERS: ProyectosPageFilter[] = [
  'Todo',
  'Audiovisuales',
  'Branding',
  'Social Media',
  'Web',
];

export const mtmProyectosCatalog: MtmProyectoCatalogItem[] = [
  { slug: 'alianza-francesa', title: 'Alianza Francesa', filter: 'Social Media', portfolioProjectId: 27 },
  { slug: 'arte-en-los-territorios', title: 'Arte en los Territorios', filter: 'Branding', portfolioProjectId: null },
  { slug: 'ascoop', title: 'Ascoop', filter: 'Branding', portfolioProjectId: null },
  { slug: 'ball-du-juillet', title: 'Ball du Juillet', filter: 'Branding', portfolioProjectId: null },
  { slug: 'basilico', title: 'Basilico', filter: 'Branding', portfolioProjectId: null },
  { slug: 'bestune', title: 'Bestune', filter: 'Branding', portfolioProjectId: null },
  { slug: 'boatte', title: 'boatte', filter: 'Branding', portfolioProjectId: null },
  {
    slug: 'campanas-excelencia-exequial',
    title: 'Campañas Excelencia Exequial 2019-2021',
    filter: 'Social Media',
    portfolioProjectId: 26,
  },
  { slug: 'casapp', title: 'Casapp', filter: 'Web', portfolioProjectId: null },
  { slug: 'cocos-and-sunsets', title: 'Cocos and Sunsets', filter: 'Branding', portfolioProjectId: null },
  { slug: 'colombia-feliz', title: 'COLOMBIA FELIZ', filter: 'Branding', portfolioProjectId: null },
  { slug: 'cuidar-mas', title: 'Cuidar +', filter: 'Branding', portfolioProjectId: 12 },
  { slug: 'd-s-empresariales', title: 'D&S Empresariales', filter: 'Branding', portfolioProjectId: null },
  { slug: 'dahian-lorena-yaya-daimu', title: 'Dahian Lorena – Yaya y Daimu', filter: 'Branding', portfolioProjectId: null },
  { slug: 'dance-hall-paradise', title: 'Dance hall Paradise', filter: 'Branding', portfolioProjectId: 11 },
  { slug: 'defam', title: 'Defam', filter: 'Branding', portfolioProjectId: null },
  { slug: 'dejavu-gourmet', title: 'Dejavu gourmet', filter: 'Social Media', portfolioProjectId: 25 },
  {
    slug: 'duvy-class',
    title: 'Duvy Class – video institucional y campañas rrss',
    filter: 'Audiovisuales',
    portfolioProjectId: null,
  },
  { slug: 'eureka-cafe', title: 'EUREKA CAFE', filter: 'Branding', portfolioProjectId: 24 },
  {
    slug: 'marketing-libro-fabula',
    title:
      'Marketing Libro Diseño — MTM Marca Tu Marca · Fábula de Rafael Pombo, Esopo y los hermanos Grimm',
    filter: 'Branding',
    portfolioProjectId: null,
  },
  { slug: 'festival-el-convite', title: 'FESTIVAL EL CONVITE', filter: 'Social Media', portfolioProjectId: 23 },
  { slug: 'finanzas-saludables', title: 'Finanzas Saludables', filter: 'Branding', portfolioProjectId: null },
  { slug: 'gorilla-burguer', title: 'Gorilla burguer', filter: 'Social Media', portfolioProjectId: 22 },
  { slug: 'hablemos-de-riesgo', title: 'Hablemos de Riesgo', filter: 'Web', portfolioProjectId: 17 },
  { slug: 'hacienda-gato-dorado', title: 'Hacienda gato dorado', filter: 'Social Media', portfolioProjectId: 21 },
  { slug: 'herder', title: 'Herder', filter: 'Branding', portfolioProjectId: null },
  { slug: 'hotel-inter-bogota', title: 'Hotel Inter Bogotà', filter: 'Web', portfolioProjectId: 16 },
  { slug: 'hunter-store', title: 'Hunter store', filter: 'Branding', portfolioProjectId: null },
  { slug: 'hyl', title: 'Hyl', filter: 'Social Media', portfolioProjectId: 20 },
  { slug: 'impoxfast', title: 'IMPOXFAST', filter: 'Web', portfolioProjectId: 6 },
  { slug: 'juanchi', title: 'Juanchi', filter: 'Branding', portfolioProjectId: null },
  { slug: 'kenzukiurban', title: 'Kenzukiurban', filter: 'Branding', portfolioProjectId: null },
  { slug: 'la-exitosa', title: 'La Exitosa', filter: 'Branding', portfolioProjectId: 10 },
  { slug: 'letras', title: 'LETRAS', filter: 'Branding', portfolioProjectId: 9 },
  {
    slug: 'los-olivos-audiovisual',
    title: 'Los Olivos proyectos audiovisuales 2023',
    filter: 'Audiovisuales',
    portfolioProjectId: null,
  },
  { slug: 'luisa-franco', title: 'LUISA FRANCO', filter: 'Branding', portfolioProjectId: null },
  { slug: 'mateo-quintana', title: 'Mateo Quintana', filter: 'Branding', portfolioProjectId: null },
  { slug: 'mcm-seguros', title: 'MCM SEGUROS', filter: 'Web', portfolioProjectId: 14 },
  { slug: 'nut-plus', title: 'Nut Plus', filter: 'Branding', portfolioProjectId: null },
  { slug: 'oxi-50-rrss', title: 'OXI 50 20 AÑOS – RRSS 2021', filter: 'Social Media', portfolioProjectId: 19 },
  { slug: 'pietro', title: 'Pietro', filter: 'Branding', portfolioProjectId: 8 },
  {
    slug: 'portafolio-fotografia-inmobiliaria',
    title: 'portafolio fotografía inmobiliaria',
    filter: 'Audiovisuales',
    portfolioProjectId: null,
  },
  { slug: 'skull-tattoo-supply', title: 'Skull Tattoo Supply', filter: 'Branding', portfolioProjectId: null },
  { slug: 'stop-and-wok', title: 'Stop and Wok', filter: 'Branding', portfolioProjectId: null },
  { slug: 'super-ricas', title: 'Super Ricas', filter: 'Branding', portfolioProjectId: null },
  {
    slug: 'tercer-acto-arte-en-movimiento',
    title: 'Tercer Acto: Arte en Movimiento',
    filter: 'Audiovisuales',
    portfolioProjectId: null,
  },
  { slug: 'undmo', title: 'UNDMO', filter: 'Branding', portfolioProjectId: null },
  { slug: 'unilago', title: 'Unilago', filter: 'Social Media', portfolioProjectId: 2 },
  { slug: 'villa-juan', title: 'Villa Juan', filter: 'Web', portfolioProjectId: 13 },
  { slug: 'viotrans', title: 'Viotrans', filter: 'Branding', portfolioProjectId: null },
  {
    slug: 'wonderfood',
    title: 'Wonderfood',
    filter: 'Branding',
    portfolioProjectId: 1,
    brandingCaseSlug: 'wonderfood',
  },
];
