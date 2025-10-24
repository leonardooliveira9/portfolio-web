import { Card, CardContent } from "@/components/ui/card"
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
    skills: ["Python", "REST APIs", "Low Code Development", "JavaScript"],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MySQL", "SQL Queries", "Database Design"],
  },
  {
    icon: Wrench,
    title: "ServiceNow",
    skills: [
      "UI Builder",
      "Workflow",
      "Service Portal",
      "Scripting (JavaScript)",
      "Dashboards",
      "Platform Development",
    ],
  },
  {
    icon: Code2,
    title: "Ferramentas & Produtividade",
    skills: ["Pacote Office", "Excel", "Git", "VS Code", "Scrum", "Kanban"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Trabalho em Equipe", "Comunicação", "Comprometimento", "Foco em Resultados", "Produtividade"],
  },
]

const skillLevels = [
  { name: "Pacote Office", level: 80 },
  { name: "Informática", level: 100 },
  { name: "Comunicação", level: 100 },
  { name: "Trabalho em Equipe", level: 100 },
  { name: "Produtividade", level: 100 },
  { name: "Autonomia", level: 60 },
  { name: "Foco em Resultados", level: 80 },
  { name: "Comprometimento", level: 100 },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Habilidades & Tecnologias</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ferramentas e tecnologias que utilizo no dia a dia
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">{category.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="text-muted-foreground flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Níveis de Proficiência</h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {skillLevels.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
