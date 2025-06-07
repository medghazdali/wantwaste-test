import React from "react";

interface StepperProps {
  steps: { id: string; name: string; icon: React.ReactNode }[];
  currentStepId: string;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStepId }) => {
  const currentIndex = steps.findIndex(step => step.id === currentStepId);
  
  // For mobile, we'll show current step and one step before and after
  const visibleSteps = steps.map((step, index) => {
    const isVisible = Math.abs(index - currentIndex) <= 1;
    return { ...step, isVisible };
  });

  return (
    <div className="w-full max-w-7xl mx-auto mb-8 px-4 sm:px-6">
      {/* Desktop View */}
      <div className="hidden sm:flex items-center justify-between text-gray-500">
        {steps.map((step, index) => {
          const isActive = steps.findIndex(s => s.id === currentStepId) >= index;
          const isCurrent = step.id === currentStepId;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-in-out
                    ${isActive
                      ? "bg-primary-darker text-white shadow-lg"
                      : "bg-gray-100 text-gray-400"}
                  `}
                >
                  {step.icon}
                </div>
                <span
                  className={`mt-2 text-center text-xs font-semibold transition-colors duration-300 ease-in-out
                    ${isCurrent ? "text-primary-darker" : isActive ? "text-primary" : "text-gray-500"}
                  `}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 transition-all duration-300 ease-in-out
                    ${isActive ? "bg-primary" : "bg-gray-300"}
                  `}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile View */}
      <div className="sm:hidden overflow-x-auto scrollbar-hide">
        <div className="flex items-center space-x-4 min-w-max px-4">
          {visibleSteps.map((step, index) => {
            const isActive = steps.findIndex(s => s.id === currentStepId) >= index;
            const isCurrent = step.id === currentStepId;

            return (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-in-out
                      ${isActive
                        ? "bg-primary-darker text-white shadow-lg"
                        : "bg-gray-100 text-gray-400"}
                    `}
                  >
                    {step.icon}
                  </div>
                  <span
                    className={`mt-1 text-center text-xs font-semibold transition-colors duration-300 ease-in-out
                      ${isCurrent ? "text-primary-darker" : isActive ? "text-primary" : "text-gray-500"}
                    `}
                  >
                    {step.name}
                  </span>
                </div>
                {index < visibleSteps.length - 1 && (
                  <div
                    className={`w-8 h-0.5 mx-2 transition-all duration-300 ease-in-out
                      ${isActive ? "bg-primary" : "bg-gray-300"}
                    `}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
};

export default Stepper; 