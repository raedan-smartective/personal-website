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
    <div className="text-2xl md:text-3xl text-muted-foreground flex items-center text-left min-w-[450px] h-12">
      <span className="relative whitespace-nowrap">
        {roles.map((role, index) => (
          <span
            key={role}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentRole ? "opacity-100" : "opacity-0"
            }`}
          >
            {role}
          </span>
        ))}
      </span>
    </div>
  )
}
