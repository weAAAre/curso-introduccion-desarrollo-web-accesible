import { type FormEvent, useId, useState } from 'react'
import type { ExamplePageProps } from '../types'
import './repair-booking.css'

const reviews = [
  {
    author: 'Marta, bici de carga',
    rating: 5,
    text: 'Me cambiaron la cadena y los platos en una mañana y me explicaron por qué se gastaban tan rápido.',
  },
  {
    author: 'Iván, carretera',
    rating: 5,
    text: 'Presupuesto claro antes de empezar y ni un euro más. La bici cambia como el primer día.',
  },
  {
    author: 'Lourdes, eléctrica',
    rating: 4,
    text: 'Encontraron el fallo del sensor que otros no veían. Tardaron dos días, pero avisaron.',
  },
]

const stars = [1, 2, 3, 4, 5]

/** Pedir cita en un taller: un campo sin nombre accesible que detecta FastPass. */
export function RepairBooking({ fixed }: ExamplePageProps) {
  const id = useId()
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="repair-booking">
      <header className="repair-booking__header">
        <div className="repair-booking__utility">
          <p>
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              className="repair-booking__icon"
            >
              <circle
                cx="12"
                cy="12"
                r="8.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M12 7.5V12l3 2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            Hoy abierto de 9:30 a 14:00 y de 16:30 a 20:00
          </p>
          <p>Recogemos tu bici en casa si vives en el barrio</p>
        </div>
        <div className="repair-booking__bar">
          <p className="repair-booking__brand">
            <span aria-hidden="true" className="repair-booking__logo" />
            Taller La Cadena
          </p>
          <nav aria-label="Principal" className="repair-booking__nav">
            <a href={`#${id}-services`}>Servicios</a>
            <a href={`#${id}-prices`}>Tarifas</a>
            <a href={`#${id}-reviews`}>Opiniones</a>
            <a href={`#${id}-shop`}>El taller</a>
            <a className="repair-booking__nav-cta" href={`#${id}-booking`}>
              Pedir cita
            </a>
          </nav>
        </div>
      </header>
      <main className="repair-booking__main">
        <h1>Pide cita para tu bicicleta</h1>
        <p className="repair-booking__intro">
          Te llamamos en el día para confirmar la hora. La revisión básica
          cuesta 25 €.
        </p>
        <ul className="repair-booking__facts">
          <li>Casi todas las reparaciones, listas en 24 horas.</li>
          <li>Presupuesto antes de tocar nada.</li>
          <li>De lunes a sábado, en la calle del Puerto 8.</li>
        </ul>
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 520 300"
          className="repair-booking__art"
        >
          <defs>
            <linearGradient id={`${id}-wall`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2c3138" />
              <stop offset="1" stopColor="#1f2328" />
            </linearGradient>
            <radialGradient id={`${id}-lamp`} cx="0.5" cy="0" r="0.9">
              <stop offset="0" stopColor="#ffd9b8" stopOpacity="0.45" />
              <stop offset="1" stopColor="#ffd9b8" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="520" height="300" rx="18" fill={`url(#${id}-wall)`} />
          <path d="M150 0h80l60 240H90Z" fill={`url(#${id}-lamp)`} />
          <path
            d="M176 0v18M164 18h24l6 10h-36Z"
            fill="#ff6b1a"
            stroke="#ff6b1a"
            strokeWidth="3"
          />
          <g stroke="#8a8f98" strokeWidth="3" strokeLinecap="round">
            <path d="M370 40h120" />
            <path d="M386 40v18M412 40v26M438 40v14M464 40v22" />
          </g>
          <g fill="#c8ccd2">
            <rect x="380" y="58" width="12" height="28" rx="3" />
            <rect x="406" y="66" width="12" height="40" rx="3" />
            <circle
              cx="438"
              cy="62"
              r="9"
              fill="none"
              stroke="#c8ccd2"
              strokeWidth="4"
            />
            <rect x="458" y="62" width="12" height="32" rx="3" fill="#ff8a47" />
          </g>
          <circle
            cx="430"
            cy="160"
            r="38"
            fill="none"
            stroke="#3a4048"
            strokeWidth="8"
          />
          <circle
            cx="470"
            cy="190"
            r="30"
            fill="none"
            stroke="#3a4048"
            strokeWidth="7"
          />
          <rect y="252" width="520" height="48" fill="#15181c" />
          <path d="M0 252h520" stroke="#3a4048" strokeWidth="2" />
          <path
            d="M266 252v-88M246 252h40M266 164l-38-30"
            stroke="#ff6b1a"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <g fill="none" stroke="#f2f1ee" strokeWidth="5">
            <circle cx="130" cy="176" r="56" />
            <circle cx="326" cy="176" r="56" />
          </g>
          <g stroke="#8a8f98" strokeWidth="1.5">
            <path d="M130 120v112M74 176h112M90 136l80 80M170 136l-80 80" />
            <path d="M326 120v112M270 176h112M286 136l80 80M366 136l-80 80" />
          </g>
          <g
            fill="none"
            stroke="#ff6b1a"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M130 176l64-72h104l28 72" />
            <path d="M194 104l38 72 66-72" />
            <path d="M232 176l-102 0" />
            <path d="M182 86h28M298 104l-8-26h24" />
          </g>
          <circle
            cx="232"
            cy="176"
            r="12"
            fill="#1f2328"
            stroke="#f2f1ee"
            strokeWidth="4"
          />
          <path
            d="M120 270h60M330 274h44"
            stroke="#2c3138"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <form
          id={`${id}-booking`}
          className="repair-booking__form"
          onSubmit={submit}
        >
          <div className="repair-booking__field">
            <label htmlFor={`${id}-name`}>Nombre</label>
            <input id={`${id}-name`} name="name" autoComplete="name" />
          </div>
          <div className="repair-booking__field" data-fix="label">
            {fixed ? (
              <label htmlFor={`${id}-phone`}>Teléfono</label>
            ) : (
              // Barrera deliberada: el texto se ve, pero no está asociado al campo.
              <span className="repair-booking__fake-label">Teléfono</span>
            )}
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
            />
          </div>
          <div className="repair-booking__field">
            <label htmlFor={`${id}-issue`}>¿Qué le pasa a la bicicleta?</label>
            <textarea id={`${id}-issue`} name="issue" rows={3} />
          </div>
          <button type="submit" className="repair-booking__submit">
            Pedir cita
          </button>
        </form>
        <p className="repair-booking__result" role="status">
          {sent ? 'Solicitud de prueba: no se ha enviado ningún dato.' : ''}
        </p>
        <section
          id={`${id}-services`}
          aria-labelledby={`${id}-services-title`}
          className="repair-booking__services"
        >
          <h2 id={`${id}-services-title`}>Servicios</h2>
          <ul>
            <li>Revisión básica: frenos, cambios y presión.</li>
            <li>Cambio de cámara o cubierta.</li>
            <li>Ajuste de bicicletas eléctricas.</li>
          </ul>
        </section>

        <section
          id={`${id}-prices`}
          aria-labelledby={`${id}-prices-title`}
          className="repair-booking__prices"
        >
          <h2 id={`${id}-prices-title`}>Tarifas</h2>
          <table className="repair-booking__table">
            <thead>
              <tr>
                <th scope="col">Trabajo</th>
                <th scope="col">Precio</th>
                <th scope="col">Plazo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Revisión básica</th>
                <td>25 €</td>
                <td>En el día</td>
              </tr>
              <tr>
                <th scope="row">Puesta a punto completa</th>
                <td>55 €</td>
                <td>24 horas</td>
              </tr>
              <tr>
                <th scope="row">Pinchazo, con cámara nueva</th>
                <td>12 €</td>
                <td>Al momento</td>
              </tr>
              <tr>
                <th scope="row">Purgado de frenos hidráulicos</th>
                <td>20 € por freno</td>
                <td>24 horas</td>
              </tr>
              <tr>
                <th scope="row">Diagnóstico de bici eléctrica</th>
                <td>30 €</td>
                <td>48 horas</td>
              </tr>
            </tbody>
          </table>
          <p className="repair-booking__note">
            Precios con IVA y mano de obra. Las piezas se cobran aparte y te las
            enseñamos antes de cambiarlas.
          </p>
        </section>

        <section
          id={`${id}-reviews`}
          aria-labelledby={`${id}-reviews-title`}
          className="repair-booking__reviews"
        >
          <h2 id={`${id}-reviews-title`}>Lo que dicen en el barrio</h2>
          <p className="repair-booking__score">
            <span className="repair-booking__score-number">4,9</span>
            <span>de media en 312 opiniones</span>
          </p>
          <ul className="repair-booking__quotes">
            {reviews.map((review) => (
              <li key={review.author} className="repair-booking__quote">
                <p className="repair-booking__stars">
                  {stars.map((star) => (
                    <svg
                      key={star}
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                      className={
                        star <= review.rating
                          ? 'repair-booking__star'
                          : 'repair-booking__star repair-booking__star--off'
                      }
                    >
                      <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8Z" />
                    </svg>
                  ))}
                  <span className="visually-hidden">
                    {review.rating} de 5 estrellas
                  </span>
                </p>
                <blockquote>
                  <p>{review.text}</p>
                </blockquote>
                <p className="repair-booking__author">{review.author}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id={`${id}-shop`}
          aria-labelledby={`${id}-shop-title`}
          className="repair-booking__shop"
        >
          <div>
            <h2 id={`${id}-shop-title`}>El taller</h2>
            <p>
              Somos Rosa y Andrés. Abrimos en 2014 en un antiguo almacén de
              redes del puerto y desde entonces arreglamos bicis de paseo, de
              carretera, de carga y eléctricas.
            </p>
            <p>
              Si te corre prisa, pásate sin cita: los pinchazos y los ajustes
              pequeños los hacemos mientras esperas.
            </p>
          </div>
          <dl className="repair-booking__hours">
            <div>
              <dt>De lunes a viernes</dt>
              <dd>9:30 a 14:00 y 16:30 a 20:00</dd>
            </div>
            <div>
              <dt>Sábados</dt>
              <dd>10:00 a 14:00</dd>
            </div>
            <div>
              <dt>Dirección</dt>
              <dd>Calle del Puerto 8, junto a la lonja</dd>
            </div>
          </dl>
        </section>
      </main>
      <footer className="repair-booking__footer">
        <div className="repair-booking__footer-grid">
          <div>
            <p className="repair-booking__footer-brand">
              <span aria-hidden="true" className="repair-booking__logo" />
              Taller La Cadena
            </p>
            <p>Reparación y mantenimiento de bicicletas desde 2014.</p>
          </div>
          <nav
            aria-labelledby={`${id}-footer-shop`}
            className="repair-booking__footer-col"
          >
            <h2 id={`${id}-footer-shop`}>Taller</h2>
            <ul>
              <li>
                <a href={`#${id}-services`}>Servicios</a>
              </li>
              <li>
                <a href={`#${id}-prices`}>Tarifas</a>
              </li>
              <li>
                <a href={`#${id}-booking`}>Pedir cita</a>
              </li>
            </ul>
          </nav>
          <div className="repair-booking__footer-col">
            <h2>Visítanos</h2>
            <p>
              Calle del Puerto 8
              <br />
              De lunes a sábado
            </p>
          </div>
        </div>
        <div className="repair-booking__footer-legal">
          <p>Taller La Cadena · Calle del Puerto 8 · Sitio de demostración</p>
          <p className="repair-booking__footer-links">
            <a href={`#${id}-shop`}>Aviso legal</a>
            <a href={`#${id}-shop`}>Privacidad</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
