import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    institution: "FACULDADE SENAC",
    degree: "Análise e Desenvolvimento de Sistemas",
    period: "2025 - 2026",
    status: "Cursando",
    semester: "1º Semestre",
    type: "Ensino Superior",
  },
  {
    institution: "Centro Educacional São Francisco",
    degree: "Ensino Médio Completo",
    period: "2023",
    status: "Concluído",
    type: "Ensino Médio",
  },
]

const courses = [
  "Pacote Office",
  "Digitação",
  "Scrum",
  "Kanban",
  "UX Produto",
  "Fotografia",
  "Excel",
  "WordPress",
  "Python",
]

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Formação & Cursos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Minha jornada acadêmica e cursos complementares
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Formação Acadêmica
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-1">
                          <CardTitle>{edu.degree}</CardTitle>
                          <CardDescription className="text-base font-medium text-foreground">
                            {edu.institution}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2">
                          <Badge variant={edu.status === "Cursando" ? "default" : "secondary"}>{edu.status}</Badge>
                          <span className="text-sm text-muted-foreground">{edu.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                    {edu.semester && (
                      <CardContent>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Semestre Atual:</span> {edu.semester}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Cursos Complementares
              </h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course, index) => (
                      <Badge key={index} variant="outline" className="text-sm py-1.5 px-3">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
