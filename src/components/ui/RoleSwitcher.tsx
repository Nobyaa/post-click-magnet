import React from 'react';
import clsx from 'clsx';
import { RoleType } from '@/types/magnet';

interface RoleSwitcherProps {
  currentRole: RoleType;
  onChangeRole: () => void;
  className?: string;
}

export function RoleSwitcher({ currentRole, onChangeRole, className }: RoleSwitcherProps) {
  const roleDisplayNames: Record<RoleType, string> = {
    founder: 'Founder',
    marketing: 'Marketing',
    product: 'Product',
  };

  return (
    <button
      type="button"
      onClick={onChangeRole}
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-medium',
        'bg-highlight/35 text-ink/80 hover:text-ink hover:bg-highlight/60 border border-ink/10',
        'min-h-[36px] transition-all duration-150 active:scale-95 focus-visible:outline-accent',
        className
      )}
      title="Change viewing perspective"
      aria-label={`Current role: ${roleDisplayNames[currentRole]}. Click to change role`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      <span>{roleDisplayNames[currentRole]}</span>
      <span className="text-ink/40 text-[10px]">▼</span>
    </button>
  );
}
