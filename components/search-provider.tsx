import { SearchContextType } from '@/types/types';
import { createContext, useContext, useState, ReactNode } from 'react';

const SearchContext = createContext<SearchContextType>({
  searchTerm: '',
  setSearchTerm: () => null,
});

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);
