import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screens from './components/screens';
import Providers from './contexts';
import Private from './components/auth/Private';
import Public from './components/auth/Public';
// import { AuthenticatedContext } from './contexts/Authenticated';

const App = () => {
  // const [timer, setTimer] = useState<number>(20);
  // const { dispatch } = useContext(AuthenticatedContext);

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

  const RegisterScreenElement: React.ReactElement = (
    <Providers.Authenticated>
      <Public>
        <Screens.Register />
      </Public>
    </Providers.Authenticated> 
  );

  const VerifyScreenElement: React.ReactElement = (
    <Providers.Authenticated>
      <Public>
        <Screens.Verify />
      </Public>
    </Providers.Authenticated> 
  );

  // useEffect(() => {
  //   if (timer === 0) {
  //     dispatch({ type: 'LOGOUT' });
  //   };

  //   const ticker = setTimeout(() => {
  //     setTimer(timer - 1);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(ticker);
  //   };
  // }, [timer]);

  // console.log('timer: ', timer);

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
