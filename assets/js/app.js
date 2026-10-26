// Точка входа: модули выполняются после разбора DOM (type="module" = defer)
import { initI18n } from './modules/i18n.js';
import { initAnimations } from './modules/animations.js';
import { initLightbox } from './modules/lightbox.js';

initI18n();
initLightbox();
initAnimations();
