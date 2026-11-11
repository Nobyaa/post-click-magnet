import React from 'react';
import clsx from 'clsx';

interface HairlineProps {
  type?: 'horizontal' | 'arc' | 'crosshair';
  className?: string;
}

export function Hairline({ type = 'horizontal', className }: HairlineProps) {
  if (type === 'arc') {
    return (
      <svg
        className={clsx('pointer-events-none text-accent/20', className)}
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="60" cy="60" r="59.5" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    );
  }

  if (type === 'crosshair') {
    return (
      <svg
        className={clsx('pointer-events-none text-accent/30', className)}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <line x1="8" y1="0" x2="8" y2="16" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1" />
      </svg>
    );
  }

  return (
    <div
      className={clsx('w-full h-[1px] bg-accent/15 pointer-events-none', className)}
      aria-hidden="true"
    />
  );
}
