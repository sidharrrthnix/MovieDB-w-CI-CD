import React from 'react';
import Crew from '../Crew/Crew';
import Media from '../Media/Media';
import Overview from '../Overview/Overview';
import Ratings from '../ratings/Ratings';
import Reviews from '../Reviews/Reviews';
import Tabs from '../tabs/Tabs';
import { connect } from 'react-redux';
import { movieDetails } from '../../../redux/actions/movies';
import './Details.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { IMAGE_URL } from '../../../services/movie.services';
const Details = ({ movieDetails, movie }) => {
  const { id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    if (movie.length === 0) {
      movieDetails(id);
    }
    setDetails(movie[0]);
  }, [id, movie]);
  console.log(movie);
  return (
    <>
      {details && (
        <div className="movie-container">
          <div
            className="movie-bg"
            style={{
              backgroundImage: `url(${IMAGE_URL}${details.backdrop_path})`
            }}
          ></div>
          <div className="movie-overlay"></div>
          <div className="movie-details">
            <div className="movie-image">
              <img src={`${IMAGE_URL}${details.backdrop_path}`} alt="" />
            </div>
            <div className="movie-body">
              <div className="movie-overview">
                <div className="title">
                  {details.title} <span>{details.release_date}</span>
                </div>
                <div className="movie-genres">
                  <ul className="genres">
                    {details.genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="rating">
                  <Ratings
                    className="rating-stars"
                    rating={details.vote_average}
                    totalStars={10}
                  />
                  &nbsp;
                  <span>{details.vote_average}</span>{' '}
                  <p>({details.vote_count}) reviews</p>
                </div>
                <Tabs>
                  <div label="Overview">
                    <Overview />
                  </div>
                  <div label="Crew">
                    <Crew />
                  </div>
                  <div label="Media">
                    <Media />
                  </div>
                  <div label="Reviews">
                    <Reviews />
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  movie: state.movies.movie
});

export default connect(mapStateToProps, { movieDetails })(Details);
