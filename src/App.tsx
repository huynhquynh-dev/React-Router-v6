import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Booker</h1>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Outlet /> {/* Giống như {children}, render các path con*/}
    </div>
  );
}

export default App;
