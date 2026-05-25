export const HOME_PATH = '/opd-management-software';

export const isHomePath = (pathname: string): boolean =>
  pathname === HOME_PATH || pathname === '/';

export const BLOG_ROUTES = {
  aiClinicalDocs:
    '/blog/How-AI-Helps-Doctors-Reduce-Clinical-Documentation-Time',
  emrIndia: '/blog/Best-EMR-Software-for-Doctors-in-India',
  clinicManagement:
    '/blog/How-to-Choose-the-Right-Clinic-Management-Software',
} as const;
