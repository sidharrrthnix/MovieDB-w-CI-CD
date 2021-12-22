import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MainContent from '../content/main-content/Index';
import Spinner from '../spinner/Spinner';
import { connect } from 'react-redux';
import { loadMoreMovies, setResPgNm } from '../../redux/actions/movies';
import { useRef } from 'react';
import './Main.scss';
const Main = (props) => {
  const { page, loadMoreMovies, totalPages, setResPgNm, movieType } = props;
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);
  const mainRef = useRef();
  const bottomLineRef = useRef();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    setResPgNm(currentPage, totalPages);
    // loadMoreMovies(movieType, currentPage);
  }, [currentPage, totalPages]);
  const fetchData = () => {
    let pageNumber = 1;
    if (page < totalPages) {
      pageNumber = pageNumber + 1;
      setCurrentPage(pageNumber);
      loadMoreMovies(movieType, pageNumber);
    }
  };
  const handleScroll = () => {
    const height = mainRef.current.getBoundingClientRect().height;
    const bottomTop = bottomLineRef.current.getBoundingClientRect().top;
    if (bottomTop <= height) {
      fetchData();
    }
  };
  return (
    <div className="main" ref={mainRef} onScroll={() => handleScroll()}>
      {loading ? <Spinner /> : <MainContent />}
      <div ref={bottomLineRef}></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  totalPages: state.movies.totalPages,
  page: state.movies.page,
  movieType: state.movies.movieType
});
export default connect(mapStateToProps, { loadMoreMovies, setResPgNm })(Main);
