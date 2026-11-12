import { useId } from 'react'
import type { ExamplePageProps } from '../types'
import './bus-timetable.css'

const departures = [
  { time: '08:15', state: 'on-time', label: 'A tiempo' },
  { time: '08:40', state: 'delayed', label: 'Retraso de 10 minutos' },
  { time: '09:05', state: 'cancelled', label: 'Cancelado' },
  { time: '09:30', state: 'on-time', label: 'A tiempo' },
] as const

const stops = [
  { name: 'Estación Intermodal', minutes: 0, transfers: 'Tren, líneas 2 y 12' },
  { name: 'Avenida de Compostela', minutes: 4, transfers: 'Línea 12' },
  { name: 'Mercado de Abastos', minutes: 8, transfers: '' },
  {
    name: 'Plaza Mayor',
    minutes: 12,
    transfers: 'Líneas 2 y N1',
    current: true,
    note: 'Hasta el 21 de noviembre, en la calle Real, número 14',
  },
  { name: 'Alameda', minutes: 15, transfers: 'Línea 4' },
  { name: 'Barrio de San Roque', minutes: 20, transfers: '' },
  { name: 'Centro de Salud de Ventorrillo', minutes: 24, transfers: '' },
  { name: 'Hospital Universitario', minutes: 28, transfers: 'Líneas 4 y N1' },
]

const otherLines = [
  {
    line: '2',
    tone: 'coral',
    route: 'Puerto – Campus Sur',
    next: '08:22',
    after: 'después, cada 15 minutos',
  },
  {
    line: '12',
    tone: 'violet',
    route: 'Plaza Mayor – Polígono Norte',
    next: '08:31',
    after: 'después, cada 30 minutos',
  },
  {
    line: 'N1',
    tone: 'night',
    route: 'Búho: Estación – Hospital',
    next: '23:40',
    after: 'viernes, sábados y vísperas de festivo',
  },
]

const schedule = [
  { days: 'De lunes a viernes', hours: '06:30 – 22:30', every: '12 minutos' },
  { days: 'Sábados', hours: '07:30 – 22:30', every: '20 minutos' },
  { days: 'Domingos y festivos', hours: '08:30 – 22:00', every: '30 minutos' },
]

/** Próximas salidas de una línea: estado sin color, contraste, tamaño de letra y reflujo. */
export function BusTimetable({ fixed }: ExamplePageProps) {
  const id = useId()
  return (
    <div className={`bus-timetable${fixed ? '' : ' bus-timetable--barrier'}`}>
      <header className="bus-timetable__header">
        <div className="bus-timetable__utility">
          <p className="bus-timetable__utility-text">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              className="bus-timetable__utility-icon"
            >
              <path
                d="M12 3a7 7 0 0 0-7 7v4l-1.5 2.5h17L19 14v-4a7 7 0 0 0-7-7Zm-2.2 15a2.3 2.3 0 0 0 4.4 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            Obras en Plaza Mayor del 10 al 21 de noviembre
          </p>
          <p className="bus-timetable__utility-text">
            Atención al viajero, todos los días de 07:00 a 22:00
          </p>
        </div>
        <div className="bus-timetable__bar">
          <p className="bus-timetable__brand">
            <span aria-hidden="true" className="bus-timetable__logo" />
            Autobuses Ría
          </p>
          <nav aria-label="Principal" className="bus-timetable__nav">
            <a href={`#${id}-line`}>Líneas</a>
            <a href={`#${id}-route`}>Mapa de la red</a>
            <a href={`#${id}-notice`}>Avisos</a>
            <a href={`#${id}-tickets`}>Billetes</a>
            <a className="bus-timetable__account" href={`#${id}-tickets`}>
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                className="bus-timetable__nav-icon"
              >
                <rect
                  x="3"
                  y="5.5"
                  width="18"
                  height="13"
                  rx="2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M3 10h18M7 14.5h4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              Mi tarjeta
            </a>
          </nav>
        </div>
      </header>
      <nav aria-label="Migas de pan" className="bus-timetable__crumbs">
        <ol>
          <li>
            <a href={`#${id}-line`}>Inicio</a>
          </li>
          <li>
            <a href={`#${id}-route`}>Líneas</a>
          </li>
          <li>
            <a href={`#${id}-line`} aria-current="page">
              Línea 7
            </a>
          </li>
        </ol>
      </nav>
      <main id={`${id}-line`} className="bus-timetable__main">
        <div className="bus-timetable__hero">
          <p className="bus-timetable__line" aria-hidden="true">
            7
          </p>
          <h1 data-fix="font-size">Línea 7 · Estación – Hospital</h1>
          <p className="bus-timetable__stop" data-fix="contrast">
            Parada Plaza Mayor · actualizado hace 1 minuto
          </p>
          <span aria-hidden="true" className="bus-timetable__route" />
        </div>
        <div className="bus-timetable__board">
          <h2 id={`${id}-departures`}>Próximas salidas</h2>
          <ul
            aria-labelledby={`${id}-departures`}
            className="bus-timetable__departures"
            data-fix="color"
          >
            {departures.map(({ time, state, label }) => (
              <li key={time} className="bus-timetable__departure">
                <span
                  aria-hidden="true"
                  className={`bus-timetable__dot bus-timetable__dot--${state}`}
                />
                <span className="bus-timetable__time">{time}</span>
                {fixed && <span className="bus-timetable__state">{label}</span>}
              </li>
            ))}
          </ul>
        </div>
        <section
          id={`${id}-notice`}
          aria-labelledby={`${id}-notice-title`}
          className="bus-timetable__notice"
          data-fix="reflow"
        >
          <h2 id={`${id}-notice-title`}>Aviso por obras</h2>
          <p className="bus-timetable__notice-text" data-fix="contrast">
            Del 10 al 21 de noviembre la parada Plaza Mayor se traslada a la
            calle Real, número 14. Las salidas de las 09:05 se recuperan con un
            refuerzo a las 09:15 desde la parada provisional. Consulta los
            cambios antes de salir.
          </p>
        </section>
        <section
          id={`${id}-tickets`}
          aria-labelledby={`${id}-tickets-title`}
          className="bus-timetable__tickets"
        >
          <h2 id={`${id}-tickets-title`}>Billetes</h2>
          <p>Billete sencillo: 1,40 €. Con tarjeta de transporte: 0,85 €.</p>
          <a className="bus-timetable__buy" href={`#${id}-tickets`}>
            Recargar la tarjeta de transporte
          </a>
        </section>

        <section
          id={`${id}-route`}
          aria-labelledby={`${id}-route-title`}
          className="bus-timetable__panel bus-timetable__stops-panel"
        >
          <h2 id={`${id}-route-title`}>Recorrido de la línea 7</h2>
          <p className="bus-timetable__panel-lead">
            Ocho paradas, unos 28 minutos de cabecera a cabecera. Todos los
            autobuses tienen piso bajo y rampa.
          </p>
          <ol className="bus-timetable__stops">
            {stops.map((stop) => (
              <li
                key={stop.name}
                className={`bus-timetable__stop-item${stop.current ? ' bus-timetable__stop-item--current' : ''}`}
                aria-current={stop.current ? 'location' : undefined}
              >
                <span className="bus-timetable__stop-name">
                  {stop.name}
                  {stop.current && (
                    <span className="bus-timetable__here">Estás aquí</span>
                  )}
                </span>
                <span className="bus-timetable__stop-meta">
                  {stop.minutes === 0
                    ? 'Salida'
                    : `A ${stop.minutes} minutos de la Estación`}
                  {stop.transfers && ` · Transbordo: ${stop.transfers}`}
                </span>
                {stop.note && (
                  <span className="bus-timetable__stop-note">{stop.note}</span>
                )}
              </li>
            ))}
          </ol>
        </section>

        <div className="bus-timetable__aside">
          <section
            aria-labelledby={`${id}-others-title`}
            className="bus-timetable__panel"
          >
            <h2 id={`${id}-others-title`}>Otras líneas en Plaza Mayor</h2>
            <ul className="bus-timetable__others">
              {otherLines.map((item) => (
                <li key={item.line} className="bus-timetable__other">
                  <span
                    className={`bus-timetable__badge bus-timetable__badge--${item.tone}`}
                  >
                    <span className="visually-hidden">Línea </span>
                    {item.line}
                  </span>
                  <span className="bus-timetable__other-text">
                    <a href={`#${id}-schedule`}>{item.route}</a>
                    <span className="bus-timetable__other-next">
                      Próxima a las {item.next}; {item.after}.
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section
            id={`${id}-schedule`}
            aria-labelledby={`${id}-schedule-title`}
            className="bus-timetable__panel"
          >
            <h2 id={`${id}-schedule-title`}>Horario de la línea 7</h2>
            <table className="bus-timetable__table">
              <thead>
                <tr>
                  <th scope="col">Días</th>
                  <th scope="col">Horario</th>
                  <th scope="col">Frecuencia</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.days}>
                    <th scope="row">{row.days}</th>
                    <td>{row.hours}</td>
                    <td>Cada {row.every}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="bus-timetable__table-note">
              Horario de invierno, vigente hasta el 14 de junio de 2027.
            </p>
            <a className="bus-timetable__download" href={`#${id}-schedule`}>
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                className="bus-timetable__link-icon"
              >
                <path
                  d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Descargar el horario en PDF (220 KB)
            </a>
          </section>
        </div>

        <section
          aria-labelledby={`${id}-app-title`}
          className="bus-timetable__app"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 160 120"
            className="bus-timetable__app-art"
          >
            <rect
              x="18"
              y="40"
              width="124"
              height="62"
              rx="14"
              fill="#19b3d1"
            />
            <rect x="18" y="82" width="124" height="20" rx="0" fill="#0b5c8e" />
            <rect x="30" y="50" width="30" height="22" rx="4" fill="#eaf1f6" />
            <rect x="66" y="50" width="30" height="22" rx="4" fill="#eaf1f6" />
            <rect x="102" y="50" width="28" height="22" rx="4" fill="#eaf1f6" />
            <circle cx="46" cy="104" r="10" fill="#071f36" />
            <circle cx="46" cy="104" r="4" fill="#d5e1ea" />
            <circle cx="114" cy="104" r="10" fill="#071f36" />
            <circle cx="114" cy="104" r="4" fill="#d5e1ea" />
            <path
              d="M100 30a22 22 0 0 1 22-22M108 30a14 14 0 0 1 14-14M116 30a6 6 0 0 1 6-6"
              fill="none"
              stroke="#5fd3ea"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <div className="bus-timetable__app-text">
            <h2 id={`${id}-app-title`}>Avisos de tu parada en el móvil</h2>
            <p>
              Guarda Plaza Mayor en la app de Autobuses Ría y te avisamos si tu
              autobús se retrasa o se cancela.
            </p>
            <a className="bus-timetable__app-link" href={`#${id}-app-title`}>
              Conocer la app
            </a>
          </div>
        </section>
      </main>
      <footer className="bus-timetable__footer">
        <div className="bus-timetable__footer-grid">
          <div className="bus-timetable__footer-brand">
            <p className="bus-timetable__footer-name">
              <span aria-hidden="true" className="bus-timetable__logo" />
              Autobuses Ría
            </p>
            <p>
              Transporte urbano de la ría desde 1962. Quince líneas de día y dos
              búhos nocturnos.
            </p>
          </div>
          <nav
            aria-labelledby={`${id}-footer-travel`}
            className="bus-timetable__footer-col"
          >
            <h2 id={`${id}-footer-travel`}>Viajar</h2>
            <ul>
              <li>
                <a href={`#${id}-route`}>Líneas y paradas</a>
              </li>
              <li>
                <a href={`#${id}-schedule`}>Horarios</a>
              </li>
              <li>
                <a href={`#${id}-notice`}>Avisos e incidencias</a>
              </li>
              <li>
                <a href={`#${id}-route`}>Accesibilidad en el autobús</a>
              </li>
            </ul>
          </nav>
          <nav
            aria-labelledby={`${id}-footer-tickets`}
            className="bus-timetable__footer-col"
          >
            <h2 id={`${id}-footer-tickets`}>Billetes</h2>
            <ul>
              <li>
                <a href={`#${id}-tickets`}>Tarifas</a>
              </li>
              <li>
                <a href={`#${id}-tickets`}>Tarjeta de transporte</a>
              </li>
              <li>
                <a href={`#${id}-tickets`}>Bono joven y bono social</a>
              </li>
            </ul>
          </nav>
          <div className="bus-timetable__footer-col">
            <h2>Atención al viajero</h2>
            <p>
              Oficina de la Estación Intermodal
              <br />
              De lunes a viernes, de 08:00 a 20:00
            </p>
            <p>
              <a href={`#${id}-line`}>Objetos perdidos</a>
            </p>
          </div>
        </div>
        <div className="bus-timetable__footer-legal">
          <p>Autobuses Ría · Información de demostración</p>
          <p className="bus-timetable__footer-links">
            <a href={`#${id}-line`}>Aviso legal</a>
            <a href={`#${id}-line`}>Privacidad</a>
            <a href={`#${id}-line`}>Accesibilidad</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
