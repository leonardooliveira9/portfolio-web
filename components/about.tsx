import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Sobre Mim</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Conheça um pouco mais sobre minha trajetória e experiência
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Sou um desenvolvedor júnior de 19 anos, atualmente estagiário na BB TECNOLOGIA E SERVIÇOS há 1 ano, onde
                trabalho diariamente com a plataforma ServiceNow. Tenho um perfil comunicativo e trabalho muito bem em
                equipe, sendo extremamente paciente e comprometido com os projetos que participo.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Atualmente cursando Análise e Desenvolvimento de Sistemas na FACULDADE SENAC, tenho experiência prática
                com ServiceNow (UI Builder, Workflow, Service Portal, Scripting e Dashboards), desenvolvimento web
                (HTML, CSS), Python e bancos de dados relacionais. Aprendo rápido e gosto de adquirir conhecimentos e
                novas experiências constantemente.
              </p>
            </div>

            <Card className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Idade</h3>
                  <p className="text-muted-foreground">19 anos</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Localização</h3>
                  <p className="text-muted-foreground">São Sebastião, DF - Brasil</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Formação</h3>
                  <p className="text-muted-foreground">Análise e Desenvolvimento de Sistemas (Cursando)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Disponibilidade</h3>
                  <p className="text-muted-foreground">Estagiário na BB Tecnologia</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
