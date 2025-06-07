import React from 'react';
import SkipCard, { Skip } from '../SkipCard';

export const SizeFilterDropdown: React.FC<{
  skips: Skip[];
  currentIndex: number;
  onSizeSelect: (size: string) => void;
}> = ({ skips, currentIndex, onSizeSelect }) => {
  const uniqueSizes = Array.from(new Set(skips.map(skip => skip.size))).sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0');
    const numB = parseInt(b.match(/\d+/)?.[0] || '0');
    return numA - numB;
  });

  const sizePrices = uniqueSizes.map(size => {
    const skip = skips.find(s => s.size === size);
    return {
      size,
      price: skip?.price || 0
    };
  });

  return (
    <div className="md:hidden mb-6 px-4">
      <select
        onChange={(e) => onSizeSelect(e.target.value)}
        value={skips[currentIndex]?.size || ''}
        className="w-full p-3 rounded-xl border border-primary-lighter bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
      >
        <option value="">Select Skip Size</option>
        {sizePrices.map(({ size, price }) => (
          <option key={size} value={size}>
            {size} Skip - £{price}
          </option>
        ))}
      </select>
    </div>
  );
};

export const CarouselContainer: React.FC<{
  children: React.ReactNode;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}> = ({ children, scrollContainerRef }) => (
  <div className="relative perspective-1000">
    <div 
      ref={scrollContainerRef}
      className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth px-4 pt-4 pb-12"
      style={{ 
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  </div>
);

export const NavigationButton: React.FC<{
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
}> = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute ${direction === 'prev' ? 'left-2 sm:-left-16' : 'right-2 sm:-right-16'} top-1/2 -translate-y-1/2 z-20 p-2 sm:p-4 rounded-full backdrop-blur-md bg-white/80 border border-primary-lighter text-primary hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-light transition-all duration-300
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 hover:shadow-[0_0_20px_rgba(98,95,255,0.2)] active:scale-95'}`}
  >
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={direction === 'prev' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
    </svg>
  </button>
);

export const Pagination: React.FC<{
  totalItems: number;
  currentIndex: number;
  onPageChange: (index: number) => void;
}> = ({ totalItems, currentIndex, onPageChange }) => (
  <div className="flex items-center justify-center gap-4 mt-8">
    <div className="flex items-center gap-2">
      {Array.from({ length: totalItems }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className={`relative w-3 h-3 rounded-full transition-all duration-300
            ${currentIndex === index 
              ? 'bg-primary scale-125' 
              : 'bg-primary-lighter hover:bg-primary-light'}`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
    <span className="text-sm text-primary font-medium">
      {currentIndex + 1} / {totalItems}
    </span>
  </div>
);

export const SkipCardWrapper: React.FC<{
  skip: Skip;
  index: number;
  currentIndex: number;
  onSelect: (id: string) => void;
  isSelected: boolean;
}> = ({ skip, index, currentIndex, onSelect, isSelected }) => (
  <div 
    className={`flex-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3 snap-center transition-all duration-500
      ${currentIndex === index 
        ? 'transform scale-100 translate-z-0' 
        : 'transform scale-90 translate-z-[-20px] opacity-60'}`}
  >
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl transform transition-transform duration-300 group-hover:scale-105" />
      <SkipCard
        skip={skip}
        onSelect={onSelect}
        isSelected={isSelected}
      />
    </div>
  </div>
); 