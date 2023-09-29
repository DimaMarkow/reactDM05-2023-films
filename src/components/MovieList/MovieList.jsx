import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default MovieList;
