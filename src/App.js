import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Photos from './components/Photo';

function App() {
  return (
    <div className="App">
      <Header />
      <Photos />
    </div>
  );
}

export default App;
