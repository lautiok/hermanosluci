import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import local from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import WhatsappButton from "@/components/WhatsappButton/WhatsappButton";
import StructuredData from "@/components/structured-data/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hermanosluci.com.ar"),
  title: {
    default: "HL Transporte - Hermanos Luci | Servicio de Transporte en Córdoba",
    template: "%s | HL Transporte",
  },
  description:
    "HL Transporte, Hermanos Luci, ofrece servicios de transporte y logistica en Córdoba. Viaja con comodidad y seguridad a los mejores destinos de la región.",
  keywords: [
    "transporte córdoba",
    "hermanos luci",
    "hl transporte",
    "alquiler micros córdoba",
    "transporte turismo",
    "viajes turísticos córdoba",
  ],
  authors: [{ name: "HL Transporte - Hermanos Luci" }],
  creator: "HL Transporte - Hermanos Luci",
  publisher: "HL Transporte - Hermanos Luci",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.hermanosluci.com.ar/",
    siteName: "HL Transporte - Hermanos Luci",
    title: "HL Transporte - Hermanos Luci | Servicio de Transporte en Córdoba",
    description:
      "HL Transporte, Hermanos Luci, ofrece servicios de transporte de turismo en Córdoba. Viaja con comodidad y seguridad a los mejores destinos turísticos de la región.",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "HL Transporte - Hermanos Luci | Servicio de Transporte en Córdoba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HL Transporte - Hermanos Luci | Servicio de Transporte en Córdoba",
    description:
      "HL Transporte, Hermanos Luci, ofrece servicios de transporte de turismo en Córdoba. Viaja con comodidad y seguridad.",
    images: ["/og-image.jpeg"],
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
  }
};

const RajdhaniFont = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-rajdhani",
});

const localFont = local({
  src: "/fonts/MolikaSans.ttf",
  variable: "--font-molika",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
      </head>
      <body className={`${RajdhaniFont.variable} ${localFont.variable}`}>
        <Header />
        {children}
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
