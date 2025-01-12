export const footerTranslations = {
    en: {
      tel: 'Tel:',
      email: 'E-mail:',
      about: 'About KALAM',
    },
    nl: {
      tel: 'Tel:',
      email: 'E-mail:',
      about: 'Over KALAM',
    },
    ar: {
      tel: 'الهاتف:',
      email: 'البريد الإلكتروني:',
      about: 'حول KALAM',
    },
  } as const;
  
  export type FooterLocale = keyof typeof footerTranslations; // 'en' | 'nl' | 'ar'
  export type FooterTranslation = (typeof footerTranslations)['en']; // Typ für Übersetzungen
  