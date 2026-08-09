import React from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Terms of Service & Disclaimer | SaudiJobsHub',
  description: 'Terms of Service, recruitment disclaimer, and fair use guidelines for SaudiJobsHub portal.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Terms of Service' }]} />

      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <h1 className="text-3xl font-black text-slate-900 border-b border-slate-100 pb-4">
          Terms of Service &amp; Legal Disclaimer
        </h1>

        <p className="text-xs text-slate-500 font-semibold">
          Effective Date: August 2026
        </p>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          
          <section className="space-y-2" id="disclaimer">
            <h2 className="text-lg font-bold text-slate-900 text-saudi-800">
              1. Legitimate Recruitment &amp; Zero Fee Disclaimer
            </h2>
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 font-medium">
              SaudiJobsHub is an independent job discovery directory. Under Saudi Arabia Labor Law, employers and recruitment agencies are strictly prohibited from demanding payment from candidates for job offers, visa processing, or interviews. If anyone asks you for money in exchange for a job offer, report them immediately.
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">2. Demo Listings &amp; Verified Employer Feeds</h2>
            <p>
              During portal development and preview modes, representative demo listings are tagged clearly with <span className="font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">DEMO LISTING</span> badges. Demonstration listings are provided strictly to preview interface functionality and must be replaced with official employer API feeds upon database deployment.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">3. Monetization &amp; Partner Service Transparency</h2>
            <p>
              Ad banners, partner referral slots, or sponsored listings on SaudiJobsHub are clearly marked as ADVERTISEMENT or PARTNER SERVICES. We do not make claims of guaranteed per-click income or fixed visitor earnings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">4. User Responsibilities</h2>
            <p>
              Job seekers agree to submit truthful, accurate resume credentials. Employers and partners agree to post accurate job requirements that adhere to KSA Labor Law regulations.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
