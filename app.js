/* ==========================================
   TRANSLATIONS
   ========================================== */
const translations = {
    en: {
        nav: {
            home: "Home",
            experience: "Experience",
            education: "Education",
            contact: "Contact"
        },
        home: {
            greeting: "Hi, I'm",
            name: "Javier Gil",
            title: "Game designer",
            summary: "Born in Madrid. Lover of games, music, and technology. Over 15 years of experience in IT consulting, primarily in backend web development.",
            downloadResume: "Download Resume",
            contactMe: "Contact Me"
        },
        experience: {
            title: "Professional Experience",
            subtitle: "My career journey and key achievements",
            responsibilities: "Key Responsibilities:",
            technologies: "Technologies:",
            mediaPlaceholder: "Project Screenshot",
            items: [
                {
                    role: "Game designer",
                    company: "Unwoven",
                    period: "Sept 2025 - Present",
                    location: "Madrid, Spain",
                    description: "Led the frontend development team in building a next-generation SaaS platform. Implemented complex UI components and optimized application performance, resulting in a 40% improvement in load times.",
                    responsibilities: [
                        "Architected and implemented responsive web applications using React and TypeScript",
                        "Mentored junior developers and conducted code reviews",
                        "Collaborated with UX designers to implement pixel-perfect interfaces",
                        "Optimized application performance through code splitting and lazy loading"
                    ]
                },
                {
                    role: "Game designer",
                    company: "E-Mask.",
                    period: "Jun 2019 - Dec 2021",
                    location: "New York, NY",
                    description: "Developed and maintained multiple web applications for enterprise clients. Implemented RESTful APIs and integrated third-party services to deliver comprehensive business solutions.",
                    responsibilities: [
                        "Built scalable backend services using Node.js and Express",
                        "Designed and implemented database schemas with PostgreSQL",
                        "Created responsive frontend interfaces with Vue.js",
                        "Implemented CI/CD pipelines using GitHub Actions"
                    ]
                }
            ]
        },
        education: {
            title: "Education & Certifications",
            subtitle: "Academic background and professional development",
            degrees: [
                {
                    title: "Bachelor of Science in Computer Science",
                    institution: "University of Technology",
                    period: "2015 - 2019",
                    description: "Graduated with honors. Specialized in software engineering and distributed systems. Completed capstone project on real-time data processing."
                }
            ],
            certifications: [
                {
                    title: "AWS Certified Solutions Architect",
                    institution: "Amazon Web Services",
                    period: "2022",
                    description: "Professional certification demonstrating expertise in designing distributed systems and architectures on AWS platform."
                }
            ],
            languages: {
                title: "Languages",
                items: [
                    { name: "Spanish", level: "Native" },
                    { name: "English", level: "Advance" }
                ]
            },
            training: {
                title: "Additional Training",
                items: [
                    "Advanced React Patterns - Frontend Masters (2023)",
                    "System Design Interview Prep - Educative (2022)",
                    "Docker and Kubernetes Complete Guide - Udemy (2021)"
                ]
            }
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Feel free to reach out for opportunities or just to say hello",
            email: "Email",
            discord: "Discord",
            form: {
                name: "Full Name",
                namePlaceholder: "Enter your full name",
                email: "Email Address",
                emailPlaceholder: "Enter your email address",
                subject: "Subject",
                subjectPlaceholder: "What is this about?",
                message: "Message",
                messagePlaceholder: "Write your message here...",
                submit: "Send Message",
                successTitle: "Message Sent!",
                successText: "Thank you for reaching out. I'll get back to you within 24-48 hours.",
                errors: {
                    name: "Please enter your name",
                    email: "Please enter a valid email address",
                    subject: "Please enter a subject",
                    message: "Please enter your message"
                }
            }
        },
        footer: {
            copyright: "© 2026 Made by Gilpe with ♥️."
        }
    },
    es: {
        nav: {
            home: "Inicio",
            experience: "Experiencia",
            education: "Formación",
            contact: "Contacto"
        },
        home: {
            greeting: "Hola, soy",
            name: "Javier Gil",
            title: "Diseñador de videojuegos",
            summary: "Nacido en Madrid. Apasionado de los videojuegos, la música y la tecnología. Más de 15 años de experiencia en consultoría informática, principalmente en desarrollo web backend.",
            downloadResume: "Descargar CV",
            contactMe: "Contáctame"
        },
        experience: {
            title: "Experiencia Profesional",
            subtitle: "Mi trayectoria profesional y logros clave",
            responsibilities: "Responsabilidades Clave:",
            technologies: "Tecnologías:",
            mediaPlaceholder: "Captura de Proyecto",
            items: [
                {
                    role: "Desarrollador Frontend Senior",
                    company: "Tech Solutions Inc.",
                    period: "Ene 2022 - Presente",
                    location: "San Francisco, CA",
                    description: "Lideré el equipo de desarrollo frontend en la construcción de una plataforma SaaS de nueva generación. Implementé componentes de UI complejos y optimicé el rendimiento de la aplicación, logrando una mejora del 40% en los tiempos de carga.",
                    responsibilities: [
                        "Arquitecté e implementé aplicaciones web responsivas usando React y TypeScript",
                        "Mentoricé desarrolladores junior y realicé revisiones de código",
                        "Colaboré con diseñadores UX para implementar interfaces pixel-perfect",
                        "Optimicé el rendimiento mediante code splitting y lazy loading"
                    ]
                },
                {
                    role: "Desarrollador Full Stack",
                    company: "Digital Innovations Ltd.",
                    period: "Jun 2019 - Dic 2021",
                    location: "Nueva York, NY",
                    description: "Desarrollé y mantuve múltiples aplicaciones web para clientes empresariales. Implementé APIs RESTful e integré servicios de terceros para entregar soluciones de negocio completas.",
                    responsibilities: [
                        "Construí servicios backend escalables usando Node.js y Express",
                        "Diseñé e implementé esquemas de base de datos con PostgreSQL",
                        "Creé interfaces frontend responsivas con Vue.js",
                        "Implementé pipelines de CI/CD usando GitHub Actions"
                    ]
                }
            ]
        },
        education: {
            title: "Educación y Certificaciones",
            subtitle: "Formación académica y desarrollo profesional",
            degrees: [
                {
                    title: "Licenciatura en Ciencias de la Computación",
                    institution: "Universidad de Tecnología",
                    period: "2015 - 2019",
                    description: "Graduado con honores. Especializado en ingeniería de software y sistemas distribuidos. Completé proyecto de fin de carrera sobre procesamiento de datos en tiempo real."
                }
            ],
            certifications: [
                {
                    title: "AWS Certified Solutions Architect",
                    institution: "Amazon Web Services",
                    period: "2022",
                    description: "Certificación profesional que demuestra experiencia en diseño de sistemas distribuidos y arquitecturas en la plataforma AWS."
                }
            ],
            languages: {
                title: "Idiomas",
                items: [
                    { name: "Español", level: "Nativo" },
                    { name: "Inglés", level: "Avanzado" }
                ]
            },
            training: {
                title: "Formación Adicional",
                items: [
                    "Patrones Avanzados de React - Frontend Masters (2023)",
                    "Preparación para Entrevistas de Diseño de Sistemas - Educative (2022)",
                    "Guía Completa de Docker y Kubernetes - Udemy (2021)"
                ]
            }
        },
        contact: {
            title: "Ponte en Contacto",
            subtitle: "No dudes en comunicarte por oportunidades o solo para saludar",
            email: "Correo",
            discord: "Discord",
            form: {
                name: "Nombre Completo",
                namePlaceholder: "Ingresa tu nombre completo",
                email: "Correo Electrónico",
                emailPlaceholder: "Ingresa tu correo electrónico",
                subject: "Asunto",
                subjectPlaceholder: "¿De qué se trata?",
                message: "Mensaje",
                messagePlaceholder: "Escribe tu mensaje aquí...",
                submit: "Enviar Mensaje",
                successTitle: "¡Mensaje Enviado!",
                successText: "Gracias por comunicarte. Te responderé dentro de 24-48 horas.",
                errors: {
                    name: "Por favor ingresa tu nombre",
                    email: "Por favor ingresa un correo válido",
                    subject: "Por favor ingresa un asunto",
                    message: "Por favor ingresa tu mensaje"
                }
            }
        },
        footer: {
            copyright: "© 2026 Hecho por Gilpe con ♥️."
        }
    }
};

/* ==========================================
   APP INITIALIZATION
   ========================================== */
const App = {
    currentLang: 'en',
    currentTheme: 'dark',

    init() {
        this.theme.init();
        this.i18n.init();
        this.nav.init();
        this.scroll.init();
        this.form.init();
        this.scrollTop.init();
    }
};

/* ==========================================
   THEME MANAGEMENT
   ========================================== */
App.theme = {
    init() {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        this.apply(savedTheme);

        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    },

    toggle() {
        const newTheme = App.currentTheme === 'dark' ? 'light' : 'dark';
        this.apply(newTheme);
    },

    apply(theme) {
        App.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);

        const icon = document.querySelector('.nav__theme-icon');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun nav__theme-icon' : 'fas fa-moon nav__theme-icon';
        }
    }
};

/* ==========================================
   LANGUAGE MANAGEMENT
   ========================================== */
App.i18n = {
    init() {
        const savedLang = localStorage.getItem('portfolio-lang') || 'en';
        this.apply(savedLang);

        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            langBtn.addEventListener('click', () => {
                const newLang = App.currentLang === 'en' ? 'es' : 'en';
                this.apply(newLang);
            });
        }
    },

    apply(lang) {
        App.currentLang = lang;
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('portfolio-lang', lang);

        const langText = document.querySelector('.nav__lang-text');
        if (langText) {
            langText.textContent = lang === 'en' ? 'ES' : 'EN';
        }

        this.updateContent(lang);
    },

    updateContent(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key, lang);
            if (translation) {
                el.textContent = translation;
            }
        });

        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = this.getTranslation(key, lang);
            if (translation) {
                el.setAttribute('placeholder', translation);
            }
        });
    },

    getTranslation(key, lang) {
        const keys = key.split('.');
        let value = translations[lang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return null;
            }
        }

        return value;
    }
};

/* ==========================================
   NAVIGATION
   ========================================== */
App.nav = {
    init() {
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupActiveSection();
    },

    setupMobileMenu() {
        const toggleBtn = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');

        if (toggleBtn && menu) {
            toggleBtn.addEventListener('click', () => {
                toggleBtn.classList.toggle('active');
                menu.classList.toggle('active');
            });

            const links = menu.querySelectorAll('.nav__link');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    toggleBtn.classList.remove('active');
                    menu.classList.remove('active');
                });
            });
        }
    },

    setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    setupActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav__link');

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }
};

/* ==========================================
   SCROLL ANIMATIONS
   ========================================== */
App.scroll = {
    init() {
        this.observeElements();
    },

    observeElements() {
        const elements = document.querySelectorAll('.reveal');

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        elements.forEach(el => observer.observe(el));
    }
};

/* ==========================================
   CONTACT FORM
   ========================================== */
App.form = {
    init() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    },

    handleSubmit(e) {
        e.preventDefault();

        if (this.validate()) {
            this.showSuccess();
        }
    },

    validate() {
        let isValid = true;
        const fields = ['name', 'email', 'subject', 'message'];

        fields.forEach(field => {
            const input = document.getElementById(field);
            const error = document.getElementById(`${field}-error`);

            if (!input.value.trim()) {
                this.showError(field, translations[App.currentLang].contact.form.errors[field]);
                isValid = false;
            } else if (field === 'email' && !this.isValidEmail(input.value)) {
                this.showError(field, translations[App.currentLang].contact.form.errors[field]);
                isValid = false;
            } else {
                this.clearError(field);
            }
        });

        return isValid;
    },

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    showError(field, message) {
        const input = document.getElementById(field);
        const error = document.getElementById(`${field}-error`);

        if (input) input.classList.add('error');
        if (error) {
            error.textContent = message;
            error.classList.add('visible');
        }
    },

    clearError(field) {
        const input = document.getElementById(field);
        const error = document.getElementById(`${field}-error`);

        if (input) input.classList.remove('error');
        if (error) {
            error.textContent = '';
            error.classList.remove('visible');
        }
    },

    showSuccess() {
        const form = document.getElementById('contact-form');
        const success = document.getElementById('form-success');

        if (form) {
            const inputs = form.querySelectorAll('.form-group');
            inputs.forEach(input => input.style.display = 'none');
            form.querySelector('button[type="submit"]').style.display = 'none';
        }

        if (success) {
            success.classList.add('visible');
        }

        setTimeout(() => this.reset(), 5000);
    },

    reset() {
        const form = document.getElementById('contact-form');
        const success = document.getElementById('form-success');

        if (form) {
            form.reset();
            const inputs = form.querySelectorAll('.form-group');
            inputs.forEach(input => input.style.display = 'block');
            form.querySelector('button[type="submit"]').style.display = 'flex';
        }

        if (success) {
            success.classList.remove('visible');
        }

        ['name', 'email', 'subject', 'message'].forEach(field => {
            this.clearError(field);
        });
    }
};

/* ==========================================
   SCROLL TO TOP
   ========================================== */
App.scrollTop = {
    init() {
        const btn = document.getElementById('scroll-top');
        if (btn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 500) {
                    btn.classList.add('visible');
                } else {
                    btn.classList.remove('visible');
                }
            });

            btn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
};

/* ==========================================
   INITIALIZE ON DOM READY
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
