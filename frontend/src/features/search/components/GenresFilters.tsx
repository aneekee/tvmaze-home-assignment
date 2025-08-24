import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Checkbox } from '@/components/ui/checkbox';
import { Skeleton } from '@/components/ui/skeleton';

import {
  selectLastSearchGenres,
  selectShowsSearchLoading,
} from '../selectors/search.selectors';

export const GenresFilters = () => {
  const genres = useSelector(selectLastSearchGenres);
  const genresLoading = useSelector(selectShowsSearchLoading);

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  useEffect(() => {
    if (genres.length > 0) {
      setSelectedGenres([...genres]);
    }
  }, [genres]);

  const handleGenreChange = (genre: string, checked: boolean) => {
    if (checked) {
      setSelectedGenres((prev) => [...prev, genre]);
    } else {
      setSelectedGenres((prev) => prev.filter((g) => g !== genre));
    }
  };

  return (
    <div className="mt-15 w-full flex justify-center">
      <div className="w-11/12 flex gap-3 justify-center flex-wrap">
        {genresLoading ? <Skeleton className="h-10 w-full" /> : null}

        {genres.length === 0 && !genresLoading ? (
          <p className="text-sm text-muted-foreground">No genres found</p>
        ) : null}

        {genres.map((genre) => (
          <div key={genre} className="flex items-center space-x-2">
            <Checkbox
              id={`genre-${genre}`}
              checked={selectedGenres.includes(genre)}
              onCheckedChange={(checked) =>
                handleGenreChange(genre, checked as boolean)
              }
            />
            <label
              htmlFor={`genre-${genre}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {genre}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
