'use client';

import React from 'react';
import { RoleType } from '@/types/magnet';
import { DESTINATIONS } from '@/config/destinations';
import { Glass } from '@/components/ui/Glass';
import { Button } from '@/components/ui/Button';

interface Screen7NextStepProps {
  role: RoleType;
  onNextStepClick: (offer: string) => void;
}

export function Screen7NextStep({ role, onNextStepClick }: Screen7NextStepProps) {
  const contentConfig: Record<
    RoleType,
    {
      roleTitle: string;
      body: string;
      buttonText: string;
      href: string;
      emailFallback: string;
      offerId: string;
    }
  > = {
    founder: {
      roleTitle: 'Founder',
      body: "Let's map where one of your prospects loses the thread. A 20-minute call.",
      buttonText: 'Book the call',
      href: DESTINATIONS.founder.bookingUrl,
      emailFallback: DESTINATIONS.founder.emailFallback,
      offerId: 'founder_booking_call',
    },
    marketing: {
      roleTitle: 'Marketing Head',
      body: "Send us one live campaign. We'll show the after-click experience we'd build for it.",
      buttonText: 'Send a campaign',
      href: DESTINATIONS.marketing.whatsappUrl,
      emailFallback: DESTINATIONS.marketing.emailFallback,
      offerId: 'marketing_send_campaign',
    },
    product: {
      roleTitle: 'Product/Growth Head',
      body: "Send your five most repeated sales questions. We'll show how the experience would answer them.",
      buttonText: 'Send your questions',
      href: DESTINATIONS.product.whatsappUrl,
      emailFallback: DESTINATIONS.product.emailFallback,
      offerId: 'product_send_questions',
    },
  };

  const current = contentConfig[role] || contentConfig.founder;

  return (
    <div className="flex flex-col justify-between flex-1 py-4 sm:py-6">
      <div>
        <span className="text-xs uppercase tracking-wider text-accent font-medium mb-3 block">
          Your Next Step
        </span>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-ink leading-[1.15]">
          A clear next step.{' '}
          <span className="text-accent">No endless pitching.</span>
        </h1>
      </div>

      <div className="my-6">
        <Glass className="p-5 sm:p-6 border-t-2 border-t-accent">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-deep mb-2 block">
            {current.roleTitle}
          </span>

          <p className="font-sans text-base sm:text-lg text-ink font-medium leading-relaxed">
            {role === 'founder' ? (
              <>Let&apos;s map where one of your prospects loses the thread. A <span className="font-num">20</span>-minute call.</>
            ) : (
              current.body
            )}
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {/* Main Action Button */}
            <Button
              variant="primary"
              asLink
              href={current.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onNextStepClick(current.offerId)}
              className="w-full text-base py-4 font-semibold shadow-md"
            >
              {current.buttonText} →
            </Button>

            {/* Email Fallback */}
            <div className="text-center pt-1">
              <a
                href={current.emailFallback}
                className="text-xs text-ink/60 hover:text-ink hover:underline inline-block py-1 min-h-[44px] flex items-center justify-center"
              >
                Or reach out directly via email
              </a>
            </div>
          </div>
        </Glass>
      </div>

      {/* Footer commitment line for all roles */}
      <div className="pt-2 pb-1 text-center border-t border-ink/10">
        <p className="font-sans text-xs sm:text-sm font-medium text-ink/70">
          We&apos;ll deliver within <span className="font-num">48</span> hours.
        </p>
      </div>
    </div>
  );
}
