import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/lib/ThemeContext';

export const metadata: Metadata = {
  title: {
    default: 'GameVault - Play Free Online Games',
    template: '%s | GameVault',
  },
  description:
    'Play thousands of free online HTML5 games. Action, Racing, Puzzle, Shooting and more. No downloads required — play instantly in your browser!',
  keywords: ['online games', 'free games', 'html5 games', 'browser games', 'play games online'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'GameVault',
    title: 'GameVault - Play Free Online Games',
    description: 'Play thousands of free online HTML5 games instantly in your browser.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameVault - Play Free Online Games',
    description: 'Play thousands of free online HTML5 games instantly in your browser.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-screen bg-surface-900 text-slate-200 font-sans">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
