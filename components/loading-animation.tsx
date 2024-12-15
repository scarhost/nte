"use client"

import { useState, useEffect } from "react"
import { Sun } from 'lucide-react'

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="animate-spin">
        <Sun className="h-16 w-16 text-yellow-500" />
      </div>
    </div>
  )
}

