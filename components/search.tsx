import { Input } from '@/components/ui/input';
import { useSearch } from '@/components/search-provider';

export function Search() {
  const { searchTerm, setSearchTerm } = useSearch();
  return (
    <Input
      placeholder="Search emojis..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="max-w-sm"
    />
  );
}
