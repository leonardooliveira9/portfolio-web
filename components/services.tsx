"use client"

import { Code, TestTube, Smartphone, Globe, Database, Settings, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <TestTube className="h-6 w-6" />,
    title: "Testes de Software",
    description: "Analise e execucao de testes em ServiceNow, garantindo qualidade e confiabilidade do sistema.",
    tags: ["ServiceNow", "QA", "Automacao"],
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Desenvolvimento Web",
    description: "Criacao de aplicacoes web modernas e responsivas utilizando as melhores tecnologias do mercado.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Backend & APIs",
    description: "Desenvolvimento de APIs robustas e escaláveis com Python, Node.js e integrações.",
    tags: ["Python", "Node.js", "REST API"],
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Aplicacoes Mobile",
    description: "Desenvolvimento de apps mobile hibridos com experiencias nativas de alta qualidade.",
    tags: ["React Native", "Flutter", "Mobile"],
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Landing Pages",
    description: "Criacao de paginas de conversao otimizadas para SEO e performance.",
    tags: ["SEO", "Performance", "Conversao"],
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Automacao",
    description: "Scripts e ferramentas de automacao para otimizar processos e aumentar produtividade.",
    tags: ["Python", "Scripts", "CI/CD"],
  },
]

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4">
            <span className="w-8 h-px bg-primary" />
            {"// servicos"}
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Como Posso <span className="text-primary">Ajudar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofereco solucoes completas em desenvolvimento e testes de software para impulsionar seu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">Tem um projeto em mente?</h3>
            <p className="text-muted-foreground mb-6">
              Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.
            </p>
            <Button onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Solicitar Orcamento
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
