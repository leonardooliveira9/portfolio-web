import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    institution: "FACULDADE SENAC",
    degree: "Analise e Desenvolvimento de Sistemas",
    period: "2025 - 2026",
    status: "Cursando",
    semester: "4o Semestre",
  },
  {
    institution: "Centro Educacional Sao Francisco",
    degree: "Ensino Medio Completo",
    period: "2023",
    status: "Concluido",
  },
]

const courses = [
  "Pacote Office",
  "Digitacao",
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
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm">{"// formacao"}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Formacao & Cursos</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Academic Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Formacao Academica</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-medium text-foreground">{edu.degree}</h4>
                      <Badge
                        variant={edu.status === "Cursando" ? "default" : "secondary"}
                        className={edu.status === "Cursando" ? "bg-primary/20 text-primary border-primary/30" : ""}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    <p className="text-primary font-mono text-sm mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.period}</p>
                    {edu.semester && (
                      <p className="text-muted-foreground text-xs mt-2 font-mono">
                        Semestre atual: {edu.semester}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Cursos Complementares</h3>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-5">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <span className="w-3 h-3 rounded-full bg-destructive/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-muted-foreground font-mono text-xs">cursos.list</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm font-mono bg-muted text-muted-foreground rounded hover:text-foreground hover:bg-muted/80 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
