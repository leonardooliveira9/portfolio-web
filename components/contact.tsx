"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Loader2, CheckCircle2, XCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: null, message: "" })

    console.log("[v0] Iniciando envio de email...")
    console.log("[v0] Dados do formulário:", formData)

    try {
      const serviceId = "service_0xygr5k"
      const templateId = "template_7v5dmdw"
      const publicKey = "bie-wUMYcKBXO1ct1"

      if (publicKey === "bie-wUMYcKBXO1ct1") {
        console.error("[v0] ERRO: Credenciais do EmailJS não configuradas!")
        console.log("[v0] Siga estes passos:")
        console.log("[v0] 1. Acesse https://www.emailjs.com/")
        console.log("[v0] 2. Crie uma conta gratuita")
        console.log("[v0] 3. Crie um serviço de email")
        console.log("[v0] 4. Crie um template de email")
        console.log("[v0] 5. Copie o Service ID, Template ID e Public Key")
        console.log("[v0] 6. Substitua no código do contact.tsx")

        setStatus({
          type: "error",
          message: "Erro ao enviar mensagem. Verifique sua conexão e tente novamente.",
        })
        setIsLoading(false)
        return
      }

      console.log("[v0] Enviando para EmailJS...")

      // Enviar email usando EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "leonardooliveira2105@gmail.com",
        },
        publicKey,
      )

      console.log("[v0] Email enviado com sucesso!", result)
      setStatus({ type: "success", message: "Mensagem enviada com sucesso! Entrarei em contato em breve." })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("[v0] Erro detalhado ao enviar:", error)
      if (error instanceof Error) {
        console.error("[v0] Mensagem de erro:", error.message)
      }
      setStatus({ type: "error", message: "Erro ao enviar mensagem. Verifique sua conexão e tente novamente." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Entre em Contato</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Tem um projeto em mente? Vamos conversar!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                  <CardDescription>Você pode me encontrar através de:</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:leonardooliveira2105@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        leonardooliveira2105@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Telefone</p>
                      <a
                        href="tel:+5561991347331"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +55 (61) 9 9134-7331
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Localização</p>
                      <p className="text-muted-foreground">Qr 115 lote 33, Bairro São José</p>
                      <p className="text-muted-foreground">São Sebastião/DF, Brasil</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>Preencha o formulário abaixo</CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="from_name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="from_email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Sua mensagem..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      disabled={isLoading}
                    />
                  </div>

                  {status.type && (
                    <div
                      className={`flex items-center gap-2 p-3 rounded-lg ${
                        status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <XCircle className="h-5 w-5" />
                      )}
                      <p className="text-sm">{status.message}</p>
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar Mensagem"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center text-muted-foreground">
        <p>© 2025 Leonardo Oliveira. Todos os direitos reservados.</p>
      </footer>
    </section>
  )
}
