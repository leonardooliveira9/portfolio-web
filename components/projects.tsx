import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "ServiceNow UI Builder - Interface Customizada",
    description:
      "Desenvolvimento de interfaces customizadas usando UI Builder para melhorar a experiência do usuário em portais de serviço.",
    image: "/servicenow-portal-dashboard.jpg",
    tags: ["ServiceNow", "UI Builder", "JavaScript", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Automação de Workflows",
    description: "Criação e otimização de workflows automatizados no ServiceNow para processos de TI e atendimento.",
    image: "/user-registration-form-web-app.jpg",
    tags: ["ServiceNow", "Workflow", "JavaScript", "Automation"],
    github: "#",
    demo: "#",
  },
  {
    title: "Service Portal Customizado",
    description: "Desenvolvimento de portal de serviços personalizado com widgets customizados e integração com APIs.",
    image: "/analytics-dashboard.png",
    tags: ["ServiceNow", "Service Portal", "AngularJS", "Bootstrap"],
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboards e Relatórios",
    description: "Criação de dashboards interativos e relatórios personalizados para visualização de métricas e KPIs.",
    image: "/api-rest-python-code.jpg",
    tags: ["ServiceNow", "Dashboards", "Reporting", "Data Visualization"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Projetos em Destaque</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Alguns dos projetos que desenvolvi recentemente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
