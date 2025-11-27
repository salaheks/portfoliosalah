"use client"

export default function Experience() {
  const education = [
    {
      institution: "EMSI Marrakech",
      degree: "Cycle Ingénieur en Informatique et Réseaux",
      period: "2023 - 2026",
      description: "Formation complète en développement logiciel, ingénierie réseau et technologies modernes.",
    },
    {
      institution: "ENSA SAFI",
      degree: "Licence en Ingénierie des Systèmes d'Information",
      period: "2021 - 2022",
      description: "Études avancées en architecture logicielle et gestion de projet IT.",
    },
    {
      institution: "ISTA SAFI",
      degree: "Diplôme Technicien Supérieur (DTS)",
      period: "2018 - 2020",
      description: "Formation pratique en programmation et conception de bases de données.",
    },
  ]

  const internships = [
    {
      company: "AXA SERVICES MAROC",
      location: "Rabat",
      period: "Juillet - Août 2025",
      role: "Développeur Full-Stack",
      description: "Développement de solutions informatiques pour une compagnie d'assurance majeure.",
    },
    {
      company: "ERGONOMA",
      location: "Rabat",
      period: "Juillet 2024",
      role: "Développeur",
      description: "Solutions ergonomiques et digitales innovantes.",
    },
    {
      company: "BC SKILLS",
      location: "Safi",
      period: "Avril - Juillet 2022",
      role: "Développeur Backend",
      description: "Amélioration de modules ERP (SAP Business Suite) et optimisation des processus métier.",
    },
    {
      company: "OCP",
      location: "Safi",
      period: "Février - Mars 2020",
      role: "Support IT",
      description: "Support technique et maintenance système.",
    },
  ]

  return (
    <section id="experience" className="px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-primary">Formation & Expérience</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-accent">Formation</h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.institution} className="border-l-2 border-accent pl-6 pb-4">
                  <h4 className="text-lg font-semibold mb-1 text-foreground">{edu.degree}</h4>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-accent">Expérience Professionnelle</h3>
            <div className="space-y-8">
              {internships.map((internship) => (
                <div key={`${internship.company}-${internship.period}`} className="border-l-2 border-accent pl-6 pb-4">
                  <h4 className="text-lg font-semibold mb-1 text-foreground">{internship.role}</h4>
                  <p className="text-primary font-medium mb-2">{internship.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {internship.location} • {internship.period}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{internship.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
