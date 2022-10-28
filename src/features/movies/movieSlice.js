import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/MovieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const search = "harry";
    const response = await movieApi
      .get(`?apiKey=${apiKey}&s=${search}&type=movie`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const search = "Friends";
    const response = await movieApi
      .get(`?apiKey=${apiKey}&s=${search}&type=series`)
      .catch((err) => {
        console.log(err);
      });
    return response.data;
  }
);

const initialState = { movies: {}, shows: {} };

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fectched success");
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fectched success");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
