"use client"

import { useRef } from "react"

import { useEffect, useState } from "react"

interface HubSpotFormProps {
  portalId: string
  formId: string
  region?: string
  className?: string
}

export function HubSpotForm({ portalId, formId, region = "na2", className = "" }: HubSpotFormProps) {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || scriptLoadedRef.current) return

    const script = document.createElement("script")
    script.src = `https://js-${region}.hsforms.net/forms/embed/${portalId}.js`
    script.defer = true
    script.charset = "utf-8"

    script.onload = () => {
      console.log("[v0] HubSpot embed script loaded")
      scriptLoadedRef.current = true
      setLoading(false)
    }

    script.onerror = () => {
      console.error("[v0] Failed to load HubSpot embed script")
      setLoading(false)
    }

    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [mounted, portalId, region])

  if (!mounted) {
    return (
      <div className={`min-h-[400px] flex items-center justify-center ${className}`}>
        <div className="text-slate-400">Loading form...</div>
      </div>
    )
  }

  return (
    <div className={className}>
      {loading && (
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#004bab] border-r-transparent mb-4"></div>
            <p className="text-slate-600">Loading form...</p>
          </div>
        </div>
      )}
      <div
        className={`hs-form-frame ${loading ? "hidden" : ""}`}
        data-region={region}
        data-form-id={formId}
        data-portal-id={portalId}
      />
    </div>
  )
}
