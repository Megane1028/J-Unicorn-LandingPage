import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 基础 URL
  const baseUrl = 'https://j-unicorn.org'

  // 静态路由
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 1,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 0.8,
    },
  ]

  // 动态获取新闻文章路由
  const newsFolder = path.join(process.cwd(), 'markdown/news')
  let newsRoutes: MetadataRoute.Sitemap = []
  
  try {
    const files = fs.readdirSync(newsFolder)
    newsRoutes = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const content = fs.readFileSync(path.join(newsFolder, file), 'utf8')
        const dateMatch = content.match(/date:\s*(?:["']([^"']+)["']|([^\n]+))/)
        const lastModified = dateMatch ? new Date(dateMatch[1] || dateMatch[2]) : new Date()
        
        return {
          url: `${baseUrl}/news/${file.replace('.md', '')}`,
          lastModified,
          changeFrequency: 'weekly' as ChangeFrequency,
          priority: 0.6,
        }
      })
  } catch (error) {
    console.error('Error generating news routes:', error)
  }

  return [...staticRoutes, ...newsRoutes]
} 