import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Category } from '@/types/types';
import { EmojiList } from '@/components/emoji-list';

interface CategoryTabsProps {
  categories: Category[];
  children?: React.ReactNode;
}

export function CategoryTabs({ categories, children }: CategoryTabsProps) {
  // Créer une catégorie "All" qui combine tous les emojis
  const allCategory: Category = {
    name: 'All',
    emojis: categories.flatMap((category) => category.emojis),
  };

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="flex h-auto flex-wrap justify-start gap-2">
        <TabsTrigger value="all">All</TabsTrigger>
        {categories.map((category) => (
          <TabsTrigger
            key={category.name}
            value={category.name.toLowerCase()}
            className="mb-1"
          >
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="all">
        <EmojiList category={allCategory} />
      </TabsContent>
      {categories.map((category) => (
        <TabsContent
          key={category.name}
          value={category.name.toLowerCase()}
          className="mb-1"
        >
          <EmojiList category={category} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
