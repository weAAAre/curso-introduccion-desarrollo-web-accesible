import { useId } from 'react'
import type { ExamplePageProps } from '../types'
import { BowlThumb, StewPhoto } from './photos'
import './recipe-page.css'

const steps = [
  'Pica la cebolla, el pimiento y la zanahoria.',
  'Sofríe las verduras 10 minutos a fuego medio.',
  'Añade las lentejas, el pimentón y el agua.',
  'Cuece 35 minutos y deja reposar antes de servir.',
]

const related = [
  {
    name: 'Garbanzos con espinacas',
    meta: '40 minutos · Fácil',
    soup: '#b9853f',
    bits: ['#e7c27a', '#3f6b2a', '#e7c27a'],
  },
  {
    name: 'Crema de calabaza asada',
    meta: '45 minutos · Fácil',
    soup: '#e48a2c',
    bits: ['#f7e7c6', '#6a4a2a'],
  },
  {
    name: 'Sopa castellana',
    meta: '30 minutos · Fácil',
    soup: '#a5532a',
    bits: ['#e9c98f', '#f4e9cf', '#5d7a2c'],
  },
  {
    name: 'Alubias blancas con verduras',
    meta: '1 hora · Media',
    soup: '#c9a26b',
    bits: ['#f4ead6', '#e2792b', '#4f6b2a'],
  },
]

/** Receta de un blog: estructura, regiones y orden del documento. */
export function RecipePage({ fixed }: ExamplePageProps) {
  const id = useId()
  // Barrera deliberada: el aspecto se mantiene, pero el HTML pierde significado.
  const Header = fixed ? 'header' : 'div'
  const Nav = fixed ? 'nav' : 'div'
  const Main = fixed ? 'main' : 'div'
  const Aside = fixed ? 'aside' : 'div'
  const Footer = fixed ? 'footer' : 'div'
  const H1 = fixed ? 'h1' : 'div'
  const H2 = fixed ? 'h2' : 'div'
  const H3 = fixed ? 'h3' : 'div'
  const label = (name: string) => (fixed ? { 'aria-label': name } : {})

  return (
    <div className="recipe-page">
      <Header className="recipe-page__header" data-fix="landmarks">
        <p className="recipe-page__topline">
          Recetas de casa, de temporada y sin prisas
        </p>
        <div className="recipe-page__bar">
          <p className="recipe-page__brand">
            <span aria-hidden="true" className="recipe-page__logo" />
            La Cuchara Lenta
          </p>
          <Nav className="recipe-page__nav" {...label('Principal')}>
            <a href={`#${id}-recipe`}>Recetas</a>
            <a href={`#${id}-ingredients`}>Ingredientes</a>
            <a href={`#${id}-steps`}>Preparación</a>
            <a href={`#${id}-more`}>De cuchara</a>
            <a href={`#${id}-more`}>Menú semanal</a>
            <a href={`#${id}-about`}>Sobre Marta</a>
          </Nav>
        </div>
      </Header>
      <Main
        id={`${id}-recipe`}
        className="recipe-page__main"
        data-fix="landmarks"
      >
        <Nav className="recipe-page__crumbs" {...label('Migas de pan')}>
          <a href={`#${id}-recipe`}>Inicio</a>
          <span aria-hidden="true">›</span>
          <a href={`#${id}-more`}>Platos de cuchara</a>
          <span aria-hidden="true">›</span>
          <span>Lentejas estofadas</span>
        </Nav>
        <StewPhoto />
        <p className="recipe-page__meta">Cuchara · 4 raciones · 50 minutos</p>
        <H1 className="recipe-page__title" data-fix="headings">
          Lentejas estofadas con verduras
        </H1>
        <p>
          Un guiso de diario que mejora de un día para otro. Sin carne y con
          verduras de temporada.
        </p>
        <p className="recipe-page__byline">
          <span aria-hidden="true" className="recipe-page__avatar" />
          <span>
            Por <strong>Marta Ribas</strong> · Actualizada el 3 de noviembre de
            2026
          </span>
          <span className="recipe-page__rating">
            <span aria-hidden="true">★★★★★</span> 4,9 de 5 · 212 valoraciones
          </span>
        </p>
        <dl className="recipe-page__facts">
          <div>
            <dt>Preparación</dt>
            <dd>15 min</dd>
          </div>
          <div>
            <dt>Cocción</dt>
            <dd>35 min</dd>
          </div>
          <div>
            <dt>Raciones</dt>
            <dd>4</dd>
          </div>
          <div>
            <dt>Dificultad</dt>
            <dd>Fácil</dd>
          </div>
        </dl>
        <H2
          id={`${id}-ingredients`}
          className="recipe-page__heading"
          data-fix="headings"
        >
          Ingredientes
        </H2>
        <p className="recipe-page__note">
          Para 4 raciones. Las pardinas no necesitan remojo.
        </p>
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
        <p>
          Se conservan cuatro días en la nevera y se congelan muy bien en
          raciones. Si te gustan con un punto ácido, añade un chorrito de
          vinagre de Jerez justo antes de servir.
        </p>
      </Main>
      <Aside
        id={`${id}-more`}
        className="recipe-page__more"
        {...label('Más recetas de cuchara')}
      >
        <p className="recipe-page__more-intro">
          ¿Te han gustado? Más recetas de cuchara para esta semana
        </p>
        <ul className="recipe-page__cards">
          {related.map(({ name, meta, soup, bits }) => (
            <li key={name} className="recipe-page__card">
              <BowlThumb soup={soup} bits={bits} />
              <a href={`#${id}-more`}>{name}</a>
              <p>{meta}</p>
            </li>
          ))}
        </ul>
      </Aside>
      <Footer
        id={`${id}-about`}
        className="recipe-page__footer"
        data-fix="landmarks"
      >
        <div className="recipe-page__footer-grid">
          <div className="recipe-page__footer-about">
            <p className="recipe-page__footer-brand">La Cuchara Lenta</p>
            <p>
              Soy Marta y cocino como en casa de mis abuelos, en Palencia:
              legumbre los lunes, verdura de la huerta y nada de prisas.
            </p>
          </div>
          <ul className="recipe-page__footer-links">
            <li>
              <a href={`#${id}-more`}>Todas las recetas</a>
            </li>
            <li>
              <a href={`#${id}-more`}>Menú semanal</a>
            </li>
            <li>
              <a href={`#${id}-about`}>Sobre Marta</a>
            </li>
            <li>
              <a href={`#${id}-about`}>Contacto</a>
            </li>
          </ul>
          <p className="recipe-page__footer-news">
            Cada domingo, el menú de la semana en tu correo.{' '}
            <a href={`#${id}-about`}>Apúntate al menú semanal</a>
          </p>
        </div>
        <div className="recipe-page__legal">
          <p>La Cuchara Lenta · Recetas de casa desde 2014</p>
          <p>Blog de demostración · Aviso legal · Privacidad</p>
        </div>
      </Footer>
    </div>
  )
}
