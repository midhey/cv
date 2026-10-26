const translations = {
    ru: {
        name: "Семенов Алексей Витальевич",
        position: "Fullstack-разработчик",
        contacts_title: "Контакты",
        skills_title: "Ключевые навыки",
        skills_infra: "Инфраструктура",
        languages_title: "Языки",
        about_title: "Обо мне",
        about_text: `Fullstack-разработчик с опытом более 3.5 лет в разработке масштабируемых веб-приложений, Telegram Mini Apps, backend-сервисов и интеграций с внешними API. Основной стек — <b>JavaScript/TypeScript</b> (Vue, React, Node.js) и <b>PHP</b> (Laravel). Отдельное направление — CI/CD и релизные конвейеры для корпоративных систем, а также инструменты на базе AI-агентов (MCP, Claude Code).`,
        experience_title: "Опыт работы",
        education_title: "Образование",
        location: "Великий Новгород",
        ready_to_relocate: "",
        residence_label: "Проживание",
        phone_label: "Телефон",
        email_label: "Email",
        telegram_label: "Telegram",
        github_label: "midhey",
        lang_ru: "Русский",
        lang_ru_level: "Родной",
        lang_en: "Английский",
        lang_en_level: "B1 (Средний)",
        exp_current: "н.в.",
        
        // Experience Titles
        exp_itoffice: "ООО «АйТиОфис»",
        exp_project: "Проектная работа",
        exp_digital: "Digital Pulse",
        exp_kurat: "Куратов",
        exp_new_intel: "Новый Интеллект",

        // Experience Lists (Full from PDF)
        exp_itoffice_list: `
            <li>Перевёл веб-контур корпоративной ERP с монорепозитория и единого WAR на пер-модульную схему: 43 модуля в отдельных репозиториях GitLab, у каждого свой CI и артефакт; миграцию 43/43 репозиториев провёл за один день без простоя системы.</li>
            <li>Спроектировал и вывел в прод три идемпотентные машины полного цикла релиза модуля (размещение → публикация → активация) на Ant, PL/SQL и PowerShell: размещение нового модуля — 10 секунд, повторный прогон — 2 секунды, без правок клиента и изменения регламента администраторов.</li>
            <li>Перевёл сборку двух Java/GWT-продуктов с боевых серверов в Docker-раннер с воспроизводимым тулчейном и добавил стадию проверки готовности приложения по HTTP: простой сервиса при деплое сократился с десятков минут до времени rsync, CI-код двух проектов вынес в общий репозиторий (−66 % кода в проектах).</li>
            <li>Построил конвейер миграции legacy-клиента (Delphi, Java Swing) на React на базе AI-агентов: формализованные скиллы, очередь работ и обязательное независимое ревью — 12 компонентов и 36 функций за 6 недель; ревью поймало 24 дефекта до выхода в прод, включая порчу данных и завышенные итоги в отчётности.</li>
            <li>Разработал MCP-сервер на Node.js — каталог внутренней UI-библиотеки на 347 элементов, генерируемый из AST и JSDoc: поиск с собственным стеммером русского языка без зависимостей, транспорты stdio и StreamableHTTP, hot-reload каталога, доставка через Docker и systemd.</li>
            <li>Реализовал в Java-клиенте ERP синхронизацию рабочей копии по схеме ensure/converge: шесть ручных операций свёрнуты в одну кнопку с окном прогресса и протоколом, локальные изменения разработчика не теряются, 30 сценариев проверены на стендах.</li>
        `,
        exp_project_list: `
            <li>Поддерживал и дорабатывал веб-проекты под задачи заказчика: вносил изменения в интерфейсы, функциональность и интеграции.</li>
            <li>Разработал с нуля Telegram Mini App для e-commerce с интернет-магазином внутри Telegram и кастомной админкой на Laravel Filament.</li>
            <li>Интегрировал приложение с Telegram API: реализовал массовые рассылки из админки и автоматическую отправку уведомлений о заказах в закрытый канал.</li>
            <li>Разработал клиентскую часть на Nuxt 4 с использованием TanStack Vue Query и Pinia; построил собственную архитектуру стилей на SCSS и БЭМ.</li>
            <li>Спроектировал backend на Laravel: реализовал REST API, схему данных в MySQL и авторизацию через проверку Telegram initData.</li>
            <li>Вынес фоновые задачи на Redis worker в отдельном Docker-контейнере, чтобы разгрузить основной API при рассылках и отправке уведомлений.</li>
        `,
        exp_digital_list: `
            <li>Разрабатывал клиентские и серверные части веб-приложений, сервисов автоматизации и чат-ботов на JavaScript, TypeScript и Python.</li>
            <li>Реализовывал e-commerce проекты на Nuxt.js с SSR и интерфейсы для Telegram Mini Apps на React / Gravity UI.</li>
            <li>Проектировал схемы данных в MySQL и Redis, реализовывал хранение контекста и логику работы асинхронных ботов.</li>
            <li>Разрабатывал backend-логику и REST API на NestJS и Python; интегрировал OpenAI, Google Docs, amoCRM, Wazzup и Telegram Bot API.</li>
            <li>Настраивал инфраструктуру проектов: Docker, деплой на Linux-серверы и пайплайны GitLab CI/CD.</li>
            <li>Работал по Scrum и GitFlow; занимался наставничеством и технической поддержкой студентов-практикантов.</li>
        `,
        exp_kurat_list: `
            <li>Разрабатывал frontend-компоненты на Vue.js и Vanilla JS: Ajax-фильтры с сохранением состояния, динамические каталоги, кастомные калькуляторы, формы отправки и интерфейсы по макетам Figma.</li>
            <li>Оптимизировал производительность клиентской и серверной части: анализировал метрики скорости загрузки, устранял узкие места и ускорял отклик проектов с нескольких секунд до долей секунды.</li>
            <li>Интегрировал проекты с внешними API, ERP- и CRM-системами: реализовывал веб-хуки, обмен данными и автоматизацию бизнес-процессов.</li>
            <li>Оптимизировал производительность в MySQL: профилировал SQL-запросы, настраивал кеширование и устранял узкие места в загрузке крупных интернет-магазинов с 10k+ товаров.</li>
            <li>Разрабатывал кастомные модули и плагины на PHP под специфические бизнес-задачи, включая интеграцию с API СДЭК и работу с картами OpenStreetMap, Leaflet и Yandex Maps.</li>
            <li>Участвовал в администрировании серверов: миграции, восстановление после сбоев, аудит безопасности, очистка сайтов, настройка logrotate и Docker.</li>
        `,
        exp_new_intel_list: `
            <li>Участие в разработке MVP отраслевой ERP/CRM-системы «ГеоСтройКонтроль» для цифровизации строительных процессов: интеграция данных от геодезистов, фиксация нарушений и электронное согласование документов.</li>
            <li>Разрабатывал клиентскую часть SPA-приложения на Vue.js для рабочих сценариев системы.</li>
            <li>Участвовал в проектировании REST API в тесной связке с backend-разработчиком на Java Spring.</li>
            <li>Самостоятельно разработал с нуля и опубликовал в RuStore демо-версию мобильного приложения на Kotlin для презентации продукта инвесторам.</li>
            <li>Параллельно разрабатывал корпоративные сайты и лендинги для компаний-учредителей стартапа.</li>
        `,

        edu_bach: "Бакалавр (Информатика и вычислительная техника)",
        edu_college: "Среднее специальное (Компьютерные системы и комплексы)"
    },
    en: {
        name: "Alexey Semenov",
        position: "Fullstack Developer",
        contacts_title: "Contacts",
        skills_title: "Key Skills",
        skills_infra: "Infrastructure",
        languages_title: "Languages",
        about_title: "About Me",
        about_text: `Fullstack Developer with over 3.5 years of experience in developing scalable web applications, Telegram Mini Apps, backend services, and external API integrations. Main stack: <b>JavaScript/TypeScript</b> (Vue, React, Node.js) and <b>PHP</b> (Laravel). A separate track is CI/CD and release pipelines for enterprise systems, plus tooling built on AI agents (MCP, Claude Code).`,
        experience_title: "Work Experience",
        education_title: "Education",
        location: "Veliky Novgorod",
        ready_to_relocate: "",
        residence_label: "Residence",
        phone_label: "Phone",
        email_label: "Email",
        telegram_label: "Telegram",
        github_label: "midhey",
        lang_ru: "Russian",
        lang_ru_level: "Native",
        lang_en: "English",
        lang_en_level: "B1 (Intermediate)",
        exp_current: "present",

        exp_itoffice: "ITOffice",
        exp_project: "Freelance / Project Work",
        exp_digital: "Digital Pulse",
        exp_kurat: "Kuratov",
        exp_new_intel: "New Intelligence",

        exp_itoffice_list: `
            <li>Migrated the web tier of a corporate ERP from a monorepo and a single WAR to a per-module scheme: 43 modules in separate GitLab repositories, each with its own CI and artifact; completed the 43/43 repository migration in one day with zero downtime.</li>
            <li>Designed and shipped to production three idempotent release machines covering the full module lifecycle (allocate to publish to activate) in Ant, PL/SQL, and PowerShell: 10 seconds to onboard a new module, 2 seconds for a converged re-run, with no client changes and no change to admin procedures.</li>
            <li>Moved the builds of two Java/GWT products off production servers into a Docker runner with a reproducible toolchain and added an HTTP application-readiness stage: deploy downtime dropped from tens of minutes to the duration of an rsync, and CI code for both projects was extracted into a shared repository (-66% in-project code).</li>
            <li>Built an AI-agent-driven pipeline for migrating a legacy client (Delphi, Java Swing) to React: formalized skills, a work queue, and a mandatory independent review step - 12 components and 36 functions in 6 weeks; the review caught 24 defects before production, including data corruption and inflated report totals.</li>
            <li>Developed a Node.js MCP server - a 347-item catalog of an internal UI library generated from AST and JSDoc: search with a custom zero-dependency Russian stemmer, stdio and StreamableHTTP transports, catalog hot reload, and Docker/systemd delivery.</li>
            <li>Implemented working-copy synchronization in the ERP Java client using an ensure/converge design: six manual steps collapsed into a single button with a progress window and log, local developer changes are never lost, and 30 scenarios were verified on staging.</li>
        `,
        exp_project_list: `
            <li>Maintained and improved web projects based on client requirements: UI changes, functionality updates, and integrations.</li>
            <li>Developed a Telegram Mini App for e-commerce from scratch with an in-app store and custom Laravel Filament admin panel.</li>
            <li>Integrated the app with Telegram API: implemented bulk messaging from the admin panel and automated order notifications to a private channel.</li>
            <li>Developed the frontend using Nuxt 4, TanStack Vue Query, and Pinia; built a custom style architecture with SCSS and BEM.</li>
            <li>Designed the backend on Laravel: implemented REST API, MySQL data schema, and authorization via Telegram initData verification.</li>
            <li>Moved background tasks to a Redis worker in a separate Docker container to offload the main API during bulk mailings and notifications.</li>
        `,
        exp_digital_list: `
            <li>Developed client and server sides of web applications, automation services, and chatbots using JavaScript, TypeScript, and Python.</li>
            <li>Implemented e-commerce projects on Nuxt.js (SSR) and interfaces for Telegram Mini Apps using React / Gravity UI.</li>
            <li>Designed data schemas in MySQL and Redis, implemented context storage and logic for asynchronous bots.</li>
            <li>Developed backend logic and REST API using NestJS and Python; integrated OpenAI, Google Docs, amoCRM, Wazzup, and Telegram Bot API.</li>
            <li>Configured project infrastructure: Docker, Linux server deployment, and GitLab CI/CD pipelines.</li>
            <li>Worked under Scrum and GitFlow; provided mentoring and technical support for intern students.</li>
        `,
        exp_kurat_list: `
            <li>Developed frontend components using Vue.js and Vanilla JS: stateful Ajax filters, dynamic catalogs, custom calculators, forms, and Figma-based interfaces.</li>
            <li>Optimized client and server-side performance: analyzed load speed metrics, eliminated bottlenecks, and reduced response times from seconds to milliseconds.</li>
            <li>Integrated projects with external APIs, ERP, and CRM systems: implemented webhooks, data exchange, and business process automation.</li>
            <li>Optimized MySQL performance: profiled SQL queries, configured caching, and eliminated bottlenecks for large stores with 10k+ products.</li>
            <li>Developed custom PHP modules and plugins for specific business tasks, including SDEK API integration and mapping services (OSM, Leaflet, Yandex Maps).</li>
            <li>Participated in server administration: migrations, crash recovery, security audits, site cleanup, logrotate, and Docker configuration.</li>
        `,
        exp_new_intel_list: `
            <li>Participated in developing the MVP of "GeoStroyKontrol" ERP/CRM system for construction digitalization: surveyor data integration and e-document approval.</li>
            <li>Developed the client-side SPA using Vue.js for core system workflows.</li>
            <li>Collaborated on REST API design in close cooperation with Java Spring backend developers.</li>
            <li>Independently developed and published a Kotlin-based mobile app demo in RuStore for investor presentations.</li>
            <li>Developed corporate websites and landing pages for the startup's parent companies.</li>
        `,

        edu_bach: "Bachelor's Degree (Computer Science)",
        edu_college: "Associate's Degree (Computer Systems)"
    }
};

function setLanguage(lang) {
    localStorage.setItem('resume_lang', lang);
    
    document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
        btn.classList.toggle('lang-switcher__btn--active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            // Используем innerHTML для поддержки списков
            el.innerHTML = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('resume_lang') || 'ru';
    
    document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    setLanguage(savedLang);
});