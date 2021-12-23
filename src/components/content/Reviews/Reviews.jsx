import React from 'react';
import './Reviews.scss';
import { connect } from 'react-redux';
import { movieDetails } from '../../../redux/actions/movies';

import { IMAGE_URL } from '../../../services/movie.services';
import { useState } from 'react';
const Reviews = ({ movie }) => {
  const [reviews] = useState(movie[4]);

  return (
    <>
      <div className="movie-reviews">
        <div className="div-title">Reviews {reviews.results.length || ''}</div>
        {reviews.results &&
          reviews.results.map((data) => (
            <div className="reviews" key={data.id}>
              <h3>{data.author}</h3>
              <div>{data.content}</div>
            </div>
          ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie
});
export default connect(mapStateToProps)(Reviews);
