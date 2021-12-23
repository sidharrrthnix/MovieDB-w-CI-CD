import React from 'react';
import Crew from '../Crew/Crew';
import Media from '../Media/Media';
import Overview from '../Overview/Overview';
import Ratings from '../ratings/Ratings';
import Reviews from '../Reviews/Reviews';
import Tabs from '../tabs/Tabs';
import './Details.scss';
const Details = () => {
  return (
    <>
      <div className="movie-container">
        <div
          className="movie-bg"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/2763927/pexels-photo-2763927.jpeg?cs=srgb&dl=pexels-bithin-raj-2763927.jpg&fm=jpg)'
          }}
        ></div>
        <div className="movie-overlay"></div>
        <div className="movie-details">
          <div className="movie-image">
            <img
              src="https://images.pexels.com/photos/4048092/pexels-photo-4048092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
          <div className="movie-body">
            <div className="movie-overview">
              <div className="title">
                Avengers <span>20-12-2012</span>
              </div>
              <div className="movie-genres">
                <ul className="genres">
                  <li>Action</li>
                  <li>Comedy</li>
                  <li>Sc-Fi</li>
                </ul>
              </div>
              <div className="rating">
                <Ratings
                  className="rating-stars"
                  rating={6.5}
                  totalStars={10}
                />
                &nbsp;
                <span>6.5</span> <p>(300) reviews</p>
              </div>
              <Tabs>
                <div label="Overview">
                  <Overview />
                </div>
                <div label="Crew">
                  <Crew />
                </div>
                <div label="Media">
                  <Media />
                </div>
                <div label="Reviews">
                  <Reviews />
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
