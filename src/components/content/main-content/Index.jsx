import React from 'react';
import { useState } from 'react';
import Grid from '../grid/Grid';
import Paginate from '../paginate/Paginate';
import Slideshow from '../slide-show/Slideshow';
import './MainContent.scss';
const MainContent = () => {
  const images = [
    {
      url: 'https://img.wallpapersafari.com/desktop/1440/900/53/79/ajwtby.jpg',
      rating: 8.5
    },
    {
      url: 'https://cdn.wallpapersafari.com/66/81/kmY4Rg.jpg',
      rating: 8
    },
    {
      url: 'https://w0.peakpx.com/wallpaper/720/8/HD-wallpaper-vijay-master-movie-poster.jpg',
      rating: 10
    }
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
    <div className="main-content">
      <Slideshow images={images} auto={false} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate
            currentPage={currentPage}
            totalPages={10}
            paginate={paginate}
          />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
