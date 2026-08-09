import { MetadataRoute } from 'next';
import { JOBS } from '@/data/jobs';
import { CAREER_ARTICLES } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saudijobshub.com';

  // Base routes
  const routes = [
    '',
    '/jobs',
    '/categories',
    '/cities',
    '/career-tips',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic job listing routes
  const jobRoutes = JOBS.map((job) => ({
    url: `${baseUrl}/jobs/${job.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic career article routes
  const articleRoutes = CAREER_ARTICLES.map((article) => ({
    url: `${baseUrl}/career-tips/${article.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...jobRoutes, ...articleRoutes];
}
