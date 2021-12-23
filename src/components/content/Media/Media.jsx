import React from 'react';
import './Media.scss';
const Media = () => {
  return (
    <>
      <div className="media">
        <div>
          <div className="media-title">Watch Trailer</div>
          <div className="media-videos">
            <div className="video">
              <iframe
                title="avengers"
                style={{ width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/Rt_UqUm38BI"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div>
          <div className="media-title">Photos (10)</div>
          <div className="media-images">
            <div
              className="image-cell"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/4048092/pexels-photo-4048092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
