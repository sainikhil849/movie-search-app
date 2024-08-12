import React, { useState } from 'react';
import { fetchMovies } from '../api';
import MovieCard from './MovieCard';
import LoadingSpinner from './LoadingSpinner';
import './styles.css';

function MovieList() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const results = await fetchMovies(query);
      setMovies(results);
    } catch (err) {
      setError('Failed to fetch movies.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search for movies"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {loading && <LoadingSpinner />}
      {error && <p className="error">{error}</p>}
      <div className="card-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          !loading && <p>No results found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;
