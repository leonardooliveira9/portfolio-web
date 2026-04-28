"use client"

import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    role: "Product Manager",
    company: "Tech Startup",
    content: "Excelente profissional! Entregou o projeto antes do prazo e com qualidade excepcional. Comunicacao clara e proativa durante todo o processo.",
    rating: 5,
  },
  {
    name: "Carlos Santos",
    role: "CTO",
    company: "Empresa XYZ",
    content: "Leonardo demonstrou conhecimento tecnico solido e capacidade de resolver problemas complexos. Recomendo fortemente para projetos de desenvolvimento.",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "Tech Lead",
    company: "Digital Agency",
    content: "Trabalhar com o Leonardo foi uma otima experiencia. Ele entende as necessidades do cliente e transforma em solucoes eficientes.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4">
            <span className="w-8 h-px bg-primary" />
            {"// depoimentos"}
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O Que Dizem <span className="text-primary">Sobre Mim</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback de clientes e colegas com quem tive o prazer de trabalhar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Quote className="h-4 w-4 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
