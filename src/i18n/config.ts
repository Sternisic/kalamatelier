export const locales = ['en', 'nl', 'ar'] as const; // Liste der unterstützten Sprachen
export type Locale = typeof locales[number]; // Typ für 'en' | 'nl' | 'ar'
