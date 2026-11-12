/*
 * Carteles de Cine Alameda dibujados en SVG. El título de cada película está
 * siempre escrito al lado, así que los carteles son decorativos.
 */
import type { ReactNode } from 'react'

function Poster({
  children,
  className = 'cinema-booking__card-poster',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 200 300"
    >
      {children}
    </svg>
  )
}

/** Cartel principal: un faro al atardecer sobre un mar en calma. */
export function LighthousePoster() {
  return (
    <Poster className="cinema-booking__poster">
      <defs>
        <linearGradient id="ca-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1f2f55" />
          <stop offset=".35" stopColor="#5b4a7e" />
          <stop offset=".6" stopColor="#d9805a" />
          <stop offset=".72" stopColor="#f5c56c" />
        </linearGradient>
        <linearGradient id="ca-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2d6b80" />
          <stop offset="1" stopColor="#0c2737" />
        </linearGradient>
        <radialGradient id="ca-sun" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#fff3c4" />
          <stop offset=".45" stopColor="#ffd98a" />
          <stop offset="1" stopColor="#ffd98a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ca-beam" x1="0" x2="1">
          <stop offset="0" stopColor="#fff4c8" stopOpacity=".75" />
          <stop offset="1" stopColor="#fff4c8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="200" height="300" fill="url(#ca-sky)" />
      <g fill="#fff" opacity=".7">
        <circle cx="30" cy="24" r=".9" />
        <circle cx="72" cy="14" r=".7" />
        <circle cx="150" cy="30" r="1" />
        <circle cx="178" cy="12" r=".7" />
        <circle cx="112" cy="40" r=".6" />
      </g>
      <circle cx="140" cy="176" r="46" fill="url(#ca-sun)" />
      <circle cx="140" cy="182" r="17" fill="#fff0bd" />
      <rect y="196" width="200" height="104" fill="url(#ca-sea)" />
      <g stroke="#f6c66e" strokeLinecap="round" opacity=".7">
        <path d="M118 204h44" strokeWidth="2.5" />
        <path d="M124 214h32" strokeWidth="2" />
        <path d="M130 224h20" strokeWidth="1.6" />
        <path d="M134 234h12" strokeWidth="1.2" />
      </g>
      <path d="M60 106 200 84v34z" fill="url(#ca-beam)" />
      <path d="M0 214c18-30 46-40 78-36 14 2 22 12 30 36z" fill="#16222c" />
      <path d="M45 116h18l5 66H40z" fill="#f8efe1" />
      <path d="M44 130h20l1.1 14H42.9z" fill="#b3283f" />
      <path d="M42.2 156h23.6l1.1 14H41.1z" fill="#b3283f" />
      <path d="M58 116h5l5 66h-6z" fill="#000" opacity=".18" />
      <rect x="42" y="102" width="24" height="14" rx="2" fill="#2b1620" />
      <rect x="46" y="105" width="16" height="9" rx="1" fill="#ffe9b0" />
      <path d="M40 102h28l-14-12z" fill="#2b1620" />
      <path d="M38 114h32v4H38z" fill="#2b1620" />
      <path d="M0 236c30-8 60 2 90-2s70-10 110-4v70H0z" fill="#0b1f2b" />
      <path d="M92 206v-12l3-5 3 5v12z" fill="#0b1f2b" />
      <text
        x="100"
        y="262"
        textAnchor="middle"
        fill="#f8efe1"
        fontFamily="Fraunces Variable, Georgia, serif"
        fontSize="22"
        fontWeight="600"
        letterSpacing="1"
      >
        LA OLA
      </text>
      <text
        x="100"
        y="284"
        textAnchor="middle"
        fill="#f8efe1"
        fontFamily="Fraunces Variable, Georgia, serif"
        fontSize="22"
        fontWeight="600"
        letterSpacing="1"
      >
        TRANQUILA
      </text>
      <text
        x="100"
        y="22"
        textAnchor="middle"
        fill="#f8efe1"
        fontFamily="Atkinson Hyperlegible, sans-serif"
        fontSize="7.5"
        letterSpacing="2"
        opacity=".85"
      >
        UNA PELÍCULA DE NURIA SALCEDO
      </text>
    </Poster>
  )
}

export const SummerPoster = () => (
  <Poster>
    <rect width="200" height="300" fill="#f2c14e" />
    <circle cx="150" cy="70" r="34" fill="#fff1c1" />
    <path d="M0 196c40-16 90-18 200-6v110H0z" fill="#3d8fa3" />
    <path d="M0 220c50-10 120-8 200 2v80H0z" fill="#2a6b7c" />
    <path d="M0 250h200v50H0z" fill="#f4dfb4" />
    <path d="M70 250c0-40 18-58 30-58s30 18 30 58z" fill="#e2574c" />
    <path d="M100 192v58" stroke="#8a3229" strokeWidth="2" />
    <circle cx="58" cy="262" r="8" fill="#3d2c26" />
    <path d="M52 270h12l4 22H48z" fill="#3d2c26" />
  </Poster>
)

export const PlatformPoster = () => (
  <Poster>
    <rect width="200" height="300" fill="#0f1c33" />
    <circle cx="44" cy="54" r="16" fill="#e8e3c8" opacity=".9" />
    <path d="M0 210h200v90H0z" fill="#16233d" />
    <path d="M20 300 92 210h16l72 90z" fill="#1f2f4d" />
    <path d="M60 300 98 210M140 300 102 210" stroke="#3a4f73" strokeWidth="2" />
    <rect x="120" y="120" width="60" height="90" fill="#24375a" />
    <rect x="128" y="132" width="16" height="12" fill="#f3c24f" />
    <rect x="152" y="132" width="16" height="12" fill="#f3c24f" opacity=".5" />
    <path d="M62 236v-30a8 8 0 0 1 16 0v30z" fill="#0a1222" />
    <circle cx="70" cy="196" r="6" fill="#0a1222" />
    <path d="M70 236 40 300h60z" fill="#f3c24f" opacity=".12" />
  </Poster>
)

export const PaperGiantPoster = () => (
  <Poster>
    <rect width="200" height="300" fill="#e9eef2" />
    <path d="M0 240c40-20 80-10 120-18s60-6 80 0v78H0z" fill="#9ccf9f" />
    <path
      d="M100 70 150 120 130 230H70L50 120z"
      fill="#fff"
      stroke="#c9d3db"
      strokeWidth="2"
    />
    <path d="M100 70v160M50 120h100" stroke="#dbe2e8" strokeWidth="2" />
    <circle cx="86" cy="108" r="5" fill="#2d3a45" />
    <circle cx="114" cy="108" r="5" fill="#2d3a45" />
    <path
      d="M90 126c6 5 14 5 20 0"
      stroke="#2d3a45"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="150" cy="232" r="7" fill="#e2574c" />
    <path d="M144 238h12l2 20h-16z" fill="#e2574c" />
    <path
      d="M20 40c10-6 20-6 30 0M150 30c8-4 16-4 24 0"
      stroke="#9fb0bf"
      strokeWidth="2"
      fill="none"
    />
  </Poster>
)

export const RootsPoster = () => (
  <Poster>
    <rect width="200" height="300" fill="#2f3a24" />
    <rect y="150" width="200" height="150" fill="#5a3d27" />
    <path
      d="M100 150c-4-40-40-60-60-70 30 4 50 20 60 40 10-30 40-50 70-56-30 16-50 40-56 86z"
      fill="#7fae5a"
    />
    <g stroke="#c9a37a" strokeWidth="3" fill="none" strokeLinecap="round">
      <path d="M100 150c0 40-30 50-50 90" />
      <path d="M100 150c4 30 34 46 46 96" />
      <path d="M100 160c-2 50 6 80 0 120" />
      <path d="M76 196c-14 4-24 14-30 26M126 206c14 2 24 10 32 22" />
    </g>
  </Poster>
)
