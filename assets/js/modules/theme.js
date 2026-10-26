// Переключение темы. Начальное значение выставляет инлайн-скрипт в <head> (до отрисовки).
const STORAGE_KEY = 'resume_theme';

export function initTheme() {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        localStorage.setItem(STORAGE_KEY, next);
    });

    // Пока пользователь не выбрал тему вручную — следуем за системной
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
        }
    });
}
