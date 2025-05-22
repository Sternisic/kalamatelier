export type Locale = keyof typeof navigationTranslations;

export interface NavigationItem {
  label: keyof typeof navigationTranslations['en'];
  link: string;
  subitems?: NavigationItem[];
}

// Übersetzungen (Falls noch nicht vorhanden, hier hinzufügen)
export const navigationTranslations = {
  en: {
    home: 'Home',
    diensten: 'Services',
    vertalingen: 'Translations',
    uebersetzungen: 'Translations',
    revisie: 'Revision',
    taalanalyse: 'Language Analysis',
    sprachanalyse: 'Language Analysis', // Neuer Schlüssel hinzugefügt
    over: 'About',
    contact: 'Contact',
    blog: 'Blog',
  },
  nl: {
    home: 'Home',
    diensten: 'Diensten',
    vertalingen: 'Vertalingen',
    uebersetzungen: 'Vertalingen',
    revisie: 'Revisie',
    taalanalyse: 'Taalanalyse',
    sprachanalyse: 'Taalanalyse', // Neuer Schlüssel hinzugefügt
    over: 'Over ons',
    contact: 'Contact',
    blog: 'Blog',
  },
  ar: {
    home: 'الرئيسية',
    diensten: 'الخدمات',
    vertalingen: 'الترجمة',
    uebersetzungen: 'الترجمة',
    revisie: 'مراجعة',
    taalanalyse: 'تحليل اللغة',
    sprachanalyse: 'تحليل اللغة', // Neuer Schlüssel hinzugefügt
    over: 'حول',
    contact: 'اتصل',
    blog: 'مدونة',
  },
} as const;