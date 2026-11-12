/*
 * Fotos de La Cuchara Lenta dibujadas en SVG. Son decorativas: el nombre del
 * plato siempre está escrito al lado.
 */

/** Foto principal: cazuela de barro con lentejas, pan y cuchara de madera. */
export function StewPhoto() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="recipe-page__photo"
      viewBox="0 0 800 420"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="cl-table" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b98d5f" />
          <stop offset="1" stopColor="#8f6440" />
        </linearGradient>
        <radialGradient id="cl-light" cx=".2" cy="0" r="1">
          <stop offset="0" stopColor="#fff6e2" stopOpacity=".55" />
          <stop offset=".6" stopColor="#fff6e2" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cl-stew" cx=".45" cy=".4" r=".6">
          <stop offset="0" stopColor="#9a5b2c" />
          <stop offset=".8" stopColor="#6e3d1b" />
          <stop offset="1" stopColor="#4d2911" />
        </radialGradient>
        <radialGradient id="cl-pot" cx=".4" cy=".3" r=".8">
          <stop offset="0" stopColor="#c9673a" />
          <stop offset="1" stopColor="#8a3a1b" />
        </radialGradient>
        <radialGradient id="cl-shadow" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#3b2414" stopOpacity=".5" />
          <stop offset="1" stopColor="#3b2414" stopOpacity="0" />
        </radialGradient>
        <pattern
          id="cl-grain"
          width="160"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 20c40-6 80 6 160 0"
            stroke="#7a5233"
            strokeWidth="1.2"
            fill="none"
            opacity=".35"
          />
        </pattern>
      </defs>
      <rect width="800" height="420" fill="url(#cl-table)" />
      <rect width="800" height="420" fill="url(#cl-grain)" />
      <g stroke="#6e4a2c" strokeWidth="2" opacity=".5">
        <path d="M0 138h800M0 286h800" />
      </g>
      <path
        d="M520 300l250-40 30 160H560z"
        fill="#efe6d4"
        transform="rotate(-4 640 340)"
      />
      <g stroke="#c8b48f" strokeWidth="3" opacity=".7">
        <path d="M540 320l240-38M548 350l240-38M556 380l240-38" />
      </g>
      <ellipse cx="400" cy="232" rx="210" ry="190" fill="url(#cl-shadow)" />
      <ellipse cx="200" cy="200" rx="34" ry="22" fill="#8a3a1b" />
      <ellipse cx="600" cy="200" rx="34" ry="22" fill="#8a3a1b" />
      <circle cx="395" cy="210" r="170" fill="url(#cl-pot)" />
      <circle
        cx="395"
        cy="210"
        r="170"
        fill="none"
        stroke="#e09062"
        strokeWidth="5"
        opacity=".6"
      />
      <circle cx="395" cy="210" r="146" fill="url(#cl-stew)" />
      <g fill="#a86a38">
        <circle cx="330" cy="170" r="7" />
        <circle cx="352" cy="190" r="6" />
        <circle cx="420" cy="160" r="7" />
        <circle cx="448" cy="196" r="6" />
        <circle cx="380" cy="244" r="7" />
        <circle cx="300" cy="226" r="6" />
        <circle cx="470" cy="240" r="7" />
        <circle cx="414" cy="282" r="6" />
        <circle cx="342" cy="282" r="6" />
        <circle cx="490" cy="180" r="5" />
        <circle cx="280" cy="180" r="5" />
      </g>
      <g fill="#e2792b">
        <circle cx="362" cy="152" r="10" />
        <circle cx="452" cy="222" r="10" />
        <circle cx="318" cy="250" r="9" />
        <circle cx="430" cy="268" r="9" />
      </g>
      <g fill="#d0a052">
        <rect x="390" y="196" width="22" height="12" rx="4" />
        <rect x="300" y="198" width="18" height="10" rx="4" />
        <rect x="462" y="150" width="18" height="10" rx="4" />
      </g>
      <g fill="#6f8f3a">
        <rect x="350" y="214" width="20" height="9" rx="4" />
        <rect x="480" y="208" width="18" height="9" rx="4" />
        <rect x="326" y="132" width="18" height="8" rx="4" />
        <rect x="398" y="242" width="16" height="8" rx="4" />
      </g>
      <g fill="#4f6b2a">
        <path d="M400 120c10-14 26-12 28 0-10 10-20 8-28 0z" />
        <path d="M418 132c14-6 26 2 24 12-12 4-22-2-24-12z" />
      </g>
      <ellipse
        cx="335"
        cy="132"
        rx="60"
        ry="14"
        fill="#fff"
        opacity=".12"
        transform="rotate(-18 335 132)"
      />
      <path
        d="M520 60 640 10"
        stroke="#c0935f"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <ellipse
        cx="500"
        cy="72"
        rx="34"
        ry="22"
        fill="#c0935f"
        transform="rotate(-22 500 72)"
      />
      <g transform="rotate(-10 120 330)">
        <ellipse
          cx="120"
          cy="340"
          rx="96"
          ry="54"
          fill="#5a3418"
          opacity=".3"
        />
        <path
          d="M30 330c0-40 40-62 90-62s90 22 90 62-40 50-90 50-90-10-90-50z"
          fill="#c88a4b"
        />
        <path
          d="M46 330c0-30 34-48 74-48s74 18 74 48-34 38-74 38-74-8-74-38z"
          fill="#f2dfbf"
        />
        <g fill="#d9bf95">
          <circle cx="90" cy="320" r="4" />
          <circle cx="130" cy="312" r="3" />
          <circle cx="150" cy="340" r="4" />
          <circle cx="104" cy="350" r="3" />
        </g>
      </g>
      <rect width="800" height="420" fill="url(#cl-light)" />
      <g
        fill="none"
        stroke="#fffaf0"
        strokeWidth="8"
        strokeLinecap="round"
        opacity=".45"
      >
        <path d="M360 120c-16-24 16-34 0-62" />
        <path d="M410 108c-16-24 16-36 0-66" />
        <path d="M460 122c-14-20 14-30 0-54" />
      </g>
    </svg>
  )
}

/** Miniatura: un plato hondo visto desde arriba, con su guiso y su toque final. */
export function BowlThumb({
  soup,
  rim = '#f6efe2',
  bits,
}: {
  soup: string
  rim?: string
  bits: string[]
}) {
  const spots = [
    [92, 78],
    [130, 70],
    [148, 104],
    [104, 118],
    [120, 92],
    [78, 104],
    [140, 128],
  ]
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="recipe-page__thumb"
      viewBox="0 0 240 180"
    >
      <rect width="240" height="180" fill="#d9c29e" />
      <path d="M0 120h240" stroke="#c4a87f" strokeWidth="2" />
      <ellipse cx="124" cy="100" rx="82" ry="76" fill="#5a3418" opacity=".2" />
      <circle cx="118" cy="94" r="74" fill={rim} />
      <circle
        cx="118"
        cy="94"
        r="74"
        fill="none"
        stroke="#000"
        strokeOpacity=".08"
        strokeWidth="2"
      />
      <circle cx="118" cy="94" r="52" fill={soup} />
      {spots.map(([x, y], index) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={index % 2 ? 5 : 6.5}
          fill={bits[index % bits.length]}
        />
      ))}
      <ellipse
        cx="96"
        cy="66"
        rx="20"
        ry="6"
        fill="#fff"
        opacity=".2"
        transform="rotate(-24 96 66)"
      />
      <path
        d="M196 40 230 6"
        stroke="#b5884f"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <ellipse
        cx="190"
        cy="48"
        rx="12"
        ry="8"
        fill="#b5884f"
        transform="rotate(-45 190 48)"
      />
    </svg>
  )
}
