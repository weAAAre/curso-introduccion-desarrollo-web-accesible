import { useId, useState } from 'react'
import type { ExamplePageProps } from '../types'
import './festival-page.css'

const artists = [
  'Las Mareas',
  'Bruma Norte',
  'Coro de Faros',
  'Niebla & Sal',
  'Los Acantilados',
  'Viento Sur',
  'Marea Baja Trío',
]

const days = [
  {
    day: 'Viernes 12',
    note: 'Puertas a las 17:00',
    shows: [
      { time: '18:30', stage: 'Muelle', artist: 'Marea Baja Trío' },
      { time: '20:00', stage: 'Salitre', artist: 'Lucía Garrido' },
      { time: '21:45', stage: 'Faro', artist: 'Viento Sur' },
      { time: '23:30', stage: 'Faro', artist: 'Los Acantilados' },
    ],
  },
  {
    day: 'Sábado 13',
    note: 'Puertas a las 12:00 · tarde familiar',
    shows: [
      { time: '12:30', stage: 'Salitre', artist: 'Taller de percusión' },
      { time: '19:00', stage: 'Muelle', artist: 'Niebla & Sal' },
      { time: '21:30', stage: 'Faro', artist: 'Coro de Faros' },
      { time: '23:15', stage: 'Faro', artist: 'Las Mareas' },
    ],
  },
  {
    day: 'Domingo 14',
    note: 'Puertas a las 17:00 · cierre a las 00:30',
    shows: [
      { time: '18:00', stage: 'Salitre', artist: 'Banda de Cimadevilla' },
      { time: '19:45', stage: 'Muelle', artist: 'Dúo Rula' },
      { time: '21:30', stage: 'Faro', artist: 'Bruma Norte' },
      { time: '23:00', stage: 'Muelle', artist: 'Sesión de cierre' },
    ],
  },
]

/** Portada de un festival: animaciones, preferencias del sistema y pausa. */
export function FestivalPage({ fixed }: ExamplePageProps) {
  const id = useId()
  const [paused, setPaused] = useState(false)
  return (
    <div className={`festival${fixed ? '' : ' festival--barrier'}`}>
      <header className="festival__header">
        <p className="festival__topbar">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            className="festival__topbar-icon"
          >
            <path
              d="M4 8.5V6h16v2.5a2.5 2.5 0 0 0 0 5V16H4v-2.5a2.5 2.5 0 0 0 0-5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M14 6v10"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeDasharray="1.6 1.8"
            />
          </svg>
          Últimos abonos de 3 días a precio de lanzamiento · Menores de 12 años
          gratis
        </p>
        <div className="festival__bar">
          <p className="festival__brand">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 40 40"
              className="festival__logo"
            >
              <circle cx="20" cy="17" r="9" fill="#ffcf3f" />
              <path
                d="M3 25c4 0 4-3 8.5-3s4.5 3 8.5 3 4-3 8.5-3 4.5 3 8.5 3"
                fill="none"
                stroke="#35d0c7"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M3 32c4 0 4-3 8.5-3s4.5 3 8.5 3 4-3 8.5-3 4.5 3 8.5 3"
                fill="none"
                stroke="#ff5c6c"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            Sonidos del Norte
          </p>
          <nav aria-label="Principal" className="festival__nav">
            <a href={`#${id}-lineup`}>Cartel</a>
            <a href={`#${id}-schedule`}>Horarios</a>
            <a href={`#${id}-tickets`}>Abonos</a>
            <a href={`#${id}-info`}>Cómo llegar</a>
            <a href={`#${id}-stay-title`}>Dónde dormir</a>
          </nav>
        </div>
      </header>
      <main>
        <section
          aria-labelledby={`${id}-title`}
          className="festival__hero"
          data-fix="reduced-motion"
        >
          <span
            aria-hidden="true"
            className="festival__wave festival__wave--1"
          />
          <span
            aria-hidden="true"
            className="festival__wave festival__wave--2"
          />
          <span
            aria-hidden="true"
            className="festival__wave festival__wave--3"
          />
          <div className="festival__hero-content">
            <p className="festival__dates">12, 13 y 14 de junio · Gijón</p>
            <h1 id={`${id}-title`} className="festival__title">
              Sonidos del Norte 2027
            </h1>
            <p className="festival__lead">
              Tres días de música frente al mar, con conciertos al atardecer y
              actividades para toda la familia.
            </p>
            <a
              className="festival__cta"
              href={`#${id}-tickets`}
              data-fix="reduced-motion"
            >
              Comprar abono
            </a>
            <p className="festival__facts">
              <span>
                <strong>22</strong> conciertos
              </span>
              <span>
                <strong>3</strong> escenarios
              </span>
              <span>
                <strong>9.ª</strong> edición
              </span>
            </p>
          </div>
        </section>

        <section
          id={`${id}-lineup`}
          aria-labelledby={`${id}-lineup-title`}
          className="festival__lineup"
          data-fix="pause"
        >
          <div className="festival__lineup-header">
            <h2 id={`${id}-lineup-title`}>Cartel</h2>
            {fixed && (
              <button
                type="button"
                className="festival__pause"
                onClick={() => setPaused((value) => !value)}
              >
                {paused ? 'Reanudar el cartel' : 'Pausar el cartel'}
              </button>
            )}
          </div>
          <div
            className={`festival__ticker${fixed && paused ? ' festival__ticker--paused' : ''}`}
          >
            <div className="festival__ticker-track">
              <ul className="festival__artists">
                {artists.map((artist) => (
                  <li key={artist}>{artist}</li>
                ))}
              </ul>
              <ul aria-hidden="true" className="festival__artists">
                {artists.map((artist) => (
                  <li key={artist}>{artist}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id={`${id}-schedule`}
          aria-labelledby={`${id}-schedule-title`}
          className="festival__section"
        >
          <div className="festival__section-head">
            <h2 id={`${id}-schedule-title`}>Horarios por día</h2>
            <p>
              Tres escenarios a pocos pasos: Faro, en la bocana; Muelle, junto a
              los pantalanes, y la carpa Salitre, para la tarde familiar.
            </p>
          </div>
          <div className="festival__days">
            {days.map((item) => (
              <div key={item.day} className="festival__day">
                <table className="festival__table">
                  <caption>
                    <span className="festival__day-name">{item.day}</span>
                    <span className="festival__day-note">{item.note}</span>
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Hora</th>
                      <th scope="col">Escenario</th>
                      <th scope="col">Concierto</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.shows.map((show) => (
                      <tr key={show.time}>
                        <td className="festival__time">{show.time}</td>
                        <td>
                          <span
                            className={`festival__stage festival__stage--${show.stage.toLowerCase()}`}
                          >
                            {show.stage}
                          </span>
                        </td>
                        <th scope="row">{show.artist}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>

        <section
          id={`${id}-tickets`}
          aria-labelledby={`${id}-tickets-title`}
          className="festival__section"
        >
          <div className="festival__section-head">
            <h2 id={`${id}-tickets-title`}>Abonos</h2>
            <p>
              Precios finales, con gastos de gestión incluidos. Si no puedes
              venir, cambia el nombre de la entrada gratis hasta el 1 de junio.
            </p>
          </div>
          <ul className="festival__passes">
            <li className="festival__pass festival__pass--featured">
              <p className="festival__pass-tag">El más vendido</p>
              <p className="festival__pass-name">Abono 3 días</p>
              <p className="festival__pass-price">75 €</p>
              <p>Los tres días, todos los escenarios y zona de acampada.</p>
              <a className="festival__pass-link" href={`#${id}-tickets`}>
                Comprar el abono de 3 días
              </a>
            </li>
            <li className="festival__pass">
              <p className="festival__pass-name">Entrada de un día</p>
              <p className="festival__pass-price">32 €</p>
              <p>Viernes, sábado o domingo. Eliges el día al comprar.</p>
              <a className="festival__pass-link" href={`#${id}-tickets`}>
                Comprar la entrada de un día
              </a>
            </li>
            <li className="festival__pass">
              <p className="festival__pass-name">Menores de 12 años</p>
              <p className="festival__pass-price">Gratis</p>
              <p>Con una persona adulta con entrada. Pulsera en la taquilla.</p>
              <a className="festival__pass-link" href={`#${id}-access`}>
                Ver la información para familias
              </a>
            </li>
          </ul>
          <p id={`${id}-access`} className="festival__access">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              className="festival__access-icon"
            >
              <circle cx="12" cy="4.5" r="2" fill="currentColor" />
              <path
                d="M12 7.5v6h5l2 5M12 10h5M9 10.5a5.5 5.5 0 1 0 6.7 7.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              <strong>Accesibilidad.</strong> Plataformas elevadas en los tres
              escenarios, bucle magnético en Faro, intérprete de lengua de
              signos en los conciertos de la noche y entrada gratis para la
              persona que acompaña.
            </span>
          </p>
        </section>

        <section
          id={`${id}-info`}
          aria-labelledby={`${id}-info-title`}
          className="festival__section"
        >
          <div className="festival__section-head">
            <h2 id={`${id}-info-title`}>Cómo llegar</h2>
            <p>
              Recinto del puerto deportivo. Autobuses lanzadera cada 15 minutos
              desde la estación.
            </p>
          </div>
          <div className="festival__travel">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 480 340"
              className="festival__map"
            >
              <defs>
                <linearGradient id={`${id}-sea`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1d3f6e" />
                  <stop offset="1" stopColor="#163056" />
                </linearGradient>
                <pattern
                  id={`${id}-ripple`}
                  width="24"
                  height="12"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 8c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3"
                    fill="none"
                    stroke="#35d0c7"
                    strokeOpacity="0.18"
                    strokeWidth="1.2"
                  />
                </pattern>
              </defs>
              <rect width="480" height="340" rx="20" fill="#2a1d57" />
              <path
                d="M0 150c60-10 90 30 150 24s70-50 130-46 90 40 200 26V340H0Z"
                fill={`url(#${id}-sea)`}
              />
              <path
                d="M0 150c60-10 90 30 150 24s70-50 130-46 90 40 200 26V340H0Z"
                fill={`url(#${id}-ripple)`}
              />
              <path
                d="M70 0v120M0 70h200M200 70l60 50M260 0v128M330 0v120"
                stroke="#3a2c6e"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M246 128h96v40h-96Z"
                fill="#3a2c6e"
                stroke="#4b3b86"
                strokeWidth="2"
              />
              <path
                d="M300 168v80M300 248h-60M320 168v60"
                stroke="#4b3b86"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M90 60c40 20 110 10 160 40s50 60 66 54"
                fill="none"
                stroke="#ffcf3f"
                strokeWidth="4"
                strokeDasharray="10 8"
                strokeLinecap="round"
              />
              <rect
                x="56"
                y="40"
                width="40"
                height="26"
                rx="6"
                fill="#fff8ec"
              />
              <path
                d="M64 50h24M64 57h16"
                stroke="#120a2b"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="316" cy="150" r="26" fill="#ff5c6c" />
              <circle cx="316" cy="150" r="10" fill="#120a2b" />
              <circle
                cx="316"
                cy="150"
                r="40"
                fill="none"
                stroke="#ff5c6c"
                strokeOpacity="0.4"
                strokeWidth="2"
              />
              <path d="M408 210l8-30 8 30Z" fill="#fff8ec" />
              <rect x="410" y="210" width="12" height="28" fill="#fff8ec" />
              <path
                d="M416 186l40-14M416 186l40 6"
                stroke="#ffcf3f"
                strokeOpacity="0.55"
                strokeWidth="3"
              />
              <path d="M150 250l14-30 14 30Z" fill="#fff8ec" opacity="0.85" />
              <path d="M146 252h36l-6 8h-24Z" fill="#ff5c6c" />
              <path d="M220 290l10-22 10 22Z" fill="#fff8ec" opacity="0.7" />
              <path d="M216 292h28l-5 6h-18Z" fill="#35d0c7" />
            </svg>
            <ul className="festival__ways">
              <li>
                <strong>Lanzadera gratuita</strong>
                <span>
                  Desde la estación de tren y autobús, cada 15 minutos de 16:00
                  a 02:30. Tarda 10 minutos.
                </span>
              </li>
              <li>
                <strong>A pie o en bici</strong>
                <span>
                  20 minutos por el paseo del muelle. Aparcabicis vigilado en la
                  puerta norte.
                </span>
              </li>
              <li>
                <strong>En coche</strong>
                <span>
                  Aparcamiento disuasorio en El Arbeyal, conectado con la
                  lanzadera. En el puerto no se puede aparcar.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section
          aria-labelledby={`${id}-stay-title`}
          className="festival__section festival__section--last"
        >
          <div className="festival__stay">
            <div>
              <h2 id={`${id}-stay-title`}>Dónde dormir</h2>
              <p>
                La zona de acampada abre el jueves a las 18:00 y cierra el lunes
                a las 12:00. Tiene duchas, sombra y consigna para cargar el
                móvil.
              </p>
              <p>
                Los albergues y hoteles colaboradores del centro hacen un 15 %
                de descuento con tu abono.
              </p>
              <a className="festival__stay-link" href={`#${id}-tickets`}>
                Ver alojamientos colaboradores
              </a>
            </div>
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 320 200"
              className="festival__tent"
            >
              <circle cx="250" cy="52" r="26" fill="#ffcf3f" />
              <circle cx="262" cy="46" r="24" fill="#1f1445" />
              <circle cx="60" cy="40" r="2" fill="#fff8ec" />
              <circle cx="120" cy="24" r="1.6" fill="#fff8ec" />
              <circle cx="180" cy="58" r="1.8" fill="#fff8ec" />
              <circle cx="300" cy="100" r="1.5" fill="#fff8ec" />
              <ellipse cx="160" cy="176" rx="156" ry="18" fill="#2a1d57" />
              <path d="M70 168l60-90 60 90Z" fill="#ff5c6c" />
              <path d="M130 78l-20 90h40Z" fill="#a3122f" />
              <path d="M130 78l60 90h-24Z" fill="#e0475a" />
              <path d="M200 172l36-52 36 52Z" fill="#35d0c7" />
              <path d="M236 120l-12 52h24Z" fill="#1d8f89" />
              <path
                d="M60 178h200"
                stroke="#3a2c6e"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </section>
      </main>
      <footer className="festival__footer">
        <div className="festival__footer-grid">
          <div>
            <p className="festival__footer-brand">Sonidos del Norte</p>
            <p>
              Festival de música frente al mar, organizado por la asociación
              cultural del mismo nombre desde 2018.
            </p>
          </div>
          <nav
            aria-labelledby={`${id}-footer-festival`}
            className="festival__footer-col"
          >
            <h2 id={`${id}-footer-festival`}>El festival</h2>
            <ul>
              <li>
                <a href={`#${id}-lineup`}>Cartel</a>
              </li>
              <li>
                <a href={`#${id}-schedule`}>Horarios</a>
              </li>
              <li>
                <a href={`#${id}-tickets`}>Abonos</a>
              </li>
              <li>
                <a href={`#${id}-access`}>Accesibilidad</a>
              </li>
            </ul>
          </nav>
          <nav
            aria-labelledby={`${id}-footer-visit`}
            className="festival__footer-col"
          >
            <h2 id={`${id}-footer-visit`}>Tu visita</h2>
            <ul>
              <li>
                <a href={`#${id}-info`}>Cómo llegar</a>
              </li>
              <li>
                <a href={`#${id}-stay-title`}>Dónde dormir</a>
              </li>
              <li>
                <a href={`#${id}-info`}>Normas del recinto</a>
              </li>
            </ul>
          </nav>
          <div className="festival__footer-col">
            <h2>Contacto</h2>
            <p>
              Taquilla del puerto deportivo
              <br />
              Abierta de 17:00 a 02:00 los días del festival
            </p>
          </div>
        </div>
        <div className="festival__footer-legal">
          <p>Sonidos del Norte · Información de demostración</p>
          <p className="festival__footer-links">
            <a href={`#${id}-title`}>Aviso legal</a>
            <a href={`#${id}-title`}>Privacidad</a>
            <a href={`#${id}-title`}>Condiciones de compra</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
