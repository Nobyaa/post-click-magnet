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
  metadataBase: new URL('https://kalpriti.com'),
  title: 'KalpRiti — Turning Clicks into Understanding',
  description:
    'A mobile-first interactive experience for complex D2C brands: why the click is where customers get lost, and how to fix it.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'KalpRiti — Turning Clicks into Understanding',
    description:
      'For complex D2C brands: why the click is where customers get lost, and how to fix it.',
    url: 'https://kalpriti.com/the-click-gap',
    siteName: 'KalpRiti',
    images: [
      {
        url: '/the-click-gap/Assets/founder.jpg',
        width: 1200,
        height: 630,
        alt: 'KalpRiti Lead Conversion Magnet',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KalpRiti — Turning Clicks into Understanding',
    description:
      'For complex D2C brands: why the click is where customers get lost, and how to fix it.',
    images: ['/the-click-gap/Assets/founder.jpg'],
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
