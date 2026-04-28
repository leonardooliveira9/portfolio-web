import { Code2, Database, Layout, Server, Wrench, Users } from "lucide-react"

const skillCategories = [
  {
    icon: Layout,
    title: "Front-end",
    skills: ["HTML5", "CSS3", "Responsive Design", "UI/UX", "WordPress"],
  },
  {
    icon: Server,
    title: "Back-end",
    skills: ["Python", "REST APIs", "Low Code", "JavaScript"],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MySQL", "SQL Queries", "Database Design"],
  },
  {
    icon: Wrench,
    title: "ServiceNow",
    skills: ["UI Builder", "Workflow", "Service Portal", "Scripting", "Dashboards"],
  },
  {
    icon: Code2,
    title: "Ferramentas",
    skills: ["Git", "VS Code", "Scrum", "Kanban", "Pacote Office"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Trabalho em Equipe", "Comunicacao", "Comprometimento", "Foco em Resultados"],
  },
]

const techStack = [
  { name: "ServiceNow", level: 90 },
  { name: "JavaScript", level: 75 },
  { name: "Python", level: 70 },
  { name: "SQL", level: 80 },
  { name: "HTML/CSS", level: 85 },
  { name: "Git", level: 70 },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm">{"// skills"}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Tecnologias & Habilidades</h2>
          </div>

          {/* Tech Stack Progress */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-muted-foreground font-mono text-xs">tech-stack.json</span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {techStack.map((tech, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm text-foreground">{tech.name}</span>
                    <span className="text-xs text-primary font-mono">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-700 rounded-full"
                      style={{ width: `${tech.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Categories Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded hover:text-foreground transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
