import { type FormEvent, useEffect, useId, useState } from 'react'
import type { ExamplePageProps } from '../types'
import { BookCover, type Motif } from './covers'
import './library-login.css'

const books: {
  title: string
  meta: string
  color: string
  ink: string
  motif: Motif
}[] = [
  {
    title: 'La biblioteca de los sueños',
    meta: 'Clara Montes · Novela',
    color: '#3b1d5e',
    ink: '#e2b13c',
    motif: 'moon',
  },
  {
    title: 'Cocina de aprovechamiento',
    meta: 'Julián Prado · Cocina',
    color: '#e2b13c',
    ink: '#3b1d5e',
    motif: 'pot',
  },
  {
    title: 'Historia del barrio en 100 fotos',
    meta: 'Asociación vecinal del Reloj · Historia local',
    color: '#2f7f7a',
    ink: '#faf7f2',
    motif: 'photo',
  },
  {
    title: 'Guía de rutas en bicicleta',
    meta: 'Varios autores · Viajes',
    color: '#d9644a',
    ink: '#231d2b',
    motif: 'hills',
  },
  {
    title: 'Poemas para leer en voz alta',
    meta: 'Antología · Poesía',
    color: '#26406b',
    ink: '#efe8f7',
    motif: 'lines',
  },
  {
    title: 'Iniciación a la cerámica',
    meta: 'Inés Robles · Manualidades',
    color: '#efe8f7',
    ink: '#5b21b6',
    motif: 'vase',
  },
]

const events = [
  {
    day: '14',
    month: 'nov',
    title: 'Cuentacuentos: historias del faro',
    detail: 'Sábado, 11:30 · Sala infantil · De 4 a 8 años',
    tag: 'Infantil',
  },
  {
    day: '19',
    month: 'nov',
    title: 'Club de lectura: «La biblioteca de los sueños»',
    detail: 'Miércoles, 19:00 · Sala Ateneo · Con la autora',
    tag: 'Adultos',
  },
  {
    day: '21',
    month: 'nov',
    title: 'Taller: tu móvil, sin miedo',
    detail: 'Viernes, 10:00 · Aula de informática · Plazas limitadas',
    tag: 'Mayores',
  },
  {
    day: '27',
    month: 'nov',
    title: 'Encuentro con ilustradoras del barrio',
    detail: 'Jueves, 18:30 · Salón de actos · Entrada libre',
    tag: 'Todos los públicos',
  },
]

const hours = [
  ['Lunes a viernes', '9:00 – 20:30'],
  ['Sábados', '10:00 – 14:00'],
  ['Domingos y festivos', 'Cerrado'],
  ['Sala de estudio en exámenes', 'Hasta las 23:00'],
]

/** Acceso a la cuenta de una biblioteca: recorrido con teclado y foco visible. */
export function LibraryLogin({ fixed }: ExamplePageProps) {
  const id = useId()
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  // El margen de desplazamiento evita que la cabecera fija tape el foco.
  useEffect(() => {
    if (!fixed) return
    const root = document.documentElement
    root.classList.add('library-login-scroll-padding')
    return () => root.classList.remove('library-login-scroll-padding')
  }, [fixed])

  return (
    <div className={`library-login${fixed ? '' : ' library-login--no-focus'}`}>
      <div className="library-login__topbar">
        <p>
          <span aria-hidden="true" className="library-login__dot" />
          Hoy abrimos de 9:00 a 20:30
        </p>
        <p>Red de Bibliotecas Municipales · Préstamo gratuito</p>
      </div>
      <header className="library-login__header" data-fix="obscured">
        <p className="library-login__brand">
          <span aria-hidden="true" className="library-login__logo" />
          <span>
            Biblioteca Municipal
            <span className="library-login__brand-sub">Plaza del Reloj</span>
          </span>
        </p>
        <nav aria-label="Principal" className="library-login__nav">
          <a href={`#${id}-news`}>Catálogo</a>
          <a href={`#${id}-events`}>Actividades</a>
          <a href={`#${id}-services`}>Servicios</a>
          <a href={`#${id}-login`}>Mi cuenta</a>
          <a href={`#${id}-hours`}>Horarios</a>
        </nav>
      </header>
      <main className="library-login__main" data-fix="focus">
        <section
          id={`${id}-login`}
          aria-labelledby={`${id}-login-title`}
          className="library-login__card"
        >
          <h1 id={`${id}-login-title`}>Accede a tu cuenta</h1>
          <p className="library-login__intro">
            Renueva préstamos y reserva libros con tu carné.
          </p>
          <span aria-hidden="true" className="library-login__shelf" />
          <form className="library-login__form" onSubmit={submit}>
            <div className="library-login__field">
              <label htmlFor={`${id}-card`}>Número de carné</label>
              <input
                id={`${id}-card`}
                name="card"
                inputMode="numeric"
                autoComplete="username"
              />
            </div>
            <div className="library-login__field">
              <label htmlFor={`${id}-pin`}>PIN</label>
              <input
                id={`${id}-pin`}
                name="pin"
                type="password"
                autoComplete="current-password"
              />
            </div>
            <label className="library-login__check">
              <input type="checkbox" name="remember" /> Mantener la sesión
              iniciada
            </label>
            <button type="submit" className="library-login__submit">
              Entrar
            </button>
          </form>
          <p className="library-login__result" role="status">
            {sent ? 'Acceso de prueba: no se ha enviado ningún dato.' : ''}
          </p>
          <p className="library-login__links">
            <a href={`#${id}-hours`}>¿Has olvidado tu PIN?</a>
            <a href={`#${id}-hours`}>Hazte socio o socia</a>
          </p>
        </section>
        <section
          id={`${id}-news`}
          aria-labelledby={`${id}-news-title`}
          className="library-login__news"
        >
          <h2 id={`${id}-news-title`}>Novedades del catálogo</h2>
          <ul className="library-login__books">
            {books.map(({ title, meta, color, ink, motif }) => (
              <li key={title}>
                <a href={`#${id}-news`}>
                  <BookCover color={color} ink={ink} motif={motif} />
                  <span className="library-login__book">
                    <span className="library-login__book-title">{title}</span>
                    <span className="library-login__book-meta">{meta}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section
          id={`${id}-hours`}
          aria-labelledby={`${id}-hours-title`}
          className="library-login__hours"
        >
          <h2 id={`${id}-hours-title`}>Horarios</h2>
          <table className="library-login__hours-table">
            <caption className="visually-hidden">
              Horario de apertura de la biblioteca
            </caption>
            <tbody>
              {hours.map(([days, time]) => (
                <tr key={days}>
                  <th scope="row">{days}</th>
                  <td>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            Para recuperar el PIN o hacerte el carné, acude al mostrador con tu
            documento de identidad.
          </p>
        </section>
        <section
          id={`${id}-events`}
          aria-labelledby={`${id}-events-title`}
          className="library-login__events"
        >
          <h2 id={`${id}-events-title`}>Actividades de noviembre</h2>
          <ul className="library-login__event-list">
            {events.map(({ day, month, title, detail, tag }) => (
              <li key={title} className="library-login__event">
                <p className="library-login__date">
                  <span className="library-login__day">{day}</span>
                  <span>{month}</span>
                </p>
                <div>
                  <p className="library-login__tag">{tag}</p>
                  <a href={`#${id}-events`}>{title}</a>
                  <p className="library-login__event-detail">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section
          id={`${id}-services`}
          aria-labelledby={`${id}-services-title`}
          className="library-login__services"
        >
          <h2 id={`${id}-services-title`}>Con tu carné también puedes</h2>
          <ul>
            <li>
              <strong>Llevarte libros electrónicos</strong>
              Hasta 3 a la vez, durante 21 días, desde la app de la red.
            </li>
            <li>
              <strong>Pedir libros a otras bibliotecas</strong>
              Te los traemos a esta sede en unos 5 días laborables.
            </li>
            <li>
              <strong>Reservar una sala de estudio</strong>
              Salas para grupos de hasta 6 personas, en turnos de 2 horas.
            </li>
            <li>
              <strong>Usar los ordenadores y la wifi</strong>
              Gratis, con tu número de carné y tu PIN.
            </li>
          </ul>
        </section>
      </main>
      <footer className="library-login__footer">
        <div className="library-login__footer-grid">
          <div>
            <p className="library-login__footer-brand">
              <span aria-hidden="true" className="library-login__logo" />
              Biblioteca Municipal
            </p>
            <address>
              Plaza del Reloj 3
              <br />
              Teléfono 900 000 456
              <br />
              biblioteca@ayuntamiento.example
            </address>
          </div>
          <nav
            aria-labelledby={`${id}-footer-nav`}
            className="library-login__footer-col"
          >
            <h2 id={`${id}-footer-nav`} className="library-login__footer-title">
              La biblioteca
            </h2>
            <ul>
              <li>
                <a href={`#${id}-news`}>Novedades</a>
              </li>
              <li>
                <a href={`#${id}-events`}>Agenda de actividades</a>
              </li>
              <li>
                <a href={`#${id}-services`}>Préstamo de libros electrónicos</a>
              </li>
              <li>
                <a href={`#${id}-hours`}>Cómo hacerte el carné</a>
              </li>
            </ul>
          </nav>
          <div className="library-login__footer-col">
            <h2 className="library-login__footer-title">Otras sedes</h2>
            <p>Biblioteca del Arrabal · Calle Mayor 40</p>
            <p>Bibliobús · Barrios del norte, martes y jueves</p>
          </div>
        </div>
        <div className="library-login__legal">
          <p>© 2026 Ayuntamiento · Accesibilidad · Privacidad</p>
          <p>Sitio de demostración</p>
        </div>
      </footer>
    </div>
  )
}
