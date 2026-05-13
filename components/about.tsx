import { Card } from "@/components/ui/card"
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react"

export function About() {
  const stats = [
    { icon: User, label: "Idade", value: "20 anos" },
    { icon: MapPin, label: "Localizacao", value: "Sao Sebastiao, DF" },
    { icon: GraduationCap, label: "Formacao", value: "ADS (Cursando)" },
    { icon: Briefcase, label: "Cargo", value: "Analista de Testes Jr" },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm">{"// sobre-mim"}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Quem sou eu</h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Sou desenvolvedor, atualmente <span className="text-foreground">Analista de Testes Jr</span> na{" "}
                <span className="text-primary">BB TECNOLOGIA E SERVICOS</span>, onde
                trabalho diariamente com a plataforma ServiceNow. Tenho um perfil comunicativo e trabalho muito bem em
                equipe, sendo extremamente paciente e comprometido com os projetos que participo.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Atualmente cursando Analise e Desenvolvimento de Sistemas na{" "}
                <span className="text-foreground">FACULDADE SENAC</span>, tenho experiencia pratica
                com ServiceNow (UI Builder, Workflow, Service Portal, Scripting e Dashboards), desenvolvimento web
                (HTML, CSS), Python e bancos de dados relacionais.
              </p>
              
              {/* Terminal style message */}
              <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>cat motivacao.txt</span>
                </div>
                <p className="mt-2 text-foreground">
                  Aprendo rapido e gosto de adquirir conhecimentos e novas experiencias constantemente.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="bg-card border-border p-6">
                <div className="space-y-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="p-2 rounded-md bg-primary/10">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
