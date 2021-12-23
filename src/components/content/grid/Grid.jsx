import React from 'react';
import Ratings from '../ratings/Ratings';
import './Grid.scss';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../../lazy-image/LazyImage';
const Grid = (props) => {
  // console.log(props);
  const { list } = props;
  const [movieData, setMovieData] = useState([]);
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
  useEffect(() => {
    setMovieData(list);
  }, [list]);
  // console.log(movieData);
  const formatMovieTitle = (title) => title.toLowerCase().replace(/ /g, '-');
  return (
    <>
      <div className="grid">
        {movieData.map((data) => (
          <div key={uuidv4()}>
            <div
              className="grid-cell"
              style={{
                backgroundImage: `url(${IMAGE_URL}/${data.poster_path})`
              }}
              alt="placeholder"
            >
              {/* <LazyImage
              className="grid-cell"
              src={`url(${IMAGE_URL}/${data.poster_path})`}
              alt="placeholder"
            ></LazyImage> */}
              <div className="grid-read-more">
                <button className="grid-cell-button">
                  <Link
                    to={`/${data.id}/${formatMovieTitle(data.title)}/detail`}
                  >
                    Read More
                  </Link>
                </button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">{data.title}</span>
                <div className="grid-detail-rating">
                  <Ratings rating={data.vote_average} totalStars={10} />
                  &nbsp; &nbsp;
                  <div className="grid-vote-average">{data.vote_average}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  list: state.movies.list
});
export default connect(mapStateToProps, {})(Grid);
