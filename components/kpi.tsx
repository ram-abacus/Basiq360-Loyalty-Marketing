import { AnimatedNumber } from "./animated-number"

interface KPIProps {
  label: string
  value: string
  note: string
}

export function KPI({ label, value, note }: KPIProps) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4 sm:p-6 bg-white">
      <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mb-2">{label}</div>
      <div className="text-2xl sm:text-3xl font-bold text-[#004bab] mb-1">
        <AnimatedNumber value={value} />
      </div>
      <div className="text-[10px] sm:text-xs text-slate-600">{note}</div>
    </div>
  )
}
