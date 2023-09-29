import React, { useEffect, useState } from 'react';
import { getTrendMovies } from 'services/moviesAPI';

import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendMovies()
      .then(data => {
        // console.log(data.results);
        setMovies([...data.results]);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container">
      {isLoading && <div>...Loading</div>}
      <h3>HomePage</h3>
      {/* <MovieList movies={movies} /> */}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
