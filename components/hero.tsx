"use client"

import Image from "next/image"
import { getAssetPath } from "@/lib/utils"

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <div>
              <div className="space-y-4 animate-fade-in-up">
                <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-6 smooth-transition">
                  Full-Stack Developer & Engineer
                </p>

                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                  <span className="text-foreground">ELKIHEL</span>
                  <span className="text-foreground ml-3">
                    SALAH EDD
                    <span className="inline-flex items-center gap-0 mx-1 align-middle hover-lift">
                      <Image
                        src={getAssetPath("/linkedin-logo.png")}
                        alt="LinkedIn"
                        width={24}
                        height={24}
                        className="rounded-sm"
                      />
                    </span>
                    E
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl smooth-transition">
                  Actuellement étudiant en dernière année d'ingénierie informatique et réseaux à l'EMSI, je suis à la recherche d'un stage PFE pour appliquer mes compétences techniques et contribuer à des projets concrets au sein d'une équipe professionnelle. Motivé, sérieux et passionné par le développement logiciel, je souhaite évoluer dans un environnement stimulant où je pourrai créer des solutions fiables, performantes et innovantes.
                </p>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href="#projects"
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift smooth-transition"
                  >
                    Découvrir mes projets
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-3 border border-primary text-primary rounded-lg font-medium smooth-transition hover:bg-primary hover:text-primary-foreground"
                  >
                    Me contacter
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="mt-12 grid grid-cols-3 gap-8">
                  <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <p className="text-3xl font-bold text-primary">5+</p>
                    <p className="text-sm text-muted-foreground mt-1">Années d'expérience</p>
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <p className="text-3xl font-bold text-primary">15+</p>
                    <p className="text-sm text-muted-foreground mt-1">Projets réalisés</p>
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <p className="text-3xl font-bold text-primary">8+</p>
                    <p className="text-sm text-muted-foreground mt-1">Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center animate-slide-in">
            <div className="relative w-80 h-80 md:w-96 md:h-96 hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-10 animate-glow"></div>
              <Image
                src={getAssetPath("/salah-elkihel-profile.jpg")}
                alt="Salah Eddine - Full-Stack Developer"
                width={400}
                height={400}
                className="rounded-2xl object-cover w-full h-full border-2 border-primary/20 smooth-transition"
                priority
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
