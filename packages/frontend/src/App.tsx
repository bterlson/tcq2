import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex flex-col overflow-hidden h-screen">
      <header className="flex justify-between px-4 py-2 bg-orange-200 h-16 items-center border-b border-orange-300">
        <a href="/" className="text-4xl">TCQ</a>
        <a href="/" className="text-xl bg-transparent hover:bg-orange-600 font-semibold py-2 px-4 border border-orange-500 rounded hover:text-white">Sign in</a>
      </header>
      <main className="items-start">
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
