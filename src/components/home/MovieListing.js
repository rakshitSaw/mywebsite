import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../movieDetail/MovieCard";

export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies = "";
  let renderShows = "";

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, i) => (
        <div className="card-group">
          <MovieCard key={i} data={show} />
        </div>
      ))
    ) : (
      <div>
        <h1>Shows error</h1>
      </div>
    );

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, i) => <MovieCard key={i} data={movie} />)
    ) : (
      <div>
        <h1>Error</h1>
      </div>
    );

  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-listing">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovies}</div>
        </div>
        <div className="movie-listing">
          <h2>Shows</h2>
          <div className="movie-container">{renderShows}</div>
        </div>
      </div>
    </>
  );
}
