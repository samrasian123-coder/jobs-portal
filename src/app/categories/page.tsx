import React from 'react';
import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { AdBanner } from '@/components/monetization/AdBanner';

export const metadata = {
  title: 'Job Categories in Saudi Arabia | SaudiJobsHub',
  description: 'Explore job opportunities across 10 major industries in Saudi Arabia including IT, Engineering, Healthcare, Construction, and Finance.',
};

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Categories' }]} />

      <div className="mb-8 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-saudi-700 bg-saudi-50 px-2.5 py-1 rounded border border-saudi-200">
          Industry Directory
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
          Saudi Arabia Job Categories
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
          Browse verified employment vacancies categorized by specialization across the Kingdom of Saudi Arabia.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <AdBanner
        type="leaderboard"
        title="Looking for Specific Industry Certification Advice?"
        subtitle="Read our guide on Saudi Council registration and degree attestation requirements."
        ctaText="View Career Tips"
        ctaLink="/career-tips"
      />
    </div>
  );
}
