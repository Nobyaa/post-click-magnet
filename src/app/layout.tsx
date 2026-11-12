import type { Metadata, Viewport } from 'next';
import { altone, qurova } from '@/config/fonts';
import { MotionProvider } from '@/components/ui/MotionProvider';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#e2ebf2',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kalpriti.com'),
  title: "Your ad isn't the problem. The click is where customers get lost.",
  description:
    'A 2-minute interactive look at why good ads still lose customers after the click.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Your ad isn't the problem. The click is where customers get lost.",
    description:
      'A 2-minute interactive look at why good ads still lose customers after the click.',
    url: 'https://www.kalpriti.com/the-click-gap',
    siteName: 'KalpRiti',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Your ad isn't the problem. The click is where customers get lost.",
    description:
      'A 2-minute interactive look at why good ads still lose customers after the click.',
  },
  icons: {
    icon: [
      {
        url: '/the-click-gap/favicon.ico',
      },
      {
        url: '/the-click-gap/Assets/Logos/Icon_Dark.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/the-click-gap/Assets/Logos/Icon_Dark.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${altone.variable} ${qurova.variable}`}>
      <body className="antialiased min-h-[100dvh] flex flex-col bg-bg text-ink selection:bg-highlight selection:text-ink">
        <GoogleAnalytics />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
