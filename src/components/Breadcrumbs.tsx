import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home as HomeIcon } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav id="breadcrumbs-nav" aria-label="Breadcrumb" className="py-3 px-4 bg-slate-100 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700/60 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 overflow-x-auto whitespace-nowrap">
        <Link
          to="/"
          id="breadcrumb-home-link"
          className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
        >
          <HomeIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Home</span>
        </Link>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            {item.path ? (
              <Link
                to={item.path}
                id={`breadcrumb-link-${index}`}
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ) : (
              <span id={`breadcrumb-current-${index}`} className="text-emerald-700 dark:text-emerald-400 font-semibold">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};
