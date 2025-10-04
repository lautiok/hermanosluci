import styles from "./historia.module.css";

export default function Historia() {
  return (
    <article className={styles.historia}>
      <h2>HISTORIA</h2>
      <p>
        Hermanos Luci Viajes y Turismo lleva más de 7 años en el rubro. Somos una empresa
        familiar con sede en Córdoba, Argentina, especializada en transporte y logística de pasajeros, ofreciendo todo tipo de servicios.
      </p>
      <p>
        La empresa fue fundada por Cristian Luci, quien se encarga de llevar
        adelante cada proyecto y garantizar que la misma funcione con
        excelencia. Fiorela Luci, nuestra secretaria, está al frente de la
        logística, coordinando traslados, reservas y todos los detalles para que
        cada viaje sea perfecto.
      </p>

      <div className={styles.equipo}>
        <div className={styles.miembro}>
          <img
            src="/cristian-luci.jpeg"
            alt="Cristian Luci"
            className={styles.foto}
          />
          <h3>Cristian Luci</h3>
          <p>Fundador</p>
        </div>
        <div className={styles.miembro}>
          <img
            src="/fiorela-luci.jpeg"
            alt="Fiorela Luci"
            className={styles.foto}
          />
          <h3>Fiorela Luci</h3>
          <p>Secretaria / Logística</p>
        </div>
      </div>
    </article>
  );
}
