import React from 'react';
import clsx from 'clsx';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function ProgressBar({ currentStep, totalSteps, className }: ProgressBarProps) {
  return (
    <div className={clsx('w-full flex items-center gap-1.5', className)} aria-label={`Step ${currentStep} of ${totalSteps}`}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNum = index + 1;
        const isCompleted = stepNum < currentStep;
        const isCurrent = stepNum === currentStep;

        return (
          <div
            key={index}
            className="h-1 flex-1 rounded-full overflow-hidden bg-ink/10 transition-colors duration-300"
          >
            <div
              className={clsx(
                'h-full transition-all duration-300 rounded-full',
                isCompleted && 'w-full bg-accent',
                isCurrent && 'w-full bg-accent animate-pulse',
                !isCompleted && !isCurrent && 'w-0 bg-transparent'
              )}
            />
          </div>
        );
      })}
    </div>
  );
}
