import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leonardo Oliveira | Desenvolvedor Full Stack & ServiceNow",
  description: "Desenvolvedor Full Stack especializado em ServiceNow, Python e JavaScript. Analista de Testes Jr na BB Tecnologia. Criacao de portais, workflows, integrações e automacoes.",
  keywords: ["Desenvolvedor", "Full Stack", "ServiceNow", "Python", "JavaScript", "React", "Next.js", "Analista de Testes", "Portfolio"],
  authors: [{ name: "Leonardo Oliveira" }],
  creator: "Leonardo Oliveira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Leonardo Oliveira | Desenvolvedor Full Stack & ServiceNow",
    description: "Desenvolvedor Full Stack especializado em ServiceNow, Python e JavaScript. Disponivel para projetos.",
    siteName: "Portfolio Leonardo Oliveira",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Oliveira | Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em ServiceNow, Python e JavaScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body className={`font-sans antialiased bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
