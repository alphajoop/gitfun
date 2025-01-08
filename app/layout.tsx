import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GitFun - Make Commits Easy and Fun',
  description:
    'GitFun simplifies your commit messages with emoji guides and best practices for Git.',
  keywords: [
    'git',
    'commit messages',
    'emoji guide',
    'git best practices',
    'git tools',
  ],
  authors: [{ name: 'Alpha Diop', url: '' }],
  openGraph: {
    title: 'GitFun - Make Commits Easy and Fun',
    description: 'Simplify your commits with GitFun!',
    url: 'https://gitfun.vercel.app',
    siteName: 'GitFun',
    images: [
      {
        url: 'https://gitfun.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GitFun - Emoji Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitFun - Make Commits Easy and Fun',
    description: 'Simplify your commits with GitFun!',
    creator: '@YourTwitterHandle',
    images: ['https://gitfun.vercel.app/twitter-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} dark:bg-bgBlack font-geist_sans text-prDark mx-auto max-w-5xl bg-bgWhite px-4 antialiased dark:text-prLight`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
