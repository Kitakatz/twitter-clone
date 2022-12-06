import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screens from './components/screens';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path='/home'
          element={<Screens.Home />}
        />
        <Route 
          path='/home/detail/:id'
          element={<Screens.Detail />}
        />
      </Routes>
    </Router>
  );
};

export default App;
