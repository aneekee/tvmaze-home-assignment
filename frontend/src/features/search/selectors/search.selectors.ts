import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';

import { searchApi } from '../services/search.api';
import type { ShowsSearchResponse } from '../types/search.types';

const selectShowsSearchQueries = createSelector(
  (state: RootState) => state[searchApi.reducerPath].queries,
  (queries) =>
    Object.entries(queries || {})
      .filter(([key]) => key.startsWith('showsSearch'))
      .sort((a, b) => {
        const timeA = a[1]?.fulfilledTimeStamp || 0;
        const timeB = b[1]?.fulfilledTimeStamp || 0;
        return timeB - timeA;
      }),
);

export const selectLastSearchResults = createSelector(
  selectShowsSearchQueries,
  (showsSearchQueries) =>
    (showsSearchQueries[0]?.[1]?.data as ShowsSearchResponse) || null,
);

export const selectLastSearchGenres = createSelector(
  selectLastSearchResults,
  (results) => results?.genres || [],
);

export const selectShowsSearchLoading = createSelector(
  selectShowsSearchQueries,
  (showsSearchQueries) =>
    showsSearchQueries.some(([, query]) => query?.status === 'pending'),
);
