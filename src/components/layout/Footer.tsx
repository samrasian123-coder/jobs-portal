import React from 'react';
import Link from 'next/link';
import { Briefcase, ShieldCheck, MapPin, Building, ChevronRight, Mail, Phone, ExternalLink } from 'lucide-react';
import { SAUDI_CITIES } from '@/data/cities';
import { CATEGORIES } from '@/data/categories';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-saudi-700 flex items-center justify-center text-white shadow-md">
                <Briefcase className="w-5 h-5 text-emerald-300" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Saudi<span className="text-emerald-400">Jobs</span>Hub
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              SaudiJobsHub is a modern, independent job discovery portal dedicated to connecting job seekers with legitimate career opportunities across all major provinces and giga-projects in the Kingdom of Saudi Arabia.
            </p>

            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2 text-xs">
              <div className="flex items-center text-emerald-400 font-semibold space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Legitimate Job Search Promise</span>
              </div>
              <p className="text-slate-400">
                SaudiJobsHub does not charge job seekers fees, nor do we create fake employer offers. Always apply directly via verified company career portals.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider text-emerald-400">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-600" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-emerald-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-600" />
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-emerald-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-600" />
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/cities" className="hover:text-emerald-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-600" />
                  Saudi Cities
                </Link>
              </li>
              <li>
                <Link href="/career-tips" className="hover:text-emerald-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-600" />
                  Career Advice & CV Tips
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-600" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-600" />
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Cities Column */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider text-emerald-400">
              Jobs by KSA City
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SAUDI_CITIES.slice(0, 7).map((city) => (
                <li key={city.id}>
                  <Link href={`/jobs?city=${city.name}`} className="hover:text-emerald-400 transition-colors flex items-center text-slate-400">
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-emerald-500 shrink-0" />
                    Jobs in {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Categories & Legal Column */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider text-emerald-400">
              Legal & Info
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service & Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/terms#disclaimer" className="hover:text-emerald-400 transition-colors">
                  Recruitment Compliance Notice
                </Link>
              </li>
              <li>
                <Link href="/about#legitimate-listing" className="hover:text-emerald-400 transition-colors">
                  Fair Hiring Statement
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                External Verification Portals
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-500">
                <li>
                  <a href="https://qiwa.sa" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center">
                    Qiwa Platform (MHRSD) <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="https://monshaat.gov.sa" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center">
                    Monsha&apos;at KSA <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} SaudiJobsHub. All rights reserved.</span>
            <span className="text-slate-700">|</span>
            <span>Independent Job Listing Directory</span>
          </div>

          <div className="text-center md:text-right text-slate-500 max-w-md">
            <span>
              Disclaimer: Sample &amp; demo listings are marked clearly during preview. All trademarks and company logos belong to their respective registered owners in KSA.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
