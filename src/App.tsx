import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screens from './components/screens';
import Providers from './contexts';
import GlobalProviders from './components/providers';
import Protected from './components/auth/Protected';
import Public from './components/auth/Public';

const App = () => {
  const HomeScreenElement: React.ReactElement = (
    <Providers.Authenticated>
      <GlobalProviders.SilentRefresh>
        <GlobalProviders.Storage>
          <Protected>
            <Providers.ReplyOverlayProvider>   
              <Providers.GiphyOverlay>
                <Providers.TweetsProvider>
                  <Screens.Home />
                </Providers.TweetsProvider>
              </Providers.GiphyOverlay>
            </Providers.ReplyOverlayProvider>
          </Protected>
        </GlobalProviders.Storage>
      </GlobalProviders.SilentRefresh>
    </Providers.Authenticated>
  );

  const DetailScreenElement: React.ReactElement = (
    <Providers.Authenticated>
      <Protected>
        <Providers.ReplyOverlayProvider>
          <Providers.GiphyOverlay>
            <Providers.TweetsProvider>
              <Screens.Detail />
            </Providers.TweetsProvider>
          </Providers.GiphyOverlay>
        </Providers.ReplyOverlayProvider>
      </Protected>
    </Providers.Authenticated>
  );

  const LoginScreenElement: React.ReactElement = (
    <Providers.Authenticated>
      <GlobalProviders.Storage>
        <Public>
          <Screens.Login />
        </Public>
      </GlobalProviders.Storage>
    </Providers.Authenticated> 
  );

  const RegisterScreenElement: React.ReactElement = (
    <Providers.Authenticated>
      <GlobalProviders.Storage>
        <Public>
          <Screens.Register />
        </Public>
      </GlobalProviders.Storage>
    </Providers.Authenticated> 
  );

  const VerifyScreenElement: React.ReactElement = (
    <Providers.Authenticated>
      <GlobalProviders.Storage>
        <Public>
          <Screens.Verify />
        </Public>
      </GlobalProviders.Storage>
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
        <Route 
          path='/auth/register'
          element={RegisterScreenElement}
          />
          <Route 
          path='/auth/verify'
          element={VerifyScreenElement}
          />
      </Routes>
    </Router>
  );
};

export default App;
