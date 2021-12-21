import React from 'react';
import Ratings from '../ratings/Ratings';
import './Grid.scss';
const Grid = ({ images }) => {
  console.log(images);
  return (
    <>
      <div className="grid">
        {images.map((i) => (
          <div key={i.id}>
            <div
              className="grid-cell"
              style={{ backgroundImage: `url(${i.url})` }}
            >
              <div className="grid-read-more">
                <button className="grid-cell-button">Read More</button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">Beast</span>
                <div className="grid-detail-rating">
                  <Ratings rating={i.rating} totalStars={10} />
                  &nbsp; &nbsp;
                  <div className="grid-vote-average">{i.rating}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
