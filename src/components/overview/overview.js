import React from 'react';
import { getRatingLevel } from '../../utils';

const Overview = ({ movie }) => {
  const { rating, description, crew } = movie;
  const actors = crew.starring.map((actor, index) => {
    return (
      <>
        <span key={index}>
          {actor}
          {index === crew.starring.length - 1 ? `` : `,`}{' '}
        </span>
      </>
    );
  });

  return (
    <>
      <div className='movie-rating'>
        <div className='movie-rating__score'>{rating.score}</div>
        <p className='movie-rating__meta'>
          <span className='movie-rating__level'>
            {getRatingLevel(rating.score)}
          </span>
          <span className='movie-rating__count'>{rating.count} ratings</span>
        </p>
      </div>

      <div className='movie-card__text'>
        <p>{description}</p>

        <p className='movie-card__director'>
          <strong>Director: {crew.director}</strong>
        </p>

        <p className='movie-card__starring'>
          <strong>Starring: {actors}</strong>
        </p>
      </div>
    </>
  );
};

export default Overview;