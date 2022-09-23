import React from 'react';
import Cards from '..';
import Button from './Button';
import { FeedProps } from './interfaces';
import './style.css';

const Feed: React.FC<FeedProps> = (): React.ReactElement => {
  return (
    <div className='card-container'>   
      <div className='column'>
        <Cards.Avatar />
      </div>
      <div className='column'>
        <Cards.Content /> 
        <div className='buttons-container' data-testid= 'custom-element'>
          <Button.Like />
          <div className='square'></div>
          <div className='square'></div>
          <div className='square'></div>
        </div>
      </div> 
    </div>
  );
};

export default Feed;