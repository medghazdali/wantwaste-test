"use client";

import React, { useState, useRef, useEffect } from "react";
import { Skip } from "../SkipCard";
import Loader from "../Loader";
import {
  SizeFilterDropdown,
  CarouselContainer,
  NavigationButton,
  Pagination,
  SkipCardWrapper,
} from "./SkipListStyles";

interface SkipListProps {
  skips: Skip[];
  loading: boolean;
  onSelectSkip: (id: string) => void;
  selectedSkipId: string | null;
}

const SkipList: React.FC<SkipListProps> = ({ skips, loading, onSelectSkip, selectedSkipId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSizeSelect = (size: string) => {
    const index = skips.findIndex(skip => skip.size === size);
    if (index !== -1 && scrollContainerRef.current) {
      setCurrentIndex(index);
      const selectedCardElement = scrollContainerRef.current.children[index] as HTMLElement;
      if (selectedCardElement) {
        const scrollContainerWidth = scrollContainerRef.current.offsetWidth;
        const selectedCardOffsetLeft = selectedCardElement.offsetLeft;
        const selectedCardWidth = selectedCardElement.offsetWidth;

        // Calculate the scroll position to center the selected card
        const scrollLeft = selectedCardOffsetLeft - (scrollContainerWidth / 2) + (selectedCardWidth / 2);

        scrollContainerRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  // Effect to scroll to first element when skips change (filter applied)
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
      setCurrentIndex(0);
    }
  }, [skips]);

  // Effect to focus the selected skip in the carousel
  useEffect(() => {
    if (selectedSkipId && scrollContainerRef.current) {
      const selectedIndex = skips.findIndex(skip => skip.id === selectedSkipId);
      if (selectedIndex !== -1) {
        setCurrentIndex(selectedIndex);
        
        const selectedCardElement = scrollContainerRef.current.children[selectedIndex] as HTMLElement;
        if (selectedCardElement) {
          const scrollContainerWidth = scrollContainerRef.current.offsetWidth;
          const selectedCardOffsetLeft = selectedCardElement.offsetLeft;
          const selectedCardWidth = selectedCardElement.offsetWidth;

          // Calculate the scroll position to center the selected card
          const scrollLeft = selectedCardOffsetLeft - (scrollContainerWidth / 2) + (selectedCardWidth / 2);

          scrollContainerRef.current.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
          });
        }
      }
    }
  }, [selectedSkipId, skips]);

  if (loading) {
    return <Loader />;
  }

  if (!skips || skips.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No skips available at the moment.</p>
      </div>
    );
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollContainerRef.current?.scrollBy({
        left: -scrollContainerRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < skips.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollContainerRef.current?.scrollBy({
        left: scrollContainerRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const handlePageChange = (index: number) => {
    setCurrentIndex(index);
    scrollContainerRef.current?.scrollTo({
      left: index * (scrollContainerRef.current?.offsetWidth || 0),
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative max-w-7xl mx-auto mt-12">
      <SizeFilterDropdown
        skips={skips}
        currentIndex={currentIndex}
        onSizeSelect={handleSizeSelect}
      />

      <CarouselContainer scrollContainerRef={scrollContainerRef}>
        {skips.map((skip, index) => (
          <SkipCardWrapper
            key={skip.id}
            skip={skip}
            index={index}
            currentIndex={currentIndex}
            onSelect={onSelectSkip}
            isSelected={selectedSkipId === skip.id}
          />
        ))}
      </CarouselContainer>

      <NavigationButton
        direction="prev"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      />

      <NavigationButton
        direction="next"
        onClick={handleNext}
        disabled={currentIndex === skips.length - 1}
      />

      <Pagination
        totalItems={skips.length}
        currentIndex={currentIndex}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default SkipList; 