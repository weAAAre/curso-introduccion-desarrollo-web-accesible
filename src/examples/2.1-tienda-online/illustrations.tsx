/*
 * Fotos e iconos de Barro y Fuego dibujados en SVG. Los iconos acompañan
 * siempre a un texto visible, así que se ocultan al árbol de accesibilidad.
 */
import type { ReactNode } from 'react'

interface IconProps {
  children: ReactNode
}

function Icon({ children }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="product-page__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

export const SearchIcon = () => (
  <Icon>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </Icon>
)

export const UserIcon = () => (
  <Icon>
    <circle cx="12" cy="8.5" r="3.8" />
    <path d="M4.5 20c1.2-3.8 4.2-5.6 7.5-5.6s6.3 1.8 7.5 5.6" />
  </Icon>
)

export const BagIcon = () => (
  <Icon>
    <path d="M5 8h14l-1.2 12H6.2z" />
    <path d="M9 10V7a3 3 0 0 1 6 0v3" />
  </Icon>
)

export const TruckIcon = () => (
  <Icon>
    <path d="M3 6h11v10H3zM14 9.5h4l3 3.5v3h-7" />
    <circle cx="7" cy="17.5" r="1.8" />
    <circle cx="17.5" cy="17.5" r="1.8" />
  </Icon>
)

export const ReturnIcon = () => (
  <Icon>
    <path d="M9 7 4.5 11.5 9 16" />
    <path d="M5 11.5h9.5a5 5 0 0 1 0 10H11" />
  </Icon>
)

export const HandIcon = () => (
  <Icon>
    <path d="M12 3c3 3.5 5 6.4 5 9.2a5 5 0 0 1-10 0C7 9.4 9 6.5 12 3z" />
    <path d="M10 13.5c.3 1.3 1.2 2 2.4 2.2" />
  </Icon>
)

export const PinIcon = () => (
  <Icon>
    <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.3" />
  </Icon>
)

const STAR =
  'M12 2.5l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 16.9 6.3 20l1.2-6.4-4.7-4.4 6.4-.8z'

/** Cinco estrellas; `value` rellena las que correspondan (admite décimas). */
export function Stars({ value, id }: { value: number; id: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="product-page__stars"
      viewBox="0 0 120 24"
    >
      <defs>
        <clipPath id={`${id}-fill`}>
          <rect width={value * 24} height="24" />
        </clipPath>
      </defs>
      {[0, 1, 2, 3, 4].map((index) => (
        <path
          key={index}
          d={STAR}
          transform={`translate(${index * 24} 0)`}
          className="product-page__star-empty"
        />
      ))}
      <g clipPath={`url(#${id}-fill)`}>
        {[0, 1, 2, 3, 4].map((index) => (
          <path
            key={index}
            d={STAR}
            transform={`translate(${index * 24} 0)`}
            className="product-page__star-full"
          />
        ))}
      </g>
    </svg>
  )
}

/** Foto de detalle: el esmalte salvia escurrido sobre el gres sin esmaltar. */
export function GlazeDetail() {
  return (
    <svg
      role="img"
      aria-label="Detalle del esmalte salvia que escurre sobre el gres crudo del pie."
      className="product-page__shot"
      viewBox="0 0 240 200"
    >
      <defs>
        <linearGradient id="bf-detail-glaze" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#a9c1a3" />
          <stop offset=".5" stopColor="#86a281" />
          <stop offset="1" stopColor="#5f7b5b" />
        </linearGradient>
        <pattern
          id="bf-detail-speck"
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3" cy="3" r="1.1" fill="#6e5236" opacity=".5" />
          <circle cx="9" cy="8" r=".8" fill="#6e5236" opacity=".4" />
        </pattern>
      </defs>
      <rect width="240" height="200" fill="#d7c1a0" />
      <rect width="240" height="200" fill="url(#bf-detail-speck)" />
      <path
        d="M0 0h240v104c-14 6-18 34-30 34s-12-26-26-26-14 44-30 44-12-30-28-30-16 22-30 22-14-36-30-36-16 20-28 20S20 98 0 104z"
        fill="url(#bf-detail-glaze)"
      />
      <path
        d="M0 104c20-6 26 30 38 30s12-20 28-20 14 36 30 36 14-22 30-22 12 30 28 30 16-44 30-44 14 26 26 26 16-28 30-34"
        fill="none"
        stroke="#3f5a3b"
        strokeWidth="2.5"
        opacity=".5"
      />
      <g fill="#fff" opacity=".28">
        <ellipse cx="60" cy="40" rx="34" ry="8" transform="rotate(-12 60 40)" />
        <circle cx="168" cy="62" r="5" />
        <circle cx="182" cy="70" r="3" />
      </g>
      <g fill="#4d6849" opacity=".35">
        <circle cx="120" cy="30" r="2" />
        <circle cx="96" cy="70" r="1.6" />
        <circle cx="200" cy="34" r="1.8" />
      </g>
    </svg>
  )
}

/** Foto de uso: la taza con café sobre una mesa de madera, vista desde arriba. */
export function MugInUse() {
  return (
    <svg
      role="img"
      aria-label="La taza llena de café sobre la mesa, vista desde arriba, junto a una cuchara de madera."
      className="product-page__shot"
      viewBox="0 0 240 200"
    >
      <defs>
        <radialGradient id="bf-use-coffee" cx=".45" cy=".4" r=".6">
          <stop offset="0" stopColor="#8a5a35" />
          <stop offset=".7" stopColor="#5a3519" />
          <stop offset="1" stopColor="#3f2410" />
        </radialGradient>
      </defs>
      <rect width="240" height="200" fill="#c8a57b" />
      <g stroke="#a8835a" strokeWidth="1.4" fill="none" opacity=".6">
        <path d="M0 40c80-4 160 6 240 0" />
        <path d="M0 96c60 4 150-6 240 2" />
        <path d="M0 150c90-6 170 4 240-2" />
      </g>
      <rect
        x="12"
        y="118"
        width="96"
        height="66"
        rx="4"
        fill="#efe5d4"
        transform="rotate(-8 60 150)"
      />
      <ellipse cx="128" cy="108" rx="64" ry="64" fill="#5d4128" opacity=".3" />
      <path
        d="M178 84c34-6 40 40 4 44"
        fill="none"
        stroke="#7b9676"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <circle cx="122" cy="102" r="60" fill="#8fa98a" />
      <circle
        cx="122"
        cy="102"
        r="60"
        fill="none"
        stroke="#b9cdb3"
        strokeWidth="6"
      />
      <circle cx="122" cy="102" r="48" fill="url(#bf-use-coffee)" />
      <path
        d="M98 92c8-10 30-14 44-6"
        fill="none"
        stroke="#c79a6b"
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".6"
      />
      <path
        d="M30 30l60 40"
        stroke="#a0784c"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <ellipse
        cx="24"
        cy="26"
        rx="12"
        ry="8"
        fill="#a0784c"
        transform="rotate(34 24 26)"
      />
    </svg>
  )
}

/** Fotos de las piezas relacionadas: decorativas, el nombre va en el enlace. */
function Shot({ children, ground }: { children: ReactNode; ground: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="product-page__card-shot"
      viewBox="0 0 240 180"
    >
      <rect width="240" height="180" fill={ground} />
      <rect y="132" width="240" height="48" fill="#000" opacity=".05" />
      {children}
    </svg>
  )
}

export const BowlShot = () => (
  <Shot ground="#ece2d2">
    <ellipse cx="120" cy="140" rx="78" ry="10" fill="#4a3322" opacity=".2" />
    <path d="M48 82h144c0 38-30 58-72 58S48 120 48 82z" fill="#86a281" />
    <path
      d="M60 116c30 8 90 8 120 0-8 14-32 24-60 24s-52-10-60-24z"
      fill="#d6c0a0"
    />
    <ellipse cx="120" cy="82" rx="72" ry="14" fill="#b6cbb0" />
    <ellipse cx="120" cy="84" rx="62" ry="9" fill="#58744f" />
    <path
      d="M66 92c4 18 14 30 26 36"
      stroke="#fff"
      strokeWidth="5"
      strokeLinecap="round"
      opacity=".25"
      fill="none"
    />
  </Shot>
)

export const PlateShot = () => (
  <Shot ground="#e6dccb">
    <ellipse cx="124" cy="134" rx="86" ry="14" fill="#4a3322" opacity=".2" />
    <ellipse cx="120" cy="112" rx="88" ry="26" fill="#d4bf9e" />
    <ellipse cx="120" cy="106" rx="88" ry="26" fill="#94ae8e" />
    <ellipse cx="120" cy="106" rx="62" ry="17" fill="#7f9a7a" />
    <ellipse cx="120" cy="104" rx="56" ry="13" fill="#a3bb9d" />
    <path
      d="M58 98c18-10 50-14 80-12"
      stroke="#fff"
      strokeWidth="4"
      strokeLinecap="round"
      opacity=".35"
      fill="none"
    />
  </Shot>
)

export const JugShot = () => (
  <Shot ground="#efe5d4">
    <ellipse cx="122" cy="146" rx="52" ry="8" fill="#4a3322" opacity=".2" />
    <path
      d="M150 64c34 0 34 52 2 56"
      fill="none"
      stroke="#9a4421"
      strokeWidth="11"
      strokeLinecap="round"
    />
    <path
      d="M92 40h56l-6 14c18 14 22 38 18 62-3 18-14 28-40 28s-37-10-40-28c-4-24 0-48 18-62l-10-14z"
      fill="#b5542a"
    />
    <path d="M90 40h60l6-6H84z" fill="#c9693f" />
    <path d="M84 34l-10-4 12 10z" fill="#c9693f" />
    <path d="M86 120c4 16 16 24 34 24s30-8 34-24" fill="#d8c1a0" />
    <path
      d="M100 66c-8 16-10 36-6 54"
      stroke="#fff"
      strokeWidth="6"
      strokeLinecap="round"
      opacity=".25"
      fill="none"
    />
  </Shot>
)

export const TeapotShot = () => (
  <Shot ground="#e9e0cf">
    <ellipse cx="120" cy="146" rx="70" ry="9" fill="#4a3322" opacity=".2" />
    <path d="M70 88c-20-4-34 6-40 22 10-6 22-6 30 0z" fill="#3e3a33" />
    <path
      d="M172 82c26-4 30 50 0 52"
      fill="none"
      stroke="#3e3a33"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <path
      d="M66 96c0-28 24-42 54-42s54 14 54 42c0 30-22 48-54 48s-54-18-54-48z"
      fill="#4b463d"
    />
    <ellipse cx="120" cy="58" rx="34" ry="8" fill="#5c564b" />
    <circle cx="120" cy="46" r="7" fill="#5c564b" />
    <path d="M70 118c10 18 28 26 50 26s40-8 50-26" fill="#cdb79a" />
    <path
      d="M84 76c-8 12-10 26-6 38"
      stroke="#fff"
      strokeWidth="6"
      strokeLinecap="round"
      opacity=".18"
      fill="none"
    />
  </Shot>
)
