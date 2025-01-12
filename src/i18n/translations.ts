export const translations = {
    en: {
      site: {
        title: 'Welcome to Kalamatelier',
        description: 'Interpreter services and multilingual blog',
      },
      navigation: {
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
    },
    nl: {
      site: {
        title: 'Welkom bij Kalamatelier',
        description: 'Tolkdiensten en meertalige blog',
      },
      navigation: {
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
    },
    ar: {
      site: {
        title: 'مرحبًا بك في كلاماتيلييه',
        description: 'خدمات الترجمة ومدونة متعددة اللغات',
      },
      navigation: {
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
    },
  } as const;
  
  export type Locale = keyof typeof translations; // Typ: 'en' | 'nl' | 'ar'
  export type Translation = (typeof translations)['en']; // Typ der Übersetzungen
  