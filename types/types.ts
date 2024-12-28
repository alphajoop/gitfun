export interface Emoji {
  icon: string;
  name: string;
  usage: string;
  example: string;
}

export interface Category {
  name: string;
  emojis: Emoji[];
}

export interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}
