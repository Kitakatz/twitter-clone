import React from 'react';
import Containers from '../../containers';
import Cards from '../../cards';
import Overlays from '../../overlays';
import { HomeScreenProps } from './interfaces';
import { Tweet } from '../../../data/tweets';
import useHomeScreenHook from './hook';

const Home: React.FC<HomeScreenProps> = (props): React.ReactElement => {
  const { state } = useHomeScreenHook();

  const renderItems = (): React.ReactElement[] => {
    const items = state.tweets.map((tweet: Tweet) => {
      return (
        <Cards.Feed tweet={tweet} />
      );
    });
    return items;
  };

  return (
    <div className='App'>
      {/* Overlays */}
      <Overlays.Reply />
      <Containers.Home>
        { !state.loading ? <div data-testid='tweets'>{renderItems()}</div> : 'Loading tweets...' }
      </Containers.Home>
    </div>
  );
};

export default Home;