import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewsById } from 'services/moviesAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviewsById(movieId)
      .then(data => {
        setReviews([...data.results]);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <div>...Loading</div>}
      <ul class="list-group">
        {reviews?.map(review => {
          return (
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{review.author}</div>
                {review.content}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
