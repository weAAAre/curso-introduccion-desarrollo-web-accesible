import { useId } from 'react'
import type { ExamplePageProps } from '../types'
import tapestry from './tapestry.svg'
import './museum-exhibition.css'

export const tapestryAlt =
  'Tapiz de lana con olas azules y barcas rojas sobre fondo arena.'

/** Exposición de un museo: niveles de encabezado y alternativa de la imagen. */
export function MuseumExhibition({ fixed }: ExamplePageProps) {
  const id = useId()
  // Barrera deliberada: las secciones usan h3 y sus subsecciones h2.
  const Section = fixed ? 'h2' : 'h3'
  const Subsection = fixed ? 'h3' : 'h2'

  return (
    <div className="museum-exhibition">
      <header className="museum-exhibition__header">
        <div className="museum-exhibition__utility">
          <p className="museum-exhibition__today">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              className="museum-exhibition__icon"
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
            Hoy abrimos de 10:00 a 19:00
          </p>
          <nav aria-label="Idioma" className="museum-exhibition__languages">
            <a href={`#${id}-top`} aria-current="page">
              Español
            </a>
            <a href={`#${id}-top`} lang="ca">
              Valencià
            </a>
            <a href={`#${id}-top`} lang="en">
              English
            </a>
          </nav>
        </div>
        <div className="museum-exhibition__bar">
          <p className="museum-exhibition__brand">
            <span aria-hidden="true" className="museum-exhibition__logo" />
            Museo de Arte Textil
          </p>
          <nav aria-label="Principal" className="museum-exhibition__nav">
            <a href={`#${id}-visit`}>Visita</a>
            <a href={`#${id}-about`} aria-current="true">
              Exposiciones
            </a>
            <a href={`#${id}-more`}>Colección</a>
            <a href={`#${id}-more`}>Actividades</a>
            <a href={`#${id}-more`}>Tienda</a>
            <a className="museum-exhibition__tickets" href={`#${id}-visit`}>
              Entradas
            </a>
          </nav>
        </div>
      </header>
      <nav
        id={`${id}-top`}
        aria-label="Migas de pan"
        className="museum-exhibition__crumbs"
      >
        <ol>
          <li>
            <a href={`#${id}-top`}>Inicio</a>
          </li>
          <li>
            <a href={`#${id}-about`}>Exposiciones</a>
          </li>
          <li>
            <a href={`#${id}-top`} aria-current="page">
              Hilos del Mediterráneo
            </a>
          </li>
        </ol>
      </nav>
      <main className="museum-exhibition__main">
        <div className="museum-exhibition__hero">
          <p className="museum-exhibition__kicker">Exposición temporal</p>
          <h1>Hilos del Mediterráneo</h1>
          <p className="museum-exhibition__dates">
            Del 14 de noviembre de 2026 al 5 de abril de 2027 · Sala 3
          </p>
          <p className="museum-exhibition__meta">
            <span>Comisaria: Elena Brotons</span>
            <span>Entrada incluida con la general</span>
            <span>Duración de la visita: 45 minutos</span>
          </p>
        </div>
        <figure className="museum-exhibition__figure">
          <img
            className="museum-exhibition__image"
            src={tapestry}
            width="720"
            height="360"
            alt={fixed ? tapestryAlt : 'sala3_IMG_0412.jpg'}
            data-fix="alt"
          />
          <figcaption>
            «Mar de fondo». Taller Bonaire, Altea, 1968. Lana sobre urdimbre de
            algodón, 210 × 420 cm.
          </figcaption>
        </figure>
        <div className="museum-exhibition__about">
          <Section
            id={`${id}-about`}
            className="museum-exhibition__section"
            data-fix="headings"
          >
            Sobre la exposición
          </Section>
          <p>
            Cuarenta tapices tejidos entre 1950 y 1990 en talleres de la costa.
            La obra central, «Mar de fondo», recibe a quienes entran en la sala
            3.
          </p>
          <p>
            La muestra reúne piezas de Altea, Peñíscola y el cabo de Gata, junto
            a los telares y los bocetos que las hicieron posibles.
          </p>
          <p>El recorrido se divide en tres ámbitos:</p>
          <ol className="museum-exhibition__rooms">
            <li>
              <strong>La orilla.</strong> Redes, velas y las primeras piezas
              para casas de pescadores.
            </li>
            <li>
              <strong>El taller.</strong> Dos telares de bajo lizo restaurados y
              los cartones pintados que servían de guía.
            </li>
            <li>
              <strong>Mar adentro.</strong> Los grandes formatos de los años
              ochenta, con «Mar de fondo» al final de la sala.
            </li>
          </ol>
          <figure className="museum-exhibition__quote">
            <blockquote>
              <p className="museum-exhibition__quote-text">
                «Tejíamos de cara al mar. Cuando cambiaba la luz, cambiábamos el
                azul.»
              </p>
            </blockquote>
            <figcaption>Amparo Llorca, tejedora del taller Bonaire</figcaption>
          </figure>
        </div>
        <div className="museum-exhibition__visit">
          <Section
            id={`${id}-visit`}
            className="museum-exhibition__section"
            data-fix="headings"
          >
            Información práctica
          </Section>
          <p className="museum-exhibition__visit-lead">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              className="museum-exhibition__icon"
            >
              <path
                d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10" r="2.3" fill="currentColor" />
            </svg>
            <span>
              Calle de la Seda, 12. Sala 3, planta baja, sin escalones.
              Audioguía con audiodescripción y cuatro piezas que se pueden
              tocar.
            </span>
          </p>
          <div className="museum-exhibition__info">
            <Subsection
              className="museum-exhibition__subsection"
              data-fix="headings"
            >
              Horarios
            </Subsection>
            <p>De martes a domingo, de 10:00 a 19:00.</p>
            <p className="museum-exhibition__small">
              Lunes cerrado. Visita guiada los sábados a las 12:00.
            </p>
          </div>
          <div className="museum-exhibition__info">
            <Subsection
              className="museum-exhibition__subsection"
              data-fix="headings"
            >
              Entradas
            </Subsection>
            <p>General, 6 €. Gratis los domingos por la tarde.</p>
            <p className="museum-exhibition__small">
              Reducida, 3 €: estudiantes, mayores de 65 y familias numerosas.
            </p>
          </div>
          <a className="museum-exhibition__buy" href={`#${id}-visit`}>
            Comprar entrada
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              className="museum-exhibition__icon"
            >
              <path
                d="M5 12h13m-5-5 5 5-5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </main>

      <aside
        id={`${id}-more`}
        aria-label="Otras exposiciones y actividades"
        className="museum-exhibition__more"
      >
        <ul className="museum-exhibition__cards">
          <li className="museum-exhibition__card">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 320 180"
              className="museum-exhibition__thumb"
            >
              <rect width="320" height="180" fill="#2f4f45" />
              <g fill="none" strokeWidth="10">
                <path d="M0 30h320" stroke="#e9c46a" />
                <path d="M0 60h320" stroke="#c8553d" />
                <path d="M0 90h320" stroke="#f3eee5" />
                <path d="M0 120h320" stroke="#e9c46a" />
                <path d="M0 150h320" stroke="#c8553d" />
              </g>
              <g stroke="#1f3d33" strokeWidth="6" opacity="0.55">
                <path d="M40 0v180M100 0v180M160 0v180M220 0v180M280 0v180" />
              </g>
            </svg>
            <p className="museum-exhibition__card-kicker">
              Colección permanente
            </p>
            <p className="museum-exhibition__card-title">
              <a href={`#${id}-more`}>Telares de la Vall d’Albaida</a>
            </p>
            <p className="museum-exhibition__card-meta">Salas 1 y 2</p>
          </li>
          <li className="museum-exhibition__card">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 320 180"
              className="museum-exhibition__thumb"
            >
              <rect width="320" height="180" fill="#e9dcc3" />
              <circle cx="110" cy="96" r="54" fill="#8a5a1c" />
              <circle
                cx="110"
                cy="96"
                r="40"
                fill="none"
                stroke="#e9c46a"
                strokeWidth="6"
                strokeDasharray="4 7"
              />
              <path
                d="M150 70c40-30 90-30 130 0"
                fill="none"
                stroke="#1f3d33"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M164 70l-6 80M270 70l6 80"
                stroke="#1f3d33"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M180 150h80"
                stroke="#c8553d"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
            <p className="museum-exhibition__card-kicker">Taller familiar</p>
            <p className="museum-exhibition__card-title">
              <a href={`#${id}-more`}>Teje tu ola en un telar de cartón</a>
            </p>
            <p className="museum-exhibition__card-meta">
              Domingos a las 11:30 · de 6 a 12 años
            </p>
          </li>
          <li className="museum-exhibition__card">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 320 180"
              className="museum-exhibition__thumb"
            >
              <rect width="320" height="180" fill="#152b24" />
              <rect
                x="40"
                y="36"
                width="240"
                height="108"
                rx="6"
                fill="#f3eee5"
              />
              <path
                d="M60 112c30-20 60-20 90 0s60 20 90 0 30-12 40-8"
                fill="none"
                stroke="#3b6fb6"
                strokeWidth="8"
              />
              <path d="M60 70h120" stroke="#1f3d33" strokeWidth="8" />
              <path d="M60 88h80" stroke="#8a5a1c" strokeWidth="6" />
              <circle cx="240" cy="72" r="16" fill="#e9c46a" />
            </svg>
            <p className="museum-exhibition__card-kicker">Conferencia</p>
            <p className="museum-exhibition__card-title">
              <a href={`#${id}-more`}>El azul de la costa: tintes y oficios</a>
            </p>
            <p className="museum-exhibition__card-meta">
              Jueves 4 de diciembre, 19:00 · Salón de actos
            </p>
          </li>
        </ul>
      </aside>

      <footer className="museum-exhibition__footer">
        <div className="museum-exhibition__footer-grid">
          <div>
            <p className="museum-exhibition__footer-brand">
              <span aria-hidden="true" className="museum-exhibition__logo" />
              Museo de Arte Textil
            </p>
            <p>Calle de la Seda, 12 · 46001 Valencia</p>
          </div>
          <p>
            <strong>Horario</strong>
            <br />
            De martes a domingo, de 10:00 a 19:00. Lunes cerrado.
          </p>
          <nav
            aria-label="Pie de página"
            className="museum-exhibition__footer-nav"
          >
            <a href={`#${id}-visit`}>Planifica tu visita</a>
            <a href={`#${id}-more`}>Actividades</a>
            <a href={`#${id}-visit`}>Accesibilidad</a>
            <a href={`#${id}-more`}>Amigos del museo</a>
          </nav>
        </div>
        <div className="museum-exhibition__footer-legal">
          <p>Museo de Arte Textil · Sitio de demostración</p>
          <p className="museum-exhibition__footer-links">
            <a href={`#${id}-top`}>Aviso legal</a>
            <a href={`#${id}-top`}>Privacidad</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
