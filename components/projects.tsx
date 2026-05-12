"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, Github, Folder, ChevronRight, Sparkles, Building2, Workflow, LayoutDashboard, Globe, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}

const projects = [
  {
    id: 1,
    title: "Organograma Corporativo ServiceNow",
    description: "Desenvolvimento de sistema de visualizacao hierarquica corporativa integrado ao ServiceNow, permitindo navegacao intuitiva pela estrutura organizacional.",
    tags: ["ServiceNow", "UI Builder", "GlideAjax", "JavaScript"],
    icon: Building2,
    githubUrl: null,
    liveUrl: null,
    featured: true,
    highlight: true,
  },
  {
    id: 2,
    title: "Sistema de Hierarquia Organizacional",
    description: "Criacao de modulo completo para gerenciamento de hierarquias, com suporte a multiplos niveis e integracao com dados de RH.",
    tags: ["ServiceNow", "Script Include", "Business Rules", "SQL"],
    icon: Workflow,
    githubUrl: null,
    liveUrl: null,
    featured: true,
    highlight: true,
  },
  {
    id: 3,
    title: "Busca Inteligente de Funcionarios",
    description: "Implementacao de sistema de busca avancada com filtros dinamicos, autocomplete e integracao com GlideAjax para performance otimizada.",
    tags: ["ServiceNow", "GlideAjax", "REST API", "UX"],
    icon: Globe,
    githubUrl: null,
    liveUrl: null,
    featured: true,
    highlight: true,
  },
  {
    id: 4,
    title: "Dashboards e Relatorios Interativos",
    description: "Criacao de dashboards customizados com KPIs em tempo real, graficos interativos e exportacao de relatorios para tomada de decisao.",
    tags: ["ServiceNow", "Performance Analytics", "Reporting", "Data Viz"],
    icon: LayoutDashboard,
    githubUrl: null,
    liveUrl: null,
    featured: true,
    highlight: false,
  },
  {
    id: 5,
    title: "Portfolio Web Pessoal",
    description: "Desenvolvimento de portfolio responsivo com React, Next.js e TailwindCSS, integracao com API do GitHub e design moderno.",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    icon: Code2,
    githubUrl: "https://github.com/leonardooliveira9/portfolio-web",
    liveUrl: null,
    featured: true,
    highlight: false,
  },
  {
    id: 6,
    title: "Automacao de Workflows",
    description: "Criacao e otimizacao de workflows automatizados no ServiceNow para processos de TI e atendimento ao cliente.",
    tags: ["ServiceNow", "Workflow", "Flow Designer", "Automation"],
    icon: Workflow,
    githubUrl: null,
    liveUrl: null,
    featured: false,
    highlight: false,
  },
]

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <FadeInSection>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-mono text-sm">// projetos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-mono">
              <span className="text-primary">{"{"}</span> Meus Projetos <span className="text-primary">{"}"}</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/20 rounded-full mt-4" />
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Uma selecao dos projetos que desenvolvi, focando em solucoes corporativas com ServiceNow e desenvolvimento web moderno.
            </p>
          </div>
        </FadeInSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayedProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <FadeInSection key={project.id} delay={index * 100}>
                <div
                  className={`group relative bg-card border rounded-lg overflow-hidden transition-all duration-500 h-full ${
                    project.highlight 
                      ? "border-primary/30 shadow-lg shadow-primary/5" 
                      : "border-border hover:border-primary/30"
                  } hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1`}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Highlight badge */}
                  {project.highlight && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <Sparkles className="h-3 w-3 text-primary" />
                        <span className="text-xs text-primary font-mono">Destaque</span>
                      </div>
                    </div>
                  )}

                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500 transition-colors" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 transition-colors" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-500 transition-colors" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono ml-2 truncate">
                      ~/projects/{project.title.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                            aria-label="Ver codigo no GitHub"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                            aria-label="Ver projeto online"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors font-mono">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 bg-primary/10 text-primary rounded border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                      hoveredId === project.id ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="text-center p-6">
                      <div className="font-mono text-xs text-primary mb-2">$ open project</div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 font-mono">{project.title}</h4>
                      <div className="flex flex-col gap-3">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-md font-mono text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Ver Projeto
                          </a>
                        ) : (
                          <span className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-muted text-muted-foreground rounded-md font-mono text-sm">
                            <Building2 className="h-4 w-4" />
                            Projeto Corporativo
                          </span>
                        )}
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-card border border-border text-foreground rounded-md font-mono text-sm hover:border-primary hover:text-primary transition-all duration-200 hover:scale-105"
                          >
                            <Github className="h-4 w-4" />
                            Ver Codigo
                          </a>
                        ) : (
                          <span className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-card border border-border text-muted-foreground rounded-md font-mono text-sm">
                            <Github className="h-4 w-4" />
                            Codigo Interno
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            )
          })}
        </div>

        {/* Show More Button */}
        {projects.length > 4 && (
          <FadeInSection delay={500}>
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="font-mono border-primary/50 text-primary hover:bg-primary/10 hover:text-primary group"
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
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </FadeInSection>
        )}
      </div>
    </section>
  )
}
