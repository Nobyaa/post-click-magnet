import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  variant = 'primary',
  children,
  className,
  asLink,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center justify-center font-sans font-medium text-center',
    'rounded-full px-6 py-3.5 min-h-[44px] min-w-[44px] text-base select-none',
    'transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent',
    variant === 'primary' &&
      'bg-accent text-[#fdfdfd] hover:bg-accent-deep active:scale-[0.98] shadow-[0_4px_16px_rgba(193,60,47,0.25)]',
    variant === 'secondary' &&
      'bg-highlight/30 text-ink border border-ink/15 hover:bg-highlight/50 hover:border-ink/30 active:scale-[0.98]',
    variant === 'text' &&
      'bg-transparent text-ink underline-offset-4 hover:underline active:opacity-70 p-2 min-h-[44px]',
    className
  );

  if (asLink && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
