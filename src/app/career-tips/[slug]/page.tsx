import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, User, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CAREER_ARTICLES } from '@/data/articles';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { AdBanner } from '@/components/monetization/AdBanner';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = CAREER_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} | SaudiJobsHub Career Tips`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = CAREER_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: 'Career Tips', href: '/career-tips' },
          { label: article.title },
        ]}
      />

      <article className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
        
        {/* Header */}
        <div className="border-b border-slate-100 pb-6 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 bg-saudi-50 text-saudi-800 text-xs font-bold rounded-lg border border-saudi-200">
              {article.category}
            </span>
            <span className="text-xs text-slate-400 font-medium flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center space-x-3 text-xs text-slate-500 pt-2">
            <div className="w-8 h-8 rounded-full bg-saudi-700 text-white font-bold flex items-center justify-center">
              {article.author.charAt(0)}
            </div>
            <div>
              <span className="font-bold text-slate-900 block">{article.author}</span>
              <span className="text-slate-400 text-[11px]">{article.authorRole} • Published {article.date}</span>
            </div>
          </div>
        </div>

        {/* Excerpt Box */}
        <div className="bg-saudi-50/70 border-l-4 border-saudi-700 p-4 rounded-r-xl text-slate-800 font-medium text-sm sm:text-base leading-relaxed">
          {article.excerpt}
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-slate-800 text-sm sm:text-base leading-relaxed">
          <p className="font-medium text-slate-700">{article.content.intro}</p>

          {article.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                {section.heading}
              </h2>
              <p className="text-slate-700">{section.body}</p>
              {section.bulletPoints && (
                <ul className="space-y-2 text-sm text-slate-700 pl-2">
                  {section.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-saudi-700 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="pt-6 border-t border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-2">Conclusion &amp; Next Steps</h3>
            <p className="text-slate-700">{article.content.conclusion}</p>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <Link
            href="/career-tips"
            className="text-xs font-bold text-saudi-800 hover:underline flex items-center space-x-1"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Back to All Tips</span>
          </Link>
          <Link
            href="/jobs"
            className="px-4 py-2 bg-saudi-800 text-white font-bold text-xs rounded-xl shadow hover:bg-saudi-900"
          >
            Find Jobs Now
          </Link>
        </div>
      </article>

      <div className="mt-8">
        <AdBanner
          type="leaderboard"
          title="Looking for Saudi Job Vacancies?"
          subtitle="Explore fresh positions in Riyadh, Jeddah, Dammam, and giga-projects."
          ctaText="Search Jobs"
          ctaLink="/jobs"
        />
      </div>
    </div>
  );
}
