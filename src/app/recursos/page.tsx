import { Metadata } from "next";
import Link from "next/link";
import styles from "./recursos.module.css";

export const metadata: Metadata = {
  title: "Recursos y Guías de Viaje - HL Transporte | Hermanos Luci",
  description:
    "Descubrí guías útiles y recursos sobre destinos turísticos en Córdoba. Consejos prácticos, lugares para visitar y toda la información que necesitás para planificar tu viaje.",
  keywords: [
    "guías de viaje córdoba",
    "recursos turísticos córdoba",
    "consejos viaje córdoba",
    "destinos turísticos córdoba",
    "blog transporte turismo",
  ],
  openGraph: {
    title: "Recursos y Guías de Viaje - HL Transporte | Hermanos Luci",
    description:
      "Descubrí guías útiles y recursos sobre destinos turísticos en Córdoba. Consejos prácticos y toda la información que necesitás para planificar tu viaje.",
    type: "website",
    url: "https://www.hermanosluci.com.ar/recursos",
    images: [
      {
        url: "https://www.hermanosluci.com.ar/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Recursos y Guías de Viaje - HL Transporte",
      },
    ],
    locale: "es_AR",
    siteName: "HL Transporte - Hermanos Luci",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recursos y Guías de Viaje - HL Transporte",
    description:
      "Descubrí guías útiles y recursos sobre destinos turísticos en Córdoba.",
    images: ["https://www.hermanosluci.com.ar/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.hermanosluci.com.ar/recursos",
  },
};

const recursos = [
  {
    slug: "festival-jesus-maria-2026",
    title: "Festival Jesús María 2026: fechas, grilla completa, precios y cómo organizar tu viaje",
    description:
      "Guía completa del Festival Nacional de Doma y Folklore de Jesús María 2026. Fechas, horarios, grilla día por día, precios de entradas y consejos prácticos para llegar y volver sin complicaciones.",
    date: "2026",
  },
  {
    slug: "lugares-cordoba-visitar-verano",
    title: "Lugares de Córdoba para visitar en verano: destinos, festivales y consejos prácticos",
    description:
      "Guía completa con los mejores lugares de Córdoba para visitar en verano, incluyendo destinos, festivales y consejos prácticos para planificar tu escapada.",
    date: "2024",
  },
];

export default function RecursosPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Recursos y Guías de Viaje</h1>
        <p>
          Descubrí guías útiles, consejos prácticos y toda la información que
          necesitás para planificar tu viaje por Córdoba
        </p>
      </div>
      <div className={styles.recursosContainer}>
        <div className={styles.recursosGrid}>
          {recursos.map((recurso) => (
            <article key={recurso.slug} className={styles.recursoCard}>
              <Link href={`/recursos/${recurso.slug}`}>
                <h2>{recurso.title}</h2>
                <p className={styles.recursoDescription}>
                  {recurso.description}
                </p>
                <span className={styles.recursoDate}>{recurso.date}</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}




