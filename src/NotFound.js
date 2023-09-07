import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found-title">Sorry</h2>
      <p className="not-found-message">That page cannot be found</p>
      <Link to="/" className="not-found-link">Home</Link>
    </div>
  );
};

export default NotFound;
