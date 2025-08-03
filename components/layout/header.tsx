import Link from 'next/link';
import { Github } from 'lucide-react';
import { ModeToggle } from '@/components/ui/mode-toggle';

export function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 mx-auto w-full max-w-5xl border-b backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold whitespace-nowrap">Git Fun</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between gap-4 space-x-2">
          <nav className="flex items-center space-x-6">
            <Link
              href="/docs"
              className="hover:text-muted-foreground text-sm font-medium transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/examples"
              className="hover:text-muted-foreground text-sm font-medium transition-colors"
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
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
