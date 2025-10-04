import { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import styles from "./page.module.css";
import Servicios from "@/components/servicios/Servicios";
import Destinos from "@/components/destinos/Destinos";
import Clientes from "@/components/clientes/Clientes";
import Carrousel from "@/components/carrousel/Carrousel";

export const metadata: Metadata = {
  title: "HL Transporte - Hermanos Luci | Transporte de Turismo en Córdoba",
  description:
    "HL Transporte ofrece servicios de transporte de turismo en Córdoba con unidades modernas y cómodas. Realizamos viajes a destinos turísticos, excursiones escolares y traslados corporativos con la mejor calidad de servicio.",
  keywords: [
    "transporte turismo córdoba",
    "alquiler de micros córdoba",
    "hermanos luci transporte",
    "viajes turísticos córdoba",
    "transporte estudiantil",
    "alquiler de buses",
  ],
  openGraph: {
    title: "HL Transporte - Hermanos Luci | Transporte de Turismo en Córdoba",
    description:
      "HL Transporte ofrece servicios de transporte de turismo en Córdoba con unidades modernas y cómodas. Realizamos viajes a destinos turísticos, excursiones escolares y traslados corporativos.",
    type: "website",
    url: "https://hltransporte.com.ar",
    images: [
      {
        url: "https://hltransporte.com.ar/og-image.png",
        width: 1200,
        height: 630,
        alt: "HL Transporte - Hermanos Luci",
      },
    ],
    locale: "es_AR",
    siteName: "HL Transporte",
  },
  twitter: {
    card: "summary_large_image",
    title: "HL Transporte - Hermanos Luci | Transporte de Turismo en Córdoba",
    description:
      "HL Transporte ofrece servicios de transporte de turismo en Córdoba con unidades modernas y cómodas.",
    images: ["https://hltransporte.com.ar/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hltransporte.com.ar",
  },
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Servicios />
      <Destinos />
      <Clientes />
    </main>
  );
}
