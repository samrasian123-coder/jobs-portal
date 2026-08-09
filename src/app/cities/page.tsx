import React from 'react';
import { MapPin } from 'lucide-react';
import { SAUDI_CITIES } from '@/data/cities';
import { CityCard } from '@/components/ui/CityCard';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { AdBanner } from '@/components/monetization/AdBanner';

export const metadata = {
  title: 'Jobs by City in Saudi Arabia (Riyadh, Jeddah, Dammam & More) | SaudiJobsHub',
  description: 'Search Saudi Arabia jobs by city. Browse active employment listings in Riyadh, Jeddah, Dammam, Makkah, Madinah, Khobar, Taif, and Tabuk.',
};

export default function CitiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Cities' }]} />

      <div className="mb-8 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-saudi-700 bg-saudi-50 px-2.5 py-1 rounded border border-saudi-200">
          Geographic Directory
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
          Jobs by Saudi Arabia City
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
          Explore job openings tailored to major administrative regions and giga-project hubs across Saudi Arabia.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {SAUDI_CITIES.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>

      <AdBanner
        type="leaderboard"
        title="Relocating to a New Saudi City?"
        subtitle="Read our complete guide to living and working in Saudi Arabia under Vision 2030."
        ctaText="Read Relocation Guide"
        ctaLink="/career-tips/working-in-saudi-arabia-guide"
      />
    </div>
  );
}
