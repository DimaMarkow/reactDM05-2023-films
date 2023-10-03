import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/moviesAPI';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/movies');

  let string = ``;

  useEffect(() => {
    setIsLoading(true);
    getMovieById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (movie) {
    const { title, vote_average, overview, genres } = movie;
    if (movie.poster_path) {
      string = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;
    }
    return (
      <div className="container" style={{ padding: 5 }}>
        {isLoading && <div>...Loading</div>}

        <div className="card mb-3" style={{ maxWidth: '80%' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={string} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-title">
                  User Score: {(vote_average * 10).toFixed(0)}%
                </h6>

                <p className="card-text">{overview}</p>
                <h6 className="card-title" style={{ display: 'flex' }}>
                  Genres:
                  <div style={{ display: 'flex' }}>
                    {genres.map(genre => {
                      return (
                        <p
                          key={genre.id}
                          className="card-text"
                          style={{ fontWeight: '400' }}
                        >
                          &nbsp;{genre.name}
                        </p>
                      );
                    })}
                  </div>
                </h6>
                <ul>
                  <li>
                    <Link to="cast">Cast</Link>
                  </li>
                  <li>
                    <Link to="reviews">Reviews</Link>
                  </li>
                </ul>

                <Link to={backLinkHref.current} className="btn btn-primary">
                  Go back
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    );
  }
};

export default MovieDetails;
