"use client"

import { useState, useEffect } from "react"

export function RoleCycler() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Engineering", "Entrepreneurship", "Software Development"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-2xl md:text-3xl text-muted-foreground flex items-center justify-center md:justify-start mx-auto md:mx-0 h-12">
      <div className="relative inline-block">
        {/* Hidden spacer to define width based on longest text */}
        <span className="invisible whitespace-nowrap">Software Development</span>
        {roles.map((role, index) => (
          <span
            key={role}
            className="absolute inset-0 whitespace-nowrap transition-opacity duration-500"
            style={{ opacity: index === currentRole ? 1 : 0 }}
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  )
}
