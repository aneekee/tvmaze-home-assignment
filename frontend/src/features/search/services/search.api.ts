import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  ShowsSearchParams,
  ShowsSearchResponse,
} from '../types/search.types';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    showsSearch: builder.query<ShowsSearchResponse, ShowsSearchParams>({
      query: ({ q }) => {
        return {
          url: `/shows/search`,
          method: 'GET',
          params: { q },
        };
      },
    }),
  }),
});

export const { useShowsSearchQuery } = searchApi;
