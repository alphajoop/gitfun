'use client';

import { EmojiGuide } from '@/components/emoji-guide';
import { SearchProvider } from '@/components/search-provider';

export default function HomePage() {
  return (
    <SearchProvider>
      <EmojiGuide />
    </SearchProvider>
  );
}
