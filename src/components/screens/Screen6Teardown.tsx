'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Glass } from '@/components/ui/Glass';
import { Button } from '@/components/ui/Button';

interface Screen6TeardownProps {
  onNext: () => void;
  onTeardownToggle: (stateName: 'ad' | 'after-click') => void;
}

export function Screen6Teardown({ onNext, onTeardownToggle }: Screen6TeardownProps) {
  const [toggleState, setToggleState] = useState<'ad' | 'after-click'>('ad');
  const [showFullScroll, setShowFullScroll] = useState(false);

  const handleToggle = (state: 'ad' | 'after-click') => {
    setToggleState(state);
    onTeardownToggle(state);
  };

  const afterClickScreenshots = [
    {
      id: 'post-click1',
      title: 'Product Landing',
      caption: 'The product page reached after the click.',
      src: '/the-click-gap/Assets/Teardown/post-click1.png',
      alt: 'Product page reached after click',
    },
    {
      id: 'post-click2',
      title: 'Action Overload',
      caption: 'Three competing actions: buy, book a live demo, or talk to AI assistant.',
      src: '/the-click-gap/Assets/Teardown/post-click2.png',
      alt: 'Competing actions on product landing page',
    },
    {
      id: 'assistant-prompt',
      title: 'Assistant Friction',
      caption: 'The form that opens when the AI assistant is tapped, asking for a phone number.',
      src: '/the-click-gap/Assets/Teardown/assistant-prompt.png',
      alt: 'Form asking for phone number upon tapping assistant',
    },
  ];

  return (
    <div className="flex flex-col justify-between flex-1 py-3 sm:py-5">
      <div>
        <span className="text-xs uppercase tracking-wider text-accent font-medium mb-1.5 block">
          Teardown (Eureka Forbes smart robotic vacuum)
        </span>

        {/* Hero Headline */}
        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-ink leading-[1.15]">
          What happens after a good ad
        </h1>
      </div>

      <div className="my-4 flex flex-col gap-3">
        {/* Two-State Toggle Switch: "The ad" vs "After the click" */}
        <div className="flex items-center justify-center p-1 rounded-full bg-ink/5 border border-ink/10">
          <button
            type="button"
            onClick={() => handleToggle('ad')}
            className={`flex-1 min-h-[44px] py-2 px-3 rounded-full text-xs font-semibold transition-all cursor-pointer focus-visible:outline-accent ${
              toggleState === 'ad'
                ? 'bg-accent text-white shadow-sm'
                : 'text-ink/70 hover:text-ink'
            }`}
            aria-pressed={toggleState === 'ad'}
          >
            The ad
          </button>
          <button
            type="button"
            onClick={() => handleToggle('after-click')}
            className={`flex-1 min-h-[44px] py-2 px-3 rounded-full text-xs font-semibold transition-all cursor-pointer focus-visible:outline-accent ${
              toggleState === 'after-click'
                ? 'bg-accent text-white shadow-sm'
                : 'text-ink/70 hover:text-ink'
            }`}
            aria-pressed={toggleState === 'after-click'}
          >
            After the click
          </button>
        </div>

        {/* View State: "The ad" */}
        {toggleState === 'ad' && (
          <Glass className="p-3.5 flex flex-col gap-2.5">
            <div className="relative w-full h-[180px] bg-ink/5 rounded-lg overflow-hidden border border-ink/10">
              <Image
                src="/the-click-gap/Assets/Teardown/ad.png"
                alt="Eureka Forbes ad creative with Learn more button"
                fill
                sizes="(max-width: 480px) 90vw, 400px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div>
              <span className="text-xs font-semibold text-ink block mb-0.5">
                The ad:
              </span>
              <p className="font-sans text-xs sm:text-sm text-ink/80 leading-relaxed">
                A strong story. The creative itself never points to the site.
              </p>
            </div>
          </Glass>
        )}

        {/* View State: "After the click" (Swipeable Row with captions) */}
        {toggleState === 'after-click' && (
          <div className="flex flex-col gap-2">
            <div className="text-[11px] text-ink/50 uppercase font-semibold flex items-center justify-between">
              <span>Swipeable observations</span>
              <span><span className="font-num">3</span> screens →</span>
            </div>

            <div className="flex gap-2.5 overflow-x-auto pb-2 pt-0.5 scrollbar-thin snap-x">
              {afterClickScreenshots.map((item) => (
                <Glass
                  key={item.id}
                  className="min-w-[190px] sm:min-w-[210px] max-w-[210px] p-2.5 shrink-0 snap-start flex flex-col justify-between"
                >
                  <div className="relative w-full h-[140px] bg-ink/5 rounded-md overflow-hidden border border-ink/10 mb-2">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="210px"
                      className="object-contain p-1"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-ink block mb-0.5">
                      {item.title}
                    </span>
                    <p className="font-sans text-[11px] text-ink/75 leading-tight">
                      {item.caption}
                    </p>
                  </div>
                </Glass>
              ))}
            </div>

            <p className="font-sans text-xs text-ink/80 leading-relaxed bg-highlight/20 p-2.5 rounded-lg border border-ink/5">
              A &ldquo;Learn more&rdquo; button leads to a general product page with three competing actions: buy, book a live demo, or talk to the AI assistant. The assistant asks for a phone number first.
            </p>
          </div>
        )}

        {/* Optional Expandable View: Full Page Scroll */}
        <div className="pt-0.5">
          <button
            type="button"
            onClick={() => setShowFullScroll(!showFullScroll)}
            className="text-xs font-medium text-accent hover:text-accent-deep underline inline-flex items-center gap-1 min-h-[44px]"
          >
            <span>{showFullScroll ? 'Hide full page' : 'See the full page (optional expandable view)'}</span>
            <span>{showFullScroll ? '▲' : '▼'}</span>
          </button>

          {showFullScroll && (
            <Glass className="mt-1 p-2.5 overflow-hidden">
              <div className="relative w-full h-[240px] bg-ink/5 rounded-lg overflow-y-auto border border-ink/10 p-1">
                <Image
                  src="/the-click-gap/Assets/Teardown/post-click-scroll.png"
                  alt="Eureka Forbes full page scroll capture"
                  width={600}
                  height={2200}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </Glass>
          )}
        </div>

        {/* Distinct Badges: "our view" and "hypothesis" */}
        <Glass className="p-3 border-l-4 border-l-accent space-y-2">
          <div>
            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-accent/15 text-accent-deep mb-1">
              our view
            </span>
            <p className="font-sans text-xs sm:text-sm text-ink/90 font-medium leading-snug">
              In our view, that&apos;s friction for someone still deciding.
            </p>
          </div>

          <div className="pt-1.5 border-t border-ink/10">
            <span className="text-xs font-semibold text-ink/70 block mb-0.5">
              Our take:
            </span>
            <p className="font-sans text-xs text-ink/80 leading-relaxed">
              Personalize by home. Humid Mumbai and dry Pune bring different dust. A house with kids and a house with elderly parents spill different things.
            </p>
          </div>

          <div className="pt-1.5 border-t border-ink/10">
            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-highlight text-ink mb-1">
              hypothesis
            </span>
            <p className="font-sans text-xs text-ink/85 italic leading-snug">
              We&apos;d test whether prospects who see the product in their own home ask sales fewer basic questions.
            </p>
          </div>
        </Glass>

        {/* Factual Source Line */}
        <div className="text-[11px] text-ink/50 text-center sm:text-left">
          Source: Eureka Forbes ad and website, captured <span className="font-num">8</span> Nov <span className="font-num">2026</span>
        </div>
      </div>

      <div className="pt-1">
        <Button onClick={onNext} className="w-full">
          Your next step →
        </Button>
      </div>
    </div>
  );
}
