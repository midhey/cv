// Переключение языка: подстановка словарей в [data-i18n]
import { ru } from '../locales/ru.js';
import { en } from '../locales/en.js';

const translations = { ru, en };
const STORAGE_KEY = 'resume_lang';

export function setLanguage(lang) {
    if (!translations[lang]) return;

    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll('.lang-switcher__btn').forEach((btn) => {
        btn.classList.toggle('lang-switcher__btn--active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            // innerHTML — словари содержат разметку (<b>, <li>)
            el.innerHTML = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
}

export function initI18n() {
    const savedLang = localStorage.getItem(STORAGE_KEY) || 'ru';

    document.querySelectorAll('.lang-switcher__btn').forEach((btn) => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    setLanguage(savedLang);
}
