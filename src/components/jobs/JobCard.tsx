'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Banknote, ShieldCheck, ArrowRight, Eye, ExternalLink, Globe } from 'lucide-react';
import { Job } from '@/data/jobs';

interface JobCardProps {
  job: Job;
  onApplyClick?: (job: Job) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onApplyClick }) => {
  return (
    <div className="group relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-saudi-400 transition-all duration-200 flex flex-col justify-between">
      
      <div>
        {/* Top Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="px-2.5 py-1 text-xs font-bold bg-saudi-50 text-saudi-800 border border-saudi-200 rounded-lg">
              {job.category}
            </span>
            <span className="px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-700 rounded-lg">
              {job.jobType}
            </span>
            {job.isFeatured && (
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 rounded uppercase tracking-wider">
                Featured
              </span>
            )}
          </div>

          {/* Official Source Badge vs Demo Badge */}
          {job.isOfficialSource ? (
            <span className="inline-flex items-center text-[10px] font-extrabold px-2.5 py-0.5 bg-blue-50 text-blue-900 rounded border border-blue-200">
              <Globe className="w-3 h-3 mr-1 text-blue-600 shrink-0" />
              Source: {job.sourceName || 'Official Careers'}
            </span>
          ) : (
            <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-500 rounded border border-slate-200" title="Demo listing for development preview">
              <ShieldCheck className="w-3 h-3 mr-1 text-emerald-600" />
              DEMO
            </span>
          )}
        </div>

        {/* Header: Company Logo & Job Title */}
        <div className="flex items-start space-x-3 sm:space-x-4 mb-3">
          <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-black text-lg shrink-0 shadow-sm ${job.companyLogoBg || 'bg-saudi-900 text-white'}`}>
            {job.company.charAt(0)}
          </div>
          <div>
            <Link
              href={`/jobs/${job.slug}`}
              className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-saudi-700 transition-colors line-clamp-1"
            >
              {job.title}
            </Link>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 flex items-center space-x-1.5 mt-0.5">
              <span>{job.company}</span>
              {job.isOfficialSource && (
                <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">
                  Official
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Location & Salary Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-600 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-4 h-4 text-saudi-700 shrink-0" />
            <span className="truncate">{job.location}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Banknote className="w-4 h-4 text-emerald-700 shrink-0" />
            <span className="font-semibold text-slate-900 truncate">
              {job.salaryRange || 'See Official Portal'}
            </span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {job.shortDescription}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-col">
          <span className="text-[11px] text-slate-400 font-medium">
            Posted {job.postedDate}
          </span>
          {job.lastCheckedDate && (
            <span className="text-[10px] text-slate-400">
              Verified: {job.lastCheckedDate}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {/* View Details Link */}
          <Link
            href={`/jobs/${job.slug}`}
            className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-saudi-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center space-x-1"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </Link>
          
          {/* Official Apply Button vs Quick Apply Modal */}
          {job.isOfficialSource && job.applyUrl ? (
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-extrabold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow transition-all duration-150 flex items-center space-x-1"
            >
              <span>Apply on Official Website</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          ) : (
            <button
              onClick={() => onApplyClick ? onApplyClick(job) : null}
              className="px-3.5 py-2 text-xs font-bold text-white bg-saudi-800 hover:bg-saudi-900 rounded-lg shadow transition-all duration-150 flex items-center space-x-1"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
