'use client';

import React from 'react';
import { DESTINATIONS } from '@/config/destinations';
import { Glass } from '@/components/ui/Glass';
import { Button } from '@/components/ui/Button';

interface Screen5ProofProps {
  onNext: () => void;
  onKeusClick: () => void;
}

export function Screen5Proof({ onNext, onKeusClick }: Screen5ProofProps) {
  return (
    <div className="flex flex-col justify-between flex-1 py-4 sm:py-6">
      <div>
        <span className="text-xs uppercase tracking-wider text-accent font-medium mb-3 block">
          Proof (Keus)
        </span>

        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-ink leading-[1.15]">
          One ad. One direction.{' '}
          <span className="text-accent">Turned into an experience.</span>
        </h1>
      </div>

      <div className="my-5 flex flex-col gap-4">
        <Glass className="p-5 sm:p-6">
          <p className="font-sans text-base sm:text-lg text-ink/90 leading-relaxed">
            For Keus Smart Home, we took one creative direction (&ldquo;You can&apos;t always be there. The house can.&rdquo;) and showed how a single ad becomes a connected, interactive journey.
          </p>

          <div className="mt-4 pt-3 border-t border-ink/10 flex items-center justify-between">
            <span className="text-xs text-ink/60 font-medium">
              A proof of concept built by KalpRiti, not a live client campaign.
            </span>
          </div>
        </Glass>

        {/* Keus link button */}
        <Button
          variant="secondary"
          asLink
          href={DESTINATIONS.keusPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onKeusClick}
          className="w-full flex items-center justify-center gap-2"
        >
          <span>See the Keus experience</span>
          <span className="text-xs text-ink/60">↗</span>
        </Button>
      </div>

      <div className="pt-2">
        <Button onClick={onNext} className="w-full">
          See a live teardown →
        </Button>
      </div>
    </div>
  );
}
