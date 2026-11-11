'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Glass } from '@/components/ui/Glass';
import { Button } from '@/components/ui/Button';

interface Screen4FixProps {
  onNext: () => void;
  onFlowStepTapped: (stepNumber: number) => void;
}

export function Screen4Fix({ onNext, onFlowStepTapped }: Screen4FixProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    { num: 1, text: 'A story in the ad' },
    { num: 2, text: 'A cliffhanger' },
    { num: 3, text: 'An interactive page resolves it' },
    { num: 4, text: 'They understand it for themselves' },
    { num: 5, text: 'A relevant next step' },
  ];

  const handleStepClick = (stepNum: number) => {
    setActiveStep(stepNum);
    onFlowStepTapped(stepNum);
  };

  return (
    <div className="flex flex-col justify-between flex-1 py-3 sm:py-5">
      <div>
        <span className="text-xs uppercase tracking-wider text-accent font-medium mb-2 block">
          The Fix
        </span>

        {/* Hero Headline */}
        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-ink leading-[1.15]">
          Feature lists don&apos;t sell complex products.{' '}
          <span className="text-accent">Relatability does.</span>
        </h1>

        {/* Verbatim Body under 20 words */}
        <p className="font-sans text-sm sm:text-base text-ink/80 mt-2 sm:mt-3 leading-relaxed">
          People don&apos;t need everything the product can do. They need to see why it fits their life.
        </p>
      </div>

      {/* Animated Path & Sequence */}
      <div className="my-4 relative">
        <div className="text-[11px] uppercase tracking-wider text-ink/40 font-semibold mb-2">
          The <span className="font-num">5</span>-Step Flow (Tap any step)
        </div>

        {/* SVG Drawing Connecting Path Line */}
        <div className="absolute left-[20px] top-9 bottom-4 w-4 pointer-events-none z-0">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 10 100">
            <motion.line
              x1="5"
              y1="0"
              x2="5"
              y2="100"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        <div className="flex flex-col gap-2 relative z-10">
          {steps.map((step, idx) => {
            const isHighlighted = activeStep === step.num;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <Glass
                  interactive
                  onClick={() => handleStepClick(step.num)}
                  className={`p-2.5 sm:p-3 flex items-center gap-3 cursor-pointer transition-all ${
                    isHighlighted
                      ? 'border-accent bg-highlight/50 shadow-md ring-1 ring-accent'
                      : ''
                  }`}
                >
                  <div
                    className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center font-num text-xs transition-all ${
                      isHighlighted
                        ? 'bg-accent text-white scale-110'
                        : 'bg-accent/15 text-accent-deep'
                    }`}
                  >
                    {step.num}
                  </div>
                  <span
                    className={`font-sans text-xs sm:text-sm font-medium transition-colors ${
                      isHighlighted ? 'text-ink font-semibold' : 'text-ink/85'
                    }`}
                  >
                    {step.text}
                  </span>
                </Glass>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="pt-1">
        <Button onClick={onNext} className="w-full">
          See the proof (Keus) →
        </Button>
      </div>
    </div>
  );
}
