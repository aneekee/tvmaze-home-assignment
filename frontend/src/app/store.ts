import { configureStore } from '@reduxjs/toolkit';

import { searchApi } from '@/features/search/services/search.api';
import genresReducer from '@/features/search/slice/genres.slice';

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
    genres: genresReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
