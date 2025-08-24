import type { RootState } from '@/app/store';

export const selectSelectedGenres = (state: RootState) =>
  state.genres.selectedGenres;
