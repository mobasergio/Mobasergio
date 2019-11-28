import React from 'react';
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div id="notfound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}
 
export default NotFoundPage;