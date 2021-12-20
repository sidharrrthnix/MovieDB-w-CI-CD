import React from 'react';
import { useState } from 'react';
import './Header.scss';
import logo from '../../assets/movie-logo.svg';
const Header = () => {
  let [navClass, setNavClass] = useState(false);
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
  return (
    <div className="header-nav-wrapper">
      <div className="header-bar"></div>
      <div className="header-navbar">
        <div className="header-image">
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
            <li className="header-nav-item" key={data.id}>
              <spam className="header-list-icon">
                <i className={data.iconClass} />
              </spam>
              &nbsp;
              <span className="header-list-name">{data.name}</span>
            </li>
          ))}
          <input
            className={`search-input`}
            type="text"
            placeholder="Search for a movie"
          />
        </ul>
      </div>
    </div>
  );
};

export default Header;
