import { Metadata } from "next";
import Flota from "@/components/flota/Flota";
import HeroNosotros from "@/components/heroNosotros/HeroNosotros";

export const metadata: Metadata = {
  title: "Nuestra Flota - HL Transporte - Hermanos Luci | Micros y Buses en Córdoba",
  description:
    "Descubrí la flota de Hermanos Luci. Contamos con unidades modernas equipadas con aire acondicionado, asientos reclinables y tecnología de última generación para tu comodidad y seguridad en cada viaje.",
  keywords: [
    "flota hl transporte",
    "micros modernos córdoba",
    "buses equipados córdoba",
    "unidades transporte turismo",
    "micros con aire acondicionado",
    "alquiler buses córdoba",
  ],
  openGraph: {
    title: "Nuestra Flota - HL Transporte - Hermanos Luci | Micros y Buses Modernos",
    description:
      "Descubrí la flota de Hermanos Luci. Unidades modernas equipadas con aire acondicionado, asientos reclinables y tecnología de última generación.",
    type: "website",
    url: "https://www.hermanosluci.com.ar/flota",
    images: [
      {
        url: "https://www.hermanosluci.com.ar/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Flota de Hermanos Luci",
      },
    ],
    locale: "es_AR",
    siteName: "HL Transporte - Hermanos Luci",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuestra Flota - HL Transporte - Hermanos Luci | Micros y Buses Modernos",
    description:
      "Descubrí la flota de Hermanos Luci. Unidades modernas equipadas con aire acondicionado, asientos reclinables y tecnología de última generación.",
    images: ["https://www.hermanosluci.com.ar/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.hermanosluci.com.ar/flota",
  },
};

export default function Page() {
  return (
    <main>
      <HeroNosotros arriba="NUESTRA" abajo="FLOTA" />
      <Flota />
    </main>
  );
}
