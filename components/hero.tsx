"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Instagram, Download, Terminal, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

function TypewriterText({ text, delay = 50 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Availability Badge */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/15 transition-colors cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-sm font-medium">Disponivel para projetos</span>
            </div>
          </div>

          {/* Terminal-style intro */}
          <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-primary">~</span>
            <TypewriterText text="./welcome.sh" delay={80} />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-muted-foreground font-mono text-lg block mb-2">{"// Desenvolvedor Full Stack"}</span>
              <span className="text-foreground">Leonardo </span>
              <span className="text-primary relative">
                Oliveira
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Analista de Testes Jr em <span className="text-foreground font-medium">ServiceNow</span> | 
              Desenvolvedor | <span className="text-foreground font-medium">Analise e Desenvolvimento de Sistemas</span>
            </p>

            {/* Code snippet style */}
            <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm max-w-xl hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-destructive/60 hover:bg-destructive transition-colors" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60 hover:bg-yellow-500 transition-colors" />
                <span className="w-3 h-3 rounded-full bg-green-500/60 hover:bg-green-500 transition-colors" />
                <span className="ml-2 text-muted-foreground text-xs">developer.ts</span>
              </div>
              <code className="text-muted-foreground">
                <span className="text-primary">const</span> developer = {"{"}<br />
                <span className="ml-4">nome: <span className="text-green-400">{'"Leonardo Oliveira"'}</span>,</span><br />
                <span className="ml-4">stack: <span className="text-green-400">{'"ServiceNow, Python, JS"'}</span>,</span><br />
                <span className="ml-4">disponivel: <span className="text-primary">true</span></span><br />
                {"}"};
              </code>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap pt-4">
            <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Entre em Contato
            </Button>
            <Button size="lg" variant="outline" asChild className="border-border hover:bg-card hover:border-primary/50 group">
              <a href="/curriculo LEONARDO - atualizado.pdf" download="curriculo LEONARDO - atualizado.pdf">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Baixar CV
              </a>
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToProjects} className="border-border hover:bg-card hover:border-primary/50">
              Ver Projetos
            </Button>
          </div>

          <div className="flex items-center gap-1 pt-4">
            {[
              { icon: Github, href: "https://github.com/leonardooliveira9", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/leonardo-oliveira-silva-067352221/", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/_leozinfl/?hl=pt", label: "Instagram" },
              { icon: MessageCircle, href: "https://wa.me/5561991347331", label: "WhatsApp" },
              { icon: Mail, href: "mailto:leonardooliveira2105@gmail.com", label: "Email" },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-200"
                >
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    aria-label={item.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              )
            })}
          </div>

          <div className="pt-12">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="group"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-5 w-5 mx-auto text-primary animate-bounce group-hover:text-primary/70 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
