export type Lang = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      stack: 'Stack',
      projects: 'Proyectos',
      contact: 'Contacto',
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
    },
    contact: {
      label: 'Contacto',
      location: 'Madrid, España',
      availability: 'Disponible para trabajar',
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
    },
    contact: {
      label: 'Contact',
      location: 'Madrid, Spain',
      availability: 'Available for work',
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
