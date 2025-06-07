import React from 'react';
import { Skip } from '../../types/skip';

export const PanelHeader: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => (
  <div className="flex justify-between items-center mb-6 p-6">
    <h2 className="text-3xl font-bold text-primary-darker">Your Selection</h2>
    <button
      onClick={onClose}
      className="text-gray-500 hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light rounded-full p-1"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
);

export const SkipImage: React.FC<{
  size: string;
}> = ({ size }) => {
  const getImageUrl = (size: string) => {
    const yardNumber = size.match(/\d+/)?.[0] || '8';
    return `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${yardNumber}-yarder-skip.jpg`;
  };

  return (
    <div className="w-full h-48 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <img
        src={getImageUrl(size)}
        alt={`${size} skip image`}
        className="max-h-full max-w-full object-contain filter drop-shadow-lg transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export const PriceSection: React.FC<{
  name: string;
  price: number;
}> = ({ name, price }) => (
  <div className="flex justify-between items-start bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-gray-600 text-sm">14 day hire period</p>
    </div>
    <div className="text-right">
      <p className="text-5xl font-extrabold text-primary-darker">£{price}</p>
      <p className="text-sm text-gray-500">including VAT</p>
    </div>
  </div>
);

export const DetailItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string | number | boolean;
}> = ({ icon, label, value }) => (
  <div className="flex items-center gap-2">
    <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/30 rounded-lg">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-semibold text-gray-800">
        {typeof value === 'boolean' ? (value ? 'Allowed' : 'Not Allowed') : value}
      </p>
    </div>
  </div>
);

export const DescriptionSection: React.FC<{
  description: string;
}> = ({ description }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
    <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
    <p className="text-gray-700 text-base leading-relaxed">{description}</p>
  </div>
);

export const AdditionalInfoSection: React.FC = () => (
  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 backdrop-blur-sm">
    <h4 className="text-lg font-semibold text-gray-800 mb-3">Additional Information</h4>
    <ul className="space-y-3 text-gray-700">
      <li className="flex items-start gap-3 bg-white/50 rounded-lg p-3">
        <svg className="h-5 w-5 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Free delivery and collection</span>
      </li>
      <li className="flex items-start gap-3 bg-white/50 rounded-lg p-3">
        <svg className="h-5 w-5 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Environmentally friendly waste disposal</span>
      </li>
      <li className="flex items-start gap-3 bg-white/50 rounded-lg p-3">
        <svg className="h-5 w-5 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>24/7 customer support</span>
      </li>
    </ul>
  </div>
);

export const ActionButtons: React.FC<{
  hasSelectedSkip: boolean;
}> = ({ hasSelectedSkip }) => (
  <div className="flex flex-col space-y-4 mt-auto p-6 bg-white/80 backdrop-blur-sm border-t border-primary-lighter/30">
    <button className="px-8 py-3 rounded-full border border-primary-light text-primary hover:bg-primary-lighter hover:border-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light">
      Back
    </button>
    <button
      className={`px-8 py-3 rounded-full font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        ${hasSelectedSkip
          ? "bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-darker shadow-lg"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
      disabled={!hasSelectedSkip}
    >
      Continue →
    </button>
  </div>
); 