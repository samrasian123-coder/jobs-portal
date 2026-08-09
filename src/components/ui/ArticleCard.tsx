import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import { CareerArticle } from '@/data/articles';

interface ArticleCardProps {
  article: CareerArticle;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-saudi-400 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Category Tag */}
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-1 text-xs font-bold bg-saudi-50 text-saudi-800 border border-saudi-200 rounded-lg">
            {article.category}
          </span>
          <span className="text-xs text-slate-400 font-medium flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" />
            {article.readTime}
          </span>
        </div>

        <Link href={`/career-tips/${article.slug}`}>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-saudi-800 transition-colors line-clamp-2 mb-2 leading-snug">
            {article.title}
          </h3>
        </Link>

        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
          {article.excerpt}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <User className="w-3.5 h-3.5 text-saudi-700" />
          <span className="font-semibold text-slate-700 truncate max-w-[140px]">{article.author}</span>
        </div>

        <Link
          href={`/career-tips/${article.slug}`}
          className="text-xs font-bold text-saudi-800 group-hover:text-saudi-900 flex items-center space-x-1"
        >
          <span>Read Guide</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
