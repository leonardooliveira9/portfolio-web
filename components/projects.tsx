"use client"

import { useState } from "react"
import { ExternalLink, Github, Folder, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "ServiceNow UI Builder",
    description:
      "Desenvolvimento de interfaces customizadas usando UI Builder para melhorar a experiencia do usuario em portais de servico.",
    tags: ["ServiceNow", "UI Builder", "JavaScript", "CSS"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Automacao de Workflows",
    description: "Criacao e otimizacao de workflows automatizados no ServiceNow para processos de TI e atendimento.",
    tags: ["ServiceNow", "Workflow", "JavaScript", "Automation"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Service Portal Customizado",
    description: "Desenvolvimento de portal de servicos personalizado com widgets customizados e integracao com APIs.",
    tags: ["ServiceNow", "Service Portal", "AngularJS", "Bootstrap"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Dashboards e Relatorios",
    description: "Criacao de dashboards interativos e relatorios personalizados para visualizacao de metricas e KPIs.",
    tags: ["ServiceNow", "Dashboards", "Reporting", "Data Visualization"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Integracao REST API",
    description: "Desenvolvimento de integracoes REST para conectar ServiceNow com sistemas externos e automatizar processos.",
    tags: ["REST API", "JavaScript", "Integration", "JSON"],
    githubUrl: "#",
    liveUrl: null,
    featured: false,
  },
  {
    id: 6,
    title: "Script Includes & Business Rules",
    description: "Criacao de scripts server-side para logica de negocios complexa e automacao de processos.",
    tags: ["JavaScript", "GlideRecord", "Business Rules", "Script Include"],
    githubUrl: "#",
    liveUrl: null,
    featured: false,
  },
]

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-20 bg-card/30 relative">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,200,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-mono text-sm">// projetos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-mono">
            <span className="text-primary">{"{"}</span> Meus Projetos <span className="text-primary">{"}"}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Uma selecao dos projetos que desenvolvi. Cada um representa um desafio unico e uma oportunidade de aprendizado.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2 truncate">
                  ~/projects/{project.title.toLowerCase().replace(/\s+/g, "-")}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <Folder className="h-10 w-10 text-primary" />
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Ver codigo no GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Ver projeto online"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors font-mono">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Effect - View Project */}
                <div
                  className={`absolute inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="text-center p-6">
                    <div className="font-mono text-xs text-primary mb-2">$ open project</div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 font-mono">{project.title}</h4>
                    <div className="flex flex-col gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-md font-mono text-sm hover:bg-primary/90 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Ver Projeto
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-card border border-border text-foreground rounded-md font-mono text-sm hover:border-primary hover:text-primary transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Ver Codigo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 4 && (
          <div className="mt-10 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="font-mono border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
            >
              {showAll ? (
                <>
                  <span className="text-muted-foreground mr-2">$</span>
                  Mostrar menos
                </>
              ) : (
                <>
                  <span className="text-muted-foreground mr-2">$</span>
                  Ver todos os projetos
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
