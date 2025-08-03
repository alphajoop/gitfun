import { useSearch } from '@/components/search-provider';
import { emojiCategories } from '@/lib/data';
import { EmojiList } from '@/components/emoji-list';
import { Search } from '@/components/search';
import { CategoryTabs } from '@/components/category-tabs';

export function EmojiGuide() {
  const { searchTerm } = useSearch();

  const filteredCategories = emojiCategories
    .map((category) => ({
      ...category,
      emojis: category.emojis.filter(
        (emoji) =>
          emoji.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          emoji.usage.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.emojis.length > 0);

  return (
    <section className="mx-auto max-w-5xl space-y-6 py-8">
      <div className="space-y-2">
        <h1 className="text-foreground text-3xl font-bold">
          Commit Message Emoji Guide
        </h1>
        <p className="text-muted-foreground">
          Choose the perfect emoji for your commits
        </p>
      </div>
      <Search />
      <CategoryTabs categories={filteredCategories}>
        {filteredCategories.map((category) => (
          <EmojiList key={category.name} category={category} />
        ))}
      </CategoryTabs>
    </section>
  );
}
