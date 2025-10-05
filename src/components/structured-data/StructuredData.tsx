export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.hermanosluci.com.ar",
    name: "HL Transporte - Hermanos Luci",
    alternateName: "Hermanos Luci Transporte",
    description: "Empresa de transporte turístico en Córdoba. Ofrecemos traslados al aeropuerto, excursiones, eventos corporativos y viajes turísticos con la mejor calidad de servicio.",
    url: "https://www.hermanosluci.com.ar",
    logo: "https://www.hermanosluci.com.ar/logo.png",
    image: "https://www.hermanosluci.com.ar/og-image.jpeg",
    telephone: "+54-351-308-3290",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressRegion: "Córdoba",
      addressCountry: "AR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -31.4201,
      longitude: -64.1888
    },
    areaServed: [
      {
        "@type": "City",
        name: "Córdoba"
      },
      {
        "@type": "State",
        name: "Córdoba"
      },
      {
        "@type": "Country",
        name: "Argentina"
      }
    ],
    serviceType: [
      "Transporte Turístico",
      "Traslados al Aeropuerto",
      "Excursiones",
      "Transporte Corporativo",
      "Alquiler de Micros",
      "Viajes Turísticos"
    ],
    sameAs: [
      "https://www.instagram.com/hl_viajes_y_turismo/"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-351-308-3290",
      contactType: "customer service",
      areaServed: "AR",
      availableLanguage: ["Spanish"]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "4",
      bestRating: "5",
      worstRating: "1"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.hermanosluci.com.ar"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: "https://www.hermanosluci.com.ar/#servicios"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Flota",
        item: "https://www.hermanosluci.com.ar/flota"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Nosotros",
        item: "https://www.hermanosluci.com.ar/nosotros"
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "FAQ",
        item: "https://www.hermanosluci.com.ar/faq"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Transporte Turístico",
    provider: {
      "@type": "LocalBusiness",
      name: "HL Transporte - Hermanos Luci"
    },
    areaServed: {
      "@type": "State",
      name: "Córdoba, Argentina"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Transporte",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Traslados al Aeropuerto"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Excursiones Turísticas"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transporte Corporativo"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Alquiler de Micros y Buses"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué servicios ofrece Hermanos Luci Transporte?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ofrecemos traslados privados y grupales en Córdoba y alrededores, incluyendo traslados al aeropuerto, excursiones, eventos corporativos y viajes turísticos, garantizando comodidad y seguridad."
        }
      },
      {
        "@type": "Question",
        name: "¿Cómo puedo reservar un traslado con Hermanos Luci?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puede reservar su traslado contactando a nuestra secretaria por WhatsApp o mediante el formulario de contacto en nuestro sitio web. Recibirá confirmación con todos los detalles de su viaje."
        }
      },
      {
        "@type": "Question",
        name: "¿Realizan traslados al aeropuerto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, ofrecemos traslados al aeropuerto de Córdoba y otras ciudades cercanas, asegurando puntualidad y confort para que su viaje sea libre de preocupaciones."
        }
      },
      {
        "@type": "Question",
        name: "¿Qué tipos de vehículos tienen disponibles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contamos con autos, vans, minibuses y buses de gran capacidad, todos modernos y seguros, adaptados para viajes cortos o largos y grupos de 4 a 60 personas."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
