"use client"

import { useEffect, useState, useRef } from "react"
import { Code2, GitCommit, Star, Users, Zap, GitFork, Loader2 } from "lucide-react"
import useSWR from "swr"

const GITHUB_USERNAME = "leonardooliveira9"

interface GitHubUser {
  public_repos: number
  followers: number
  following: number
}

interface GitHubRepo {
  stargazers_count: number
  forks_count: number
  size: number
}

interface GitHubStats {
  repos: number
  followers: number
  stars: number
  forks: number
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

function useGitHubStats() {
  const { data: user, error: userError } = useSWR<GitHubUser>(
    `https://api.github.com/users/${GITHUB_USERNAME}`,
    fetcher,
    { revalidateOnFocus: false }
  )

  const { data: repos, error: reposError } = useSWR<GitHubRepo[]>(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
    fetcher,
    { revalidateOnFocus: false }
  )

  const isLoading = !user && !userError
  const hasError = userError || reposError

  const stats: GitHubStats | null = user && repos ? {
    repos: user.public_repos,
    followers: user.followers,
    stars: repos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
    forks: repos.reduce((acc, repo) => acc + repo.forks_count, 0),
  } : null

  return { stats, isLoading, hasError }
}

interface StatItemProps {
  icon: React.ReactNode
  value: number
  suffix?: string
  label: string
  delay?: number
  isLoading?: boolean
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

function StatItem({ icon, value, suffix = "", label, delay = 0, isLoading = false }: StatItemProps) {
  return (
    <div className="group relative">
      <div className="bg-card border border-border rounded-lg p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="text-3xl sm:text-4xl font-bold text-foreground font-mono mb-2">
          {isLoading ? (
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          ) : (
            <AnimatedCounter value={value} suffix={suffix} delay={delay} />
          )}
        </div>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}

export function Stats() {
  const { stats, isLoading } = useGitHubStats()

  const statItems = [
    { 
      icon: <Code2 className="h-6 w-6" />, 
      value: stats?.repos ?? 0, 
      suffix: "", 
      label: "Repositorios Publicos", 
      delay: 0 
    },
    { 
      icon: <Star className="h-6 w-6" />, 
      value: stats?.stars ?? 0, 
      suffix: "", 
      label: "Stars Recebidas", 
      delay: 100 
    },
    { 
      icon: <Users className="h-6 w-6" />, 
      value: stats?.followers ?? 0, 
      suffix: "", 
      label: "Seguidores", 
      delay: 200 
    },
    { 
      icon: <GitFork className="h-6 w-6" />, 
      value: stats?.forks ?? 0, 
      suffix: "", 
      label: "Forks dos Projetos", 
      delay: 300 
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-4">
            <Zap className="h-4 w-4" />
            GitHub Stats em Tempo Real
          </div>
          <a 
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <GitCommit className="h-4 w-4" />
            @{GITHUB_USERNAME}
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statItems.map((stat, index) => (
            <StatItem key={index} {...stat} isLoading={isLoading} />
          ))}
        </div>
      </div>
    </section>
  )
}
