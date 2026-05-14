"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, Code2, MessageCircle, ArrowRight, Sparkles } from "lucide-react"

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

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const mailtoLink = `mailto:leonardooliveira2105@gmail.com?subject=${encodeURIComponent(
    `Contato de ${formData.name || "Visitante"} - Portfolio`,
  )}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)}`

  const whatsappLink = `https://wa.me/5561991347331?text=${encodeURIComponent(
    `Ola Leonardo! Vi seu portfolio e gostaria de conversar.${formData.name ? `\n\nMeu nome e ${formData.name}.` : ""}${formData.message ? `\n\n${formData.message}` : ""}`
  )}`

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "leonardooliveira2105@gmail.com",
      href: "mailto:leonardooliveira2105@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (61) 9 9134-7331",
      href: "tel:+5561991347331",
    },
    {
      icon: MapPin,
      label: "Localizacao",
      value: "Sao Sebastiao/DF, Brasil",
      href: null,
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/leonardooliveira9", label: "GitHub", color: "hover:bg-[#333]/20 hover:border-[#333]/50" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/leonardo-oliveira-silva-067352221/", label: "LinkedIn", color: "hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50" },
    { icon: Instagram, href: "https://www.instagram.com/_leozinfl/?hl=pt", label: "Instagram", color: "hover:bg-[#E4405F]/20 hover:border-[#E4405F]/50" },
    { icon: MessageCircle, href: whatsappLink, label: "WhatsApp", color: "hover:bg-[#25D366]/20 hover:border-[#25D366]/50" },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.05),transparent_70%)]" />
      
      <div className="container mx-auto max-w-5xl relative">
        <div className="space-y-12">
          <FadeInSection>
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mx-auto">
                <Sparkles className="h-4 w-4" />
                Disponivel para projetos
              </div>
              <p className="text-primary font-mono text-sm">{"// contato"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Vamos Trabalhar Juntos?</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/20 rounded-full mx-auto" />
              <p className="text-muted-foreground max-w-xl mx-auto">
                Estou sempre aberto a novos desafios e oportunidades. 
                Entre em contato e vamos transformar suas ideias em realidade.
              </p>
            </div>
          </FadeInSection>

          {/* CTA Buttons */}
          <FadeInSection delay={100}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chamar no WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-border hover:border-primary/50 group">
                <a href="mailto:leonardooliveira2105@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar Email
                </a>
              </Button>
            </div>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <FadeInSection delay={200}>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-mono text-sm text-primary mb-4 uppercase tracking-wider">Informacoes de Contato</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors group">
                          <div className="p-2.5 rounded-md bg-primary/10 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{item.label}</p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-foreground hover:text-primary transition-colors font-medium"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-foreground font-medium">{item.value}</p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-mono text-sm text-primary mb-4 uppercase tracking-wider">Redes Sociais</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((link, index) => {
                      const Icon = link.icon
                      return (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                          className={`flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border transition-all duration-300 ${link.color} group`}
                        >
                          <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-medium">{link.label}</span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Contact Form */}
            <FadeInSection delay={300}>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 h-fit">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                  <span className="w-3 h-3 rounded-full bg-destructive/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-muted-foreground font-mono text-xs">enviar-mensagem.tsx</span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-mono text-muted-foreground">nome</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-muted border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-mono text-muted-foreground">email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-muted border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-mono text-muted-foreground">mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Conte-me sobre seu projeto..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-muted border-border focus:border-primary resize-none transition-colors"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group">
                      <a href={mailtoLink}>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Enviar Email
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 border-green-500/50 text-green-500 hover:bg-green-500/10">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-2 font-mono">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-primary">{"<"}</span>
              Leo
              <span className="text-primary">{"/>"}</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/leonardooliveira9" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/leonardo-oliveira-silva-067352221/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <p className="font-mono text-xs">
              <span className="text-primary">const</span> year = <span className="text-foreground">{new Date().getFullYear()}</span>;
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}
