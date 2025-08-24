import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface GenresState {
  selectedGenres: string[];
}

const initialState: GenresState = {
  selectedGenres: [],
};

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setSelectedGenres: (state, action: PayloadAction<string[]>) => {
      state.selectedGenres = action.payload;
    },
    addGenre: (state, action: PayloadAction<string>) => {
      if (!state.selectedGenres.includes(action.payload)) {
        state.selectedGenres.push(action.payload);
      }
    },
    removeGenre: (state, action: PayloadAction<string>) => {
      state.selectedGenres = state.selectedGenres.filter(
        (genre) => genre !== action.payload,
      );
    },
    clearGenres: (state) => {
      state.selectedGenres = [];
    },
  },
});

export const { setSelectedGenres, addGenre, removeGenre, clearGenres } =
  genresSlice.actions;

export default genresSlice.reducer;
