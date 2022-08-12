import React from 'react';
import Home from './Home';
import { HomeProps } from './Home/interfaces';
import Feed from './Feed';
import { FeedProps } from './Feed/interfaces';

const Containers: { 
  Home: React.FC<HomeProps>, 
  Feed: React.FC<FeedProps>
} = (): void => {
};

Containers.Home = Home;
Containers.Feed = Feed

export default Containers;