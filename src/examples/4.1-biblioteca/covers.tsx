/*
 * Portadas de la Biblioteca Municipal dibujadas en SVG. El título del libro
 * está en el enlace de al lado, así que las portadas son decorativas.
 */

export type Motif = 'moon' | 'pot' | 'photo' | 'hills' | 'lines' | 'vase'

function MotifShape({ motif, ink }: { motif: Motif; ink: string }) {
  switch (motif) {
    case 'moon':
      return (
        <>
          <circle cx="40" cy="30" r="12" fill={ink} />
          <circle cx="45" cy="26" r="11" fill="currentColor" />
          <g fill={ink}>
            <circle cx="16" cy="18" r="1.2" />
            <circle cx="22" cy="40" r="1" />
            <circle cx="50" cy="48" r="1.2" />
          </g>
        </>
      )
    case 'pot':
      return (
        <>
          <path d="M14 30h32c0 12-7 18-16 18s-16-6-16-18z" fill={ink} />
          <path d="M10 30h40" stroke={ink} strokeWidth="3" />
          <path
            d="M24 22c-3-4 3-6 0-10M34 22c-3-4 3-6 0-10"
            stroke={ink}
            strokeWidth="2"
            fill="none"
          />
        </>
      )
    case 'photo':
      return (
        <>
          <rect x="12" y="14" width="36" height="30" fill={ink} />
          <rect x="15" y="17" width="30" height="20" fill="currentColor" />
          <path d="M15 37l9-10 6 6 5-4 10 8z" fill={ink} />
        </>
      )
    case 'hills':
      return (
        <>
          <path d="M6 48c10-16 20-20 28-10s16 4 20-2v14H6z" fill={ink} />
          <circle
            cx="18"
            cy="48"
            r="5"
            fill="none"
            stroke={ink}
            strokeWidth="2"
          />
          <circle
            cx="38"
            cy="48"
            r="5"
            fill="none"
            stroke={ink}
            strokeWidth="2"
          />
          <path
            d="M18 48l8-8h8l4 8M26 40l-2-4"
            stroke={ink}
            strokeWidth="2"
            fill="none"
          />
        </>
      )
    case 'lines':
      return (
        <g stroke={ink} strokeWidth="2.5" strokeLinecap="round">
          <path d="M14 18h32M14 26h24M14 34h28M14 42h18" />
        </g>
      )
    case 'vase':
      return (
        <path
          d="M24 14h12l-2 6c8 4 10 12 8 20-2 6-6 8-12 8s-10-2-12-8c-2-8 0-16 8-20z"
          fill={ink}
        />
      )
  }
}

export function BookCover({
  color,
  ink,
  motif,
}: {
  color: string
  ink: string
  motif: Motif
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="library-login__cover"
      viewBox="0 0 60 80"
      style={{ color }}
    >
      <rect width="60" height="80" rx="2" fill={color} />
      <MotifShape motif={motif} ink={ink} />
      <rect x="10" y="58" width="40" height="3" rx="1.5" fill={ink} />
      <rect
        x="10"
        y="65"
        width="26"
        height="2"
        rx="1"
        fill={ink}
        opacity=".7"
      />
      <rect width="5" height="80" fill="#000" opacity=".18" />
      <rect x="5" width="1" height="80" fill="#fff" opacity=".25" />
    </svg>
  )
}
