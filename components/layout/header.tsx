import Link from 'next/link';
import { Github } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-prLight dark:border-prDark sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center gap-4">
        <div className="flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold whitespace-nowrap">Git Fun</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between gap-4 space-x-2">
          <nav className="flex items-center space-x-6">
            <Link
              href="/docs"
              className="hover:text-prGrey text-sm font-medium transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/examples"
              className="hover:text-prGrey text-sm font-medium transition-colors"
            >
              Examples
            </Link>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="https://github.com/alphajoop/gitfun"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
