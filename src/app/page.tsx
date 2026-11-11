'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { RoleType } from '@/types/magnet';
import { trackEvent } from '@/lib/analytics';
import { screenVariants } from '@/lib/motion';

import { ProgressBar } from '@/components/ui/ProgressBar';
import { RoleSwitcher } from '@/components/ui/RoleSwitcher';

import { Screen1Role } from '@/components/screens/Screen1Role';
import { Screen2Claim } from '@/components/screens/Screen2Claim';
import { Screen3Why } from '@/components/screens/Screen3Why';
import { Screen4Fix } from '@/components/screens/Screen4Fix';
import { Screen5Proof } from '@/components/screens/Screen5Proof';
import { Screen6Teardown } from '@/components/screens/Screen6Teardown';
import { Screen7NextStep } from '@/components/screens/Screen7NextStep';

export default function LeadMagnetPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [role, setRole] = useState<RoleType | null>(null);

  // Initial event track
  useEffect(() => {
    trackEvent('magnet_started');
  }, []);

  // Track screen_viewed whenever currentStep changes
  useEffect(() => {
    trackEvent('screen_viewed', {
      screen_number: currentStep,
      role: role || 'unselected',
    });

    if (currentStep === 6) {
      trackEvent('teardown_viewed', { role: role || 'unselected' });
    }

    if (currentStep === 7) {
      trackEvent('magnet_completed', { role: role || 'unselected' });
    }
  }, [currentStep, role]);

  const handleRoleSelect = (selectedRole: RoleType) => {
    setRole(selectedRole);
    trackEvent('role_selected', { role: selectedRole });
    setCurrentStep(2);
  };

  const handleRoleChangeRequest = () => {
    // Go to Screen 1 without losing previous role state
    setCurrentStep(1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleKeusClick = () => {
    trackEvent('keus_clicked', { role: role || 'unselected' });
  };

  const handleNextStepClick = (offerId: string) => {
    trackEvent('next_step_clicked', {
      role: role || 'unselected',
      offer: offerId,
    });
  };

  const handleMockClickTapped = () => {
    trackEvent('mock_click_tapped', { role: role || 'unselected' });
  };

  const handleChipTapped = (chipName: string) => {
    trackEvent('chip_tapped', { role: role || 'unselected', chip: chipName });
  };

  const handleFlowStepTapped = (stepNumber: number) => {
    trackEvent('flow_step_tapped', { role: role || 'unselected', step: stepNumber });
  };

  const handleTeardownToggle = (stateName: 'ad' | 'after-click') => {
    trackEvent('teardown_toggle', { role: role || 'unselected', state: stateName });
  };

  return (
    <main className="min-h-[100dvh] flex flex-col justify-between items-center px-4 py-4 sm:py-6 max-w-[480px] mx-auto w-full relative">
      {/* Top Header & Navigation Bar */}
      <header className="w-full flex flex-col gap-2.5 pb-2 border-b border-ink/5">
        <div className="flex items-center justify-between min-h-[44px]">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <Image
              src="/the-click-gap/Assets/Logos/Icon_Dark.svg"
              alt="KalpRiti Icon"
              width={24}
              height={24}
              unoptimized
              priority
            />
            <span className="font-heading font-medium tracking-tight text-ink text-sm sm:text-base">
              KalpRiti
            </span>
          </div>

          {/* Controls: Role indicator / Back button */}
          <div className="flex items-center gap-2">
            {role && currentStep > 1 && (
              <RoleSwitcher
                currentRole={role}
                onChangeRole={handleRoleChangeRequest}
              />
            )}

            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-medium text-ink/70 hover:text-ink hover:bg-highlight/40 border border-ink/10 min-h-[36px] transition-all active:scale-95 focus-visible:outline-accent"
                aria-label="Go back to previous screen"
              >
                ← Back
              </button>
            )}
          </div>
        </div>

        {/* 7-Step Progress Indicator */}
        <ProgressBar currentStep={currentStep} totalSteps={7} />
      </header>

      {/* Screen Content Area */}
      <div className="w-full flex-1 flex flex-col justify-center my-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col flex-1"
          >
            {currentStep === 1 && (
              <Screen1Role
                onSelectRole={handleRoleSelect}
                selectedRole={role}
              />
            )}

            {currentStep === 2 && (
              <Screen2Claim
                onNext={handleNext}
                onMockClickTapped={handleMockClickTapped}
              />
            )}

            {currentStep === 3 && (
              <Screen3Why
                role={role || 'founder'}
                onNext={handleNext}
                onChipTapped={handleChipTapped}
              />
            )}

            {currentStep === 4 && (
              <Screen4Fix
                onNext={handleNext}
                onFlowStepTapped={handleFlowStepTapped}
              />
            )}

            {currentStep === 5 && (
              <Screen5Proof
                onNext={handleNext}
                onKeusClick={handleKeusClick}
              />
            )}

            {currentStep === 6 && (
              <Screen6Teardown
                onNext={handleNext}
                onTeardownToggle={handleTeardownToggle}
              />
            )}

            {currentStep === 7 && (
              <Screen7NextStep
                role={role || 'founder'}
                onNextStepClick={handleNextStepClick}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer minimal info */}
      <footer className="w-full text-center py-2 text-[11px] text-ink/40 border-t border-ink/5 mt-auto">
        <span>KalpRiti — Interactive Agency · Step <span className="font-num">{currentStep}</span> of <span className="font-num">7</span></span>
      </footer>
    </main>
  );
}
