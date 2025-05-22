export const translations = {
  en: {
    site: {
      title: "Welcome to Kalamatelier",
      description: "Your trusted partner for translation and language services.",
      servicesTitle: "Learn More About Our Services",
      servicesDescription: "We offer a wide range of services to cater to your specific needs, from translations to detailed language analysis.",
      exploreServices: "Explore Services",
      servicesAlt: "Our Services",
    },
    contact: {
      title: "Get in Touch",
      firstname: "First Name",
      lastname: "Last Name",
      subject: "Subject",
      email: "E-mail",
      message: "Message",
      submit: "Send Message",
    },
  },
  nl: {
    site: {
      title: "Welkom bij Kalamatelier",
      description: "Uw vertrouwde partner voor vertaal- en taaldiensten.",
      servicesTitle: "Meer weten over onze diensten",
      servicesDescription: "Wij bieden een breed scala aan diensten aan, van vertalingen tot gedetailleerde taalanalyses.",
      exploreServices: "Ontdek diensten",
      servicesAlt: "Onze diensten",
    },
    contact: {
      title: "Neem contact op",
      firstname: "Voornaam",
      lastname: "Achternaam",
      subject: "Onderwerp",
      email: "E-mail",
      message: "Bericht",
      submit: "Bericht verzenden",
    },
  },
  ar: {
    site: {
      title: "مرحبًا بك في كالماتلير",
      description: "شريكك الموثوق لخدمات الترجمة واللغة.",
      servicesTitle: "تعرف على خدماتنا",
      servicesDescription: "نحن نقدم مجموعة واسعة من الخدمات لتلبية احتياجاتك الخاصة، من الترجمة إلى التحليل اللغوي المفصل.",
      exploreServices: "استكشاف الخدمات",
      servicesAlt: "خدماتنا",
    },
    contact: {
      title: "تواصل معنا",
      firstname: "الاسم الأول",
      lastname: "اسم العائلة",
      subject: "الموضوع",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      submit: "إرسال الرسالة",
    },
  },
} as const;

export type Locale = keyof typeof translations;
