import React from 'react';
import Containers from '../../containers';
import Cards from '../../cards';
import Overlays from '../../overlays';
import { DetailProps } from './interfaces';
import useDetailScreenHook from './hook';
import Lists from '../../lists';

const Detail: React.FC<DetailProps> = (props): React.ReactElement | null => {
  const { state } = useDetailScreenHook();

  if (state.loading) return null;

  return (
    <div 
      data-testid='detail-screen' 
      className='App'
    >
      {/* Overlays */}
      <Overlays.Reply />
      <Containers.Home>
        <Cards.Detail tweet={state.tweet} />
        <Lists.DetailTweets items={state.tweet.replies} />
      </Containers.Home>
    </div>
  );
};

export default Detail;