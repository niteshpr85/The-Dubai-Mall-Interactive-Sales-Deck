import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Dubai Mall — A Global Destination',
  description: 'Discover the world\'s most visited shopping and entertainment destination. Retail, luxury, dining, and events at an unprecedented scale.',
  keywords: 'Dubai Mall, retail leasing, sponsorship, events, luxury shopping, venue booking',
  openGraph: {
    title: 'The Dubai Mall — A Global Destination',
    description: 'The world\'s most visited shopping and entertainment destination.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'The Dubai Mall — A Global Destination',
      },
    ],
    locale: 'en_US',
    siteName: 'The Dubai Mall',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Dubai Mall — A Global Destination',
    description: 'The world\'s most visited shopping and entertainment destination.',
    images: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

