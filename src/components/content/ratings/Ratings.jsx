import React from 'react';
import { Fragment } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Ratings.scss';
const Ratings = ({ rating, totalStars }) => {
  const [noStars, setNOStars] = useState();
  let ratingRef = useRef();
  useEffect(() => {
    const starArray = [...Array(totalStars).keys()].map((i) => i + 1);
    setNOStars(starArray);
    let percentage;
    if (rating <= 5) {
      percentage = (rating / 5) * 100;
    } else {
      percentage = (rating / 10) * 100;
    }

    ratingRef.current.style.width = `${Math.floor(percentage)}%`;
  }, [rating, totalStars]);
  return (
    <div className="star-rating">
      <div className="back-stars">
        {noStars &&
          noStars.map((i) => (
            <Fragment key={i}>
              <i className="fa fa-star"></i>
            </Fragment>
          ))}

        <div className="front-stars" ref={ratingRef}>
          {noStars &&
            noStars.map((i) => (
              <Fragment key={i}>
                <i className="fa fa-star"></i>
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Ratings;
