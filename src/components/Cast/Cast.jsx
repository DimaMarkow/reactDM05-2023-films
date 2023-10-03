import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCastById } from 'services/moviesAPI';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCastById(movieId)
      .then(data => {
        setCasts([...data.cast]);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);
  return (
    <>
      {isLoading && <div>...Loading</div>}
      {!isLoading && casts.length === 0 && (
        <div> We don't have any results for this movie ...</div>
      )}

      <ul className="list-group">
        {casts?.map(cast => {
          return (
            <li
              key={cast.cast_id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{cast.name}</div>
                {cast.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                )}

                {/* {review.content} */}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
