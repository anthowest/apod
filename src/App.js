import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Photos from './components/Photo';
import Header from './components/Header'


function App() {
  return (
    <div className="app">
      <Header />
      <Photos />
    </div>
  );
}

export default App;
