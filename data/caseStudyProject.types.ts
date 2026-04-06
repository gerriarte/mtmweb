/**
 * Modelo único para fichas de caso (branding, redes, integrados).
 * Plantilla visual: `CaseStudyProjectPage`.
 */

export interface CaseStudyGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyVideo {
  url: string;
  title?: string;
}

export interface CaseStudyTeamCredit {
  name: string;
  role: string;
}

export interface CaseStudyRelatedLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface CaseStudyRecognitionBlock {
  title: string;
  body: string;
}

export interface CaseStudyProject {
  slug: string;
  brandName: string;
  heroTitleLine2?: string;
  pageTitle: string;
  category: string;
  client: string;
  year: string;
  summary: string;
  body?: string;
  /** Tipología editorial (slash); p. ej. Branding · Web */
  disciplines?: string[];
  /** Casos de redes: pilares de contenido; se muestran como tipología si no hay `disciplines` */
  contentPillars?: string[];
  services: string[];
  team?: CaseStudyTeamCredit[];
  heroImage: string;
  gallery: CaseStudyGalleryImage[];
  videos?: CaseStudyVideo[];
  webUrl?: string;
  webUrlLabel?: string;
  recognition?: CaseStudyRecognitionBlock;
  related?: CaseStudyRelatedLink[];
}
