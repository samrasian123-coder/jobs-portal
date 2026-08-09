import React from 'react';
import { ExternalLink, Award, Sparkles } from 'lucide-react';

interface AdBannerProps {
  type?: 'leaderboard' | 'sidebar' | 'in-feed';
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({
  type = 'in-feed',
  title = 'Professional KSA CV Writing & Attestation Assistance',
  subtitle = 'Get your resume optimized for Saudi Applicant Tracking Systems (ATS) and Ministry standards.',
  ctaText = 'Explore Service',
  ctaLink = '/career-tips/how-to-write-saudi-job-cv',
}) => {
  if (type === 'leaderboard') {
    return (
      <div className="w-full my-6 p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-saudi-950 to-slate-900 border border-slate-800 rounded-2xl shadow-md text-white relative overflow-hidden">
        <div className="absolute top-2 right-3 text-[9px] uppercase font-extrabold tracking-widest text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
          Advertisement Placeholder
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 sm:pt-0">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">{title}</h4>
              <p className="text-xs text-slate-300 line-clamp-1">{subtitle}</p>
            </div>
          </div>
          <a
            href={ctaLink}
            className="shrink-0 px-4 py-2 text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl shadow transition-colors flex items-center space-x-1"
          >
            <span>{ctaText}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  if (type === 'sidebar') {
    return (
      <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md relative">
        <div className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 mb-3 bg-slate-950 inline-block px-2 py-0.5 rounded border border-slate-800">
          Sponsored Placement Slot
        </div>
        
        <div className="w-10 h-10 rounded-xl bg-saudi-800/80 border border-saudi-600/40 flex items-center justify-center text-emerald-400 mb-3">
          <Sparkles className="w-5 h-5" />
        </div>

        <h4 className="font-bold text-sm text-white mb-1.5 leading-snug">{title}</h4>
        <p className="text-xs text-slate-300 leading-relaxed mb-4">{subtitle}</p>

        <a
          href={ctaLink}
          className="w-full py-2.5 px-4 bg-saudi-700 hover:bg-saudi-600 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center space-x-1.5"
        >
          <span>{ctaText}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    );
  }

  // Default: In-feed format
  return (
    <div className="my-6 p-4 sm:p-5 bg-gradient-to-r from-emerald-50 via-white to-slate-50 border-2 border-dashed border-emerald-300/80 rounded-2xl shadow-sm relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
          Advertisement Placeholder
        </span>
        <span className="text-[11px] text-slate-400">Verified Partner Space</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h4 className="font-bold text-slate-900 text-sm sm:text-base">{title}</h4>
          <p className="text-xs text-slate-600 mt-0.5">{subtitle}</p>
        </div>
        <a
          href={ctaLink}
          className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors shrink-0 shadow"
        >
          <span>{ctaText}</span>
          <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
        </a>
      </div>
    </div>
  );
};
