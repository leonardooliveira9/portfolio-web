import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "BB TECNOLOGIA E SERVIÇOS",
    role: "Estagiário - ServiceNow Developer",
    period: "2024 - Atual",
    description:
      "Atuação como estagiário desenvolvendo soluções na plataforma ServiceNow, trabalhando com diversas funcionalidades e módulos da plataforma.",
    highlights: [
      "UI Builder - Desenvolvimento de interfaces",
      "Workflow - Automação de processos",
      "Service Portal - Criação de portais customizados",
      "Scripting - JavaScript para customizações",
      "Dashboards - Visualização de dados e relatórios",
      "Low Code Development",
    ],
    duration: "1 ano",
  },
  {
    company: "Jovem Aprendiz do Brasil",
    role: "Jovem Aprendiz",
    period: "Junho 2021 - Junho 2023",
    description:
      "Atuação na área de TI com diversas responsabilidades relacionadas a suporte, desenvolvimento e organização.",
    highlights: [
      "Organização de documentos",
      "Confecção de crachás",
      "Treinamento em low code",
      "Criação de sites",
      "Diversas tarefas da área de TI",
    ],
    duration: "2 anos",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Experiência Profissional</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Minha trajetória profissional e principais conquistas
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-1">
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge variant="secondary" className="w-fit">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.period}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{exp.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3">Principais Atividades:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
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
