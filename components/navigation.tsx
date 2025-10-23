"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-playfair font-bold text-xl text-primary hover:opacity-80 transition-opacity">
            Raedan Stephens
          </Link>
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/") ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/experience"
              className={`transition-colors ${
                isActive("/experience")
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className={`transition-colors ${
                isActive("/projects") ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
