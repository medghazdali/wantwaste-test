import React from 'react';
import { FilterState } from '../../types/skip';
import {
  BackgroundEffects,
  FilterContainer,
  FilterSection,
  PriceSortSelect,
  RoadAllowedToggle,
} from './FilterPanelStyles';

interface FilterPanelProps {
  filterState: FilterState;
  onFilterChange: (newState: FilterState) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filterState,
  onFilterChange,
}) => {
  const handlePriceSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({
      ...filterState,
      priceSort: e.target.value as 'asc' | 'desc' | 'none',
    });
  };

  const handleRoadAllowedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filterState,
      showOnlyRoadAllowed: e.target.checked,
    });
  };

  return (
    <div className="relative">
      <BackgroundEffects />
      <FilterContainer>
        <FilterSection
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          }
          title="Sort by Price"
          description="Arrange skips by price"
        >
          <PriceSortSelect
            value={filterState.priceSort || 'asc'}
            onChange={handlePriceSort}
          />
        </FilterSection>

        <FilterSection
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          }
          title="Road Placement"
          description="Show only road-allowed skips"
        >
          <RoadAllowedToggle
            checked={filterState.showOnlyRoadAllowed}
            onChange={handleRoadAllowedChange}
          />
        </FilterSection>
      </FilterContainer>
    </div>
  );
};

export default FilterPanel; 