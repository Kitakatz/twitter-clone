import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screens from './components/screens';
import Providers from './contexts';
import Private from './components/auth/Private';
import Public from './components/auth/Public';

const App = () => {
  const HomeScreenElement: React.ReactElement = (
    <Private>
      <Providers.ReplyOverlayProvider>   
        <Providers.GiphyOverlay>
          <Providers.TweetsProvider>
            <Screens.Home />
          </Providers.TweetsProvider>
        </Providers.GiphyOverlay>
      </Providers.ReplyOverlayProvider>
    </Private>
  );

  const DetailScreenElement: React.ReactElement = (
    <Private>
      <Providers.ReplyOverlayProvider>
        <Providers.GiphyOverlay>
          <Providers.TweetsProvider>
            <Screens.Detail />
          </Providers.TweetsProvider>
        </Providers.GiphyOverlay>
      </Providers.ReplyOverlayProvider>
    </Private>
  );

  const LoginScreenElement: React.ReactElement = (
      <Providers.Authenticated>
        <Public>
          <Screens.Login />
        </Public>
      </Providers.Authenticated> 
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
        <Route 
          path='/auth/login'
          element={LoginScreenElement}
        />
      </Routes>
    </Router>
  );
};

export default App;
