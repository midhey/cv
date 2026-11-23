// Словарь: английский
export const en = {
    name: "Alexey Semenov",
    position: "Fullstack Developer",
    headline: "Fullstack Developer · AI Agents & MCP",
    contacts_title: "Contacts",
    skills_title: "Key Skills",
    skills_infra: "Infrastructure",
    languages_title: "Languages",
    about_title: "About Me",
    about_text: `Fullstack Developer with 4 years of commercial experience: web applications, Telegram Mini Apps, backend services, and external API integrations. Main stack: <b>JavaScript/TypeScript</b> (Vue, React, Node.js) and <b>PHP</b> (Laravel). Since 2026 I have been working on a corporate ERP: I started with release pipelines and CI/CD, and my main focus now is <b>AI agents for software development</b>: MCP servers, subsystem knowledge bases, and code migration pipelines with independent review (Claude Code, Codex).`,
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
    theme_toggle: "Toggle theme",
    pdf_download: "Download PDF",

    exp_itoffice: "ITOffice",
    exp_project: "Freelance / Project Work",
    exp_digital: "Digital Pulse",
    exp_kurat: "Kuratov",
    exp_new_intel: "New Intelligence",

    exp_itoffice_list: `
        <li>Built a pipeline that turns an ERP subsystem into a knowledge base for AI agents: registry exports from the test database, a year of usage statistics, source and report-template scanning, parallel module analyses by agents, and evaluation question sets. Knowledge bases now cover 19 subsystems: an agent finds the right function, module, stored query, and table in minutes - knowledge that used to live in a few people's heads.</li>
        <li>Built an AI-agent-driven pipeline for migrating a legacy client (Delphi, Java Swing) to React: formalized skills, a work queue ordered by usage, and a mandatory independent review step; execution steps are delegated to Codex CLI. 12 components and 36 functions in 6 weeks; the review caught 24 defects before production, including data corruption and inflated report totals.</li>
        <li>Developed a Node.js MCP server - a 347-item catalog of an internal UI library generated from AST and JSDoc: search with a custom zero-dependency Russian stemmer, stdio and StreamableHTTP transports, catalog hot reload, and Docker/systemd delivery.</li>
        <li>Migrated the web tier of a corporate ERP from a monorepo and a single WAR to a per-module scheme: 43 modules in separate GitLab repositories, each with its own Docker-based CI, all 43 moved in one day with zero downtime; module release (allocate, publish, activate) runs on three idempotent machines in Ant, PL/SQL, and PowerShell. A module now builds in 1.5 minutes instead of 1.5 hours, and web module releases grew 2-3x.</li>
        <li>Moved the builds of two Java/GWT portals (procurement and an e-trading platform) off the production server into a Docker runner with the same toolchain and added an HTTP readiness check: builds take 15 minutes instead of 70 and no longer take the portal down; CI code for both projects was extracted into a shared repository (-66% in-project code).</li>
        <li>Reconciled ERP inventory balances at one of the plants with 1C across all four accounting layers (warehouse, management accounting, WMS, stocktaking): a Python generator builds a PL/SQL run that executes in a single transaction with self-checks, rehearsed in 14 versions on a database copy. In production, 10,577 of 10,660 items matched 1C (99.2%).</li>
    `,
    exp_project_list: `
        <li>Building my own CMS for landing pages: pages assembled from blocks with strict schemas, static HTML output via Astro, a React admin panel, a Hono + Drizzle + PostgreSQL API, and an MCP server that lets LLMs edit and publish pages; one-command VPS install and updates with backup and rollback.</li>
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
};
