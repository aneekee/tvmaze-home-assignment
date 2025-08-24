import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  selectLastSearchShows,
  selectShowsSearchLoading,
} from '../selectors/search.selectors';
import { ShowCard } from './ShowCard';
import { ShowCardSkeleton } from './ShowCardSkeleton';
import { selectSelectedGenres } from '../selectors/genres.selectors';

export const SearchResultsContainer = () => {
  const navigate = useNavigate();
  const shows = useSelector(selectLastSearchShows);
  const selectedGenres = useSelector(selectSelectedGenres);
  const isLoading = useSelector(selectShowsSearchLoading);

  const filteredShows = shows.filter(
    (show) =>
      show.genres &&
      show.genres.some((genre) => selectedGenres.includes(genre)),
  );

  const navigateToDetails = (showId: number) => {
    navigate(`/show-details/${showId}`);
  };

  if (shows.length === 0 && !isLoading) {
    return null;
  }

  if (filteredShows.length === 0 && shows.length > 0 && !isLoading) {
    return (
      <div className="mt-8 w-full px-4">
        <div className="text-center py-10">
          <p className="text-lg font-medium">
            No shows match the selected genres.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="mt-8 w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ShowCardSkeleton key={`skeleton-${index}`} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredShows.map((show) => (
          <ShowCard key={show.id} show={show} onClick={navigateToDetails} />
        ))}
      </div>
    </div>
  );
};
