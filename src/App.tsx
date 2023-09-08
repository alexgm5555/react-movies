import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './layout/layout01';

const App:FC =()=>{
  return (
    <div className="App">
      <header className="App-header">
        <Layout />
      </header>
    </div>
  );
}

export default App;
