import React from 'react';
import Board from './components/Board';
import './style.css';

const App = ({ name }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>Tick-Tack-Toe</h1>
      </div>
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          marginTop: '1rem',
        }}
      >
        <Board />
      </div>
    </div>
  );
};

export default App;
