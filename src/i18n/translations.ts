export type Lang = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      stack: 'Stack',
      projects: 'Proyectos',
      contact: 'Contacto',
      cv: 'CV',
    },
    hero: {
      descriptionHtml:
        'Desarrollador backend junior especializado en <span class="text-white">Java</span> y <span class="text-white">Spring Boot</span>. Me enfoco en construir APIs REST y sistemas basados en <span class="text-white">microservicios</span>, con autenticación segura, comunicación event-driven entre servicios y despliegue en contenedores con <span class="text-white">Docker</span>.',
      cta: 'Ver proyectos',
      location: 'Madrid, España',
      scroll: 'Scroll',
    },
    stack: {
      label: 'Sobre mí',
      intro:
        'Desarrollo backends enfocado en una arquitectura sólida, aplicando buenas prácticas y priorizando la calidad del código para crear soluciones mantenibles y escalables.',
      subintro:
        'Trabajo en equipo siguiendo prácticas ágiles, organizando el trabajo mediante issues, ramas y pull requests, y cuidando tanto la calidad del código como la documentación del proyecto.',
      groups: {
        core: 'Core',
        data: 'Datos',
        messaging: 'Mensajería & Resiliencia',
        quality: 'Calidad de código',
        infra: 'Infraestructura & CI/CD',
      },
      learningTitle: 'Actualmente aprendiendo',
      learningText:
        'Tecnologías que estoy explorando para ampliar mis conocimientos en desarrollo backend, automatización e infraestructura.',
    },
    projects: {
      label: 'Proyectos',
      intro:
        'Proyectos backend construidos desde cero, priorizando arquitectura, buenas prácticas y código mantenible.',
      links: {
        backend: 'Backend',
        frontend: 'Frontend',
        apiDocs: 'API Docs',
        repo: 'Repositorio',
      },
      inntry: {
        subtitle: 'Plataforma de reservas de hoteles',
        description:
          'Plataforma de reservas hoteleras construida como un conjunto de microservicios Spring Boot detrás de un gateway único. Los huéspedes buscan disponibilidad, reservan y cancelan habitaciones, y reciben un email en cada paso; el panel de administración gestiona hoteles, habitaciones, precios y fotos por separado.',
        highlights: [
          '7 microservicios independientes (auth, gateway, catálogo, disponibilidad, reservas, notificaciones, agente IA), cada uno con su propia base de datos PostgreSQL',
          'Eventos de reserva vía Kafka hacia el servicio de notificaciones; Redis para rate limiting y estado de sesión del agente IA',
          'Gateway centraliza la validación JWT y reenvía identidad a los servicios internos vía headers, evitando decodificar el token en cada uno',
          'Recomendaciones y chat de soporte con IA (Gemini) como servicio independiente',
          'Frontend propio en Angular 21 + Tailwind CSS consumiendo el gateway',
        ],
      },
      menuflow: {
        subtitle: 'Gestión de pedidos para restaurantes vía QR',
        description:
          'Monolito Spring Boot para digitalizar la operativa de un restaurante: cada mesa genera un código QR que abre una sesión de pedido, con carta multi-idioma, gestión de pedidos y facturación, y actualizaciones en tiempo real por WebSocket.',
        highlights: [
          'Autenticación con JWT y control de acceso por roles',
          'Generación de códigos QR por mesa (ZXing) vinculados a sesiones de mesa',
          'Carta con soporte multi-idioma mediante entidades de traducción independientes (platos, categorías, alérgenos)',
          'Ciclo completo de pedido: categorías, platos, ingredientes y alérgenos, con facturación y métodos de pago',
          'WebSockets para reflejar el estado de pedidos y mesas en tiempo real',
        ],
      },
      chat: {
        subtitle: 'Backend de chat en tiempo real',
        description:
          'Backend de chat en tiempo real e independiente del frontend: difunde los mensajes a todos los clientes conectados, muestra el indicador de "escribiendo" y envía el historial reciente al conectarse.',
        highlights: [
          'Contrato de mensajería documentado: destinos y topics fijos con payloads tipados y un ejemplo de cliente en el README',
          'Historial publicado en un topic privado por cliente, con el id del cliente validado mediante un patrón estricto',
          'El servidor fija el id y la fecha de cada mensaje y solo persiste mensajes reales, no los eventos de entrada',
          'Configurable por entorno (orígenes permitidos, tamaño del historial) y despliegue con Docker Compose con MongoDB persistente',
          'Tests con JUnit 5 y Mockito y health check con Spring Actuator',
        ],
      },
      fleetcontrol: {
        subtitle: 'Plataforma de gestión de flotas',
        description:
          'Proyecto en equipo desarrollado en un sprint Scrum de 2 semanas: backend de gestión de flotas con 9 microservicios (vehículos, conductores, rutas, mantenimiento, combustible, alertas y un panel ejecutivo). Lanzamiento previsto a mediados de octubre de 2026.',
        roleTitle: 'Mi rol: coordinación del equipo y estándares de ingeniería',
        roleItems: [
          'Flujo de Git: dev para integración y main para versiones estables, una rama por tarea con el nombre tipo/número-issue-descripción, sin commits directos y con al menos una aprobación de alguien distinto al autor',
          'Convenciones: Conventional Commits, plantilla de PR (trabajo realizado, archivos cambiados, notas para probarlo) y reglas de Javadoc, todo recogido en un acuerdo de trabajo del equipo',
          'Control de calidad: Spotless, Checkstyle (estilo Google) y PMD en cada cambio, además de checks de CI de calidad de código y builds de Docker en las PR a dev y main',
          'Organización: cada miembro es responsable de un microservicio completo (código, tests y documentación); definí la estructura del proyecto, el seguimiento de issues y los pasos de onboarding, además de un AGENTS.md para que los asistentes de IA sigan las mismas reglas',
        ],
        highlights: [
          'Autenticación centralizada: ms-auth emite el JWT y cada servicio de dominio lo valida; las llamadas entre servicios (OpenFeign) se autentican con una clave interna',
          'Gateway único con enrutamiento y rate limiting',
          'Resiliencia con Resilience4j en las llamadas entre servicios',
          'Esquema versionado en PostgreSQL con migraciones Flyway',
          'Funciona sin APIs externas: un seeder genera datos de demostración reproducibles (semilla e histórico configurables) al arrancar',
        ],
      },
      status: {
        inDevelopment: 'En desarrollo',
      },
    },
    contact: {
      label: 'Contacto',
      location: 'Madrid, España',
      availability: 'Disponible para trabajar',
    },
    cv: {
      label: 'Currículum',
      download: 'Descargar PDF',
      role: 'Desarrollador backend junior',
      locationLabel: 'Ubicación',
      locationValue: 'Madrid, España',
      summaryHtml:
        'Desarrollador backend junior enfocado en <span class="text-white">Java</span> y <span class="text-white">Spring Boot</span>, con experiencia práctica en <span class="text-white">JPA/Hibernate</span>, Spring Security y autenticación mediante <span class="text-white">JWT</span> y <span class="text-white">OAuth 2.0</span>. He diseñado e implementado una plataforma de reservas hoteleras basada en una arquitectura de <span class="text-white">microservicios</span>, con autenticación mediante <span class="text-white">cookies HttpOnly</span>, comunicación asíncrona con <span class="text-white">Kafka</span> y pipelines de <span class="text-white">CI/CD</span> mediante <span class="text-white">GitHub Actions</span>. Cuento además con experiencia en testing con <span class="text-white">JUnit 5</span> y <span class="text-white">Mockito</span>, contenerización con <span class="text-white">Docker</span> y conocimientos de frontend con Angular, TypeScript y Tailwind CSS.',
      sections: {
        experience: 'Experiencia',
        projects: 'Proyectos',
        education: 'Datos académicos',
        languages: 'Idiomas',
        more: 'Más información',
      },
      experience: {
        role: 'Desarrollador backend - Prácticas',
        period: 'Febrero 2025 - Junio 2025',
        introHtml:
          'Desarrollo backend utilizando el CMS <span class="text-white">Strapi v5</span> con <span class="text-white">TypeScript</span>. Entre las tareas realizadas:',
        items: [
          'Implementación de lifecycles, <span class="text-white">middlewares</span>, rutas, controladores y servicios personalizados.',
          'Desarrollo de un sistema de notificaciones mediante <span class="text-white">WebSockets</span> a través de un middleware.',
          'Documentación técnica de los archivos y funcionalidades modificadas.',
          'Creación de types para estructurar y tipar los datos en TypeScript.',
        ],
      },
      projects: {
        hotel: {
          subtitle: 'Plataforma de reservas',
          descriptionHtml:
            'Plataforma de reservas hoteleras con <span class="text-white">microservicios</span> en <span class="text-white">Spring Boot 4.0.6</span> y <span class="text-white">Java 21</span>: gateway centralizado, <span class="text-white">autenticación JWT</span> vía cookies HttpOnly, mensajería asíncrona con Kafka y un servicio de recomendaciones con IA (Gemini). CI/CD con <span class="text-white">GitHub Actions</span> y despliegue con <span class="text-white">Docker</span> Compose.',
        },
      },
      education: [
        {
          title: '42 Madrid',
          detail: 'Campus Telefónica, Madrid',
          period: 'Incorporación octubre 2026',
        },
        {
          title: 'Lemoncode',
          detail: 'Especialización en Full Stack Development',
          period: 'Septiembre 2025 - actualidad',
        },
        {
          title: 'Universae – Instituto Superior de Formación Profesional',
          detail: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
          period: 'Septiembre 2023 - junio 2025',
        },
        {
          title: 'Universae – Instituto Superior de Formación Profesional',
          detail: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
          period: 'Septiembre 2023 - junio 2025',
        },
      ],
      languages: {
        english: 'Inglés',
        englishLevel: 'B1',
      },
      more: ['Carné de conducir', 'Disponibilidad total', 'Trabajo en equipo', 'Compromiso'],
    },
    footer: {
      role: 'Backend Developer',
      navAriaLabel: 'Navegación del pie de página',
    },
    header: {
      menuOpenAriaLabel: 'abrir menú',
      menuCloseAriaLabel: 'cerrar menú',
    },
  },
  en: {
    nav: {
      home: 'Home',
      stack: 'Stack',
      projects: 'Projects',
      contact: 'Contact',
      cv: 'CV',
    },
    hero: {
      descriptionHtml:
        'Junior backend developer specialized in <span class="text-white">Java</span> and <span class="text-white">Spring Boot</span>. I focus on building REST APIs and <span class="text-white">microservices</span>-based systems, with secure authentication, event-driven communication between services and containerized deployments with <span class="text-white">Docker</span>.',
      cta: 'View projects',
      location: 'Madrid, Spain',
      scroll: 'Scroll',
    },
    stack: {
      label: 'About me',
      intro:
        'I build backends focused on solid architecture, applying good practices and prioritizing code quality to create maintainable, scalable solutions.',
      subintro:
        'I work in teams following agile practices, organizing work through issues, branches and pull requests, and caring about both code quality and project documentation.',
      groups: {
        core: 'Core',
        data: 'Data',
        messaging: 'Messaging & Resilience',
        quality: 'Code Quality',
        infra: 'Infrastructure & CI/CD',
      },
      learningTitle: 'Currently learning',
      learningText:
        'Technologies I am exploring to expand my knowledge in backend development, automation and infrastructure.',
    },
    projects: {
      label: 'Projects',
      intro:
        'Backend projects built from scratch, prioritizing architecture, good practices and maintainable code.',
      links: {
        backend: 'Backend',
        frontend: 'Frontend',
        apiDocs: 'API Docs',
        repo: 'Repository',
      },
      inntry: {
        subtitle: 'Hotel booking platform',
        description:
          'Hotel booking platform built as a set of Spring Boot microservices behind a single gateway. Guests search availability, book and cancel rooms, and receive an email at every step; the admin panel manages hotels, rooms, pricing and photos separately.',
        highlights: [
          '7 independent microservices (auth, gateway, catalog, availability, bookings, notifications, AI agent), each with its own PostgreSQL database',
          'Booking events via Kafka to the notifications service; Redis for rate limiting and the AI agent session state',
          'Gateway centralizes JWT validation and forwards identity to internal services via headers, avoiding decoding the token in each one',
          'AI-powered recommendations and support chat (Gemini) as an independent service',
          'Own frontend in Angular 21 + Tailwind CSS consuming the gateway',
        ],
      },
      menuflow: {
        subtitle: 'QR-based restaurant ordering system',
        description:
          "Spring Boot monolith to digitize a restaurant's operations: each table generates a QR code that opens an order session, with a multi-language menu, order management and billing, and real-time updates over WebSocket.",
        highlights: [
          'Authentication with JWT and role-based access control',
          'Per-table QR code generation (ZXing) linked to table sessions',
          'Multi-language menu using independent translation entities (dishes, categories, allergens)',
          'Full order lifecycle: categories, dishes, ingredients and allergens, with billing and payment methods',
          'WebSockets to reflect order and table status in real time',
        ],
      },
      chat: {
        subtitle: 'Real-time chat backend',
        description:
          'Frontend-agnostic real-time chat backend: it broadcasts messages to every connected client, shows a "typing" indicator and sends the recent message history when a client joins.',
        highlights: [
          'Documented messaging contract: fixed destinations and topics with typed payloads, plus a client usage example in the README',
          'History published on a private per-client topic, with the client id validated against a strict pattern',
          "The server sets each message's id and timestamp and persists only real messages, not join events",
          'Configurable by environment (allowed origins, history size) and deployed with Docker Compose with persistent MongoDB',
          'Tests with JUnit 5 and Mockito and a health check via Spring Actuator',
        ],
      },
      fleetcontrol: {
        subtitle: 'Fleet management platform',
        description:
          'Team project built in a 2-week Scrum sprint: a fleet management backend with 9 microservices (vehicles, drivers, routes, maintenance, fuel, alerts and an executive dashboard). Release expected mid-October 2026.',
        roleTitle: 'My role: team coordination and engineering standards',
        roleItems: [
          'Git workflow: dev for integration and main for stable releases, one branch per task named type/issue-number-description, no direct commits and at least one approval from someone other than the author',
          'Conventions: Conventional Commits, a PR template (work performed, files changed, notes on how to test) and Javadoc rules, all documented in a team working agreement',
          'Quality gates: Spotless, Checkstyle (Google style) and PMD on every change, plus CI checks for code quality and Docker builds on PRs to dev and main',
          'Organization: each member owns a full microservice (code, tests and docs); I defined the project structure, issue tracking and onboarding steps, plus an AGENTS.md so AI assistants follow the same rules',
        ],
        highlights: [
          'Centralized auth: ms-auth issues the JWT and every domain service validates it; calls between services (OpenFeign) are authenticated with an internal key',
          'Single gateway with routing and rate limiting',
          'Resilience4j on inter-service calls',
          'Versioned PostgreSQL schema with Flyway migrations',
          'Runs with no external APIs: a seeder generates reproducible demo data (configurable seed and history length) on startup',
        ],
      },
      status: {
        inDevelopment: 'In development',
      },
    },
    contact: {
      label: 'Contact',
      location: 'Madrid, Spain',
      availability: 'Available for work',
    },
    cv: {
      label: 'Resume',
      download: 'Download PDF',
      role: 'Junior backend developer',
      locationLabel: 'Location',
      locationValue: 'Madrid, Spain',
      summaryHtml:
        'Junior backend developer focused on <span class="text-white">Java</span> and <span class="text-white">Spring Boot</span>, with hands-on experience in <span class="text-white">JPA/Hibernate</span>, Spring Security and authentication using <span class="text-white">JWT</span> and <span class="text-white">OAuth 2.0</span>. I designed and built a hotel booking platform based on a <span class="text-white">microservices</span> architecture, with <span class="text-white">HttpOnly cookie</span> authentication, asynchronous communication through <span class="text-white">Kafka</span> and <span class="text-white">CI/CD</span> pipelines with <span class="text-white">GitHub Actions</span>. I also have experience in testing with <span class="text-white">JUnit 5</span> and <span class="text-white">Mockito</span>, containerization with <span class="text-white">Docker</span> and frontend knowledge with Angular, TypeScript and Tailwind CSS.',
      sections: {
        experience: 'Experience',
        projects: 'Projects',
        education: 'Education',
        languages: 'Languages',
        more: 'Additional information',
      },
      experience: {
        role: 'Backend developer - Internship',
        period: 'February 2025 - June 2025',
        introHtml:
          'Backend development using the <span class="text-white">Strapi v5</span> CMS with <span class="text-white">TypeScript</span>. Tasks included:',
        items: [
          'Implementation of lifecycles, <span class="text-white">middlewares</span>, routes, controllers and custom services.',
          'Development of a notification system using <span class="text-white">WebSockets</span> through a middleware.',
          'Technical documentation of the modified files and features.',
          'Creation of types to structure and type data in TypeScript.',
        ],
      },
      projects: {
        hotel: {
          subtitle: 'Booking platform',
          descriptionHtml:
            'Hotel booking platform with <span class="text-white">microservices</span> built on <span class="text-white">Spring Boot 4.0.6</span> and <span class="text-white">Java 21</span>: centralized gateway, <span class="text-white">JWT authentication</span> via HttpOnly cookies, asynchronous messaging with Kafka and an AI-powered recommendations service (Gemini). CI/CD with <span class="text-white">GitHub Actions</span> and deployment with <span class="text-white">Docker</span> Compose.',
        },
      },
      education: [
        {
          title: '42 Madrid',
          detail: 'Telefónica Campus, Madrid',
          period: 'Joining October 2026',
        },
        {
          title: 'Lemoncode',
          detail: 'Full Stack Development specialization',
          period: 'September 2025 - present',
        },
        {
          title: 'Universae – Higher Vocational Training Institute',
          detail: 'Higher Technician in Web Application Development (DAW)',
          period: 'September 2023 - June 2025',
        },
        {
          title: 'Universae – Higher Vocational Training Institute',
          detail: 'Higher Technician in Multiplatform Application Development (DAM)',
          period: 'September 2023 - June 2025',
        },
      ],
      languages: {
        english: 'English',
        englishLevel: 'B1',
      },
      more: ['Driving licence', 'Full availability', 'Teamwork', 'Commitment'],
    },
    footer: {
      role: 'Backend Developer',
      navAriaLabel: 'Footer navigation',
    },
    header: {
      menuOpenAriaLabel: 'open menu',
      menuCloseAriaLabel: 'close menu',
    },
  },
} as const satisfies Record<Lang, unknown>;
