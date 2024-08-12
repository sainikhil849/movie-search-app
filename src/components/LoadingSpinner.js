import React from 'react';
import './styles.css';

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
