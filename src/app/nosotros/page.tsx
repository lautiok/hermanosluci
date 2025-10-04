import { Metadata } from "next";
import HeroNosotros from "@/components/heroNosotros/HeroNosotros";
import Historia from "@/components/historia/Historia";

export const metadata: Metadata = {
  title: "Sobre Nosotros - HL Transporte - Hermanos Luci | Historia y Valores de Hermanos Luci",
  description:
    "Conocé la historia de HL Transporte - Hermanos Luci. Más de años de experiencia en el transporte de turismo en Córdoba, ofreciendo servicios confiables y de calidad. Nuestra misión es brindar viajes seguros y cómodos.",
  keywords: [
    "historia hl transporte",
    "hermanos luci córdoba",
    "empresa transporte córdoba",
    "sobre nosotros hl transporte",
    "valores empresa transporte",
  ],
  openGraph: {
    title: "Sobre Nosotros - HL Transporte- Hermanos Luci | Historia y Valores de Hermanos Luci",
    description:
      "Conocé la historia de HL Transporte - Hermanos Luci. Años de experiencia en el transporte de turismo en Córdoba, ofreciendo servicios confiables y de calidad.",
    type: "website",
    url: "https://www.hermanosluci.com.ar/nosotros",
    images: [
      {
        url: "https://www.hermanosluci.com.ar/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "HL Transporte - Hermanos Luci | Historia y Valores de Hermanos Luci",
      },
    ],
    locale: "es_AR",
    siteName: "HL Transporte - Hermanos Luci",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros - HL Transporte | Historia de Hermanos Luci",
    description:
      "Conocé la historia de HL Transporte - Hermanos Luci. Años de experiencia en el transporte de turismo en Córdoba.",
    images: ["https://www.hermanosluci.com.ar/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.hermanosluci.com.ar/nosotros",
  },
};

export default function page() {
  return (
    <main>
      <HeroNosotros arriba="SOBRE" abajo="NOSOTROS" />
      <Historia />
    </main>
  );
}
