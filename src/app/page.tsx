'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  MapPin, 
  Building2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle,
  Mail,
  Send,
  Star,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { SearchBar } from '@/components/ui/SearchBar';
import { JobCard } from '@/components/jobs/JobCard';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { CityCard } from '@/components/ui/CityCard';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { AdBanner } from '@/components/monetization/AdBanner';
import { QuickApplyModal } from '@/components/jobs/QuickApplyModal';
import { JOBS, Job } from '@/data/jobs';
import { CATEGORIES } from '@/data/categories';
import { SAUDI_CITIES } from '@/data/cities';
import { CAREER_ARTICLES } from '@/data/articles';

export default function HomePage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
    }
  };

  // Filter Featured Jobs & Latest Official Jobs
  const featuredJobs = JOBS.filter((j) => j.isFeatured).slice(0, 4);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 bg-gradient-to-b from-saudi-950 via-saudi-900 to-slate-900 text-white overflow-hidden">
        {/* Background Grid Pattern Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b15_1px,transparent_1px),linear-gradient(to_bottom,#064e3b15_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Top Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-saudi-800/80 border border-saudi-600/50 text-emerald-300 text-xs font-bold shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Vision 2030 Employment Gateway</span>
              <span className="text-slate-400">•</span>
              <span className="text-amber-300 font-extrabold">100% Free Job Search</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Find Your Next Job in <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300">
                Saudi Arabia
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Discover Saudi Arabia job opportunities by city, category and profession across Riyadh, Jeddah, Dammam, and landmark giga-projects.
            </p>

            {/* Large Functional Search Interface */}
            <div className="pt-4 max-w-5xl mx-auto">
              <SearchBar />
            </div>

            {/* Popular Quick Search Tags */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-300">
              <span className="font-bold text-emerald-400">Popular Searches:</span>
              {['Flight Attendant', 'Saudia Auditor', 'Aramco Banking Specialist', 'BIM Engineer', 'Cybersecurity'].map((tag, idx) => (
                <Link
                  key={idx}
                  href={`/jobs?q=${encodeURIComponent(tag)}`}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-slate-200 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left border-t border-slate-800/80">
              <div className="flex items-center space-x-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white">Verified Official Sources</h4>
                  <p className="text-[11px] text-slate-400">Direct career links</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <MapPin className="w-8 h-8 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white">8 Major Cities</h4>
                  <p className="text-[11px] text-slate-400">Riyadh to Neom</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <Building2 className="w-8 h-8 text-cyan-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white">10 Industry Sectors</h4>
                  <p className="text-[11px] text-slate-400">IT, Health, Build &amp; more</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <CheckCircle className="w-8 h-8 text-rose-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white">Labor Law Compliant</h4>
                  <p className="text-[11px] text-slate-400">Qiwa &amp; KSA standards</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LATEST OFFICIAL CAREER-SOURCE JOBS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-900 bg-blue-100 px-2.5 py-1 rounded border border-blue-300 flex items-center">
                <Globe className="w-3.5 h-3.5 mr-1 text-blue-700 shrink-0" />
                Official External Listings
              </span>
              <span className="text-xs font-semibold text-slate-500">Source: Official Employer Portals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Latest Official Jobs in Saudi Arabia
            </h2>
          </div>
          <Link
            href="/jobs"
            className="mt-3 sm:mt-0 px-4 py-2 bg-saudi-800 text-white font-bold text-sm rounded-xl hover:bg-saudi-900 transition-colors shadow flex items-center space-x-1.5"
          >
            <span>View All Openings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Official Source Banner Notice */}
        <div className="mb-6 p-4 bg-blue-50/80 border border-blue-200 rounded-2xl text-xs text-blue-950 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <Globe className="w-5 h-5 text-blue-700 shrink-0" />
            <span>
              <strong className="font-bold text-blue-900">Verified Official Career Sources:</strong> Clicking &quot;Apply on Official Website&quot; directs you straight to official corporate portals (Saudia Careers, Aramco Careers).
            </span>
          </div>
        </div>

        {/* Official Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {JOBS.filter(j => j.isOfficialSource).slice(0, 3).map((job) => (
            <JobCard key={job.id} job={job} onApplyClick={handleApplyClick} />
          ))}
        </div>
      </section>

      {/* FEATURED JOBS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded border border-amber-300 flex items-center">
                <Star className="w-3.5 h-3.5 mr-1 fill-amber-500 text-amber-600" />
                Handpicked Opportunities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Featured Job Vacancies
            </h2>
          </div>
          <Link
            href="/jobs"
            className="mt-3 sm:mt-0 text-sm font-bold text-saudi-800 hover:text-saudi-900 flex items-center space-x-1"
          >
            <span>View All Jobs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} onApplyClick={handleApplyClick} />
          ))}
        </div>
      </section>

      {/* MONETIZATION PLACEHOLDER - LEADERBOARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner
          type="leaderboard"
          title="Professional KSA CV Attestation &amp; Council Help"
          subtitle="Prepare your documentation for Saudi Council of Engineers (SCE) and SCFHS licensing."
          ctaText="View Advice"
          ctaLink="/career-tips/how-to-write-saudi-job-cv"
        />
      </section>

      {/* POPULAR CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-saudi-700 bg-saudi-50 px-2.5 py-1 rounded border border-saudi-200">
              Browse by Industry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Popular Job Categories
            </h2>
          </div>
          <Link
            href="/categories"
            className="mt-3 sm:mt-0 text-sm font-bold text-saudi-800 hover:text-saudi-900 flex items-center space-x-1"
          >
            <span>All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* JOBS BY CITY SECTION */}
      <section className="bg-slate-100/80 py-12 sm:py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-saudi-800 bg-white px-2.5 py-1 rounded border border-slate-300">
                Explore Regions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Browse Jobs by Saudi City
              </h2>
            </div>
            <Link
              href="/cities"
              className="mt-3 sm:mt-0 text-sm font-bold text-saudi-800 hover:text-saudi-900 flex items-center space-x-1"
            >
              <span>All Cities Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SAUDI_CITIES.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* CAREER TIPS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-saudi-800 bg-saudi-50 px-2.5 py-1 rounded border border-saudi-200">
              Career Advice
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Saudi Job Search Tips &amp; Guides
            </h2>
          </div>
          <Link
            href="/career-tips"
            className="mt-3 sm:mt-0 text-sm font-bold text-saudi-800 hover:text-saudi-900 flex items-center space-x-1"
          >
            <span>All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAREER_ARTICLES.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* NEWSLETTER SIGNUP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-saudi-900 via-saudi-850 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-saudi-700/50">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mx-auto">
              <Mail className="w-6 h-6" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Get Daily Saudi Job Alerts in Your Inbox
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              Subscribe to SaudiJobsHub alerts and get notified whenever new positions are posted in Riyadh, Jeddah, Dammam, and giga-projects. Zero spam, unsubscribe anytime.
            </p>

            {!newsletterSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="pt-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm rounded-xl transition-colors shadow flex items-center justify-center space-x-1.5 shrink-0"
                >
                  <span>Subscribe Alerts</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="bg-emerald-900/60 border border-emerald-500/50 p-4 rounded-xl text-emerald-200 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Thank you! You are now subscribed to KSA job updates.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Apply Modal */}
      <QuickApplyModal
        job={selectedJob}
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}
