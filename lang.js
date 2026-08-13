// Language Toggle System
// Default: Spanish (es) — target audience is Latin America
// Reads/writes localStorage('fitness-lang')

const Lang = {
  current: localStorage.getItem('fitness-lang') || 'es',

  init() {
    this.apply(this.current);
    this.bindToggle();
  },

  apply(lang) {
    this.current = lang;
    localStorage.setItem('fitness-lang', lang);

    // Update all elements with data-es / data-en attributes
    document.querySelectorAll('[data-es][data-en]').forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });

    // Update placeholders
    document.querySelectorAll('[data-es-placeholder][data-en-placeholder]').forEach(el => {
      el.placeholder = el.getAttribute(`data-${lang}-placeholder`);
    });

    // Toggle instruction blocks (full paragraphs that differ by language)
    document.querySelectorAll('[data-lang-block]').forEach(el => {
      el.style.display = el.getAttribute('data-lang-block') === lang ? '' : 'none';
    });

    // Update toggle button
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = lang === 'es' ? '🇪🇸 ES' : '🇺🇸 EN';
      btn.title = lang === 'es' ? 'Switch to English' : 'Cambiar a Español';
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
  },

  toggle() {
    this.apply(this.current === 'es' ? 'en' : 'es');
  },

  bindToggle() {
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', () => this.toggle());
    }
  }
};

// Initialize immediately so labels are correct before App.init()
document.addEventListener('DOMContentLoaded', () => Lang.init());
