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

App.theme = {
    init() {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        this.apply(savedTheme);
        document.getElementById('theme-toggle')?.addEventListener('click', () => this.toggle());
    },

    toggle() {
        this.apply(App.currentTheme === 'dark' ? 'light' : 'dark');
    },

    apply(theme) {
        App.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        const icon = document.querySelector('.nav__theme-icon');
        if (icon) icon.className = theme === 'dark' ? 'fas fa-sun nav__theme-icon' : 'fas fa-moon nav__theme-icon';
    }
};

App.i18n = {
    init() {
        const savedLang = localStorage.getItem('portfolio-lang') || 'en';
        this.apply(savedLang);
        document.getElementById('lang-toggle')?.addEventListener('click', () => {
            this.apply(App.currentLang === 'en' ? 'es' : 'en');
        });
    },

    apply(lang) {
        App.currentLang = lang;
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('portfolio-lang', lang);
        const langText = document.querySelector('.nav__lang-text');
        if (langText) langText.textContent = lang === 'en' ? 'ES' : 'EN';
        this.updateContent(lang);
    },

    updateContent(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const translation = this.getTranslation(el.getAttribute('data-i18n'), lang);
            if (translation) el.textContent = translation;
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const translation = this.getTranslation(el.getAttribute('data-i18n-placeholder'), lang);
            if (translation) el.setAttribute('placeholder', translation);
        });

        document.querySelectorAll('[data-i18n-list]').forEach(el => {
            const items = this.getTranslation(el.getAttribute('data-i18n-list'), lang);
            if (Array.isArray(items)) {
                el.innerHTML = '';
                items.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    el.appendChild(li);
                });
            }
        });

        if (App.typing?.el) App.typing.restart();
    },

    getTranslation(key, lang) {
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            if (value && typeof value === 'object') value = value[k];
            else return null;
        }
        return value;
    }
};

App.nav = {
    init() {
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupActiveSection();
    },

    setupMobileMenu() {
        const toggleBtn = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');
        if (!toggleBtn || !menu) return;

        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('active');
            menu.classList.toggle('active');
        });

        menu.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                toggleBtn.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    },

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    window.scrollTo({
                        top: target.offsetTop - navHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    setupActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav__link');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { rootMargin: '-20% 0px -80% 0px' });
        sections.forEach(section => observer.observe(section));
    }
};

App.scroll = {
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
};

App.form = {
    init() {
        document.getElementById('contact-form')?.addEventListener('submit', (e) => this.handleSubmit(e));
    },

    handleSubmit(e) {
        e.preventDefault();
        if (!this.validate()) return;

        const form = document.getElementById('contact-form');
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnIcon = submitBtn.querySelector('.btn__icon');
        const btnText = submitBtn.querySelector('[data-i18n]');
        const originalIcon = btnIcon.className;
        const originalText = btnText.textContent;

        submitBtn.classList.add('btn--loading');
        btnIcon.className = 'fas fa-spinner btn__icon';
        btnText.textContent = '...';

        const formData = new FormData(form);
        formData.set('from_name', formData.get('name'));
        formData.set('replyto', formData.get('email'));

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData))
        })
        .then(r => r.json())
        .then(result => result.success ? this.showSuccess() : this.showNetworkError())
        .catch(() => this.showNetworkError())
        .finally(() => {
            submitBtn.classList.remove('btn--loading');
            btnIcon.className = originalIcon;
            btnText.textContent = originalText;
        });
    },

    validate() {
        let isValid = true;
        ['name', 'email', 'subject', 'message'].forEach(field => {
            const input = document.getElementById(field);
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
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    showError(field, message) {
        document.getElementById(field)?.classList.add('error');
        const error = document.getElementById(`${field}-error`);
        if (error) {
            error.textContent = message;
            error.classList.add('visible');
        }
    },

    clearError(field) {
        document.getElementById(field)?.classList.remove('error');
        const error = document.getElementById(`${field}-error`);
        if (error) {
            error.textContent = '';
            error.classList.remove('visible');
        }
    },

    showNetworkError() {
        const form = document.getElementById('contact-form');
        if (!form) return;
        const submitBtn = form.querySelector('button[type="submit"]');
        let banner = document.getElementById('form-network-error');
        if (!banner) {
            banner = document.createElement('div');
            banner.id = 'form-network-error';
            banner.className = 'form-error-banner';
            submitBtn.parentNode.insertBefore(banner, submitBtn);
        }
        banner.textContent = translations[App.currentLang].contact.form.errors.network;
        banner.classList.add('visible');
        setTimeout(() => banner.classList.remove('visible'), 5000);
    },

    showSuccess() {
        const form = document.getElementById('contact-form');
        const success = document.getElementById('form-success');
        if (form) {
            form.querySelectorAll('.form-group').forEach(input => input.style.display = 'none');
            form.querySelector('button[type="submit"]').style.display = 'none';
        }
        success?.classList.add('visible');
        setTimeout(() => this.reset(), 5000);
    },

    reset() {
        const form = document.getElementById('contact-form');
        const success = document.getElementById('form-success');
        const networkError = document.getElementById('form-network-error');
        if (form) {
            form.reset();
            form.querySelectorAll('.form-group').forEach(input => input.style.display = 'block');
            form.querySelector('button[type="submit"]').style.display = 'flex';
        }
        success?.classList.remove('visible');
        networkError?.classList.remove('visible');
        ['name', 'email', 'subject', 'message'].forEach(field => this.clearError(field));
    }
};

App.carousel = {
    init() {
        document.querySelectorAll('[data-carousel]').forEach(carousel => this.setup(carousel));
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
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) {
                goTo(diff > 0 ? currentIndex + 1 : currentIndex - 1);
            }
        }, { passive: true });
    }
};

App.scrollTop = {
    init() {
        const btn = document.getElementById('scroll-top');
        if (!btn) return;
        window.addEventListener('scroll', () => {
            btn.classList.toggle('visible', window.scrollY > 500);
        });
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
};

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
        this.titles = Array.isArray(home?.titles) && home.titles.length > 0 ? home.titles : [this.el.textContent];
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
                if (this.titleIndex >= this.titles.length - 1) return;
                this.isDeleting = true;
                this.timeout = setTimeout(() => this.tick(), this.pauses[this.titleIndex] ?? this.pauseEnd);
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

App.scrollIndicator = {
    init() {
        const indicator = document.querySelector('.hero__scroll-indicator');
        if (!indicator) return;

        window.addEventListener('scroll', () => {
            indicator.classList.toggle('hero__scroll-indicator--hidden', window.scrollY > 100);
        }, { passive: true });

        indicator.addEventListener('click', () => {
            const target = document.getElementById('experience');
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                window.scrollTo({ top: target.offsetTop - navHeight, behavior: 'smooth' });
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
