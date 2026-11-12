import { useId } from 'react'
import type { ExamplePageProps } from '../types'
import './recipe-page.css'

const steps = [
  'Pica la cebolla, el pimiento y la zanahoria.',
  'Sofríe las verduras 10 minutos a fuego medio.',
  'Añade las lentejas, el pimentón y el agua.',
  'Cuece 35 minutos y deja reposar antes de servir.',
]

/** Receta de un blog: estructura, regiones y orden del documento. */
export function RecipePage({ fixed }: ExamplePageProps) {
  const id = useId()
  // Barrera deliberada: el aspecto se mantiene, pero el HTML pierde significado.
  const Header = fixed ? 'header' : 'div'
  const Nav = fixed ? 'nav' : 'div'
  const Main = fixed ? 'main' : 'div'
  const Footer = fixed ? 'footer' : 'div'
  const H1 = fixed ? 'h1' : 'div'
  const H2 = fixed ? 'h2' : 'div'
  const H3 = fixed ? 'h3' : 'div'

  return (
    <div className="recipe-page">
      <Header className="recipe-page__header" data-fix="landmarks">
        <p className="recipe-page__brand">La Cuchara Lenta</p>
        <Nav
          className="recipe-page__nav"
          {...(fixed ? { 'aria-label': 'Principal' } : {})}
        >
          <a href={`#${id}-recipe`}>Recetas</a>
          <a href={`#${id}-ingredients`}>Ingredientes</a>
          <a href={`#${id}-steps`}>Preparación</a>
        </Nav>
      </Header>
      <Main
        id={`${id}-recipe`}
        className="recipe-page__main"
        data-fix="landmarks"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          className="recipe-page__photo"
          viewBox="0 0 400 300"
        >
          <rect width="400" height="300" fill="#e9dcc3" />
          <path d="M0 210h400v90H0z" fill="#d9c7a6" />
          <ellipse cx="200" cy="236" rx="150" ry="20" fill="#bfa67c" />
          <path
            d="M70 130h260c0 70-55 112-130 112S70 200 70 130z"
            fill="#f6efe2"
          />
          <ellipse cx="200" cy="130" rx="130" ry="30" fill="#fffaf0" />
          <ellipse cx="200" cy="132" rx="114" ry="23" fill="#7a4a24" />
          <g fill="#a36a35">
            <circle cx="140" cy="130" r="7" />
            <circle cx="165" cy="140" r="7" />
            <circle cx="190" cy="126" r="7" />
            <circle cx="225" cy="141" r="7" />
            <circle cx="250" cy="128" r="7" />
            <circle cx="272" cy="137" r="6" />
            <circle cx="118" cy="136" r="6" />
            <circle cx="208" cy="146" r="6" />
          </g>
          <g fill="#e2792b">
            <circle cx="158" cy="124" r="8" />
            <circle cx="238" cy="134" r="8" />
            <circle cx="205" cy="118" r="7" />
          </g>
          <g fill="#6f8f3a">
            <rect x="176" y="132" width="16" height="7" rx="3" />
            <rect x="258" y="122" width="14" height="7" rx="3" />
            <rect x="128" y="122" width="14" height="6" rx="3" />
          </g>
          <g
            fill="none"
            stroke="#fffaf0"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.7"
          >
            <path d="M160 86c-12-18 12-26 0-46" />
            <path d="M200 80c-12-18 12-26 0-46" />
            <path d="M240 86c-12-18 12-26 0-46" />
          </g>
        </svg>
        <p className="recipe-page__meta">Cuchara · 4 raciones · 50 minutos</p>
        <H1 className="recipe-page__title" data-fix="headings">
          Lentejas estofadas con verduras
        </H1>
        <p>
          Un guiso de diario que mejora de un día para otro. Sin carne y con
          verduras de temporada.
        </p>
        <H2
          id={`${id}-ingredients`}
          className="recipe-page__heading"
          data-fix="headings"
        >
          Ingredientes
        </H2>
        <H3 className="recipe-page__subheading" data-fix="headings">
          Para el sofrito
        </H3>
        <ul>
          <li>1 cebolla</li>
          <li>1 pimiento verde</li>
          <li>1 zanahoria</li>
        </ul>
        <H3 className="recipe-page__subheading" data-fix="headings">
          Para el guiso
        </H3>
        <ul>
          <li>300 g de lentejas pardinas</li>
          <li>1 cucharadita de pimentón dulce</li>
          <li>1,2 litros de agua</li>
        </ul>
        <H2
          id={`${id}-steps`}
          className="recipe-page__heading"
          data-fix="headings"
        >
          Preparación
        </H2>
        {fixed ? (
          <ol className="recipe-page__steps" data-fix="order">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        ) : (
          // Barrera deliberada: el DOM está invertido y el CSS lo vuelve a ordenar.
          <div
            className="recipe-page__steps recipe-page__steps--reversed"
            data-fix="order"
          >
            {steps
              .map((step, index) => (
                <p key={step}>
                  {index + 1}. {step}
                </p>
              ))
              .reverse()}
          </div>
        )}
        <H2 className="recipe-page__heading" data-fix="headings">
          Consejo
        </H2>
        <p className="recipe-page__tip">
          Si quedan espesas, añade un poco de agua caliente al recalentar.
        </p>
      </Main>
      <Footer className="recipe-page__footer" data-fix="landmarks">
        <p>La Cuchara Lenta · Recetas de casa desde 2014</p>
      </Footer>
    </div>
  )
}
