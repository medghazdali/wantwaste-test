"use client";

import React, { useState, useEffect } from "react";
import SkipList from "../components/skip-list/SkipList";
import FilterPanel from "../components/filter/FilterPanel";
import SkipDetailsPanel from "../components/skip-details/SkipDetailsPanel";
import Stepper from "../components/Stepper";
import PageHeader from "../components/PageHeader";
import { Skip, FilterState } from "../types/skip";
import { mockSkips } from "../data/mockSkips";

const ChooseSkipPage: React.FC = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkipId, setSelectedSkipId] = useState<string | null>(null);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [filterState, setFilterState] = useState<FilterState>({
    priceSort: 'none',
    showOnlyRoadAllowed: false,
  });

  useEffect(() => {
    // Simulate API call delay
    setLoading(true);
    const timer = setTimeout(() => {
      setSkips(mockSkips);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedSkipId) {
      const skip = skips.find((s) => s.id === selectedSkipId);
      setSelectedSkip(skip || null);
    } else {
      setSelectedSkip(null);
    }
  }, [selectedSkipId, skips]);

  const handleSelectSkip = (id: string) => {
    setSelectedSkipId(id);
  };

  const handleFilterChange = (newFilterState: FilterState) => {
    setFilterState(newFilterState);
  };

  const filteredSkips = skips
    .filter((skip) => {
      if (filterState.showOnlyRoadAllowed) {
        return skip.isAllowedOnRoad;
      }
      return true;
    })
    .sort((a, b) => {
      if (filterState.priceSort === 'asc') {
        return a.price - b.price;
      } else if (filterState.priceSort === 'desc') {
        return b.price - a.price;
      }
      return 0;
    });

  const availableSizes = Array.from(new Set(skips.map(skip => skip.size))).sort();

  // Define the steps for the stepper
  const steps = [
    {
      id: "postcode",
      name: "Postcode",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m1.414-1.414a2 2 0 10-2.828-2.828L7.757 12m0 0l1.414 1.414M12 18V6m0 0V4m0 0H8m4 0h4m-4 0v4m-4 0h8" />
        </svg>
      ),
    },
    {
      id: "waste-type",
      name: "Waste Type",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
    },
    {
      id: "select-skip",
      name: "Select Skip",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m0 0V9a2 2 0 012-2h2m4 0h2m2 0h2M7 15h10v2H7v-2z" />
        </svg>
      ),
    },
    {
      id: "permit-check",
      name: "Permit Check",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.002 12.002 0 002 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-1.01-.17-1.98-.49-2.903" />
        </svg>
      ),
    },
    {
      id: "choose-date",
      name: "Choose Date",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "payment",
      name: "Payment",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h10m-9 4h8a3 3 0 003-3v-6a3 3 0 00-3-3H6a3 3 0 00-3 3v6a3 3 0 003 3z" />
        </svg>
      ),
    },
  ];

  // For now, let's assume "Select Skip" is the current step.
  // In a real application, this would be determined by the actual application state.
  const currentStepId = "select-skip";

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary/10 text-gray-900 flex flex-col items-center p-6">
      {/* Stepper Component */}
      <Stepper steps={steps} currentStepId={currentStepId} />

      {/* Header */}
      <PageHeader
        title="Find Your Perfect Waste Solution"
        description="Select the ideal skip size for efficient and easy waste management"
        count={filteredSkips.length}
      />

      {/* Main Content */}
      <main className="w-full max-w-7xl flex-grow">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg mb-8 text-center shadow-md">
            {error}
          </div>
        )}

        <FilterPanel
          filterState={filterState}
          onFilterChange={handleFilterChange}
        />

        <SkipList
          skips={filteredSkips}
          loading={loading}
          onSelectSkip={handleSelectSkip}
          selectedSkipId={selectedSkipId}
        />
      </main>

      {/* Right-coming panel */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-full md:w-96 shadow-2xl p-6 transform transition-transform duration-300 ease-in-out z-50 ${
          selectedSkip ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SkipDetailsPanel
          selectedSkip={selectedSkip}
          onClose={() => setSelectedSkipId(null)}
        />
      </div>
    </div>
  );
};

export default ChooseSkipPage; 