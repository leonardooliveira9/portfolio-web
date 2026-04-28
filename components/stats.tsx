"use client"

import { useEffect, useState, useRef } from "react"
import { Code2, GitCommit, Briefcase, Coffee, Zap } from "lucide-react"

interface StatItemProps {
  icon: React.ReactNode
  value: number
  suffix?: string
  label: string
  delay?: number
}

function AnimatedCounter({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const timeout = setTimeout(() => {
            const duration = 2000
            const steps = 60
            const increment = value / steps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= value) {
                setCount(value)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, duration / steps)
          }, delay)
          return () => clearTimeout(timeout)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, delay, hasAnimated])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

function StatItem({ icon, value, suffix = "", label, delay = 0 }: StatItemProps) {
  return (
    <div className="group relative">
      <div className="bg-card border border-border rounded-lg p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="text-3xl sm:text-4xl font-bold text-foreground font-mono mb-2">
          <AnimatedCounter value={value} suffix={suffix} delay={delay} />
        </div>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}

export function Stats() {
  const stats = [
    { icon: <Code2 className="h-6 w-6" />, value: 15, suffix: "+", label: "Projetos Concluidos", delay: 0 },
    { icon: <GitCommit className="h-6 w-6" />, value: 500, suffix: "+", label: "Commits no GitHub", delay: 100 },
    { icon: <Briefcase className="h-6 w-6" />, value: 2, suffix: "+", label: "Anos de Experiencia", delay: 200 },
    { icon: <Coffee className="h-6 w-6" />, value: 1000, suffix: "+", label: "Cafes Tomados", delay: 300 },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-4">
            <Zap className="h-4 w-4" />
            Numeros que Impressionam
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
