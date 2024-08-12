import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import './styles.css';

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const movieId = new URLSearchParams(location.search).get('id');

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieDetails(movieId);
        setMovie(movieData);
      } catch (err) {
        setError('Failed to fetch movie details.');
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (error) return <p className="error">{error}</p>;

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="detail">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
    </div>
  );
}

export default MovieDetail;
