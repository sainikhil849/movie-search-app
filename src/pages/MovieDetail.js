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
      <h1
