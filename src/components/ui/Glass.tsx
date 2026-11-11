import React from 'react';
import clsx from 'clsx';

interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export function Glass({ children, className, interactive = false, ...props }: GlassProps) {
  return (
    <div
      className={clsx(
        'relative rounded-card transition-all duration-200',
        'bg-highlight/25 backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)]',
        'border-t border-l border-white/60 border-b border-r border-white/20',
        'shadow-[0_8px_32px_rgba(17,25,32,0.06)]',
        interactive &&
          'hover:bg-highlight/35 hover:shadow-[0_12px_40px_rgba(17,25,32,0.09)] active:scale-[0.98]',
        className
      )}
      {...props}
    >
      {/* Subtle inner highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-card ring-1 ring-inset ring-white/30" />
      {children}
    </div>
  );
}
