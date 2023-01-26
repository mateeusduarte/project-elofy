import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navBarContainer">
      <Link to="/home">Home</Link>
      <Link to="/Feed">Feed</Link>
      <Link to="/Aulas">Aulas</Link>
      <Link to="/Videos">Videos</Link>
    </div>
  );
}

export default Navbar;
