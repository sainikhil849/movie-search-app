import React from 'react';
import { IMG_PATH } from '../global';
import { useHistory } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/detail?id=${movie.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img className="card--image" src={`${IMG_PATH}${movie.poster_path}`} alt={movie.title} />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p><small>Release Date: {movie.release_date}</small></p>
        <p><small>Rating: {movie.vote_average}</small></p>
        <p className="card--desc">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;

