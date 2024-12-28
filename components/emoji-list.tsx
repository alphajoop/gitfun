import { Category } from '@/types/types';
import { EmojiCard } from '@/components/emoji-card';
import { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface EmojiListProps {
  category: Category;
}

export function EmojiList({ category }: EmojiListProps) {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(category.emojis.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEmojis = category.emojis.slice(startIndex, endIndex);

  const renderPaginationItems = () => {
    const items = [];
    const visiblePages = 3; // Toujours afficher trois pages (actuelle + 1 avant/après)
    const halfVisiblePages = Math.floor(visiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(totalPages, currentPage + halfVisiblePages);

    // Ajuster la plage si proche des bords
    if (currentPage <= halfVisiblePages) {
      endPage = Math.min(visiblePages, totalPages);
    } else if (currentPage > totalPages - halfVisiblePages) {
      startPage = Math.max(1, totalPages - visiblePages + 1);
    }

    // Ajouter les pages calculées
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => setCurrentPage(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return items;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {currentEmojis.map((emoji, index) => (
          <EmojiCard key={index} emoji={emoji} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                className={
                  currentPage === 1
                    ? 'pointer-events-none opacity-50'
                    : 'cursor-pointer'
                }
              />
            </PaginationItem>
            {renderPaginationItems()}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                className={
                  currentPage === totalPages
                    ? 'pointer-events-none opacity-50'
                    : 'cursor-pointer'
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
