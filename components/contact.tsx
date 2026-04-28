"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, Code2 } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const mailtoLink = `mailto:leonardooliveira2105@gmail.com?subject=${encodeURIComponent(
    `Contato de ${formData.name || "Visitante"} - Portfolio`,
  )}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)}`

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
    { icon: Github, href: "https://github.com/leonardooliveira9", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/leonardo-oliveira-silva-067352221/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/_leozinfl/?hl=pt", label: "Instagram" },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm">{"// contato"}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Entre em Contato</h2>
            <p className="text-muted-foreground max-w-xl">
              Tem um projeto em mente? Vamos conversar sobre como posso ajudar.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="p-3 rounded-lg bg-card border border-border hover:border-primary/30 hover:text-primary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-6">
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
                    className="bg-muted border-border focus:border-primary"
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
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-mono text-muted-foreground">mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Sua mensagem..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted border-border focus:border-primary resize-none"
                  />
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href={mailtoLink}>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </a>
                </Button>
              </div>
            </div>
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
            <p className="font-mono text-xs">
              <span className="text-primary">const</span> year = <span className="text-foreground">2025</span>;
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}
