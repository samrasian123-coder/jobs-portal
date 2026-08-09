import React from 'react';
import Link from 'next/link';
import { 
  Code, 
  Wrench, 
  Stethoscope, 
  Calculator, 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  Truck, 
  Hotel, 
  GraduationCap, 
  Briefcase,
  ArrowUpRight 
} from 'lucide-react';
import { JobCategory } from '@/data/categories';

interface CategoryCardProps {
  category: JobCategory;
}

const iconMap: Record<string, React.ElementType> = {
  Code,
  Wrench,
  Stethoscope,
  Calculator,
  Building2,
  TrendingUp,
  ShieldCheck,
  Truck,
  Hotel,
  GraduationCap,
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const IconComponent = iconMap[category.iconName] || Briefcase;

  return (
    <Link
      href={`/jobs?category=${encodeURIComponent(category.name)}`}
      className="group relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-saudi-400 transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        {/* Category Icon & Count Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-200`}>
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold px-2.5 py-1 bg-saudi-50 text-saudi-800 border border-saudi-200/80 rounded-full">
            {category.featuredCount}+ Openings
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-saudi-700 transition-colors flex items-center justify-between">
          <span>{category.name}</span>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-saudi-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </h3>

        <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-saudi-800">
        <span>Browse {category.name} jobs</span>
        <span className="text-slate-400 group-hover:text-saudi-700">→</span>
      </div>
    </Link>
  );
};
