import React from 'react';
import Cards from '..';
import { FeedProps } from './interfaces';
import './style.css';

const Feed: React.FC<FeedProps> = (): React.ReactElement => {
  return (
    <div className='card-container'>    
      <Cards.Avatar />
      <Cards.Content />
    </div>
  );
};

export default Feed;