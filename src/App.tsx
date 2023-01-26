import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Nav';
import PageBody from './PageBody';
import { isPalindromo } from './palindromo';

function App() {
  //FUNÇÃO 1
  console.log('isPalindromo:', isPalindromo('arara'));
  return (
    <Router>
      <Navbar />
      <PageBody />
    </Router>
  );
}

export default App;
