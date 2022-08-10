import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
