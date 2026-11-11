import { useId, useState } from 'react'
import type { ExamplePageProps } from '../types'
import mug from './mug.svg'
import './product-page.css'

/** Ficha de producto de una tienda: la acción principal debe alcanzarse con teclado. */
export function ProductPage({ fixed }: ExamplePageProps) {
  const id = useId()
  const [items, setItems] = useState(0)
  const add = () => setItems((count) => count + 1)

  return (
    <div className="product-page">
      <p className="product-page__promo">
        Envío gratis a partir de 60 € · Cada pieza se hace por encargo
      </p>
      <header className="product-page__header">
        <a className="product-page__brand" href={`#${id}-product`}>
          <span aria-hidden="true" className="product-page__logo" />
          Barro y Fuego
        </a>
        <nav aria-label="Principal" className="product-page__nav">
          <a href={`#${id}-product`}>Tienda</a>
          <a href={`#${id}-shipping`}>Envíos</a>
          <a href={`#${id}-contact`}>Contacto</a>
        </nav>
        <p className="product-page__cart">Cesta ({items})</p>
      </header>
      <main id={`${id}-product`} className="product-page__main">
        <img
          className="product-page__image"
          src={mug}
          width="480"
          height="400"
          alt="Taza de gres verde salvia con asa redondeada."
        />
        <div className="product-page__info">
          <p className="product-page__category">Vajilla · Hecho a mano</p>
          <h1>Taza de gres esmaltada</h1>
          <p className="product-page__price">24 €</p>
          <p>
            Torneada a mano en nuestro taller. Capacidad de 300 ml, apta para
            lavavajillas y microondas. Cada pieza tiene pequeñas variaciones de
            esmalte.
          </p>
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
        </div>
      </main>
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
      <footer id={`${id}-contact`} className="product-page__footer">
        <p>Barro y Fuego · Taller de cerámica · hola@barroyfuego.example</p>
        <p>Tienda de demostración: no se realizan compras.</p>
      </footer>
    </div>
  )
}
