'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  MapPin, 
  Clock, 
  Banknote, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Globe,
  ArrowLeft
} from 'lucide-react';
import { JOBS, Job } from '@/data/jobs';
import { JobCard } from '@/components/jobs/JobCard';
import { QuickApplyModal } from '@/components/jobs/QuickApplyModal';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { AdBanner } from '@/components/monetization/AdBanner';

export default function JobDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const job = JOBS.find((j) => j.slug === slug);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-slate-900">Job Listing Not Found</h1>
        <p className="text-slate-600">The job position you are looking for may have expired or been removed.</p>
        <Link href="/jobs" className="px-6 py-2.5 bg-saudi-800 text-white font-bold rounded-xl inline-block">
          Return to Job Search
        </Link>
      </div>
    );
  }

  const relatedJobs = JOBS.filter(
    (j) => j.id !== job.id && (j.category === job.category || j.city === job.city)
  ).slice(0, 2);

  const handleApplyClick = (j: Job) => {
    setSelectedJob(j);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      <Breadcrumb
        items={[
          { label: 'Jobs', href: '/jobs' },
          { label: job.category, href: `/jobs?category=${encodeURIComponent(job.category)}` },
          { label: job.title },
        ]}
      />

      {/* Main Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm mb-8 relative overflow-hidden">
        
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-saudi-50 text-saudi-800 text-xs font-bold rounded-lg border border-saudi-200">
              {job.category}
            </span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg">
              {job.jobType}
            </span>
          </div>

          {job.isOfficialSource ? (
            <span className="inline-flex items-center text-xs font-extrabold px-3 py-1 bg-blue-50 text-blue-900 rounded-lg border border-blue-200">
              <Globe className="w-4 h-4 mr-1.5 text-blue-600 shrink-0" />
              Source: {job.sourceName || 'Official Careers'}
            </span>
          ) : (
            <span className="inline-flex items-center text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-600 rounded border border-slate-200">
              <ShieldCheck className="w-4 h-4 mr-1 text-emerald-600" />
              DEMO LISTING
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 shadow-md ${job.companyLogoBg || 'bg-saudi-900 text-white'}`}>
              {job.company.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {job.title}
              </h1>
              <p className="text-base font-bold text-saudi-700 mt-1 flex items-center space-x-2">
                <span>{job.company}</span>
                {job.isOfficialSource && (
                  <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Official External Source
                  </span>
                )}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 mt-2">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-saudi-700" />
                  {job.location}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-slate-400" />
                  {job.postedDate}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:items-end w-full sm:w-auto space-y-3">
            {job.isOfficialSource && job.applyUrl ? (
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all duration-150 flex items-center justify-center space-x-2"
              >
                <span>Apply on Official Website</span>
                <ExternalLink className="w-5 h-5 ml-1" />
              </a>
            ) : (
              <button
                onClick={() => handleApplyClick(job)}
                className="w-full sm:w-auto px-8 py-3.5 bg-saudi-800 hover:bg-saudi-900 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all duration-150 flex items-center justify-center space-x-2"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
                <span>Apply Now</span>
              </button>
            )}

            <span className="text-[11px] text-slate-400 text-center sm:text-right">
              {job.isOfficialSource ? `Direct link to ${job.sourceName}` : 'Direct HR submission • No candidate fees'}
            </span>
          </div>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100 text-xs">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <span className="text-slate-400 font-medium block">Career Source</span>
            <span className="font-extrabold text-blue-900 text-sm mt-0.5 block truncate">
              {job.sourceName || 'SaudiJobsHub Verified'}
            </span>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <span className="text-slate-400 font-medium block">Experience Level</span>
            <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">
              {job.experienceLevel}
            </span>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <span className="text-slate-400 font-medium block">City / Province</span>
            <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">
              {job.city}
            </span>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <span className="text-slate-400 font-medium block">Employment Contract</span>
            <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">
              {job.jobType}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Full Details */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Overview */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
              Role Summary
            </h2>
            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              {job.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
              Key Responsibilities
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-saudi-700 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
              Qualifications &amp; Requirements
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-saudi-700 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
              Benefits &amp; Package Highlights
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              {job.benefits.map((ben, idx) => (
                <li key={idx} className="flex items-center space-x-2 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="font-semibold text-slate-800">{ben}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Instructions */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-4 border border-slate-800">
            <h2 className="text-xl font-extrabold text-white">
              Application Instructions
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {job.isOfficialSource ? (
                <>This position is sourced directly from <strong>{job.sourceName}</strong>. Click below to open the official employer application portal in a new tab.</>
              ) : (
                <>Click &quot;Apply Now&quot; to submit your credentials directly. Applications are routed to verified employer HR channels with zero candidate fees.</>
              )}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              {job.isOfficialSource && job.applyUrl ? (
                <a
                  href={job.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm rounded-xl transition-colors shadow flex items-center space-x-2"
                >
                  <span>Apply on Official Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={() => handleApplyClick(job)}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-sm rounded-xl transition-colors shadow"
                >
                  Apply via SaudiJobsHub
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-6">
          
          {/* Employer Summary Box */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-3">
              Employer &amp; Source Info
            </h3>
            <div className="space-y-3 text-xs text-slate-600">
              <div>
                <span className="text-slate-400 block font-medium">Company</span>
                <span className="font-extrabold text-slate-900 text-sm">{job.company}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Location</span>
                <span className="font-bold text-slate-800">{job.location}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Verified Source</span>
                <span className="text-blue-700 font-bold inline-flex items-center mt-0.5">
                  <Globe className="w-4 h-4 mr-1 text-blue-600" />
                  {job.sourceName || 'Verified Portal'}
                </span>
              </div>
            </div>
          </div>

          {/* Ad Placement */}
          <AdBanner
            type="sidebar"
            title="Saudi Arabia Interview Coaching"
            subtitle="Practice mock interviews tailored for GCC corporate culture."
            ctaText="Explore Tips"
            ctaLink="/career-tips/saudi-job-interview-tips"
          />

          {/* Related Jobs Box */}
          {relatedJobs.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 text-base">
                Similar Jobs
              </h3>
              <div className="space-y-4">
                {relatedJobs.map((rJob) => (
                  <JobCard key={rJob.id} job={rJob} onApplyClick={handleApplyClick} />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      <QuickApplyModal
        job={selectedJob}
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}
