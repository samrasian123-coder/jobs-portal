import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 mb-6 py-2 overflow-x-auto" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-saudi-800 flex items-center shrink-0">
        <Home className="w-4 h-4 mr-1 text-slate-400" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          {item.href ? (
            <Link href={item.href} className="hover:text-saudi-800 shrink-0">
              {item.label}
            </Link>
          ) : (
            <span className="font-bold text-slate-900 truncate max-w-[200px] sm:max-w-md shrink-0">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
