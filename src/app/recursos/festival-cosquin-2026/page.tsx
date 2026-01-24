import { Metadata } from "next";
import Link from "next/link";
import styles from "./festival-cosquin-2026.module.css";

export const metadata: Metadata = {
  title:
    "Festival Nacional de Folklore de Cosquín 2026: guía completa para vivirlo sin contratiempos | HL Transporte",
  description:
    "Todo lo que necesitás saber sobre el Festival de Cosquín 2026: grilla completa noche por noche, precios, consejos prácticos y cómo organizar tu viaje para disfrutarlo de principio a fin.",
  keywords: [
    "festival cosquín 2026",
    "festival folklore cosquín",
    "grilla cosquín 2026",
    "precios festival cosquín",
    "festival nacional folklore",
    "cómo llegar festival cosquín",
    "transporte festival cosquín",
    "cosquín folklore argentina",
    "plaza próspero molina",
  ],
  openGraph: {
    title:
      "Festival Nacional de Folklore de Cosquín 2026: guía completa para vivirlo sin contratiempos",
    description:
      "Todo lo que necesitás saber sobre el Festival de Cosquín 2026: grilla completa noche por noche, precios y consejos prácticos.",
    type: "article",
    url: "https://www.hermanosluci.com.ar/recursos/festival-cosquin-2026",
    images: [
      {
        url: "https://www.hermanosluci.com.ar/recursos/festival-cosquin/Cosquin-2026_Programacion-completa_feed_Grilla-2026_Luna-1_Feed.jpg",
        width: 1200,
        height: 630,
        alt: "Festival Nacional de Folklore de Cosquín 2026",
      },
    ],
    locale: "es_AR",
    siteName: "HL Transporte - Hermanos Luci",
  },
  twitter: {
    card: "summary_large_image",
    title: "Festival de Cosquín 2026: guía completa noche por noche",
    description:
      "Grilla completa, precios y consejos prácticos para vivir el Festival Nacional de Folklore de Cosquín 2026.",
    images: [
      "https://www.hermanosluci.com.ar/recursos/festival-cosquin/Cosquin-2026_Programacion-completa_feed_Grilla-2026_Luna-1_Feed.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.hermanosluci.com.ar/recursos/festival-cosquin-2026",
  },
};

export default function FestivalCosquin2026Page() {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <div className={styles.portada}>
          <img
            src="/recursos/festival-cosquin/portada.jpg"
            alt="Festival Nacional de Folklore de Cosquín 2026 - Primera Luna"
            className={styles.portadaImage}
          />
        </div>
        <header className={styles.header}>
          <h1>
            Festival Nacional de Folklore de Cosquín 2026: guía completa para
            vivirlo sin contratiempos
          </h1>
        </header>

        <div className={styles.content}>
          <p>
            El Festival Nacional de Folklore de Cosquín es mucho más que una
            grilla de artistas. Es una experiencia que se vive de noche, en
            grupo y con una intensidad particular que hace que cada edición sea
            distinta. Quien ya fue alguna vez lo sabe: Cosquín no se disfruta
            solo desde la butaca, sino también en todo lo que pasa antes y
            después del escenario.
          </p>

          <p>
            Después de participar todos los años acompañando grupos al festival,
            hay algo que se repite siempre: la diferencia entre una buena noche
            y una noche inolvidable suele estar en la organización. Por eso, en
            esta guía te contamos todo lo que necesitás saber para vivir
            Cosquín sin estrés.
          </p>

          <section className={styles.section}>
            <h2>
              Qué es el Festival Nacional de Folklore de Cosquín y por qué es
              único
            </h2>

            <p>
              Cosquín es el festival de folklore más importante de Argentina y
              uno de los más reconocidos de Latinoamérica. Se realiza en la
              mítica Plaza Próspero Molina y convoca durante nueve noches a
              figuras consagradas, nuevos talentos y delegaciones de todo el
              país y del exterior.
            </p>

            <p>Lo que lo hace único no es solo la música:</p>

            <ul>
              <li>El público participa activamente.</li>
              <li>Las noches suelen extenderse hasta la madrugada.</li>
              <li>
                Se vive un clima especial de peñas, encuentros y grupos que
                repiten año tras año.
              </li>
            </ul>

            <p>
              En nuestra experiencia, muchas personas llegan pensando que es un
              recital más y se encuentran con una vivencia mucho más intensa,
              donde la energía del público y el folklore se mezclan hasta altas
              horas de la noche.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Cuándo se realiza Cosquín y cómo se organizan las noches</h2>

            <p>
              El Festival Nacional de Folklore de Cosquín se realiza entre fines
              de enero y principios de febrero, con una duración aproximada de
              nueve lunas consecutivas.
            </p>

            <p>Cada noche tiene su identidad:</p>

            <ul>
              <li>Algunas lunas son más tranquilas.</li>
              <li>
                Otras concentran grandes figuras y terminan muy tarde.
              </li>
              <li>Los fines de semana suelen ser los más concurridos.</li>
            </ul>

            <p>
              Algo que vemos todos los años es que el cansancio no se siente
              durante el espectáculo, sino cuando termina la última actuación.
              Por eso, entender cómo se organiza cada luna ayuda mucho a
              planificar mejor la experiencia.
            </p>
          </section>

          <section className={styles.section}>
            <h2>
              Grilla completa del Festival Nacional de Folklore de Cosquín 2026
              – noche por noche
            </h2>

            {/* Luna 1 */}
            <div className={styles.lunaCard}>
              <div className={styles.lunaHeader}>
                <div className={styles.lunaNumber}>🌕 1</div>
                <div className={styles.lunaInfo}>
                  <h3>Primera Luna</h3>
                  <p className={styles.lunaDate}>Sábado 24 de enero</p>
                </div>
              </div>

              <img
                src="/recursos/festival-cosquin/Cosquin-2026_Programacion-completa_feed_Grilla-2026_Luna-1_Feed.jpg"
                alt="Grilla completa Primera Luna - Festival de Cosquín 2026"
                className={styles.lunaImage}
              />

              <div className={styles.artistasList}>
                <h4>Artistas principales</h4>
                <ul>
                  <li>Christian Herrera</li>
                  <li>Jairo</li>
                  <li>Los Manseros Santiagueños</li>
                  <li>Susana Baca</li>
                  <li>Horacio Banegas</li>
                  <li>Jorge Rojas</li>
                </ul>

                <h4>Otros artistas y delegaciones</h4>
                <ul>
                  <li>Mati Rojas</li>
                  <li>Emanuel Ayala (Revelación 2025)</li>
                  <li>Wara Calpanchay (Solista Vocal Pre-Cosquín 2026)</li>
                  <li>Trinar (Conjunto Vocal Pre-Cosquín 2026)</li>
                  <li>Delegación de Santa Fe</li>
                  <li>
                    Cacharpaya (Los Duarte, Emilio Morales, Silvana Casavalle,
                    Kimsa Juy, Maxi Acosta, Laura Gómez Weizz y Agustín Toro)
                  </li>
                </ul>
              </div>

              <div className={styles.precios}>
                <h4>Precios orientativos</h4>
                <ul>
                  <li>Plateas desde $90.000</li>
                  <li>Sectores intermedios entre $58.000 y $75.000</li>
                  <li>Populares desde $32.000</li>
                </ul>
              </div>
            </div>

            {/* Luna 2 */}
            <div className={styles.lunaCard}>
              <div className={styles.lunaHeader}>
                <div className={styles.lunaNumber}>🌕 2</div>
                <div className={styles.lunaInfo}>
                  <h3>Segunda Luna</h3>
                  <p className={styles.lunaDate}>Domingo 25 de enero</p>
                </div>
              </div>

              <img
                src="/recursos/festival-cosquin/Cosquin-2026_Programacion-completa_feed_Grilla-2026_Luna-2_Feed.jpg"
                alt="Grilla completa Segunda Luna - Festival de Cosquín 2026"
                className={styles.lunaImage}
              />

              <div className={styles.artistasList}>
                <h4>Artistas principales</h4>
                <ul>
                  <li>Dúo Coplanacu</li>
                  <li>Nahuel Pennisi</li>
                  <li>Raly Barrionuevo</li>
                  <li>Paola Bernal</li>
                  <li>Facundo Toro</li>
                  <li>Cazzu</li>
                </ul>

                <h4>Participaciones especiales</h4>
                <ul>
                  <li>
                    Flor Castro y Rocío Villegas (Homenaje a Ramón Navarro)
                  </li>
                  <li>
                    Gerez – Coliluan (Baile Estilizado Pre-Cosquín 2026)
                  </li>
                  <li>Delegación de Brasil</li>
                </ul>
              </div>

              <div className={styles.precios}>
                <h4>Precios orientativos</h4>
                <ul>
                  <li>Plateas desde $90.000</li>
                  <li>Populares desde $38.000</li>
                </ul>
              </div>
            </div>

            {/* Luna 3 */}
            <div className={styles.lunaCard}>
              <div className={styles.lunaHeader}>
                <div className={styles.lunaNumber}>🌕 3</div>
                <div className={styles.lunaInfo}>
                  <h3>Tercera Luna</h3>
                  <p className={styles.lunaDate}>Lunes 26 de enero</p>
                </div>
              </div>

              <img
                src="/recursos/festival-cosquin/Cosquin-2026_Programacion-completa_feed_Grilla-2026_Luna-3_Feed.jpg"
                alt="Grilla completa Tercera Luna - Festival de Cosquín 2026"
                className={styles.lunaImage}
              />

              <div className={styles.artistasList}>
                <h4>Artistas principales</h4>
                <ul>
                  <li>Ahyre</li>
                  <li>Abel Pintos</li>
                  <li>Duratierra</li>
                  <li>Guitarreros</li>
                  <li>Luciana Jury</li>
                </ul>

                <h4>Pre-Cosquín y delegaciones</h4>
                <ul>
                  <li>Dúo Marcos – Batallanos</li>
                  <li>Nicolás Robles (Solista de Malambo Masculino)</li>
                  <li>Delegación de Uruguay</li>
                </ul>
              </div>

              <div className={styles.precios}>
                <h4>Precios orientativos</h4>
                <ul>
                  <li>Plateas desde $90.000</li>
                  <li>Populares desde $32.000</li>
                </ul>
              </div>
            </div>

            {/* Luna 4 */}
            <div className={styles.lunaCard}>
              <div className={styles.lunaHeader}>
                <div className={styles.lunaNumber}>🌕 4</div>
                <div className={styles.lunaInfo}>
                  <h3>Cuarta Luna</h3>
                  <p className={styles.lunaDate}>Martes 27 de enero</p>
                </div>
              </div>

              <img
                src="/recursos/festival-cosquin/Cosquin-2026_Programacion-completa_feed_Grilla-2026_Luna-4_Feed.jpg"
                alt="Grilla completa Cuarta Luna - Festival de Cosquín 2026"
                className={styles.lunaImage}
              />

              <div className={styles.artistasList}>
                <h4>Artistas principales</h4>
                <ul>
                  <li>Lázaro Caballero</li>
                  <li>Mariana Carrizo</li>
                  <li>Orellana Lucca</li>
                  <li>Lucio El Indio Rojas</li>
                  <li>Micaela Chauque</li>
                </ul>

                <h4>Otros artistas y delegaciones</h4>
                <ul>
                  <li>
                    La Cruzada (Destacado Espectáculos Callejeros 2025)
                  </li>
                  <li>Delegación de Bolivia</li>
                  <li>Delegación de Santiago del Estero</li>
                </ul>
              </div>

              <div className={styles.precios}>
                <h4>Precios orientativos</h4>
                <ul>
                  <li>Plateas desde $75.000</li>
                  <li>Populares desde $28.000</li>
                </ul>
              </div>
            </div>

            {/* Luna 5 */}
            <div className={styles.lunaCard}>
              <div className={styles.lunaHeader}>
                <div className={styles.lunaNumber}>🌕 5</div>
                <div className={styles.lunaInfo}>
                  <h3>Quinta Luna</h3>
                  <p className={styles.lunaDate}>Miércoles 28 de enero</p>
                </div>
              </div>

              <img
                src="/recursos/festival-cosquin/Cosquin-2026_Programacion-completa_feed_Grilla-2026_Luna-5_Feed.jpg"
                alt="Grilla completa Quinta Luna - Festival de Cosquín 2026"
                className={styles.lunaImage}
              />

              <div className={styles.artistasList}>
                <h4>Artistas principales</h4>
                <ul>
                  <li>Luciano Pereyra</li>
                  <li>Ariel Ardit</li>
                  <li>La Callejera</li>
                  <li>Leandro Lovato</li>
                </ul>

                <h4>Participaciones especiales</h4>
                <ul>
                  <li>Garupá: Celebrando a Ramón Ayala</li>
                  <li>
                    Ballet Sumampa (Ballet Folklórico Pre-Cosquín 2026)
                  </li>
                  <li>Delegación de Córdoba</li>
                </ul>
              </div>

              <div className={styles.precios}>
                <h4>Precios orientativos</h4>
                <ul>
                  <li>Plateas desde $90.000</li>
                  <li>Populares desde $32.000</li>
                </ul>
              </div>
            </div>

            {/* Luna 6 */}
            <div className={styles.lunaCard}>
              <div className={styles.lunaHeader}>
                <div className={styles.lunaNumber}>🌕 6</div>
                <div className={styles.lunaInfo}>
                  <h3>Sexta Luna</h3>
                  <p className={styles.lunaDate}>Jueves 29 de enero</p>
                </div>
              </div>

              <img
                src="/recursos/festival-cosquin/Cosquin-2026_Programacion-completa_feed_Grilla-2026_Luna-6_Feed.jpg"
                alt="Grilla completa Sexta Luna - Festival de Cosquín 2026"
                className={styles.lunaImage}
              />

              <div className={styles.artistasList}>
                <h4>Artistas principales</h4>
                <ul>
                  <li>Los Nocheros</li>
                  <li>Destino San Javier</li>
                  <li>Yamila Cafrune</li>
                  <li>Los Tekis</li>
                </ul>

                <h4>Homenajes y delegaciones</h4>
                <ul>
                  <li>Homenaje a Musha Carabajal</li>
                  <li>Las Voces de Orán</li>
                  <li>Delegación de Japón</li>
                </ul>
              </div>

              <div className={styles.precios}>
                <h4>Precios orientativos</h4>
                <ul>
                  <li>Plateas desde $75.000</li>
                  <li>Populares desde $28.000</li>
                </ul>
              </div>
            </div>

            {/* Luna 7 */}
            <div className={styles.lunaCard}>
              <div className={styles.lunaHeader}>
                <div className={styles.lunaNumber}>🌕 7</div>
                <div className={styles.lunaInfo}>
                  <h3>Séptima Luna</h3>
                  <p className={styles.lunaDate}>Viernes 30 de enero</p>
                </div>
              </div>

              <img
                src="/recursos/festival-cosquin/Cosquin-2026_Programacion-completa_feed_Grilla-2026_Luna-7_Feed.jpg"
                alt="Grilla completa Séptima Luna - Festival de Cosquín 2026"
                className={styles.lunaImage}
              />

              <div className={styles.artistasList}>
                <h4>Artistas principales</h4>
                <ul>
                  <li>Juan Fuentes</li>
                  <li>José Luis Aguirre</li>
                  <li>Natalia Pastorutti</li>
                  <li>Chaqueño Palavecino</li>
                </ul>

                <h4>Otros artistas y delegaciones</h4>
                <ul>
                  <li>El Encuentro</li>
                  <li>Delegación de Paraguay</li>
                </ul>
              </div>

              <div className={styles.precios}>
                <h4>Precios orientativos</h4>
                <ul>
                  <li>Plateas desde $90.000</li>
                  <li>Populares desde $28.000</li>
                </ul>
              </div>
            </div>

            {/* Luna 8 */}
            <div className={styles.lunaCard}>
              <div className={styles.lunaHeader}>
                <div className={styles.lunaNumber}>🌕 8</div>
                <div className={styles.lunaInfo}>
                  <h3>Octava Luna</h3>
                  <p className={styles.lunaDate}>Sábado 31 de enero</p>
                </div>
              </div>

              <img
                src="/recursos/festival-cosquin/Cosquin-2026_Programacion-completa_feed_Grilla-2026_Luna-8_Feed.jpg"
                alt="Grilla completa Octava Luna - Festival de Cosquín 2026"
                className={styles.lunaImage}
              />

              <div className={styles.artistasList}>
                <h4>Artistas principales</h4>
                <ul>
                  <li>Soledad (30 años)</li>
                  <li>Juntos – La Leyenda Continúa</li>
                  <li>Suna Rocha</li>
                  <li>Juan Iñaki</li>
                </ul>

                <h4>Otros artistas</h4>
                <ul>
                  <li>Yamila Aguado (Revelación 2025)</li>
                  <li>Cacharpaya (elenco completo)</li>
                </ul>
              </div>

              <div className={styles.precios}>
                <h4>Precios orientativos</h4>
                <ul>
                  <li>Consultar precios específicos</li>
                </ul>
              </div>
            </div>

            {/* Luna 9 */}
            <div className={styles.lunaCard}>
              <div className={styles.lunaHeader}>
                <div className={styles.lunaNumber}>🌕 9</div>
                <div className={styles.lunaInfo}>
                  <h3>Novena Luna</h3>
                  <p className={styles.lunaDate}>Domingo 1 de febrero</p>
                </div>
              </div>

              <img
                src="/recursos/festival-cosquin/Cosquin-2026_Programacion-completa_feed_Grilla-2026_Luna-9_Feed-1.jpg"
                alt="Grilla completa Novena Luna - Festival de Cosquín 2026"
                className={styles.lunaImage}
              />

              <div className={styles.artistasList}>
                <h4>Artistas principales</h4>
                <ul>
                  <li>Peteco Carabajal</li>
                  <li>Teresa Parodi</li>
                  <li>Cuti y Roberto Carabajal</li>
                  <li>Campedrinos</li>
                  <li>Maggie Cullen</li>
                  <li>Gauchos Of The Pampa</li>
                  <li>Milo J</li>
                </ul>
              </div>

              <div className={styles.precios}>
                <h4>Precios orientativos</h4>
                <ul>
                  <li>Plateas desde $90.000</li>
                  <li>Populares desde $38.000</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Cómo es la experiencia real de asistir al Festival de Cosquín</h2>

            <p>
              Algo que se repite todos los años es que muchas personas eligen la
              noche por el artista principal, pero no siempre tienen en cuenta a
              qué hora termina realmente el espectáculo. Algunas lunas se
              extienden más de lo esperado y el regreso suele ser el momento más
              pesado, sobre todo para quienes van en grupo.
            </p>

            <p>
              En nuestra experiencia llevando pasajeros, los grupos que mejor
              viven Cosquín son los que tienen resuelto el ida y vuelta antes de
              salir, sin tener que improvisar cuando ya están cansados.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Ir al Festival de Cosquín en grupo: lo que conviene saber</h2>

            <p>Ir en grupo potencia la experiencia:</p>

            <ul>
              <li>Se comparte la emoción.</li>
              <li>Se vive un clima especial.</li>
              <li>Muchos grupos terminan repitiendo todos los años.</li>
            </ul>

            <p>
              Pero también requiere coordinación. Siempre hay alguien que se
              retrasa, otro que quiere irse antes y otro que quiere quedarse
              hasta el final. Cuando eso no está previsto, aparecen los
              problemas.
            </p>

            <p>
              Por eso, algo que siempre recomendamos desde la experiencia es
              pensar el viaje como parte del plan, no como un detalle
              secundario.
            </p>
          </section>

          <div className={styles.consejos}>
            <h3>Errores comunes al planificar Cosquín</h3>

            <p>Algunos errores que se repiten edición tras edición:</p>

            <ul>
              <li>Pensar solo en la entrada.</li>
              <li>Subestimar el cansancio nocturno.</li>
              <li>Dejar el regreso para después.</li>
              <li>No coordinar puntos de encuentro.</li>
            </ul>

            <p>
              No son errores graves, pero sí pueden arruinar una noche que
              estaba pensada para disfrutar.
            </p>
          </div>

          <section className={styles.section}>
            <h2>Consejos prácticos para disfrutar Cosquín de principio a fin</h2>

            <ul>
              <li>Elegí la luna según el tipo de experiencia que buscás.</li>
              <li>
                Coordiná horarios y puntos de encuentro con anticipación.
              </li>
              <li>Pensá en el horario real de salida.</li>
              <li>
                Dejá la logística resuelta para poder disfrutar sin apuro.
              </li>
            </ul>

            <p>
              Después de tantos años acompañando grupos, está claro que cuando
              la organización está resuelta, Cosquín se vive distinto.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Conclusión</h2>

            <p>
              El Festival Nacional de Folklore de Cosquín es una experiencia
              única, intensa y profundamente argentina. La música y el clima
              están garantizados; la diferencia está en cómo se planifica el
              viaje.
            </p>

            <p>
              Quienes vuelven todos los años coinciden en lo mismo: cuando no
              hay que preocuparse por el después, la noche se disfruta mucho
              más.
            </p>
          </section>

          <div className={styles.faq}>
            <h2>Preguntas frecuentes sobre el Festival de Cosquín</h2>

            <div className={styles.faqItem}>
              <h3>¿Cuántas noches dura el Festival de Cosquín?</h3>
              <p>Generalmente dura nueve noches consecutivas.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Conviene ir en grupo?</h3>
              <p>
                Sí, es una de las mejores formas de vivir el festival, siempre
                que haya organización previa.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿A qué hora termina el festival?</h3>
              <p>
                Depende de la luna, pero muchas noches se extienden hasta la
                madrugada.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Qué es lo más importante a planificar?</h3>
              <p>Además de la entrada, cómo llegar y cómo volver.</p>
            </div>
          </div>
        </div>
      </article>

      <Link href="/recursos" className={styles.backLink}>
        ← Volver a Recursos
      </Link>
    </main>
  );
}
