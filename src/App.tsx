import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import './styles/apusWrapperContent.css';
import './styles/apusTable.css';
import { HomePage } from './page/HomePage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Counter />
      </header> */}
      <HomePage/>
    </div>
  );
}

export default App;
