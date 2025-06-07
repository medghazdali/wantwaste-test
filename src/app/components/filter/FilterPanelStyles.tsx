import React from 'react';

export const BackgroundEffects: React.FC = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-primary-lighter/50 to-primary-light/30 rounded-3xl" />
    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl" />
  </>
);

export const FilterContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6 mb-4 border border-primary-lighter/50">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {children}
    </div>
  </div>
);

export const FilterSection: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}> = ({ icon, title, description, children }) => (
  <div className="relative">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2.5 bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-bold text-primary-darker">{title}</h3>
        <p className="text-xs text-primary/80">{description}</p>
      </div>
    </div>
    {children}
  </div>
);

export const PriceSortSelect: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ value, onChange }) => (
  <select
    value={value}
    onChange={onChange}
    className="w-full p-2.5 rounded-xl border border-primary-lighter bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
  >
    <option value="asc">Price: Low to High</option>
    <option value="desc">Price: High to Low</option>
    <option value="none">No sorting</option>
  </select>
);

export const RoadAllowedToggle: React.FC<{
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ checked, onChange }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="sr-only peer"
    />
    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-light rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
    <span className="ml-3 text-sm font-medium text-gray-700">
      {checked ? 'Road Allowed Only' : 'Show All'}
    </span>
  </label>
); 