import React from 'react';
import { useState } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import {
  getMovies,
  setMovieType,
  setResPgNm,
  searchResult,
  searchQuery,
  clearMovies
} from '../../redux/actions/movies';
import logo from '../../assets/movie-logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';

import { useEffect } from 'react';
import { API_URL } from '../../services/movie.services';
const Header = (props) => {
  let [navClass, setNavClass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    getMovies,
    page,
    totalPages,
    setMovieType,
    setResPgNm,
    movieType,
    searchQuery,
    searchResult,
    clearMovies
  } = props;
  const [type, setType] = useState('now_playing');
  const [search, setSearch] = useState('');
  let [menuClass, setMenuClass] = useState(false);
  const HEADER_LIST = [
    {
      id: 1,
      iconClass: 'fas fa-film',
      name: 'Now Playing',
      type: 'now_playing'
    },
    {
      id: 2,
      iconClass: 'fas fa-fire',
      name: 'Popular',
      type: 'popular'
    },
    {
      id: 3,
      iconClass: 'fas fa-star',
      name: 'Top Rated',
      type: 'top_rated'
    },
    {
      id: 4,
      iconClass: 'fas fa-plus-square',
      name: 'Upcoming',
      type: 'upcoming'
    }
  ];
  const [disableSearch, setDisableSearch] = useState(false);
  useEffect(() => {
    if (location.pathname !== '/' && location.key) {
      setDisableSearch(true);
    }
    getMovies(type, page);
    setResPgNm(page, totalPages);
  }, [type, location, disableSearch]);
  const setMovieTypeUrl = (type) => {
    setDisableSearch(false);
    if (location.pathname !== '/') {
      clearMovies();
      navigate('/');
      setType(type);
      setMovieType(type);
      // setType('now_playing');
      // setMovieType('now_playing');
    } else {
      setType(type);
      setMovieType(type);
    }
  };

  const fetchData = async () => {
    const res = await API_URL('now_playing', 1);
    console.log(res);
  };
  const toggleMenu = (e) => {
    menuClass = !menuClass;
    navClass = !navClass;
    setMenuClass(menuClass);
    setNavClass(navClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };
  const onSearchChange = (e) => {
    setSearch(e.target.value);
    searchQuery(e.target.value);
    searchResult(e.target.value);
  };
  return (
    <div className="header-nav-wrapper">
      <div className="header-bar"></div>
      <div className="header-navbar">
        <div
          className="header-image"
          onClick={() => {
            clearMovies();
            navigate('/');
            setDisableSearch(false);
          }}
        >
          <img src={logo} alt="" />
        </div>
        <div
          className={`${
            menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'
          }`}
          id="header-mobile-menu"
          onClick={() => toggleMenu()}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul
          className={`${
            navClass ? 'header-nav header-mobile-nav' : 'header-nav'
          }`}
        >
          {HEADER_LIST.map((data, i) => (
            <li
              className={
                data.type === type
                  ? 'header-nav-item active-item'
                  : 'header-nav-item'
              }
              key={data.id}
              onClick={() => setMovieTypeUrl(data.type)}
            >
              <span className="header-list-icon">
                <i className={data.iconClass} />
              </span>
              &nbsp;
              <span className="header-list-name">{data.name}</span>
            </li>
          ))}
          <input
            className={`search-input ${disableSearch ? 'disabled' : ''}`}
            type="text"
            placeholder="Search for a movie"
            value={search}
            onChange={onSearchChange}
          />
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  list: state.movies.list,
  totalPages: state.movies.totalPages,
  page: state.movies.page,
  movieType: state.movies.movieType
});
export default connect(mapStateToProps, {
  getMovies,
  setResPgNm,
  setMovieType,
  searchResult,
  searchQuery,
  clearMovies
})(Header);
