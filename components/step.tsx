interface StepProps {
  n: string
  title: string
  desc: string
}

export function Step({ n, title, desc }: StepProps) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl font-bold text-[#FFA500] mb-3">{n}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  )
}
