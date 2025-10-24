"use client"

import { useState } from "react"

interface FAQProps {
  id: string
  q: string
  a: string
}

export function FAQ({ id, q, a }: FAQProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
        aria-expanded={open}
        aria-controls={`faq-content-${id}`}
      >
        <span className="font-semibold text-base sm:text-lg">{q}</span>
        <svg
          className={`w-5 h-5 text-[#004bab] transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div id={`faq-content-${id}`} className="px-6 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}
