import { createSlice, current } from "@reduxjs/toolkit";
import { SearchMovieData } from "../../models/movie.model";
type SearchMovieType = {
  movies: SearchMovieData[];
};
const initialState: SearchMovieType = {
  movies: [],
};
const movieSlice = createSlice({
  name: "movieListing",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies = action.payload;
      console.log(current(state));
    },
  },
});

export const { addMovie } = movieSlice.actions;

export default movieSlice.reducer;
