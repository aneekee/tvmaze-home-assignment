import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Checkbox } from '@/components/ui/checkbox';
import { Skeleton } from '@/components/ui/skeleton';

import {
  selectLastSearchGenres,
  selectShowsSearchLoading,
} from '../selectors/search.selectors';
import { setSelectedGenres } from '../slice/genres.slice';
import { selectSelectedGenres } from '../selectors/genres.selectors';

export const GenresFilters = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectLastSearchGenres);
  const genresLoading = useSelector(selectShowsSearchLoading);
  const selectedGenresFromStore = useSelector(selectSelectedGenres);

  const [selectedGenres, setSelectedGenresLocal] = useState<string[]>([]);

  useEffect(() => {
    if (genres.length > 0 && selectedGenresFromStore.length === 0) {
      setSelectedGenresLocal([...genres]);
      dispatch(setSelectedGenres([...genres]));
    } else if (selectedGenresFromStore.length > 0) {
      setSelectedGenresLocal([...selectedGenresFromStore]);
    }
  }, [genres, selectedGenresFromStore, dispatch]);

  const handleGenreChange = (genre: string, checked: boolean) => {
    let updatedGenres: string[];

    if (checked) {
      updatedGenres = [...selectedGenres, genre];
    } else {
      updatedGenres = selectedGenres.filter((g) => g !== genre);
    }

    setSelectedGenresLocal(updatedGenres);
    dispatch(setSelectedGenres(updatedGenres));
  };

  return (
    <div className="mt-15 w-full flex justify-center">
      <div className="w-11/12 flex gap-3 justify-center flex-wrap">
        {genresLoading ? <Skeleton className="h-10 w-full" /> : null}

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
