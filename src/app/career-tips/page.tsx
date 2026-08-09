import React from 'react';
import { BookOpen } from 'lucide-react';
import { CAREER_ARTICLES } from '@/data/articles';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { AdBanner } from '@/components/monetization/AdBanner';

export const metadata = {
  title: 'Saudi Arabia Career Advice & CV Tips | SaudiJobsHub',
  description: 'Expert guides on writing Saudi job CVs, interview tips, safe job search rules, and working in KSA under Saudi Labor Law.',
};

export default function CareerTipsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Career Tips' }]} />

      <div className="mb-8 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-saudi-700 bg-saudi-50 px-2.5 py-1 rounded border border-saudi-200">
          Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
          Saudi Arabia Career Tips &amp; Advice
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
          Actionable advice on CV formatting, interview preparation, recruitment safety, and understanding Saudi workplace culture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {CAREER_ARTICLES.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <AdBanner
        type="leaderboard"
        title="Need Professional CV Formatting for KSA?"
        subtitle="Make sure your resume includes proper SCE, SCFHS, or SOCPA license details."
        ctaText="Read CV Guide"
        ctaLink="/career-tips/how-to-write-saudi-job-cv"
      />
    </div>
  );
}
