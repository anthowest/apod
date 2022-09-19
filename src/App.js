import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Photos from './components/Photo';
import Header from './components/Header'

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Header />
      <Photos />
    </div>
  );
}

export default App;
