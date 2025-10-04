"use client";
import { useState } from "react";
import styles from "./faq.module.css";

interface FAQItem {
  pregunta: string;
  respuesta: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      pregunta: "¿Qué servicios ofrece Hermanos Luci Transporte?",
      respuesta: "Ofrecemos traslados privados y grupales en Córdoba y alrededores, incluyendo traslados al aeropuerto, excursiones, eventos corporativos y viajes turísticos, garantizando comodidad y seguridad."
    },
    {
      pregunta: "¿Cómo puedo reservar un traslado con Hermanos Luci?",
      respuesta: "Puede reservar su traslado contactando a nuestra secretaria por WhatsApp o mediante el formulario de contacto en nuestro sitio web. Recibirá confirmación con todos los detalles de su viaje."
    },
    {
      pregunta: "¿Qué tipos de vehículos tienen disponibles?",
      respuesta: "Contamos con autos, vans, minibuses y buses de gran capacidad, todos modernos y seguros, adaptados para viajes cortos o largos y grupos de 4 a 60 personas."
    },
    {
      pregunta: "¿Realizan traslados al aeropuerto?",
      respuesta: "Sí, ofrecemos traslados al aeropuerto de Córdoba y otras ciudades cercanas, asegurando puntualidad y confort para que su viaje sea libre de preocupaciones."
    },
    {
      pregunta: "¿Cómo se calcula el precio de un traslado?",
      respuesta: "El precio depende de la distancia, el tipo de vehículo y la cantidad de pasajeros. Para recibir un presupuesto exacto, puede contactarnos con fecha, destino y cantidad de personas."
    },
    {
      pregunta: "¿Hermanos Luci Transporte hace traslados interprovinciales?",
      respuesta: "Sí, además de Córdoba y alrededores, realizamos traslados a otras provincias según disponibilidad de nuestra flota. Consúltenos para rutas específicas."
    },
    {
      pregunta: "¿Se pueden contratar traslados para eventos o excursiones?",
      respuesta: "Sí, realizamos traslados para festivales, excursiones turísticas, bodas, cumpleaños y eventos corporativos, gestionando toda la logística y transporte del grupo."
    },
    {
      pregunta: "¿Puedo solicitar un traslado de última hora?",
      respuesta: "Sí, podemos atender traslados urgentes o de emergencia, siempre sujeto a la disponibilidad de vehículos y personal. Se recomienda contactar lo antes posible."
    },
    {
      pregunta: "¿Qué medidas de seguridad aplican durante los traslados?",
      respuesta: "Todos nuestros vehículos cuentan con mantenimiento regular, seguro vigente y cumplimiento de normas de tránsito. Nuestros conductores están capacitados para garantizar seguridad y confort."
    },
    {
      pregunta: "¿Ofrecen traslados para grupos grandes?",
      respuesta: "Sí, nuestra flota incluye vehículos para grupos de hasta 60 personas, perfectos para excursiones, viajes corporativos o eventos masivos."
    },
    {
      pregunta: "¿Cómo puedo recibir una cotización rápida?",
      respuesta: "Envíe un mensaje por WhatsApp indicando fecha, destino y cantidad de pasajeros, y recibirá un presupuesto detallado en minutos."
    },
    {
      pregunta: "¿Hermanos Luci Transporte tiene servicios de transporte nocturno?",
      respuesta: "Sí, ofrecemos traslados nocturnos para quienes necesitan viajar fuera del horario comercial, manteniendo seguridad y puntualidad."
    },
    {
      pregunta: "¿Puedo elegir un vehículo específico para mi traslado?",
      respuesta: "Dependiendo de la disponibilidad, puede solicitar un tipo de vehículo específico (auto, van, minibús o bus). Nuestro equipo le confirmará la opción disponible."
    },
    {
      pregunta: "¿Aceptan pagos con tarjeta o efectivo?",
      respuesta: "Aceptamos pagos en efectivo, transferencia bancaria y pagos con tarjeta, asegurando flexibilidad según su preferencia."
    },
    {
      pregunta: "¿Hermanos Luci Transporte ofrece servicios corporativos?",
      respuesta: "Sí, realizamos traslados para empresas y equipos de trabajo, con vehículos adecuados y servicio profesional para garantizar eficiencia y puntualidad."
    },
    {
      pregunta: "¿Qué diferencia a Hermanos Luci de otras empresas de transporte?",
      respuesta: "Nos destacamos por atención personalizada, puntualidad, seguridad y experiencia en transporte de grupos en Córdoba, combinando logística profesional con trato cercano."
    },
    {
      pregunta: "¿Cómo puedo confirmar mi reserva de traslado?",
      respuesta: "Una vez que envíe los datos de su viaje, recibirá confirmación vía WhatsApp o correo electrónico, con todos los detalles del vehículo y horario."
    },
    {
      pregunta: "¿Realizan traslados turísticos a destinos populares?",
      respuesta: "Sí, hacemos traslados turísticos a Cosquín, Villa Carlos Paz, La Cumbrecita y otros destinos en Córdoba, con vehículos cómodos y seguros para grupos grandes y pequeños."
    },
    {
      pregunta: "¿Pueden acompañar traslados con guía o asistencia?",
      respuesta: "Podemos coordinar traslados con asistencia personalizada, especialmente para excursiones o eventos donde se requiere guía o logística adicional."
    },
    {
      pregunta: "¿Cómo contactar a Hermanos Luci Transporte en caso de dudas?",
      respuesta: "Puede contactarnos por WhatsApp, correo electrónico o llamando al teléfono disponible en nuestra web. Nuestro equipo responderá rápidamente para organizar su traslado."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.questionText}>{faq.pregunta}</span>
                <span className={styles.icon}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`${styles.faqAnswer} ${
                  openIndex === index ? styles.show : ""
                }`}
              >
                <p>{faq.respuesta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.contactCTA}>
          <h3>¿No encontraste lo que buscabas?</h3>
          <p>Contáctanos y te responderemos todas tus dudas</p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
