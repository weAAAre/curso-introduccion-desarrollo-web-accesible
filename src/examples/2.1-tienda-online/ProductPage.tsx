import { useId, useState } from 'react'
import type { ExamplePageProps } from '../types'
import {
  BagIcon,
  BowlShot,
  GlazeDetail,
  HandIcon,
  JugShot,
  MugInUse,
  PinIcon,
  PlateShot,
  ReturnIcon,
  SearchIcon,
  Stars,
  TeapotShot,
  TruckIcon,
  UserIcon,
} from './illustrations'
import mug from './mug.svg'
import './product-page.css'

const related = [
  {
    name: 'Cuenco de gres salvia',
    price: '19 €',
    note: 'Ø 15 cm',
    Shot: BowlShot,
  },
  {
    name: 'Plato llano salvia',
    price: '26 €',
    note: 'Ø 26 cm',
    Shot: PlateShot,
  },
  {
    name: 'Jarra de agua en barro rojo',
    price: '42 €',
    note: '1 litro',
    Shot: JugShot,
  },
  {
    name: 'Tetera de gres negro',
    price: '58 €',
    note: '800 ml',
    Shot: TeapotShot,
  },
]

const reviews = [
  {
    author: 'Lucía, Zaragoza',
    date: '28 de octubre de 2026',
    rating: 5,
    title: 'Se nota que está hecha a mano',
    text: 'Pesa lo justo y el asa es cómoda incluso con las manos frías. El verde es más bonito en persona que en la foto.',
  },
  {
    author: 'Andrés, Valencia',
    date: '14 de octubre de 2026',
    rating: 5,
    title: 'Llegó perfecta',
    text: 'Venía envuelta en papel y cartón reciclado, sin un solo plástico. Ya he pedido dos más para regalar.',
  },
  {
    author: 'Marina, Bilbao',
    date: '2 de octubre de 2026',
    rating: 4,
    title: 'Preciosa, algo más pequeña de lo que pensaba',
    text: 'Los 300 ml son una taza de desayuno normal, no un tazón. Por lo demás, encantada: el esmalte no se ha manchado nada.',
  },
]

/** Ficha de producto de una tienda: la acción principal debe alcanzarse con teclado. */
export function ProductPage({ fixed }: ExamplePageProps) {
  const id = useId()
  const [items, setItems] = useState(0)
  const add = () => setItems((count) => count + 1)

  return (
    <div className="product-page">
      <div className="product-page__topbar">
        <p>Envío gratis a partir de 60 € · Cada pieza se hace por encargo</p>
        <p className="product-page__topbar-aside">
          <PinIcon />
          Taller abierto en Talavera de la Reina, de martes a sábado
        </p>
      </div>
      <header className="product-page__header">
        <a className="product-page__brand" href={`#${id}-product`}>
          <span aria-hidden="true" className="product-page__logo" />
          Barro y Fuego
        </a>
        <nav aria-label="Principal" className="product-page__nav">
          <a href={`#${id}-product`} aria-current="page">
            Vajilla
          </a>
          <a href={`#${id}-related`}>Jarras y teteras</a>
          <a href={`#${id}-workshop`}>Cursos de torno</a>
          <a href={`#${id}-workshop`}>El taller</a>
          <a href={`#${id}-shipping`}>Envíos</a>
          <a href={`#${id}-contact`}>Contacto</a>
        </nav>
        <div className="product-page__tools">
          <a className="product-page__tool" href={`#${id}-related`}>
            <SearchIcon />
            Buscar
          </a>
          <a className="product-page__tool" href={`#${id}-contact`}>
            <UserIcon />
            Mi cuenta
          </a>
          <p className="product-page__cart">
            <BagIcon />
            Cesta ({items})
          </p>
        </div>
      </header>
      <main id={`${id}-product`}>
        <nav aria-label="Migas de pan" className="product-page__crumbs">
          <ol>
            <li>
              <a href={`#${id}-product`}>Inicio</a>
            </li>
            <li>
              <a href={`#${id}-product`}>Vajilla</a>
            </li>
            <li>
              <a href={`#${id}-related`}>Tazas y cuencos</a>
            </li>
            <li aria-current="page">Taza de gres esmaltada</li>
          </ol>
        </nav>
        <div className="product-page__main">
          <div className="product-page__gallery">
            <p className="product-page__badge">Hornada de noviembre</p>
            <img
              className="product-page__image"
              src={mug}
              width="480"
              height="400"
              alt="Taza de gres verde salvia con asa redondeada."
            />
            <div className="product-page__shots">
              <GlazeDetail />
              <MugInUse />
            </div>
          </div>
          <div className="product-page__info">
            <p className="product-page__category">Vajilla · Hecho a mano</p>
            <h1>Taza de gres esmaltada</h1>
            <p className="product-page__rating">
              <Stars value={4.8} id={`${id}-rating`} />
              <span className="visually-hidden">Valoración media:</span>
              <span>4,8 de 5</span>
              <a href={`#${id}-reviews`}>37 opiniones</a>
            </p>
            <p className="product-page__price">
              24 €<span>IVA incluido</span>
            </p>
            <p>
              Torneada a mano en nuestro taller. Capacidad de 300 ml, apta para
              lavavajillas y microondas. Cada pieza tiene pequeñas variaciones
              de esmalte.
            </p>
            <dl className="product-page__variant">
              <div>
                <dt>Esmalte</dt>
                <dd>
                  <span aria-hidden="true" className="product-page__swatch" />
                  Verde salvia
                </dd>
              </div>
              <div>
                <dt>Disponibilidad</dt>
                <dd>Quedan 6 piezas de esta hornada</dd>
              </div>
            </dl>
            <ul className="product-page__specs">
              <li>300 ml</li>
              <li>Apta para lavavajillas</li>
              <li>Apta para microondas</li>
            </ul>
            <a href={`#${id}-shipping`}>Consultar envíos y devoluciones</a>
            <div className="product-page__actions">
              {fixed ? (
                <button
                  type="button"
                  className="product-page__add"
                  data-fix="add-to-cart"
                  onClick={add}
                >
                  Añadir a la cesta
                </button>
              ) : (
                // Barrera deliberada: solo responde al puntero. El arreglo es el button.
                // biome-ignore lint/a11y/useKeyWithClickEvents: Barrera de teclado que enseña el ejemplo.
                // biome-ignore lint/a11y/noStaticElementInteractions: El div conserva la barrera que se demuestra.
                <div
                  className="product-page__add"
                  data-fix="add-to-cart"
                  onClick={add}
                >
                  Añadir a la cesta
                </div>
              )}
            </div>
            <p className="product-page__result" role="status">
              {items > 0
                ? `Taza añadida. Tienes ${items} ${items === 1 ? 'artículo' : 'artículos'} en la cesta.`
                : ''}
            </p>
            <a href={`#${id}-contact`}>¿Dudas sobre la pieza? Escríbenos</a>
            <ul className="product-page__promises">
              <li>
                <TruckIcon />
                Sale del taller en 3 días laborables
              </li>
              <li>
                <ReturnIcon />
                30 días para devolverla
              </li>
              <li>
                <HandIcon />
                Firmada con el sello del taller en la base
              </li>
            </ul>
          </div>
        </div>
        <section
          aria-labelledby={`${id}-details-title`}
          className="product-page__details"
        >
          <div className="product-page__details-text">
            <h2 id={`${id}-details-title`}>Sobre esta pieza</h2>
            <p>
              Torneamos cada taza con gres de La Bisbal y la esmaltamos a mano
              con nuestro verde salvia, que se queda más claro en los bordes y
              se oscurece donde se acumula. Por eso no hay dos iguales.
            </p>
            <p>
              Dejamos el pie sin esmaltar para que se vea el barro: es áspero al
              tacto y protege la mesa.
            </p>
          </div>
          <dl className="product-page__facts">
            <div>
              <dt>Medidas</dt>
              <dd>9 cm de alto · 8,5 cm de diámetro</dd>
            </div>
            <div>
              <dt>Peso</dt>
              <dd>320 g aproximadamente</dd>
            </div>
            <div>
              <dt>Material</dt>
              <dd>Gres cocido a 1.240 °C</dd>
            </div>
            <div>
              <dt>Cuidados</dt>
              <dd>
                Lavavajillas y microondas. Evita los cambios bruscos de
                temperatura.
              </dd>
            </div>
            <div>
              <dt>Hecha en</dt>
              <dd>Talavera de la Reina (Toledo)</dd>
            </div>
          </dl>
        </section>
        <section
          id={`${id}-shipping`}
          aria-labelledby={`${id}-shipping-title`}
          className="product-page__section"
        >
          <h2 id={`${id}-shipping-title`}>Envíos y devoluciones</h2>
          <ul className="product-page__perks">
            <li>
              <strong>Entrega en 48–72 horas</strong>
              Enviamos en días laborables, con embalaje sin plástico.
            </li>
            <li>
              <strong>30 días para devolverla</strong>
              Si no es lo que esperabas, devuelve la pieza sin usar.
            </li>
            <li>
              <strong>Si llega rota, te mandamos otra</strong>
              Escríbenos con una foto y la reponemos sin coste.
            </li>
          </ul>
        </section>
        <section
          id={`${id}-reviews`}
          aria-labelledby={`${id}-reviews-title`}
          className="product-page__reviews"
        >
          <div className="product-page__reviews-summary">
            <h2 id={`${id}-reviews-title`}>Opiniones</h2>
            <p className="product-page__score">
              <span className="product-page__score-value">4,8</span>
              <span>
                <Stars value={4.8} id={`${id}-summary`} />
                <span className="visually-hidden">de 5.</span>
                37 opiniones de compra verificada
              </span>
            </p>
            <p>El 95 % volvería a comprarla.</p>
          </div>
          <ul className="product-page__review-list">
            {reviews.map((review, index) => (
              <li key={review.author}>
                <article
                  aria-labelledby={`${id}-review-${index}`}
                  className="product-page__review"
                >
                  <p className="product-page__review-rating">
                    <Stars
                      value={review.rating}
                      id={`${id}-review-stars-${index}`}
                    />
                    <span className="visually-hidden">
                      {review.rating} de 5 estrellas.
                    </span>
                  </p>
                  <h3 id={`${id}-review-${index}`}>{review.title}</h3>
                  <p>{review.text}</p>
                  <p className="product-page__review-meta">
                    {review.author} · {review.date}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </section>
        <section
          id={`${id}-related`}
          aria-labelledby={`${id}-related-title`}
          className="product-page__related"
        >
          <h2 id={`${id}-related-title`}>Del mismo taller</h2>
          <ul className="product-page__cards">
            {related.map(({ name, price, note, Shot }) => (
              <li key={name} className="product-page__card">
                <Shot />
                <a href={`#${id}-related`}>{name}</a>
                <p>
                  <span className="product-page__card-price">{price}</span>
                  {note}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section
          id={`${id}-workshop`}
          aria-labelledby={`${id}-workshop-title`}
          className="product-page__workshop"
        >
          <h2 id={`${id}-workshop-title`}>Aprende a tornear con nosotras</h2>
          <p>
            Cursos de iniciación de cuatro sábados, en grupos de seis personas.
            Te llevas a casa las piezas que hagas.
          </p>
          <a href={`#${id}-contact`}>Ver las fechas de los cursos de torno</a>
        </section>
      </main>
      <footer id={`${id}-contact`} className="product-page__footer">
        <div className="product-page__footer-grid">
          <div>
            <p className="product-page__footer-brand">
              <span aria-hidden="true" className="product-page__logo" />
              Barro y Fuego
            </p>
            <p>
              Taller de cerámica de Inés y Carmen. Vajilla de gres torneada a
              mano desde 2016.
            </p>
          </div>
          <nav
            aria-labelledby={`${id}-footer-shop`}
            className="product-page__footer-col"
          >
            <h2 id={`${id}-footer-shop`} className="product-page__footer-title">
              Tienda
            </h2>
            <ul>
              <li>
                <a href={`#${id}-product`}>Vajilla</a>
              </li>
              <li>
                <a href={`#${id}-related`}>Jarras y teteras</a>
              </li>
              <li>
                <a href={`#${id}-related`}>Tarjetas regalo</a>
              </li>
            </ul>
          </nav>
          <nav
            aria-labelledby={`${id}-footer-help`}
            className="product-page__footer-col"
          >
            <h2 id={`${id}-footer-help`} className="product-page__footer-title">
              Ayuda
            </h2>
            <ul>
              <li>
                <a href={`#${id}-shipping`}>Plazos de envío</a>
              </li>
              <li>
                <a href={`#${id}-shipping`}>Cambios y devoluciones</a>
              </li>
              <li>
                <a href={`#${id}-details-title`}>Cuidado de las piezas</a>
              </li>
            </ul>
          </nav>
          <div className="product-page__footer-col">
            <h2 className="product-page__footer-title">El taller</h2>
            <address>
              Calle del Horno 8
              <br />
              45600 Talavera de la Reina
              <br />
              hola@barroyfuego.example
            </address>
            <p>Martes a sábado, de 10:00 a 14:00 y de 17:00 a 20:00</p>
          </div>
        </div>
        <div className="product-page__legal">
          <p>© 2026 Barro y Fuego</p>
          <ul aria-label="Legal">
            <li>
              <a href={`#${id}-contact`}>Aviso legal</a>
            </li>
            <li>
              <a href={`#${id}-contact`}>Privacidad</a>
            </li>
            <li>
              <a href={`#${id}-contact`}>Cookies</a>
            </li>
          </ul>
          <p>Tienda de demostración: no se realizan compras.</p>
        </div>
      </footer>
    </div>
  )
}
