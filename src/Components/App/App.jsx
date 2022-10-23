import React from 'react';
// IMPORT REACT DEPENDENCIES

import './App.css';
// IMPORTS THE APP CSS FOR STYLING

import GameBoard from '../GameBoard/GameBoard'
// IMPORTS GAME BOARD AND ALL THE COMPONENTS THAT GAME BOARD EXPORTED FROM OTHER COMPONENTS

function App() {
  return (
    <div className="App">
      
      {/* DISPLAYS HEADING/TITLE TO PAGE */}
      <h1>Hello, Let's create React TicTacToe!</h1>

      {/* DISPLAYS THE GAME BOARD COMPONENT TO THE PAGE */}
      <GameBoard />
    </div>
  );
}

export default App
// EXPORT ALLOWS THIS FUNCTION TO BE UTILIZED BY OTHER REACT COMPONENTS