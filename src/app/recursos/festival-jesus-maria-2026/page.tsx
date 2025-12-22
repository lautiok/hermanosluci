import { Metadata } from "next";
import Link from "next/link";
import styles from "./festival-jesus-maria-2026.module.css";

export const metadata: Metadata = {
  title:
    "Festival Jesús María 2026: fechas, grilla completa, precios y cómo organizar tu viaje | HL Transporte",
  description:
    "Guía completa del Festival Nacional de Doma y Folklore de Jesús María 2026. Fechas, horarios, grilla día por día, precios de entradas y consejos prácticos para llegar y volver sin complicaciones.",
  keywords: [
    "festival jesús maría 2026",
    "festival jesús maría fechas",
    "grilla festival jesús maría",
    "precios festival jesús maría",
    "festival doma folklore jesús maría",
    "cómo llegar festival jesús maría",
    "transporte festival jesús maría",
  ],
  openGraph: {
    title:
      "Festival Jesús María 2026: fechas, grilla completa, precios y cómo organizar tu viaje",
    description:
      "Guía completa del Festival Nacional de Doma y Folklore de Jesús María 2026. Fechas, horarios, grilla día por día, precios y consejos prácticos.",
    type: "article",
    url: "https://www.hermanosluci.com.ar/recursos/festival-jesus-maria-2026",
    images: [
      {
        url: "https://www.hermanosluci.com.ar/recursos/jesus-maria/portada.jpg",
        width: 1200,
        height: 630,
        alt: "Festival Jesús María 2026",
      },
    ],
    locale: "es_AR",
    siteName: "HL Transporte - Hermanos Luci",
  },
  twitter: {
    card: "summary_large_image",
    title: "Festival Jesús María 2026: fechas, grilla completa y precios",
    description:
      "Guía completa del Festival Nacional de Doma y Folklore de Jesús María 2026.",
    images: ["https://www.hermanosluci.com.ar/recursos/jesus-maria/portada.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.hermanosluci.com.ar/recursos/festival-jesus-maria-2026",
  },
};

export default function FestivalJesusMaria2026Page() {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <div className={styles.portada}>
          <img
            src="/recursos/jesus-maria/portada.jpg"
            alt="Festival Jesús María 2026"
            className={styles.portadaImage}
          />
        </div>
        <header className={styles.header}>
          <h1>
            Festival Jesús María 2026: fechas, grilla completa, precios y cómo
            organizar tu viaje
          </h1>
        </header>

        <div className={styles.content}>
          <p>
            El Festival Nacional de Doma y Folklore de Jesús María 2026 vuelve a
            ser uno de los grandes protagonistas del verano en Córdoba. Con una
            grilla que combina folklore, cuarteto, cumbia y artistas populares,
            el evento convoca a miles de personas cada noche.
          </p>

          <p>
            Si estás organizando tu visita, acá encontrás toda la información
            oficial y actualizada: fechas, horarios, grilla día por día, precios
            de entradas y consejos prácticos para llegar y volver sin
            complicaciones.
          </p>

          <section className={styles.section}>
            <h2>¿Cuándo es el Festival Jesús María 2026?</h2>

            <p>
              El festival se desarrolla desde el jueves 8 hasta el domingo 18 de
              enero de 2026.
            </p>

            <ul>
              <li>
                <strong>📌 Inicio oficial:</strong> viernes 9 de enero
              </li>
              <li>
                <strong>📌 Noche especial de apertura:</strong> jueves 8 de enero
              </li>
              <li>
                <strong>📌 Cierre:</strong> domingo 18 de enero
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Horarios oficiales del Festival Jesús María 2026</h2>

            <p>Estos horarios son clave para organizar el viaje:</p>

            <ul>
              <li>
                <strong>18:00 hs:</strong> apertura de puertas del anfiteatro
              </li>
              <li>
                <strong>19:00 hs:</strong> inicio del espectáculo y transmisión
                online
              </li>
              <li>
                <strong>22:00 hs:</strong> comienzo de la transmisión televisiva
              </li>
              <li>
                <strong>05:00 hs:</strong> finalización aproximada del evento
              </li>
            </ul>

            <p>
              👉 Esto explica por qué mucha gente prefiere planificar con
              anticipación el regreso, sobre todo quienes viajan desde Córdoba
              capital.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Grilla del Festival Jesús María 2026 día por día</h2>

            <div className={styles.grillaSection}>
              <h3>🗓 Jueves 8 de enero</h3>
              <div className={styles.imageContainer}>
                <img
                  src="/recursos/jesus-maria/grilla-jueves-8.jpg"
                  alt="Grilla jueves 8 de enero - Festival Jesús María 2026"
                  className={styles.sectionImage}
                />
              </div>
              <ul>
                <li>Jairo</li>
                <li>Destino San Javier</li>
                <li>Los Nombradores del Alba</li>
                <li>Damián Córdoba</li>
                <li>Nati Pastorutti</li>
                <li>Decime Chango</li>
                <li>Bien Argentino</li>
              </ul>
              <p>
                <strong>🎟 Entrada a voluntad</strong> (el precio lo ponés vos)
              </p>
            </div>

            <div className={styles.grillaSection}>
              <h3>🗓 Viernes 9 de enero</h3>
              <div className={styles.imageContainer}>
                <img
                  src="/recursos/jesus-maria/grilla-viernes-9.jpg"
                  alt="Grilla viernes 9 de enero - Festival Jesús María 2026"
                  className={styles.sectionImage}
                />
              </div>
              <ul>
                <li>Los Palmeras</li>
                <li>Q' Lokura</li>
                <li>Los 4 de Córdoba</li>
                <li>Angelo Aranda</li>
                <li>Lautaro Rojas</li>
                <li>DJ Fer Palacio</li>
              </ul>
            </div>

            <div className={styles.grillaSection}>
              <h3>🗓 Sábado 10 de enero</h3>
              <div className={styles.imageContainer}>
                <img
                  src="/recursos/jesus-maria/grilla-sabado-10.jpg"
                  alt="Grilla sábado 10 de enero - Festival Jesús María 2026"
                  className={styles.sectionImage}
                />
              </div>
              <ul>
                <li>Abel Pintos</li>
                <li>Los Nocheros</li>
                <li>Los Herrera</li>
                <li>Los Trajinantes</li>
                <li>Sant2</li>
                <li>Mati Rojas</li>
              </ul>
            </div>

            <div className={styles.grillaSection}>
              <h3>🗓 Domingo 11 de enero</h3>
              <div className={styles.imageContainer}>
                <img
                  src="/recursos/jesus-maria/grilla-domingo-11.jpg"
                  alt="Grilla domingo 11 de enero - Festival Jesús María 2026"
                  className={styles.sectionImage}
                />
              </div>
              <ul>
                <li>Lázaro Caballero</li>
                <li>Christian Herrera</li>
                <li>Piko Frank</li>
                <li>Lucas Sugo</li>
                <li>Campedrinos</li>
                <li>Magui Olave</li>
              </ul>
            </div>

            <div className={styles.grillaSection}>
              <h3>🗓 Lunes 12 de enero</h3>
              <div className={styles.imageContainer}>
                <img
                  src="/recursos/jesus-maria/grilla-lunes-12.jpg"
                  alt="Grilla lunes 12 de enero - Festival Jesús María 2026"
                  className={styles.sectionImage}
                />
              </div>
              <ul>
                <li>Los Tekis</li>
                <li>La T y La M</li>
                <li>Ke Personajes</li>
                <li>Diableros Jujeños</li>
                <li>Kepianco</li>
                <li>Ceibo</li>
              </ul>
            </div>

            <div className={styles.grillaSection}>
              <h3>🗓 Martes 13 de enero</h3>
              <div className={styles.imageContainer}>
                <img
                  src="/recursos/jesus-maria/grilla-martes-13.jpg"
                  alt="Grilla martes 13 de enero - Festival Jesús María 2026"
                  className={styles.sectionImage}
                />
              </div>
              <ul>
                <li>Sergio Galleguillo</li>
                <li>LBC y Euge Quevedo</li>
                <li>Juan Fuentes</li>
                <li>Carafea</li>
                <li>Jessica Benavidez</li>
              </ul>
            </div>

            <div className={styles.grillaSection}>
              <h3>🗓 Miércoles 14 de enero</h3>
              <div className={styles.imageContainer}>
                <img
                  src="/recursos/jesus-maria/grilla-miercoles-14.jpg"
                  alt="Grilla miércoles 14 de enero - Festival Jesús María 2026"
                  className={styles.sectionImage}
                />
              </div>
              <ul>
                <li>Luciano Pereyra</li>
                <li>La K'onga</li>
                <li>Nahuel Pennisi</li>
                <li>Maggie Cullen</li>
                <li>La Callejera</li>
              </ul>
            </div>

            <div className={styles.grillaSection}>
              <h3>🗓 Jueves 15 de enero</h3>
              <div className={styles.imageContainer}>
                <img
                  src="/recursos/jesus-maria/grilla-jueves-15.jpg"
                  alt="Grilla jueves 15 de enero - Festival Jesús María 2026"
                  className={styles.sectionImage}
                />
              </div>
              <ul>
                <li>Soledad</li>
                <li>El Indio Lucio Rojas</li>
                <li>Paquito Ocaño</li>
                <li>Los Carabajal</li>
                <li>Orellana Lucca</li>
                <li>Chequelo</li>
              </ul>
            </div>

            <div className={styles.grillaSection}>
              <h3>🗓 Viernes 16 de enero</h3>
              <div className={styles.imageContainer}>
                <img
                  src="/recursos/jesus-maria/grilla-viernes-16.jpg"
                  alt="Grilla viernes 16 de enero - Festival Jesús María 2026"
                  className={styles.sectionImage}
                />
              </div>
              <ul>
                <li>Chaqueño Palavecino</li>
                <li>El Loco Amato</li>
                <li>Las Voces de Orán</li>
                <li>Cabales</li>
                <li>Canto 4</li>
                <li>Los Alonsitos</li>
                <li>Loy Carrizo</li>
              </ul>
            </div>

            <div className={styles.grillaSection}>
              <h3>🗓 Sábado 17 de enero</h3>
              <div className={styles.imageContainer}>
                <img
                  src="/recursos/jesus-maria/grilla-sabado-17.jpg"
                  alt="Grilla sábado 17 de enero - Festival Jesús María 2026"
                  className={styles.sectionImage}
                />
              </div>
              <ul>
                <li>Jorge Rojas</li>
                <li>Ahyre</li>
                <li>Cazzu</li>
                <li>Ulises Bueno</li>
                <li>Guitarreros</li>
                <li>La Clave Trío</li>
              </ul>
            </div>

            <div className={styles.grillaSection}>
              <h3>🗓 Domingo 18 de enero</h3>
              <div className={styles.imageContainer}>
                <img
                  src="/recursos/jesus-maria/grilla-domingo-18.jpg"
                  alt="Grilla domingo 18 de enero - Festival Jesús María 2026"
                  className={styles.sectionImage}
                />
              </div>
              <ul>
                <li>Los Manseros Santiagueños</li>
                <li>Raly Barrionuevo</li>
                <li>Dúo Coplanacu</li>
                <li>DesaKTa2</li>
                <li>Flor Paz</li>
                <li>Simón Aguirre</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Precios de entradas del Festival Jesús María 2026</h2>

            <p>
              A continuación, los precios oficiales día por día (en pesos
              argentinos):
            </p>

            <div className={styles.preciosSection}>
              <h3>🎟 Jueves 8 de enero</h3>
              <p>
                <strong>Entrada a voluntad</strong> (el valor lo decide el público)
              </p>
            </div>

            <div className={styles.preciosSection}>
              <h3>🎟 Viernes 9, domingo 11, martes 13 y domingo 18</h3>
              <ul>
                <li>General: $48.000</li>
                <li>Jubilados: $25.000</li>
                <li>Menores: $25.000</li>
                <li>Platea A: $150.000</li>
                <li>Platea B: $120.000</li>
                <li>Ticket conservadora: $48.000</li>
              </ul>
            </div>

            <div className={styles.preciosSection}>
              <h3>🎟 Sábado 10 y jueves 15</h3>
              <ul>
                <li>General: $48.000</li>
                <li>Jubilados: $25.000</li>
                <li>Menores: $25.000</li>
                <li>Platea A: $180.000</li>
                <li>Platea B: $150.000</li>
                <li>Ticket conservadora: $48.000</li>
              </ul>
            </div>

            <div className={styles.preciosSection}>
              <h3>🎟 Lunes 12, miércoles 14, viernes 16 y sábado 17</h3>
              <ul>
                <li>General: $48.000</li>
                <li>Jubilados: $25.000</li>
                <li>Menores: $25.000</li>
                <li>Platea A: $200.000</li>
                <li>Platea B: $170.000</li>
                <li>Ticket conservadora: $48.000</li>
              </ul>
            </div>

            <p>
              👉 En las noches más convocantes, comprar con anticipación suele
              ser clave.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Dónde se realiza el Festival Jesús María y cómo llegar</h2>

            <p>
              Jesús María está ubicada a unos 50 km de la ciudad de Córdoba, lo
              que la convierte en un destino cercano pero con altísima demanda
              durante el festival.
            </p>

            <p>
              Algo que se repite cada año es que muchas personas llegan sin
              problema, pero el desafío aparece a la salida, cuando el evento
              termina cerca de las 5 de la mañana. Por eso, cada vez es más
              común organizar el traslado de ida y vuelta con tiempo,
              especialmente cuando se viaja en grupo.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Consejos para disfrutar el Festival Jesús María 2026</h2>

            <ul>
              <li>
                <strong>Definí cómo volvés antes de salir</strong>
              </li>
              <li>
                <strong>
                  Tené en cuenta que el espectáculo central empieza tarde
                </strong>
              </li>
              <li>
                <strong>
                  Si vas en grupo, coordinar horarios evita contratiempos
                </strong>
              </li>
              <li>
                <strong>Evitá improvisar transporte a la madrugada</strong>
              </li>
            </ul>

            <p>
              Estos detalles simples suelen marcar la diferencia entre una gran
              experiencia y una noche complicada.
            </p>
          </section>
        </div>
        <div className={styles.navigation}>
          <Link href="/recursos" className={styles.backButton}>
            ← Volver a Recursos
          </Link>
        </div>
      </article>
    </main>
  );
}


