import { Roboto } from 'next/font/google';
import styles from './opiniones.module.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

const AVATAR_COLORS = ['#4285F4', '#EA4335', '#34A853', '#7B1FA2', '#F29900', '#12A4AF'];

function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.9l2.79 5.86 6.31.71-4.69 4.5 1.24 6.36L12 17.27l-5.65 3.06 1.24-6.36-4.69-4.5 6.31-.71z"
        fill={filled ? '#FBBC04' : 'none'}
        stroke={filled ? '#FBBC04' : '#dadce0'}
        strokeWidth="1.3"
      />
    </svg>
  );
}

function Stars({ cantidad }: { cantidad: number }) {
  return (
    <div className={styles.estrellas}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} filled={index < cantidad} />
      ))}
    </div>
  );
}

export default function Opiniones() {
  const opiniones = [
    {
      nombre: "Micaias Britos",
      estrellas: 5,
      comentario: "Muy buena predisposición, super atento y amables. ¡Súper recomendable!"
    },
    {
      nombre: "Romina",
      estrellas: 5,
      comentario: "Excelente atención desde el minuto cero.... El estado del coche un excelente felicitado. Altamente recomendable. Hermanos Luci se han trasoformado en nuestra empresa de viaje de confianza.."
    },
    {
      nombre: "Jorge Listello",
      estrellas: 5,
      comentario: "Excelente servicio... Puntualidad, confort, responsabilidad, respeto, honestidad y amabilidad. Super recomendable !!!"
    },
    {
      nombre: "Fran Corazza",
      estrellas: 5,
      comentario: "Excelente servio de transporte, super profesionales los choferes. Una empresa familiar que trabaja duro y acorde a sus ideales. Moviles siempre limpios, nuevos y cuidados. Totalmente recomendaba si querés viajar seguro y tranquilo."
    }
  ];

  const promedio =
    opiniones.reduce((total, opinion) => total + opinion.estrellas, 0) / opiniones.length;

  return (
    <section id="opiniones" className={`${styles.opiniones} ${roboto.variable}`}>
      <h2>Opiniones de Nuestros Clientes</h2>

      <div className={styles.resumenGoogle}>
        <GoogleLogo size={24} />
        <span className={styles.resumenNota}>{promedio.toFixed(1)}</span>
        <Stars cantidad={Math.round(promedio)} />
        <span className={styles.resumenTexto}>{opiniones.length} reseñas de Google</span>
      </div>

      <div className={styles.opinionesContainer}>
        {opiniones.map((opinion, index) => (
          <div key={index} className={styles.opinionCard}>
            <div className={styles.opinionHeader}>
              <div
                className={styles.avatar}
                style={{ background: AVATAR_COLORS[index % AVATAR_COLORS.length] }}
              >
                {opinion.nombre.charAt(0)}
              </div>
              <div className={styles.nombreYEstrellas}>
                <h3>{opinion.nombre}</h3>
                <Stars cantidad={opinion.estrellas} />
              </div>
              <div className={styles.cardLogo}>
                <GoogleLogo size={18} />
              </div>
            </div>
            <p className={styles.comentario}>{opinion.comentario}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
