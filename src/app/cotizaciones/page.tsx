import { Metadata } from "next";
import Form from "@/components/form/Form";

export const metadata: Metadata = {
  title: "Cotizaciones - HL Transporte - Hermanos Luci | Solicitá tu Presupuesto Sin Cargo",
  description:
    "Solicitá tu cotización para servicios de transporte de turismo en Córdoba. HL Transporte - Hermanos Luci ofrece presupuestos sin cargo para viajes turísticos, excursiones escolares y traslados corporativos. Respuesta rápida y atención personalizada.",
  keywords: [
    "cotización transporte córdoba",
    "presupuesto alquiler micros",
    "solicitar cotización hl transporte",
    "precio alquiler buses córdoba",
    "consulta transporte turismo",
  ],
  openGraph: {
    title: "Cotizaciones - HL Transporte - Hermanos Luci | Solicitá tu Presupuesto Sin Cargo",
    description:
      "Solicitá tu cotización para servicios de transporte de turismo en Córdoba. Presupuestos sin cargo y respuesta rápida.",
    type: "website",
    url: "https://www.hermanosluci.com.ar/cotizaciones",
    images: [
      {
        url: "https://www.hermanosluci.com.ar/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Cotizaciones HL Transporte",
      },
    ],
    locale: "es_AR",
    siteName: "HL Transporte - Hermanos Luci",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cotizaciones - HL Transporte - Hermanos Luci | Solicitá tu Presupuesto Sin Cargo",
    description:
      "Solicitá tu cotización para servicios de transporte de turismo en Córdoba. Presupuestos sin cargo y respuesta rápida.",
    images: ["https://www.hermanosluci.com.ar/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.hermanosluci.com.ar/cotizaciones",
  },
};

export default function Page() {
  return (
    <main>
      <Form />
    </main>
  );
}
