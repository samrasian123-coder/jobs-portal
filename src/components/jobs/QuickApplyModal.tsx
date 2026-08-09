'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Upload, AlertCircle } from 'lucide-react';
import { Job } from '@/data/jobs';

interface QuickApplyModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickApplyModal: React.FC<QuickApplyModalProps> = ({ job, isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState(job?.city || 'Riyadh');
  const [coverNote, setCoverNote] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);

  if (!isOpen || !job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setCoverNote('');
    setFileName(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-4 pr-8">
              <span className="inline-flex items-center text-[11px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded border border-emerald-300 mb-2">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                Verified Employers &amp; KSA Direct Apply
              </span>
              <h2 className="text-xl font-extrabold text-slate-900">
                Apply for {job.title}
              </h2>
              <p className="text-xs font-semibold text-saudi-700 mt-1">
                {job.company} — {job.location}
              </p>
            </div>

            {/* Platform Safety Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-900 flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Important Notice:</span> Legitimate KSA employers NEVER ask candidates for fees or visa money. Applications submitted here are forwarded directly to HR.
              </div>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Al-Otaibi"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    KSA Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+966 5X XXX XXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Resume / CV Upload (PDF, DOCX) *
                </label>
                <div className="border-2 border-dashed border-slate-300 hover:border-saudi-500 rounded-xl p-4 text-center bg-slate-50 transition-colors cursor-pointer relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFileName(e.target.files[0].name);
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                  <p className="text-xs font-semibold text-slate-700">
                    {fileName ? (
                      <span className="text-saudi-700 font-bold">{fileName}</span>
                    ) : (
                      'Click or drag your CV file here'
                    )}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Max size: 5MB</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Cover Note (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Briefly state your key qualifications, SCE/SCFHS status, or Iqama transferability..."
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600 focus:bg-white resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-saudi-800 hover:bg-saudi-900 text-white font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>Submit Application to HR</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success State */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Application Submitted!
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Your application for <span className="font-bold text-slate-900">{job.title}</span> has been logged. Thank you for using SaudiJobsHub!
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-500 max-w-sm mx-auto">
              Demo mode: In production, applications trigger direct email delivery to the employer&apos;s HR portal or Qiwa integration.
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-saudi-800 text-white font-bold text-sm rounded-xl hover:bg-saudi-900 transition-colors shadow"
            >
              Done / Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
