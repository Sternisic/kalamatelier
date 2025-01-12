import { translations } from './translations'; // Importiere allgemeine Übersetzungen
import { navigationTranslations } from './navigation';
import { footerTranslations } from './footer';
import type { FooterLocale } from './footer';
import type { Locale } from './translations';

// Unterstützte Sprachen und Fallback
const fallbackLocale: Locale = 'en';
const supportedLocales: Locale[] = ['en', 'nl', 'ar'];

// Allgemeine Funktion zur Sprachwahl
function getSelectedLocale(locale: string): Locale {
  return supportedLocales.includes(locale as Locale) ? (locale as Locale) : fallbackLocale;
}

// Allgemeine Übersetzungen für Inhalte
export function getTranslation(locale: string) {
  const selectedLocale: Locale = getSelectedLocale(locale);
  return translations[selectedLocale];
}

// Übersetzungen für die Navigation
export function getNavigationTranslation(locale: string) {
  const selectedLocale: Locale = getSelectedLocale(locale);
  return navigationTranslations[selectedLocale];
}

// Übersetzungen für den Footer abrufen
export function getFooterTranslation(locale: string) {
  const selectedLocale: FooterLocale = getSelectedLocale(locale);
  return footerTranslations[selectedLocale];
}
