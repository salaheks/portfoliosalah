"use client"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "✨",
      skills: ["React.js", "Flutter", "JavaScript/TypeScript", "HTML5/CSS3", "Bootstrap", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Backend & APIs",
      icon: "⚡",
      skills: ["Node.js", "Spring Boot", "PHP (Laravel)", "ASP.NET", "Python", "Java", "REST APIs"],
    },
    {
      title: "Databases & Data",
      icon: "📈",
      skills: ["MySQL", "MongoDB", "Oracle", "SQL Server", "Power BI", "Power Query", "UML/MERISE"],
    },
    {
      title: "DevOps & Infrastructure",
      icon: "🛡️",
      skills: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Linux", "VMware"],
    },
    {
      title: "Mobile & Desktop",
      icon: "📲",
      skills: ["Android Studio", "C++", "WPF", "Visual Studio", "IntelliJ IDEA"],
    },
    {
      title: "Business & Tools",
      icon: "🔧",
      skills: ["WordPress", "SAP", "Figma", "Trello", "Git/GitHub", "Postman"],
    },
  ]

  return (
    <section id="skills" className="px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Expertise Technique</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Une maîtrise complète des technologies modernes du web et des systèmes d'information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg smooth-transition group hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 smooth-transition inline-block">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-6 text-foreground group-hover:text-primary smooth-transition">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-background text-muted-foreground text-sm rounded-full border border-border hover:border-primary hover:text-primary smooth-transition hover-lift"
                  >
                    {skill}
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
