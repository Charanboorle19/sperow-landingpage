export const SECTION_MAP: Record<string, string> = {
  features: 'features',
  'how-it-works': 'howitworks',
  benefits: 'benefits',
  blog: 'blog',
  pricing: 'contact',
  contact: 'contact',
  about: 'about',
};

export const getSectionTargetId = (sectionId: string): string | undefined =>
  SECTION_MAP[sectionId.toLowerCase()];

export const scrollToElementById = (targetId: string): boolean => {
  const section = document.getElementById(targetId);
  if (!section) return false;

  const headerHeight = 80;
  const sectionTop =
    section.getBoundingClientRect().top + window.pageYOffset - headerHeight;

  window.scrollTo({ top: sectionTop, behavior: 'smooth' });
  return true;
};
