export const navigationTranslations = {
  en: {
    home: 'Home',
    diensten: 'Services',
    vertalingen: 'Translations',
    juridische: 'Legal Translations & Legalization',
    commerciele: 'Commercial Translations',
    literaire: 'Literary Translations',
    revisie: 'Revision',
    taalanalyse: 'Language Analysis',
    arabisch: 'Arabic Levantine',
    over: 'About KALAM',
    contact: 'Contact',
    blog: 'Blog',
  },
  nl: {
    home: 'Home',
    diensten: 'Diensten',
    vertalingen: 'Vertalingen',
    juridische: 'Juridische vertalingen & legalisatie',
    commerciele: 'Commerciële vertalingen',
    literaire: 'Literaire vertalingen',
    revisie: 'Revisie',
    taalanalyse: 'Taalanalyse',
    arabisch: 'Arabisch Levantijns',
    over: 'Over KALAM',
    contact: 'Contact',
    blog: 'Blog',
  },
  ar: {
    home: 'الرئيسية',
    diensten: 'الخدمات',
    vertalingen: 'الترجمة',
    juridische: 'الترجمة القانونية والتصديق',
    commerciele: 'الترجمة التجارية',
    literaire: 'الترجمة الأدبية',
    revisie: 'المراجعة',
    taalanalyse: 'تحليل اللغة',
    arabisch: 'اللهجة العربية الشامية',
    over: 'حول KALAM',
    contact: 'اتصل',
    blog: 'المدونة',
  },
} as const;

export type Locale = keyof typeof navigationTranslations;
export type NavigationKeys = keyof typeof navigationTranslations['en'];

export interface NavigationItem {
  label: NavigationKeys;
  link: string;
  subitems?: NavigationItem[]; // Rekursive Definition für Untermenüs
}
