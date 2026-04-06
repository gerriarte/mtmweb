/**
 * Registro único de casos con ficha extendida. Resolver por `slug` (independiente de la ruta branding / redes / caso).
 */

import type { CaseStudyProject } from './caseStudyProject.types';
import { integratedProjectsBySlug } from './integratedProjects';
import { brandingProjectsBySlug } from './brandingProjects';
import { socialMediaProjectsBySlug } from './socialMediaProjects';

export const caseStudyBySlug: Record<string, CaseStudyProject> = {
  ...integratedProjectsBySlug,
  ...brandingProjectsBySlug,
  ...socialMediaProjectsBySlug,
};

export function getCaseStudyProject(slug: string | undefined): CaseStudyProject | undefined {
  if (!slug) return undefined;
  return caseStudyBySlug[slug];
}
