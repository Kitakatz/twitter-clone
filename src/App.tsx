import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screens from './components/screens';
import Providers from './contexts';

const App = () => {
  const HomeScreenElement: React.ReactElement = (
    <Providers.ReplyOverlayProvider>   
      <Screens.Home />
    </Providers.ReplyOverlayProvider>
  );

  const DetailScreenElement: React.ReactElement = (
    <Providers.ReplyOverlayProvider>
      <Providers.TweetsProvider>
        <Screens.Detail />
      </Providers.TweetsProvider>
    </Providers.ReplyOverlayProvider>
  );

  return (
    <Router>
      <Routes>
        <Route 
          path='/home'
          element={HomeScreenElement}
        />
        <Route 
          path='/home/detail/:id'
          element={DetailScreenElement}
        />
      </Routes>
    </Router>
  );
};

export default App;
