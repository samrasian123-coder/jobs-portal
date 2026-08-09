'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Building2, ChevronDown } from 'lucide-react';
import { SAUDI_CITIES } from '@/data/cities';
import { CATEGORIES } from '@/data/categories';

interface SearchBarProps {
  initialKeyword?: string;
  initialCity?: string;
  initialCategory?: string;
  compact?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialKeyword = '',
  initialCity = '',
  initialCategory = '',
  compact = false,
}) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState(initialKeyword);
  const [city, setCity] = useState(initialCity);
  const [category, setCategory] = useState(initialCategory);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set('q', keyword.trim());
    if (city) params.set('city', city);
    if (category) params.set('category', category);

    const queryString = params.toString();
    router.push(`/jobs${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`w-full bg-white border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-900/10 transition-all ${
        compact ? 'p-2 sm:p-3' : 'p-3 sm:p-5'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        
        {/* Field 1: Keyword Input */}
        <div className="md:col-span-5 relative group">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-saudi-700">
            <Search className="w-5 h-5 transition-colors" />
          </div>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Job title, skills, or keyword (e.g. Engineer, Accountant)"
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600 focus:bg-white transition-all font-medium"
          />
        </div>

        {/* Field 2: City Select */}
        <div className="md:col-span-3 relative group">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-saudi-700">
            <MapPin className="w-5 h-5 transition-colors" />
          </div>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full pl-11 pr-9 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600 focus:bg-white transition-all appearance-none cursor-pointer font-medium"
          >
            <option value="">All Saudi Cities</option>
            {SAUDI_CITIES.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name} ({c.arabicName})
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Field 3: Category Select */}
        <div className="md:col-span-3 relative group">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-saudi-700">
            <Building2 className="w-5 h-5 transition-colors" />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full pl-11 pr-9 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600 focus:bg-white transition-all appearance-none cursor-pointer font-medium"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Field 4: Submit Button */}
        <div className="md:col-span-1">
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-saudi-800 hover:bg-saudi-900 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Search Jobs"
          >
            <Search className="w-5 h-5" />
            <span className="md:hidden">Search Jobs</span>
          </button>
        </div>
      </div>
    </form>
  );
};
