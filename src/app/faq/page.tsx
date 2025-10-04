import { Metadata } from "next";
import FAQ from "@/components/faq/FAQ";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes - HL Transporte | Hermanos Luci",
  description:
    "Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios de transporte en Córdoba. Información sobre reservas, traslados, flota, pagos y más.",
  keywords: [
    "preguntas frecuentes transporte córdoba",
    "FAQ hermanos luci",
    "dudas traslados córdoba",
    "información transporte turismo",
  ],
  openGraph: {
    title: "Preguntas Frecuentes - HL Transporte",
    description:
      "Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios de transporte en Córdoba.",
    type: "website",
    url: "https://hltransporte.com.ar/faq",
  },
};

export default function FAQPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Preguntas Frecuentes</h1>
        <p>Encuentra respuestas rápidas a las dudas más comunes sobre nuestros servicios</p>
      </div>
      <FAQ />
    </main>
  );
}
