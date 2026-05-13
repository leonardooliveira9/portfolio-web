"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Instagram, Download, Terminal } from "lucide-react"
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
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="space-y-8">
          {/* Availability Badge */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
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
              <span className="text-primary">Oliveira</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Analista de Testes Jr em <span className="text-foreground font-medium">ServiceNow</span> | 
              Desenvolvedor | <span className="text-foreground font-medium">Analise e Desenvolvimento de Sistemas</span>
            </p>

            {/* Code snippet style */}
            <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm max-w-xl">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
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
            <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Mail className="mr-2 h-4 w-4" />
              Entre em Contato
            </Button>
            <Button size="lg" variant="outline" asChild className="border-border hover:bg-card hover:border-primary/50">
              <a href="/curriculo LEONARDO - atualizado.pdf" download="curriculo LEONARDO - atualizado.pdf">
                <Download className="mr-2 h-4 w-4" />
                Baixar CV
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-border hover:bg-card hover:border-primary/50">
              <a href="#projects">Ver Projetos</a>
            </Button>
          </div>

          <div className="flex items-center gap-1 pt-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
              <a
                href="https://github.com/leonardooliveira9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
              <a
                href="https://www.linkedin.com/in/leonardo-oliveira-silva-067352221/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
              <a
                href="https://www.instagram.com/_leozinfl/?hl=pt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
              <a href="mailto:leonardooliveira2105@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="pt-12">
            <ArrowDown className="h-5 w-5 mx-auto text-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
