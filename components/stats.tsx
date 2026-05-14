"use client"

import { useEffect, useState, useRef } from "react"
import { Code2, Star, Users, Zap, GitFork, Loader2, ExternalLink, GitBranch, Calendar } from "lucide-react"
import useSWR from "swr"

const GITHUB_USERNAME = "leonardooliveira9"

interface GitHubUser {
  public_repos: number
  followers: number
  following: number
  created_at: string
}

interface GitHubRepo {
  name: string
  description: string
  stargazers_count: number
  forks_count: number
  language: string
  html_url: string
  updated_at: string
}

interface GitHubStats {
  repos: number
  followers: number
  stars: number
  forks: number
  topLanguages: { name: string; count: number }[]
  featuredRepos: GitHubRepo[]
  yearsOnGithub: number
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

function useGitHubStats() {
  const { data: user, error: userError } = useSWR<GitHubUser>(
    `https://api.github.com/users/${GITHUB_USERNAME}`,
    fetcher,
    { revalidateOnFocus: false }
  )

  const { data: repos, error: reposError } = useSWR<GitHubRepo[]>(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    fetcher,
    { revalidateOnFocus: false }
  )

  const isLoading = !user && !userError
  const hasError = userError || reposError

  let stats: GitHubStats | null = null

  if (user && repos) {
    // Calculate top languages
    const languageCounts: Record<string, number> = {}
    repos.forEach(repo => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1
      }
    })
    const topLanguages = Object.entries(languageCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }))

    // Get featured repos (top starred or recently updated)
    const featuredRepos = [...repos]
      .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 3)

    // Calculate years on GitHub
    const createdYear = new Date(user.created_at).getFullYear()
    const currentYear = new Date().getFullYear()
    const yearsOnGithub = currentYear - createdYear

    stats = {
      repos: user.public_repos,
      followers: user.followers,
      stars: repos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
      forks: repos.reduce((acc, repo) => acc + repo.forks_count, 0),
      topLanguages,
      featuredRepos,
      yearsOnGithub,
    }
  }

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
      <div className="bg-card border border-border rounded-lg p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
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

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-500",
  TypeScript: "bg-blue-500",
  Python: "bg-green-500",
  HTML: "bg-orange-500",
  CSS: "bg-purple-500",
  Java: "bg-red-500",
  default: "bg-gray-500",
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
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
          >
            <GitBranch className="h-4 w-4" />
            @{GITHUB_USERNAME}
            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {statItems.map((stat, index) => (
            <StatItem key={index} {...stat} isLoading={isLoading} />
          ))}
        </div>

        {/* Languages & Featured Repos */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Top Languages */}
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
            <h3 className="font-mono text-sm text-primary mb-4 flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Linguagens Mais Usadas
            </h3>
            {isLoading ? (
              <div className="flex justify-center py-4">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : stats?.topLanguages && stats.topLanguages.length > 0 ? (
              <div className="space-y-3">
                {stats.topLanguages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${languageColors[lang.name] || languageColors.default}`} />
                    <span className="text-foreground font-medium flex-1">{lang.name}</span>
                    <span className="text-muted-foreground text-sm font-mono">{lang.count} repos</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">Nenhuma linguagem encontrada</p>
            )}
          </div>

          {/* Featured Repos */}
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
            <h3 className="font-mono text-sm text-primary mb-4 flex items-center gap-2">
              <Star className="h-4 w-4" />
              Repositorios em Destaque
            </h3>
            {isLoading ? (
              <div className="flex justify-center py-4">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : stats?.featuredRepos && stats.featuredRepos.length > 0 ? (
              <div className="space-y-3">
                {stats.featuredRepos.map((repo, index) => (
                  <a
                    key={index}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                          {repo.name}
                        </p>
                        {repo.description && (
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{repo.description}</p>
                        )}
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <span className={`w-2 h-2 rounded-full ${languageColors[repo.language] || languageColors.default}`} />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">Nenhum repositorio encontrado</p>
            )}
          </div>
        </div>

        {/* Years on GitHub badge */}
        {stats?.yearsOnGithub && stats.yearsOnGithub > 0 && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {stats.yearsOnGithub}+ anos contribuindo no GitHub
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
