import { useId, useState } from 'react'
import type { ExamplePageProps } from '../types'
import {
  LighthousePoster,
  PaperGiantPoster,
  PlatformPoster,
  RootsPoster,
  SummerPoster,
} from './posters'
import './cinema-booking.css'

const sessions = [
  { time: '16:30', soldOut: false },
  { time: '19:00', soldOut: true },
  { time: '21:45', soldOut: false },
]

const billboard = [
  {
    title: 'Los veranos de Inés',
    meta: 'Comedia · 1 h 38 min · Castellano',
    times: 'Hoy: 17:15 · 20:00',
    Poster: SummerPoster,
  },
  {
    title: 'Medianoche en el andén',
    meta: 'Suspense · 2 h 04 min · VOSE',
    times: 'Hoy: 18:10 · 22:30',
    Poster: PlatformPoster,
  },
  {
    title: 'El gigante de papel',
    meta: 'Animación · 1 h 26 min · Castellano',
    times: 'Hoy: 16:00 · 18:00',
    Poster: PaperGiantPoster,
  },
  {
    title: 'Raíces',
    meta: 'Documental · 1 h 31 min · VOSE',
    times: 'Sábado y domingo: 12:00',
    Poster: RootsPoster,
  },
]

const prices = [
  ['Entrada general', '8,50 €'],
  ['Miércoles, día del espectador', '5,50 €'],
  ['Menores de 14 y mayores de 65', '6,50 €'],
  ['Bono de 10 entradas', '60 €'],
]

/** Elegir sesión en un cine: el navegador debe conocer rol, nombre y estado. */
export function CinemaBooking({ fixed }: ExamplePageProps) {
  const id = useId()
  const [chosen, setChosen] = useState<string>()
  const message = chosen
    ? `Has elegido la sesión de las ${chosen}. Ahora puedes escoger butacas.`
    : ''

  return (
    <div className="cinema-booking">
      <div className="cinema-booking__topbar">
        <p>Miércoles, día del espectador: todas las sesiones a 5,50 €</p>
        <p className="cinema-booking__topbar-links">
          <a href={`#${id}-prices`}>Club Alameda</a>
          <a href={`#${id}-info`}>Mi cuenta</a>
        </p>
      </div>
      <header className="cinema-booking__header">
        <p className="cinema-booking__brand">
          <span aria-hidden="true" className="cinema-booking__logo" />
          <span>
            Cine Alameda
            <span className="cinema-booking__tagline">Desde 1958</span>
          </span>
        </p>
        <nav aria-label="Principal" className="cinema-booking__nav">
          <a href={`#${id}-billboard`}>Cartelera</a>
          <a href={`#${id}-billboard`}>Próximos estrenos</a>
          <a href={`#${id}-prices`}>Tarifas</a>
          <a href={`#${id}-sessions`} aria-current="page">
            Entradas
          </a>
          <a href={`#${id}-info`}>Cómo llegar</a>
        </nav>
      </header>
      <main id={`${id}-film`}>
        <div className="cinema-booking__hero">
          <div className="cinema-booking__main">
            <LighthousePoster />
            <div className="cinema-booking__film">
              <p className="cinema-booking__meta">Drama · 1 h 52 min · VOSE</p>
              <h1>La ola tranquila</h1>
              <p className="cinema-booking__synopsis">
                Una farera jubilada vuelve a la isla donde creció para cuidar de
                su hermano. Estreno esta semana en la sala 2.
              </p>
              <dl className="cinema-booking__facts">
                <div>
                  <dt>Dirección</dt>
                  <dd>Nuria Salcedo</dd>
                </div>
                <div>
                  <dt>Reparto</dt>
                  <dd>Carmen Ibarra, Tomás Vidal, Aitana Ruiz</dd>
                </div>
                <div>
                  <dt>País y año</dt>
                  <dd>España, 2026</dd>
                </div>
                <div>
                  <dt>Calificación</dt>
                  <dd>No recomendada para menores de 12 años</dd>
                </div>
              </dl>
              <p className="cinema-booking__access">
                <span>Subtítulos para personas sordas</span>
                <span>Audiodescripción en la app</span>
                <span>Bucle magnético</span>
              </p>
              <section
                id={`${id}-sessions`}
                aria-labelledby={`${id}-sessions-title`}
                className="cinema-booking__sessions"
              >
                <div className="cinema-booking__sessions-head">
                  <h2 id={`${id}-sessions-title`}>Elige una sesión · Hoy</h2>
                  <p>Jueves 12 de noviembre · Sala 2</p>
                </div>
                <ul className="cinema-booking__list" data-fix="role">
                  {sessions.map(({ time, soldOut }) => (
                    <li key={time}>
                      {fixed ? (
                        <button
                          type="button"
                          className="cinema-booking__session"
                          disabled={soldOut}
                          data-fix={soldOut ? 'state' : undefined}
                          onClick={() => setChosen(time)}
                        >
                          {time}
                          {soldOut && (
                            <span className="cinema-booking__sold-out">
                              {' '}
                              · Agotada
                            </span>
                          )}
                        </button>
                      ) : (
                        // Barrera deliberada: aspecto de botón sin rol, teclado ni estado.
                        // biome-ignore lint/a11y/useKeyWithClickEvents: Barrera de semántica que enseña el ejemplo.
                        // biome-ignore lint/a11y/noStaticElementInteractions: El div conserva la barrera que se demuestra.
                        <div
                          className={`cinema-booking__session${soldOut ? ' cinema-booking__session--sold-out' : ''}`}
                          data-fix={soldOut ? 'state' : undefined}
                          onClick={soldOut ? undefined : () => setChosen(time)}
                        >
                          {time}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                {fixed ? (
                  <p
                    className="cinema-booking__result"
                    role="status"
                    aria-atomic="true"
                    data-fix="status"
                  >
                    {message}
                  </p>
                ) : (
                  <p className="cinema-booking__result" data-fix="status">
                    {message}
                  </p>
                )}
                <p className="cinema-booking__sessions-note">
                  Versión original en inglés y gaélico con subtítulos en
                  castellano. Entrada general: 8,50 €.
                </p>
              </section>
            </div>
          </div>
        </div>
        <section
          id={`${id}-billboard`}
          aria-labelledby={`${id}-billboard-title`}
          className="cinema-booking__billboard"
        >
          <h2 id={`${id}-billboard-title`}>También en cartelera</h2>
          <ul
            aria-labelledby={`${id}-billboard-title`}
            className="cinema-booking__cards"
          >
            {billboard.map(({ title, meta, times, Poster }) => (
              <li key={title} className="cinema-booking__card">
                <Poster />
                <a href={`#${id}-billboard`}>{title}</a>
                <p>{meta}</p>
                <p className="cinema-booking__card-times">{times}</p>
              </li>
            ))}
          </ul>
        </section>
        <div className="cinema-booking__extra">
          <section
            id={`${id}-prices`}
            aria-labelledby={`${id}-prices-title`}
            className="cinema-booking__panel"
          >
            <h2 id={`${id}-prices-title`}>Tarifas</h2>
            <table className="cinema-booking__prices">
              <caption className="visually-hidden">
                Precio de la entrada según el día y la edad
              </caption>
              <tbody>
                {prices.map(([label, price]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              Con el Club Alameda, la quinta entrada del mes te sale gratis.
            </p>
          </section>
          <section
            aria-labelledby={`${id}-access-title`}
            className="cinema-booking__panel"
          >
            <h2 id={`${id}-access-title`}>Un cine para todo el barrio</h2>
            <p>
              Las salas 1 y 2 tienen bucle magnético y cuatro plazas para sillas
              de ruedas, con acompañante al lado.
            </p>
            <p>
              Los jueves, la primera sesión se proyecta con subtítulos para
              personas sordas. La audiodescripción llega al móvil con la app
              gratuita de la sala.
            </p>
          </section>
        </div>
      </main>
      <footer id={`${id}-info`} className="cinema-booking__footer">
        <div className="cinema-booking__footer-grid">
          <div>
            <p className="cinema-booking__footer-brand">
              <span aria-hidden="true" className="cinema-booking__logo" />
              Cine Alameda
            </p>
            <p>Cine de barrio con tres salas y sesiones de estreno en VOSE.</p>
          </div>
          <div>
            <h2 className="cinema-booking__footer-title">Dirección</h2>
            <address>
              Paseo de la Alameda 12
              <br />
              Autobuses 4 y 11 · Parada Alameda
            </address>
            <a href={`#${id}-info`}>Ver mapa y aparcamiento</a>
          </div>
          <div>
            <h2 className="cinema-booking__footer-title">Taquilla</h2>
            <p>De lunes a viernes, desde las 16:00</p>
            <p>Sábados y domingos, desde las 11:30</p>
          </div>
          <nav
            aria-labelledby={`${id}-footer-nav`}
            className="cinema-booking__footer-nav"
          >
            <h2
              id={`${id}-footer-nav`}
              className="cinema-booking__footer-title"
            >
              El cine
            </h2>
            <ul aria-labelledby={`${id}-footer-nav`}>
              <li>
                <a href={`#${id}-billboard`}>Cartelera de la semana</a>
              </li>
              <li>
                <a href={`#${id}-prices`}>Tarifas y bonos</a>
              </li>
              <li>
                <a href={`#${id}-info`}>Alquiler de salas</a>
              </li>
              <li>
                <a href={`#${id}-info`}>Trabaja con nosotros</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="cinema-booking__legal">
          <p>© 2026 Cine Alameda · Aviso legal · Privacidad</p>
          <p>Venta de demostración: no se reservan entradas.</p>
        </div>
      </footer>
    </div>
  )
}
