import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './MainContent.scss';
import Grid from '../grid/Grid';
import Paginate from '../paginate/Paginate';
import SlideShow from '../slide-show/Slideshow';
import { getMovies, setResPgNm } from '../../../redux/actions/movies';

const MainContent = (props) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

  const { list, totalPages, page, movieType, setResPgNm, getMovies } = props;
  const [currentPage, setCurrentPage] = useState(page);
  const [images, setImages] = useState([]);
  const randomMovies = list
    .sort(() => Math.random() - Math.random())
    .slice(0, 6);

  const HEADER_TYPE = {
    now_playing: 'Now Playing',
    popular: 'Popular',
    top_rated: 'Top Rated',
    upcoming: 'Upcoming'
  };

  useEffect(() => {
    if (randomMovies.length) {
      const IMAGES = [
        {
          id: 1,
          url: `${IMAGE_URL}/${randomMovies[0].backdrop_path}`
        },
        {
          id: 2,
          url: `${IMAGE_URL}/${randomMovies[1].backdrop_path}`
        },
        {
          id: 3,
          url: `${IMAGE_URL}/${randomMovies[2].backdrop_path}`
        },
        {
          id: 4,
          url: `${IMAGE_URL}/${randomMovies[3].backdrop_path}`
        },
        {
          id: 5,
          url: `${IMAGE_URL}/${randomMovies[4].backdrop_path}`
        },
        {
          id: 6,
          url: `${IMAGE_URL}/${randomMovies[5].backdrop_path}`
        }
      ];
      setImages(IMAGES);
    }

    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setCurrentPage(page);
  }, [page, totalPages]);
  const paginate = (type) => {
    let pageNumber = currentPage;
    if (type === 'prev' && currentPage >= 1) {
      pageNumber -= 1;
    } else {
      pageNumber += 1;
    }
    setCurrentPage(pageNumber);
    setResPgNm(pageNumber, totalPages);
    getMovies(movieType, pageNumber);
  };

  return (
    <div className="main-content">
      <SlideShow images={images} auto={true} />
      <div className="grid-movie-title">
        <div className="movieType">{HEADER_TYPE[movieType]}</div>
        <div className="paginate">
          <Paginate
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        </div>
      </div>
      <Grid />
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  totalPages: state.movies.totalPages,
  page: state.movies.page,
  movieType: state.movies.movieType
});
export default connect(mapStateToProps, { setResPgNm, getMovies })(MainContent);
