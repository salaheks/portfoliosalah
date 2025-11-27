"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Éviter le flash de contenu non stylé
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors focus-visible-ring"
        aria-label="Changer le thème"
      >
        <Sun className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors focus-visible-ring"
      aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}


