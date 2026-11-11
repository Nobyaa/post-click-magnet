'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Glass } from '@/components/ui/Glass';
import { Button } from '@/components/ui/Button';

interface Screen2ClaimProps {
  onNext: () => void;
  onMockClickTapped: () => void;
}

export function Screen2Claim({ onNext, onMockClickTapped }: Screen2ClaimProps) {
  const [clicked, setClicked] = useState(false);

  const handleMockClick = () => {
    if (!clicked) {
      setClicked(true);
      onMockClickTapped();
    } else {
      setClicked(false);
    }
  };

  return (
    <div className="flex flex-col justify-between flex-1 py-3 sm:py-5">
      <div>
        <span className="text-xs uppercase tracking-wider text-accent font-medium mb-2 block">
          The Claim
        </span>

        {/* Hero Headline */}
        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-ink leading-[1.15]">
          Your ad isn&apos;t the problem.{' '}
          <span className="text-accent">The click is where customers get lost.</span>
        </h1>

        {/* Body under 20 words */}
        <p className="font-sans text-sm sm:text-base text-ink/80 mt-3 leading-relaxed">
          Ads speak to a general buyer. Then the click lands on a page that treats everyone the same.
        </p>
      </div>

      {/* Interactive Mock Ad & Destination Simulator */}
      <div className="my-5">
        <Glass className="p-3.5 sm:p-4 overflow-hidden">
          <div className="text-[11px] uppercase tracking-wider text-ink/40 font-semibold mb-2 flex items-center justify-between">
            <span>Interactive Simulator</span>
            <span>Tap to see the gap</span>
          </div>

          <div className="relative min-h-[175px] rounded-xl bg-ink/5 border border-ink/10 overflow-hidden flex flex-col justify-between p-3.5">
            {/* The Ad State */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded-full inline-block mb-1.5">
                  Sponsored Ad
                </span>
                <p className="font-sans text-xs sm:text-sm font-semibold text-ink leading-snug">
                  Smart Robotic Vacuum: Effortless cleaning tailored for modern living.
                </p>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleMockClick}
                  className="w-full min-h-[44px] rounded-lg bg-accent text-[#fdfdfd] text-xs font-semibold px-4 py-2.5 shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-accent"
                  aria-label="Simulate tapping Learn more button on the ad"
                >
                  <span>Learn more</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Sliding Generic Destination Page Overlay */}
            <AnimatePresence>
              {clicked && (
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '100%', opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="absolute inset-0 bg-bg p-3.5 flex flex-col justify-between border-t-2 border-accent"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-ink/50">
                        Generic Product Page
                      </span>
                      <button
                        type="button"
                        onClick={() => setClicked(false)}
                        className="text-[11px] text-accent underline min-h-[44px] px-2 flex items-center"
                      >
                        Reset
                      </button>
                    </div>

                    <p className="font-heading text-xs sm:text-sm font-medium text-ink leading-snug">
                      Robotic Vacuum <span className="font-num">2026</span> Edition
                    </p>
                    <p className="text-[11px] text-ink/60 mt-1 line-clamp-2">
                      <span className="font-num">5000</span>Pa Suction · LiDaR Navigation · Dual Mop · Auto Empty Dock
                    </p>
                  </div>

                  <div className="pt-2 border-t border-ink/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-accent-deep">
                      Same page for everyone.
                    </span>
                    <span className="text-[10px] text-ink/40">Friction begins</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Glass>
      </div>

      <div className="pt-1">
        <Button onClick={onNext} className="w-full">
          Why this happens →
        </Button>
      </div>
    </div>
  );
}
