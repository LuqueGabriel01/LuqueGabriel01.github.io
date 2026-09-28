import { translations, type Lang } from './translations';

const STORAGE_KEY = 'lang';
const DEFAULT_LANG: Lang = 'es';

function getByPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function getStoredLanguage(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    return DEFAULT_LANG;
  }
  return DEFAULT_LANG;
}

function persistLanguage(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    return;
  }
}

export function applyLanguage(lang: Lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    const value = getByPath(translations[lang], key);
    if (typeof value === 'string') {
      el.textContent = value;
    }
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (!key) return;
    const value = getByPath(translations[lang], key);
    if (typeof value === 'string') {
      el.innerHTML = value;
    }
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    const spec = el.dataset.i18nAttr;
    if (!spec) return;
    spec.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':');
      if (!attr || !key) return;
      const value = getByPath(translations[lang], key);
      if (typeof value === 'string') {
        el.setAttribute(attr, value);
      }
    });
  });

  document.querySelectorAll<HTMLElement>('.lang-btn').forEach((btn) => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
  });
}

export function initLanguageSwitcher() {
  applyLanguage(getStoredLanguage());

  document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang as Lang | undefined;
      if (!lang) return;
      persistLanguage(lang);
      applyLanguage(lang);
    });
  });
}
