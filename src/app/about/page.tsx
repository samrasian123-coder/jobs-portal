import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Building, Users, Award, HeartHandshake, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { AdBanner } from '@/components/monetization/AdBanner';

export const metadata = {
  title: 'About SaudiJobsHub | Legitimate Saudi Arabia Job Listing Portal',
  description: 'Learn about SaudiJobsHub - our mission to provide authentic, verified Saudi job opportunities with 100% transparency and zero recruitment fees.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-saudi-950 via-saudi-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-full inline-block">
            Authentic Saudi Employment Gateway
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Connecting Talent with Real Opportunities in Saudi Arabia
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            SaudiJobsHub was created to modernize and simplify job discovery across the Kingdom of Saudi Arabia with zero tolerance for recruitment scams, fake listings, or misleading earning claims.
          </p>
        </div>
      </div>

      {/* Core Mission & Legitimate Promise */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" id="legitimate-listing">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-saudi-800 bg-saudi-50 px-2.5 py-1 rounded border border-saudi-200">
            <ShieldCheck className="w-4 h-4 text-saudi-700" />
            <span>Legitimate Listing Guarantee</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Our Platform Integrity Code
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Unlike untrusted job aggregators, SaudiJobsHub operates under strict principles of transparency and candidate safety in alignment with Saudi Ministry guidelines and Qiwa standards.
          </p>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Zero Fees for Candidates:</strong> Searching and applying for jobs on SaudiJobsHub is 100% free forever.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>No Fake Employers:</strong> All demo listings are clearly labeled during testing. Verified listings point directly to official corporate HR portals.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>No Misleading Earning Claims:</strong> We strictly refrain from claiming fixed per-click earnings or false pay-per-visit schemes.</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-xl border border-slate-800">
          <h3 className="text-xl font-extrabold text-amber-300">
            Vision 2030 Alignment
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            As Saudi Arabia builds world-class smart cities (NEOM, Red Sea, Qiddiya, KAFD expansion), the demand for skilled national (Saudization) and international talent is at an all-time high.
          </p>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="font-bold text-white text-lg block">8+</span>
              <span className="text-slate-400">Provinces &amp; Cities</span>
            </div>
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="font-bold text-white text-lg block">10+</span>
              <span className="text-slate-400">Core Economic Sectors</span>
            </div>
          </div>
        </div>
      </div>

      <AdBanner
        type="leaderboard"
        title="Ready to Find Your Next Role in Saudi Arabia?"
        subtitle="Search positions by city, category, and experience level."
        ctaText="Search Jobs"
        ctaLink="/jobs"
      />
    </div>
  );
}
