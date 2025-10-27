"use client"

export function GrowthGraph() {
  return (
    <div className="relative overflow-hidden rounded-2xl">

    <img src="Loyalty-Network-2.png" className="object-contain" alt="graph"/>


      {/* <svg viewBox="0 0 400 200" className="w-full h-full">
        
        <line x1="40" y1="20" x2="40" y2="180" stroke="#e2e8f0" strokeWidth="2" />
        <line x1="40" y1="180" x2="380" y2="180" stroke="#e2e8f0" strokeWidth="2" />

        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="40" y1={20 + i * 40} x2="380" y2={20 + i * 40} stroke="#f1f5f9" strokeWidth="1" />
        ))}

        <polyline
          points="60,160 120,140 180,110 240,85 300,60 360,35"
          fill="none"
          stroke="#004bab"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <polyline
          points="60,170 120,155 180,130 240,105 300,80 360,55"
          fill="none"
          stroke="#FFA500"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <polyline
          points="60,175 120,165 180,145 240,125 300,100 360,75"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {[60, 120, 180, 240, 300, 360].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={160 - i * 25} r="4" fill="#004bab" />
            <circle cx={x} cy={170 - i * 23} r="4" fill="#FFA500" />
            <circle cx={x} cy={175 - i * 20} r="4" fill="#60a5fa" />
          </g>
        ))}
      </svg> */}

      {/* Legend */}
      {/* <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#004bab]" />
          <span className="text-slate-600">Installs</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FFA500]" />
          <span className="text-slate-600">Signups</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#60a5fa]" />
          <span className="text-slate-600">Repeat Txn</span>
        </div>
      </div> */}
    </div>
  )
}
