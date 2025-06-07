import React from 'react';
import { Skip } from '../../types/skip';
import {
  PanelHeader,
  SkipImage,
  PriceSection,
  DetailItem,
  DescriptionSection,
  AdditionalInfoSection,
  ActionButtons,
} from './SkipDetailsStyles';

interface SkipDetailsPanelProps {
  selectedSkip: Skip | null;
  onClose: () => void;
}

const SkipDetailsPanel: React.FC<SkipDetailsPanelProps> = ({ selectedSkip, onClose }) => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-white via-primary-lighter/5 to-primary-lighter/10">
      <PanelHeader onClose={onClose} />

      {selectedSkip ? (
        <div className="flex-grow overflow-y-auto px-6">
          <div className="mb-6">
            <SkipImage size={selectedSkip.size} />

            <div className="space-y-6">
              <PriceSection name={selectedSkip.name} price={selectedSkip.price} />

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 space-y-3 backdrop-blur-sm">
                <DetailItem
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-darker" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z" clipRule="evenodd" />
                    </svg>
                  }
                  label="Size"
                  value={selectedSkip.size}
                />

                <DetailItem
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-darker" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  }
                  label="Road Placement"
                  value={selectedSkip.isAllowedOnRoad}
                />

                <DetailItem
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-darker" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  }
                  label="Hire Period"
                  value={`${selectedSkip.hire_period_days} Days`}
                />

                <DetailItem
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-darker" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  }
                  label="Transport Cost"
                  value={selectedSkip.transport_cost ? `£${selectedSkip.transport_cost}` : 'Included in price'}
                />

                <DetailItem
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-darker" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  }
                  label="Per Tonne Cost"
                  value={selectedSkip.per_tonne_cost ? `£${selectedSkip.per_tonne_cost}` : 'Not applicable'}
                />

                <DetailItem
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-darker" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  }
                  label="VAT"
                  value={`${selectedSkip.vat}%`}
                />

                <DetailItem
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-darker" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  }
                  label="Area"
                  value={selectedSkip.area}
                />

                <DetailItem
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-darker" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  }
                  label="Heavy Waste"
                  value={selectedSkip.allows_heavy_waste}
                />

                <DetailItem
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-darker" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  }
                  label="Status"
                  value={!selectedSkip.forbidden}
                />
              </div>

              <DescriptionSection description={selectedSkip.description} />
              <AdditionalInfoSection />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center text-center text-gray-500 text-xl">
          Select a skip to see details here.
        </div>
      )}

      <ActionButtons hasSelectedSkip={!!selectedSkip} />
    </div>
  );
};

export default SkipDetailsPanel; 