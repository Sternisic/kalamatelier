import { navigationTranslations } from '../i18n/navigation';
import { footerTranslations } from '../i18n/footer';
import { translations } from '../i18n/translations'; // Importiere die Übersetzungen der Startseite

type Locale = keyof typeof navigationTranslations;

// Funktion zur Animation von Navigationstexten
function animateTextChange(locale: Locale) {
  const translatableElements = document.querySelectorAll<HTMLElement>('.translatable');

  translatableElements.forEach((element) => {
    const key = element.dataset.key as keyof typeof navigationTranslations['en'];

    if (!key) return;

    element.classList.add('text-animate-out');
    setTimeout(() => {
      element.textContent = navigationTranslations[locale][key];
      element.classList.remove('text-animate-out');
      element.classList.add('text-animate-in');

      setTimeout(() => {
        element.classList.remove('text-animate-in');
      }, 300);
    }, 300);
  });
}

// Funktion zur Animation von Footertexten
function animateFooterTextChange(locale: Locale) {
  const footerElements = document.querySelectorAll<HTMLElement>('.footer-translatable');

  footerElements.forEach((element) => {
    const key = element.dataset.key as keyof typeof footerTranslations['en'];

    if (!key) return;

    element.classList.add('text-animate-out');
    setTimeout(() => {
      element.textContent = footerTranslations[locale][key];
      element.classList.remove('text-animate-out');
      element.classList.add('text-animate-in');

      setTimeout(() => {
        element.classList.remove('text-animate-in');
      }, 300);
    }, 300);
  });
}

// Funktion zur Animation von Startseitentexten
function animateHomepageTextChange(locale: Locale) {
  const homepageElements = document.querySelectorAll<HTMLElement>('.homepage-translatable');

  homepageElements.forEach((element) => {
    const key = element.dataset.key as keyof typeof translations['en']['site'];

    if (!key) return;

    element.classList.add('text-animate-out');
    setTimeout(() => {
      element.textContent = translations[locale].site[key];
      element.classList.remove('text-animate-out');
      element.classList.add('text-animate-in');

      setTimeout(() => {
        element.classList.remove('text-animate-in');
      }, 300);
    }, 300);
  });
}

function animateContactTextChange(locale: Locale) {
  const contactElements = document.querySelectorAll<HTMLElement>('.contact-translatable');

  contactElements.forEach((element) => {
    const key = element.dataset.key as keyof typeof translations['en']['contact'];

    if (!key) return;

    element.classList.add('text-animate-out');
    setTimeout(() => {
      element.textContent = translations[locale].contact[key];
      element.classList.remove('text-animate-out');
      element.classList.add('text-animate-in');

      setTimeout(() => {
        element.classList.remove('text-animate-in');
      }, 300);
    }, 300);
  });
}

document.querySelectorAll('.language-switcher').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLElement;
    const locale = target.dataset.locale as Locale;

    if (!locale) return;

    // Aktualisiere Navigation, Footer und andere Abschnitte
    animateTextChange(locale); // Navigation
    animateFooterTextChange(locale); // Footer
    animateHomepageTextChange(locale); // Homepage
    animateContactTextChange(locale); // Contact-Seite

    // URL ohne Neuladen aktualisieren
    const currentPath = window.location.pathname.replace(/^\/[a-z]{2}/, '');
    window.history.pushState({}, '', `/${locale}${currentPath}`);
  });
});

// Funktion zum Wiederherstellen der Ansicht bei Navigation
window.addEventListener('popstate', () => {
  const currentLocale = window.location.pathname.split('/')[1] as Locale;
  if (!currentLocale) return;

  animateTextChange(currentLocale); // Navigation
  animateFooterTextChange(currentLocale); // Footer
  animateHomepageTextChange(currentLocale); // Homepage
  animateContactTextChange(currentLocale); // Contact-Seite
});
