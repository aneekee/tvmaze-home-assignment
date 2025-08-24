import type { Show } from '@/features/shows/types/shows.types';

export type ShowsSearchParams = {
  q: string;
};

export type ShowsSearchResponse = {
  data: {
    score: number;
    show: Show;
  }[];
  genres: string[];
};
