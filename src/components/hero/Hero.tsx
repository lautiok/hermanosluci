import styles from "./hero.module.css";
import { CircleArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div id="hero" className={styles.heroContainer}>
      {/* VIDEO DE FONDO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.heroVideo}
      >
        <source src="/video-hero.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Traslados en <br /> CÓRDOBA <span className={styles.banderas}><img src="/bandera-cordoba.png" alt="bandera" /> <img src="/bandera-argentina.png" alt="" /></span>
          </h1>
          <p>
            Nos encargamos de cada detalle de tu viaje, ofreciendo un servicio de logística y transporte que garantiza una experiencia cómoda, segura y siempre a tiempo.
          </p>
          <button>
            <a href="/cotizaciones">Cotiza tu viaje</a>
          </button>
        </div>
      </div>

      <div className={styles.bajar}>
        <a href="#servicios" arial-label="Bajar a servicios">
          <CircleArrowDown color="#fff" size={25} />
        </a>
      </div>
    </div>
  );
}
