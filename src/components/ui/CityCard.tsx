import React from 'react';
import Link from 'next/link';
import { MapPin, Building, ArrowUpRight } from 'lucide-react';
import { SaudiCity } from '@/data/cities';

interface CityCardProps {
  city: SaudiCity;
}

export const CityCard: React.FC<CityCardProps> = ({ city }) => {
  return (
    <Link
      href={`/jobs?city=${encodeURIComponent(city.name)}`}
      className="group relative bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-saudi-400 transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        {/* City Title & Arabic Tag */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-xs font-semibold text-slate-500 block">{city.region}</span>
            <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-saudi-800 transition-colors flex items-center space-x-2">
              <span>{city.name}</span>
              <span className="text-sm font-bold text-saudi-700 font-serif">({city.arabicName})</span>
            </h3>
          </div>
          <div className="w-9 h-9 rounded-xl bg-saudi-50 border border-saudi-200 flex items-center justify-center text-saudi-800 shrink-0 group-hover:bg-saudi-700 group-hover:text-white transition-colors">
            <MapPin className="w-5 h-5" />
          </div>
        </div>

        {/* Landmark */}
        <div className="text-xs text-slate-600 font-medium flex items-center space-x-1 mb-3">
          <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">{city.landmark}</span>
        </div>

        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {city.description}
        </p>
      </div>

      <div>
        {/* Featured Sectors Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {city.featuredSectors.slice(0, 3).map((sector, i) => (
            <span key={i} className="text-[11px] font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
              {sector}
            </span>
          ))}
        </div>

        {/* Card Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-saudi-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            {city.activeJobsCount}+ Active Jobs
          </span>
          <span className="text-xs font-bold text-slate-700 group-hover:text-saudi-800 flex items-center">
            Explore <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};
