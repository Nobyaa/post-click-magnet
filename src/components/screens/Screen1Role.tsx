'use client';

import React from 'react';
import { RoleType } from '@/types/magnet';
import { Glass } from '@/components/ui/Glass';
import { Hairline } from '@/components/ui/Hairline';

interface Screen1RoleProps {
  onSelectRole: (role: RoleType) => void;
  selectedRole?: RoleType | null;
}

export function Screen1Role({ onSelectRole, selectedRole }: Screen1RoleProps) {
  const roles: { id: RoleType; title: string }[] = [
    { id: 'founder', title: 'Founder / CEO' },
    { id: 'marketing', title: 'Marketing or Brand Head' },
    { id: 'product', title: 'Product or Growth Head' },
  ];

  return (
    <div className="flex flex-col justify-between flex-1 py-4 sm:py-6">
      <div className="relative">
        <Hairline type="crosshair" className="absolute -top-3 -left-2 text-accent/30" />
        <span className="text-xs uppercase tracking-wider text-ink/50 font-medium mb-3 block">
          KalpRiti
        </span>

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-[1.12]">
          Who&apos;s looking at this?
        </h1>

        <p className="font-sans text-base sm:text-lg text-ink/80 mt-3 sm:mt-4 leading-relaxed">
          Pick your seat. We&apos;ll show what matters from there.
        </p>
      </div>

      <div className="flex flex-col gap-3 my-8">
        {roles.map((role) => {
          const isSelected = selectedRole === role.id;
          return (
            <Glass
              key={role.id}
              interactive
              onClick={() => onSelectRole(role.id)}
              className="cursor-pointer"
            >
              <button
                type="button"
                className="w-full min-h-[58px] p-4 text-left flex items-center justify-between group focus-visible:outline-none"
                aria-label={`Select role: ${role.title}`}
              >
                <span className="font-sans text-base sm:text-lg font-medium text-ink transition-colors group-hover:text-accent">
                  {role.title}
                </span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                    isSelected
                      ? 'bg-accent border-accent text-white'
                      : 'border-ink/20 text-ink/40 group-hover:border-accent group-hover:text-accent'
                  }`}
                >
                  →
                </span>
              </button>
            </Glass>
          );
        })}
      </div>

      <div className="text-xs text-ink/40 flex items-center justify-between pt-2">
        <span>Tailored <span className="font-num">2</span>-min read</span>
        <span><span className="font-num">7</span> short views</span>
      </div>
    </div>
  );
}
