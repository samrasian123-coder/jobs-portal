import React from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Privacy Policy | SaudiJobsHub',
  description: 'Privacy Policy and Personal Data Protection details for SaudiJobsHub users in Saudi Arabia.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <h1 className="text-3xl font-black text-slate-900 border-b border-slate-100 pb-4">
          Privacy Policy &amp; Data Protection
        </h1>

        <p className="text-xs text-slate-500 font-semibold">
          Last Updated: August 2026
        </p>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">1. Introduction</h2>
            <p>
              SaudiJobsHub (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects the privacy of our website visitors and job seekers. This Privacy Policy explains how we collect, use, and safeguard personal information when you use our job portal services across Saudi Arabia.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide when applying for jobs or submitting contact inquiries, including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name, Email Address, and Phone Number (+966 KSA mobile)</li>
              <li>Resume / CV attachments and professional qualifications</li>
              <li>City location within Saudi Arabia and preferred job categories</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">3. How We Use Your Information</h2>
            <p>
              Your information is used strictly to facilitate job applications to verified employers, respond to support requests, and improve portal navigation. We NEVER sell candidate databases to third-party telemarketers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">4. Saudi Personal Data Protection Law (PDPL)</h2>
            <p>
              We comply with the principles of the Saudi Arabia Personal Data Protection Law (PDPL). You have the right to request deletion or modification of your candidate profile data at any time by contacting privacy@saudijobshub.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
