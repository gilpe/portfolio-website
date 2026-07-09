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
            summary: "They call me Gilpe. I'm from Madrid. I'm passionate about video games, mindful technology, and making things with my hands. After more than 15 years building backend systems, I now design things for fun.",
            downloadResume: "Download Resume",
            contactMe: "Contact Me"
        },
        experience: {
            title: "Professional Experience",
            subtitle: "My career journey and key achievements",
            responsibilities: "Key Responsibilities:",
            technologies: "Technologies:",
            mediaPlaceholder: "Project Screenshot",
            learnMore: "Learn More",
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
                    period: "Jan 2026 - Feb 2026",
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
                    { name: "English", level: "B2" }
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
                    message: "Please enter your message",
                    network: "Something went wrong. Please try again later."
                }
            }
        },
        footer: {
            copyrightPrefix: "© 2026 Made by",
            copyrightName: "Gilpe",
            copyrightSuffix: "with",
            copyrightHeart: "♥️"
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
            summary: "Me llaman Gilpe. Soy de Madrid. Entusiasta de los videojuegos, la tecnología consciente y crear con las manos. Tras más de 15 años desarrollando backend, ahora diseño cosas para divertir.",
            downloadResume: "Descargar CV",
            contactMe: "Contáctame"
        },
        experience: {
            title: "Experiencia Profesional",
            subtitle: "Mi trayectoria profesional y logros clave",
            responsibilities: "Responsabilidades Clave:",
            technologies: "Tecnologías:",
            mediaPlaceholder: "Captura de Proyecto",
            learnMore: "Saber más",
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
                    { name: "Inglés", level: "B2" }
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
                    message: "Por favor ingresa tu mensaje",
                    network: "Algo salió mal. Por favor inténtalo de nuevo más tarde."
                }
            }
        },
        footer: {
            copyrightPrefix: "© 2026 Hecho por",
            copyrightName: "Gilpe",
            copyrightSuffix: "con",
            copyrightHeart: "♥️"
        }
    }
};
