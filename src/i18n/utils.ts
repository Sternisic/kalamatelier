import { translations } from './translations';
import { navigationTranslations } from './navigation';
import { footerTranslations } from './footer';
import { contactTranslations } from './contact';
import { locales } from './config';
import type { Locale } from './config';

// Allgemeine Funktion zur Sprachwahl
export function getSelectedLocale(locale?: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : 'en';
}

// Allgemeine Übersetzungen für Inhalte
export function getTranslation(locale?: string) {
  return translations[getSelectedLocale(locale)];
}

// Übersetzungen für die Navigation
export function getNavigationTranslation(locale?: string) {
  return navigationTranslations[getSelectedLocale(locale)];
}

// Übersetzungen für den Footer
export function getFooterTranslation(locale?: string) {
  return footerTranslations[getSelectedLocale(locale)];
}

// Übersetzungen für Kontakt
export function getContactTranslation(locale?: string) {
  return contactTranslations[getSelectedLocale(locale)];
}
