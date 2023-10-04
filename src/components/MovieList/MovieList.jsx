import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className="list-group list-group-flush">
      {movies.map(({ id, title }) => (
        <li key={id} className="list-group-item">
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
