// Точка входа: модули выполняются после разбора DOM (type="module" = defer)
import { initI18n } from './modules/i18n.js';
import { initTheme } from './modules/theme.js';
import { initAnimations } from './modules/animations.js';
import { initLightbox } from './modules/lightbox.js';

initI18n();
initTheme();
initLightbox();
initAnimations();

// Кнопка «Скачать PDF» — печать в PDF средствами браузера
document.querySelector('.pdf-btn')?.addEventListener('click', () => window.print());
