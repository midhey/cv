// Основной файл для скриптов с GSAP анимациями
document.addEventListener('DOMContentLoaded', () => {
    // Регистрируем плагин
    gsap.registerPlugin(ScrollTrigger);

    // 1. Анимация появления заголовка и боковой панели
    gsap.from('.resume__sidebar', {
        duration: 1.2,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    });

    // 1.5. Анимация фото
    gsap.from('.resume__photo', {
        duration: 1.5,
        scale: 0.8,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.3
    });

    // Инициализация GLightbox
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: false,
        autoplayVideos: true
    });

    gsap.from('.resume__main', {
        duration: 1.2,
        x: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    // 2. Анимация блоков опыта работы (Reveal)
    const experienceItems = gsap.utils.toArray('.experience__item');
    
    experienceItems.forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%", // Анимация начнется, когда верх блока достигнет 90% высоты экрана
                toggleActions: "play none none none"
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out',
            delay: i * 0.1 // Небольшая задержка для каждого следующего элемента
        });
    });

    // 4. Анимация навыков (Stagger effect)
    gsap.from('.skills__item', {
        duration: 0.5,
        scale: 0.8,
        opacity: 0,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        delay: 0.5
    });

    console.log('Resume animations initialized with GSAP');
});