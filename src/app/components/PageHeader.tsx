import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  count: number;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, count }) => {
  return (
    <header className="w-full max-w-7xl text-center mb-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-3 sm:gap-0">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-primary-darker">
          {title}
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Showing {count} skips</span>
          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary-darker font-bold">{count}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
        {description}
      </p>
    </header>
  );
};

export default PageHeader; 