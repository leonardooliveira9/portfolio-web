"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Instagram, Download } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
              Olá, eu sou{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Leonardo Oliveira
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Estagiário em ServiceNow | Desenvolvedor Júnior | Análise e Desenvolvimento de Sistemas
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" onClick={scrollToContact}>
              <Mail className="mr-2 h-4 w-4" />
              Entre em Contato
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/curriculo%20LEONARDO.pdf" download="curriculo LEONARDO.pdf">
                <Download className="mr-2 h-4 w-4" />
                Baixar Currículo
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#experience">Ver Experiências</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/leonardooliveira9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/leonardo-oliveira-silva-067352221/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.instagram.com/_leozinfl/?hl=pt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:leonardooliveira2105@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="pt-12 animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
