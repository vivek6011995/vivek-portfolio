export const projects = [{
        id: 1,
        title: "Config-Driven UI Builder Platform",
        description: "A dynamic UI rendering engine that generates complete user interfaces from JSON configuration schemas — zero hardcoded UI. Demonstrates schema-driven architecture principles used in enterprise low-code platforms.",
        features: [
            "Built recursive rendering engine for deeply nested, schema-driven layouts supporting 10+ component types",
            "Designed component registry pattern with extensible type-to-component mapping — architectural decision typically made at senior-engineer level",
            "Implemented conditional rendering engine with showIf/hideIf and AND/OR logic, nested layout support",
            "Engineered 100+ reusable React components — reducing new module development time by 30%",
            "Optimized frontend performance through memoization, lazy loading, and efficient asynchronous API handling",
            "Built runtime validation engine, light/dark theme switching, and modular state management with Context API — fully extensible without code changes",
        ],
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "Context API", "CSS Modules", "Vite", "Figma → Pixel-Perfect Implementation", ],
        github: "",
        live: "https://config-driven-ui-builder.vercel.app/",
        image: null,
    },
    {
        id: 2,
        title: "Extramarks Production Dashboards — Student & Teacher Platforms",
        description: "Two interconnected production platforms — a student learning dashboard serving 1 Lac+ students and a teacher assessment platform used by 60,000+ educators for question bank management and assessment creation.",
        features: [
            "Engineered 100+ reusable UI components and replaced heavy Ant Design components with custom-built UI components, reducing bundle chunk size and improving page load time by 30%",
            "Integrated 100+ REST APIs handling complex asynchronous data flows, loading states, error boundaries, and dynamic rendering across 6+ dashboard modules",
            "Implemented async state management with Redux Toolkit for course lists, subscription status, student progress, and assessment results — ensuring consistent data flow across platforms",
            "Optimized rendering performance using component memoization, lazy loading, and efficient state update patterns ensuring smooth UX across large course catalogs and complex assessment screens",
        ],
        tech: [
            "React",
            "Next.js",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Ant Design → Custom UI",
            "Redux Toolkit",
            "REST APIs",
            "CSS Modules",
            "Figma → Pixel-Perfect Implementation",
        ],
        github: "",
        live: "https://www.extramarks.com/",
        image: null,
    },
    {
        id: 3,
        title: "Nebu.la – Blockchain Music Marketplace",
        description: "A blockchain-based music tokenization platform that enables artists and investors to tokenize music assets, trade digital ownership, and monitor transactions through a secure and responsive web application.",
        features: ["Developed scalable frontend modules using Angular 16 and TypeScript", "Built responsive dashboards with Angular Material, Tailwind CSS, and SCSS", "Integrated REST APIs to display token information, transactions, analytics, and user assets", "Collaborated with blockchain engineers to integrate smart contract workflows into the frontend", "Optimized application performance and resolved UI issues for a seamless user experience", "Implemented reusable components, routing, authentication, and responsive layouts"],
        tech: ["Angular 16", "TypeScript", "Tailwind CSS", "SCSS", "Angular Material", "REST APIs", "Figma → Pixel-Perfect Implementation", "Angular Routing", "Authentication & Authorization"],
        github: "",
        live: "https://nebu.la/",
        image: null,
    },
    {
        id: 3,
        title: "Knergy Admin Dashboard",
        description: "An enterprise healthcare administration platform built with Angular for managing patient records, health analysis, treatment recommendations, and system monitoring. The dashboard provides administrators with real-time insights, analytics, and operational controls through a responsive and intuitive interface.",
        features: ["Developed dynamic dashboard modules using Angular 14+ with reusable components and modular architecture", "Integrated RESTful APIs to manage health reports, patient records, and treatment data", "Built responsive UI using Tailwind CSS, SCSS, and Angular Material", "Implemented charts, tables, filters, and real-time dashboard views for administrators", "Collaborated with backend developers and UI/UX designers to deliver scalable frontend solutions", "Optimized application performance and improved user experience across desktop and tablet devices"],
        tech: ["Angular 14+", "TypeScript", "Tailwind CSS", "SCSS", "Angular Material", "REST APIs", "Figma → Pixel-Perfect Implementation", "Angular Routing", "Authentication & Authorization"],
        github: "",
        live: "https://knergyadmin.knergy.net/",
        image: null,
    }
];

export const timelineData = [{
        year: "2025 — Present",
        role: "Lead UI Designer & Frontend Developer",
        company: "ExtraMarks Education India Pvt. Ltd., Noida",
        points: [
            "Engineered 100+ reusable UI components using React, reducing new module development time by ~30% across product modules used by 50,000+ students, teachers, and parents",
            "Replaced heavy Ant Design components with custom-built UI components, reducing bundle chunk size and improving page load time by 30% across high-traffic EdTech dashboards",
            "Integrated 100+ REST APIs handling complex asynchronous data flows, loading states, error boundaries, and dynamic rendering across student and teacher dashboards",
            "Collaborated within a 200+ member technology department, shipping production-ready features across sprints while leveraging AI-assisted tools (Cursor AI) to accelerate development",
        ],
    },
    {
        year: "2022 — 2025",
        role: "Senior UI Developer & Frontend Developer",
        company: "Intigate Technologies Pvt. Ltd., Noida",
        points: [
            "Designed and developed responsive websites, admin dashboards, and enterprise web applications using Angular 14+, React, Next.js, TypeScript, HTML5, CSS3, SCSS, and Tailwind CSS.",
            "Delivered 15+ client projects by converting Figma and Adobe XD designs into pixel-perfect, responsive, and cross-browser compatible user interfaces.",
            "Integrated REST APIs, implemented authentication flows, dynamic dashboards, and data visualization using Chart.js and Highcharts.",
            "Improved application performance through lazy loading, code splitting, reusable components, micro frontend architecture, and code optimization techniques.",
            "Collaborated with UI/UX designers, backend developers, and project managers using Git, Jira, and CI/CD workflows to ensure high-quality project delivery."
        ],
    },

    {
        year: "2020 — 2022",
        role: "Senior UI | UX Designer & Frontend Developer",
        company: "Aims Migital Technovations Pvt. Ltd, Gurgaon",
        points: [
            "Designed user interfaces, wireframes, and interactive prototypes using Adobe XD before translating designs into responsive frontend applications.",
            "Developed responsive websites, admin dashboards, and AMS (Attendance Management System) panels using HTML5, CSS3, JavaScript, Bootstrap, and Angular.",
            "Converted Adobe XD designs into pixel-perfect, cross-browser compatible user interfaces while ensuring excellent user experience across desktop and mobile devices.",
            "Collaborated with product managers, designers, and backend developers to deliver scalable web applications and enhance existing product features.",
            "Created reusable UI components, optimized application performance, and maintained clean, maintainable frontend code."
        ],
    },
    {
        year: "2020 — 2020",
        role: "UI | UX Designer & Frontend Developer",
        company: "Sharp & Young IT Solutions Pvt. Ltd, Noida",
        points: [
            "Designed and developed responsive microsites, landing pages, and HTML email campaigns for the MagicBreaks travel platform.",
            "Translated Photoshop, Adobe XD, and Figma designs into pixel-perfect, responsive web pages using HTML5, CSS3, JavaScript, and Bootstrap.",
            "Built reusable UI sections and optimized layouts for cross-browser compatibility and mobile-first experiences.",
            "Designed promotional creatives, web banners, and campaign assets to support digital marketing initiatives.",
            "Worked closely with clients, designers, and developers to deliver projects on time while maintaining high UI/UX standards.",
        ],
    },
    {
        year: "2019 — 2020",
        role: "UI | UX Designer & Web Designer",
        company: "True Web Technologies Pvt. Ltd, Noida",
        points: [
            "Designed user interfaces and conducted user research to understand client requirements and create intuitive web experiences",
            "Developed responsive websites using HTML, CSS, and JavaScript, ensuring brand consistency and design guidelines compliance",
            "Created visual mockups and prototypes for web applications, presenting design concepts to stakeholders and clients",
            "Optimized web performance and ensured cross-browser compatibility for seamless user experience",
        ],
    },
    {
        year: "2018 — 2019",
        role: "UI | UX Designer & Web Designer",
        company: "SEM Reseller Pvt. Ltd, Noida",
        points: [
            "Designed digital marketing websites and landing pages optimized for conversions, supporting SEM and digital marketing campaigns",
            "Implemented responsive web design principles to create mobile-friendly interfaces for improved user engagement",
            "Collaborated with marketing and backend teams to deliver web solutions that aligned with business objectives",
            "Maintained visual consistency across multiple projects and established reusable UI component libraries",
        ],
    },
];

export const skills = {
    "Frontend Engineering": [{
            name: "React / Next.js",
            level: 95
        },
        {
            name: "JavaScript ES6+",
            level: 92
        },
        {
            name: "HTML5 & CSS3",
            level: 90
        },
        {
            name: "TypeScript",
            level: 78
        },
        {
            name: "jQuery",
            level: 90
        },
        {
            name: "Angular (13–16)",
            level: 88
        },
    ],
    "UI / UX & Styling": [{
            name: "Figma",
            level: 90
        },
        {
            name: "Adobe XD",
            level: 88
        },
        {
            name: "Photoshop",
            level: 85
        },
        {
            name: "Illustrator",
            level: 80
        },
        {
            name: "Canva",
            level: 95
        },
        {
            name: "Tailwind CSS",
            level: 90
        },
    ],

    "State & Data Handling": [{
            name: "Redux Toolkit",
            level: 92
        },
        {
            name: "REST API Integration",
            level: 92
        },
        {
            name: "Asynchronous Data Handling",
            level: 90
        },
        {
            name: "Error & Loading State Management",
            level: 88
        },
    ],
    "Performance & Architecture": [{
            name: "Reusable Component Architecture",
            level: 90
        },
        {
            name: "Lazy Loading",
            level: 88
        },
        {
            name: "Code Splitting",
            level: 88
        },
        {
            name: "Performance Optimization",
            level: 88
        },
        {
            name: "Responsive Design",
            level: 95
        },
        {
            name: "Cross-Browser Compatibility",
            level: 92
        },
    ],
    "Deployment & Tools": [{
            name: "Git / GitHub",
            level: 90
        },
        {
            name: "Jira",
            level: 86
        },
        {
            name: "Bitbucket",
            level: 84
        },
        {
            name: "Postman & Chrome DevTools",
            level: 88
        },
        {
            name: "Vite & NPM",
            level: 86
        },
        {
            name: "CI/CD Basics",
            level: 75
        },
    ],
    "AI-Assisted Development": [{
            name: "Cursor AI",
            level: 90
        },
        {
            name: "GitHub Copilot",
            level: 88
        },
        {
            name: "Prompt Engineering",
            level: 88
        },
        {
            name: "AI Code Review",
            level: 85
        },
        {
            name: "AI-Assisted Frontend Development",
            level: 90
        },
    ],

    "SEO & Analytics": [{
            name: "Google Analytics",
            level: 80
        },
        {
            name: "SEO Optimization",
            level: 82
        },
        {
            name: "Core Web Vitals",
            level: 85
        },
    ],
};
export const socialLinks = {
    github: "https://github.com/vivek6011995",
    linkedin: "https://www.linkedin.com/in/vivek-kumar-154266b7/",
    email: "ervivekgupta601@gmail.com",
    resume: "https://drive.google.com/file/d/1Mdo5D22NKS5VnNSmEA1UcgzMpckDobrY/view?usp=sharing",
};