// GSAP-анимации появления блоков
export function initAnimations() {
    // Пользователь просил меньше движения — не анимируем вовсе
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Десктоп: колонки съезжаются с боков
    mm.add('(min-width: 921px)', () => {
        gsap.from('.resume__sidebar', {
            duration: 1.2,
            x: -50,
            opacity: 0,
            ease: 'power3.out'
        });

        gsap.from('.resume__main', {
            duration: 1.2,
            x: 50,
            opacity: 0,
            ease: 'power3.out'
        });
    });

    // Мобильная колонка: только fade/сдвиг по Y, чтобы не было горизонтального скролла
    mm.add('(max-width: 920px)', () => {
        gsap.from('.resume__sidebar', {
            duration: 0.9,
            y: 24,
            opacity: 0,
            ease: 'power3.out'
        });

        gsap.from('.resume__main', {
            duration: 0.9,
            y: 24,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.15
        });
    });

    gsap.from('.resume__photo', {
        duration: 1.5,
        scale: 0.8,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.3
    });

    gsap.utils.toArray('.experience__item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out',
            delay: i * 0.1
        });
    });

    gsap.from('.skills__item', {
        duration: 0.5,
        scale: 0.8,
        opacity: 0,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        delay: 0.5
    });
}
