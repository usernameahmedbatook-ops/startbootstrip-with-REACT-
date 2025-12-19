import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="page notfound-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;