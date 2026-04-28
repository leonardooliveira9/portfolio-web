import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "BB TECNOLOGIA E SERVICOS",
    role: "Analista de Testes Jr - ServiceNow Developer",
    period: "2026 - Atual",
    description:
      "Atuacao como Dev desenvolvendo solucoes na plataforma ServiceNow, trabalhando com diversas funcionalidades e modulos da plataforma.",
    highlights: [
      "UI Builder",
      "Workflow",
      "Service Portal",
      "JavaScript",
      "Dashboards",
      "Low Code",
    ],
    duration: "1 ano",
  },
  {
    company: "BB TECNOLOGIA E SERVICOS",
    role: "Estagiario - ServiceNow Developer",
    period: "2024 - 2026",
    description:
      "Atuacao como estagiario desenvolvendo solucoes na plataforma ServiceNow, trabalhando com diversas funcionalidades e modulos da plataforma.",
    highlights: [
      "UI Builder",
      "Workflow",
      "Service Portal",
      "JavaScript",
      "Dashboards",
      "Low Code",
    ],
    duration: "2 anos",
  },
  {
    company: "Jovem Aprendiz do Brasil",
    role: "Jovem Aprendiz",
    period: "2021 - 2023",
    description:
      "Atuacao na area de TI com diversas responsabilidades relacionadas a suporte, desenvolvimento e organizacao.",
    highlights: [
      "Suporte TI",
      "Low Code",
      "Criacao de sites",
      "Documentacao",
      "Treinamentos",
    ],
    duration: "2 anos",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm">{"// experiencia"}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Trajetoria Profissional</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-primary font-mono text-sm">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-primary/30 text-primary font-mono text-xs">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
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
