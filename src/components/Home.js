import React from 'react';
import MovieList from '../components/MovieList';

function Home() {
  return (
    <div className="content">
      <h1>Welcome to Movie Search</h1>
      <MovieList />
    </div>
  );
}

export default Home;
