import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

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
          className={`${GeistSans.variable} ${GeistMono.variable} bg-bgWhite text-prDark dark:bg-bgBlack dark:text-prLight mx-auto max-w-5xl px-4 font-sans antialiased`}
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
