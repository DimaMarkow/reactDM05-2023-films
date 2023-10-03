import SearchBar from 'components/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieList from 'components/MovieList/MovieList';
import { getSearchedMovie } from 'services/moviesAPI';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = searchParams.get('query');

  useEffect(() => {
    setIsLoading(true);
    getSearchedMovie(search)
      .then(data => {
        // console.log(data.results);
        setMovies([...data.results]);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [search]);

  return (
    <>
      <SearchBar setSearchParams={setSearchParams} initMovie={search} />
      {isLoading && <div>...Loading</div>}
      <h4>Filtered Movie</h4>
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
