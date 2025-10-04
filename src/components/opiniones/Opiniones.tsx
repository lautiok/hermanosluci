import styles from './opiniones.module.css';

export default function Opiniones() {
  const opiniones = [
    {
      nombre: "Nahuel Guerra",
      estrellas: 5,
      comentario: "Gracias a los chicos de Hermanos Luci, necesitaba llegar rápido al aeropuerto. Se encargaron de todo y me llevaron sin problemas. ¡Unos genios, excelente servicio!"
    },
    {
      nombre: "Belén González",
      estrellas: 5,
      comentario: "Excelente servicio"
    },
    {
      nombre: "Micaias Britos",
      estrellas: 5,
      comentario: "Muy buena predisposición, super atento y amables. ¡Súper recomendable!"
    },
    {
      nombre: "Leonardo Damián Lazarte",
      estrellas: 5,
      comentario: "Buen servicio"
    }
  ];

  const renderStars = (cantidad: number) => {
    return Array.from({ length: cantidad }, (_, index) => (
      <span key={index} className={styles.star}>★</span>
    ));
  };

  return (
    <section id="opiniones" className={styles.opiniones}>
      <h2>Opiniones de Nuestros Clientes</h2>
      <div className={styles.opinionesContainer}>
        {opiniones.map((opinion, index) => (
          <div key={index} className={styles.opinionCard}>
            <div className={styles.opinionHeader}>
              <div className={styles.avatar}>
                {opinion.nombre.charAt(0)}
              </div>
              <div className={styles.nombreYEstrellas}>
                <h3>{opinion.nombre}</h3>
                <div className={styles.estrellas}>
                  {renderStars(opinion.estrellas)}
                </div>
              </div>
            </div>
            <p className={styles.comentario}>{opinion.comentario}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
