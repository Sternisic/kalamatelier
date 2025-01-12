import { navigationTranslations } from '../i18n/navigation';
import { footerTranslations } from '../i18n/footer';

type Locale = keyof typeof navigationTranslations;

// Animation für das Ersetzen von Navigationstexten
function animateTextChange(locale: Locale) {
  const translatableElements = document.querySelectorAll<HTMLElement>('.translatable');

  translatableElements.forEach((element) => {
    const key = element.dataset.key as keyof typeof navigationTranslations['en'];

    if (!key) return;

    // Text ausblenden
    element.classList.add('text-animate-out');
    setTimeout(() => {
      // Text aktualisieren
      element.textContent = navigationTranslations[locale][key];
      // Text einblenden
      element.classList.remove('text-animate-out');
      element.classList.add('text-animate-in');

      // Entferne Einblendungsklasse nach der Animation
      setTimeout(() => {
        element.classList.remove('text-animate-in');
      }, 300);
    }, 300);
  });
}

// Animation für das Ersetzen von Footertexten
function animateFooterTextChange(locale: Locale) {
  const footerElements = document.querySelectorAll<HTMLElement>('.footer-translatable');

  footerElements.forEach((element) => {
    const key = element.dataset.key as keyof typeof footerTranslations['en'];

    if (!key) return;

    // Text ausblenden
    element.classList.add('text-animate-out');
    setTimeout(() => {
      // Text aktualisieren
      element.textContent = footerTranslations[locale][key];
      // Text einblenden
      element.classList.remove('text-animate-out');
      element.classList.add('text-animate-in');

      // Entferne Einblendungsklasse nach der Animation
      setTimeout(() => {
        element.classList.remove('text-animate-in');
      }, 300);
    }, 300);
  });
}

// Sprachumschaltung-Handler
document.querySelectorAll('.language-switcher').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLElement;
    const locale = target.dataset.locale as Locale;

    if (!locale) return;

    // Navigation aktualisieren
    animateTextChange(locale);

    // Footer aktualisieren
    animateFooterTextChange(locale);

    // Aktive Sprache visuell aktualisieren
    document.querySelectorAll('.language-switcher').forEach((link) => {
      link.classList.remove('bg-[#3D2225]', 'text-[#EAE5E2]');
      link.classList.add('hover:bg-[#CB895D]', 'hover:text-[#EAE5E2]');
    });

    target.classList.add('bg-[#3D2225]', 'text-[#EAE5E2]');
    target.classList.remove('hover:bg-[#CB895D]', 'hover:text-[#EAE5E2]');

    // URL aktualisieren
    setTimeout(() => {
      window.history.pushState({}, '', `/${locale}`);
    }, 600);
  });
});
