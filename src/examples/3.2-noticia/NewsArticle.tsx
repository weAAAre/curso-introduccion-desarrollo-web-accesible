import { type FormEvent, useId, useState } from 'react'
import type { ExamplePageProps } from '../types'
import chart from './chart.svg'
import envelope from './envelope.svg'
import { LibraryThumb, MarketThumb, SportsThumb } from './thumbs'
import './news-article.css'

export const chartAlt =
  'Gráfico de barras: 1.200 viajes diarios en marzo de 2025 y 2.450 en marzo de 2026.'

const mostRead = [
  'La piscina cubierta reabre el lunes con horario ampliado',
  'Vecinos del Arrabal piden un paso de cebra frente al colegio',
  'El mercadillo solidario recauda 3.400 euros para el comedor social',
  'Cortes de tráfico en la calle Real por las obras del colector',
  'La banda municipal celebra 100 años con un concierto en la plaza',
]

const more = [
  {
    section: 'Comercio',
    title: 'El mercado de abastos abrirá también los domingos por la mañana',
    date: '11 de noviembre de 2026',
    Thumb: MarketThumb,
  },
  {
    section: 'Cultura',
    title: 'La biblioteca del Arrabal estrena club de lectura fácil',
    date: '10 de noviembre de 2026',
    Thumb: LibraryThumb,
  },
  {
    section: 'Deportes',
    title: 'El polideportivo cambia el suelo de la pista central en diciembre',
    date: '9 de noviembre de 2026',
    Thumb: SportsThumb,
  },
]

/** Noticia local: imágenes, enlace, botón y campo con información comprensible. */
export function NewsArticle({ fixed }: ExamplePageProps) {
  const id = useId()
  const [subscribed, setSubscribed] = useState(false)
  const subscribe = (event: FormEvent) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <div className="news-article">
      <header className="news-article__header">
        <div className="news-article__edition">
          <p>Edición del centro · Información de proximidad desde 2009</p>
          <p className="news-article__weather">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              className="news-article__weather-icon"
            >
              <circle cx="9" cy="9" r="4" fill="#f3c24f" />
              <path
                d="M8 19h10a3.5 3.5 0 0 0 0-7 5 5 0 0 0-9.6 1.5A2.8 2.8 0 0 0 8 19z"
                fill="#f2ede3"
              />
            </svg>
            Jueves, 12 de noviembre · 14 °C, nubes y claros
          </p>
        </div>
        <div className="news-article__masthead">
          <p className="news-article__brand">
            <span aria-hidden="true" className="news-article__logo" />
            Diario de Barrio
          </p>
          <p className="news-article__support">
            Periodismo de cerca, sin muros de pago.{' '}
            <a href={`#${id}-footer`}>Hazte socio del diario</a>
          </p>
        </div>
        <nav aria-label="Secciones" className="news-article__nav">
          <a href={`#${id}-more`}>Portada</a>
          <a href={`#${id}-more`}>Barrio</a>
          <a href={`#${id}-article`} aria-current="page">
            Movilidad
          </a>
          <a href={`#${id}-more`}>Comercio</a>
          <a href={`#${id}-article`}>Cultura</a>
          <a href={`#${id}-more`}>Deportes</a>
          <a href={`#${id}-more`}>Opinión</a>
          <a href={`#${id}-newsletter`}>Boletín</a>
        </nav>
      </header>
      <main className="news-article__main">
        <article id={`${id}-article`}>
          <p className="news-article__kicker">Movilidad</p>
          <h1>El carril bici del centro duplica sus viajes en un año</h1>
          <p className="news-article__dek">
            Los contadores de la calle Real registran 2.450 viajes al día. El
            ayuntamiento estudia más aparcamiento para bicicletas en la
            estación.
          </p>
          <p className="news-article__byline">
            <span aria-hidden="true" className="news-article__avatar" />
            <span>
              Redacción · 8 de noviembre de 2026
              <span className="news-article__reading">
                3 minutos de lectura
              </span>
            </span>
          </p>
          <p className="news-article__lead">
            El ayuntamiento ha publicado los primeros datos de uso del carril
            bici que conecta la estación con la plaza Mayor. Los contadores
            registran más del doble de viajes diarios que hace un año.
          </p>
          <figure className="news-article__figure">
            <img
              src={chart}
              width="640"
              height="320"
              alt={fixed ? chartAlt : 'grafico_final_v2.png'}
              data-fix="informative-alt"
            />
            <figcaption>
              Viajes diarios medidos en marzo. Fuente: ayuntamiento.
            </figcaption>
          </figure>
          <p>
            El aumento se concentra en las horas punta de la mañana. La
            concejalía estudia ampliar el aparcamiento de bicicletas junto a la
            estación.{' '}
            <a href={`#${id}-report`} data-fix="link">
              {fixed ? 'Consultar el informe de movilidad 2026' : 'Leer más'}
            </a>
          </p>
          <p>
            Buena parte de los nuevos viajes son de estudiantes que van al
            instituto de la Vega y de trabajadores del polígono, que hasta ahora
            cruzaban el centro en coche. Los fines de semana el uso cae a la
            mitad, aunque crece el número de familias con niños.
          </p>
          <blockquote className="news-article__quote">
            <p>
              «No esperábamos este ritmo tan pronto. Ahora toca que llegar en
              bici a la estación sea igual de cómodo que llegar en coche».
            </p>
            <footer>Rosa Medina, concejala de Movilidad</footer>
          </blockquote>
          <p>
            La asociación de comerciantes de la calle Real, que se opuso al
            proyecto en 2024, reconoce que las ventas no han bajado y pide ahora
            zonas de carga y descarga mejor señalizadas.
          </p>
          <p id={`${id}-report`} className="news-article__note">
            El informe completo está disponible en la sede electrónica
            municipal.
          </p>
          <p className="news-article__tags">
            <span>Temas:</span>
            <a href={`#${id}-article`}>Bicicleta</a>
            <a href={`#${id}-article`}>Calle Real</a>
            <a href={`#${id}-article`}>Estación de tren</a>
          </p>
        </article>
        <div className="news-article__sidebar">
          <aside
            id={`${id}-newsletter`}
            aria-labelledby={`${id}-newsletter-title`}
            className="news-article__newsletter"
          >
            <img
              className="news-article__icon"
              src={envelope}
              width="48"
              height="48"
              alt={fixed ? '' : 'icono-sobre.svg'}
              data-fix="decorative-alt"
            />
            <h2 id={`${id}-newsletter-title`}>
              Recibe las noticias del barrio
            </h2>
            <p>Un correo cada viernes con lo más leído de la semana.</p>
            <form className="news-article__form" onSubmit={subscribe}>
              <div className="news-article__field" data-fix="label">
                {fixed && (
                  <label htmlFor={`${id}-email`}>Correo electrónico</label>
                )}
                <input
                  id={`${id}-email`}
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder={fixed ? 'nombre@ejemplo.com' : 'Tu correo'}
                />
              </div>
              <button
                type="submit"
                className="news-article__submit"
                data-fix="button"
              >
                {fixed ? 'Suscribirme' : 'Aceptar'}
              </button>
            </form>
            <p className="news-article__result" role="status">
              {subscribed
                ? 'Suscripción de prueba: no se ha enviado ningún dato.'
                : ''}
            </p>
          </aside>
          <aside
            aria-labelledby={`${id}-popular-title`}
            className="news-article__popular"
          >
            <h2 id={`${id}-popular-title`}>Lo más leído</h2>
            <ol>
              {mostRead.map((title) => (
                <li key={title}>
                  <a href={`#${id}-more`}>{title}</a>
                </li>
              ))}
            </ol>
          </aside>
        </div>
        <section
          id={`${id}-more`}
          aria-labelledby={`${id}-more-title`}
          className="news-article__more"
        >
          <h2 id={`${id}-more-title`}>Más noticias del barrio</h2>
          <ul className="news-article__cards">
            {more.map(({ section, title, date, Thumb }) => (
              <li key={title} className="news-article__card">
                <Thumb />
                <p className="news-article__card-section">{section}</p>
                <a href={`#${id}-more`}>{title}</a>
                <p className="news-article__card-date">{date}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer id={`${id}-footer`} className="news-article__footer">
        <div className="news-article__footer-grid">
          <div>
            <p className="news-article__footer-brand">
              <span aria-hidden="true" className="news-article__logo" />
              Diario de Barrio
            </p>
            <p>
              Periódico independiente del centro y el Arrabal. Lo hacemos seis
              periodistas y más de 1.200 socios.
            </p>
          </div>
          <nav
            aria-labelledby={`${id}-footer-sections`}
            className="news-article__footer-col"
          >
            <h2
              id={`${id}-footer-sections`}
              className="news-article__footer-title"
            >
              El diario
            </h2>
            <ul>
              <li>
                <a href={`#${id}-more`}>Barrio</a>
              </li>
              <li>
                <a href={`#${id}-article`}>Movilidad y obras</a>
              </li>
              <li>
                <a href={`#${id}-more`}>Agenda cultural</a>
              </li>
              <li>
                <a href={`#${id}-more`}>Cartas de los lectores</a>
              </li>
            </ul>
          </nav>
          <div className="news-article__footer-col">
            <h2 className="news-article__footer-title">Redacción</h2>
            <address>
              Calle del Pozo 14, bajo
              <br />
              redaccion@diariodebarrio.example
              <br />
              Teléfono 900 000 123
            </address>
            <p>¿Has visto algo en el barrio? Cuéntanoslo.</p>
          </div>
        </div>
        <div className="news-article__legal">
          <p>© 2026 Diario de Barrio · Aviso legal · Privacidad</p>
          <p>Periódico de demostración</p>
        </div>
      </footer>
    </div>
  )
}
