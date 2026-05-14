"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, Layout, Server, Wrench, Users, ChevronRight, Sparkles } from "lucide-react"

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

const skillsByLevel = {
  avancado: [
    { name: "ServiceNow", description: "UI Builder, Workflows, Service Portal" },
    { name: "HTML/CSS", description: "Semantico, Responsivo, Acessivel" },
    { name: "SQL", description: "Queries, Joins, Otimizacao" },
  ],
  intermediario: [
    { name: "JavaScript", description: "ES6+, DOM, Async" },
    { name: "Python", description: "Scripts, Automacao, APIs" },
    { name: "Git", description: "Versionamento, Branches, PRs" },
    { name: "REST APIs", description: "Integracoes, JSON, HTTP" },
  ],
  aprendendo: [
    { name: "React/Next.js", description: "Componentes, Hooks, SSR" },
    { name: "TypeScript", description: "Tipagem, Interfaces" },
    { name: "Node.js", description: "Backend, Express" },
  ],
}

const skillCategories = [
  {
    icon: Wrench,
    title: "ServiceNow",
    skills: ["UI Builder", "Workflow", "Service Portal", "Scripting", "Dashboards", "GlideRecord"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Layout,
    title: "Front-end",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Server,
    title: "Back-end",
    skills: ["Python", "REST APIs", "Node.js", "Low Code"],
    color: "from-green-500/20 to-green-500/5",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MySQL", "SQL Queries", "Database Design"],
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: Code2,
    title: "Ferramentas",
    skills: ["Git", "VS Code", "Postman", "Figma", "Pacote Office"],
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Trabalho em Equipe", "Comunicacao", "Comprometimento", "Resolucao de Problemas"],
    color: "from-pink-500/20 to-pink-500/5",
  },
]

const techStack = [
  { name: "ServiceNow", level: 90, color: "bg-primary" },
  { name: "HTML/CSS", level: 85, color: "bg-blue-500" },
  { name: "SQL", level: 80, color: "bg-orange-500" },
  { name: "JavaScript", level: 75, color: "bg-yellow-500" },
  { name: "Python", level: 70, color: "bg-green-500" },
  { name: "Git", level: 70, color: "bg-purple-500" },
]

function AnimatedProgress({ level, color, delay = 0 }: { level: number; color: string; delay?: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div ref={ref} className="h-2.5 bg-muted rounded-full overflow-hidden">
      <div
        className={`h-full ${color} transition-all duration-1000 ease-out rounded-full relative`}
        style={{ width: `${width}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(20,184,166,0.03),transparent_50%)]" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="space-y-12">
          <FadeInSection>
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm">{"// skills"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Tecnologias & Habilidades</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
            </div>
          </FadeInSection>

          {/* Skills by Level */}
          <FadeInSection>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Avancado */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <h3 className="font-mono text-sm text-green-400 uppercase tracking-wider">Avancado</h3>
                </div>
                <div className="space-y-3">
                  {skillsByLevel.avancado.map((skill, index) => (
                    <div key={index} className="p-3 rounded-lg bg-green-500/5 border border-green-500/10 hover:border-green-500/30 transition-colors">
                      <p className="font-medium text-foreground">{skill.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Intermediario */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
                  <h3 className="font-mono text-sm text-yellow-400 uppercase tracking-wider">Intermediario</h3>
                </div>
                <div className="space-y-3">
                  {skillsByLevel.intermediario.map((skill, index) => (
                    <div key={index} className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
                      <p className="font-medium text-foreground">{skill.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Em Aprendizado */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-blue-400" />
                  <h3 className="font-mono text-sm text-blue-400 uppercase tracking-wider">Aprendendo</h3>
                </div>
                <div className="space-y-3">
                  {skillsByLevel.aprendendo.map((skill, index) => (
                    <div key={index} className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                      <p className="font-medium text-foreground">{skill.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Tech Stack Progress */}
          <FadeInSection delay={100}>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-muted-foreground font-mono text-xs">proficiency.json</span>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {techStack.map((tech, index) => (
                  <div key={index} className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">{tech.name}</span>
                      <span className="text-xs text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">{tech.level}%</span>
                    </div>
                    <AnimatedProgress level={tech.level} color={tech.color} delay={index * 100} />
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Skill Categories Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <FadeInSection key={index} delay={index * 50}>
                  <div
                    className={`bg-gradient-to-br ${category.color} bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300 group h-full`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-md bg-background/50 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2.5 py-1 text-xs font-mono bg-background/50 text-muted-foreground rounded border border-border/50 hover:text-foreground hover:border-primary/30 transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
