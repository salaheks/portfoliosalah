"use client"

export default function Projects() {
  const projects = [
    {
      title: "Tableau de Bord Power BI - Windows Edition ASM",
      description:
        "Dashboard interactif pour le monitoring en temps réel des opérations. Modélisation avancée avec création de KPI pour enrôlements, livraisons et restitutions avec synchronisation automatique quotidienne.",
      technologies: ["Power BI", "Power Query", "SQL", "Modélisation de données"],
      role: "Développeur BI",
      period: "2024-2025",
      impact: "Réduction de 80% des rapports manuels",
    },
    {
      title: "Chatbot IA pour Plateforme Académique",
      description:
        "Assistant conversationnel intelligent intégrant traitement du langage naturel. Calendrier automatisé pour améliorer l'engagement des utilisateurs et réduire les demandes manuelles.",
      technologies: ["Botpress", "Vectorshift AI", "Calendly", "WordPress", "JavaScript"],
      role: "Développeur Full-Stack",
      period: "2024",
      impact: "Amélioration de 35% des interactions",
    },
    {
      title: "Application Web Gestion Trading",
      description:
        "Platform complète pour l'orchestration des opérations de trading avec interface moderne et processus optimisés. Système robuste pour la gestion efficace des flux.",
      technologies: ["PHP Laravel 8", "MySQL", "Bootstrap", "JavaScript"],
      role: "Développeur Full-Stack",
      period: "2021",
      impact: "Amélioration de 40% de l'efficacité",
    },
    {
      title: "Application Desktop Gestion IT",
      description:
        "Système complet d'inventaire et gestion d'équipements avec interface intuitive. Automatisation du suivi du parc informatique permettant une meilleure allocation des ressources.",
      technologies: ["Visual Studio", "SQL Server", "UML", "WPF", "C#"],
      role: "Développeur",
      period: "2022",
      impact: "Automatisation du suivi complet",
    },
  ]

  return (
    <section id="projects" className="px-6 md:px-16 py-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Projets Phares</h2>
          <p className="text-muted-foreground text-lg">Découvrez mes réalisations les plus significatives</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group border-l-4 border-primary pl-8 pb-8 hover:border-accent smooth-transition hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-between items-start mb-4 flex-col md:flex-row md:items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary smooth-transition">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.role} • {project.period}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">{project.description}</p>

              {project.impact && (
                <div className="mb-4 inline-block px-3 py-1 bg-background border border-primary/30 rounded-full hover-lift smooth-transition">
                  <p className="text-primary text-sm font-medium">✓ {project.impact}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-background text-muted-foreground rounded-full border border-border hover:border-primary hover:text-primary smooth-transition hover-lift"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
