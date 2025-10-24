export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name:
    | "bolt"
    | "graph"
    | "shield"
    | "megaphone"
    | "users"
    | "automation"
    | "palette"
    | "chart"
    | "store"
    | "factory"
    | "cart"
    | "tag"
    | "home"
    | "car"
  className?: string
}) {
  switch (name) {
    case "bolt":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M13 2L3 14h7l-1 8L21 8h-7l-1-6z" />
        </svg>
      )
    case "graph":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 20h18" />
          <path d="M6 16l4-4 3 3 5-7" />
        </svg>
      )
    case "shield":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
        </svg>
      )
    case "megaphone":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 10v4l10-3V7L3 10z" />
          <path d="M13 7v8" />
          <path d="M15 14c1 1 2 2 4 2" />
          <path d="M6 14l1 5h3" />
        </svg>
      )
    case "users":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="9" cy="8" r="3" />
          <path d="M2 20c0-3.5 3-6 7-6" />
          <circle cx="17" cy="10" r="3" />
          <path d="M22 20c0-2.8-2.5-5-5.5-5" />
        </svg>
      )
    case "automation":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <path d="M8 6h8M6 8v8M8 18h8M18 8v8" />
        </svg>
      )
    case "palette":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3a9 9 0 100 18 2 2 0 012-2h2a3 3 0 000-6h-1a4 4 0 01-3-1.2" />
          <circle cx="7.5" cy="10.5" r="1" />
          <circle cx="9.5" cy="6.5" r="1" />
          <circle cx="14.5" cy="6.5" r="1" />
          <circle cx="16.5" cy="10.5" r="1" />
        </svg>
      )
    case "chart":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 20h18" />
          <rect x="6" y="10" width="3" height="7" />
          <rect x="11" y="7" width="3" height="10" />
          <rect x="16" y="12" width="3" height="5" />
        </svg>
      )
    case "store":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 7h16l-1 4H5L4 7z" />
          <path d="M6 11v7h12v-7" />
        </svg>
      )
    case "factory":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 20h18V8l-5 3V8l-5 3V8L3 11v9z" />
        </svg>
      )
    case "cart":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="17" cy="20" r="1.5" />
          <path d="M3 4h2l2 12h10l2-8H6" />
        </svg>
      )
    case "tag":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 12l9 9 9-9-9-9H7z" />
          <circle cx="9" cy="9" r="1.5" />
        </svg>
      )
    case "home":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 11l9-7 9 7v9H3z" />
          <path d="M9 20v-6h6v6" />
        </svg>
      )
    case "car":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 13l2-5h12l2 5" />
          <path d="M6 13h12" />
          <circle cx="7" cy="17" r="1.5" />
          <circle cx="17" cy="17" r="1.5" />
        </svg>
      )
    default:
      return null
  }
}

export function Feature({
  icon,
  title,
  desc,
  bullets,
}: {
  icon: Parameters<typeof Icon>[0]["name"]
  title: string
  desc: string
  bullets: string[]
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:border-[#004bab] transition-all bg-white">
      <Icon name={icon} className="h-12 w-12 text-[#004bab] mb-5" />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-5">{desc}</p>
      <ul className="space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="text-[#004bab] font-bold mt-0.5">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-xl bg-[#004bab]/10 grid place-items-center font-bold text-[#004bab] text-lg">
          {n}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  )
}

export function KPI({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-6 bg-white">
      <div className="text-3xl font-bold text-[#004bab]">{value}</div>
      <div className="text-sm text-slate-700 font-medium mt-2">{label}</div>
      {note ? <div className="text-xs text-slate-500 mt-1">{note}</div> : null}
    </div>
  )
}

export function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-lg transition-shadow">
      <div className="text-base font-bold text-slate-900 mb-3">{q}</div>
      <div className="text-sm text-slate-600 leading-relaxed">{a}</div>
    </div>
  )
}

export function GrowthGraph() {
  return (
    <svg viewBox="0 0 560 240" className="w-full h-56">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#004bab" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#004bab" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="560" height="240" fill="#f8fafc" rx="12" />
      <g stroke="#e2e8f0" strokeWidth="1">
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={i} x1="40" y1={40 + i * 40} x2="520" y2={40 + i * 40} />
        ))}
      </g>
      {/* Area curve */}
      <path
        d="M40 180 C 120 160, 160 150, 200 140 C 240 130, 280 115, 320 120 C 360 125, 420 90, 520 70 L 520 200 L 40 200 Z"
        fill="url(#g1)"
      />
      {/* Line */}
      <path
        d="M40 180 C 120 160, 160 150, 200 140 C 240 130, 280 115, 320 120 C 360 125, 420 90, 520 70"
        fill="none"
        stroke="#004bab"
        strokeWidth="2.5"
      />
      {/* Dots */}
      {[
        { x: 200, y: 140 },
        { x: 320, y: 120 },
        { x: 420, y: 90 },
        { x: 520, y: 70 },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="4" fill="#004bab" />
        </g>
      ))}
      {/* Axis labels */}
      <text x="40" y="220" fontSize="10" fill="#64748b">
        Week 1
      </text>
      <text x="180" y="220" fontSize="10" fill="#64748b">
        Week 2
      </text>
      <text x="320" y="220" fontSize="10" fill="#64748b">
        Week 3
      </text>
      <text x="460" y="220" fontSize="10" fill="#64748b">
        Week 4
      </text>
    </svg>
  )
}
