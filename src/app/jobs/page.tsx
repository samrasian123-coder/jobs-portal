'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, MapPin, Building2, SlidersHorizontal, X, RotateCcw, ArrowUpDown, ChevronDown } from 'lucide-react';
import { JobCard } from '@/components/jobs/JobCard';
import { QuickApplyModal } from '@/components/jobs/QuickApplyModal';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { AdBanner } from '@/components/monetization/AdBanner';
import { JOBS, Job } from '@/data/jobs';
import { SAUDI_CITIES } from '@/data/cities';
import { CATEGORIES } from '@/data/categories';

function JobsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get('q') || '';
  const initialCity = searchParams.get('city') || '';
  const initialCategory = searchParams.get('category') || '';
  const initialJobType = searchParams.get('type') || '';

  const [searchKeyword, setSearchKeyword] = useState(initialQuery);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedJobType, setSelectedJobType] = useState(initialJobType);
  const [sortBy, setSortBy] = useState<'newest' | 'title'>('newest');

  // Pagination / Load More state
  const [visibleCount, setVisibleCount] = useState(6);

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter & Sort Jobs logic
  const filteredAndSortedJobs = useMemo(() => {
    let jobs = JOBS.filter((job) => {
      // Keyword match (Title, Company, Description)
      if (searchKeyword.trim()) {
        const q = searchKeyword.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesCompany = job.company.toLowerCase().includes(q);
        const matchesDesc = job.shortDescription.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCompany && !matchesDesc) return false;
      }

      // City match
      if (selectedCity && job.city.toLowerCase() !== selectedCity.toLowerCase()) {
        return false;
      }

      // Category match
      if (selectedCategory && job.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Job Type match
      if (selectedJobType && job.jobType !== selectedJobType) {
        return false;
      }

      return true;
    });

    // Sorting
    if (sortBy === 'newest') {
      jobs = jobs.sort((a, b) => b.postedTimestamp - a.postedTimestamp);
    } else if (sortBy === 'title') {
      jobs = jobs.sort((a, b) => a.title.localeCompare(b.title));
    }

    return jobs;
  }, [searchKeyword, selectedCity, selectedCategory, selectedJobType, sortBy]);

  const displayedJobs = useMemo(() => {
    return filteredAndSortedJobs.slice(0, visibleCount);
  }, [filteredAndSortedJobs, visibleCount]);

  const handleClearFilters = () => {
    setSearchKeyword('');
    setSelectedCity('');
    setSelectedCategory('');
    setSelectedJobType('');
    setSortBy('newest');
    setVisibleCount(6);
    router.push('/jobs');
  };

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      <Breadcrumb items={[{ label: 'Find Jobs' }]} />

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Find Jobs in Saudi Arabia
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2">
          Search verified vacancies by keyword, city, category and employment type across KSA.
        </p>
      </div>

      {/* Main Search & Filter Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* SIDEBAR FILTERS */}
        <aside className={`lg:block ${mobileFilterOpen ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden'}`}>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-6 sticky top-24">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="w-4 h-4 text-saudi-700" />
                <h3 className="font-bold text-slate-900 text-base">Filter Jobs</h3>
              </div>
              <div className="flex items-center space-x-2">
                {(searchKeyword || selectedCity || selectedCategory || selectedJobType) && (
                  <button
                    onClick={handleClearFilters}
                    className="text-xs text-rose-600 hover:underline font-bold flex items-center"
                  >
                    <RotateCcw className="w-3 h-3 mr-1" />
                    Reset
                  </button>
                )}
                {mobileFilterOpen && (
                  <button onClick={() => setMobileFilterOpen(false)} className="lg:hidden p-1 text-slate-500">
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Keyword Search */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Keyword / Title
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Engineer, Nurse, IT"
                  value={searchKeyword}
                  onChange={(e) => {
                    setSearchKeyword(e.target.value);
                    setVisibleCount(6);
                  }}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* City Filter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Saudi City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setVisibleCount(6);
                }}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600 cursor-pointer"
              >
                <option value="">All Saudi Cities</option>
                {SAUDI_CITIES.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setVisibleCount(6);
                }}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600 cursor-pointer"
              >
                <option value="">All Categories</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Job Type Filter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Job Type
              </label>
              <div className="space-y-1.5">
                {['Full-Time', 'Part-Time', 'Contract', 'Remote'].map((type) => (
                  <label key={type} className="flex items-center space-x-2 text-xs font-medium text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="jobType"
                      checked={selectedJobType === type}
                      onChange={() => {
                        setSelectedJobType(selectedJobType === type ? '' : type);
                        setVisibleCount(6);
                      }}
                      className="text-saudi-700 focus:ring-saudi-500 rounded"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sidebar Ad Placement */}
            <div className="pt-4 border-t border-slate-100">
              <AdBanner
                type="sidebar"
                title="Saudi CV Formatting Guide"
                subtitle="Ensure your CV contains exact KSA keyword standards."
                ctaText="Read Guide"
                ctaLink="/career-tips/how-to-write-saudi-job-cv"
              />
            </div>
          </div>
        </aside>

        {/* MAIN RESULTS AREA */}
        <main className="lg:col-span-3 space-y-6">
          
          {/* Controls Bar & Sort dropdown */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-slate-900">
                Showing {displayedJobs.length} of {filteredAndSortedJobs.length} job{filteredAndSortedJobs.length !== 1 ? 's' : ''}
              </span>
              {(selectedCity || selectedCategory || searchKeyword || selectedJobType) && (
                <span className="text-xs text-slate-500 font-medium">
                  (Filtered)
                </span>
              )}
            </div>

            <div className="flex items-center space-x-3">
              {/* Sort By Dropdown */}
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'title')}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-saudi-600 cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="title">Title (A-Z)</option>
                </select>
              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden px-3.5 py-2 text-xs font-bold text-slate-800 bg-slate-100 rounded-xl flex items-center space-x-1.5"
              >
                <SlidersHorizontal className="w-4 h-4 text-saudi-700" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* Active Filter Badges */}
          {(selectedCity || selectedCategory || searchKeyword || selectedJobType) && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs text-slate-400 font-bold">Active Filters:</span>
              {searchKeyword && (
                <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 bg-saudi-100 text-saudi-900 rounded-lg">
                  Keyword: {searchKeyword}
                  <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setSearchKeyword('')} />
                </span>
              )}
              {selectedCity && (
                <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 bg-saudi-100 text-saudi-900 rounded-lg">
                  City: {selectedCity}
                  <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setSelectedCity('')} />
                </span>
              )}
              {selectedCategory && (
                <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 bg-saudi-100 text-saudi-900 rounded-lg">
                  Category: {selectedCategory}
                  <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setSelectedCategory('')} />
                </span>
              )}
              {selectedJobType && (
                <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 bg-saudi-100 text-saudi-900 rounded-lg">
                  Type: {selectedJobType}
                  <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setSelectedJobType('')} />
                </span>
              )}
            </div>
          )}

          {/* JOB CARDS GRID OR EMPTY SEARCH STATE */}
          {displayedJobs.length > 0 ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayedJobs.map((job) => (
                  <JobCard key={job.id} job={job} onApplyClick={handleApplyClick} />
                ))}
              </div>

              {/* Load More Pagination Button */}
              {visibleCount < filteredAndSortedJobs.length && (
                <div className="text-center pt-6">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="px-6 py-3 bg-saudi-800 hover:bg-saudi-900 text-white font-bold text-xs rounded-xl shadow transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Load More Jobs ({filteredAndSortedJobs.length - visibleCount} remaining)</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* EMPTY SEARCH RESULTS STATE */
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                No matching jobs found
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                We couldn&apos;t find any job listings matching your current search or filter criteria. Try clearing your filters or searching for another keyword.
              </p>
              <button
                onClick={handleClearFilters}
                className="px-5 py-2.5 bg-saudi-800 hover:bg-saudi-900 text-white font-bold text-xs rounded-xl shadow transition-colors inline-flex items-center space-x-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}

        </main>
      </div>

      <QuickApplyModal
        job={selectedJob}
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}

export default function FindJobsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500 font-semibold">Loading job listings...</div>}>
      <JobsContent />
    </Suspense>
  );
}
