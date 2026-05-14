"use client"

import { Card } from "@/components/ui/card"
import { User, MapPin, GraduationCap, Briefcase, Code2, Sparkles, Target, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function FadeInSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

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

export function About() {
  const stats = [
    { icon: User, label: "Idade", value: "20 anos" },
    { icon: MapPin, label: "Localizacao", value: "Sao Sebastiao, DF" },
    { icon: GraduationCap, label: "Formacao", value: "ADS (Cursando)" },
    { icon: Briefcase, label: "Cargo", value: "Analista de Testes Jr" },
  ]

  const highlights = [
    { icon: Code2, text: "Desenvolvimento Web & ServiceNow" },
    { icon: Target, text: "Foco em Resultados e Qualidade" },
    { icon: Zap, text: "Automacao e Otimizacao de Processos" },
    { icon: Sparkles, text: "Aprendizado Continuo" },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.03),transparent_50%)]" />
      
      <div className="container mx-auto max-w-5xl relative">
        <div className="space-y-12">
          <FadeInSection>
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm">{"// sobre-mim"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Quem sou eu
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
            </div>
          </FadeInSection>

          <div className="grid lg:grid-cols-5 gap-8">
            <FadeInSection className="lg:col-span-3 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Sou desenvolvedor, atualmente <span className="text-foreground font-medium">Analista de Testes Jr</span> na{" "}
                <span className="text-primary font-semibold">BB TECNOLOGIA E SERVICOS</span>, onde
                trabalho diariamente com a plataforma ServiceNow. Tenho um perfil comunicativo e trabalho muito bem em
                equipe, sendo extremamente paciente e comprometido com os projetos que participo.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Atualmente cursando <span className="text-foreground font-medium">Analise e Desenvolvimento de Sistemas</span> na{" "}
                <span className="text-primary font-semibold">FACULDADE SENAC</span>, tenho experiencia pratica
                com ServiceNow (UI Builder, Workflow, Service Portal, Scripting e Dashboards), desenvolvimento web
                (HTML, CSS, JavaScript), Python e bancos de dados relacionais.
              </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                    >
                      <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item.text}</span>
                    </div>
                  )
                })}
              </div>
              
              {/* Terminal style message */}
              <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>cat motivacao.txt</span>
                </div>
                <p className="mt-2 text-foreground">
                  Aprendo rapido e gosto de adquirir conhecimentos e novas experiencias constantemente.
                  Busco sempre entregar o melhor resultado e superar expectativas.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection className="lg:col-span-2">
              <Card className="bg-card border-border p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="space-y-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <div 
                        key={index} 
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-all duration-300 group cursor-default"
                      >
                        <div className="p-2.5 rounded-md bg-primary/10 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</p>
                          <p className="text-foreground font-medium">{stat.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}
