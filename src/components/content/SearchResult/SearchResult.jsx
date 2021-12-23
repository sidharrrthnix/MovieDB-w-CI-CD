import React from 'react';
import Ratings from '../ratings/Ratings';
import './SearchResult.scss';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import LazyImage from '../../lazy-image/LazyImage';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SearchResult = (props) => {
  // console.log(props);
  const { list, searchQuery, searchResult } = props;
  const [movieData, setMovieData] = useState([]);
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
  useEffect(() => {
    setMovieData(searchResult);
  }, [searchResult]);
  // console.log(movieData);
  const formatMovieTitle = (title) => title.toLowerCase().replace(/ /g, '-');

  return (
    <div className="searchKeyword">
      <div className="grid-search-title">
        <span className="grid-text1">Your search keyword:</span>{' '}
        <span className="grid-text2">{searchQuery}</span>
      </div>
      <div className="grid">
        {movieData.map((data) => (
          <Fragment key={uuidv4()}>
            {data.poster_path && (
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
                    {' '}
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
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  list: state.movies.list,
  searchResult: state.movies.searchResult,
  searchQuery: state.movies.searchQuery
});
export default connect(mapStateToProps, {})(SearchResult);
