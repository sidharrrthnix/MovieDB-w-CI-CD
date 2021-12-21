import React from 'react';
import Slideshow from '../slide-show/Slideshow';
import './MainContent.scss';
const MainContent = () => {
  const images = [
    {
      url: 'https://img.wallpapersafari.com/desktop/1440/900/53/79/ajwtby.jpg'
    },
    {
      url: 'https://cdn.wallpapersafari.com/66/81/kmY4Rg.jpg'
    },
    {
      url: 'https://w0.peakpx.com/wallpaper/720/8/HD-wallpaper-vijay-master-movie-poster.jpg'
    }
  ];

  return (
    <div className="main-content">
      <Slideshow images={images} auto={false} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
    </div>
  );
};

export default MainContent;
