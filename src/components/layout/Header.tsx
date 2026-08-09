'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, Menu, X, Search, Sparkles, Building, MapPin, BookOpen, Info, Mail } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', icon: Briefcase },
    { href: '/jobs', label: 'Find Jobs', icon: Search },
    { href: '/categories', label: 'Categories', icon: Building },
    { href: '/cities', label: 'Cities', icon: MapPin },
    { href: '/career-tips', label: 'Career Tips', icon: BookOpen },
    { href: '/about', label: 'About', icon: Info },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top Banner Notice */}
      <div className="bg-saudi-900 text-slate-100 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-emerald-200">Official Gateway:</span>
            <span className="hidden sm:inline">Search verified employment opportunities across Saudi Arabia (Vision 2030)</span>
            <span className="sm:hidden">Jobs in Riyadh, Jeddah, Dammam & KSA</span>
          </div>
          <div className="flex items-center space-x-4 text-slate-300">
            <Link href="/about" className="hover:text-emerald-300 transition-colors">
              Legitimate Listings Guarantee
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-saudi-900 via-saudi-800 to-saudi-600 flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform duration-200">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                  Saudi<span className="text-saudi-700">Jobs</span>Hub
                </span>
                <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300 rounded uppercase tracking-wider">
                  KSA
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                Saudi Arabia Employment Portal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 flex items-center space-x-1.5 ${
                    active
                      ? 'bg-saudi-50 text-saudi-800 border border-saudi-200/80 font-bold shadow-sm'
                      : 'text-slate-600 hover:text-saudi-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Trigger */}
          <div className="flex items-center space-x-3">
            <Link
              href="/jobs"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-saudi-800 to-saudi-700 hover:from-saudi-900 hover:to-saudi-800 rounded-xl shadow-md hover:shadow-lg shadow-emerald-900/10 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Search className="w-4 h-4 mr-2" />
              Browse Jobs
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-slate-700 hover:text-saudi-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-800" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200" id="mobile-menu">
          <div className="px-4 pt-3 pb-6 space-y-1.5 sm:px-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center px-3.5 py-3 rounded-xl text-base font-medium transition-colors ${
                    active
                      ? 'bg-saudi-700 text-white font-bold shadow-md'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 mr-3 ${active ? 'text-white' : 'text-slate-500'}`} />
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 mt-4 border-t border-slate-200 flex flex-col space-y-2">
              <Link
                href="/jobs"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 text-base font-bold text-white bg-saudi-800 hover:bg-saudi-900 rounded-xl shadow-md"
              >
                <Search className="w-5 h-5 mr-2" />
                Find Jobs in Saudi Arabia
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
