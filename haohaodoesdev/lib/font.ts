import { Funnel_Display, Google_Sans_Code, Inter } from 'next/font/google';

// Funnel Display (Variable: 300-800)
export const funnel = Funnel_Display({
  subsets: ['latin'],
  variable: '--font-funnel',
  display: 'swap',
});

// Google Sans Code (Variable: 300-800)
export const googleSansCode = Google_Sans_Code({
  subsets: ['latin'],
  variable: '--font-code',
  display: 'swap',
});

// Inter (Your default sans)
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});