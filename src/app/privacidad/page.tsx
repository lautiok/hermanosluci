import { Metadata } from "next";
import HeroNosotros from "@/components/heroNosotros/HeroNosotros";
import PoliticaPrivacidad from "@/components/politicaPrivacidad/PoliticaPrivacidad";

export const metadata: Metadata = {
  title: "Política de Privacidad - HL Transporte - Hermanos Luci | Protección de Datos Personales",
  description:
    "Política de privacidad de HL Transporte - Hermanos Luci. Conocé cómo protegemos y tratamos tus datos personales de acuerdo con la Ley de Protección de Datos Personales de Argentina.",
  keywords: [
    "política privacidad hl transporte",
    "protección datos personales",
    "privacidad hermanos luci",
    "términos y condiciones transporte",
  ],
  openGraph: {
    title: "Política de Privacidad - HL Transporte - Hermanos Luci",
    description:
      "Política de privacidad de HL Transporte. Conocé cómo protegemos y tratamos tus datos personales.",
    type: "website",
    url: "https://hermanosluci.com.ar/privacidad",
    images: [
      {
        url: "https://www.hermanosluci.com.ar/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Política de Privacidad HL Transporte - Hermanos Luci",
      },
    ],
    locale: "es_AR",
    siteName: "HL Transporte - Hermanos Luci",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.hermanosluci.com.ar/privacidad",
  },
};

export default function page() {
  return (
    <main>
      <HeroNosotros abajo="politica de" arriba="privacidad" />
      <PoliticaPrivacidad />
    </main>
  );
}
