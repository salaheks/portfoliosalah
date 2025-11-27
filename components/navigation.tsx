"use client"

import { useState, useEffect, useRef } from "react"
import { Download, ChevronDown } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"

export default function Navigation() {
  const [active, setActive] = useState("about")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cvMenuOpen, setCvMenuOpen] = useState(false)
  const cvMenuRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (id: string) => {
    setActive(id)
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // Détection automatique de la section active au scroll
  useEffect(() => {
    const sectionIds = ['about', 'skills', 'projects', 'experience', 'contact']
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150 // Offset pour la navigation fixe
      
      // Vérifier depuis la fin pour trouver la première section visible
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i]
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActive(sectionId)
            break
          }
        }
      }
    }

    // Attendre que le DOM soit chargé
    const timer = setTimeout(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll, { passive: true })
    }, 100)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleDownload = (language: 'fr' | 'en') => {
    const filename = language === 'fr' 
      ? 'CV ELKIHEL SALAH-EDDINE-FR.pdf'
      : 'CV ELKIHEL SALAH-EDDINE-AN.pdf'
    
    const link = document.createElement('a')
    link.href = `/${encodeURIComponent(filename)}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setCvMenuOpen(false)
    setMobileMenuOpen(false)
  }

  // Fermer le menu CV quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(event.target as Node)) {
        setCvMenuOpen(false)
      }
    }

    if (cvMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [cvMenuOpen])

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:fixed md:top-0 md:left-0 md:right-0 md:z-40 md:flex md:items-center md:justify-between md:px-6 md:py-4 md:bg-background/80 md:backdrop-blur md:border-b md:border-border">
        <button
          onClick={() => scrollToSection("about")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity focus-visible-ring rounded-lg px-2 py-1"
          aria-label="Retour à l'accueil"
        >
          <h2 className="text-xl font-bold text-primary">ELKIHEL</h2>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Full-Stack Developer</p>
        </button>

        <div className="hidden lg:flex items-center gap-12">
          <button
            onClick={() => scrollToSection("about")}
            className={`text-sm font-medium transition-colors focus-visible-ring rounded px-2 py-1 ${
              active === "about" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Section À propos"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={`text-sm font-medium transition-colors focus-visible-ring rounded px-2 py-1 ${
              active === "skills" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Section Compétences"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`text-sm font-medium transition-colors focus-visible-ring rounded px-2 py-1 ${
              active === "projects" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Section Projets"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className={`text-sm font-medium transition-colors focus-visible-ring rounded px-2 py-1 ${
              active === "experience" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Section Expérience"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-sm font-medium transition-colors focus-visible-ring rounded px-2 py-1 ${
              active === "contact" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Section Contact"
          >
            Contact
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <div className="relative" ref={cvMenuRef}>
            <button
              onClick={() => setCvMenuOpen(!cvMenuOpen)}
              className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <Download className="w-4 h-4" />
              Télécharger CV
              <ChevronDown className={`w-3 h-3 transition-transform ${cvMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {cvMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-lg py-2 min-w-[180px] z-50">
                <button
                  onClick={() => handleDownload('fr')}
                  className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                >
                  CV Français (PDF)
                </button>
                <button
                  onClick={() => handleDownload('en')}
                  className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                >
                  English CV (PDF)
                </button>
              </div>
            )}
          </div>
          <ThemeToggle />
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 text-primary focus-visible-ring rounded-lg"
        aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-background border-b border-border">
          <div className="flex flex-col gap-4 p-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Contact
            </button>
            <div className="pt-4 border-t border-border">
              <div className="mb-4">
                <button
                  onClick={() => setCvMenuOpen(!cvMenuOpen)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-primary inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Télécharger CV
                  <ChevronDown className={`w-3 h-3 transition-transform ${cvMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {cvMenuOpen && (
                  <div className="mt-2 ml-6 space-y-2">
                    <button
                      onClick={() => handleDownload('fr')}
                      className="block text-left text-xs text-muted-foreground hover:text-primary"
                    >
                      CV Français (PDF)
                    </button>
                    <button
                      onClick={() => handleDownload('en')}
                      className="block text-left text-xs text-muted-foreground hover:text-primary"
                    >
                      English CV (PDF)
                    </button>
                  </div>
                )}
              </div>
              <div className="flex gap-4 items-center">
                <ThemeToggle />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
