KalpRiti Website: Design System and Engineering Rules
0. How to work
Before building anything non-trivial, restate your plan in a few lines and wait for confirmation. Do not build ahead on assumptions.
If a rule here conflicts with a request, flag the conflict instead of silently picking one.
Never invent copy, brand meaning, client names, or stats. Use clearly marked placeholders.
Make small, reviewable changes. One component or concern per commit.
1. Design intent
Feel: Apple-like. Calm, spacious, confident, precise. Cinematic warmth rather than tech coldness.
Idea to express: “Stories you can step into.” The UI should feel like moving through a space: depth, light, thresholds, reveals.
Reference language (from the mockups): large architectural red forms, soft sunlit light, thin hairline construction lines and circle arcs as decorative accents, generous whitespace, one strong focal point per view.
Restraint rule: if an effect doesn’t help someone understand or feel something, remove it.
Strictly light theme. No dark mode, no prefers-color-scheme: dark styles. Set color-scheme: light globally.
2. Stack
Next.js (App Router) + TypeScript (strict) + React.
Tailwind CSS with design tokens defined once as CSS variables and mapped into the Tailwind theme.
Animation: Motion for React (Framer Motion), imported from motion/react.
Fonts via next/font/local.
Images via next/image. Prefer AVIF/WebP.
Do not add UI kits, extra animation libraries, or heavy dependencies without asking first.
3. Color tokens (single source of truth)

Define these as CSS variables and Tailwind theme colors. Never hardcode hex values in components.

Token	Hex	Role
--bg	
#e2ebf2	Page background, base surfaces
--ink	
#111920	Primary text, icons, strong lines
--accent	
#c13c2f	Primary CTA, key emphasis, active states
--highlight	
#f1e6b0	Glass tint, soft highlights, subtle section washes, selection color
--accent-deep	
#7d251a	Hover/pressed states, footer, small red text, deep shadows

Rules:

Derive tints with opacity or color-mix, not new hex values. Allowed neutrals are only opacity variations of --ink and --bg, plus pure white at low opacity for glass highlights.
Contrast: --accent on --bg is about 4.4:1. Use it for large headings, buttons (with light text on top), and icons, but not for small body text. Use --accent-deep for small red text.
Body text is always --ink on --bg or on glass. Keep at least 4.5:1 everywhere.
Red is a spotlight, not a wallpaper. Roughly 10% of any view at most, except in deliberate hero or architectural imagery.
No gradients that introduce new hues. Gradients may only blend the five tokens.
4. Typography
Headings only: Qurova (DEMO). Used for H1 to H3 and display statements. Never for body, buttons, nav, labels, or forms.
Everything else: Altone. Body, nav, buttons, captions, forms, UI.
Load with next/font/local, display: swap, and preload the above-the-fold weights. Set font-synthesis: none so the browser never fakes bold or italic. Only use weights that actually exist in the files.
Licensing: the Qurova files are a DEMO. Keep font file paths and the font variable names in one config file so the licensed version can be swapped in with no component changes. Add a TODO noting the license must be purchased before launch.
Fallback stacks: system sans-serif for both, with matched metrics to limit layout shift.
Scale: fluid type with clamp(). Headings tight (line-height about 1.05 to 1.15, slight negative tracking). Body 16 to 18px, line-height 1.5 to 1.6, max line length about 65ch.
Emphasis pattern from the mockups: a heading where the key phrase switches to --accent. Use sparingly: one phrase per heading, never mid-paragraph.
5. Layout and spacing
8px base grid. Spacing tokens only, with no arbitrary pixel values.
Container: max width about 1200 to 1280px, fluid gutters (16px mobile, 24px tablet, 40px+ desktop).
Generous vertical rhythm: section padding of roughly 96 to 160px desktop, 64 to 96px mobile.
Mobile-first. Breakpoints: 640 / 768 / 1024 / 1280. Test at 360, 390, 768, 1024, 1440.
Radii: one consistent scale (for example 12 / 20 / 28px, plus full for pills). Glass cards use the larger radii.
Use dvh/svh, not vh, for full-height sections so mobile browser bars don’t break layouts.
Hairline decorative lines (1px, --accent at low opacity) are allowed as an SVG accent system: arcs, crosshairs, construction lines. They must be aria-hidden, non-interactive, and never carry meaning.
6. Liquid glass

A reusable <Glass> primitive. Do not hand-roll glass per component.

Recipe: translucent fill (--highlight or white at about 12 to 28% opacity) + backdrop-filter: blur() and a mild saturate() + 1px border (white at about 40 to 60% on top and left edges, fading to low opacity on the others) + inner highlight (inset 1px light edge) + soft, large, low-opacity shadow tinted with --accent-deep or --ink.
Glass needs something behind it. On a flat --bg it just looks like a gray box. Place glass over imagery, soft color washes, or the red architectural forms.
Include the -webkit-backdrop-filter prefix for Safari.
Fallback: under @supports not (backdrop-filter: blur(1px)), use a more opaque solid fill. Also provide the fallback for prefers-reduced-transparency.
Performance budget: at most 2 to 3 glass layers visible in any one viewport. Never stack glass on glass. Keep blur radii modest (about 12 to 24px, lower on mobile). Never animate backdrop-filter values. Animate the element’s transform and opacity instead.
Text on glass must still pass contrast. If it can’t, increase the fill opacity.
Allowed uses: nav bar, floating info cards, hotspot popovers, interactive panels, modals. Not for large body-text blocks.
Subtle specular touch: an optional light sheen that follows pointer position on desktop only, disabled on touch and for reduced motion.
7. Motion (Motion for React)
Import from motion/react. Use LazyMotion with domAnimation (and m components) to keep the bundle small. Load domMax only if layout or drag features are actually needed.
Animate only transform and opacity (plus filter sparingly). Never animate width, height, top, left, margin, or box-shadow directly.
Defined motion language (define once in a shared motion.ts, never ad hoc):
Ease: one soft, Apple-like curve for entrances, plus one gentle spring for interactive elements.
Durations: micro 150 to 250ms, standard 400 to 600ms, hero or scene 800 to 1200ms.
Stagger: 60 to 100ms between siblings, never more than about 0.6s total.
Entrances: fade + small upward translate (12 to 24px) or a gentle scale from 0.98. No bouncing, spinning, or flying in from off-screen.
Scroll: use whileInView with once: true and a sensible viewport.margin for reveals. Use useScroll and useTransform for parallax and scroll-linked scenes (the “walking through the doorway” feel), with small ranges. Never hijack native scroll, and no scroll-jacking or snap traps.
Interaction: hover/press feedback on all interactive elements (subtle lift or scale of 1.02 to 1.04, press 0.98). Hover is an enhancement only. Anything revealed on hover must also be reachable by tap and keyboard.
Reduced motion: wrap the app in MotionConfig with reducedMotion="user". When reduced, remove parallax and movement and keep simple opacity fades. Nothing may depend on animation to be understood.
Performance: never animate the LCP element in a way that delays its first paint. Hero text should be visible quickly. Use will-change sparingly. Pause or unmount offscreen animations. Keep the animation bundle lean and lazy-load heavy interactive scenes with next/dynamic.
Page transitions: subtle only. Avoid blocking navigation on exit animations.
8. Interactivity (mobile and desktop)
Interactive modules are first-class, not decoration. Each must work with touch, mouse, and keyboard, and must have a sensible static fallback.
Touch targets: minimum 44x44px. Use gestures (tap, swipe, drag) only with visible affordances and a non-gesture alternative.
Don’t depend on cursor-only effects (custom cursors, pointer-follow) for anything essential. They are desktop-only enhancements.
Interactive explorers (hotspots, toggles, selectors) must keep state clear: visible selected state, focus state, and an obvious way back.
Don’t track or gate. No hidden behavioral tracking, no forced email walls on interactive experiences.
Test both orientations on mobile. Avoid hover-only tooltips, and prevent accidental scroll-trap inside embedded interactive areas.
9. Components and architecture
Build a small primitive layer first: Container, Section, Heading, Text, Button, Glass, Reveal (motion wrapper), Hairline (SVG accent), Link.
Buttons: primary (--accent fill, light text, --accent-deep hover), secondary (glass or outlined with --ink), text link (underline on hover). Pill-shaped, with consistent height and padding.
Server components by default. Add "use client" only where interaction or animation requires it, and keep client boundaries small.
Co-locate component, types, and tests. Name files by component. No giant files: split above about 200 lines.
All copy lives in typed content files, not hardcoded in JSX, so it can be edited without touching layout.
No inline styles for anything token-based. No magic numbers.
10. Imagery and assets
Hero and scene imagery follows the mockup language: warm sunlit light, red architectural forms, a lone human figure facing a view, deep shadow and soft highlights.
Always provide intrinsic width/height or fill with a sized parent. Use blur placeholders. Compress aggressively.
Videos: muted, playsInline, lazy-loaded, with a poster. Never autoplay with sound.
Icons: one consistent line-icon set, stroke width matched to the hairline style. No mixed icon styles.
Alt text is required for meaningful images. Decorative imagery gets empty alt or aria-hidden.
11. Accessibility
Semantic HTML and landmarks. One H1 per page, logical heading order.
Visible focus rings (--accent outline with offset) on everything focusable. Full keyboard operability, including interactive modules and modals (focus trap, Esc to close, focus return).
Respect prefers-reduced-motion and prefers-reduced-transparency.
Meet WCAG 2.2 AA at minimum.
Forms: real labels, clear errors, no placeholder-only labels.
12. Performance targets
Lighthouse mobile: Performance 90+, Accessibility 95+, SEO 95+, Best Practices 95+.
LCP under 2.5s, CLS under 0.1, INP under 200ms on a mid-range phone.
Budget the JS. Lazy-load below-the-fold interactive scenes. Audit the bundle before adding any dependency.
Test on a real mid-range Android device, not just desktop Chrome. Blur and glass are the usual culprits for jank.
13. Quality gates (before calling anything done)
TypeScript strict passes, ESLint and Prettier clean, no console errors or warnings.
Checked at 360, 390, 768, 1024, 1440. Checked in Chrome, Safari (iOS and macOS), and Firefox.
Keyboard-only pass and reduced-motion pass done.
No hardcoded colors, fonts, or spacing outside tokens.
Glass fallback verified with backdrop-filter disabled.
Report what you changed, what you assumed, and what you want confirmed next.
14. Do not
No dark theme, no colors outside the five tokens, no extra fonts.
No Qurova outside headings.
No bouncy, spinning, or attention-grabbing motion. No scroll-jacking.
No stacked glass, no animated blur values, no glass over flat backgrounds just for effect.
No stock-template look: generic cards grids, default shadows, emoji icons, lorem ipsum left in.
No invented copy, claims, logos, or testimonials.