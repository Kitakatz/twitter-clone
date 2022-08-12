import React from 'react';
import './App.css';
import Cards from './components/cards';
import Containers from './components/containers';

const App = () => {
  return (
    <div className='App'>
      <Containers.Home>
        <Containers.Feed>
          <Cards.Feed />
        </Containers.Feed>
      </Containers.Home>
    </div>
  );
};

export default App;
