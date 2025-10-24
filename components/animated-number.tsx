"use client"

import { useCountUp } from "@/hooks/use-count-up"

interface AnimatedNumberProps {
  value: string
  className?: string
}

export function AnimatedNumber({ value, className = "" }: AnimatedNumberProps) {
  // Parse the value to extract number, prefix, and suffix
  const parseValue = (val: string) => {
    // Handle cases like "200%", "3x", "+40%", "-28%", "12.4k", "2,531", "95%"
    const match = val.match(/^([+-]?)(\d+(?:,\d{3})*(?:\.\d+)?)(k|x|%)?$/i)

    if (!match) {
      return { number: 0, prefix: "", suffix: "" }
    }

    const [, sign, numStr, suffix] = match
    let number = Number.parseFloat(numStr.replace(/,/g, ""))

    // Handle 'k' suffix (thousands)
    if (suffix?.toLowerCase() === "k") {
      number = number * 1000
    }

    const prefix = sign || ""
    const finalSuffix = suffix || ""

    return { number, prefix, suffix: finalSuffix }
  }

  const { number, prefix, suffix } = parseValue(value)

  // Determine decimals based on original value
  const decimals = value.includes(".") ? value.split(".")[1].replace(/[^\d]/g, "").length : 0

  // For 'k' suffix, we need to format back to k
  const displaySuffix = suffix?.toLowerCase() === "k" ? "k" : suffix
  const displayNumber = suffix?.toLowerCase() === "k" ? number / 1000 : number

  const { count, ref } = useCountUp({
    end: displayNumber,
    duration: 2000,
    decimals,
    prefix,
    suffix: displaySuffix,
    separator: ",",
  })

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  )
}
