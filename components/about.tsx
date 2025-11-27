"use client"

import { useEffect, useRef } from "react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])
  return (
    <section ref={sectionRef} id="about-section" className="px-6 md:px-16 py-24 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">À propos de moi</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Qui suis-je ?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Élève ingénieur en informatique avec une solide expérience en développement web complet. Ma passion pour
              la technologie m'a permis de maîtriser des stack variées et d'acquérir une expertise en backend, frontend,
              data intelligence et DevOps.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Actuellement en formation à l'EMSI Marrakech, j'accumule une expérience concrète à travers plusieurs
              stages en entreprise où j'ai contribué à des projets d'envergure : chatbots IA, tableaux de bord Power BI,
              applications ERP.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Ce qui me motive</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">
                  Développement full-stack et architecture logicielle robuste
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">Optimisation des performances et scalabilité</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">Intelligence artificielle appliquée et automation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">DevOps et infrastructure cloud</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
