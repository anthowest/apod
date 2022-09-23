import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Photos from './components/Photo';
import PrevPhoto from './components/PrevPhoto';

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apod/' element={<Photos />}/>
          <Route path='/previous/:previousDay' element={<PrevPhoto />}/>
        </Routes>
    </div>
  );
}

export default App;
