import { GenresFilters } from '@/features/search/components/GenresFilters';
import { SearchResultsContainer } from '@/features/search/components/SearchResultsContainer';

export const HomePage = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="w-full max-w-4xl mx-auto">
        <GenresFilters />
        <SearchResultsContainer />
      </div>
    </div>
  );
};
