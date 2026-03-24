import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import { Navigation } from './components/navigation';
import { CustomCursor } from './components/custom-cursor';
import { BackgroundBars } from './components/background-bars';
import { Analytics } from "@vercel/analytics/react";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
});

export const viewport: Viewport = {
  themeColor: '#1A1A1A',
};

export const metadata: Metadata = {
  title: 'Wobble',
  description: 'Premium Panna Cotta delivered to your door. Experience the finest Italian dessert in Cyberjaya.',
  metadataBase: new URL('https://wobble.my'),
  applicationName: 'Wobble',
  authors: [{ name: 'Wobble Team' }],
  generator: 'Next.js',
  keywords: ['panna cotta', 'dessert', 'cyberjaya', 'putrajaya', 'premium dessert', 'kl', 'malaysia', 'viral dessert'],
  creator: 'Wobble Studio',
  publisher: 'Wobble Panna Cotta',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://wobble.my',
    title: 'Wobble | Premium Panna Cotta',
    description: 'Experience the finest, melt-in-your-mouth Italian dessert in Cyberjaya.',
    siteName: 'Wobble',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Wobble Premium Panna Cotta - The Tropical King'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wobble | Premium Panna Cotta',
    description: 'Experience the finest, melt-in-your-mouth Italian dessert in Cyberjaya.',
    creator: '@wobblehq',
    images: ['/og-image.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Wobble',
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${dmSerifDisplay.variable} [color-scheme:dark]`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="font-sans antialiased pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
        suppressHydrationWarning
      >
        {/* Global Noise Texture Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none bg-noise" aria-hidden="true" />
        
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
