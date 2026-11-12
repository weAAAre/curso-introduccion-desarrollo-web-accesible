/*
 * Fotos pequeñas de Diario de Barrio dibujadas en SVG. Acompañan a un titular
 * que ya dice de qué trata la noticia, así que son decorativas.
 */
import type { ReactNode } from 'react'

function Thumb({ children }: { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="news-article__thumb"
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid slice"
    >
      {children}
    </svg>
  )
}

/** Mercado de abastos: toldos de rayas y cajas de fruta. */
export const MarketThumb = () => (
  <Thumb>
    <rect width="320" height="200" fill="#e9dfcf" />
    <rect y="40" width="320" height="110" fill="#c8b597" />
    <path d="M20 40h280l-12 34H32z" fill="#b3122e" />
    <path
      d="M48 40h28l-4 34H52zM104 40h28l-2 34h-24zM160 40h28l-0 34h-28zM216 40h28l2 34h-28zM272 40h28l-12 34h-14z"
      fill="#fffdf8"
    />
    <rect x="40" y="110" width="70" height="40" fill="#8a6a45" />
    <rect x="125" y="110" width="70" height="40" fill="#8a6a45" />
    <rect x="210" y="110" width="70" height="40" fill="#8a6a45" />
    <g fill="#e2792b">
      <circle cx="56" cy="106" r="9" />
      <circle cx="74" cy="104" r="9" />
      <circle cx="92" cy="106" r="9" />
    </g>
    <g fill="#5f8f3a">
      <circle cx="142" cy="106" r="9" />
      <circle cx="160" cy="102" r="10" />
      <circle cx="178" cy="106" r="9" />
    </g>
    <g fill="#c4283f">
      <circle cx="228" cy="106" r="9" />
      <circle cx="246" cy="104" r="9" />
      <circle cx="264" cy="106" r="9" />
    </g>
    <rect y="150" width="320" height="50" fill="#9c8e7c" />
  </Thumb>
)

/** Biblioteca de barrio con la fachada de ladrillo y una lona del festival. */
export const LibraryThumb = () => (
  <Thumb>
    <rect width="320" height="200" fill="#bcd3e0" />
    <circle cx="262" cy="42" r="18" fill="#fdf1c7" />
    <rect x="60" y="54" width="200" height="120" fill="#b4623f" />
    <path d="M50 54h220l-110-34z" fill="#7d3a24" />
    <g fill="#f1e7d4">
      <rect x="80" y="74" width="30" height="36" rx="15" />
      <rect x="145" y="74" width="30" height="36" rx="15" />
      <rect x="210" y="74" width="30" height="36" rx="15" />
    </g>
    <rect x="140" y="130" width="40" height="44" fill="#3d2a20" />
    <rect x="76" y="120" width="52" height="40" fill="#f3c24f" />
    <path d="M86 134h32M86 144h22" stroke="#1c1a17" strokeWidth="4" />
    <rect y="174" width="320" height="26" fill="#9c8e7c" />
  </Thumb>
)

/** Pista del polideportivo con las líneas pintadas y una canasta. */
export const SportsThumb = () => (
  <Thumb>
    <rect width="320" height="200" fill="#2f6b5a" />
    <rect x="20" y="30" width="280" height="150" fill="#3f8a72" />
    <g stroke="#f6f3ec" strokeWidth="3" fill="none">
      <rect x="20" y="30" width="280" height="150" />
      <path d="M160 30v150" />
      <circle cx="160" cy="105" r="28" />
      <path d="M20 70h44v70H20M300 70h-44v70h44" />
    </g>
    <circle cx="200" cy="120" r="12" fill="#e2792b" />
    <path
      d="M190 116c6 2 14 2 20 0M200 108v24"
      stroke="#7a3510"
      strokeWidth="1.6"
      fill="none"
    />
  </Thumb>
)
