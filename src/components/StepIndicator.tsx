import React from 'react';
import { ScreenStep } from '../types';

interface StepIndicatorProps {
  currentStep: ScreenStep;
  unlocked: boolean;
  onSelectStep: (step: ScreenStep) => void;
  className?: string;
}

const STEPS: { id: ScreenStep; label: string }[] = [
  { id: 'gate', label: 'Unlock Key' },
  { id: 'intro', label: 'Birthday Celebration' },
  { id: 'legends', label: 'August 17th Legends' },
  { id: 'gallery', label: 'Curated Gallery' },
  { id: 'letter', label: 'My Dearest' },
  { id: 'thankyou', label: 'Finale' },
];

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  unlocked,
  onSelectStep,
  className = '',
}) => {
  const currentIndex = STEPS.findIndex((s) => s.id === currentStep);

  return (
    <nav aria-label="Story Progress" className={`flex items-center justify-center gap-2.5 py-4 ${className}`}>
      {STEPS.map((step, idx) => {
        const isActive = step.id === currentStep;
        const isPast = idx < currentIndex;
        const isClickable = unlocked || idx <= currentIndex;

        return (
          <button
            key={step.id}
            type="button"
            disabled={!isClickable}
            onClick={() => isClickable && onSelectStep(step.id)}
            title={step.label}
            className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 ${
              isActive
                ? 'w-3 h-3 bg-stone-900 ring-2 ring-stone-900 ring-offset-2 scale-110'
                : isPast
                ? 'w-2.5 h-2.5 bg-stone-700 hover:bg-stone-900 cursor-pointer'
                : 'w-2.5 h-2.5 border border-stone-800 bg-transparent hover:bg-stone-300 cursor-pointer opacity-60'
            }`}
            aria-current={isActive ? 'step' : undefined}
          />
        );
      })}
    </nav>
  );
};
