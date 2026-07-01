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
            titles: ["IT Consultant", "Game Designer"],
            titlePauses: [2000],
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
                    period: "Oct 2025 - Present",
                    location: "Madrid, Spain",
                    description: "One of the lead designers on the vertical slice of a twin-stick action roguelike.",
                    responsibilities: [
                        "Definition of mechanics, systems, and game loops.",
                        "Level design, progression, and game rules balance.",
                        "Definition of the user interface and the navigation flow for the user experience.",
                        "Technical audio implementation and sound events creation."
                    ]
                },
                {
                    role: "Game designer",
                    company: "E-Mask.",
                    period: "Jun 2019 - Dec 2021",
                    location: "Madrid, Spain",
                    description: "Participated as a designer and animator on this stealth-puzzle game created during the 2026 Global Game Jam weekend.",
                    responsibilities: [
                        "Conceptualization and game idea based on the 'Masks' theme.",
                        "Design of recurring scenarios for level construction.",
                        "2D rigging of the main character.",
                        "Creation of motion animations and their state flow."
                    ]
                },
                {
                    role: "Indie Developer",
                    company: "Mangudai Project",
                    period: "Sep 2023 - Jun 2025",
                    location: "Madrid, Spain",
                    description: "As a Solo developer creating a prototype for a 90s-style point-and-click adventure game.",
                    responsibilities: [
                        "Developed the proof of concept in Unity and Godot, using C# as the scripting language.",
                        "Created pixel art environments for game levels."
                    ]
                },
                {
                    role: "IT Consultant",
                    company: "Deloitte | NTT Data",
                    period: "Apr 2008 - Jun 2023",
                    location: "Madrid, Spain",
                    description: "Career spanning over 15 years in web application development for international projects.",
                    responsibilities: [
                        ".NET backend development.",
                        "Management of client requirements and team tasks.",
                        "Implementation of Agile methodologies and definition of DevOps processes used by developers.",
                        "Definition of technical approaches for project pre-sales."
                    ]
                }
            ]
        },
        education: {
            title: "Education & Certifications",
            subtitle: "Academic background and professional development",
            degrees: [
                {
                    title: "Master's degree in Videogames design and development",
                    institution: "University Complutense of Madrid",
                    period: "2025 - 2026",
                    description: "Specialization in video game development as a game designer."
                }
            ],
            certifications: [
                {
                    title: "Certificate of higher education in Software applications development",
                    institution: "IES Centro Cultural Salmantino",
                    period: "2003-2004",
                    description: "Higher Technician qualification in business application programming."
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
                title: "Certifications",
                items: [
                    "Microsoft 70-496: Administering Visual Studio Team Foundation Server (2014).",
                    "Microsoft 70-497: Software Testing with Visual Studio (2014).",
                    "Microsoft AI-100: Azure AI Engineer Associate (2020).",
                    "Microsoft AZ-900: Azure Fundamentals (2020)."
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
            titles: ["Consultor IT", "Diseñador de Videojuegos"],
            titlePauses: [2000],
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
                    role: "Game designer",
                    company: "Unwoven",
                    period: "Oct 2025 - Presente",
                    location: "Madrid, España",
                    description: "Uno de los diseñadores principales en el vertical slice de un roguelike de acción twin stick.",
                    responsibilities: [
                        "Definición de mecánicas, sistemas y loops de juego.",
                        "Diseño de niveles, progresión y balanceo de reglas del juego.",
                        "Definición de la interfaz de usuario y su flujo de navegación para la experiencia de usuario.",
                        "Implementación técnica de audio y creación de eventos sonoros."
                    ]
                },
                {
                    role: "Game designer",
                    company: "E-Mask",
                    period: "Ene 2026 - Feb 2026",
                    location: "Madrid, España",
                    description: "Participación como diseñador y animador en este juego de sigilo y puzzles elaborado en el fin de semana de la Global Game Jam de 2026.",
                    responsibilities: [
                        "Conceptualización e idea de juego basada en la temática 'Mascaras'.",
                        "Diseño situaciones recurrentes para la construcción de niveles.",
                        "Rig 2D del personaje principal.",
                        "Creación de animaciones y su flujo de estados.",
                    ]
                },
                {
                    role: "Indie Developer",
                    company: "Mangudai Project",
                    period: "Sept 2023 - Jun 2025",
                    location: "Madrid, España",
                    description: "Desarrollo como Solo-Developer de prototipo para Aventura grafica Point-n-Click estilo años 90.",
                    responsibilities: [
                        "Desarrollo de la prueba de concepto en Unity y Godot con C# como lenguaje de scripting.",
                        "Elaboración de escenarios para niveles en pixel art."
                    ]
                },
                {
                    role: "Consultor IT",
                    company: "Deloitte | NTT Data",
                    period: "Abr 2008 - Jun 2023",
                    location: "Madrid, España",
                    description: "Carrera de mas 15 años en el desarrollo de aplicaciones web en proyectos internacionales.",
                    responsibilities: [
                        "Desarrollo de backend .NET.",
                        "Gestión de la demanda con el cliente y de las tareas del equipo.",
                        "Implementación de metodologías ágiles y definición de procesos de DevOps usados por los programadores.",
                        "Definición de enfoques técnicos en preventa de proyectos."
                    ]
                }
            ]
        },
        education: {
            title: "Educación y Certificaciones",
            subtitle: "Formación académica y desarrollo profesional",
            degrees: [
                {
                    title: "Master de Diseño y desarrollo de videojuegos",
                    institution: "Universidad Complutense de Madrid",
                    period: "2025 - 2026",
                    description: "Especialización en el desarrollo de videojuegos como Game designer."
                },
            ],
            certifications: [
                {
                    title: "Grado superior en Desarrollo de aplicaciones informáticas.",
                    institution: "IES Centro Cultural Salmantino",
                    period: "2003-2004",
                    description: "Titulación de técnico superior en programación de aplicaciones de gestión."
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
                title: "Certificaciones",
                items: [
                    "Microsoft 70-496: Administración de Visual Studio Team Foundation Server (2014).",
                    "Microsoft 70-497: Testing de software con Visual Studio (2014).",
                    "Microsoft AI-100: Ingeniero de IA asociado en Azure (2020).",
                    "Microsoft AZ-900: Fundamentos de Azure (2020)."
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
        this.carousel.init();
        this.scrollTop.init();
        this.typing.init();
        this.scrollIndicator.init();
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

        const lists = document.querySelectorAll('[data-i18n-list]');
        lists.forEach(el => {
            const key = el.getAttribute('data-i18n-list');
            const items = this.getTranslation(key, lang);
            if (Array.isArray(items)) {
                el.innerHTML = '';
                items.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    el.appendChild(li);
                });
            }
        });

        if (App.typing && App.typing.el) {
            App.typing.restart();
        }
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
   CAROUSEL
   ========================================== */
App.carousel = {
    init() {
        const carousels = document.querySelectorAll('[data-carousel]');
        carousels.forEach(carousel => this.setup(carousel));
    },

    setup(carousel) {
        const track = carousel.querySelector('.carousel__track');
        const slides = carousel.querySelectorAll('.carousel__slide');
        const prevBtn = carousel.querySelector('.carousel__btn--prev');
        const nextBtn = carousel.querySelector('.carousel__btn--next');
        const dotsContainer = carousel.querySelector('.carousel__dots');

        if (!track || slides.length === 0) return;

        let currentIndex = 0;
        const slideCount = slides.length;

        if (slideCount === 1) {
            carousel.classList.add('carousel--single');
            return;
        }

        for (let i = 0; i < slideCount; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel__dot');
            if (i === 0) dot.classList.add('carousel__dot--active');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(dot);
        }

        const dots = dotsContainer.querySelectorAll('.carousel__dot');

        const goTo = (index) => {
            currentIndex = (index + slideCount) % slideCount;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle('carousel__dot--active', i === currentIndex);
            });
        };

        prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
        nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    goTo(currentIndex + 1);
                } else {
                    goTo(currentIndex - 1);
                }
            }
        }, { passive: true });
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
    TYPING EFFECT
    ========================================== */
App.typing = {
    el: null,
    titles: [],
    pauses: [],
    titleIndex: 0,
    charIndex: 0,
    isDeleting: false,
    typeSpeed: 80,
    deleteSpeed: 40,
    pauseEnd: 2000,
    pauseStart: 500,
    timeout: null,
    prefersReducedMotion: false,

    init() {
        this.el = document.querySelector('.hero__title-text');
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!this.el) return;

        this.loadTitles();
        if (this.prefersReducedMotion) {
            this.el.textContent = this.titles[0] || '';
        } else {
            this.tick();
        }
    },

    loadTitles() {
        const home = translations[App.currentLang]?.home;
        const titles = home?.titles;
        this.titles = Array.isArray(titles) && titles.length > 0 ? titles : [this.el.textContent];
        this.pauses = Array.isArray(home?.titlePauses) ? home.titlePauses : [];
        this.titleIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
    },

    tick() {
        if (!this.el) return;

        const current = this.titles[this.titleIndex];

        if (!this.isDeleting) {
            this.charIndex++;
            this.el.textContent = current.substring(0, this.charIndex);

            if (this.charIndex === current.length) {
                if (this.titleIndex >= this.titles.length - 1) {
                    return;
                }
                this.isDeleting = true;
                const pause = this.pauses[this.titleIndex] ?? this.pauseEnd;
                this.timeout = setTimeout(() => this.tick(), pause);
                return;
            }
            this.timeout = setTimeout(() => this.tick(), this.typeSpeed);
        } else {
            this.charIndex--;
            this.el.textContent = current.substring(0, this.charIndex);

            if (this.charIndex === 0) {
                this.isDeleting = false;
                this.titleIndex++;
                this.timeout = setTimeout(() => this.tick(), this.pauseStart);
                return;
            }
            this.timeout = setTimeout(() => this.tick(), this.deleteSpeed);
        }
    },

    restart() {
        clearTimeout(this.timeout);
        this.loadTitles();
        if (this.prefersReducedMotion) {
            this.el.textContent = this.titles[0] || '';
        } else {
            this.tick();
        }
    }
};

/* ==========================================
    SCROLL INDICATOR
    ========================================== */
App.scrollIndicator = {
    init() {
        const indicator = document.querySelector('.hero__scroll-indicator');
        if (!indicator) return;

        const onScroll = () => {
            if (window.scrollY > 100) {
                indicator.classList.add('hero__scroll-indicator--hidden');
            } else {
                indicator.classList.remove('hero__scroll-indicator--hidden');
            }
        };

        indicator.addEventListener('click', () => {
            const target = document.getElementById('experience');
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }
};

/* ==========================================
    INITIALIZE ON DOM READY
    ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
