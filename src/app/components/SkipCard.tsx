"use client";

import React from "react";

export interface Skip {
  id: string;
  name: string;
  size: string;
  price: number;
  description: string;
  imageUrl: string;
  isAllowedOnRoad: boolean;
}

interface SkipCardProps {
  skip: Skip;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, onSelect, isSelected }) => {
  const getImageUrl = (size: string) => {
    // Extract the number from size string (e.g., "8 Yard" -> "8")
    const yardNumber = size.match(/\d+/)?.[0] || '8';
    return `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${yardNumber}-yarder-skip.jpg`;
  };

  return (
    <div
      className={`relative rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 ease-in-out
        ${isSelected ? "bg-primary-lighter ring-4 ring-primary scale-105 shadow-2xl" : "bg-white hover:scale-103 hover:shadow-xl"}`}
      onClick={() => onSelect(skip.id)}
    >
      <div className="absolute top-3 right-3 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full shadow-md z-10">
        {skip.size}
      </div>

      {skip.isAllowedOnRoad === false && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md z-10">
          <span role="img" aria-label="warning" className="mr-1">⚠️</span>
          Not Allowed On Road
        </div>
      )}

      <div className="w-full h-40 bg-primary-lighter flex items-center justify-center p-3">
        <img
          src={getImageUrl(skip.size)}
          alt={`${skip.name} image`}
          className="max-h-full max-w-full object-contain filter drop-shadow-lg"
        />
      </div>
      <div className="p-5 text-center flex flex-col items-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-1 leading-tight">
          {skip.name}
        </h3>
        <p className="text-gray-600 text-xs mb-3">14 day hire period</p>
        <span className="text-4xl font-extrabold text-primary-darker mb-4">
          £{skip.price}
        </span>

        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {skip.description}
        </p>

        <button
          className={`w-full py-3 rounded-full font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
            ${isSelected
              ? "bg-primary-dark shadow-xl cursor-default border-2 border-primary-darker"
              : "bg-primary hover:bg-primary-dark"}`}
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            onSelect(skip.id);
          }}
        >
          {isSelected ? "Selected" : "Select This Skip"}
        </button>
      </div>
    </div>
  );
};

export default SkipCard; 