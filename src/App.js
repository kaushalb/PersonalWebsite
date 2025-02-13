import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/HomeScreen';
import Navbar from './Pages/Home/Navbar';
import AboutMe from './Pages/Home/AboutMe';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<div> 404 NOT FOUND </div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
