import type { Show } from '@/features/shows/types/shows.types';

export type ShowsSearchParams = {
  q: string;
};

export type ShowsSearchResponse = {
  score: number;
  show: Show;
};
