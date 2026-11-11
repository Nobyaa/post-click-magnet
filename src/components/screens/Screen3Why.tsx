'use client';

import React, { useState } from 'react';
import { RoleType } from '@/types/magnet';
import { Glass } from '@/components/ui/Glass';
import { Button } from '@/components/ui/Button';

interface Screen3WhyProps {
  role: RoleType;
  onNext: () => void;
  onChipTapped: (chipName: string) => void;
}

type ChipKey = 'Pays' | 'Uses' | 'Doubts';

export function Screen3Why({ role, onNext, onChipTapped }: Screen3WhyProps) {
  const [selectedChip, setSelectedChip] = useState<ChipKey>('Pays');

  const chipContent: Record<ChipKey, string> = {
    Pays: "Wants to know it's worth it.",
    Uses: 'Wants to know it fits their life.',
    Doubts: 'Wants to know what could go wrong.',
  };

  const roleLines: Record<RoleType, string> = {
    founder:
      "The page hands them a form and a sales call. Understanding becomes your sales team's job.",
    marketing: 'The ad earned the click. After it, the story stops.',
    product:
      "Sales keeps answering the same questions. The page isn't answering them.",
  };

  const chips: ChipKey[] = ['Pays', 'Uses', 'Doubts'];

  const handleSelectChip = (chip: ChipKey) => {
    setSelectedChip(chip);
    onChipTapped(chip);
  };

  return (
    <div className="flex flex-col justify-between flex-1 py-3 sm:py-5">
      <div>
        <span className="text-xs uppercase tracking-wider text-accent font-medium mb-2 block">
          Why It Happens
        </span>

        {/* Hero Headline */}
        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-ink leading-[1.15]">
          A buyer isn&apos;t one person.{' '}
          <span className="text-accent">It&apos;s a group.</span>
        </h1>
      </div>

      <div className="my-5 flex flex-col gap-4">
        {/* Three Tappable Chips */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-ink/50 block mb-2">
            The buying group:
          </span>
          <div className="grid grid-cols-3 gap-2">
            {chips.map((chip) => {
              const isSelected = selectedChip === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  onClick={() => handleSelectChip(chip)}
                  className={`min-h-[44px] px-3 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer focus-visible:outline-accent active:scale-95 ${
                    isSelected
                      ? 'bg-accent text-white shadow-sm font-semibold'
                      : 'bg-highlight/40 text-ink/80 hover:bg-highlight/70 border border-ink/10'
                  }`}
                  aria-pressed={isSelected}
                  aria-label={`View perspective for someone who ${chip.toLowerCase()}`}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>

        {/* Revealed Single Line Below Chips */}
        <div className="min-h-[48px] flex items-center px-1">
          <p className="font-sans text-sm sm:text-base font-semibold text-accent-deep leading-snug">
            &ldquo;{chipContent[selectedChip]}&rdquo;
          </p>
        </div>

        {/* Role line (always visible under the chips) */}
        <Glass className="p-3.5 sm:p-4 border-l-2 border-l-accent">
          <span className="text-[10px] uppercase font-bold tracking-wider text-accent-deep block mb-1">
            Impact for your role
          </span>
          <p className="font-sans text-sm sm:text-base text-ink/90 leading-relaxed font-medium">
            {roleLines[role] || roleLines.founder}
          </p>
        </Glass>
      </div>

      <div className="pt-1">
        <Button onClick={onNext} className="w-full">
          The fix →
        </Button>
      </div>
    </div>
  );
}
