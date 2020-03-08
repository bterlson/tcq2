import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid grid-cols-2 overflow-hidden h-screen">
      <header className="col-span-2 flex justify-center">
        <img src={logo} className="w-auto inline-block" />
      </header>
      <main className="col-span-2">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          NEVER LEARN REACT
        </a>
      </main>
    </div>
  );
}

export default App;
